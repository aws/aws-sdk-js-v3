import { _RecentCaseCommunications } from "./_RecentCaseCommunications";
import { _CcEmailAddressList } from "./_CcEmailAddressList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CaseDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    caseId: {
      shape: {
        type: "string"
      }
    },
    displayId: {
      shape: {
        type: "string"
      }
    },
    subject: {
      shape: {
        type: "string"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    serviceCode: {
      shape: {
        type: "string"
      }
    },
    categoryCode: {
      shape: {
        type: "string"
      }
    },
    severityCode: {
      shape: {
        type: "string"
      }
    },
    submittedBy: {
      shape: {
        type: "string"
      }
    },
    timeCreated: {
      shape: {
        type: "string"
      }
    },
    recentCommunications: {
      shape: _RecentCaseCommunications
    },
    ccEmailAddresses: {
      shape: _CcEmailAddressList
    },
    language: {
      shape: {
        type: "string"
      }
    }
  }
};
