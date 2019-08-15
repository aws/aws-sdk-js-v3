import { _ResponsePartitionKeyList } from "./_ResponsePartitionKeyList";
import { _DimensionKeyDescriptionList } from "./_DimensionKeyDescriptionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDimensionKeysOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AlignedStartTime: {
      shape: {
        type: "timestamp"
      }
    },
    AlignedEndTime: {
      shape: {
        type: "timestamp"
      }
    },
    PartitionKeys: {
      shape: _ResponsePartitionKeyList
    },
    Keys: {
      shape: _DimensionKeyDescriptionList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
