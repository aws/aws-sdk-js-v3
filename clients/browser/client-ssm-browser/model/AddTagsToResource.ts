import { AddTagsToResourceInput } from "./AddTagsToResourceInput";
import { AddTagsToResourceOutput } from "./AddTagsToResourceOutput";
import { InvalidResourceType } from "./InvalidResourceType";
import { InvalidResourceId } from "./InvalidResourceId";
import { InternalServerError } from "./InternalServerError";
import { TooManyTagsError } from "./TooManyTagsError";
import { TooManyUpdates } from "./TooManyUpdates";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
