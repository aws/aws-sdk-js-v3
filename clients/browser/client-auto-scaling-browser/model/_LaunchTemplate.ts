import { _LaunchTemplateSpecification } from "./_LaunchTemplateSpecification";
import { _Overrides } from "./_Overrides";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LaunchTemplate: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LaunchTemplateSpecification: {
      shape: _LaunchTemplateSpecification
    },
    Overrides: {
      shape: _Overrides
    }
  }
};
