import { _RawInputRecords } from "./_RawInputRecords";
import { _ProcessedInputRecords } from "./_ProcessedInputRecords";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UnableToDetectSchemaException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    message: {
      shape: {
        type: "string"
      }
    },
    RawInputRecords: {
      shape: _RawInputRecords
    },
    ProcessedInputRecords: {
      shape: _ProcessedInputRecords
    }
  },
  exceptionType: "UnableToDetectSchemaException"
};
