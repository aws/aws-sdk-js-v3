import { _InventoryConfigurationList } from "./_InventoryConfigurationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListBucketInventoryConfigurationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ContinuationToken: {
      shape: {
        type: "string"
      }
    },
    InventoryConfigurationList: {
      shape: _InventoryConfigurationList,
      locationName: "InventoryConfiguration"
    },
    IsTruncated: {
      shape: {
        type: "boolean"
      }
    },
    NextContinuationToken: {
      shape: {
        type: "string"
      }
    }
  }
};
