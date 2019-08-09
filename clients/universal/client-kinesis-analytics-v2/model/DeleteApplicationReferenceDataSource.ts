import { DeleteApplicationReferenceDataSourceInput } from "./DeleteApplicationReferenceDataSourceInput";
import { DeleteApplicationReferenceDataSourceOutput } from "./DeleteApplicationReferenceDataSourceOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
      shape: InvalidRequestException
    }
  ]
};
