import { GetReservationPurchaseRecommendationInput } from "../shapes/GetReservationPurchaseRecommendationInput";
import { GetReservationPurchaseRecommendationOutput } from "../shapes/GetReservationPurchaseRecommendationOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { DataUnavailableException } from "../shapes/DataUnavailableException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
