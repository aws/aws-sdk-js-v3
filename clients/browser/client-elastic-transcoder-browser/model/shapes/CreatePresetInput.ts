import { _VideoParameters } from "./_VideoParameters";
import { _AudioParameters } from "./_AudioParameters";
import { _Thumbnails } from "./_Thumbnails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreatePresetInput: _Structure_ = {
  type: "structure",
  required: ["Name", "Container"],
  members: {
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
    Video: {
      shape: _VideoParameters
    },
    Audio: {
      shape: _AudioParameters
    },
    Thumbnails: {
      shape: _Thumbnails
    }
  }
};
