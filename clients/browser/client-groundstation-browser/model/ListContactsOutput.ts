import { _ContactList } from "./_ContactList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListContactsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    contactList: {
      shape: _ContactList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
