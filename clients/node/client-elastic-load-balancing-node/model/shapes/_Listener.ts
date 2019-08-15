import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Listener: _Structure_ = {
  type: "structure",
  required: ["Protocol", "LoadBalancerPort", "InstancePort"],
  members: {
    Protocol: {
      shape: {
        type: "string"
      }
    },
    LoadBalancerPort: {
      shape: {
        type: "integer"
      }
    },
    InstanceProtocol: {
      shape: {
        type: "string"
      }
    },
    InstancePort: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    SSLCertificateId: {
      shape: {
        type: "string"
      }
    }
  }
};
