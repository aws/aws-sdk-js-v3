import { _PhoneNumberCapabilities } from "./_PhoneNumberCapabilities";
import { _PhoneNumberAssociationList } from "./_PhoneNumberAssociationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PhoneNumber: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PhoneNumberId: {
      shape: {
        type: "string"
      }
    },
    E164PhoneNumber: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    ProductType: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    Capabilities: {
      shape: _PhoneNumberCapabilities
    },
    Associations: {
      shape: _PhoneNumberAssociationList
    },
    CreatedTimestamp: {
      shape: {
        type: "timestamp",
        timestampFormat: "iso8601"
      }
    },
    UpdatedTimestamp: {
      shape: {
        type: "timestamp",
        timestampFormat: "iso8601"
      }
    },
    DeletionTimestamp: {
      shape: {
        type: "timestamp",
        timestampFormat: "iso8601"
      }
    }
  }
};
