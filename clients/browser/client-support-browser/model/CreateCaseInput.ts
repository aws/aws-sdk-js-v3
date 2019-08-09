import { _CcEmailAddressList } from "./_CcEmailAddressList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateCaseInput: _Structure_ = {
  type: "structure",
  required: ["subject", "communicationBody"],
  members: {
    subject: {
      shape: {
        type: "string"
      }
    },
    serviceCode: {
      shape: {
        type: "string"
      }
    },
    severityCode: {
      shape: {
        type: "string"
      }
    },
    categoryCode: {
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
    language: {
      shape: {
        type: "string"
      }
    },
    issueType: {
      shape: {
        type: "string"
      }
    },
    attachmentSetId: {
      shape: {
        type: "string"
      }
    }
  }
};
