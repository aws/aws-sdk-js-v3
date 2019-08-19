import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpgradeElasticsearchDomainOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DomainName: {
      shape: {
        type: "string",
        min: 3
      }
    },
    TargetVersion: {
      shape: {
        type: "string"
      }
    },
    PerformCheckOnly: {
      shape: {
        type: "boolean"
      }
    }
  }
};
