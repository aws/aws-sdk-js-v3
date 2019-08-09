import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateCloudFormationChangeSetOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ApplicationId: {
      shape: {
        type: "string"
      },
      locationName: "applicationId"
    },
    ChangeSetId: {
      shape: {
        type: "string"
      },
      locationName: "changeSetId"
    },
    SemanticVersion: {
      shape: {
        type: "string"
      },
      locationName: "semanticVersion"
    },
    StackId: {
      shape: {
        type: "string"
      },
      locationName: "stackId"
    }
  }
};
