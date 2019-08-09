import { InternalServerError } from "./InternalServerError";
import { InvalidItemContentException } from "./InvalidItemContentException";
import { TotalSizeLimitExceededException } from "./TotalSizeLimitExceededException";
import { ItemSizeLimitExceededException } from "./ItemSizeLimitExceededException";
import { ComplianceTypeCountLimitExceededException } from "./ComplianceTypeCountLimitExceededException";
import { InvalidResourceType } from "./InvalidResourceType";
import { InvalidResourceId } from "./InvalidResourceId";
export type PutComplianceItemsExceptionsUnion =
  | InternalServerError
  | InvalidItemContentException
  | TotalSizeLimitExceededException
  | ItemSizeLimitExceededException
  | ComplianceTypeCountLimitExceededException
  | InvalidResourceType
  | InvalidResourceId;
