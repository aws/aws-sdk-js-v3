import { _LoggingOptionsPayload } from "./_LoggingOptionsPayload";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SetLoggingOptionsInput: _Structure_ = {
  type: "structure",
  required: ["loggingOptionsPayload"],
  members: {
    loggingOptionsPayload: {
      shape: _LoggingOptionsPayload
    }
  },
  payload: "loggingOptionsPayload"
};
