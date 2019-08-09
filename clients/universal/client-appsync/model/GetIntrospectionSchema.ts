import { GetIntrospectionSchemaInput } from "./GetIntrospectionSchemaInput";
import { GetIntrospectionSchemaOutput } from "./GetIntrospectionSchemaOutput";
import { GraphQLSchemaException } from "./GraphQLSchemaException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
