import { _Image } from "./_Image";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutImageOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    image: {
      shape: _Image
    }
  }
};
