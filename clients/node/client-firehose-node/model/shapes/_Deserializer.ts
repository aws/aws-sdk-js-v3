import { _OpenXJsonSerDe } from "./_OpenXJsonSerDe";
import { _HiveJsonSerDe } from "./_HiveJsonSerDe";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Deserializer: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OpenXJsonSerDe: {
      shape: _OpenXJsonSerDe
    },
    HiveJsonSerDe: {
      shape: _HiveJsonSerDe
    }
  }
};
