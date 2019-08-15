import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UploadListElement: _Structure_ = {
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
    }
  }
};
