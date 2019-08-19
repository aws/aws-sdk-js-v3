import { GetJobUnlockCodeInput } from "../shapes/GetJobUnlockCodeInput";
import { GetJobUnlockCodeOutput } from "../shapes/GetJobUnlockCodeOutput";
import { InvalidResourceException } from "../shapes/InvalidResourceException";
import { InvalidJobStateException } from "../shapes/InvalidJobStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetJobUnlockCode: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetJobUnlockCode",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetJobUnlockCodeInput
  },
  output: {
    shape: GetJobUnlockCodeOutput
  },
  errors: [
    {
      shape: InvalidResourceException
    },
    {
      shape: InvalidJobStateException
    }
  ]
};
