// smithy-typescript generated code
import { list, map } from "@smithy/core/schema";

import { _AVL, _EAVM, AttributeValue, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AttributeValueList = list(n0, _AVL, 0, () => AttributeValue);
export var ExpressionAttributeNameMap = 128 | 0;

export var ExpressionAttributeValueMap = map(n0, _EAVM, 0, 0, () => AttributeValue);
