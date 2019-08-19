import { _Image } from "./_Image";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteImageOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Image: {
      shape: _Image
    }
  }
};
