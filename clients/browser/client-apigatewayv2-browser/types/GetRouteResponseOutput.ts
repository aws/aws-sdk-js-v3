import { _UnmarshalledParameterConstraints } from "./_ParameterConstraints";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetRouteResponseOutput shape
 */
export interface GetRouteResponseOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Represents the model selection expression of a route response.</p>
   */
  ModelSelectionExpression?: string;

  /**
   * <p>Represents the response models of a route response.</p>
   */
  ResponseModels?: { [key: string]: string };

  /**
   * <p>Represents the response parameters of a route response.</p>
   */
  ResponseParameters?: { [key: string]: _UnmarshalledParameterConstraints };

  /**
   * <p>Represents the identifier of a route response.</p>
   */
  RouteResponseId?: string;

  /**
   * <p>Represents the route response key of a route response.</p>
   */
  RouteResponseKey?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
