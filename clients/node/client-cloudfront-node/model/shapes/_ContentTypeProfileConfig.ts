import { _ContentTypeProfiles } from "./_ContentTypeProfiles";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ContentTypeProfileConfig: _Structure_ = {
  type: "structure",
  required: ["ForwardWhenContentTypeIsUnknown"],
  members: {
    ForwardWhenContentTypeIsUnknown: {
      shape: {
        type: "boolean"
      }
    },
    ContentTypeProfiles: {
      shape: _ContentTypeProfiles
    }
  }
};
