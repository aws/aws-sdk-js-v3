import { _MapOf__string } from "./_MapOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ApplicationResponse: _Structure_ = {
  type: "structure",
  required: ["Id", "Arn", "Name"],
  members: {
    Arn: {
      shape: {
        type: "string"
      }
    },
    Id: {
      shape: {
        type: "string"
      }
    },
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
