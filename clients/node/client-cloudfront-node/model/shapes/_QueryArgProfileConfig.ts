import { _QueryArgProfiles } from "./_QueryArgProfiles";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _QueryArgProfileConfig: _Structure_ = {
  type: "structure",
  required: ["ForwardWhenQueryArgProfileIsUnknown"],
  members: {
    ForwardWhenQueryArgProfileIsUnknown: {
      shape: {
        type: "boolean"
      }
    },
    QueryArgProfiles: {
      shape: _QueryArgProfiles
    }
  }
};
