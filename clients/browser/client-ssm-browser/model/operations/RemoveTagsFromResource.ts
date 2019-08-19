import { RemoveTagsFromResourceInput } from "../shapes/RemoveTagsFromResourceInput";
import { RemoveTagsFromResourceOutput } from "../shapes/RemoveTagsFromResourceOutput";
import { InvalidResourceType } from "../shapes/InvalidResourceType";
import { InvalidResourceId } from "../shapes/InvalidResourceId";
import { InternalServerError } from "../shapes/InternalServerError";
import { TooManyUpdates } from "../shapes/TooManyUpdates";
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
      shape: InvalidResourceType
    },
    {
      shape: InvalidResourceId
    },
    {
      shape: InternalServerError
    },
    {
      shape: TooManyUpdates
    }
  ]
};
