import { _ResourceConfiguration } from "./_ResourceConfiguration";
import { _Variables } from "./_Variables";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ContainerDatasetAction: _Structure_ = {
  type: "structure",
  required: ["image", "executionRoleArn", "resourceConfiguration"],
  members: {
    image: {
      shape: {
        type: "string"
      }
    },
    executionRoleArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    resourceConfiguration: {
      shape: _ResourceConfiguration
    },
    variables: {
      shape: _Variables
    }
  }
};
