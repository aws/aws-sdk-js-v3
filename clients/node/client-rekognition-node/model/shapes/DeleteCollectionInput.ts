import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteCollectionInput: _Structure_ = {
  type: "structure",
  required: ["CollectionId"],
  members: {
    CollectionId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
