import { _Content } from "./_Content";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Body: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Text: {
      shape: _Content
    },
    Html: {
      shape: _Content
    }
  }
};
