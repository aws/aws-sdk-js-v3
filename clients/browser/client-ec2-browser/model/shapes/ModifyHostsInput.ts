import { _RequestHostIdList } from "./_RequestHostIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyHostsInput: _Structure_ = {
  type: "structure",
  required: ["HostIds"],
  members: {
    AutoPlacement: {
      shape: {
        type: "string"
      },
      locationName: "autoPlacement"
    },
    HostIds: {
      shape: _RequestHostIdList,
      locationName: "hostId"
    },
    HostRecovery: {
      shape: {
        type: "string"
      }
    }
  }
};
