import { _IpRoutes } from "./_IpRoutes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AddIpRoutesInput: _Structure_ = {
  type: "structure",
  required: ["DirectoryId", "IpRoutes"],
  members: {
    DirectoryId: {
      shape: {
        type: "string"
      }
    },
    IpRoutes: {
      shape: _IpRoutes
    },
    UpdateSecurityGroupForDirectoryControllers: {
      shape: {
        type: "boolean"
      }
    }
  }
};
