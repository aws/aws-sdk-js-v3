import { _S3ApplicationCodeLocationDescription } from "./_S3ApplicationCodeLocationDescription";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CodeContentDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TextContent: {
      shape: {
        type: "string"
      }
    },
    CodeMD5: {
      shape: {
        type: "string",
        min: 128
      }
    },
    CodeSize: {
      shape: {
        type: "integer"
      }
    },
    S3ApplicationCodeLocationDescription: {
      shape: _S3ApplicationCodeLocationDescription
    }
  }
};
