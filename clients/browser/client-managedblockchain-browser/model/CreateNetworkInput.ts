import { _NetworkFrameworkConfiguration } from "./_NetworkFrameworkConfiguration";
import { _VotingPolicy } from "./_VotingPolicy";
import { _MemberConfiguration } from "./_MemberConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateNetworkInput: _Structure_ = {
  type: "structure",
  required: [
    "ClientRequestToken",
    "Name",
    "Framework",
    "FrameworkVersion",
    "VotingPolicy",
    "MemberConfiguration"
  ],
  members: {
    ClientRequestToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    Framework: {
      shape: {
        type: "string"
      }
    },
    FrameworkVersion: {
      shape: {
        type: "string",
        min: 1
      }
    },
    FrameworkConfiguration: {
      shape: _NetworkFrameworkConfiguration
    },
    VotingPolicy: {
      shape: _VotingPolicy
    },
    MemberConfiguration: {
      shape: _MemberConfiguration
    }
  }
};
