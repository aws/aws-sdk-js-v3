import { CreateGroupInput } from "./CreateGroupInput";
import { CreateGroupOutput } from "./CreateGroupOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottledException } from "./ThrottledException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateGroup",
  http: {
    method: "POST",
    requestUri: "/CreateGroup"
  },
  input: {
    shape: CreateGroupInput
  },
  output: {
    shape: CreateGroupOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ThrottledException
    }
  ]
};
