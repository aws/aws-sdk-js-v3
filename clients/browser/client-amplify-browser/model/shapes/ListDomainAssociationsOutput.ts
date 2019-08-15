import { _DomainAssociations } from "./_DomainAssociations";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDomainAssociationsOutput: _Structure_ = {
  type: "structure",
  required: ["domainAssociations"],
  members: {
    domainAssociations: {
      shape: _DomainAssociations
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
