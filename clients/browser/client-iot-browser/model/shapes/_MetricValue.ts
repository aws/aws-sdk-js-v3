import { _Cidrs } from "./_Cidrs";
import { _Ports } from "./_Ports";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MetricValue: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    count: {
      shape: {
        type: "integer"
      }
    },
    cidrs: {
      shape: _Cidrs
    },
    ports: {
      shape: _Ports
    }
  }
};
