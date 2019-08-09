import { Structure as _Structure_ } from "@aws-sdk/types";

export const InvalidFormatFault: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    message: {
      shape: {
        type: "string",
        min: 1
      }
    }
  },
  exceptionType: "InvalidFormatFault",
  exceptionCode: "InvalidFormat"
};
