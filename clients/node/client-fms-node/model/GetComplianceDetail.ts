import { GetComplianceDetailInput } from "./GetComplianceDetailInput";
import { GetComplianceDetailOutput } from "./GetComplianceDetailOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetComplianceDetail: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetComplianceDetail",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetComplianceDetailInput
  },
  output: {
    shape: GetComplianceDetailOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalErrorException
    }
  ]
};
