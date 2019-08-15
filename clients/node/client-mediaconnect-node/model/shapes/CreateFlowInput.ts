import { ___listOfGrantEntitlementRequest } from "./___listOfGrantEntitlementRequest";
import { ___listOfAddOutputRequest } from "./___listOfAddOutputRequest";
import { _SetSourceRequest } from "./_SetSourceRequest";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateFlowInput: _Structure_ = {
  type: "structure",
  required: ["Source", "Name"],
  members: {
    AvailabilityZone: {
      shape: {
        type: "string"
      },
      locationName: "availabilityZone"
    },
    Entitlements: {
      shape: ___listOfGrantEntitlementRequest,
      locationName: "entitlements"
    },
    Name: {
      shape: {
        type: "string"
      },
      locationName: "name"
    },
    Outputs: {
      shape: ___listOfAddOutputRequest,
      locationName: "outputs"
    },
    Source: {
      shape: _SetSourceRequest,
      locationName: "source"
    }
  }
};
