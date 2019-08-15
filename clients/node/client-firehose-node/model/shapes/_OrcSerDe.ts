import { _ListOfNonEmptyStringsWithoutWhitespace } from "./_ListOfNonEmptyStringsWithoutWhitespace";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OrcSerDe: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StripeSizeBytes: {
      shape: {
        type: "integer",
        min: 8388608
      }
    },
    BlockSizeBytes: {
      shape: {
        type: "integer",
        min: 67108864
      }
    },
    RowIndexStride: {
      shape: {
        type: "integer",
        min: 1000
      }
    },
    EnablePadding: {
      shape: {
        type: "boolean"
      }
    },
    PaddingTolerance: {
      shape: {
        type: "float"
      }
    },
    Compression: {
      shape: {
        type: "string"
      }
    },
    BloomFilterColumns: {
      shape: _ListOfNonEmptyStringsWithoutWhitespace
    },
    BloomFilterFalsePositiveProbability: {
      shape: {
        type: "float"
      }
    },
    DictionaryKeyThreshold: {
      shape: {
        type: "float"
      }
    },
    FormatVersion: {
      shape: {
        type: "string"
      }
    }
  }
};
