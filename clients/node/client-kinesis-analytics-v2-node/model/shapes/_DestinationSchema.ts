import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DestinationSchema: _Structure_ = {
  type: "structure",
  required: ["RecordFormatType"],
  members: {
    RecordFormatType: {
      shape: {
        type: "string"
      }
    }
  }
};
