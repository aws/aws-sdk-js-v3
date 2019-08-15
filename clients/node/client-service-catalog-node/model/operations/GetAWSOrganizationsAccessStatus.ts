import { GetAWSOrganizationsAccessStatusInput } from "../shapes/GetAWSOrganizationsAccessStatusInput";
import { GetAWSOrganizationsAccessStatusOutput } from "../shapes/GetAWSOrganizationsAccessStatusOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationNotSupportedException } from "../shapes/OperationNotSupportedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetAWSOrganizationsAccessStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetAWSOrganizationsAccessStatus",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetAWSOrganizationsAccessStatusInput
  },
  output: {
    shape: GetAWSOrganizationsAccessStatusOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: OperationNotSupportedException
    }
  ]
};
