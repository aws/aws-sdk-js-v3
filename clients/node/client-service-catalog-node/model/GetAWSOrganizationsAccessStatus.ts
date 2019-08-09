import { GetAWSOrganizationsAccessStatusInput } from "./GetAWSOrganizationsAccessStatusInput";
import { GetAWSOrganizationsAccessStatusOutput } from "./GetAWSOrganizationsAccessStatusOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationNotSupportedException } from "./OperationNotSupportedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
