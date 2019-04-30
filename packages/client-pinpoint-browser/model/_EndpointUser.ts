import { _MapOfListOf__string } from "./_MapOfListOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EndpointUser: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UserAttributes: {
      shape: _MapOfListOf__string
    },
    UserId: {
      shape: {
        type: "string"
      }
    }
  }
};
