import { _SecurityGroupIds } from "./_SecurityGroupIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResolverEndpoint: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CreatorRequestId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Arn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    SecurityGroupIds: {
      shape: _SecurityGroupIds
    },
    Direction: {
      shape: {
        type: "string"
      }
    },
    IpAddressCount: {
      shape: {
        type: "integer"
      }
    },
    HostVPCId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    StatusMessage: {
      shape: {
        type: "string"
      }
    },
    CreationTime: {
      shape: {
        type: "string",
        min: 20
      }
    },
    ModificationTime: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};
