import { GraphQLSchemaException } from "./GraphQLSchemaException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
export type GetIntrospectionSchemaExceptionsUnion =
  | GraphQLSchemaException
  | NotFoundException
  | UnauthorizedException
  | InternalFailureException;
