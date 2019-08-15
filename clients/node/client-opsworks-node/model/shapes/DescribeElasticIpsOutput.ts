import { _ElasticIps } from "./_ElasticIps";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeElasticIpsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ElasticIps: {
      shape: _ElasticIps
    }
  }
};
