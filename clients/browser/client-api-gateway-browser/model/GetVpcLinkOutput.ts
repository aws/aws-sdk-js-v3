import { _ListOfString } from "./_ListOfString";
import { _MapOfStringToString } from "./_MapOfStringToString";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetVpcLinkOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    id: {
      shape: {
        type: "string"
      }
    },
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
    status: {
      shape: {
        type: "string"
      }
    },
    statusMessage: {
      shape: {
        type: "string"
      }
    },
    tags: {
      shape: _MapOfStringToString
    }
  }
};
