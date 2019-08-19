import { _NameStringList } from "./_NameStringList";
import { _ErrorByName } from "./_ErrorByName";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchDeleteConnectionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Succeeded: {
      shape: _NameStringList
    },
    Errors: {
      shape: _ErrorByName
    }
  }
};
