import { DeleteFacesInput } from "../shapes/DeleteFacesInput";
import { DeleteFacesOutput } from "../shapes/DeleteFacesOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InternalServerError } from "../shapes/InternalServerError";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { ProvisionedThroughputExceededException } from "../shapes/ProvisionedThroughputExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteFaces: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteFaces",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteFacesInput
  },
  output: {
    shape: DeleteFacesOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: InternalServerError
    },
    {
      shape: ThrottlingException
    },
    {
      shape: ProvisionedThroughputExceededException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
