import { _AttributeListType } from "./_AttributeListType";
import { _MFAOptionListType } from "./_MFAOptionListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UserType: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Username: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
    Attributes: {
      shape: _AttributeListType
    },
    UserCreateDate: {
      shape: {
        type: "timestamp"
      }
    },
    UserLastModifiedDate: {
      shape: {
        type: "timestamp"
      }
    },
    Enabled: {
      shape: {
        type: "boolean"
      }
    },
    UserStatus: {
      shape: {
        type: "string"
      }
    },
    MFAOptions: {
      shape: _MFAOptionListType
    }
  }
};
