import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEngineDefaultParametersInput: _Structure_ = {
  type: "structure",
  required: ["CacheParameterGroupFamily"],
  members: {
    CacheParameterGroupFamily: {
      shape: {
        type: "string"
      }
    },
    MaxRecords: {
      shape: {
        type: "integer"
      }
    },
    Marker: {
      shape: {
        type: "string"
      }
    }
  }
};
