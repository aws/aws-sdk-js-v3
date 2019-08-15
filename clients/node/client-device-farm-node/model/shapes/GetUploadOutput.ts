import { _Upload } from "./_Upload";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetUploadOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    upload: {
      shape: _Upload
    }
  }
};
