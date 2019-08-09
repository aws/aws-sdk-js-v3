import { DescribeCustomKeyStoresInput } from "./DescribeCustomKeyStoresInput";
import { DescribeCustomKeyStoresOutput } from "./DescribeCustomKeyStoresOutput";
import { CustomKeyStoreNotFoundException } from "./CustomKeyStoreNotFoundException";
import { KMSInternalException } from "./KMSInternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeCustomKeyStores: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeCustomKeyStores",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeCustomKeyStoresInput
  },
  output: {
    shape: DescribeCustomKeyStoresOutput
  },
  errors: [
    {
      shape: CustomKeyStoreNotFoundException
    },
    {
      shape: KMSInternalException
    }
  ]
};
