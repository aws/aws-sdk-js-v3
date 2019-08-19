import { Map as _Map_ } from "@aws-sdk/types";
import { _LogPublishingOption } from "./_LogPublishingOption";

export const _LogPublishingOptions: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _LogPublishingOption
  }
};
