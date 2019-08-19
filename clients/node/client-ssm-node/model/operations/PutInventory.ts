import { PutInventoryInput } from "../shapes/PutInventoryInput";
import { PutInventoryOutput } from "../shapes/PutInventoryOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { InvalidInstanceId } from "../shapes/InvalidInstanceId";
import { InvalidTypeNameException } from "../shapes/InvalidTypeNameException";
import { InvalidItemContentException } from "../shapes/InvalidItemContentException";
import { TotalSizeLimitExceededException } from "../shapes/TotalSizeLimitExceededException";
import { ItemSizeLimitExceededException } from "../shapes/ItemSizeLimitExceededException";
import { ItemContentMismatchException } from "../shapes/ItemContentMismatchException";
import { CustomSchemaCountLimitExceededException } from "../shapes/CustomSchemaCountLimitExceededException";
import { UnsupportedInventorySchemaVersionException } from "../shapes/UnsupportedInventorySchemaVersionException";
import { UnsupportedInventoryItemContextException } from "../shapes/UnsupportedInventoryItemContextException";
import { InvalidInventoryItemContextException } from "../shapes/InvalidInventoryItemContextException";
import { SubTypeCountLimitExceededException } from "../shapes/SubTypeCountLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutInventory: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutInventory",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutInventoryInput
  },
  output: {
    shape: PutInventoryOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: InvalidInstanceId
    },
    {
      shape: InvalidTypeNameException
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
      shape: ItemContentMismatchException
    },
    {
      shape: CustomSchemaCountLimitExceededException
    },
    {
      shape: UnsupportedInventorySchemaVersionException
    },
    {
      shape: UnsupportedInventoryItemContextException
    },
    {
      shape: InvalidInventoryItemContextException
    },
    {
      shape: SubTypeCountLimitExceededException
    }
  ]
};
