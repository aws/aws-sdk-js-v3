import { _ListOfDocumentationPart } from "./_ListOfDocumentationPart";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDocumentationPartsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    position: {
      shape: {
        type: "string"
      }
    },
    items: {
      shape: _ListOfDocumentationPart,
      locationName: "item"
    }
  }
};
