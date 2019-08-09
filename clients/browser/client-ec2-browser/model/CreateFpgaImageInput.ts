import { _StorageLocation } from "./_StorageLocation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateFpgaImageInput: _Structure_ = {
  type: "structure",
  required: ["InputStorageLocation"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    InputStorageLocation: {
      shape: _StorageLocation
    },
    LogsStorageLocation: {
      shape: _StorageLocation
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    ClientToken: {
      shape: {
        type: "string"
      }
    }
  }
};
