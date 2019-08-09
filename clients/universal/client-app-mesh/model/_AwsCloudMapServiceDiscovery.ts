import { _AwsCloudMapInstanceAttributes } from "./_AwsCloudMapInstanceAttributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AwsCloudMapServiceDiscovery: _Structure_ = {
  type: "structure",
  required: ["namespaceName", "serviceName"],
  members: {
    attributes: {
      shape: _AwsCloudMapInstanceAttributes
    },
    namespaceName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    serviceName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
