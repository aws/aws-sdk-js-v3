import { DeleteLayerVersionInput } from "./DeleteLayerVersionInput";
import { DeleteLayerVersionOutput } from "./DeleteLayerVersionOutput";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteLayerVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteLayerVersion",
  http: {
    method: "DELETE",
    requestUri: "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}"
  },
  input: {
    shape: DeleteLayerVersionInput
  },
  output: {
    shape: DeleteLayerVersionOutput
  },
  errors: [
    {
      shape: ServiceException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
