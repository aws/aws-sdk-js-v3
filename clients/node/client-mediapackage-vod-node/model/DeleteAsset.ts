import { DeleteAssetInput } from "./DeleteAssetInput";
import { DeleteAssetOutput } from "./DeleteAssetOutput";
import { UnprocessableEntityException } from "./UnprocessableEntityException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteAsset: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteAsset",
  http: {
    method: "DELETE",
    requestUri: "/assets/{id}"
  },
  input: {
    shape: DeleteAssetInput
  },
  output: {
    shape: DeleteAssetOutput
  },
  errors: [
    {
      shape: UnprocessableEntityException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: ForbiddenException
    },
    {
      shape: NotFoundException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
