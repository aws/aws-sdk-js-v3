import { _ResponseHostIdList } from "./_ResponseHostIdList";
import { _UnsuccessfulItemList } from "./_UnsuccessfulItemList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyHostsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Successful: {
      shape: _ResponseHostIdList,
      locationName: "successful"
    },
    Unsuccessful: {
      shape: _UnsuccessfulItemList,
      locationName: "unsuccessful"
    }
  }
};
