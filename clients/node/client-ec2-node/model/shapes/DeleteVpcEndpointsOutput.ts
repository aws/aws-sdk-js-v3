import { _UnsuccessfulItemSet } from "./_UnsuccessfulItemSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteVpcEndpointsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Unsuccessful: {
      shape: _UnsuccessfulItemSet,
      locationName: "unsuccessful"
    }
  }
};
