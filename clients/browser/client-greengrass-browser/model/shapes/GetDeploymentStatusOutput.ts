import { _ErrorDetails } from "./_ErrorDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDeploymentStatusOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DeploymentStatus: {
      shape: {
        type: "string"
      }
    },
    DeploymentType: {
      shape: {
        type: "string"
      }
    },
    ErrorDetails: {
      shape: _ErrorDetails
    },
    ErrorMessage: {
      shape: {
        type: "string"
      }
    },
    UpdatedAt: {
      shape: {
        type: "string"
      }
    }
  }
};
