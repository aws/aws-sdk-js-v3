import { _NFSFileShareInfoList } from "./_NFSFileShareInfoList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeNFSFileSharesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NFSFileShareInfoList: {
      shape: _NFSFileShareInfoList
    }
  }
};
