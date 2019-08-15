import { ListOrganizationPortfolioAccessInput } from "../shapes/ListOrganizationPortfolioAccessInput";
import { ListOrganizationPortfolioAccessOutput } from "../shapes/ListOrganizationPortfolioAccessOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { OperationNotSupportedException } from "../shapes/OperationNotSupportedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListOrganizationPortfolioAccess: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListOrganizationPortfolioAccess",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListOrganizationPortfolioAccessInput
  },
  output: {
    shape: ListOrganizationPortfolioAccessOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParametersException
    },
    {
      shape: OperationNotSupportedException
    }
  ]
};
