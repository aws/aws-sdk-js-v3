import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Patch: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ReleaseDate: {
      shape: {
        type: "timestamp"
      }
    },
    Title: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    ContentUrl: {
      shape: {
        type: "string"
      }
    },
    Vendor: {
      shape: {
        type: "string"
      }
    },
    ProductFamily: {
      shape: {
        type: "string"
      }
    },
    Product: {
      shape: {
        type: "string"
      }
    },
    Classification: {
      shape: {
        type: "string"
      }
    },
    MsrcSeverity: {
      shape: {
        type: "string"
      }
    },
    KbNumber: {
      shape: {
        type: "string"
      }
    },
    MsrcNumber: {
      shape: {
        type: "string"
      }
    },
    Language: {
      shape: {
        type: "string"
      }
    }
  }
};
