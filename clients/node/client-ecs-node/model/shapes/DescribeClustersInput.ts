import { _StringList } from "./_StringList";
import { _ClusterFieldList } from "./_ClusterFieldList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeClustersInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    clusters: {
      shape: _StringList
    },
    include: {
      shape: _ClusterFieldList
    }
  }
};
