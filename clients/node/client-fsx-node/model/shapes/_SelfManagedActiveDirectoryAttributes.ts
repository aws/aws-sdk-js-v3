import { _DnsIps } from "./_DnsIps";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SelfManagedActiveDirectoryAttributes: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DomainName: {
      shape: {
        type: "string"
      }
    },
    OrganizationalUnitDistinguishedName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    FileSystemAdministratorsGroup: {
      shape: {
        type: "string",
        min: 1
      }
    },
    UserName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DnsIps: {
      shape: _DnsIps
    }
  }
};
