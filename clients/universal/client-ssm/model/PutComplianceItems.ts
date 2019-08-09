import { PutComplianceItemsInput } from "./PutComplianceItemsInput";
import { PutComplianceItemsOutput } from "./PutComplianceItemsOutput";
import { InternalServerError } from "./InternalServerError";
import { InvalidItemContentException } from "./InvalidItemContentException";
import { TotalSizeLimitExceededException } from "./TotalSizeLimitExceededException";
import { ItemSizeLimitExceededException } from "./ItemSizeLimitExceededException";
import { ComplianceTypeCountLimitExceededException } from "./ComplianceTypeCountLimitExceededException";
import { InvalidResourceType } from "./InvalidResourceType";
import { InvalidResourceId } from "./InvalidResourceId";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
