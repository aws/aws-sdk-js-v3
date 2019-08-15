import { ListAvailableZonesInput } from "../shapes/ListAvailableZonesInput";
import { ListAvailableZonesOutput } from "../shapes/ListAvailableZonesOutput";
import { CloudHsmServiceException } from "../shapes/CloudHsmServiceException";
import { CloudHsmInternalException } from "../shapes/CloudHsmInternalException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListAvailableZones: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListAvailableZones",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListAvailableZonesInput
  },
  output: {
    shape: ListAvailableZonesOutput
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
