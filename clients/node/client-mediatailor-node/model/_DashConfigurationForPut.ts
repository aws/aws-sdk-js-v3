import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DashConfigurationForPut: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
