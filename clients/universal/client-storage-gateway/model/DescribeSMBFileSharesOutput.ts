import { _SMBFileShareInfoList } from "./_SMBFileShareInfoList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSMBFileSharesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SMBFileShareInfoList: {
      shape: _SMBFileShareInfoList
    }
  }
};
