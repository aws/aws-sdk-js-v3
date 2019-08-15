import { _RemoteDomainNames } from "./_RemoteDomainNames";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeConditionalForwardersInput: _Structure_ = {
  type: "structure",
  required: ["DirectoryId"],
  members: {
    DirectoryId: {
      shape: {
        type: "string"
      }
    },
    RemoteDomainNames: {
      shape: _RemoteDomainNames
    }
  }
};
