import { AddApplicationReferenceDataSourceInput } from "../shapes/AddApplicationReferenceDataSourceInput";
import { AddApplicationReferenceDataSourceOutput } from "../shapes/AddApplicationReferenceDataSourceOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AddApplicationReferenceDataSource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AddApplicationReferenceDataSource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AddApplicationReferenceDataSourceInput
  },
  output: {
    shape: AddApplicationReferenceDataSourceOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceInUseException
    },
    {
      shape: InvalidArgumentException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: InvalidRequestException
    }
  ]
};
