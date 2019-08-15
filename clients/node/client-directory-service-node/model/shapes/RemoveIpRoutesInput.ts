import { _CidrIps } from "./_CidrIps";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RemoveIpRoutesInput: _Structure_ = {
  type: "structure",
  required: ["DirectoryId", "CidrIps"],
  members: {
    DirectoryId: {
      shape: {
        type: "string"
      }
    },
    CidrIps: {
      shape: _CidrIps
    }
  }
};
