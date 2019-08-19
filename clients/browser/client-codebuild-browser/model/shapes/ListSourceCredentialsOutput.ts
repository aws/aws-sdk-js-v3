import { _SourceCredentialsInfos } from "./_SourceCredentialsInfos";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListSourceCredentialsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    sourceCredentialsInfos: {
      shape: _SourceCredentialsInfos
    }
  }
};
