import { DisassociateTagOptionFromResourceInput } from "../shapes/DisassociateTagOptionFromResourceInput";
import { DisassociateTagOptionFromResourceOutput } from "../shapes/DisassociateTagOptionFromResourceOutput";
import { TagOptionNotMigratedException } from "../shapes/TagOptionNotMigratedException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisassociateTagOptionFromResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateTagOptionFromResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisassociateTagOptionFromResourceInput
  },
  output: {
    shape: DisassociateTagOptionFromResourceOutput
  },
  errors: [
    {
      shape: TagOptionNotMigratedException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
