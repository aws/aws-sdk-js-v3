import { _AwsVpcConfiguration } from "./_AwsVpcConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NetworkConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    awsvpcConfiguration: {
      shape: _AwsVpcConfiguration
    }
  }
};
