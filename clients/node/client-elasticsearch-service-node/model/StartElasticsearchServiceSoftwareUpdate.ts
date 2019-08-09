import { StartElasticsearchServiceSoftwareUpdateInput } from "./StartElasticsearchServiceSoftwareUpdateInput";
import { StartElasticsearchServiceSoftwareUpdateOutput } from "./StartElasticsearchServiceSoftwareUpdateOutput";
import { BaseException } from "./BaseException";
import { InternalException } from "./InternalException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ValidationException } from "./ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
