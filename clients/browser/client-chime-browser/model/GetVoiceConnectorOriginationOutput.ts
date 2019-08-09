import { _Origination } from "./_Origination";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetVoiceConnectorOriginationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Origination: {
      shape: _Origination
    }
  }
};
