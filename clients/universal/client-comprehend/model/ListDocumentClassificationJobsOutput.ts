import { _DocumentClassificationJobPropertiesList } from "./_DocumentClassificationJobPropertiesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDocumentClassificationJobsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DocumentClassificationJobPropertiesList: {
      shape: _DocumentClassificationJobPropertiesList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
