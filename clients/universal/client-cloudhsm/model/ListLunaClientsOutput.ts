import { _ClientList } from "./_ClientList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListLunaClientsOutput: _Structure_ = {
  type: "structure",
  required: ["ClientList"],
  members: {
    ClientList: {
      shape: _ClientList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
