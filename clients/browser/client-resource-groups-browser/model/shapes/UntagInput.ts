import { _TagKeyList } from "./_TagKeyList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UntagInput: _Structure_ = {
  type: "structure",
  required: ["Arn", "Keys"],
  members: {
    Arn: {
      shape: {
        type: "string",
        min: 12
      },
      location: "uri",
      locationName: "Arn"
    },
    Keys: {
      shape: _TagKeyList
    }
  }
};
