import { CreateStreamInput } from "../shapes/CreateStreamInput";
import { CreateStreamOutput } from "../shapes/CreateStreamOutput";
import { AccountStreamLimitExceededException } from "../shapes/AccountStreamLimitExceededException";
import { DeviceStreamLimitExceededException } from "../shapes/DeviceStreamLimitExceededException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { InvalidDeviceException } from "../shapes/InvalidDeviceException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { ClientLimitExceededException } from "../shapes/ClientLimitExceededException";
import { TagsPerResourceExceededLimitException } from "../shapes/TagsPerResourceExceededLimitException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateStream: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateStream",
  http: {
    method: "POST",
    requestUri: "/createStream"
  },
  input: {
    shape: CreateStreamInput
  },
  output: {
    shape: CreateStreamOutput
  },
  errors: [
    {
      shape: AccountStreamLimitExceededException
    },
    {
      shape: DeviceStreamLimitExceededException
    },
    {
      shape: ResourceInUseException
    },
    {
      shape: InvalidDeviceException
    },
    {
      shape: InvalidArgumentException
    },
    {
      shape: ClientLimitExceededException
    },
    {
      shape: TagsPerResourceExceededLimitException
    }
  ]
};
