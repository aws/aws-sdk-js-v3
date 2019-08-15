import { _ListOfEntities } from "./_ListOfEntities";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DetectEntitiesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Entities: {
      shape: _ListOfEntities
    }
  }
};
