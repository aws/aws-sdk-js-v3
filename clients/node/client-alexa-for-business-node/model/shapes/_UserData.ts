import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UserData: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UserArn: {
      shape: {
        type: "string"
      }
    },
    FirstName: {
      shape: {
        type: "string"
      }
    },
    LastName: {
      shape: {
        type: "string"
      }
    },
    Email: {
      shape: {
        type: "string",
        min: 1
      }
    },
    EnrollmentStatus: {
      shape: {
        type: "string"
      }
    },
    EnrollmentId: {
      shape: {
        type: "string"
      }
    }
  }
};
