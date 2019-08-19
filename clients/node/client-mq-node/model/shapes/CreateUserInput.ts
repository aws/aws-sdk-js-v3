import { ___listOf__string } from "./___listOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateUserInput: _Structure_ = {
  type: "structure",
  required: ["Username", "BrokerId"],
  members: {
    BrokerId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "broker-id"
    },
    ConsoleAccess: {
      shape: {
        type: "boolean"
      },
      locationName: "consoleAccess"
    },
    Groups: {
      shape: ___listOf__string,
      locationName: "groups"
    },
    Password: {
      shape: {
        type: "string"
      },
      locationName: "password"
    },
    Username: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "username"
    }
  }
};
