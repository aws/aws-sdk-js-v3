import { _DeleteLaunchTemplateVersionsResponseSuccessSet } from "./_DeleteLaunchTemplateVersionsResponseSuccessSet";
import { _DeleteLaunchTemplateVersionsResponseErrorSet } from "./_DeleteLaunchTemplateVersionsResponseErrorSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteLaunchTemplateVersionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SuccessfullyDeletedLaunchTemplateVersions: {
      shape: _DeleteLaunchTemplateVersionsResponseSuccessSet,
      locationName: "successfullyDeletedLaunchTemplateVersionSet"
    },
    UnsuccessfullyDeletedLaunchTemplateVersions: {
      shape: _DeleteLaunchTemplateVersionsResponseErrorSet,
      locationName: "unsuccessfullyDeletedLaunchTemplateVersionSet"
    }
  }
};
