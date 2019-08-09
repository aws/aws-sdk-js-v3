import { _DocumentClassifierPropertiesList } from "./_DocumentClassifierPropertiesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDocumentClassifiersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DocumentClassifierPropertiesList: {
      shape: _DocumentClassifierPropertiesList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
