import { _MapOfStringToString } from "./_MapOfStringToString";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GenerateClientCertificateInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    description: {
      shape: {
        type: "string"
      }
    },
    tags: {
      shape: _MapOfStringToString
    }
  }
};
