import { _TerminologyProperties } from "./_TerminologyProperties";
import { _TerminologyDataLocation } from "./_TerminologyDataLocation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetTerminologyOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TerminologyProperties: {
      shape: _TerminologyProperties
    },
    TerminologyDataLocation: {
      shape: _TerminologyDataLocation
    }
  }
};
