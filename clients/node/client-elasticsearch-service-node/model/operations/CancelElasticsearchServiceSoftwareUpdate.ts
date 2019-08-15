import { CancelElasticsearchServiceSoftwareUpdateInput } from "../shapes/CancelElasticsearchServiceSoftwareUpdateInput";
import { CancelElasticsearchServiceSoftwareUpdateOutput } from "../shapes/CancelElasticsearchServiceSoftwareUpdateOutput";
import { BaseException } from "../shapes/BaseException";
import { InternalException } from "../shapes/InternalException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ValidationException } from "../shapes/ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CancelElasticsearchServiceSoftwareUpdate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CancelElasticsearchServiceSoftwareUpdate",
  http: {
    method: "POST",
    requestUri: "/2015-01-01/es/serviceSoftwareUpdate/cancel"
  },
  input: {
    shape: CancelElasticsearchServiceSoftwareUpdateInput
  },
  output: {
    shape: CancelElasticsearchServiceSoftwareUpdateOutput
  },
  errors: [
    {
      shape: BaseException
    },
    {
      shape: InternalException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ValidationException
    }
  ]
};
