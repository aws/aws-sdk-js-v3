import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OptionSetting: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    Value: {
      shape: {
        type: "string"
      }
    },
    DefaultValue: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    ApplyType: {
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
        type: "boolean"
      }
    },
    IsCollection: {
      shape: {
        type: "boolean"
      }
    }
  }
};
