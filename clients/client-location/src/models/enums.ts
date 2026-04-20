// smithy-typescript generated code
/**
 * @public
 */
export type Status = "Active" | "Expired"

/**
 * @public
 */
export type ValidationExceptionReason = "CannotParse" | "FieldValidationFailed" | "Missing" | "Other" | "UnknownField" | "UnknownOperation"

/**
 * @public
 */
export type BatchItemErrorCode = "AccessDeniedError" | "ConflictError" | "InternalServerError" | "ResourceNotFoundError" | "ThrottlingError" | "ValidationError"

/**
 * @public
 */
export type DistanceUnit = "Kilometers" | "Miles"

/**
 * @public
 */
export type OptimizationMode = "FastestRoute" | "ShortestRoute"

/**
 * @public
 */
export type TravelMode = "Bicycle" | "Car" | "Motorcycle" | "Truck" | "Walking"

/**
 * @public
 */
export type DimensionUnit = "Feet" | "Meters"

/**
 * @public
 */
export type VehicleWeightUnit = "Kilograms" | "Pounds"

/**
 * @public
 */
export type RouteMatrixErrorCode = "DeparturePositionNotFound" | "DestinationPositionNotFound" | "OtherValidationError" | "PositionsNotFound" | "RouteNotFound" | "RouteTooLong"

/**
 * @public
 * @enum
 */
export const JobStatus = {
  /**
   * The job has been cancelled and cannot be resumed.
   */
  CANCELLED: "Cancelled",
  /**
   * The job is being cancelled.
   */
  CANCELLING: "Cancelling",
  /**
   * The job has processed all records and is complete.
   */
  COMPLETED: "Completed",
  /**
   * The job has failed to process all records.
   */
  FAILED: "Failed",
  /**
   * The job has not yet started.
   */
  PENDING: "Pending",
  /**
   * The job is currently running.
   */
  RUNNING: "Running",
} as const;
/**
 * @public
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

/**
 * @public
 */
export type PricingPlan = "MobileAssetManagement" | "MobileAssetTracking" | "RequestBasedUsage"

/**
 * @public
 */
export type IntendedUse = "SingleUse" | "Storage"

/**
 * @public
 */
export type PositionFiltering = "AccuracyBased" | "DistanceBased" | "TimeBased"

/**
 * @public
 */
export type ForecastedGeofenceEventType = "ENTER" | "EXIT" | "IDLE"

/**
 * @public
 */
export type SpeedUnit = "KilometersPerHour" | "MilesPerHour"

/**
 * @public
 * @enum
 */
export const JobAction = {
  /**
   * The job will perform address validation over the job's input.
   */
  VALIDATE_ADDRESS: "ValidateAddress",
} as const;
/**
 * @public
 */
export type JobAction = (typeof JobAction)[keyof typeof JobAction];

/**
 * @public
 * @enum
 */
export const ValidateAddressAdditionalFeature = {
  COUNTRY_SPECIFIC_ATTRIBUTES: "CountrySpecificAttributes",
  POSITION: "Position",
} as const;
/**
 * @public
 */
export type ValidateAddressAdditionalFeature =
  (typeof ValidateAddressAdditionalFeature)[keyof typeof ValidateAddressAdditionalFeature];

/**
 * @public
 * @enum
 */
export const JobErrorCode = {
  INTERNAL_SERVER_ERROR: "InternalServerError",
  VALIDATION_ERROR: "ValidationError",
} as const;
/**
 * @public
 */
export type JobErrorCode = (typeof JobErrorCode)[keyof typeof JobErrorCode];

/**
 * @public
 * @enum
 */
export const JobInputFormat = {
  PARQUET: "Parquet",
} as const;
/**
 * @public
 */
export type JobInputFormat = (typeof JobInputFormat)[keyof typeof JobInputFormat];

/**
 * @public
 * @enum
 */
export const JobOutputFormat = {
  PARQUET: "Parquet",
} as const;
/**
 * @public
 */
export type JobOutputFormat = (typeof JobOutputFormat)[keyof typeof JobOutputFormat];
