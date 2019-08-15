import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SupportedEndpointType: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EngineName: {
      shape: {
        type: "string"
      }
    },
    SupportsCDC: {
      shape: {
        type: "boolean"
      }
    },
    EndpointType: {
      shape: {
        type: "string"
      }
    },
    EngineDisplayName: {
      shape: {
        type: "string"
      }
    }
  }
};
