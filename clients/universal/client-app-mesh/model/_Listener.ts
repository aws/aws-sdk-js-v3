import { _HealthCheckPolicy } from "./_HealthCheckPolicy";
import { _PortMapping } from "./_PortMapping";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Listener: _Structure_ = {
  type: "structure",
  required: ["portMapping"],
  members: {
    healthCheck: {
      shape: _HealthCheckPolicy
    },
    portMapping: {
      shape: _PortMapping
    }
  }
};
