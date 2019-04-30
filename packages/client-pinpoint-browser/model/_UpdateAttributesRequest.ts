import { _ListOf__string } from "./_ListOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UpdateAttributesRequest: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Blacklist: {
      shape: _ListOf__string
    }
  }
};
