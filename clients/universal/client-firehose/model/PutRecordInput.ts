import { _Record } from "./_Record";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutRecordInput: _Structure_ = {
  type: "structure",
  required: ["DeliveryStreamName", "Record"],
  members: {
    DeliveryStreamName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Record: {
      shape: _Record
    }
  }
};
