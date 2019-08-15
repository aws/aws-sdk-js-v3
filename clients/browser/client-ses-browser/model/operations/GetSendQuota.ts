import { GetSendQuotaInput } from "../shapes/GetSendQuotaInput";
import { GetSendQuotaOutput } from "../shapes/GetSendQuotaOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetSendQuota: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSendQuota",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetSendQuotaInput
  },
  output: {
    shape: GetSendQuotaOutput,
    resultWrapper: "GetSendQuotaResult"
  },
  errors: []
};
