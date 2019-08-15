import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ParquetSerDe: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BlockSizeBytes: {
      shape: {
        type: "integer",
        min: 67108864
      }
    },
    PageSizeBytes: {
      shape: {
        type: "integer",
        min: 65536
      }
    },
    Compression: {
      shape: {
        type: "string"
      }
    },
    EnableDictionaryCompression: {
      shape: {
        type: "boolean"
      }
    },
    MaxPaddingBytes: {
      shape: {
        type: "integer"
      }
    },
    WriterVersion: {
      shape: {
        type: "string"
      }
    }
  }
};
