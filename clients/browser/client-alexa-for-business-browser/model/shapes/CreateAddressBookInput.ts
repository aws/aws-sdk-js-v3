import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateAddressBookInput: _Structure_ = {
  type: "structure",
  required: ["Name"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
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
    }
  }
};
