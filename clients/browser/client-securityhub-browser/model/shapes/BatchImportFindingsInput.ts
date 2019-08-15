import { _AwsSecurityFindingList } from "./_AwsSecurityFindingList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchImportFindingsInput: _Structure_ = {
  type: "structure",
  required: ["Findings"],
  members: {
    Findings: {
      shape: _AwsSecurityFindingList
    }
  }
};
