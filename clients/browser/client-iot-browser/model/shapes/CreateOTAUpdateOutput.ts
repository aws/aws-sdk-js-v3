import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateOTAUpdateOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    otaUpdateId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    awsIotJobId: {
      shape: {
        type: "string"
      }
    },
    otaUpdateArn: {
      shape: {
        type: "string"
      }
    },
    awsIotJobArn: {
      shape: {
        type: "string"
      }
    },
    otaUpdateStatus: {
      shape: {
        type: "string"
      }
    }
  }
};
