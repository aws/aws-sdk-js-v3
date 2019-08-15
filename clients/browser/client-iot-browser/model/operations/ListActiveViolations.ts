import { ListActiveViolationsInput } from "../shapes/ListActiveViolationsInput";
import { ListActiveViolationsOutput } from "../shapes/ListActiveViolationsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
