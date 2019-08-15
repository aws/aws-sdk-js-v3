import { _FileShareARNList } from "./_FileShareARNList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeNFSFileSharesInput: _Structure_ = {
  type: "structure",
  required: ["FileShareARNList"],
  members: {
    FileShareARNList: {
      shape: _FileShareARNList
    }
  }
};
