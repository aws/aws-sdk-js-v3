import { _Services } from "./_Services";
import { _Failures } from "./_Failures";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeServicesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    services: {
      shape: _Services
    },
    failures: {
      shape: _Failures
    }
  }
};
