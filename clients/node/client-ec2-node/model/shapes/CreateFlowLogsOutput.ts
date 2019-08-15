import { _ValueStringList } from "./_ValueStringList";
import { _UnsuccessfulItemSet } from "./_UnsuccessfulItemSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateFlowLogsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClientToken: {
      shape: {
        type: "string"
      },
      locationName: "clientToken"
    },
    FlowLogIds: {
      shape: _ValueStringList,
      locationName: "flowLogIdSet"
    },
    Unsuccessful: {
      shape: _UnsuccessfulItemSet,
      locationName: "unsuccessful"
    }
  }
};
