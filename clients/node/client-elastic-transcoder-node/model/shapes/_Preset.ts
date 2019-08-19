import { _AudioParameters } from "./_AudioParameters";
import { _VideoParameters } from "./_VideoParameters";
import { _Thumbnails } from "./_Thumbnails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Preset: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string"
      }
    },
    Arn: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    Container: {
      shape: {
        type: "string"
      }
    },
    Audio: {
      shape: _AudioParameters
    },
    Video: {
      shape: _VideoParameters
    },
    Thumbnails: {
      shape: _Thumbnails
    },
    Type: {
      shape: {
        type: "string"
      }
    }
  }
};
