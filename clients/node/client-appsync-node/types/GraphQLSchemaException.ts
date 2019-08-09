import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The GraphQL schema is not valid.</p>
 */
export interface GraphQLSchemaException
  extends __ServiceException__<_GraphQLSchemaExceptionDetails> {
  name: "GraphQLSchemaException";
}

export interface _GraphQLSchemaExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
