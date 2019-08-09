import { List as _List_ } from "@aws-sdk/types";
import { _LaunchTemplateElasticInferenceAccelerator } from "./_LaunchTemplateElasticInferenceAccelerator";

export const _LaunchTemplateElasticInferenceAcceleratorList: _List_ = {
  type: "list",
  member: {
    shape: _LaunchTemplateElasticInferenceAccelerator,
    locationName: "item"
  }
};
