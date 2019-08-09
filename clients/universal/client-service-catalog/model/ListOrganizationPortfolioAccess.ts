import { ListOrganizationPortfolioAccessInput } from "./ListOrganizationPortfolioAccessInput";
import { ListOrganizationPortfolioAccessOutput } from "./ListOrganizationPortfolioAccessOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParametersException } from "./InvalidParametersException";
import { OperationNotSupportedException } from "./OperationNotSupportedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
