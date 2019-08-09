import { _MapOf__string } from "./_MapOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CreateApplicationRequest: _Structure_ = {
  type: "structure",
  required: ["Name"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    tags: {
      shape: _MapOf__string,
      locationName: "tags"
    }
  }
};
