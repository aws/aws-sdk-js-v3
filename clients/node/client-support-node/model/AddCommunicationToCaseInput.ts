import { _CcEmailAddressList } from "./_CcEmailAddressList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AddCommunicationToCaseInput: _Structure_ = {
  type: "structure",
  required: ["communicationBody"],
  members: {
    caseId: {
      shape: {
        type: "string"
      }
    },
    communicationBody: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ccEmailAddresses: {
      shape: _CcEmailAddressList
    },
    attachmentSetId: {
      shape: {
        type: "string"
      }
    }
  }
};
