import { _AttributeListType } from "./_AttributeListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeviceType: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DeviceKey: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DeviceAttributes: {
      shape: _AttributeListType
    },
    DeviceCreateDate: {
      shape: {
        type: "timestamp"
      }
    },
    DeviceLastModifiedDate: {
      shape: {
        type: "timestamp"
      }
    },
    DeviceLastAuthenticatedDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
