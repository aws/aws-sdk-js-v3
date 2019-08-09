import { BatchGetApplicationRevisionsInput } from "./BatchGetApplicationRevisionsInput";
import { BatchGetApplicationRevisionsOutput } from "./BatchGetApplicationRevisionsOutput";
import { ApplicationDoesNotExistException } from "./ApplicationDoesNotExistException";
import { ApplicationNameRequiredException } from "./ApplicationNameRequiredException";
import { InvalidApplicationNameException } from "./InvalidApplicationNameException";
import { RevisionRequiredException } from "./RevisionRequiredException";
import { InvalidRevisionException } from "./InvalidRevisionException";
import { BatchLimitExceededException } from "./BatchLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
