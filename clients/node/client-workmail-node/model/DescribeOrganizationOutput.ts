import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeOrganizationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OrganizationId: {
      shape: {
        type: "string"
      }
    },
    Alias: {
      shape: {
        type: "string",
        min: 1
      }
    },
    State: {
      shape: {
        type: "string"
      }
    },
    DirectoryId: {
      shape: {
        type: "string"
      }
    },
    DirectoryType: {
      shape: {
        type: "string"
      }
    },
    DefaultMailDomain: {
      shape: {
        type: "string"
      }
    },
    CompletedDate: {
      shape: {
        type: "timestamp"
      }
    },
    ErrorMessage: {
      shape: {
        type: "string"
      }
    }
  }
};
