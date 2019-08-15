import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetTerminologyInput: _Structure_ = {
  type: "structure",
  required: ["Name", "TerminologyDataFormat"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TerminologyDataFormat: {
      shape: {
        type: "string"
      }
    }
  }
};
