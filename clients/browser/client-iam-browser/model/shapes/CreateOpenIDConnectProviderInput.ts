import { _clientIDListType } from "./_clientIDListType";
import { _thumbprintListType } from "./_thumbprintListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateOpenIDConnectProviderInput: _Structure_ = {
  type: "structure",
  required: ["Url", "ThumbprintList"],
  members: {
    Url: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ClientIDList: {
      shape: _clientIDListType
    },
    ThumbprintList: {
      shape: _thumbprintListType
    }
  }
};
