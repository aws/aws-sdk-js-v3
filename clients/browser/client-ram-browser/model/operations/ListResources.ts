import { ListResourcesInput } from "../shapes/ListResourcesInput";
import { ListResourcesOutput } from "../shapes/ListResourcesOutput";
import { InvalidResourceTypeException } from "../shapes/InvalidResourceTypeException";
import { UnknownResourceException } from "../shapes/UnknownResourceException";
import { MalformedArnException } from "../shapes/MalformedArnException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ServerInternalException } from "../shapes/ServerInternalException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListResources: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListResources",
  http: {
    method: "POST",
    requestUri: "/listresources"
  },
  input: {
    shape: ListResourcesInput
  },
  output: {
    shape: ListResourcesOutput
  },
  errors: [
    {
      shape: InvalidResourceTypeException
    },
    {
      shape: UnknownResourceException
    },
    {
      shape: MalformedArnException
    },
    {
      shape: InvalidNextTokenException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ServerInternalException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
