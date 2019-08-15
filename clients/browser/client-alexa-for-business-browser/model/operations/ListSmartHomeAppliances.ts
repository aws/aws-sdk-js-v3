import { ListSmartHomeAppliancesInput } from "../shapes/ListSmartHomeAppliancesInput";
import { ListSmartHomeAppliancesOutput } from "../shapes/ListSmartHomeAppliancesOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListSmartHomeAppliances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListSmartHomeAppliances",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListSmartHomeAppliancesInput
  },
  output: {
    shape: ListSmartHomeAppliancesOutput
  },
  errors: [
    {
      shape: NotFoundException
    }
  ]
};
