import { ListInstanceFleetsInput } from "./ListInstanceFleetsInput";
import { ListInstanceFleetsOutput } from "./ListInstanceFleetsOutput";
import { InternalServerException } from "./InternalServerException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListInstanceFleets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListInstanceFleets",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListInstanceFleetsInput
  },
  output: {
    shape: ListInstanceFleetsOutput
  },
  errors: [
    {
      shape: InternalServerException
    },
    {
      shape: InvalidRequestException
    }
  ]
};
