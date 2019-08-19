import { _AZList } from "./_AZList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAvailableZonesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AZList: {
      shape: _AZList
    }
  }
};
