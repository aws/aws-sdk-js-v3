import { _AuditNotificationTargetConfigurations } from "./_AuditNotificationTargetConfigurations";
import { _AuditCheckConfigurations } from "./_AuditCheckConfigurations";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAccountAuditConfigurationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    roleArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    auditNotificationTargetConfigurations: {
      shape: _AuditNotificationTargetConfigurations
    },
    auditCheckConfigurations: {
      shape: _AuditCheckConfigurations
    }
  }
};
