import { GetInventoryInput } from "./GetInventoryInput";
import { GetInventoryOutput } from "./GetInventoryOutput";
import { InternalServerError } from "./InternalServerError";
import { InvalidFilter } from "./InvalidFilter";
import { InvalidInventoryGroupException } from "./InvalidInventoryGroupException";
import { InvalidNextToken } from "./InvalidNextToken";
import { InvalidTypeNameException } from "./InvalidTypeNameException";
import { InvalidAggregatorException } from "./InvalidAggregatorException";
import { InvalidResultAttributeException } from "./InvalidResultAttributeException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetInventory: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetInventory",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetInventoryInput
  },
  output: {
    shape: GetInventoryOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: InvalidFilter
    },
    {
      shape: InvalidInventoryGroupException
    },
    {
      shape: InvalidNextToken
    },
    {
      shape: InvalidTypeNameException
    },
    {
      shape: InvalidAggregatorException
    },
    {
      shape: InvalidResultAttributeException
    }
  ]
};
