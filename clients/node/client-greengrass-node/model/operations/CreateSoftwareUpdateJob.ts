import { CreateSoftwareUpdateJobInput } from "../shapes/CreateSoftwareUpdateJobInput";
import { CreateSoftwareUpdateJobOutput } from "../shapes/CreateSoftwareUpdateJobOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
