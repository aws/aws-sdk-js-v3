import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ClusterParameterStatus: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ParameterName: {
      shape: {
        type: "string"
      }
    },
    ParameterApplyStatus: {
      shape: {
        type: "string"
      }
    },
    ParameterApplyErrorDescription: {
      shape: {
        type: "string"
      }
    }
  }
};
