import { _AttributeListType } from "./_AttributeListType";
import { _MFAOptionListType } from "./_MFAOptionListType";
import { _UserMFASettingListType } from "./_UserMFASettingListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetUserOutput: _Structure_ = {
  type: "structure",
  required: ["Username", "UserAttributes"],
  members: {
    Username: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
    UserAttributes: {
      shape: _AttributeListType
    },
    MFAOptions: {
      shape: _MFAOptionListType
    },
    PreferredMfaSetting: {
      shape: {
        type: "string"
      }
    },
    UserMFASettingList: {
      shape: _UserMFASettingListType
    }
  }
};
