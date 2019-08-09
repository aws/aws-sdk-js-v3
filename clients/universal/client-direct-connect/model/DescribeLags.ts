import { DescribeLagsInput } from "./DescribeLagsInput";
import { DescribeLagsOutput } from "./DescribeLagsOutput";
import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeLags: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeLags",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeLagsInput
  },
  output: {
    shape: DescribeLagsOutput
  },
  errors: [
    {
      shape: DirectConnectServerException
    },
    {
      shape: DirectConnectClientException
    }
  ]
};
