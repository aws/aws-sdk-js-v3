import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AnalysisOptions: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Synonyms: {
      shape: {
        type: "string"
      }
    },
    Stopwords: {
      shape: {
        type: "string"
      }
    },
    StemmingDictionary: {
      shape: {
        type: "string"
      }
    },
    JapaneseTokenizationDictionary: {
      shape: {
        type: "string"
      }
    },
    AlgorithmicStemming: {
      shape: {
        type: "string"
      }
    }
  }
};
