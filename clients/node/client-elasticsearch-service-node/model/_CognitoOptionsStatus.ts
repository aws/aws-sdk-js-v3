import { _CognitoOptions } from "./_CognitoOptions";
import { _OptionStatus } from "./_OptionStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CognitoOptionsStatus: _Structure_ = {
  type: "structure",
  required: ["Options", "Status"],
  members: {
    Options: {
      shape: _CognitoOptions
    },
    Status: {
      shape: _OptionStatus
    }
  }
};
