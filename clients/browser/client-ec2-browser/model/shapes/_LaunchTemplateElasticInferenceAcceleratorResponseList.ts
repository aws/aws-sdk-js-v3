import { List as _List_ } from "@aws-sdk/types";
import { _LaunchTemplateElasticInferenceAcceleratorResponse } from "./_LaunchTemplateElasticInferenceAcceleratorResponse";

export const _LaunchTemplateElasticInferenceAcceleratorResponseList: _List_ = {
  type: "list",
  member: {
    shape: _LaunchTemplateElasticInferenceAcceleratorResponse,
    locationName: "item"
  }
};
