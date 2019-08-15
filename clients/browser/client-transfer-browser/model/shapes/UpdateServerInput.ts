import { _EndpointDetails } from "./_EndpointDetails";
import { _IdentityProviderDetails } from "./_IdentityProviderDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateServerInput: _Structure_ = {
  type: "structure",
  required: ["ServerId"],
  members: {
    EndpointDetails: {
      shape: _EndpointDetails
    },
    EndpointType: {
      shape: {
        type: "string"
      }
    },
    HostKey: {
      shape: {
        type: "string"
      }
    },
    IdentityProviderDetails: {
      shape: _IdentityProviderDetails
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
    }
  }
};
