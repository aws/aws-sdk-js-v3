import { PutScheduledUpdateGroupActionInput } from "../shapes/PutScheduledUpdateGroupActionInput";
import { PutScheduledUpdateGroupActionOutput } from "../shapes/PutScheduledUpdateGroupActionOutput";
import { AlreadyExistsFault } from "../shapes/AlreadyExistsFault";
import { LimitExceededFault } from "../shapes/LimitExceededFault";
import { ResourceContentionFault } from "../shapes/ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutScheduledUpdateGroupAction: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutScheduledUpdateGroupAction",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutScheduledUpdateGroupActionInput
  },
  output: {
    shape: PutScheduledUpdateGroupActionOutput
  },
  errors: [
    {
      shape: AlreadyExistsFault
    },
    {
      shape: LimitExceededFault
    },
    {
      shape: ResourceContentionFault
    }
  ]
};
