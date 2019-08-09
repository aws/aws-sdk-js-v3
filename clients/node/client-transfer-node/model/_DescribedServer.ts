import { _EndpointDetails } from "./_EndpointDetails";
import { _IdentityProviderDetails } from "./_IdentityProviderDetails";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DescribedServer: _Structure_ = {
  type: "structure",
  required: ["Arn"],
  members: {
    Arn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    EndpointDetails: {
      shape: _EndpointDetails
    },
    EndpointType: {
      shape: {
        type: "string"
      }
    },
    HostKeyFingerprint: {
      shape: {
        type: "string"
      }
    },
    IdentityProviderDetails: {
      shape: _IdentityProviderDetails
    },
    IdentityProviderType: {
      shape: {
        type: "string"
      }
    },
    LoggingRole: {
      shape: {
        type: "string"
      }
    },
    ServerId: {
      shape: {
        type: "string"
      }
    },
    State: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _Tags
    },
    UserCount: {
      shape: {
        type: "integer"
      }
    }
  }
};
