import { List as _List_ } from "@aws-sdk/types";
import { _ProcessorFeature } from "./_ProcessorFeature";

export const _ProcessorFeatureList: _List_ = {
  type: "list",
  member: {
    shape: _ProcessorFeature,
    locationName: "ProcessorFeature"
  }
};
