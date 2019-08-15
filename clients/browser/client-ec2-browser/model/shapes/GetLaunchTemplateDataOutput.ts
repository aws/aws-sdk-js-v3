import { _ResponseLaunchTemplateData } from "./_ResponseLaunchTemplateData";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetLaunchTemplateDataOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LaunchTemplateData: {
      shape: _ResponseLaunchTemplateData,
      locationName: "launchTemplateData"
    }
  }
};
