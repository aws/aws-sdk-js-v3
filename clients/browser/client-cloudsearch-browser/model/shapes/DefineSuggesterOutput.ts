import { _SuggesterStatus } from "./_SuggesterStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DefineSuggesterOutput: _Structure_ = {
  type: "structure",
  required: ["Suggester"],
  members: {
    Suggester: {
      shape: _SuggesterStatus
    }
  }
};
