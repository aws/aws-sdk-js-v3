import { _TagKeys } from "./_TagKeys";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UntagResourceInput: _Structure_ = {
  type: "structure",
  required: ["Resource", "TagKeys"],
  members: {
    Resource: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "Resource"
    },
    TagKeys: {
      shape: _TagKeys,
      locationName: "TagKeys",
      xmlNamespace: {
        uri: "http://cloudfront.amazonaws.com/doc/2019-03-26/"
      }
    }
  },
  payload: "TagKeys"
};
