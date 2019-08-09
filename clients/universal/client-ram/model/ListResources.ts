import { ListResourcesInput } from "./ListResourcesInput";
import { ListResourcesOutput } from "./ListResourcesOutput";
import { InvalidResourceTypeException } from "./InvalidResourceTypeException";
import { UnknownResourceException } from "./UnknownResourceException";
import { MalformedArnException } from "./MalformedArnException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ServerInternalException } from "./ServerInternalException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
