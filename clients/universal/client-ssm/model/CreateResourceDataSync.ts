import { CreateResourceDataSyncInput } from "./CreateResourceDataSyncInput";
import { CreateResourceDataSyncOutput } from "./CreateResourceDataSyncOutput";
import { InternalServerError } from "./InternalServerError";
import { ResourceDataSyncCountExceededException } from "./ResourceDataSyncCountExceededException";
import { ResourceDataSyncAlreadyExistsException } from "./ResourceDataSyncAlreadyExistsException";
import { ResourceDataSyncInvalidConfigurationException } from "./ResourceDataSyncInvalidConfigurationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
