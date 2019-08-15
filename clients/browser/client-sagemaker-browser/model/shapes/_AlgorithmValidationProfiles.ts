import { List as _List_ } from "@aws-sdk/types";
import { _AlgorithmValidationProfile } from "./_AlgorithmValidationProfile";

export const _AlgorithmValidationProfiles: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _AlgorithmValidationProfile
  }
};
