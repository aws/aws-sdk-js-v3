import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateUserInput: _Structure_ = {
  type: "structure",
  required: ["UserId"],
  members: {
    UserId: {
      shape: {
        type: "string",
        min: 1
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
    ClientRequestToken: {
      shape: {
        type: "string",
        min: 10
      }
    },
    Tags: {
      shape: _TagList
    }
  }
};
