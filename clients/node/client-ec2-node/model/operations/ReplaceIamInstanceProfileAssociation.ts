import { ReplaceIamInstanceProfileAssociationInput } from "../shapes/ReplaceIamInstanceProfileAssociationInput";
import { ReplaceIamInstanceProfileAssociationOutput } from "../shapes/ReplaceIamInstanceProfileAssociationOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ReplaceIamInstanceProfileAssociation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ReplaceIamInstanceProfileAssociation",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ReplaceIamInstanceProfileAssociationInput
  },
  output: {
    shape: ReplaceIamInstanceProfileAssociationOutput
  },
  errors: []
};
