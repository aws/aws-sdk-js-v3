import { _SlotTypeMetadataList } from "./_SlotTypeMetadataList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSlotTypeVersionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    slotTypes: {
      shape: _SlotTypeMetadataList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
