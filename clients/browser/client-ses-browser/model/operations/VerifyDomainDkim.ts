import { VerifyDomainDkimInput } from "../shapes/VerifyDomainDkimInput";
import { VerifyDomainDkimOutput } from "../shapes/VerifyDomainDkimOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const VerifyDomainDkim: _Operation_ = {
  metadata: ServiceMetadata,
  name: "VerifyDomainDkim",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: VerifyDomainDkimInput
  },
  output: {
    shape: VerifyDomainDkimOutput,
    resultWrapper: "VerifyDomainDkimResult"
  },
  errors: []
};
