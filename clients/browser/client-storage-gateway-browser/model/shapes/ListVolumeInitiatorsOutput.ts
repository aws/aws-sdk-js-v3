import { _Initiators } from "./_Initiators";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListVolumeInitiatorsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Initiators: {
      shape: _Initiators
    }
  }
};
