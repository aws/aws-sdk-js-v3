import { _CreateGrokClassifierRequest } from "./_CreateGrokClassifierRequest";
import { _CreateXMLClassifierRequest } from "./_CreateXMLClassifierRequest";
import { _CreateJsonClassifierRequest } from "./_CreateJsonClassifierRequest";
import { _CreateCsvClassifierRequest } from "./_CreateCsvClassifierRequest";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateClassifierInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GrokClassifier: {
      shape: _CreateGrokClassifierRequest
    },
    XMLClassifier: {
      shape: _CreateXMLClassifierRequest
    },
    JsonClassifier: {
      shape: _CreateJsonClassifierRequest
    },
    CsvClassifier: {
      shape: _CreateCsvClassifierRequest
    }
  }
};
