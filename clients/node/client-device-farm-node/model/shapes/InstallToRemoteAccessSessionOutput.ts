import { _Upload } from "./_Upload";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const InstallToRemoteAccessSessionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    appUpload: {
      shape: _Upload
    }
  }
};
