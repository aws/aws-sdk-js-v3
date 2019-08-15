import { _DocumentationPartLocation } from "./_DocumentationPartLocation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDocumentationPartOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    id: {
      shape: {
        type: "string"
      }
    },
    location: {
      shape: _DocumentationPartLocation
    },
    properties: {
      shape: {
        type: "string"
      }
    }
  }
};
