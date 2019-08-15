import { _SourceSchema } from "./_SourceSchema";
import { _ParsedInputRecords } from "./_ParsedInputRecords";
import { _ProcessedInputRecords } from "./_ProcessedInputRecords";
import { _RawInputRecords } from "./_RawInputRecords";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DiscoverInputSchemaOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InputSchema: {
      shape: _SourceSchema
    },
    ParsedInputRecords: {
      shape: _ParsedInputRecords
    },
    ProcessedInputRecords: {
      shape: _ProcessedInputRecords
    },
    RawInputRecords: {
      shape: _RawInputRecords
    }
  }
};
