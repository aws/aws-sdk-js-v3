import { _EventBusList } from "./_EventBusList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListEventBusesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EventBuses: {
      shape: _EventBusList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
