import { _ResponseError } from "./_ResponseError";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeleteLaunchTemplateVersionsResponseErrorItem: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LaunchTemplateId: {
      shape: {
        type: "string"
      },
      locationName: "launchTemplateId"
    },
    LaunchTemplateName: {
      shape: {
        type: "string"
      },
      locationName: "launchTemplateName"
    },
    VersionNumber: {
      shape: {
        type: "integer"
      },
      locationName: "versionNumber"
    },
    ResponseError: {
      shape: _ResponseError,
      locationName: "responseError"
    }
  }
};
