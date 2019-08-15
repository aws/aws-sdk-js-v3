import { _BuiltinSlotTypeMetadataList } from "./_BuiltinSlotTypeMetadataList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetBuiltinSlotTypesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    slotTypes: {
      shape: _BuiltinSlotTypeMetadataList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
