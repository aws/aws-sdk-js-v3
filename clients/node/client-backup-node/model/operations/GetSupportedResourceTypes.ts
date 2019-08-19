import { GetSupportedResourceTypesInput } from "../shapes/GetSupportedResourceTypesInput";
import { GetSupportedResourceTypesOutput } from "../shapes/GetSupportedResourceTypesOutput";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetSupportedResourceTypes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSupportedResourceTypes",
  http: {
    method: "GET",
    requestUri: "/supported-resource-types"
  },
  input: {
    shape: GetSupportedResourceTypesInput
  },
  output: {
    shape: GetSupportedResourceTypesOutput
  },
  errors: [
    {
      shape: ServiceUnavailableException
    }
  ]
};
