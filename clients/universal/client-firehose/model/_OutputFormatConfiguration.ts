import { _Serializer } from "./_Serializer";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OutputFormatConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Serializer: {
      shape: _Serializer
    }
  }
};
