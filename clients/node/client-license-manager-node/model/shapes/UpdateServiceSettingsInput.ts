import { _OrganizationConfiguration } from "./_OrganizationConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateServiceSettingsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    S3BucketArn: {
      shape: {
        type: "string"
      }
    },
    SnsTopicArn: {
      shape: {
        type: "string"
      }
    },
    OrganizationConfiguration: {
      shape: _OrganizationConfiguration
    },
    EnableCrossAccountsDiscovery: {
      shape: {
        type: "boolean"
      }
    }
  }
};
