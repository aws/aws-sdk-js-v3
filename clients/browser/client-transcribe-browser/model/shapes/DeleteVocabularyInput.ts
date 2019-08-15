import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteVocabularyInput: _Structure_ = {
  type: "structure",
  required: ["VocabularyName"],
  members: {
    VocabularyName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
