import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Hsm: _Structure_ = {
  type: "structure",
  required: ["HsmId"],
  members: {
    AvailabilityZone: {
      shape: {
        type: "string"
      }
    },
    ClusterId: {
      shape: {
        type: "string"
      }
    },
    SubnetId: {
      shape: {
        type: "string"
      }
    },
    EniId: {
      shape: {
        type: "string"
      }
    },
    EniIp: {
      shape: {
        type: "string"
      }
    },
    HsmId: {
      shape: {
        type: "string"
      }
    },
    State: {
      shape: {
        type: "string"
      }
    },
    StateMessage: {
      shape: {
        type: "string"
      }
    }
  }
};
