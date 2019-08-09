import { RemoveTagsFromResourceInput } from "./RemoveTagsFromResourceInput";
import { RemoveTagsFromResourceOutput } from "./RemoveTagsFromResourceOutput";
import { CloudHsmServiceException } from "./CloudHsmServiceException";
import { CloudHsmInternalException } from "./CloudHsmInternalException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
      shape: CloudHsmServiceException
    },
    {
      shape: CloudHsmInternalException
    },
    {
      shape: InvalidRequestException
    }
  ]
};
