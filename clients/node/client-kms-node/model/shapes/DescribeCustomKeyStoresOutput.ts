import { _CustomKeyStoresList } from "./_CustomKeyStoresList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeCustomKeyStoresOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CustomKeyStores: {
      shape: _CustomKeyStoresList
    },
    NextMarker: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Truncated: {
      shape: {
        type: "boolean"
      }
    }
  }
};
