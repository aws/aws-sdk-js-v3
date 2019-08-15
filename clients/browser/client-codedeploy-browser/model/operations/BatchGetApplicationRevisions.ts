import { BatchGetApplicationRevisionsInput } from "../shapes/BatchGetApplicationRevisionsInput";
import { BatchGetApplicationRevisionsOutput } from "../shapes/BatchGetApplicationRevisionsOutput";
import { ApplicationDoesNotExistException } from "../shapes/ApplicationDoesNotExistException";
import { ApplicationNameRequiredException } from "../shapes/ApplicationNameRequiredException";
import { InvalidApplicationNameException } from "../shapes/InvalidApplicationNameException";
import { RevisionRequiredException } from "../shapes/RevisionRequiredException";
import { InvalidRevisionException } from "../shapes/InvalidRevisionException";
import { BatchLimitExceededException } from "../shapes/BatchLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const BatchGetApplicationRevisions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchGetApplicationRevisions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchGetApplicationRevisionsInput
  },
  output: {
    shape: BatchGetApplicationRevisionsOutput
  },
  errors: [
    {
      shape: ApplicationDoesNotExistException
    },
    {
      shape: ApplicationNameRequiredException
    },
    {
      shape: InvalidApplicationNameException
    },
    {
      shape: RevisionRequiredException
    },
    {
      shape: InvalidRevisionException
    },
    {
      shape: BatchLimitExceededException
    }
  ]
};
