import { _HealthCheckObservations } from "./_HealthCheckObservations";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetHealthCheckLastFailureReasonOutput: _Structure_ = {
  type: "structure",
  required: ["HealthCheckObservations"],
  members: {
    HealthCheckObservations: {
      shape: _HealthCheckObservations
    }
  }
};
