import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DomainJoinInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DirectoryName: {
      shape: {
        type: "string"
      }
    },
    OrganizationalUnitDistinguishedName: {
      shape: {
        type: "string"
      }
    }
  }
};
