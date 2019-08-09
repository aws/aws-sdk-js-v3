import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpgradeElasticsearchDomainInput: _Structure_ = {
  type: "structure",
  required: ["DomainName", "TargetVersion"],
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
