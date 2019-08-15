import { _ListOfString } from "./_ListOfString";
import { _MapOfStringToString } from "./_MapOfStringToString";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateVpcLinkInput: _Structure_ = {
  type: "structure",
  required: ["name", "targetArns"],
  members: {
    name: {
      shape: {
        type: "string"
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    targetArns: {
      shape: _ListOfString
    },
    tags: {
      shape: _MapOfStringToString
    }
  }
};
