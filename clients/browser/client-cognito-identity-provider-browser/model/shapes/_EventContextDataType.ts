import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EventContextDataType: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    IpAddress: {
      shape: {
        type: "string"
      }
    },
    DeviceName: {
      shape: {
        type: "string"
      }
    },
    Timezone: {
      shape: {
        type: "string"
      }
    },
    City: {
      shape: {
        type: "string"
      }
    },
    Country: {
      shape: {
        type: "string"
      }
    }
  }
};
