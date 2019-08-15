import { Structure as _Structure_ } from "@aws-sdk/types";

export const ContainerInUseException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Message: {
      shape: {
        type: "string",
        min: 1
      }
    }
  },
  exceptionType: "ContainerInUseException"
};
