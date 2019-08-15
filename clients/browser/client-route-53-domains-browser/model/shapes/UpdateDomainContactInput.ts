import { _ContactDetail } from "./_ContactDetail";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateDomainContactInput: _Structure_ = {
  type: "structure",
  required: ["DomainName"],
  members: {
    DomainName: {
      shape: {
        type: "string"
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
    }
  }
};
