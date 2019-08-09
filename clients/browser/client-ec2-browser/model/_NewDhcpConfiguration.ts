import { _ValueStringList } from "./_ValueStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NewDhcpConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Key: {
      shape: {
        type: "string"
      },
      locationName: "key"
    },
    Values: {
      shape: _ValueStringList,
      locationName: "Value"
    }
  }
};
