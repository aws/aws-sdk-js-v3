import { _TargetList } from "./_TargetList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResolverRule: _Structure_ = {
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
    DomainName: {
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
    RuleType: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    TargetIps: {
      shape: _TargetList
    },
    ResolverEndpointId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    OwnerId: {
      shape: {
        type: "string",
        min: 12
      }
    },
    ShareStatus: {
      shape: {
        type: "string"
      }
    }
  }
};
