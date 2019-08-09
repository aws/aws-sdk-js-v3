import { CreateStreamInput } from "./CreateStreamInput";
import { CreateStreamOutput } from "./CreateStreamOutput";
import { AccountStreamLimitExceededException } from "./AccountStreamLimitExceededException";
import { DeviceStreamLimitExceededException } from "./DeviceStreamLimitExceededException";
import { ResourceInUseException } from "./ResourceInUseException";
import { InvalidDeviceException } from "./InvalidDeviceException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { ClientLimitExceededException } from "./ClientLimitExceededException";
import { TagsPerResourceExceededLimitException } from "./TagsPerResourceExceededLimitException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
