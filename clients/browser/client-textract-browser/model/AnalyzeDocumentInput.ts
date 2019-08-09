import { _Document } from "./_Document";
import { _FeatureTypes } from "./_FeatureTypes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AnalyzeDocumentInput: _Structure_ = {
  type: "structure",
  required: ["Document", "FeatureTypes"],
  members: {
    Document: {
      shape: _Document
    },
    FeatureTypes: {
      shape: _FeatureTypes
    }
  }
};
