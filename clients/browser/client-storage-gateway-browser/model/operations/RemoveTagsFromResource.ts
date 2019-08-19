import { RemoveTagsFromResourceInput } from "../shapes/RemoveTagsFromResourceInput";
import { RemoveTagsFromResourceOutput } from "../shapes/RemoveTagsFromResourceOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RemoveTagsFromResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RemoveTagsFromResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RemoveTagsFromResourceInput
  },
  output: {
    shape: RemoveTagsFromResourceOutput
  },
  errors: [
    {
      shape: InvalidGatewayRequestException
    },
    {
      shape: InternalServerError
    }
  ]
};
