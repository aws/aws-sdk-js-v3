import { _ProxyConfigurationProperties } from "./_ProxyConfigurationProperties";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ProxyConfiguration: _Structure_ = {
  type: "structure",
  required: ["containerName"],
  members: {
    type: {
      shape: {
        type: "string"
      }
    },
    containerName: {
      shape: {
        type: "string"
      }
    },
    properties: {
      shape: _ProxyConfigurationProperties
    }
  }
};
