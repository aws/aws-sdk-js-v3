import { _MappingParameters } from "./_MappingParameters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RecordFormat: _Structure_ = {
  type: "structure",
  required: ["RecordFormatType"],
  members: {
    RecordFormatType: {
      shape: {
        type: "string"
      }
    },
    MappingParameters: {
      shape: _MappingParameters
    }
  }
};
