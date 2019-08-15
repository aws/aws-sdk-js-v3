import { _ResourceQuota } from "./_ResourceQuota";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResourceQuotas: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ApplicationQuota: {
      shape: _ResourceQuota
    },
    ApplicationVersionQuota: {
      shape: _ResourceQuota
    },
    EnvironmentQuota: {
      shape: _ResourceQuota
    },
    ConfigurationTemplateQuota: {
      shape: _ResourceQuota
    },
    CustomPlatformQuota: {
      shape: _ResourceQuota
    }
  }
};
