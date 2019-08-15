import { ___listOf__string } from "./___listOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ParameterDefinition: _Structure_ = {
  type: "structure",
  required: ["ReferencedByResources", "Name"],
  members: {
    AllowedPattern: {
      shape: {
        type: "string"
      },
      locationName: "allowedPattern"
    },
    AllowedValues: {
      shape: ___listOf__string,
      locationName: "allowedValues"
    },
    ConstraintDescription: {
      shape: {
        type: "string"
      },
      locationName: "constraintDescription"
    },
    DefaultValue: {
      shape: {
        type: "string"
      },
      locationName: "defaultValue"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    MaxLength: {
      shape: {
        type: "integer"
      },
      locationName: "maxLength"
    },
    MaxValue: {
      shape: {
        type: "integer"
      },
      locationName: "maxValue"
    },
    MinLength: {
      shape: {
        type: "integer"
      },
      locationName: "minLength"
    },
    MinValue: {
      shape: {
        type: "integer"
      },
      locationName: "minValue"
    },
    Name: {
      shape: {
        type: "string"
      },
      locationName: "name"
    },
    NoEcho: {
      shape: {
        type: "boolean"
      },
      locationName: "noEcho"
    },
    ReferencedByResources: {
      shape: ___listOf__string,
      locationName: "referencedByResources"
    },
    Type: {
      shape: {
        type: "string"
      },
      locationName: "type"
    }
  }
};
