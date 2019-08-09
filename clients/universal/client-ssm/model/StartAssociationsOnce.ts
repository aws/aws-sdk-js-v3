import { StartAssociationsOnceInput } from "./StartAssociationsOnceInput";
import { StartAssociationsOnceOutput } from "./StartAssociationsOnceOutput";
import { InvalidAssociation } from "./InvalidAssociation";
import { AssociationDoesNotExist } from "./AssociationDoesNotExist";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
