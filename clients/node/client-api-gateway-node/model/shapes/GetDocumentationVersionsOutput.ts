import { _ListOfDocumentationVersion } from "./_ListOfDocumentationVersion";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDocumentationVersionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    position: {
      shape: {
        type: "string"
      }
    },
    items: {
      shape: _ListOfDocumentationVersion,
      locationName: "item"
    }
  }
};
