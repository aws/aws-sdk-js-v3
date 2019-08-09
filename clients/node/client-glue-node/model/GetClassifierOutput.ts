import { _Classifier } from "./_Classifier";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetClassifierOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Classifier: {
      shape: _Classifier
    }
  }
};
