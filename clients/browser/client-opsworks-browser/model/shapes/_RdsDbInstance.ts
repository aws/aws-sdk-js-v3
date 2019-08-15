import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RdsDbInstance: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RdsDbInstanceArn: {
      shape: {
        type: "string"
      }
    },
    DbInstanceIdentifier: {
      shape: {
        type: "string"
      }
    },
    DbUser: {
      shape: {
        type: "string"
      }
    },
    DbPassword: {
      shape: {
        type: "string"
      }
    },
    Region: {
      shape: {
        type: "string"
      }
    },
    Address: {
      shape: {
        type: "string"
      }
    },
    Engine: {
      shape: {
        type: "string"
      }
    },
    StackId: {
      shape: {
        type: "string"
      }
    },
    MissingOnRds: {
      shape: {
        type: "boolean"
      }
    }
  }
};
