import { _ParquetSerDe } from "./_ParquetSerDe";
import { _OrcSerDe } from "./_OrcSerDe";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Serializer: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ParquetSerDe: {
      shape: _ParquetSerDe
    },
    OrcSerDe: {
      shape: _OrcSerDe
    }
  }
};
