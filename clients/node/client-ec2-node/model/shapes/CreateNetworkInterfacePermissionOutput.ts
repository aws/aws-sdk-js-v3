import { _NetworkInterfacePermission } from "./_NetworkInterfacePermission";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateNetworkInterfacePermissionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InterfacePermission: {
      shape: _NetworkInterfacePermission,
      locationName: "interfacePermission"
    }
  }
};
