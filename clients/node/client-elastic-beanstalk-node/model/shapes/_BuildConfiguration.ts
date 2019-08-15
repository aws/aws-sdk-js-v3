import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BuildConfiguration: _Structure_ = {
  type: "structure",
  required: ["CodeBuildServiceRole", "Image"],
  members: {
    ArtifactName: {
      shape: {
        type: "string"
      }
    },
    CodeBuildServiceRole: {
      shape: {
        type: "string"
      }
    },
    ComputeType: {
      shape: {
        type: "string"
      }
    },
    Image: {
      shape: {
        type: "string"
      }
    },
    TimeoutInMinutes: {
      shape: {
        type: "integer"
      }
    }
  }
};
