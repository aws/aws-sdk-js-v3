import { _ReservationPlanSettings } from "./_ReservationPlanSettings";
import { ___mapOf__string } from "./___mapOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateQueueInput: _Structure_ = {
  type: "structure",
  required: ["Name"],
  members: {
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    Name: {
      shape: {
        type: "string"
      },
      locationName: "name"
    },
    PricingPlan: {
      shape: {
        type: "string"
      },
      locationName: "pricingPlan"
    },
    ReservationPlanSettings: {
      shape: _ReservationPlanSettings,
      locationName: "reservationPlanSettings"
    },
    Tags: {
      shape: ___mapOf__string,
      locationName: "tags"
    }
  }
};
