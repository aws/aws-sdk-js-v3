import { ForgetSmartHomeAppliancesInput } from "./ForgetSmartHomeAppliancesInput";
import { ForgetSmartHomeAppliancesOutput } from "./ForgetSmartHomeAppliancesOutput";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
