import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PhoneNumberAssociation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Value: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    AssociatedTimestamp: {
      shape: {
        type: "timestamp",
        timestampFormat: "iso8601"
      }
    }
  }
};
