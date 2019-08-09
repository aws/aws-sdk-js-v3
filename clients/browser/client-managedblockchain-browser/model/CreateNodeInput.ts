import { _NodeConfiguration } from "./_NodeConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateNodeInput: _Structure_ = {
  type: "structure",
  required: [
    "ClientRequestToken",
    "NetworkId",
    "MemberId",
    "NodeConfiguration"
  ],
  members: {
    ClientRequestToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NetworkId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "networkId"
    },
    MemberId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "memberId"
    },
    NodeConfiguration: {
      shape: _NodeConfiguration
    }
  }
};
