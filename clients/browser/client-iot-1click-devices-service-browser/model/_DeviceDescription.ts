import { _DeviceAttributes } from "./_DeviceAttributes";
import { ___mapOf__string } from "./___mapOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeviceDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Arn: {
      shape: {
        type: "string"
      },
      locationName: "arn"
    },
    Attributes: {
      shape: _DeviceAttributes,
      locationName: "attributes"
    },
    DeviceId: {
      shape: {
        type: "string"
      },
      locationName: "deviceId"
    },
    Enabled: {
      shape: {
        type: "boolean"
      },
      locationName: "enabled"
    },
    RemainingLife: {
      shape: {
        type: "float"
      },
      locationName: "remainingLife"
    },
    Type: {
      shape: {
        type: "string"
      },
      locationName: "type"
    },
    Tags: {
      shape: ___mapOf__string,
      locationName: "tags"
    }
  }
};
