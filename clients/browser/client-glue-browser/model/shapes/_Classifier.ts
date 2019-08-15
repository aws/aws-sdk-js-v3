import { _GrokClassifier } from "./_GrokClassifier";
import { _XMLClassifier } from "./_XMLClassifier";
import { _JsonClassifier } from "./_JsonClassifier";
import { _CsvClassifier } from "./_CsvClassifier";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Classifier: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GrokClassifier: {
      shape: _GrokClassifier
    },
    XMLClassifier: {
      shape: _XMLClassifier
    },
    JsonClassifier: {
      shape: _JsonClassifier
    },
    CsvClassifier: {
      shape: _CsvClassifier
    }
  }
};
