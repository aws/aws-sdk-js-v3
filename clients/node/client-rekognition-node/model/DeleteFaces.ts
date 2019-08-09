import { DeleteFacesInput } from "./DeleteFacesInput";
import { DeleteFacesOutput } from "./DeleteFacesOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServerError } from "./InternalServerError";
import { ThrottlingException } from "./ThrottlingException";
import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
