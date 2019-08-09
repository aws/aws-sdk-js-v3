import { ___listOfEntitlement } from "./___listOfEntitlement";
import { ___listOfOutput } from "./___listOfOutput";
import { _Source } from "./_Source";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Flow: _Structure_ = {
  type: "structure",
  required: [
    "Status",
    "Entitlements",
    "Outputs",
    "AvailabilityZone",
    "FlowArn",
    "Source",
    "Name"
  ],
  members: {
    AvailabilityZone: {
      shape: {
        type: "string"
      },
      locationName: "availabilityZone"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    EgressIp: {
      shape: {
        type: "string"
      },
      locationName: "egressIp"
    },
    Entitlements: {
      shape: ___listOfEntitlement,
      locationName: "entitlements"
    },
    FlowArn: {
      shape: {
        type: "string"
      },
      locationName: "flowArn"
    },
    Name: {
      shape: {
        type: "string"
      },
      locationName: "name"
    },
    Outputs: {
      shape: ___listOfOutput,
      locationName: "outputs"
    },
    Source: {
      shape: _Source,
      locationName: "source"
    },
    Status: {
      shape: {
        type: "string"
      },
      locationName: "status"
    }
  }
};
