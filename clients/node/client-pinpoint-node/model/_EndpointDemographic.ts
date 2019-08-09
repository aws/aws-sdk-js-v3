import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EndpointDemographic: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AppVersion: {
      shape: {
        type: "string"
      }
    },
    Locale: {
      shape: {
        type: "string"
      }
    },
    Make: {
      shape: {
        type: "string"
      }
    },
    Model: {
      shape: {
        type: "string"
      }
    },
    ModelVersion: {
      shape: {
        type: "string"
      }
    },
    Platform: {
      shape: {
        type: "string"
      }
    },
    PlatformVersion: {
      shape: {
        type: "string"
      }
    },
    Timezone: {
      shape: {
        type: "string"
      }
    }
  }
};
