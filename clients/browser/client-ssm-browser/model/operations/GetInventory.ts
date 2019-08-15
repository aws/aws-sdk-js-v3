import { GetInventoryInput } from "../shapes/GetInventoryInput";
import { GetInventoryOutput } from "../shapes/GetInventoryOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { InvalidFilter } from "../shapes/InvalidFilter";
import { InvalidInventoryGroupException } from "../shapes/InvalidInventoryGroupException";
import { InvalidNextToken } from "../shapes/InvalidNextToken";
import { InvalidTypeNameException } from "../shapes/InvalidTypeNameException";
import { InvalidAggregatorException } from "../shapes/InvalidAggregatorException";
import { InvalidResultAttributeException } from "../shapes/InvalidResultAttributeException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
