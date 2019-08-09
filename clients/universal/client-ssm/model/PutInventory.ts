import { PutInventoryInput } from "./PutInventoryInput";
import { PutInventoryOutput } from "./PutInventoryOutput";
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
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
