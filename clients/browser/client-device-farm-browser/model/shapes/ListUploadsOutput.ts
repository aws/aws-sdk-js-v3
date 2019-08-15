import { _Uploads } from "./_Uploads";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListUploadsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    uploads: {
      shape: _Uploads
    },
    nextToken: {
      shape: {
        type: "string",
        min: 4
      }
    }
  }
};
