import { _KeyPairList } from "./_KeyPairList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeKeyPairsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    KeyPairs: {
      shape: _KeyPairList,
      locationName: "keySet"
    }
  }
};
