import { CreateHsmConfigurationInput } from "./CreateHsmConfigurationInput";
import { CreateHsmConfigurationOutput } from "./CreateHsmConfigurationOutput";
import { HsmConfigurationAlreadyExistsFault } from "./HsmConfigurationAlreadyExistsFault";
import { HsmConfigurationQuotaExceededFault } from "./HsmConfigurationQuotaExceededFault";
import { TagLimitExceededFault } from "./TagLimitExceededFault";
import { InvalidTagFault } from "./InvalidTagFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateHsmConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateHsmConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateHsmConfigurationInput
  },
  output: {
    shape: CreateHsmConfigurationOutput,
    resultWrapper: "CreateHsmConfigurationResult"
  },
  errors: [
    {
      shape: HsmConfigurationAlreadyExistsFault
    },
    {
      shape: HsmConfigurationQuotaExceededFault
    },
    {
      shape: TagLimitExceededFault
    },
    {
      shape: InvalidTagFault
    }
  ]
};
