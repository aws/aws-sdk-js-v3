import { _thumbprintListType } from "./_thumbprintListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateOpenIDConnectProviderThumbprintInput: _Structure_ = {
  type: "structure",
  required: ["OpenIDConnectProviderArn", "ThumbprintList"],
  members: {
    OpenIDConnectProviderArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    ThumbprintList: {
      shape: _thumbprintListType
    }
  }
};
