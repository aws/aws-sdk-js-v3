import { Structure as _Structure_ } from "@aws-sdk/types";

export const SwapEnvironmentCNAMEsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SourceEnvironmentId: {
      shape: {
        type: "string"
      }
    },
    SourceEnvironmentName: {
      shape: {
        type: "string",
        min: 4
      }
    },
    DestinationEnvironmentId: {
      shape: {
        type: "string"
      }
    },
    DestinationEnvironmentName: {
      shape: {
        type: "string",
        min: 4
      }
    }
  }
};
