import { CreateGroupVersionInput } from "./CreateGroupVersionInput";
import { CreateGroupVersionOutput } from "./CreateGroupVersionOutput";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateGroupVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateGroupVersion",
  http: {
    method: "POST",
    requestUri: "/greengrass/groups/{GroupId}/versions"
  },
  input: {
    shape: CreateGroupVersionInput
  },
  output: {
    shape: CreateGroupVersionOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
