import { ListTagOptionsInput } from "../shapes/ListTagOptionsInput";
import { ListTagOptionsOutput } from "../shapes/ListTagOptionsOutput";
import { TagOptionNotMigratedException } from "../shapes/TagOptionNotMigratedException";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListTagOptions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTagOptions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListTagOptionsInput
  },
  output: {
    shape: ListTagOptionsOutput
  },
  errors: [
    {
      shape: TagOptionNotMigratedException
    },
    {
      shape: InvalidParametersException
    }
  ]
};
