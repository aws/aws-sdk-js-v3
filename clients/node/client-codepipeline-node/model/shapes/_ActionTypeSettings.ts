import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ActionTypeSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    thirdPartyConfigurationUrl: {
      shape: {
        type: "string",
        min: 1
      }
    },
    entityUrlTemplate: {
      shape: {
        type: "string",
        min: 1
      }
    },
    executionUrlTemplate: {
      shape: {
        type: "string",
        min: 1
      }
    },
    revisionUrlTemplate: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
