import { _InventoryItemSchemaResultList } from "./_InventoryItemSchemaResultList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetInventorySchemaOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Schemas: {
      shape: _InventoryItemSchemaResultList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
