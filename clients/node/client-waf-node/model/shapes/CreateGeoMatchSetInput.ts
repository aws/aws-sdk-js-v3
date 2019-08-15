import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateGeoMatchSetInput: _Structure_ = {
  type: "structure",
  required: ["Name", "ChangeToken"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ChangeToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
