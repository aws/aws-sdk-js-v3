import { _LogPublishingOptions } from "./_LogPublishingOptions";
import { _OptionStatus } from "./_OptionStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LogPublishingOptionsStatus: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Options: {
      shape: _LogPublishingOptions
    },
    Status: {
      shape: _OptionStatus
    }
  }
};
