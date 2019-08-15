import { _ApplicationInfo } from "./_ApplicationInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetApplicationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    application: {
      shape: _ApplicationInfo
    }
  }
};
