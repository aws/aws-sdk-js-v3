import { ListSmartHomeAppliancesInput } from "./ListSmartHomeAppliancesInput";
import { ListSmartHomeAppliancesOutput } from "./ListSmartHomeAppliancesOutput";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
