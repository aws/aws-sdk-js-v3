import { _Urls } from "./_Urls";
import { _ComparedFace } from "./_ComparedFace";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Celebrity: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Urls: {
      shape: _Urls
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    Id: {
      shape: {
        type: "string"
      }
    },
    Face: {
      shape: _ComparedFace
    },
    MatchConfidence: {
      shape: {
        type: "float"
      }
    }
  }
};
