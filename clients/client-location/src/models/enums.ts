// smithy-typescript generated code
/**
 * @public
 */
export type Status = "Active" | "Expired";

/**
 * @public
 */
export type ValidationExceptionReason =
  | "CannotParse"
  | "FieldValidationFailed"
  | "Missing"
  | "Other"
  | "UnknownField"
  | "UnknownOperation";

/**
 * @public
 */
export type BatchItemErrorCode =
  | "AccessDeniedError"
  | "ConflictError"
  | "InternalServerError"
  | "ResourceNotFoundError"
  | "ThrottlingError"
  | "ValidationError";

/**
 * @public
 */
export type DistanceUnit = "Kilometers" | "Miles";

/**
 * @public
 */
export type OptimizationMode = "FastestRoute" | "ShortestRoute";

/**
 * @public
 */
export type TravelMode = "Bicycle" | "Car" | "Motorcycle" | "Truck" | "Walking";

/**
 * @public
 */
export type DimensionUnit = "Feet" | "Meters";

/**
 * @public
 */
export type VehicleWeightUnit = "Kilograms" | "Pounds";

/**
 * @public
 */
export type RouteMatrixErrorCode =
  | "DeparturePositionNotFound"
  | "DestinationPositionNotFound"
  | "OtherValidationError"
  | "PositionsNotFound"
  | "RouteNotFound"
  | "RouteTooLong";

/**
 * @public
 */
export type PricingPlan = "MobileAssetManagement" | "MobileAssetTracking" | "RequestBasedUsage";

/**
 * @public
 */
export type IntendedUse = "SingleUse" | "Storage";

/**
 * @public
 */
export type PositionFiltering = "AccuracyBased" | "DistanceBased" | "TimeBased";

/**
 * @public
 */
export type ForecastedGeofenceEventType = "ENTER" | "EXIT" | "IDLE";

/**
 * @public
 */
export type SpeedUnit = "KilometersPerHour" | "MilesPerHour";
