import { CancelElasticsearchServiceSoftwareUpdateInput } from "./CancelElasticsearchServiceSoftwareUpdateInput";
import { CancelElasticsearchServiceSoftwareUpdateOutput } from "./CancelElasticsearchServiceSoftwareUpdateOutput";
import { BaseException } from "./BaseException";
import { InternalException } from "./InternalException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ValidationException } from "./ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
