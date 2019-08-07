import { _AttributeMap } from "./_AttributeMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SamplingRule: _Structure_ = {
  type: "structure",
  required: [
    "ResourceARN",
    "Priority",
    "FixedRate",
    "ReservoirSize",
    "ServiceName",
    "ServiceType",
    "Host",
    "HTTPMethod",
    "URLPath",
    "Version"
  ],
  members: {
    RuleName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RuleARN: {
      shape: {
        type: "string"
      }
    },
    ResourceARN: {
      shape: {
        type: "string"
      }
    },
    Priority: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    FixedRate: {
      shape: {
        type: "float"
      }
    },
    ReservoirSize: {
      shape: {
        type: "integer"
      }
    },
    ServiceName: {
      shape: {
        type: "string"
      }
    },
    ServiceType: {
      shape: {
        type: "string"
      }
    },
    Host: {
      shape: {
        type: "string"
      }
    },
    HTTPMethod: {
      shape: {
        type: "string"
      }
    },
    URLPath: {
      shape: {
        type: "string"
      }
    },
    Version: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    Attributes: {
      shape: _AttributeMap
    }
  }
};
