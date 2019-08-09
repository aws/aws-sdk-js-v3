import { PutScheduledUpdateGroupActionInput } from "./PutScheduledUpdateGroupActionInput";
import { PutScheduledUpdateGroupActionOutput } from "./PutScheduledUpdateGroupActionOutput";
import { AlreadyExistsFault } from "./AlreadyExistsFault";
import { LimitExceededFault } from "./LimitExceededFault";
import { ResourceContentionFault } from "./ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
