import { _IntOptions } from "./_IntOptions";
import { _DoubleOptions } from "./_DoubleOptions";
import { _LiteralOptions } from "./_LiteralOptions";
import { _TextOptions } from "./_TextOptions";
import { _DateOptions } from "./_DateOptions";
import { _LatLonOptions } from "./_LatLonOptions";
import { _IntArrayOptions } from "./_IntArrayOptions";
import { _DoubleArrayOptions } from "./_DoubleArrayOptions";
import { _LiteralArrayOptions } from "./_LiteralArrayOptions";
import { _TextArrayOptions } from "./_TextArrayOptions";
import { _DateArrayOptions } from "./_DateArrayOptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _IndexField: _Structure_ = {
  type: "structure",
  required: ["IndexFieldName", "IndexFieldType"],
  members: {
    IndexFieldName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    IndexFieldType: {
      shape: {
        type: "string"
      }
    },
    IntOptions: {
      shape: _IntOptions
    },
    DoubleOptions: {
      shape: _DoubleOptions
    },
    LiteralOptions: {
      shape: _LiteralOptions
    },
    TextOptions: {
      shape: _TextOptions
    },
    DateOptions: {
      shape: _DateOptions
    },
    LatLonOptions: {
      shape: _LatLonOptions
    },
    IntArrayOptions: {
      shape: _IntArrayOptions
    },
    DoubleArrayOptions: {
      shape: _DoubleArrayOptions
    },
    LiteralArrayOptions: {
      shape: _LiteralArrayOptions
    },
    TextArrayOptions: {
      shape: _TextArrayOptions
    },
    DateArrayOptions: {
      shape: _DateArrayOptions
    }
  }
};
