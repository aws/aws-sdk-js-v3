import { SetDataRetrievalPolicyInput } from "../shapes/SetDataRetrievalPolicyInput";
import { SetDataRetrievalPolicyOutput } from "../shapes/SetDataRetrievalPolicyOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SetDataRetrievalPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetDataRetrievalPolicy",
  http: {
    method: "PUT",
    requestUri: "/{accountId}/policies/data-retrieval"
  },
  input: {
    shape: SetDataRetrievalPolicyInput
  },
  output: {
    shape: SetDataRetrievalPolicyOutput
  },
  errors: [
    {
      shape: InvalidParameterValueException
    },
    {
      shape: MissingParameterValueException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
