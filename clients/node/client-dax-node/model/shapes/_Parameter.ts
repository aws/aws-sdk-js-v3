import { _NodeTypeSpecificValueList } from "./_NodeTypeSpecificValueList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Parameter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ParameterName: {
      shape: {
        type: "string"
      }
    },
    ParameterType: {
      shape: {
        type: "string"
      }
    },
    ParameterValue: {
      shape: {
        type: "string"
      }
    },
    NodeTypeSpecificValues: {
      shape: _NodeTypeSpecificValueList
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    Source: {
      shape: {
        type: "string"
      }
    },
    DataType: {
      shape: {
        type: "string"
      }
    },
    AllowedValues: {
      shape: {
        type: "string"
      }
    },
    IsModifiable: {
      shape: {
        type: "string"
      }
    },
    ChangeType: {
      shape: {
        type: "string"
      }
    }
  }
};
