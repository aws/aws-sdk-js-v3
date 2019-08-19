import { _DelegationSetNameServers } from "./_DelegationSetNameServers";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DelegationSet: _Structure_ = {
  type: "structure",
  required: ["NameServers"],
  members: {
    Id: {
      shape: {
        type: "string"
      }
    },
    CallerReference: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NameServers: {
      shape: _DelegationSetNameServers
    }
  }
};
