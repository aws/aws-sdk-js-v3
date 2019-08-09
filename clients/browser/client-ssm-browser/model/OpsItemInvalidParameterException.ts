import { _OpsItemParameterNamesList } from "./_OpsItemParameterNamesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const OpsItemInvalidParameterException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ParameterNames: {
      shape: _OpsItemParameterNamesList
    },
    Message: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "OpsItemInvalidParameterException"
};
