import { CreateHsmConfigurationInput } from "../shapes/CreateHsmConfigurationInput";
import { CreateHsmConfigurationOutput } from "../shapes/CreateHsmConfigurationOutput";
import { HsmConfigurationAlreadyExistsFault } from "../shapes/HsmConfigurationAlreadyExistsFault";
import { HsmConfigurationQuotaExceededFault } from "../shapes/HsmConfigurationQuotaExceededFault";
import { TagLimitExceededFault } from "../shapes/TagLimitExceededFault";
import { InvalidTagFault } from "../shapes/InvalidTagFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
