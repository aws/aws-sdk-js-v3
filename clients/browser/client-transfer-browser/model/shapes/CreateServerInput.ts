import { _EndpointDetails } from "./_EndpointDetails";
import { _IdentityProviderDetails } from "./_IdentityProviderDetails";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateServerInput: _Structure_ = {
  type: "structure",
  required: [],
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
    Tags: {
      shape: _Tags
    }
  }
};
