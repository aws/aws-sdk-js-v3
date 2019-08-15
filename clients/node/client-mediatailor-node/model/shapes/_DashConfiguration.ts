import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DashConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ManifestEndpointPrefix: {
      shape: {
        type: "string"
      }
    },
    MpdLocation: {
      shape: {
        type: "string"
      }
    },
    OriginManifestType: {
      shape: {
        type: "string"
      }
    }
  }
};
