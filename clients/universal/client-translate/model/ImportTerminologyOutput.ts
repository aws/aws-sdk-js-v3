import { _TerminologyProperties } from "./_TerminologyProperties";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ImportTerminologyOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TerminologyProperties: {
      shape: _TerminologyProperties
    }
  }
};
