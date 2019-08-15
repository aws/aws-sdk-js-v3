import { _ThingDocumentList } from "./_ThingDocumentList";
import { _ThingGroupDocumentList } from "./_ThingGroupDocumentList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SearchIndexOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    nextToken: {
      shape: {
        type: "string"
      }
    },
    things: {
      shape: _ThingDocumentList
    },
    thingGroups: {
      shape: _ThingGroupDocumentList
    }
  }
};
