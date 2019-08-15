import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TagResourceInput: _Structure_ = {
  type: "structure",
  required: ["Resource", "Tags"],
  members: {
    Resource: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "Resource"
    },
    Tags: {
      shape: _Tags,
      locationName: "Tags",
      xmlNamespace: {
        uri: "http://cloudfront.amazonaws.com/doc/2019-03-26/"
      }
    }
  },
  payload: "Tags"
};
