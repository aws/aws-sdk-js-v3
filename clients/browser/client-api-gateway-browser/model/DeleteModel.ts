import { DeleteModelInput } from "./DeleteModelInput";
import { DeleteModelOutput } from "./DeleteModelOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteModel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteModel",
  http: {
    method: "DELETE",
    requestUri: "/restapis/{restapi_id}/models/{model_name}"
  },
  input: {
    shape: DeleteModelInput
  },
  output: {
    shape: DeleteModelOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: BadRequestException
    },
    {
      shape: ConflictException
    }
  ]
};
