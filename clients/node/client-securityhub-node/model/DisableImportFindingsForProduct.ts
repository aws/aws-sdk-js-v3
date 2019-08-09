import { DisableImportFindingsForProductInput } from "./DisableImportFindingsForProductInput";
import { DisableImportFindingsForProductOutput } from "./DisableImportFindingsForProductOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidAccessException } from "./InvalidAccessException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
