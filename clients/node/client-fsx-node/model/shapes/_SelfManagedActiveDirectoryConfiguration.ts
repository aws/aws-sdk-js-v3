import { _DnsIps } from "./_DnsIps";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SelfManagedActiveDirectoryConfiguration: _Structure_ = {
  type: "structure",
  required: ["DomainName", "UserName", "Password", "DnsIps"],
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
    Password: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
    DnsIps: {
      shape: _DnsIps
    }
  }
};
