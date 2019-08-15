import { ListApplicationRevisionsInput } from "../shapes/ListApplicationRevisionsInput";
import { ListApplicationRevisionsOutput } from "../shapes/ListApplicationRevisionsOutput";
import { ApplicationDoesNotExistException } from "../shapes/ApplicationDoesNotExistException";
import { ApplicationNameRequiredException } from "../shapes/ApplicationNameRequiredException";
import { InvalidApplicationNameException } from "../shapes/InvalidApplicationNameException";
import { InvalidSortByException } from "../shapes/InvalidSortByException";
import { InvalidSortOrderException } from "../shapes/InvalidSortOrderException";
import { InvalidBucketNameFilterException } from "../shapes/InvalidBucketNameFilterException";
import { InvalidKeyPrefixFilterException } from "../shapes/InvalidKeyPrefixFilterException";
import { BucketNameFilterRequiredException } from "../shapes/BucketNameFilterRequiredException";
import { InvalidDeployedStateFilterException } from "../shapes/InvalidDeployedStateFilterException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
