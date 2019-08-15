import { ListOrganizationsInput } from "../shapes/ListOrganizationsInput";
import { ListOrganizationsOutput } from "../shapes/ListOrganizationsOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListOrganizations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListOrganizations",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListOrganizationsInput
  },
  output: {
    shape: ListOrganizationsOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    }
  ]
};
