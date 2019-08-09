import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeCustomKeyStoresInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CustomKeyStoreId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CustomKeyStoreName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Limit: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    Marker: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
