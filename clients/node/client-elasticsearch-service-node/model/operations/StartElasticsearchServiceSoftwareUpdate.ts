import { StartElasticsearchServiceSoftwareUpdateInput } from "../shapes/StartElasticsearchServiceSoftwareUpdateInput";
import { StartElasticsearchServiceSoftwareUpdateOutput } from "../shapes/StartElasticsearchServiceSoftwareUpdateOutput";
import { BaseException } from "../shapes/BaseException";
import { InternalException } from "../shapes/InternalException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ValidationException } from "../shapes/ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartElasticsearchServiceSoftwareUpdate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartElasticsearchServiceSoftwareUpdate",
  http: {
    method: "POST",
    requestUri: "/2015-01-01/es/serviceSoftwareUpdate/start"
  },
  input: {
    shape: StartElasticsearchServiceSoftwareUpdateInput
  },
  output: {
    shape: StartElasticsearchServiceSoftwareUpdateOutput
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
