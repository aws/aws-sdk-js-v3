import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Activation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ActivationId: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    DefaultInstanceName: {
      shape: {
        type: "string"
      }
    },
    IamRole: {
      shape: {
        type: "string"
      }
    },
    RegistrationLimit: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    RegistrationsCount: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    ExpirationDate: {
      shape: {
        type: "timestamp"
      }
    },
    Expired: {
      shape: {
        type: "boolean"
      }
    },
    CreatedDate: {
      shape: {
        type: "timestamp"
      }
    },
    Tags: {
      shape: _TagList
    }
  }
};
