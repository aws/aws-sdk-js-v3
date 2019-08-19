import { GetDataRetrievalPolicyInput } from "../shapes/GetDataRetrievalPolicyInput";
import { GetDataRetrievalPolicyOutput } from "../shapes/GetDataRetrievalPolicyOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetDataRetrievalPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDataRetrievalPolicy",
  http: {
    method: "GET",
    requestUri: "/{accountId}/policies/data-retrieval"
  },
  input: {
    shape: GetDataRetrievalPolicyInput
  },
  output: {
    shape: GetDataRetrievalPolicyOutput
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
