import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EncryptionInTransit: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClientBroker: {
      shape: {
        type: "string"
      },
      locationName: "clientBroker"
    },
    InCluster: {
      shape: {
        type: "boolean"
      },
      locationName: "inCluster"
    }
  }
};
