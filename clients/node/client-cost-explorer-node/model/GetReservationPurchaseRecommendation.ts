import { GetReservationPurchaseRecommendationInput } from "./GetReservationPurchaseRecommendationInput";
import { GetReservationPurchaseRecommendationOutput } from "./GetReservationPurchaseRecommendationOutput";
import { LimitExceededException } from "./LimitExceededException";
import { DataUnavailableException } from "./DataUnavailableException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetReservationPurchaseRecommendation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetReservationPurchaseRecommendation",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetReservationPurchaseRecommendationInput
  },
  output: {
    shape: GetReservationPurchaseRecommendationOutput
  },
  errors: [
    {
      shape: LimitExceededException
    },
    {
      shape: DataUnavailableException
    },
    {
      shape: InvalidNextTokenException
    }
  ]
};
