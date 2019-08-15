import { PutComplianceItemsInput } from "../shapes/PutComplianceItemsInput";
import { PutComplianceItemsOutput } from "../shapes/PutComplianceItemsOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { InvalidItemContentException } from "../shapes/InvalidItemContentException";
import { TotalSizeLimitExceededException } from "../shapes/TotalSizeLimitExceededException";
import { ItemSizeLimitExceededException } from "../shapes/ItemSizeLimitExceededException";
import { ComplianceTypeCountLimitExceededException } from "../shapes/ComplianceTypeCountLimitExceededException";
import { InvalidResourceType } from "../shapes/InvalidResourceType";
import { InvalidResourceId } from "../shapes/InvalidResourceId";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutComplianceItems: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutComplianceItems",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutComplianceItemsInput
  },
  output: {
    shape: PutComplianceItemsOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: InvalidItemContentException
    },
    {
      shape: TotalSizeLimitExceededException
    },
    {
      shape: ItemSizeLimitExceededException
    },
    {
      shape: ComplianceTypeCountLimitExceededException
    },
    {
      shape: InvalidResourceType
    },
    {
      shape: InvalidResourceId
    }
  ]
};
