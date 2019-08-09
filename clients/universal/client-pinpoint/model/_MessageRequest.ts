import { _MapOfAddressConfiguration } from "./_MapOfAddressConfiguration";
import { _MapOf__string } from "./_MapOf__string";
import { _MapOfEndpointSendConfiguration } from "./_MapOfEndpointSendConfiguration";
import { _DirectMessageConfiguration } from "./_DirectMessageConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MessageRequest: _Structure_ = {
  type: "structure",
  required: ["MessageConfiguration"],
  members: {
    Addresses: {
      shape: _MapOfAddressConfiguration
    },
    Context: {
      shape: _MapOf__string
    },
    Endpoints: {
      shape: _MapOfEndpointSendConfiguration
    },
    MessageConfiguration: {
      shape: _DirectMessageConfiguration
    },
    TraceId: {
      shape: {
        type: "string"
      }
    }
  }
};
