import { CreateInvalidationInput } from "./CreateInvalidationInput";
import { CreateInvalidationOutput } from "./CreateInvalidationOutput";
import { AccessDenied } from "./AccessDenied";
import { MissingBody } from "./MissingBody";
import { InvalidArgument } from "./InvalidArgument";
import { NoSuchDistribution } from "./NoSuchDistribution";
import { BatchTooLarge } from "./BatchTooLarge";
import { TooManyInvalidationsInProgress } from "./TooManyInvalidationsInProgress";
import { InconsistentQuantities } from "./InconsistentQuantities";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateInvalidation2019_03_26: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateInvalidation2019_03_26",
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
