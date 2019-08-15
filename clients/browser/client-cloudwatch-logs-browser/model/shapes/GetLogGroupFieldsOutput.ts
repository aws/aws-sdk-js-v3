import { _LogGroupFieldList } from "./_LogGroupFieldList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetLogGroupFieldsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    logGroupFields: {
      shape: _LogGroupFieldList
    }
  }
};
