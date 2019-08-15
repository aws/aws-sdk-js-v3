import { ForgetSmartHomeAppliancesInput } from "../shapes/ForgetSmartHomeAppliancesInput";
import { ForgetSmartHomeAppliancesOutput } from "../shapes/ForgetSmartHomeAppliancesOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ForgetSmartHomeAppliances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ForgetSmartHomeAppliances",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ForgetSmartHomeAppliancesInput
  },
  output: {
    shape: ForgetSmartHomeAppliancesOutput
  },
  errors: [
    {
      shape: NotFoundException
    }
  ]
};
