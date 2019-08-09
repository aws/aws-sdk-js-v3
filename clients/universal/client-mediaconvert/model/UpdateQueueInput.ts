import { _ReservationPlanSettings } from "./_ReservationPlanSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateQueueInput: _Structure_ = {
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
      location: "uri",
      locationName: "name"
    },
    ReservationPlanSettings: {
      shape: _ReservationPlanSettings,
      locationName: "reservationPlanSettings"
    },
    Status: {
      shape: {
        type: "string"
      },
      locationName: "status"
    }
  }
};
