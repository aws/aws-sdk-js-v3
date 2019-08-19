import { _ListOfKeyPhrases } from "./_ListOfKeyPhrases";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DetectKeyPhrasesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    KeyPhrases: {
      shape: _ListOfKeyPhrases
    }
  }
};
