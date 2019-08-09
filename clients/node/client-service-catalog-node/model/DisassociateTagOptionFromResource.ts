import { DisassociateTagOptionFromResourceInput } from "./DisassociateTagOptionFromResourceInput";
import { DisassociateTagOptionFromResourceOutput } from "./DisassociateTagOptionFromResourceOutput";
import { TagOptionNotMigratedException } from "./TagOptionNotMigratedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
