import { _Inputs } from "./_Inputs";
import { _Outputs } from "./_Outputs";
import { _ReferenceDataSources } from "./_ReferenceDataSources";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SqlApplicationConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Inputs: {
      shape: _Inputs
    },
    Outputs: {
      shape: _Outputs
    },
    ReferenceDataSources: {
      shape: _ReferenceDataSources
    }
  }
};
