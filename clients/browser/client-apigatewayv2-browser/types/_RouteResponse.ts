import {
  _ParameterConstraints,
  _UnmarshalledParameterConstraints
} from "./_ParameterConstraints";

/**
 * <p>Represents a route response.</p>
 */
export interface _RouteResponse {
  /**
   * <p>Represents the model selection expression of a route response.</p>
   */
  ModelSelectionExpression?: string;

  /**
   * <p>Represents the response models of a route response.</p>
   */
  ResponseModels?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>Represents the response parameters of a route response.</p>
   */
  ResponseParameters?:
    | { [key: string]: _ParameterConstraints }
    | Iterable<[string, _ParameterConstraints]>;

  /**
   * <p>Represents the identifier of a route response.</p>
   */
  RouteResponseId?: string;

  /**
   * <p>Represents the route response key of a route response.</p>
   */
  RouteResponseKey: string;
}

export interface _UnmarshalledRouteResponse extends _RouteResponse {
  /**
   * <p>Represents the response models of a route response.</p>
   */
  ResponseModels?: { [key: string]: string };

  /**
   * <p>Represents the response parameters of a route response.</p>
   */
  ResponseParameters?: { [key: string]: _UnmarshalledParameterConstraints };
}
