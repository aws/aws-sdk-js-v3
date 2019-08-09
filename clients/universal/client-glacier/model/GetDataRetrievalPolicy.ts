import { GetDataRetrievalPolicyInput } from "./GetDataRetrievalPolicyInput";
import { GetDataRetrievalPolicyOutput } from "./GetDataRetrievalPolicyOutput";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
