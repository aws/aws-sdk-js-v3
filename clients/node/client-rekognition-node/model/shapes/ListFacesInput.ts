import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListFacesInput: _Structure_ = {
  type: "structure",
  required: ["CollectionId"],
  members: {
    CollectionId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer"
      }
    }
  }
};
