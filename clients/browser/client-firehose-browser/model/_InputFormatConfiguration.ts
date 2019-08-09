import { _Deserializer } from "./_Deserializer";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InputFormatConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Deserializer: {
      shape: _Deserializer
    }
  }
};
