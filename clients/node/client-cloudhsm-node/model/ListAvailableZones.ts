import { ListAvailableZonesInput } from "./ListAvailableZonesInput";
import { ListAvailableZonesOutput } from "./ListAvailableZonesOutput";
import { CloudHsmServiceException } from "./CloudHsmServiceException";
import { CloudHsmInternalException } from "./CloudHsmInternalException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
