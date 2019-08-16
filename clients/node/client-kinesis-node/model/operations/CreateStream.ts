import { CreateStreamInput } from "../shapes/CreateStreamInput";
import { CreateStreamOutput } from "../shapes/CreateStreamOutput";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateStream: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateStream",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateStreamInput
  },
  output: {
    shape: CreateStreamOutput
  },
  errors: [
    {
      shape: ResourceInUseException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InvalidArgumentException
    }
  ]
};
