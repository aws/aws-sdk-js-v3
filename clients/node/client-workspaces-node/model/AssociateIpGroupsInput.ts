import { _IpGroupIdList } from "./_IpGroupIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateIpGroupsInput: _Structure_ = {
  type: "structure",
  required: ["DirectoryId", "GroupIds"],
  members: {
    DirectoryId: {
      shape: {
        type: "string"
      }
    },
    GroupIds: {
      shape: _IpGroupIdList
    }
  }
};
