import { _ResponseHostIdList } from "./_ResponseHostIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AllocateHostsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    HostIds: {
      shape: _ResponseHostIdList,
      locationName: "hostIdSet"
    }
  }
};
