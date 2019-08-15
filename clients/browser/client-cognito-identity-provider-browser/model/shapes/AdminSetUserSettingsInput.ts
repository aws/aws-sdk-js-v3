import { _MFAOptionListType } from "./_MFAOptionListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AdminSetUserSettingsInput: _Structure_ = {
  type: "structure",
  required: ["UserPoolId", "Username", "MFAOptions"],
  members: {
    UserPoolId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Username: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
    MFAOptions: {
      shape: _MFAOptionListType
    }
  }
};
