import type { AttributeValue as AttributeValueModel } from "@aws-sdk/client-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";

import {AttributePath} from "./AttributePath";
import {AttributeValue} from './AttributeValue';


export type AttributeName = string;
export type ExpressionAttributeNameMap = {[key: string]: AttributeName};
export type ExpressionAttributeValueMap = {
  [key: string]: AttributeValueModel;
};

/**
 * An object that manages expression attribute name and value substitution.
 */
export class ExpressionAttributes {
    readonly names: ExpressionAttributeNameMap = {};
    private readonly _values: Record<string, AttributeValue> = {}

    private readonly nameMap: {[attributeName: string]: string} = {};
    private _ctr = 0;

    /**
     * Add an attribute path to this substitution context.
     *
     * @returns The substitution value to use in the expression. The same
     * attribute name will always be converted to the same substitution value
     * when supplied to the same ExpressionAttributes object multiple times.
     */
    addName(path: AttributePath|string): string {
        if (AttributePath.isAttributePath(path)) {
            let escapedPath = '';
            for (const element of path.elements) {
                if (element.type === 'AttributeName') {
                    escapedPath += `.${this.addAttributeName(element.name)}`;
                } else {
                    escapedPath += `[${element.index}]`;
                }
            }

            return escapedPath.substring(1);
        }

        return this.addName(new AttributePath(path));
    }

    /**
     * Add an attribute value to this substitution context.
     *
     * @returns The substitution value to use in the expression.
     */
    addValue(value: any): string {
        const attrValue = AttributeValue.isAttributeValue(value) ? value : new AttributeValue(marshall(value) as AttributeValueModel);
        const substitution = `:val${this._ctr++}`;
        this._values[substitution] = attrValue;
        return substitution;
    }

    /**
    * 
    * Returns the AWS-native representation of all attribute values.
    */
    get values(): ExpressionAttributeValueMap {
        const native: ExpressionAttributeValueMap = {};
        for (const [key, val] of Object.entries(this._values)) {
            native[key] = val.marshalled;
        }
        return native;
    }


    private addAttributeName(attributeName: string): string {
        if (!(attributeName in this.nameMap)) {
            this.nameMap[attributeName] = `#attr${this._ctr++}`;
            this.names[this.nameMap[attributeName]] = attributeName;
        }
        return this.nameMap[attributeName];
    }
}
