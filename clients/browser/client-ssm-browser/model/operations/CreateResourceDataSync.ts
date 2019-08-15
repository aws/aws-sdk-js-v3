import { CreateResourceDataSyncInput } from "../shapes/CreateResourceDataSyncInput";
import { CreateResourceDataSyncOutput } from "../shapes/CreateResourceDataSyncOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { ResourceDataSyncCountExceededException } from "../shapes/ResourceDataSyncCountExceededException";
import { ResourceDataSyncAlreadyExistsException } from "../shapes/ResourceDataSyncAlreadyExistsException";
import { ResourceDataSyncInvalidConfigurationException } from "../shapes/ResourceDataSyncInvalidConfigurationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateResourceDataSync: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateResourceDataSync",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateResourceDataSyncInput
  },
  output: {
    shape: CreateResourceDataSyncOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: ResourceDataSyncCountExceededException
    },
    {
      shape: ResourceDataSyncAlreadyExistsException
    },
    {
      shape: ResourceDataSyncInvalidConfigurationException
    }
  ]
};
