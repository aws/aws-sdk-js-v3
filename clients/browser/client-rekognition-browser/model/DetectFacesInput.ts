import { _Image } from "./_Image";
import { _Attributes } from "./_Attributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DetectFacesInput: _Structure_ = {
  type: "structure",
  required: ["Image"],
  members: {
    Image: {
      shape: _Image
    },
    Attributes: {
      shape: _Attributes
    }
  }
};
