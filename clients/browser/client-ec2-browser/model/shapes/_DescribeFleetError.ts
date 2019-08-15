import { _LaunchTemplateAndOverridesResponse } from "./_LaunchTemplateAndOverridesResponse";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DescribeFleetError: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LaunchTemplateAndOverrides: {
      shape: _LaunchTemplateAndOverridesResponse,
      locationName: "launchTemplateAndOverrides"
    },
    Lifecycle: {
      shape: {
        type: "string"
      },
      locationName: "lifecycle"
    },
    ErrorCode: {
      shape: {
        type: "string"
      },
      locationName: "errorCode"
    },
    ErrorMessage: {
      shape: {
        type: "string"
      },
      locationName: "errorMessage"
    }
  }
};
