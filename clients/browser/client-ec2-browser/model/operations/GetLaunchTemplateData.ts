import { GetLaunchTemplateDataInput } from "../shapes/GetLaunchTemplateDataInput";
import { GetLaunchTemplateDataOutput } from "../shapes/GetLaunchTemplateDataOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetLaunchTemplateData: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetLaunchTemplateData",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetLaunchTemplateDataInput
  },
  output: {
    shape: GetLaunchTemplateDataOutput
  },
  errors: []
};
