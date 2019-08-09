import { _PartList } from "./_PartList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPartsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MultipartUploadId: {
      shape: {
        type: "string"
      }
    },
    VaultARN: {
      shape: {
        type: "string"
      }
    },
    ArchiveDescription: {
      shape: {
        type: "string"
      }
    },
    PartSizeInBytes: {
      shape: {
        type: "integer"
      }
    },
    CreationDate: {
      shape: {
        type: "string"
      }
    },
    Parts: {
      shape: _PartList
    },
    Marker: {
      shape: {
        type: "string"
      }
    }
  }
};
