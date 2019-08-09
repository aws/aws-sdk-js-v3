import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ProductViewSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ProductId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    Owner: {
      shape: {
        type: "string"
      }
    },
    ShortDescription: {
      shape: {
        type: "string"
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    Distributor: {
      shape: {
        type: "string"
      }
    },
    HasDefaultPath: {
      shape: {
        type: "boolean"
      }
    },
    SupportEmail: {
      shape: {
        type: "string"
      }
    },
    SupportDescription: {
      shape: {
        type: "string"
      }
    },
    SupportUrl: {
      shape: {
        type: "string"
      }
    }
  }
};
