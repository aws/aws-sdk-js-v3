import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateActivationInput: _Structure_ = {
  type: "structure",
  required: ["IamRole"],
  members: {
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
    ExpirationDate: {
      shape: {
        type: "timestamp"
      }
    },
    Tags: {
      shape: _TagList
    }
  }
};
