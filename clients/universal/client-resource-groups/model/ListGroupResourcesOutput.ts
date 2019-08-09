import { _ResourceIdentifierList } from "./_ResourceIdentifierList";
import { _QueryErrorList } from "./_QueryErrorList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListGroupResourcesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ResourceIdentifiers: {
      shape: _ResourceIdentifierList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    QueryErrors: {
      shape: _QueryErrorList
    }
  }
};
