import { GetIntrospectionSchemaInput } from "../shapes/GetIntrospectionSchemaInput";
import { GetIntrospectionSchemaOutput } from "../shapes/GetIntrospectionSchemaOutput";
import { GraphQLSchemaException } from "../shapes/GraphQLSchemaException";
import { NotFoundException } from "../shapes/NotFoundException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetIntrospectionSchema: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetIntrospectionSchema",
  http: {
    method: "GET",
    requestUri: "/v1/apis/{apiId}/schema"
  },
  input: {
    shape: GetIntrospectionSchemaInput
  },
  output: {
    shape: GetIntrospectionSchemaOutput
  },
  errors: [
    {
      shape: GraphQLSchemaException
    },
    {
      shape: NotFoundException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: InternalFailureException
    }
  ]
};
