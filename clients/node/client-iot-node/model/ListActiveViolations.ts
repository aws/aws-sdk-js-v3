import { ListActiveViolationsInput } from "./ListActiveViolationsInput";
import { ListActiveViolationsOutput } from "./ListActiveViolationsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListActiveViolations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListActiveViolations",
  http: {
    method: "GET",
    requestUri: "/active-violations"
  },
  input: {
    shape: ListActiveViolationsInput
  },
  output: {
    shape: ListActiveViolationsOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    }
  ]
};
