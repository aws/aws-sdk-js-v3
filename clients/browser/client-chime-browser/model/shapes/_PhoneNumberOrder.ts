import { _OrderedPhoneNumberList } from "./_OrderedPhoneNumberList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PhoneNumberOrder: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PhoneNumberOrderId: {
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
    OrderedPhoneNumbers: {
      shape: _OrderedPhoneNumberList
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
    }
  }
};
