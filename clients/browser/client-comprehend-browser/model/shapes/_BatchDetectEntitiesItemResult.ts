import { _ListOfEntities } from "./_ListOfEntities";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BatchDetectEntitiesItemResult: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Index: {
      shape: {
        type: "integer"
      }
    },
    Entities: {
      shape: _ListOfEntities
    }
  }
};
