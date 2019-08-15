import { GetGroupVersionInput } from "../shapes/GetGroupVersionInput";
import { GetGroupVersionOutput } from "../shapes/GetGroupVersionOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetGroupVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetGroupVersion",
  http: {
    method: "GET",
    requestUri: "/greengrass/groups/{GroupId}/versions/{GroupVersionId}"
  },
  input: {
    shape: GetGroupVersionInput
  },
  output: {
    shape: GetGroupVersionOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
