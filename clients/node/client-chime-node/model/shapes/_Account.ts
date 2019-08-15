import { _LicenseList } from "./_LicenseList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Account: _Structure_ = {
  type: "structure",
  required: ["AwsAccountId", "AccountId", "Name"],
  members: {
    AwsAccountId: {
      shape: {
        type: "string"
      }
    },
    AccountId: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    AccountType: {
      shape: {
        type: "string"
      }
    },
    CreatedTimestamp: {
      shape: {
        type: "timestamp",
        timestampFormat: "iso8601"
      }
    },
    DefaultLicense: {
      shape: {
        type: "string"
      }
    },
    SupportedLicenses: {
      shape: _LicenseList
    }
  }
};
