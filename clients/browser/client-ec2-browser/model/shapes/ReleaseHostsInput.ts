import { _RequestHostIdList } from "./_RequestHostIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ReleaseHostsInput: _Structure_ = {
  type: "structure",
  required: ["HostIds"],
  members: {
    HostIds: {
      shape: _RequestHostIdList,
      locationName: "hostId"
    }
  }
};
