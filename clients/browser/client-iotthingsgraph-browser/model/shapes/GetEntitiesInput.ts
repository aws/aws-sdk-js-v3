import { _Urns } from "./_Urns";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetEntitiesInput: _Structure_ = {
  type: "structure",
  required: ["ids"],
  members: {
    ids: {
      shape: _Urns
    },
    namespaceVersion: {
      shape: {
        type: "integer"
      }
    }
  }
};
