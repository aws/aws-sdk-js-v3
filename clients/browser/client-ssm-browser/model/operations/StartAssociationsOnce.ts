import { StartAssociationsOnceInput } from "../shapes/StartAssociationsOnceInput";
import { StartAssociationsOnceOutput } from "../shapes/StartAssociationsOnceOutput";
import { InvalidAssociation } from "../shapes/InvalidAssociation";
import { AssociationDoesNotExist } from "../shapes/AssociationDoesNotExist";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartAssociationsOnce: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartAssociationsOnce",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartAssociationsOnceInput
  },
  output: {
    shape: StartAssociationsOnceOutput
  },
  errors: [
    {
      shape: InvalidAssociation
    },
    {
      shape: AssociationDoesNotExist
    }
  ]
};
