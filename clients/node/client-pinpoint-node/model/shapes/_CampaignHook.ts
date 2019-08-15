import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CampaignHook: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LambdaFunctionName: {
      shape: {
        type: "string"
      }
    },
    Mode: {
      shape: {
        type: "string"
      }
    },
    WebUrl: {
      shape: {
        type: "string"
      }
    }
  }
};
