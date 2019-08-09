import { AddApplicationReferenceDataSourceInput } from "./AddApplicationReferenceDataSourceInput";
import { AddApplicationReferenceDataSourceOutput } from "./AddApplicationReferenceDataSourceOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
      shape: UnsupportedOperationException
    }
  ]
};
