import { DeleteApplicationReferenceDataSourceInput } from "../shapes/DeleteApplicationReferenceDataSourceInput";
import { DeleteApplicationReferenceDataSourceOutput } from "../shapes/DeleteApplicationReferenceDataSourceOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteApplicationReferenceDataSource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteApplicationReferenceDataSource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteApplicationReferenceDataSourceInput
  },
  output: {
    shape: DeleteApplicationReferenceDataSourceOutput
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
      shape: UnsupportedOperationException
    }
  ]
};
