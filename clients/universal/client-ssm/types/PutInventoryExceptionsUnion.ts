import { InternalServerError } from "./InternalServerError";
import { InvalidInstanceId } from "./InvalidInstanceId";
import { InvalidTypeNameException } from "./InvalidTypeNameException";
import { InvalidItemContentException } from "./InvalidItemContentException";
import { TotalSizeLimitExceededException } from "./TotalSizeLimitExceededException";
import { ItemSizeLimitExceededException } from "./ItemSizeLimitExceededException";
import { ItemContentMismatchException } from "./ItemContentMismatchException";
import { CustomSchemaCountLimitExceededException } from "./CustomSchemaCountLimitExceededException";
import { UnsupportedInventorySchemaVersionException } from "./UnsupportedInventorySchemaVersionException";
import { UnsupportedInventoryItemContextException } from "./UnsupportedInventoryItemContextException";
import { InvalidInventoryItemContextException } from "./InvalidInventoryItemContextException";
import { SubTypeCountLimitExceededException } from "./SubTypeCountLimitExceededException";
export type PutInventoryExceptionsUnion =
  | InternalServerError
  | InvalidInstanceId
  | InvalidTypeNameException
  | InvalidItemContentException
  | TotalSizeLimitExceededException
  | ItemSizeLimitExceededException
  | ItemContentMismatchException
  | CustomSchemaCountLimitExceededException
  | UnsupportedInventorySchemaVersionException
  | UnsupportedInventoryItemContextException
  | InvalidInventoryItemContextException
  | SubTypeCountLimitExceededException;
