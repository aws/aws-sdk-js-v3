import { _TerminologyPropertiesList } from "./_TerminologyPropertiesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTerminologiesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TerminologyPropertiesList: {
      shape: _TerminologyPropertiesList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
