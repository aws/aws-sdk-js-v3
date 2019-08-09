import { _DkimAttributes } from "./_DkimAttributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateEmailIdentityOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    IdentityType: {
      shape: {
        type: "string"
      }
    },
    VerifiedForSendingStatus: {
      shape: {
        type: "boolean"
      }
    },
    DkimAttributes: {
      shape: _DkimAttributes
    }
  }
};
