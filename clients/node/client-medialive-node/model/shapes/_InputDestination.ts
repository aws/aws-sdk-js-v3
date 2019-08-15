import { _InputDestinationVpc } from "./_InputDestinationVpc";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InputDestination: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Ip: {
      shape: {
        type: "string"
      },
      locationName: "ip"
    },
    Port: {
      shape: {
        type: "string"
      },
      locationName: "port"
    },
    Url: {
      shape: {
        type: "string"
      },
      locationName: "url"
    },
    Vpc: {
      shape: _InputDestinationVpc,
      locationName: "vpc"
    }
  }
};
