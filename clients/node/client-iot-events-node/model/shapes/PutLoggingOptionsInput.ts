import { _LoggingOptions } from "./_LoggingOptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutLoggingOptionsInput: _Structure_ = {
  type: "structure",
  required: ["loggingOptions"],
  members: {
    loggingOptions: {
      shape: _LoggingOptions
    }
  }
};
