import { AddTagsToResourceInput } from "../shapes/AddTagsToResourceInput";
import { AddTagsToResourceOutput } from "../shapes/AddTagsToResourceOutput";
import { InvalidResourceType } from "../shapes/InvalidResourceType";
import { InvalidResourceId } from "../shapes/InvalidResourceId";
import { InternalServerError } from "../shapes/InternalServerError";
import { TooManyTagsError } from "../shapes/TooManyTagsError";
import { TooManyUpdates } from "../shapes/TooManyUpdates";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AddTagsToResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AddTagsToResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AddTagsToResourceInput
  },
  output: {
    shape: AddTagsToResourceOutput
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
      shape: TooManyTagsError
    },
    {
      shape: TooManyUpdates
    }
  ]
};
