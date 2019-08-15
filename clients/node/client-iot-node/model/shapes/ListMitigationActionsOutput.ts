import { _MitigationActionIdentifierList } from "./_MitigationActionIdentifierList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListMitigationActionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    actionIdentifiers: {
      shape: _MitigationActionIdentifierList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
