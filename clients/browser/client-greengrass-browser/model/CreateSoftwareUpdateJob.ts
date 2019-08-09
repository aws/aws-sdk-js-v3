import { CreateSoftwareUpdateJobInput } from "./CreateSoftwareUpdateJobInput";
import { CreateSoftwareUpdateJobOutput } from "./CreateSoftwareUpdateJobOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateSoftwareUpdateJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateSoftwareUpdateJob",
  http: {
    method: "POST",
    requestUri: "/greengrass/updates"
  },
  input: {
    shape: CreateSoftwareUpdateJobInput
  },
  output: {
    shape: CreateSoftwareUpdateJobOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: InternalServerErrorException
    }
  ]
};
