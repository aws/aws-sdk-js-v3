import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateBackupInput: _Structure_ = {
  type: "structure",
  required: ["FileSystemId"],
  members: {
    FileSystemId: {
      shape: {
        type: "string",
        min: 11
      }
    },
    ClientRequestToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Tags: {
      shape: _Tags
    }
  }
};
