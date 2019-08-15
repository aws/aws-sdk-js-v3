import { _UpdateGrokClassifierRequest } from "./_UpdateGrokClassifierRequest";
import { _UpdateXMLClassifierRequest } from "./_UpdateXMLClassifierRequest";
import { _UpdateJsonClassifierRequest } from "./_UpdateJsonClassifierRequest";
import { _UpdateCsvClassifierRequest } from "./_UpdateCsvClassifierRequest";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateClassifierInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GrokClassifier: {
      shape: _UpdateGrokClassifierRequest
    },
    XMLClassifier: {
      shape: _UpdateXMLClassifierRequest
    },
    JsonClassifier: {
      shape: _UpdateJsonClassifierRequest
    },
    CsvClassifier: {
      shape: _UpdateCsvClassifierRequest
    }
  }
};
