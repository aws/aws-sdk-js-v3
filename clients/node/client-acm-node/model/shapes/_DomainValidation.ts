import { _ValidationEmailList } from "./_ValidationEmailList";
import { _ResourceRecord } from "./_ResourceRecord";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DomainValidation: _Structure_ = {
  type: "structure",
  required: ["DomainName"],
  members: {
    DomainName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ValidationEmails: {
      shape: _ValidationEmailList
    },
    ValidationDomain: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ValidationStatus: {
      shape: {
        type: "string"
      }
    },
    ResourceRecord: {
      shape: _ResourceRecord
    },
    ValidationMethod: {
      shape: {
        type: "string"
      }
    }
  }
};
