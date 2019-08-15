import { _FileSystemDescriptions } from "./_FileSystemDescriptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeFileSystemsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    FileSystems: {
      shape: _FileSystemDescriptions
    },
    NextMarker: {
      shape: {
        type: "string"
      }
    }
  }
};
