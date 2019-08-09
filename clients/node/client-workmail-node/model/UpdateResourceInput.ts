import { _BookingOptions } from "./_BookingOptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateResourceInput: _Structure_ = {
  type: "structure",
  required: ["OrganizationId", "ResourceId"],
  members: {
    OrganizationId: {
      shape: {
        type: "string"
      }
    },
    ResourceId: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    BookingOptions: {
      shape: _BookingOptions
    }
  }
};
