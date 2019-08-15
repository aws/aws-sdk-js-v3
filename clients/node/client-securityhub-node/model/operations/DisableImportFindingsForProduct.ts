import { DisableImportFindingsForProductInput } from "../shapes/DisableImportFindingsForProductInput";
import { DisableImportFindingsForProductOutput } from "../shapes/DisableImportFindingsForProductOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidAccessException } from "../shapes/InvalidAccessException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisableImportFindingsForProduct: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisableImportFindingsForProduct",
  http: {
    method: "DELETE",
    requestUri: "/productSubscriptions/{ProductSubscriptionArn+}"
  },
  input: {
    shape: DisableImportFindingsForProductInput
  },
  output: {
    shape: DisableImportFindingsForProductOutput
  },
  errors: [
    {
      shape: InternalException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidAccessException
    },
    {
      shape: LimitExceededException
    }
  ]
};
