import { _CrlConfiguration } from "./_CrlConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RevocationConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CrlConfiguration: {
      shape: _CrlConfiguration
    }
  }
};
