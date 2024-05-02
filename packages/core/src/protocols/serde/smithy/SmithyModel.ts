import { RuleSetObject } from "@smithy/types";

export interface ISmithyModel {
  smithy: "2.0";
  metadata: {
    suppressions: { id: string; namespace: string }[];
  };
  shapes: Record<ISmithyModelShapeId, ISmithyModelShape>;
}

export interface ISmithyModelShape {
  type: string;
}

export interface ISmithyModelServiceShape extends ISmithyModelShape {
  type: "service";
  version: string;
  operations: { target: ISmithyModelShapeId }[];
  traits: ISmithyModelTraits;
}

export interface ISmithyModelStructureShape extends ISmithyModelShape {
  type: "structure";
  members: {
    [memberName: string]: {
      target: ISmithyModelShapeId;
      traits: ISmithyModelTraits;
    };
  };
  traits: ISmithyModelTraits;
}

export interface ISmithyModelOperationShape extends ISmithyModelShape {
  type: "operation";
  input: {
    target: ISmithyModelShapeId;
  };
  output: {
    target: ISmithyModelShapeId;
  };
  errors: { target: ISmithyModelShapeId }[];
  traits: ISmithyModelTraits;
}

export type ISmithyModelTraits = {
  "smithy.api#http"?: {
    method: string;
    uri: string;
    code: number;
  };
  "smithy.api#httpLabel"?: {} | undefined;
  "smithy.api#httpHeader"?: string;
  "smithy.api#httpQuery"?: string;
  "smithy.api#httpPayload"?: {} | undefined;
  "smithy.api#jsonName"?: string;
  "smithy.api#httpResponseCode"?: {} | undefined;
  "smithy.rules#endpointRuleSet"?: RuleSetObject | undefined;
  "aws.api#service"?: {
    sdkId: string;
  };
  [traitName: string]: unknown;
};

export type ISmithyModelShapeId = `${string}#${string}`;

export class SmithyModel implements ISmithyModel {
  public smithy: ISmithyModel["smithy"];
  public metadata: ISmithyModel["metadata"];
  public shapes: ISmithyModel["shapes"];

  public static from(model: ISmithyModel) {
    if (model instanceof SmithyModel) {
      return model;
    }
    return new SmithyModel(model);
  }

  public constructor(public readonly _jsonObject: ISmithyModel) {
    this.smithy = _jsonObject.smithy;
    this.metadata = _jsonObject.metadata;
    this.shapes = _jsonObject.shapes;
  }
}
