import { ___listOf__string } from "./___listOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Messages: _Structure_ = {
  type: "structure",
  required: ["Errors"],
  members: {
    Errors: {
      shape: ___listOf__string,
      locationName: "errors"
    }
  }
};
