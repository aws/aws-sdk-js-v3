import { _ContactDetail } from "./_ContactDetail";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RegisterDomainInput: _Structure_ = {
  type: "structure",
  required: [
    "DomainName",
    "DurationInYears",
    "AdminContact",
    "RegistrantContact",
    "TechContact"
  ],
  members: {
    DomainName: {
      shape: {
        type: "string"
      }
    },
    IdnLangCode: {
      shape: {
        type: "string"
      }
    },
    DurationInYears: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    AutoRenew: {
      shape: {
        type: "boolean"
      }
    },
    AdminContact: {
      shape: _ContactDetail
    },
    RegistrantContact: {
      shape: _ContactDetail
    },
    TechContact: {
      shape: _ContactDetail
    },
    PrivacyProtectAdminContact: {
      shape: {
        type: "boolean"
      }
    },
    PrivacyProtectRegistrantContact: {
      shape: {
        type: "boolean"
      }
    },
    PrivacyProtectTechContact: {
      shape: {
        type: "boolean"
      }
    }
  }
};
