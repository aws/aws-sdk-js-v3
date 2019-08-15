import { ModifyInstanceCreditSpecificationInput } from "../shapes/ModifyInstanceCreditSpecificationInput";
import { ModifyInstanceCreditSpecificationOutput } from "../shapes/ModifyInstanceCreditSpecificationOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ModifyInstanceCreditSpecification: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyInstanceCreditSpecification",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyInstanceCreditSpecificationInput
  },
  output: {
    shape: ModifyInstanceCreditSpecificationOutput
  },
  errors: []
};
