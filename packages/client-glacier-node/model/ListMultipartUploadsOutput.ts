import { _UploadsList } from "./_UploadsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListMultipartUploadsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UploadsList: {
      shape: _UploadsList
    },
    Marker: {
      shape: {
        type: "string"
      }
    }
  }
};
