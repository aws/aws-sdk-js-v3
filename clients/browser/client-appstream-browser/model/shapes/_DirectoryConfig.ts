import { _OrganizationalUnitDistinguishedNamesList } from "./_OrganizationalUnitDistinguishedNamesList";
import { _ServiceAccountCredentials } from "./_ServiceAccountCredentials";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DirectoryConfig: _Structure_ = {
  type: "structure",
  required: ["DirectoryName"],
  members: {
    DirectoryName: {
      shape: {
        type: "string"
      }
    },
    OrganizationalUnitDistinguishedNames: {
      shape: _OrganizationalUnitDistinguishedNamesList
    },
    ServiceAccountCredentials: {
      shape: _ServiceAccountCredentials
    },
    CreatedTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
