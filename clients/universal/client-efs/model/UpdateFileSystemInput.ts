import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateFileSystemInput: _Structure_ = {
  type: "structure",
  required: ["FileSystemId"],
  members: {
    FileSystemId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "FileSystemId"
    },
    ThroughputMode: {
      shape: {
        type: "string"
      }
    },
    ProvisionedThroughputInMibps: {
      shape: {
        type: "float",
        min: 1
      }
    }
  }
};
