import { _HealthCheck } from "./_HealthCheck";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateHealthCheckOutput: _Structure_ = {
  type: "structure",
  required: ["HealthCheck", "Location"],
  members: {
    HealthCheck: {
      shape: _HealthCheck
    },
    Location: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "Location"
    }
  }
};
