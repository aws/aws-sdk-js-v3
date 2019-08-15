import { List as _List_ } from "@aws-sdk/types";
import { _AvailableProcessorFeature } from "./_AvailableProcessorFeature";

export const _AvailableProcessorFeatureList: _List_ = {
  type: "list",
  member: {
    shape: _AvailableProcessorFeature,
    locationName: "AvailableProcessorFeature"
  }
};
