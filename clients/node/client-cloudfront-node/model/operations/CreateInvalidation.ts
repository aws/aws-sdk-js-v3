import { CreateInvalidationInput } from "../shapes/CreateInvalidationInput";
import { CreateInvalidationOutput } from "../shapes/CreateInvalidationOutput";
import { AccessDenied } from "../shapes/AccessDenied";
import { MissingBody } from "../shapes/MissingBody";
import { InvalidArgument } from "../shapes/InvalidArgument";
import { NoSuchDistribution } from "../shapes/NoSuchDistribution";
import { BatchTooLarge } from "../shapes/BatchTooLarge";
import { TooManyInvalidationsInProgress } from "../shapes/TooManyInvalidationsInProgress";
import { InconsistentQuantities } from "../shapes/InconsistentQuantities";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateInvalidation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateInvalidation",
  http: {
    method: "POST",
    requestUri: "/2019-03-26/distribution/{DistributionId}/invalidation"
  },
  input: {
    shape: CreateInvalidationInput
  },
  output: {
    shape: CreateInvalidationOutput
  },
  errors: [
    {
      shape: AccessDenied
    },
    {
      shape: MissingBody
    },
    {
      shape: InvalidArgument
    },
    {
      shape: NoSuchDistribution
    },
    {
      shape: BatchTooLarge
    },
    {
      shape: TooManyInvalidationsInProgress
    },
    {
      shape: InconsistentQuantities
    }
  ]
};
