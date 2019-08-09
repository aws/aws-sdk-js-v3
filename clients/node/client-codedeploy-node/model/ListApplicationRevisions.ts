import { ListApplicationRevisionsInput } from "./ListApplicationRevisionsInput";
import { ListApplicationRevisionsOutput } from "./ListApplicationRevisionsOutput";
import { ApplicationDoesNotExistException } from "./ApplicationDoesNotExistException";
import { ApplicationNameRequiredException } from "./ApplicationNameRequiredException";
import { InvalidApplicationNameException } from "./InvalidApplicationNameException";
import { InvalidSortByException } from "./InvalidSortByException";
import { InvalidSortOrderException } from "./InvalidSortOrderException";
import { InvalidBucketNameFilterException } from "./InvalidBucketNameFilterException";
import { InvalidKeyPrefixFilterException } from "./InvalidKeyPrefixFilterException";
import { BucketNameFilterRequiredException } from "./BucketNameFilterRequiredException";
import { InvalidDeployedStateFilterException } from "./InvalidDeployedStateFilterException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListApplicationRevisions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListApplicationRevisions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListApplicationRevisionsInput
  },
  output: {
    shape: ListApplicationRevisionsOutput
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
      shape: InvalidSortByException
    },
    {
      shape: InvalidSortOrderException
    },
    {
      shape: InvalidBucketNameFilterException
    },
    {
      shape: InvalidKeyPrefixFilterException
    },
    {
      shape: BucketNameFilterRequiredException
    },
    {
      shape: InvalidDeployedStateFilterException
    },
    {
      shape: InvalidNextTokenException
    }
  ]
};
