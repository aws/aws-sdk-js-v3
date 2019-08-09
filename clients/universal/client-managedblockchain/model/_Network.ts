import { _NetworkFrameworkAttributes } from "./_NetworkFrameworkAttributes";
import { _VotingPolicy } from "./_VotingPolicy";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Network: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
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
    FrameworkAttributes: {
      shape: _NetworkFrameworkAttributes
    },
    VpcEndpointServiceName: {
      shape: {
        type: "string"
      }
    },
    VotingPolicy: {
      shape: _VotingPolicy
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    CreationDate: {
      shape: {
        type: "timestamp",
        timestampFormat: "iso8601"
      }
    }
  }
};
