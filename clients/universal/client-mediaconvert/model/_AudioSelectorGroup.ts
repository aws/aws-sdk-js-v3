import { ___listOf__stringMin1 } from "./___listOf__stringMin1";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AudioSelectorGroup: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AudioSelectorNames: {
      shape: ___listOf__stringMin1,
      locationName: "audioSelectorNames"
    }
  }
};
