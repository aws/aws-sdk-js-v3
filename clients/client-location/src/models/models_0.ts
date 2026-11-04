// smithy-typescript generated code
import type {
  BatchItemErrorCode,
  DimensionUnit,
  DistanceUnit,
  ForecastedGeofenceEventType,
  IntendedUse,
  JobAction,
  JobErrorCode,
  JobInputFormat,
  JobOutputFormat,
  JobStatus,
  OptimizationMode,
  PositionFiltering,
  PricingPlan,
  RouteMatrixErrorCode,
  SpeedUnit,
  Status,
  TravelMode,
  ValidateAddressAdditionalFeature,
  VehicleWeightUnit,
} from "./enums";

/**
 * Unique identifying information for an Android app. Consists of a package name and a 20 byte SHA-1 certificate fingerprint.
 *
 * @public
 */
export interface AndroidApp {
  /**
   * Unique package name identifier for an Android app.
   *
   * Example: `com.mydomain.appname`
   *
   * @public
   */
  Package: string | undefined;

  /**
   * 20 byte SHA-1 certificate fingerprint associated with the Android app signing certificate.
   *
   * Example: `BB:0D:AC:74:D3:21:E1:43:67:71:9B:62:91:AF:A1:66:6E:44:5D:75`
   *
   * @public
   */
  CertificateFingerprint: string | undefined;
}

/**
 * Options for filtering API keys.
 *
 * @public
 */
export interface ApiKeyFilter {
  /**
   * Filter on `Active` or `Expired` API keys.
   *
   * @public
   */
  KeyStatus?: Status | undefined;
}

/**
 * Unique identifying information for an Apple app (iOS, macOS, tvOS and watchOS). Consists of an Apple Bundle ID.
 *
 * @public
 */
export interface AppleApp {
  /**
   * The unique identifier of the app across all Apple platforms (iOS, macOS, tvOS and watchOS).
   *
   * Example: `com.mydomain.appname`
   *
   * @public
   */
  BundleId: string | undefined;
}

/**
 * API Restrictions on the allowed actions, resources, and referers for an API key resource.
 *
 * @public
 */
export interface ApiKeyRestrictions {
  /**
   * A list of allowed actions that an API key resource grants permissions to perform. You must have at least one action for each type of resource. For example, if you have a place resource, you must include at least one place action.
   *
   * The following are valid values for the actions.
   *
   * - **Map actions**
   *
   *   - `geo:GetMap*` - Allows all actions needed for map rendering.
   *   - `geo-maps:GetTile` - Allows retrieving map tiles.
   *   - `geo-maps:GetStaticMap` - Allows retrieving static map images.
   *   - `geo-maps:*` - Allows all actions related to map functionalities.
   * - **Place actions**
   *
   *   - `geo:SearchPlaceIndexForText` - Allows geocoding.
   *   - `geo:SearchPlaceIndexForPosition` - Allows reverse geocoding.
   *   - `geo:SearchPlaceIndexForSuggestions` - Allows generating suggestions from text.
   *   - `GetPlace` - Allows finding a place by place ID.
   *   - `geo-places:Geocode` - Allows geocoding using place information.
   *   - `geo-places:ReverseGeocode` - Allows reverse geocoding from location coordinates.
   *   - `geo-places:SearchNearby` - Allows searching for places near a location.
   *   - `geo-places:SearchText` - Allows searching for places based on text input.
   *   - `geo-places:Autocomplete` - Allows auto-completion of place names based on text input.
   *   - `geo-places:Suggest` - Allows generating suggestions for places based on partial input.
   *   - `geo-places:GetPlace` - Allows finding a place by its ID.
   *   - `geo-places:*` - Allows all actions related to place services.
   * - **Route actions**
   *
   *   - `geo:CalculateRoute` - Allows point to point routing.
   *   - `geo:CalculateRouteMatrix` - Allows calculating a matrix of routes.
   *   - `geo-routes:CalculateRoutes` - Allows calculating multiple routes between points.
   *   - `geo-routes:CalculateRouteMatrix` - Allows calculating a matrix of routes between points.
   *   - `geo-routes:CalculateIsolines` - Allows calculating isolines for a given area.
   *   - `geo-routes:OptimizeWaypoints` - Allows optimizing the order of waypoints in a route.
   *   - `geo-routes:SnapToRoads` - Allows snapping a route to the nearest roads.
   *   - `geo-routes:*` - Allows all actions related to routing functionalities.
   *
   * > **Note:** You must use these strings exactly. For example, to provide access to map rendering, the only valid action is `geo:GetMap*` as an input to the list. `["geo:GetMap*"]` is valid but `["geo:GetMapTile"]` is not. Similarly, you cannot use `["geo:SearchPlaceIndexFor*"]` - you must list each of the Place actions separately.
   *
   * @public
   */
  AllowActions: string[] | undefined;

  /**
   * A list of allowed resource ARNs that a API key bearer can perform actions on.
   *
   * - The ARN must be the correct ARN for a map, place, or route ARN. You may include wildcards in the resource-id to match multiple resources of the same type.
   * - The resources must be in the same `partition`, `region`, and `account-id` as the key that is being created.
   * - Other than wildcards, you must include the full ARN, including the `arn`, `partition`, `service`, `region`, `account-id` and `resource-id` delimited by colons (:).
   * - No spaces allowed, even with wildcards. For example, `arn:aws:geo:region:account-id:map/ExampleMap*`.
   *
   * For more information about ARN format, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).
   *
   * @public
   */
  AllowResources: string[] | undefined;

  /**
   * An optional list of allowed HTTP referers for which requests must originate from. Requests using this API key from other domains will not be allowed.
   *
   * Requirements:
   *
   * - Contain only alphanumeric characters (A–Z, a–z, 0–9) or any symbols in this list ``$\-._+!*`(),;/?:@=&``
   * - May contain a percent (%) if followed by 2 hexadecimal digits (A-F, a-f, 0-9); this is used for URL encoding purposes.
   * - May contain wildcard characters question mark (?) and asterisk (*).
   *
   *   Question mark (?) will replace any single character (including hexadecimal digits).
   *
   *   Asterisk (*) will replace any multiple characters (including multiple hexadecimal digits).
   * - No spaces allowed. For example, `https://example.com`.
   *
   * @public
   */
  AllowReferers?: string[] | undefined;

  /**
   * An optional list of allowed Android applications for which requests must originate from. Requests using this API key from other sources will not be allowed.
   *
   * @public
   */
  AllowAndroidApps?: AndroidApp[] | undefined;

  /**
   * An optional list of allowed Apple applications for which requests must originate from. Requests using this API key from other sources will not be allowed.
   *
   * @public
   */
  AllowAppleApps?: AppleApp[] | undefined;
}

/**
 * @public
 */
export interface CreateKeyRequest {
  /**
   * A custom name for the API key resource.
   *
   * Requirements:
   *
   * - Contain only alphanumeric characters (A–Z, a–z, 0–9), hyphens (-), periods (.), and underscores (_).
   * - Must be a unique API key name.
   * - No spaces allowed. For example, `ExampleAPIKey`.
   *
   * @public
   */
  KeyName: string | undefined;

  /**
   * The API key restrictions for the API key resource.
   *
   * @public
   */
  Restrictions: ApiKeyRestrictions | undefined;

  /**
   * An optional description for the API key resource.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The optional timestamp for when the API key resource will expire in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`. One of `NoExpiry` or `ExpireTime` must be set.
   *
   * @public
   */
  ExpireTime?: Date | undefined;

  /**
   * Optionally set to `true` to set no expiration time for the API key. One of `NoExpiry` or `ExpireTime` must be set.
   *
   * @public
   */
  NoExpiry?: boolean | undefined;

  /**
   * Applies one or more tags to the map resource. A tag is a key-value pair that helps manage, identify, search, and filter your resources by labelling them.
   *
   * Format: `"key" : "value"`
   *
   * Restrictions:
   *
   * - Maximum 50 tags per resource
   * - Each resource tag must be unique with a maximum of one value.
   * - Maximum key length: 128 Unicode characters in UTF-8
   * - Maximum value length: 256 Unicode characters in UTF-8
   * - Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @.
   * - Cannot use "aws:" as a prefix for a key.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateKeyResponse {
  /**
   * The key value/string of an API key. This value is used when making API calls to authorize the call. For example, see [GetMapGlyphs](https://docs.aws.amazon.com/location/previous/APIReference/API_GetMapGlyphs.html).
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the API key resource. Used when you need to specify a resource across all Amazon Web Services.
   *
   * - Format example: `arn:aws:geo:region:account-id:key/ExampleKey`
   *
   * @public
   */
  KeyArn: string | undefined;

  /**
   * The name of the API key resource.
   *
   * @public
   */
  KeyName: string | undefined;

  /**
   * The timestamp for when the API key resource was created in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`.
   *
   * @public
   */
  CreateTime: Date | undefined;
}

/**
 * The input failed to meet the constraints specified by the AWS service in a specified field.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The field name where the invalid entry was detected.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A message with the reason for the validation exception error.
   *
   * @public
   */
  Message: string | undefined;
}

/**
 * @public
 */
export interface DeleteKeyRequest {
  /**
   * The name of the API key to delete.
   *
   * @public
   */
  KeyName: string | undefined;

  /**
   * ForceDelete bypasses an API key's expiry conditions and deletes the key. Set the parameter `true` to delete the key or to `false` to not preemptively delete the API key.
   *
   * Valid values: `true`, or `false`.
   *
   * Required: No
   *
   * > **Note:** This action is irreversible. Only use ForceDelete if you are certain the key is no longer in use.
   *
   * @public
   */
  ForceDelete?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteKeyResponse {}

/**
 * @public
 */
export interface DescribeKeyRequest {
  /**
   * The name of the API key resource.
   *
   * @public
   */
  KeyName: string | undefined;
}

/**
 * @public
 */
export interface DescribeKeyResponse {
  /**
   * The key value/string of an API key.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the API key resource. Used when you need to specify a resource across all Amazon Web Services.
   *
   * - Format example: `arn:aws:geo:region:account-id:key/ExampleKey`
   *
   * @public
   */
  KeyArn: string | undefined;

  /**
   * The name of the API key resource.
   *
   * @public
   */
  KeyName: string | undefined;

  /**
   * API Restrictions on the allowed actions, resources, and referers for an API key resource.
   *
   * @public
   */
  Restrictions: ApiKeyRestrictions | undefined;

  /**
   * The timestamp for when the API key resource was created in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`.
   *
   * @public
   */
  CreateTime: Date | undefined;

  /**
   * The timestamp for when the API key resource will expire in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`.
   *
   * @public
   */
  ExpireTime: Date | undefined;

  /**
   * The timestamp for when the API key resource was last updated in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`.
   *
   * @public
   */
  UpdateTime: Date | undefined;

  /**
   * The optional description for the API key resource.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Tags associated with the API key resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListKeysRequest {
  /**
   * An optional limit for the number of resources returned in a single call.
   *
   * Default value: `100`
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.
   *
   * Default value: `null`
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Optionally filter the list to only `Active` or `Expired` API keys.
   *
   * @public
   */
  Filter?: ApiKeyFilter | undefined;
}

/**
 * An API key resource listed in your Amazon Web Services account.
 *
 * @public
 */
export interface ListKeysResponseEntry {
  /**
   * The name of the API key resource.
   *
   * @public
   */
  KeyName: string | undefined;

  /**
   * The timestamp for when the API key resource will expire, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`.
   *
   * @public
   */
  ExpireTime: Date | undefined;

  /**
   * The optional description for the API key resource.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * API Restrictions on the allowed actions, resources, and referers for an API key resource.
   *
   * @public
   */
  Restrictions: ApiKeyRestrictions | undefined;

  /**
   * The timestamp of when the API key was created, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`.
   *
   * @public
   */
  CreateTime: Date | undefined;

  /**
   * The timestamp of when the API key was last updated, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`.
   *
   * @public
   */
  UpdateTime: Date | undefined;
}

/**
 * @public
 */
export interface ListKeysResponse {
  /**
   * Contains API key resources in your Amazon Web Services account. Details include API key name, allowed referers and timestamp for when the API key will expire.
   *
   * @public
   */
  Entries: ListKeysResponseEntry[] | undefined;

  /**
   * A pagination token indicating there are additional pages available. You can use the token in a following request to fetch the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateKeyRequest {
  /**
   * The name of the API key resource to update.
   *
   * @public
   */
  KeyName: string | undefined;

  /**
   * Updates the description for the API key resource.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Updates the timestamp for when the API key resource will expire in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`.
   *
   * @public
   */
  ExpireTime?: Date | undefined;

  /**
   * Whether the API key should expire. Set to `true` to set the API key to have no expiration time.
   *
   * @public
   */
  NoExpiry?: boolean | undefined;

  /**
   * The boolean flag to be included for updating `ExpireTime` or `Restrictions` details.
   *
   * Must be set to `true` to update an API key resource that has been used in the past 7 days.
   *
   * `False` if force update is not preferred
   *
   * Default value: `False`
   *
   * @public
   */
  ForceUpdate?: boolean | undefined;

  /**
   * Updates the API key restrictions for the API key resource.
   *
   * @public
   */
  Restrictions?: ApiKeyRestrictions | undefined;
}

/**
 * @public
 */
export interface UpdateKeyResponse {
  /**
   * The Amazon Resource Name (ARN) for the API key resource. Used when you need to specify a resource across all Amazon Web Services.
   *
   * - Format example: `arn:aws:geo:region:account-id:key/ExampleKey`
   *
   * @public
   */
  KeyArn: string | undefined;

  /**
   * The name of the API key resource.
   *
   * @public
   */
  KeyName: string | undefined;

  /**
   * The timestamp for when the API key resource was last updated in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`.
   *
   * @public
   */
  UpdateTime: Date | undefined;
}

/**
 * @public
 */
export interface AssociateTrackerConsumerRequest {
  /**
   * The name of the tracker resource to be associated with a geofence collection.
   *
   * @public
   */
  TrackerName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the geofence collection to be associated to tracker resource. Used when you need to specify a resource across all Amazon Web Services.
   *
   * - Format example: `arn:aws:geo:region:account-id:geofence-collection/ExampleGeofenceCollectionConsumer`
   *
   * @public
   */
  ConsumerArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateTrackerConsumerResponse {}

/**
 * @public
 */
export interface BatchDeleteDevicePositionHistoryRequest {
  /**
   * The name of the tracker resource to delete the device position history from.
   *
   * @public
   */
  TrackerName: string | undefined;

  /**
   * Devices whose position history you want to delete.
   *
   * - For example, for two devices: `“DeviceIds” : [DeviceId1,DeviceId2]`
   *
   * @public
   */
  DeviceIds: string[] | undefined;
}

/**
 * Contains the batch request error details associated with the request.
 *
 * @public
 */
export interface BatchItemError {
  /**
   * The error code associated with the batch request error.
   *
   * @public
   */
  Code?: BatchItemErrorCode | undefined;

  /**
   * A message with the reason for the batch request error.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Contains the tracker resource details.
 *
 * @public
 */
export interface BatchDeleteDevicePositionHistoryError {
  /**
   * The ID of the device for this position.
   *
   * @public
   */
  DeviceId: string | undefined;

  /**
   * Contains the batch request error details associated with the request.
   *
   * @public
   */
  Error: BatchItemError | undefined;
}

/**
 * @public
 */
export interface BatchDeleteDevicePositionHistoryResponse {
  /**
   * Contains error details for each device history that failed to delete.
   *
   * @public
   */
  Errors: BatchDeleteDevicePositionHistoryError[] | undefined;
}

/**
 * @public
 */
export interface BatchDeleteGeofenceRequest {
  /**
   * The geofence collection storing the geofences to be deleted.
   *
   * @public
   */
  CollectionName: string | undefined;

  /**
   * The batch of geofences to be deleted.
   *
   * @public
   */
  GeofenceIds: string[] | undefined;
}

/**
 * Contains error details for each geofence that failed to delete from the geofence collection.
 *
 * @public
 */
export interface BatchDeleteGeofenceError {
  /**
   * The geofence associated with the error message.
   *
   * @public
   */
  GeofenceId: string | undefined;

  /**
   * Contains details associated to the batch error.
   *
   * @public
   */
  Error: BatchItemError | undefined;
}

/**
 * @public
 */
export interface BatchDeleteGeofenceResponse {
  /**
   * Contains error details for each geofence that failed to delete.
   *
   * @public
   */
  Errors: BatchDeleteGeofenceError[] | undefined;
}

/**
 * Defines the level of certainty of the position.
 *
 * @public
 */
export interface PositionalAccuracy {
  /**
   * Estimated maximum distance, in meters, between the measured position and the true position of a device, along the Earth's surface.
   *
   * @public
   */
  Horizontal: number | undefined;
}

/**
 * Contains the position update details for a device.
 *
 * @public
 */
export interface DevicePositionUpdate {
  /**
   * The device associated to the position update.
   *
   * @public
   */
  DeviceId: string | undefined;

  /**
   * The timestamp at which the device's position was determined. Uses [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`
   *
   * @public
   */
  SampleTime: Date | undefined;

  /**
   * The latest device position defined in [WGS 84](https://earth-info.nga.mil/index.php?dir=wgs84&action=wgs84) format: `[X or longitude, Y or latitude]`.
   *
   * @public
   */
  Position: number[] | undefined;

  /**
   * The accuracy of the device position.
   *
   * @public
   */
  Accuracy?: PositionalAccuracy | undefined;

  /**
   * Associates one of more properties with the position update. A property is a key-value pair stored with the position update and added to any geofence event the update may trigger.
   *
   * Format: `"key" : "value"`
   *
   * @public
   */
  PositionProperties?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface BatchEvaluateGeofencesRequest {
  /**
   * The geofence collection used in evaluating the position of devices against its geofences.
   *
   * @public
   */
  CollectionName: string | undefined;

  /**
   * Contains device details for each device to be evaluated against the given geofence collection.
   *
   * @public
   */
  DevicePositionUpdates: DevicePositionUpdate[] | undefined;
}

/**
 * Contains error details for each device that failed to evaluate its position against the geofences in a given geofence collection.
 *
 * @public
 */
export interface BatchEvaluateGeofencesError {
  /**
   * The device associated with the position evaluation error.
   *
   * @public
   */
  DeviceId: string | undefined;

  /**
   * Specifies a timestamp for when the error occurred in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`
   *
   * @public
   */
  SampleTime: Date | undefined;

  /**
   * Contains details associated to the batch error.
   *
   * @public
   */
  Error: BatchItemError | undefined;
}

/**
 * @public
 */
export interface BatchEvaluateGeofencesResponse {
  /**
   * Contains error details for each device that failed to evaluate its position against the given geofence collection.
   *
   * @public
   */
  Errors: BatchEvaluateGeofencesError[] | undefined;
}

/**
 * @public
 */
export interface BatchGetDevicePositionRequest {
  /**
   * The tracker resource retrieving the device position.
   *
   * @public
   */
  TrackerName: string | undefined;

  /**
   * Devices whose position you want to retrieve.
   *
   * - For example, for two devices: `device-ids=DeviceId1&device-ids=DeviceId2`
   *
   * @public
   */
  DeviceIds: string[] | undefined;
}

/**
 * Contains the device position details.
 *
 * @public
 */
export interface DevicePosition {
  /**
   * The device whose position you retrieved.
   *
   * @public
   */
  DeviceId?: string | undefined;

  /**
   * The timestamp at which the device's position was determined. Uses [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`.
   *
   * @public
   */
  SampleTime: Date | undefined;

  /**
   * The timestamp for when the tracker resource received the device position in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`.
   *
   * @public
   */
  ReceivedTime: Date | undefined;

  /**
   * The last known device position.
   *
   * @public
   */
  Position: number[] | undefined;

  /**
   * The accuracy of the device position.
   *
   * @public
   */
  Accuracy?: PositionalAccuracy | undefined;

  /**
   * The properties associated with the position.
   *
   * @public
   */
  PositionProperties?: Record<string, string> | undefined;
}

/**
 * Contains error details for each device that didn't return a position.
 *
 * @public
 */
export interface BatchGetDevicePositionError {
  /**
   * The ID of the device that didn't return a position.
   *
   * @public
   */
  DeviceId: string | undefined;

  /**
   * Contains details related to the error code.
   *
   * @public
   */
  Error: BatchItemError | undefined;
}

/**
 * @public
 */
export interface BatchGetDevicePositionResponse {
  /**
   * Contains error details for each device that failed to send its position to the tracker resource.
   *
   * @public
   */
  Errors: BatchGetDevicePositionError[] | undefined;

  /**
   * Contains device position details such as the device ID, position, and timestamps for when the position was received and sampled.
   *
   * @public
   */
  DevicePositions: DevicePosition[] | undefined;
}

/**
 * A circle on the earth, as defined by a center point and a radius.
 *
 * @public
 */
export interface Circle {
  /**
   * A single point geometry, specifying the center of the circle, using [WGS 84](https://gisgeography.com/wgs84-world-geodetic-system/) coordinates, in the form `[longitude, latitude]`.
   *
   * @public
   */
  Center: number[] | undefined;

  /**
   * The radius of the circle in meters. Must be greater than zero and no larger than 100,000 (100 kilometers).
   *
   * @public
   */
  Radius: number | undefined;
}

/**
 * Contains the geofence geometry details.
 *
 * A geofence geometry can be a circle, a polygon, or a multipolygon. `Polygon` and `MultiPolygon` geometries can be defined using their respective parameters, or encoded in Geobuf format using the `Geobuf` parameter. Including multiple geometry types in the same request will return a validation error.
 *
 * > **Note:** Amazon Location doesn't currently support polygons that cross the antimeridian.
 *
 * @public
 */
export interface GeofenceGeometry {
  /**
   * A `Polygon` is a list of up to 250 linear rings which represent the shape of a geofence. This list *must* include 1 exterior ring (representing the outer perimeter of the geofence), and can optionally include up to 249 interior rings (representing polygonal spaces within the perimeter, which are excluded from the geofence area).
   *
   * A linear ring is an array of 4 or more vertices, where the first and last vertex are the same (to form a closed boundary). Each vertex is a 2-dimensional point represented as an array of doubles of length 2: `[longitude, latitude]`.
   *
   * Each linear ring is represented as an array of arrays of doubles (`[[longitude, latitude], [longitude, latitude], ...]`). The vertices for the exterior ring must be listed in *counter-clockwise* sequence. Vertices for all interior rings must be listed in *clockwise* sequence.
   *
   * The list of linear rings that describe the entire `Polygon` is represented as an array of arrays of arrays of doubles (`[[[longitude, latitude], [longitude, latitude], ...], [[longitude, latitude], [longitude, latitude], ...], ...]`). The exterior ring must be listed first, before any interior rings.
   *
   * > **Note:**
   * >
   * > The following additional requirements and limitations apply to geometries defined using the `Polygon` parameter:
   * >
   * > - The entire `Polygon` must consist of no more than 1,000 vertices, including all vertices from the exterior ring and all interior rings.
   * > - Rings must not touch or cross each other.
   * > - All interior rings must be fully contained within the exterior ring.
   * > - Interior rings must not contain other interior rings.
   * > - No ring is permitted to intersect itself.
   *
   * @public
   */
  Polygon?: number[][][] | undefined;

  /**
   * A circle on the earth, as defined by a center point and a radius.
   *
   * @public
   */
  Circle?: Circle | undefined;

  /**
   * Geobuf is a compact binary encoding for geographic data that provides lossless compression of GeoJSON polygons. The Geobuf must be Base64-encoded.
   *
   * This parameter can contain a Geobuf-encoded GeoJSON geometry object of type `Polygon` *OR* `MultiPolygon`. For more information and specific configuration requirements for these object types, see [Polygon](https://docs.aws.amazon.com/location/latest/APIReference/API_WaypointGeofencing_GeofenceGeometry.html#location-Type-WaypointGeofencing_GeofenceGeometry-Polygon) and [MultiPolygon](https://docs.aws.amazon.com/location/latest/APIReference/API_WaypointGeofencing_GeofenceGeometry.html#location-Type-WaypointGeofencing_GeofenceGeometry-MultiPolygon).
   *
   * > **Note:**
   * >
   * > The following limitations apply specifically to geometries defined using the `Geobuf` parameter, and supercede the corresponding limitations of the `Polygon` and `MultiPolygon` parameters:
   * >
   * > - A `Polygon` in `Geobuf` format can have up to 25,000 rings and up to 100,000 total vertices, including all vertices from all component rings.
   * > - A `MultiPolygon` in `Geobuf` format can contain up to 10,000 `Polygons` and up to 100,000 total vertices, including all vertices from all component `Polygons`.
   *
   * @public
   */
  Geobuf?: Uint8Array | undefined;

  /**
   * A `MultiPolygon` is a list of up to 250 `Polygon` elements which represent the shape of a geofence. The `Polygon` components of a `MultiPolygon` geometry can define separate geographical areas that are considered part of the same geofence, perimeters of larger exterior areas with smaller interior spaces that are excluded from the geofence, or some combination of these use cases to form complex geofence boundaries.
   *
   * For more information and specific configuration requirements for the `Polygon` components that form a `MultiPolygon`, see [Polygon](https://docs.aws.amazon.com/location/latest/APIReference/API_WaypointGeofencing_GeofenceGeometry.html#location-Type-WaypointGeofencing_GeofenceGeometry-Polygon).
   *
   * > **Note:**
   * >
   * > The following additional requirements and limitations apply to geometries defined using the `MultiPolygon` parameter:
   * >
   * > - The entire `MultiPolygon` must consist of no more than 1,000 vertices, including all vertices from all component `Polygons`.
   * > - Each edge of a component `Polygon` must intersect no more than 5 edges from other `Polygons`. Parallel edges that are shared but do not cross are not counted toward this limit.
   * > - The total number of intersecting edges of component `Polygons` must be no more than 100,000. Parallel edges that are shared but do not cross are not counted toward this limit.
   *
   * @public
   */
  MultiPolygon?: number[][][][] | undefined;
}

/**
 * Contains geofence geometry details.
 *
 * @public
 */
export interface BatchPutGeofenceRequestEntry {
  /**
   * The identifier for the geofence to be stored in a given geofence collection.
   *
   * @public
   */
  GeofenceId: string | undefined;

  /**
   * Contains the details to specify the position of the geofence. Can be a circle, a polygon, or a multipolygon. `Polygon` and `MultiPolygon` geometries can be defined using their respective parameters, or encoded in Geobuf format using the `Geobuf` parameter. Including multiple geometry types in the same request will return a validation error.
   *
   * > **Note:** The geofence `Polygon` and `MultiPolygon` formats support a maximum of 1,000 total vertices. The `Geobuf` format supports a maximum of 100,000 vertices.
   *
   * @public
   */
  Geometry: GeofenceGeometry | undefined;

  /**
   * Associates one of more properties with the geofence. A property is a key-value pair stored with the geofence and added to any geofence event triggered with that geofence.
   *
   * Format: `"key" : "value"`
   *
   * @public
   */
  GeofenceProperties?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface BatchPutGeofenceRequest {
  /**
   * The geofence collection storing the geofences.
   *
   * @public
   */
  CollectionName: string | undefined;

  /**
   * The batch of geofences to be stored in a geofence collection.
   *
   * @public
   */
  Entries: BatchPutGeofenceRequestEntry[] | undefined;
}

/**
 * Contains error details for each geofence that failed to be stored in a given geofence collection.
 *
 * @public
 */
export interface BatchPutGeofenceError {
  /**
   * The geofence associated with the error message.
   *
   * @public
   */
  GeofenceId: string | undefined;

  /**
   * Contains details associated to the batch error.
   *
   * @public
   */
  Error: BatchItemError | undefined;
}

/**
 * Contains a summary of each geofence that was successfully stored in a given geofence collection.
 *
 * @public
 */
export interface BatchPutGeofenceSuccess {
  /**
   * The geofence successfully stored in a geofence collection.
   *
   * @public
   */
  GeofenceId: string | undefined;

  /**
   * The timestamp for when the geofence was stored in a geofence collection in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`
   *
   * @public
   */
  CreateTime: Date | undefined;

  /**
   * The timestamp for when the geofence was last updated in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`
   *
   * @public
   */
  UpdateTime: Date | undefined;
}

/**
 * @public
 */
export interface BatchPutGeofenceResponse {
  /**
   * Contains each geofence that was successfully stored in a geofence collection.
   *
   * @public
   */
  Successes: BatchPutGeofenceSuccess[] | undefined;

  /**
   * Contains additional error details for each geofence that failed to be stored in a geofence collection.
   *
   * @public
   */
  Errors: BatchPutGeofenceError[] | undefined;
}

/**
 * @public
 */
export interface BatchUpdateDevicePositionRequest {
  /**
   * The name of the tracker resource to update.
   *
   * @public
   */
  TrackerName: string | undefined;

  /**
   * Contains the position update details for each device, up to 10 devices.
   *
   * @public
   */
  Updates: DevicePositionUpdate[] | undefined;
}

/**
 * Contains error details for each device that failed to update its position.
 *
 * @public
 */
export interface BatchUpdateDevicePositionError {
  /**
   * The device associated with the failed location update.
   *
   * @public
   */
  DeviceId: string | undefined;

  /**
   * The timestamp at which the device position was determined. Uses [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`.
   *
   * @public
   */
  SampleTime: Date | undefined;

  /**
   * Contains details related to the error code such as the error code and error message.
   *
   * @public
   */
  Error: BatchItemError | undefined;
}

/**
 * @public
 */
export interface BatchUpdateDevicePositionResponse {
  /**
   * Contains error details for each device that failed to update its position.
   *
   * @public
   */
  Errors: BatchUpdateDevicePositionError[] | undefined;
}

/**
 * Contains details about additional route preferences for requests that specify `TravelMode` as `Car`.
 *
 * @public
 */
export interface CalculateRouteCarModeOptions {
  /**
   * Avoids ferries when calculating routes.
   *
   * Default Value: `false`
   *
   * Valid Values: `false` | `true`
   *
   * @public
   */
  AvoidFerries?: boolean | undefined;

  /**
   * Avoids tolls when calculating routes.
   *
   * Default Value: `false`
   *
   * Valid Values: `false` | `true`
   *
   * @public
   */
  AvoidTolls?: boolean | undefined;
}

/**
 * Contains details about the truck dimensions in the unit of measurement that you specify. Used to filter out roads that can't support or allow the specified dimensions for requests that specify `TravelMode` as `Truck`.
 *
 * @public
 */
export interface TruckDimensions {
  /**
   * The length of the truck.
   *
   * - For example, `15.5`.
   *
   * > **Note:** For routes calculated with a HERE resource, this value must be between 0 and 300 meters.
   *
   * @public
   */
  Length?: number | undefined;

  /**
   * The height of the truck.
   *
   * - For example, `4.5`.
   *
   * > **Note:** For routes calculated with a HERE resource, this value must be between 0 and 50 meters.
   *
   * @public
   */
  Height?: number | undefined;

  /**
   * The width of the truck.
   *
   * - For example, `4.5`.
   *
   * > **Note:** For routes calculated with a HERE resource, this value must be between 0 and 50 meters.
   *
   * @public
   */
  Width?: number | undefined;

  /**
   * Specifies the unit of measurement for the truck dimensions.
   *
   * Default Value: `Meters`
   *
   * @public
   */
  Unit?: DimensionUnit | undefined;
}

/**
 * Contains details about the truck's weight specifications. Used to avoid roads that can't support or allow the total weight for requests that specify `TravelMode` as `Truck`.
 *
 * @public
 */
export interface TruckWeight {
  /**
   * The total weight of the truck.
   *
   * - For example, `3500`.
   *
   * @public
   */
  Total?: number | undefined;

  /**
   * The unit of measurement to use for the truck weight.
   *
   * Default Value: `Kilograms`
   *
   * @public
   */
  Unit?: VehicleWeightUnit | undefined;
}

/**
 * Contains details about additional route preferences for requests that specify `TravelMode` as `Truck`.
 *
 * @public
 */
export interface CalculateRouteTruckModeOptions {
  /**
   * Avoids ferries when calculating routes.
   *
   * Default Value: `false`
   *
   * Valid Values: `false` | `true`
   *
   * @public
   */
  AvoidFerries?: boolean | undefined;

  /**
   * Avoids tolls when calculating routes.
   *
   * Default Value: `false`
   *
   * Valid Values: `false` | `true`
   *
   * @public
   */
  AvoidTolls?: boolean | undefined;

  /**
   * Specifies the truck's dimension specifications including length, height, width, and unit of measurement. Used to avoid roads that can't support the truck's dimensions.
   *
   * @public
   */
  Dimensions?: TruckDimensions | undefined;

  /**
   * Specifies the truck's weight specifications including total weight and unit of measurement. Used to avoid roads that can't support the truck's weight.
   *
   * @public
   */
  Weight?: TruckWeight | undefined;
}

/**
 * @public
 */
export interface CalculateRouteRequest {
  /**
   * The name of the route calculator resource that you want to use to calculate the route.
   *
   * @public
   */
  CalculatorName: string | undefined;

  /**
   * The start position for the route. Defined in [World Geodetic System (WGS 84)](https://earth-info.nga.mil/index.php?dir=wgs84&action=wgs84) format: `[longitude, latitude]`.
   *
   * - For example, `[-123.115, 49.285]`
   *
   * > **Note:** If you specify a departure that's not located on a road, Amazon Location [moves the position to the nearest road](https://docs.aws.amazon.com/location/previous/developerguide/snap-to-nearby-road.html). If Esri is the provider for your route calculator, specifying a route that is longer than 400 km returns a `400 RoutesValidationException` error.
   *
   * Valid Values: `[-180 to 180,-90 to 90]`
   *
   * @public
   */
  DeparturePosition: number[] | undefined;

  /**
   * The finish position for the route. Defined in [World Geodetic System (WGS 84)](https://earth-info.nga.mil/index.php?dir=wgs84&action=wgs84) format: `[longitude, latitude]`.
   *
   * - For example, `[-122.339, 47.615]`
   *
   * > **Note:** If you specify a destination that's not located on a road, Amazon Location [moves the position to the nearest road](https://docs.aws.amazon.com/location/previous/developerguide/snap-to-nearby-road.html).
   *
   * Valid Values: `[-180 to 180,-90 to 90]`
   *
   * @public
   */
  DestinationPosition: number[] | undefined;

  /**
   * Specifies an ordered list of up to 23 intermediate positions to include along a route between the departure position and destination position.
   *
   * - For example, from the `DeparturePosition` `[-123.115, 49.285]`, the route follows the order that the waypoint positions are given `[[-122.757, 49.0021],[-122.349, 47.620]]`
   *
   * > **Note:**
   * >
   * > If you specify a waypoint position that's not located on a road, Amazon Location [moves the position to the nearest road](https://docs.aws.amazon.com/location/previous/developerguide/snap-to-nearby-road.html).
   * >
   * > Specifying more than 23 waypoints returns a `400 ValidationException` error.
   * >
   * > If Esri is the provider for your route calculator, specifying a route that is longer than 400 km returns a `400 RoutesValidationException` error.
   *
   * Valid Values: `[-180 to 180,-90 to 90]`
   *
   * @public
   */
  WaypointPositions?: number[][] | undefined;

  /**
   * Specifies the mode of transport when calculating a route. Used in estimating the speed of travel and road compatibility. You can choose `Car`, `Truck`, `Walking`, `Bicycle` or `Motorcycle` as options for the `TravelMode`.
   *
   * > **Note:**
   * >
   * > `Bicycle` and `Motorcycle` are only valid when using Grab as a data provider, and only within Southeast Asia.
   * >
   * > `Truck` is not available for Grab.
   * >
   * > For more details on the using Grab for routing, including areas of coverage, see [GrabMaps](https://docs.aws.amazon.com/location/previous/developerguide/grab.html) in the *Amazon Location Service Developer Guide*.
   *
   * The `TravelMode` you specify also determines how you specify route preferences:
   *
   * - If traveling by `Car` use the `CarModeOptions` parameter.
   * - If traveling by `Truck` use the `TruckModeOptions` parameter.
   *
   * Default Value: `Car`
   *
   * @public
   */
  TravelMode?: TravelMode | undefined;

  /**
   * Specifies the desired time of departure. Uses the given time to calculate the route. Otherwise, the best time of day to travel with the best traffic conditions is used to calculate the route.
   *
   * - In [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`. For example, `2020–07-2T12:15:20.000Z+01:00`
   *
   * @public
   */
  DepartureTime?: Date | undefined;

  /**
   * Sets the time of departure as the current time. Uses the current time to calculate a route. Otherwise, the best time of day to travel with the best traffic conditions is used to calculate the route.
   *
   * Default Value: `false`
   *
   * Valid Values: `false` | `true`
   *
   * @public
   */
  DepartNow?: boolean | undefined;

  /**
   * Set the unit system to specify the distance.
   *
   * Default Value: `Kilometers`
   *
   * @public
   */
  DistanceUnit?: DistanceUnit | undefined;

  /**
   * Set to include the geometry details in the result for each path between a pair of positions.
   *
   * Default Value: `false`
   *
   * Valid Values: `false` | `true`
   *
   * @public
   */
  IncludeLegGeometry?: boolean | undefined;

  /**
   * Specifies route preferences when traveling by `Car`, such as avoiding routes that use ferries or tolls.
   *
   * Requirements: `TravelMode` must be specified as `Car`.
   *
   * @public
   */
  CarModeOptions?: CalculateRouteCarModeOptions | undefined;

  /**
   * Specifies route preferences when traveling by `Truck`, such as avoiding routes that use ferries or tolls, and truck specifications to consider when choosing an optimal road.
   *
   * Requirements: `TravelMode` must be specified as `Truck`.
   *
   * @public
   */
  TruckModeOptions?: CalculateRouteTruckModeOptions | undefined;

  /**
   * Specifies the desired time of arrival. Uses the given time to calculate the route. Otherwise, the best time of day to travel with the best traffic conditions is used to calculate the route.
   *
   * > **Note:** ArrivalTime is not supported Esri.
   *
   * @public
   */
  ArrivalTime?: Date | undefined;

  /**
   * Specifies the distance to optimize for when calculating a route.
   *
   * @public
   */
  OptimizeFor?: OptimizationMode | undefined;

  /**
   * The optional [API key](https://docs.aws.amazon.com/location/previous/developerguide/using-apikeys.html) to authorize the request.
   *
   * @public
   */
  Key?: string | undefined;
}

/**
 * Contains the geometry details for each path between a pair of positions. Used in plotting a route leg on a map.
 *
 * @public
 */
export interface LegGeometry {
  /**
   * An ordered list of positions used to plot a route on a map.
   *
   * The first position is closest to the start position for the leg, and the last position is the closest to the end position for the leg.
   *
   * - For example, `[[-123.117, 49.284],[-123.115, 49.285],[-123.115, 49.285]]`
   *
   * @public
   */
  LineString?: number[][] | undefined;
}

/**
 * Represents an element of a leg within a route. A step contains instructions for how to move to the next step in the leg.
 *
 * @public
 */
export interface Step {
  /**
   * The starting position of a step. If the position is the first step in the leg, this position is the same as the start position of the leg.
   *
   * @public
   */
  StartPosition: number[] | undefined;

  /**
   * The end position of a step. If the position the last step in the leg, this position is the same as the end position of the leg.
   *
   * @public
   */
  EndPosition: number[] | undefined;

  /**
   * The travel distance between the step's `StartPosition` and `EndPosition`.
   *
   * @public
   */
  Distance: number | undefined;

  /**
   * The estimated travel time, in seconds, from the step's `StartPosition` to the `EndPosition`. . The travel mode and departure time that you specify in the request determines the calculated time.
   *
   * @public
   */
  DurationSeconds: number | undefined;

  /**
   * Represents the start position, or index, in a sequence of steps within the leg's line string geometry. For example, the index of the first step in a leg geometry is `0`.
   *
   * Included in the response for queries that set `IncludeLegGeometry` to `True`.
   *
   * @public
   */
  GeometryOffset?: number | undefined;
}

/**
 * Contains the calculated route's details for each path between a pair of positions. The number of legs returned corresponds to one fewer than the total number of positions in the request.
 *
 * For example, a route with a departure position and destination position returns one leg with the positions [snapped to a nearby road](https://docs.aws.amazon.com/location/previous/developerguide/snap-to-nearby-road.html):
 *
 * - The `StartPosition` is the departure position.
 * - The `EndPosition` is the destination position.
 *
 * A route with a waypoint between the departure and destination position returns two legs with the positions snapped to a nearby road:
 *
 * - Leg 1: The `StartPosition` is the departure position . The `EndPosition` is the waypoint positon.
 * - Leg 2: The `StartPosition` is the waypoint position. The `EndPosition` is the destination position.
 *
 * @public
 */
export interface Leg {
  /**
   * The starting position of the leg. Follows the format `[longitude,latitude]`.
   *
   * > **Note:** If the `StartPosition` isn't located on a road, it's [snapped to a nearby road](https://docs.aws.amazon.com/location/previous/developerguide/snap-to-nearby-road.html).
   *
   * @public
   */
  StartPosition: number[] | undefined;

  /**
   * The terminating position of the leg. Follows the format `[longitude,latitude]`.
   *
   * > **Note:** If the `EndPosition` isn't located on a road, it's [snapped to a nearby road](https://docs.aws.amazon.com/location/previous/developerguide/nap-to-nearby-road.html).
   *
   * @public
   */
  EndPosition: number[] | undefined;

  /**
   * The distance between the leg's `StartPosition` and `EndPosition` along a calculated route.
   *
   * - The default measurement is `Kilometers` unless the request specifies a `DistanceUnit` of `Miles`.
   *
   * @public
   */
  Distance: number | undefined;

  /**
   * The estimated travel time between the leg's `StartPosition` and `EndPosition`. The travel mode and departure time that you specify in the request determines the calculated time.
   *
   * @public
   */
  DurationSeconds: number | undefined;

  /**
   * Contains the calculated route's path as a linestring geometry.
   *
   * @public
   */
  Geometry?: LegGeometry | undefined;

  /**
   * Contains a list of steps, which represent subsections of a leg. Each step provides instructions for how to move to the next step in the leg such as the step's start position, end position, travel distance, travel duration, and geometry offset.
   *
   * @public
   */
  Steps: Step[] | undefined;
}

/**
 * A summary of the calculated route.
 *
 * @public
 */
export interface CalculateRouteSummary {
  /**
   * Specifies a geographical box surrounding a route. Used to zoom into a route when displaying it in a map. For example, `[min x, min y, max x, max y]`.
   *
   * The first 2 `bbox` parameters describe the lower southwest corner:
   *
   * - The first `bbox` position is the X coordinate or longitude of the lower southwest corner.
   * - The second `bbox` position is the Y coordinate or latitude of the lower southwest corner.
   *
   * The next 2 `bbox` parameters describe the upper northeast corner:
   *
   * - The third `bbox` position is the X coordinate, or longitude of the upper northeast corner.
   * - The fourth `bbox` position is the Y coordinate, or latitude of the upper northeast corner.
   *
   * @public
   */
  RouteBBox: number[] | undefined;

  /**
   * The data provider of traffic and road network data used to calculate the route. Indicates one of the available providers:
   *
   * - `Esri`
   * - `Grab`
   * - `Here`
   *
   * For more information about data providers, see [Amazon Location Service data providers](https://docs.aws.amazon.com/location/previous/developerguide/what-is-data-provider.html).
   *
   * @public
   */
  DataSource: string | undefined;

  /**
   * The total distance covered by the route. The sum of the distance travelled between every stop on the route.
   *
   * > **Note:** If Esri is the data source for the route calculator, the route distance can’t be greater than 400 km. If the route exceeds 400 km, the response is a `400 RoutesValidationException` error.
   *
   * @public
   */
  Distance: number | undefined;

  /**
   * The total travel time for the route measured in seconds. The sum of the travel time between every stop on the route.
   *
   * @public
   */
  DurationSeconds: number | undefined;

  /**
   * The unit of measurement for route distances.
   *
   * @public
   */
  DistanceUnit: DistanceUnit | undefined;
}

/**
 * Returns the result of the route calculation. Metadata includes legs and route summary.
 *
 * @public
 */
export interface CalculateRouteResponse {
  /**
   * Contains details about each path between a pair of positions included along a route such as: `StartPosition`, `EndPosition`, `Distance`, `DurationSeconds`, `Geometry`, and `Steps`. The number of legs returned corresponds to one fewer than the total number of positions in the request.
   *
   * For example, a route with a departure position and destination position returns one leg with the positions [snapped to a nearby road](https://docs.aws.amazon.com/location/previous/developerguide/snap-to-nearby-road.html):
   *
   * - The `StartPosition` is the departure position.
   * - The `EndPosition` is the destination position.
   *
   * A route with a waypoint between the departure and destination position returns two legs with the positions snapped to a nearby road:
   *
   * - Leg 1: The `StartPosition` is the departure position . The `EndPosition` is the waypoint positon.
   * - Leg 2: The `StartPosition` is the waypoint position. The `EndPosition` is the destination position.
   *
   * @public
   */
  Legs: Leg[] | undefined;

  /**
   * Contains information about the whole route, such as: `RouteBBox`, `DataSource`, `Distance`, `DistanceUnit`, and `DurationSeconds`.
   *
   * @public
   */
  Summary: CalculateRouteSummary | undefined;
}

/**
 * @public
 */
export interface CalculateRouteMatrixRequest {
  /**
   * The name of the route calculator resource that you want to use to calculate the route matrix.
   *
   * @public
   */
  CalculatorName: string | undefined;

  /**
   * The list of departure (origin) positions for the route matrix. An array of points, each of which is itself a 2-value array defined in [WGS 84](https://earth-info.nga.mil/GandG/wgs84/index.html) format: `[longitude, latitude]`. For example, `[-123.115, 49.285]`.
   *
   * > **Important:** Depending on the data provider selected in the route calculator resource there may be additional restrictions on the inputs you can choose. See [Position restrictions](https://docs.aws.amazon.com/location/previous/developerguide/calculate-route-matrix.html#matrix-routing-position-limits) in the *Amazon Location Service Developer Guide*.
   *
   * > **Note:** For route calculators that use Esri as the data provider, if you specify a departure that's not located on a road, Amazon Location [moves the position to the nearest road](https://docs.aws.amazon.com/location/previous/developerguide/snap-to-nearby-road.html). The snapped value is available in the result in `SnappedDeparturePositions`.
   *
   * Valid Values: `[-180 to 180,-90 to 90]`
   *
   * @public
   */
  DeparturePositions: number[][] | undefined;

  /**
   * The list of destination positions for the route matrix. An array of points, each of which is itself a 2-value array defined in [WGS 84](https://earth-info.nga.mil/GandG/wgs84/index.html) format: `[longitude, latitude]`. For example, `[-122.339, 47.615]`
   *
   * > **Important:** Depending on the data provider selected in the route calculator resource there may be additional restrictions on the inputs you can choose. See [Position restrictions](https://docs.aws.amazon.com/location/previous/developerguide/calculate-route-matrix.html#matrix-routing-position-limits) in the *Amazon Location Service Developer Guide*.
   *
   * > **Note:** For route calculators that use Esri as the data provider, if you specify a destination that's not located on a road, Amazon Location [moves the position to the nearest road](https://docs.aws.amazon.com/location/previous/developerguide/snap-to-nearby-road.html). The snapped value is available in the result in `SnappedDestinationPositions`.
   *
   * Valid Values: `[-180 to 180,-90 to 90]`
   *
   * @public
   */
  DestinationPositions: number[][] | undefined;

  /**
   * Specifies the mode of transport when calculating a route. Used in estimating the speed of travel and road compatibility.
   *
   * The `TravelMode` you specify also determines how you specify route preferences:
   *
   * - If traveling by `Car` use the `CarModeOptions` parameter.
   * - If traveling by `Truck` use the `TruckModeOptions` parameter.
   *
   * > **Note:**
   * >
   * > `Bicycle` or `Motorcycle` are only valid when using `Grab` as a data provider, and only within Southeast Asia.
   * >
   * > `Truck` is not available for Grab.
   * >
   * > For more information about using Grab as a data provider, see [GrabMaps](https://docs.aws.amazon.com/location/previous/developerguide/grab.html) in the *Amazon Location Service Developer Guide*.
   *
   * Default Value: `Car`
   *
   * @public
   */
  TravelMode?: TravelMode | undefined;

  /**
   * Specifies the desired time of departure. Uses the given time to calculate the route matrix. You can't set both `DepartureTime` and `DepartNow`. If neither is set, the best time of day to travel with the best traffic conditions is used to calculate the route matrix.
   *
   * > **Note:** Setting a departure time in the past returns a `400 ValidationException` error.
   *
   * - In [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`. For example, `2020–07-2T12:15:20.000Z+01:00`
   *
   * @public
   */
  DepartureTime?: Date | undefined;

  /**
   * Sets the time of departure as the current time. Uses the current time to calculate the route matrix. You can't set both `DepartureTime` and `DepartNow`. If neither is set, the best time of day to travel with the best traffic conditions is used to calculate the route matrix.
   *
   * Default Value: `false`
   *
   * Valid Values: `false` | `true`
   *
   * @public
   */
  DepartNow?: boolean | undefined;

  /**
   * Set the unit system to specify the distance.
   *
   * Default Value: `Kilometers`
   *
   * @public
   */
  DistanceUnit?: DistanceUnit | undefined;

  /**
   * Specifies route preferences when traveling by `Car`, such as avoiding routes that use ferries or tolls.
   *
   * Requirements: `TravelMode` must be specified as `Car`.
   *
   * @public
   */
  CarModeOptions?: CalculateRouteCarModeOptions | undefined;

  /**
   * Specifies route preferences when traveling by `Truck`, such as avoiding routes that use ferries or tolls, and truck specifications to consider when choosing an optimal road.
   *
   * Requirements: `TravelMode` must be specified as `Truck`.
   *
   * @public
   */
  TruckModeOptions?: CalculateRouteTruckModeOptions | undefined;

  /**
   * The optional [API key](https://docs.aws.amazon.com/location/previous/developerguide/using-apikeys.html) to authorize the request.
   *
   * @public
   */
  Key?: string | undefined;
}

/**
 * An error corresponding to the calculation of a route between the `DeparturePosition` and `DestinationPosition`.
 *
 * The error code can be one of the following:
 *
 * - `RouteNotFound` - Unable to find a valid route with the given parameters.
 *
 * - `RouteTooLong` - Route calculation went beyond the maximum size of a route and was terminated before completion.
 *
 * - `PositionsNotFound` - One or more of the input positions were not found on the route network.
 *
 * - `DestinationPositionNotFound` - The destination position was not found on the route network.
 *
 * - `DeparturePositionNotFound` - The departure position was not found on the route network.
 *
 * - `OtherValidationError` - The given inputs were not valid or a route was not found. More information is given in the error `Message`
 *
 * @public
 */
export interface RouteMatrixEntryError {
  /**
   * The type of error which occurred for the route calculation.
   *
   * @public
   */
  Code: RouteMatrixErrorCode | undefined;

  /**
   * A message about the error that occurred for the route calculation.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * The result for the calculated route of one `DeparturePosition` `DestinationPosition` pair.
 *
 * @public
 */
export interface RouteMatrixEntry {
  /**
   * The total distance of travel for the route.
   *
   * @public
   */
  Distance?: number | undefined;

  /**
   * The expected duration of travel for the route.
   *
   * @public
   */
  DurationSeconds?: number | undefined;

  /**
   * An error corresponding to the calculation of a route between the `DeparturePosition` and `DestinationPosition`.
   *
   * @public
   */
  Error?: RouteMatrixEntryError | undefined;
}

/**
 * A summary of the calculated route matrix.
 *
 * @public
 */
export interface CalculateRouteMatrixSummary {
  /**
   * The data provider of traffic and road network data used to calculate the routes. Indicates one of the available providers:
   *
   * - `Esri`
   * - `Grab`
   * - `Here`
   *
   * For more information about data providers, see [Amazon Location Service data providers](https://docs.aws.amazon.com/location/previous/developerguide/what-is-data-provider.html).
   *
   * @public
   */
  DataSource: string | undefined;

  /**
   * The count of cells in the route matrix. Equal to the number of `DeparturePositions` multiplied by the number of `DestinationPositions`.
   *
   * @public
   */
  RouteCount: number | undefined;

  /**
   * The count of error results in the route matrix. If this number is 0, all routes were calculated successfully.
   *
   * @public
   */
  ErrorCount: number | undefined;

  /**
   * The unit of measurement for route distances.
   *
   * @public
   */
  DistanceUnit: DistanceUnit | undefined;
}

/**
 * Returns the result of the route matrix calculation.
 *
 * @public
 */
export interface CalculateRouteMatrixResponse {
  /**
   * The calculated route matrix containing the results for all pairs of `DeparturePositions` to `DestinationPositions`. Each row corresponds to one entry in `DeparturePositions`. Each entry in the row corresponds to the route from that entry in `DeparturePositions` to an entry in `DestinationPositions`.
   *
   * @public
   */
  RouteMatrix: RouteMatrixEntry[][] | undefined;

  /**
   * For routes calculated using an Esri route calculator resource, departure positions are snapped to the closest road. For Esri route calculator resources, this returns the list of departure/origin positions used for calculation of the `RouteMatrix`.
   *
   * @public
   */
  SnappedDeparturePositions?: number[][] | undefined;

  /**
   * The list of destination positions for the route matrix used for calculation of the `RouteMatrix`.
   *
   * @public
   */
  SnappedDestinationPositions?: number[][] | undefined;

  /**
   * Contains information about the route matrix, `DataSource`, `DistanceUnit`, `RouteCount` and `ErrorCount`.
   *
   * @public
   */
  Summary: CalculateRouteMatrixSummary | undefined;
}

/**
 * @public
 */
export interface CancelJobRequest {
  /**
   * The unique identifier of the job to cancel.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface CancelJobResponse {
  /**
   * Amazon Resource Name (ARN) of the cancelled job.
   *
   * @public
   */
  JobArn: string | undefined;

  /**
   * Unique job identifier.
   *
   * @public
   */
  JobId: string | undefined;

  /**
   * Job status after cancellation request.
   *
   * @public
   */
  Status: JobStatus | undefined;
}

/**
 * LTE local identification information (local ID).
 *
 * @public
 */
export interface LteLocalId {
  /**
   * E-UTRA (Evolved Universal Terrestrial Radio Access) absolute radio frequency channel number (EARFCN).
   *
   * @public
   */
  Earfcn: number | undefined;

  /**
   * Physical Cell ID (PCI).
   *
   * @public
   */
  Pci: number | undefined;
}

/**
 * LTE network measurements.
 *
 * @public
 */
export interface LteNetworkMeasurements {
  /**
   * E-UTRA (Evolved Universal Terrestrial Radio Access) absolute radio frequency channel number (EARFCN).
   *
   * @public
   */
  Earfcn: number | undefined;

  /**
   * E-UTRAN Cell Identifier (ECI).
   *
   * @public
   */
  CellId: number | undefined;

  /**
   * Physical Cell ID (PCI).
   *
   * @public
   */
  Pci: number | undefined;

  /**
   * Signal power of the reference signal received, measured in dBm (decibel-milliwatts).
   *
   * @public
   */
  Rsrp?: number | undefined;

  /**
   * Signal quality of the reference Signal received, measured in decibels (dB).
   *
   * @public
   */
  Rsrq?: number | undefined;
}

/**
 * Details about the Long-Term Evolution (LTE) network.
 *
 * @public
 */
export interface LteCellDetails {
  /**
   * The E-UTRAN Cell Identifier (ECI).
   *
   * @public
   */
  CellId: number | undefined;

  /**
   * The Mobile Country Code (MCC).
   *
   * @public
   */
  Mcc: number | undefined;

  /**
   * The Mobile Network Code (MNC)
   *
   * @public
   */
  Mnc: number | undefined;

  /**
   * The LTE local identification information (local ID).
   *
   * @public
   */
  LocalId?: LteLocalId | undefined;

  /**
   * The network measurements.
   *
   * @public
   */
  NetworkMeasurements?: LteNetworkMeasurements[] | undefined;

  /**
   * Timing Advance (TA).
   *
   * @public
   */
  TimingAdvance?: number | undefined;

  /**
   * Indicates whether the LTE object is capable of supporting NR (new radio).
   *
   * @public
   */
  NrCapable?: boolean | undefined;

  /**
   * Signal power of the reference signal received, measured in decibel-milliwatts (dBm).
   *
   * @public
   */
  Rsrp?: number | undefined;

  /**
   * Signal quality of the reference Signal received, measured in decibels (dB).
   *
   * @public
   */
  Rsrq?: number | undefined;

  /**
   * LTE Tracking Area Code (TAC).
   *
   * @public
   */
  Tac?: number | undefined;
}

/**
 * The cellular network communication infrastructure that the device uses.
 *
 * @public
 */
export interface CellSignals {
  /**
   * Information about the Long-Term Evolution (LTE) network the device is connected to.
   *
   * @public
   */
  LteCellDetails: LteCellDetails[] | undefined;
}

/**
 * @public
 */
export interface CreateGeofenceCollectionRequest {
  /**
   * A custom name for the geofence collection.
   *
   * Requirements:
   *
   * - Contain only alphanumeric characters (A–Z, a–z, 0–9), hyphens (-), periods (.), and underscores (_).
   * - Must be a unique geofence collection name.
   * - No spaces allowed. For example, `ExampleGeofenceCollection`.
   *
   * @public
   */
  CollectionName: string | undefined;

  /**
   * No longer used. If included, the only allowed value is `RequestBasedUsage`.
   *
   * @deprecated (since 2022-02-01) Deprecated. If included, the only allowed value is RequestBasedUsage.
   * @public
   */
  PricingPlan?: PricingPlan | undefined;

  /**
   * This parameter is no longer used.
   *
   * @deprecated (since 2022-02-01) Deprecated. No longer allowed.
   * @public
   */
  PricingPlanDataSource?: string | undefined;

  /**
   * An optional description for the geofence collection.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Applies one or more tags to the geofence collection. A tag is a key-value pair helps manage, identify, search, and filter your resources by labelling them.
   *
   * Format: `"key" : "value"`
   *
   * Restrictions:
   *
   * - Maximum 50 tags per resource
   * - Each resource tag must be unique with a maximum of one value.
   * - Maximum key length: 128 Unicode characters in UTF-8
   * - Maximum value length: 256 Unicode characters in UTF-8
   * - Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @.
   * - Cannot use "aws:" as a prefix for a key.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A key identifier for an [Amazon Web Services KMS customer managed key](https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html). Enter a key ID, key ARN, alias name, or alias ARN.
   *
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface CreateGeofenceCollectionResponse {
  /**
   * The name for the geofence collection.
   *
   * @public
   */
  CollectionName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the geofence collection resource. Used when you need to specify a resource across all Amazon Web Services.
   *
   * - Format example: `arn:aws:geo:region:account-id:geofence-collection/ExampleGeofenceCollection`
   *
   * @public
   */
  CollectionArn: string | undefined;

  /**
   * The timestamp for when the geofence collection was created in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`
   *
   * @public
   */
  CreateTime: Date | undefined;
}

/**
 * Specifies the map tile style selected from an available provider.
 *
 * @public
 */
export interface MapConfiguration {
  /**
   * Specifies the map style selected from an available data provider.
   *
   * Valid [Esri map styles](https://docs.aws.amazon.com/location/previous/developerguide/esri.html):
   *
   * - `VectorEsriDarkGrayCanvas` – The Esri Dark Gray Canvas map style. A vector basemap with a dark gray, neutral background with minimal colors, labels, and features that's designed to draw attention to your thematic content.
   * - `RasterEsriImagery` – The Esri Imagery map style. A raster basemap that provides one meter or better satellite and aerial imagery in many parts of the world and lower resolution satellite imagery worldwide.
   * - `VectorEsriLightGrayCanvas` – The Esri Light Gray Canvas map style, which provides a detailed vector basemap with a light gray, neutral background style with minimal colors, labels, and features that's designed to draw attention to your thematic content.
   * - `VectorEsriTopographic` – The Esri Light map style, which provides a detailed vector basemap with a classic Esri map style.
   * - `VectorEsriStreets` – The Esri Street Map style, which provides a detailed vector basemap for the world symbolized with a classic Esri street map style. The vector tile layer is similar in content and style to the World Street Map raster map.
   * - `VectorEsriNavigation` – The Esri Navigation map style, which provides a detailed basemap for the world symbolized with a custom navigation map style that's designed for use during the day in mobile devices.
   *
   * Valid [HERE Technologies map styles](https://docs.aws.amazon.com/location/previous/developerguide/HERE.html):
   *
   * - `VectorHereContrast` – The HERE Contrast (Berlin) map style is a high contrast detailed base map of the world that blends 3D and 2D rendering.
   *
   *   > **Note:** The `VectorHereContrast` style has been renamed from `VectorHereBerlin`. `VectorHereBerlin` has been deprecated, but will continue to work in applications that use it.
   * - `VectorHereExplore` – A default HERE map style containing a neutral, global map and its features including roads, buildings, landmarks, and water features. It also now includes a fully designed map of Japan.
   * - `VectorHereExploreTruck` – A global map containing truck restrictions and attributes (e.g. width / height / HAZMAT) symbolized with highlighted segments and icons on top of HERE Explore to support use cases within transport and logistics.
   * - `RasterHereExploreSatellite` – A global map containing high resolution satellite imagery.
   * - `HybridHereExploreSatellite` – A global map displaying the road network, street names, and city labels over satellite imagery. This style will automatically retrieve both raster and vector tiles, and your charges will be based on total tiles retrieved.
   *
   *   > **Note:** Hybrid styles use both vector and raster tiles when rendering the map that you see. This means that more tiles are retrieved than when using either vector or raster tiles alone. Your charges will include all tiles retrieved.
   *
   * Valid [GrabMaps map styles](https://docs.aws.amazon.com/location/previous/developerguide/grab.html):
   *
   * - `VectorGrabStandardLight` – The Grab Standard Light map style provides a basemap with detailed land use coloring, area names, roads, landmarks, and points of interest covering Southeast Asia.
   * - `VectorGrabStandardDark` – The Grab Standard Dark map style provides a dark variation of the standard basemap covering Southeast Asia.
   *
   * > **Note:** Grab provides maps only for countries in Southeast Asia, and is only available in the Asia Pacific (Singapore) Region (`ap-southeast-1`). For more information, see [GrabMaps countries and area covered](https://docs.aws.amazon.com/location/previous/developerguide/grab.html#grab-coverage-area).
   *
   * Valid [Open Data map styles](https://docs.aws.amazon.com/location/previous/developerguide/open-data.html):
   *
   * - `VectorOpenDataStandardLight` – The Open Data Standard Light map style provides a detailed basemap for the world suitable for website and mobile application use. The map includes highways major roads, minor roads, railways, water features, cities, parks, landmarks, building footprints, and administrative boundaries.
   * - `VectorOpenDataStandardDark` – Open Data Standard Dark is a dark-themed map style that provides a detailed basemap for the world suitable for website and mobile application use. The map includes highways major roads, minor roads, railways, water features, cities, parks, landmarks, building footprints, and administrative boundaries.
   * - `VectorOpenDataVisualizationLight` – The Open Data Visualization Light map style is a light-themed style with muted colors and fewer features that aids in understanding overlaid data.
   * - `VectorOpenDataVisualizationDark` – The Open Data Visualization Dark map style is a dark-themed style with muted colors and fewer features that aids in understanding overlaid data.
   *
   * @public
   */
  Style: string | undefined;

  /**
   * Specifies the political view for the style. Leave unset to not use a political view, or, for styles that support specific political views, you can choose a view, such as `IND` for the Indian view.
   *
   * Default is unset.
   *
   * > **Note:** Not all map resources or styles support political view styles. See [Political views](https://docs.aws.amazon.com/location/previous/developerguide/map-concepts.html#political-views) for more information.
   *
   * @public
   */
  PoliticalView?: string | undefined;

  /**
   * Specifies the custom layers for the style. Leave unset to not enable any custom layer, or, for styles that support custom layers, you can enable layer(s), such as POI layer for the VectorEsriNavigation style. Default is `unset`.
   *
   * > **Note:** Not all map resources or styles support custom layers. See Custom Layers for more information.
   *
   * @public
   */
  CustomLayers?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateMapRequest {
  /**
   * The name for the map resource.
   *
   * Requirements:
   *
   * - Must contain only alphanumeric characters (A–Z, a–z, 0–9), hyphens (-), periods (.), and underscores (_).
   * - Must be a unique map resource name.
   * - No spaces allowed. For example, `ExampleMap`.
   *
   * @public
   */
  MapName: string | undefined;

  /**
   * Specifies the `MapConfiguration`, including the map style, for the map resource that you create. The map style defines the look of maps and the data provider for your map resource.
   *
   * @public
   */
  Configuration: MapConfiguration | undefined;

  /**
   * No longer used. If included, the only allowed value is `RequestBasedUsage`.
   *
   * @deprecated (since 2022-02-01) Deprecated. If included, the only allowed value is RequestBasedUsage.
   * @public
   */
  PricingPlan?: PricingPlan | undefined;

  /**
   * An optional description for the map resource.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Applies one or more tags to the map resource. A tag is a key-value pair helps manage, identify, search, and filter your resources by labelling them.
   *
   * Format: `"key" : "value"`
   *
   * Restrictions:
   *
   * - Maximum 50 tags per resource
   * - Each resource tag must be unique with a maximum of one value.
   * - Maximum key length: 128 Unicode characters in UTF-8
   * - Maximum value length: 256 Unicode characters in UTF-8
   * - Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @.
   * - Cannot use "aws:" as a prefix for a key.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateMapResponse {
  /**
   * The name of the map resource.
   *
   * @public
   */
  MapName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the map resource. Used to specify a resource across all Amazon Web Services.
   *
   * - Format example: `arn:aws:geo:region:account-id:map/ExampleMap`
   *
   * @public
   */
  MapArn: string | undefined;

  /**
   * The timestamp for when the map resource was created in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`.
   *
   * @public
   */
  CreateTime: Date | undefined;
}

/**
 * Specifies the data storage option chosen for requesting Places.
 *
 * > **Important:**
 * >
 * > When using Amazon Location Places:
 * >
 * > - If using HERE Technologies as a data provider, you can't store results for locations in Japan by setting `IntendedUse` to `Storage`. parameter.
 * > - Under the `MobileAssetTracking` or `MobilAssetManagement` pricing plan, you can't store results from your place index resources by setting `IntendedUse` to `Storage`. This returns a validation exception error.
 * >
 * > For more information, see the [AWS Service Terms](https://aws.amazon.com/service-terms/) for Amazon Location Service.
 *
 * @public
 */
export interface DataSourceConfiguration {
  /**
   * Specifies how the results of an operation will be stored by the caller.
   *
   * Valid values include:
   *
   * - `SingleUse` specifies that the results won't be stored.
   * - `Storage` specifies that the result can be cached or stored in a database.
   *
   * Default value: `SingleUse`
   *
   * @public
   */
  IntendedUse?: IntendedUse | undefined;
}

/**
 * @public
 */
export interface CreatePlaceIndexRequest {
  /**
   * The name of the place index resource.
   *
   * Requirements:
   *
   * - Contain only alphanumeric characters (A–Z, a–z, 0–9), hyphens (-), periods (.), and underscores (_).
   * - Must be a unique place index resource name.
   * - No spaces allowed. For example, `ExamplePlaceIndex`.
   *
   * @public
   */
  IndexName: string | undefined;

  /**
   * Specifies the geospatial data provider for the new place index.
   *
   * > **Note:** This field is case-sensitive. Enter the valid values as shown. For example, entering `HERE` returns an error.
   *
   * Valid values include:
   *
   * - `Esri` – For additional information about [Esri](https://docs.aws.amazon.com/location/previous/developerguide/esri.html)'s coverage in your region of interest, see [Esri details on geocoding coverage](https://developers.arcgis.com/rest/geocode/api-reference/geocode-coverage.htm).
   * - `Grab` – Grab provides place index functionality for Southeast Asia. For additional information about [GrabMaps](https://docs.aws.amazon.com/location/previous/developerguide/grab.html)' coverage, see [GrabMaps countries and areas covered](https://docs.aws.amazon.com/location/previous/developerguide/grab.html#grab-coverage-area).
   * - `Here` – For additional information about [HERE Technologies](https://docs.aws.amazon.com/location/previous/developerguide/HERE.html)' coverage in your region of interest, see [HERE details on goecoding coverage](https://developer.here.com/documentation/geocoder/dev_guide/topics/coverage-geocoder.html).
   *
   *   > **Important:** If you specify HERE Technologies (`Here`) as the data provider, you may not [store results](https://docs.aws.amazon.com/location-places/latest/APIReference/API_DataSourceConfiguration.html) for locations in Japan. For more information, see the [Amazon Web Services service terms](http://aws.amazon.com/service-terms/) for Amazon Location Service.
   *
   * For additional information , see [Data providers](https://docs.aws.amazon.com/location/previous/developerguide/what-is-data-provider.html) on the *Amazon Location Service developer guide*.
   *
   * @public
   */
  DataSource: string | undefined;

  /**
   * No longer used. If included, the only allowed value is `RequestBasedUsage`.
   *
   * @deprecated (since 2022-02-01) Deprecated. If included, the only allowed value is RequestBasedUsage.
   * @public
   */
  PricingPlan?: PricingPlan | undefined;

  /**
   * The optional description for the place index resource.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Specifies the data storage option requesting Places.
   *
   * @public
   */
  DataSourceConfiguration?: DataSourceConfiguration | undefined;

  /**
   * Applies one or more tags to the place index resource. A tag is a key-value pair that helps you manage, identify, search, and filter your resources.
   *
   * Format: `"key" : "value"`
   *
   * Restrictions:
   *
   * - Maximum 50 tags per resource.
   * - Each tag key must be unique and must have exactly one associated value.
   * - Maximum key length: 128 Unicode characters in UTF-8.
   * - Maximum value length: 256 Unicode characters in UTF-8.
   * - Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @
   * - Cannot use "aws:" as a prefix for a key.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreatePlaceIndexResponse {
  /**
   * The name for the place index resource.
   *
   * @public
   */
  IndexName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the place index resource. Used to specify a resource across Amazon Web Services.
   *
   * - Format example: `arn:aws:geo:region:account-id:place-index/ExamplePlaceIndex`
   *
   * @public
   */
  IndexArn: string | undefined;

  /**
   * The timestamp for when the place index resource was created in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`.
   *
   * @public
   */
  CreateTime: Date | undefined;
}

/**
 * @public
 */
export interface CreateRouteCalculatorRequest {
  /**
   * The name of the route calculator resource.
   *
   * Requirements:
   *
   * - Can use alphanumeric characters (A–Z, a–z, 0–9) , hyphens (-), periods (.), and underscores (_).
   * - Must be a unique Route calculator resource name.
   * - No spaces allowed. For example, `ExampleRouteCalculator`.
   *
   * @public
   */
  CalculatorName: string | undefined;

  /**
   * Specifies the data provider of traffic and road network data.
   *
   * > **Note:** This field is case-sensitive. Enter the valid values as shown. For example, entering `HERE` returns an error.
   *
   * Valid values include:
   *
   * - `Esri` – For additional information about [Esri](https://docs.aws.amazon.com/location/previous/developerguide/esri.html)'s coverage in your region of interest, see [Esri details on street networks and traffic coverage](https://doc.arcgis.com/en/arcgis-online/reference/network-coverage.htm).
   *
   *   Route calculators that use Esri as a data source only calculate routes that are shorter than 400 km.
   * - `Grab` – Grab provides routing functionality for Southeast Asia. For additional information about [GrabMaps](https://docs.aws.amazon.com/location/previous/developerguide/grab.html)' coverage, see [GrabMaps countries and areas covered](https://docs.aws.amazon.com/location/previous/developerguide/grab.html#grab-coverage-area).
   * - `Here` – For additional information about [HERE Technologies](https://docs.aws.amazon.com/location/previous/developerguide/HERE.html)' coverage in your region of interest, see [HERE car routing coverage](https://developer.here.com/documentation/routing-api/dev_guide/topics/coverage/car-routing.html) and [HERE truck routing coverage](https://developer.here.com/documentation/routing-api/dev_guide/topics/coverage/truck-routing.html).
   *
   * For additional information , see [Data providers](https://docs.aws.amazon.com/location/previous/developerguide/what-is-data-provider.html) on the *Amazon Location Service Developer Guide*.
   *
   * @public
   */
  DataSource: string | undefined;

  /**
   * No longer used. If included, the only allowed value is `RequestBasedUsage`.
   *
   * @deprecated (since 2022-02-01) Deprecated. If included, the only allowed value is RequestBasedUsage.
   * @public
   */
  PricingPlan?: PricingPlan | undefined;

  /**
   * The optional description for the route calculator resource.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Applies one or more tags to the route calculator resource. A tag is a key-value pair helps manage, identify, search, and filter your resources by labelling them.
   *
   * - For example: \{ `"tag1" : "value1"`, `"tag2" : "value2"`\}
   *
   * Format: `"key" : "value"`
   *
   * Restrictions:
   *
   * - Maximum 50 tags per resource
   * - Each resource tag must be unique with a maximum of one value.
   * - Maximum key length: 128 Unicode characters in UTF-8
   * - Maximum value length: 256 Unicode characters in UTF-8
   * - Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @.
   * - Cannot use "aws:" as a prefix for a key.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateRouteCalculatorResponse {
  /**
   * The name of the route calculator resource.
   *
   * - For example, `ExampleRouteCalculator`.
   *
   * @public
   */
  CalculatorName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the route calculator resource. Use the ARN when you specify a resource across all Amazon Web Services.
   *
   * - Format example: `arn:aws:geo:region:account-id:route-calculator/ExampleCalculator`
   *
   * @public
   */
  CalculatorArn: string | undefined;

  /**
   * The timestamp when the route calculator resource was created in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`.
   *
   * - For example, `2020–07-2T12:15:20.000Z+01:00`
   *
   * @public
   */
  CreateTime: Date | undefined;
}

/**
 * @public
 */
export interface CreateTrackerRequest {
  /**
   * The name for the tracker resource.
   *
   * Requirements:
   *
   * - Contain only alphanumeric characters (A-Z, a-z, 0-9) , hyphens (-), periods (.), and underscores (_).
   * - Must be a unique tracker resource name.
   * - No spaces allowed. For example, `ExampleTracker`.
   *
   * @public
   */
  TrackerName: string | undefined;

  /**
   * No longer used. If included, the only allowed value is `RequestBasedUsage`.
   *
   * @deprecated (since 2022-02-01) Deprecated. If included, the only allowed value is RequestBasedUsage.
   * @public
   */
  PricingPlan?: PricingPlan | undefined;

  /**
   * A key identifier for an [Amazon Web Services KMS customer managed key](https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html). Enter a key ID, key ARN, alias name, or alias ARN.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * This parameter is no longer used.
   *
   * @deprecated (since 2022-02-01) Deprecated. No longer allowed.
   * @public
   */
  PricingPlanDataSource?: string | undefined;

  /**
   * An optional description for the tracker resource.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Applies one or more tags to the tracker resource. A tag is a key-value pair helps manage, identify, search, and filter your resources by labelling them.
   *
   * Format: `"key" : "value"`
   *
   * Restrictions:
   *
   * - Maximum 50 tags per resource
   * - Each resource tag must be unique with a maximum of one value.
   * - Maximum key length: 128 Unicode characters in UTF-8
   * - Maximum value length: 256 Unicode characters in UTF-8
   * - Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @.
   * - Cannot use "aws:" as a prefix for a key.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Specifies the position filtering for the tracker resource.
   *
   * Valid values:
   *
   * - `TimeBased` - Location updates are evaluated against linked geofence collections, but not every location update is stored. If your update frequency is more often than 30 seconds, only one update per 30 seconds is stored for each unique device ID.
   * - `DistanceBased` - If the device has moved less than 30 m (98.4 ft), location updates are ignored. Location updates within this area are neither evaluated against linked geofence collections, nor stored. This helps control costs by reducing the number of geofence evaluations and historical device positions to paginate through. Distance-based filtering can also reduce the effects of GPS noise when displaying device trajectories on a map.
   * - `AccuracyBased` - If the device has moved less than the measured accuracy, location updates are ignored. For example, if two consecutive updates from a device have a horizontal accuracy of 5 m and 10 m, the second update is ignored if the device has moved less than 15 m. Ignored location updates are neither evaluated against linked geofence collections, nor stored. This can reduce the effects of GPS noise when displaying device trajectories on a map, and can help control your costs by reducing the number of geofence evaluations.
   *
   * This field is optional. If not specified, the default value is `TimeBased`.
   *
   * @public
   */
  PositionFiltering?: PositionFiltering | undefined;

  /**
   * Whether to enable position `UPDATE` events from this tracker to be sent to EventBridge.
   *
   * > **Note:** You do not need enable this feature to get `ENTER` and `EXIT` events for geofences with this tracker. Those events are always sent to EventBridge.
   *
   * @public
   */
  EventBridgeEnabled?: boolean | undefined;

  /**
   * Enables `GeospatialQueries` for a tracker that uses a [Amazon Web Services KMS customer managed key](https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html).
   *
   * This parameter is only used if you are using a KMS customer managed key.
   *
   * > **Note:**
   * >
   * > If you wish to encrypt your data using your own KMS customer managed key, then the Bounding Polygon Queries feature will be disabled by default. This is because by using this feature, a representation of your device positions will not be encrypted using the your KMS managed key. The exact device position, however; is still encrypted using your managed key.
   * >
   * > You can choose to opt-in to the Bounding Polygon Quseries feature. This is done by setting the `KmsKeyEnableGeospatialQueries` parameter to true when creating or updating a Tracker.
   *
   * @public
   */
  KmsKeyEnableGeospatialQueries?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateTrackerResponse {
  /**
   * The name of the tracker resource.
   *
   * @public
   */
  TrackerName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the tracker resource. Used when you need to specify a resource across all Amazon Web Services.
   *
   * - Format example: `arn:aws:geo:region:account-id:tracker/ExampleTracker`
   *
   * @public
   */
  TrackerArn: string | undefined;

  /**
   * The timestamp for when the tracker resource was created in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`.
   *
   * @public
   */
  CreateTime: Date | undefined;
}

/**
 * @public
 */
export interface DeleteGeofenceCollectionRequest {
  /**
   * The name of the geofence collection to be deleted.
   *
   * @public
   */
  CollectionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteGeofenceCollectionResponse {}

/**
 * @public
 */
export interface DeleteMapRequest {
  /**
   * The name of the map resource to be deleted.
   *
   * @public
   */
  MapName: string | undefined;
}

/**
 * @public
 */
export interface DeleteMapResponse {}

/**
 * @public
 */
export interface DeletePlaceIndexRequest {
  /**
   * The name of the place index resource to be deleted.
   *
   * @public
   */
  IndexName: string | undefined;
}

/**
 * @public
 */
export interface DeletePlaceIndexResponse {}

/**
 * @public
 */
export interface DeleteRouteCalculatorRequest {
  /**
   * The name of the route calculator resource to be deleted.
   *
   * @public
   */
  CalculatorName: string | undefined;
}

/**
 * @public
 */
export interface DeleteRouteCalculatorResponse {}

/**
 * @public
 */
export interface DeleteTrackerRequest {
  /**
   * The name of the tracker resource to be deleted.
   *
   * @public
   */
  TrackerName: string | undefined;
}

/**
 * @public
 */
export interface DeleteTrackerResponse {}

/**
 * @public
 */
export interface DescribeGeofenceCollectionRequest {
  /**
   * The name of the geofence collection.
   *
   * @public
   */
  CollectionName: string | undefined;
}

/**
 * @public
 */
export interface DescribeGeofenceCollectionResponse {
  /**
   * The name of the geofence collection.
   *
   * @public
   */
  CollectionName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the geofence collection resource. Used when you need to specify a resource across all Amazon Web Services.
   *
   * - Format example: `arn:aws:geo:region:account-id:geofence-collection/ExampleGeofenceCollection`
   *
   * @public
   */
  CollectionArn: string | undefined;

  /**
   * The optional description for the geofence collection.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * No longer used. Always returns `RequestBasedUsage`.
   *
   * @deprecated (since 2022-02-01) Deprecated. Always returns RequestBasedUsage.
   * @public
   */
  PricingPlan?: PricingPlan | undefined;

  /**
   * No longer used. Always returns an empty string.
   *
   * @deprecated (since 2022-02-01) Deprecated. Unused.
   * @public
   */
  PricingPlanDataSource?: string | undefined;

  /**
   * A key identifier for an [Amazon Web Services KMS customer managed key](https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html) assigned to the Amazon Location resource
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Displays the key, value pairs of tags associated with this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The timestamp for when the geofence resource was created in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`
   *
   * @public
   */
  CreateTime: Date | undefined;

  /**
   * The timestamp for when the geofence collection was last updated in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`
   *
   * @public
   */
  UpdateTime: Date | undefined;

  /**
   * The number of geofences in the geofence collection.
   *
   * @public
   */
  GeofenceCount?: number | undefined;
}

/**
 * @public
 */
export interface DescribeMapRequest {
  /**
   * The name of the map resource.
   *
   * @public
   */
  MapName: string | undefined;
}

/**
 * @public
 */
export interface DescribeMapResponse {
  /**
   * The map style selected from an available provider.
   *
   * @public
   */
  MapName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the map resource. Used to specify a resource across all Amazon Web Services.
   *
   * - Format example: `arn:aws:geo:region:account-id:map/ExampleMap`
   *
   * @public
   */
  MapArn: string | undefined;

  /**
   * No longer used. Always returns `RequestBasedUsage`.
   *
   * @deprecated (since 2022-02-01) Deprecated. Always returns RequestBasedUsage.
   * @public
   */
  PricingPlan?: PricingPlan | undefined;

  /**
   * Specifies the data provider for the associated map tiles.
   *
   * @public
   */
  DataSource: string | undefined;

  /**
   * Specifies the map tile style selected from a partner data provider.
   *
   * @public
   */
  Configuration: MapConfiguration | undefined;

  /**
   * The optional description for the map resource.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * Tags associated with the map resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The timestamp for when the map resource was created in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`.
   *
   * @public
   */
  CreateTime: Date | undefined;

  /**
   * The timestamp for when the map resource was last update in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`.
   *
   * @public
   */
  UpdateTime: Date | undefined;
}

/**
 * @public
 */
export interface DescribePlaceIndexRequest {
  /**
   * The name of the place index resource.
   *
   * @public
   */
  IndexName: string | undefined;
}

/**
 * @public
 */
export interface DescribePlaceIndexResponse {
  /**
   * The name of the place index resource being described.
   *
   * @public
   */
  IndexName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the place index resource. Used to specify a resource across Amazon Web Services.
   *
   * - Format example: `arn:aws:geo:region:account-id:place-index/ExamplePlaceIndex`
   *
   * @public
   */
  IndexArn: string | undefined;

  /**
   * No longer used. Always returns `RequestBasedUsage`.
   *
   * @deprecated (since 2022-02-01) Deprecated. Always returns RequestBasedUsage.
   * @public
   */
  PricingPlan?: PricingPlan | undefined;

  /**
   * The optional description for the place index resource.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * The timestamp for when the place index resource was created in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`.
   *
   * @public
   */
  CreateTime: Date | undefined;

  /**
   * The timestamp for when the place index resource was last updated in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`.
   *
   * @public
   */
  UpdateTime: Date | undefined;

  /**
   * The data provider of geospatial data. Values can be one of the following:
   *
   * - `Esri`
   * - `Grab`
   * - `Here`
   *
   * For more information about data providers, see [Amazon Location Service data providers](https://docs.aws.amazon.com/location/previous/developerguide/what-is-data-provider.html).
   *
   * @public
   */
  DataSource: string | undefined;

  /**
   * The specified data storage option for requesting Places.
   *
   * @public
   */
  DataSourceConfiguration: DataSourceConfiguration | undefined;

  /**
   * Tags associated with place index resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeRouteCalculatorRequest {
  /**
   * The name of the route calculator resource.
   *
   * @public
   */
  CalculatorName: string | undefined;
}

/**
 * @public
 */
export interface DescribeRouteCalculatorResponse {
  /**
   * The name of the route calculator resource being described.
   *
   * @public
   */
  CalculatorName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the Route calculator resource. Use the ARN when you specify a resource across Amazon Web Services.
   *
   * - Format example: `arn:aws:geo:region:account-id:route-calculator/ExampleCalculator`
   *
   * @public
   */
  CalculatorArn: string | undefined;

  /**
   * Always returns `RequestBasedUsage`.
   *
   * @deprecated (since 2022-02-01) Deprecated. Always returns RequestBasedUsage.
   * @public
   */
  PricingPlan?: PricingPlan | undefined;

  /**
   * The optional description of the route calculator resource.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * The timestamp when the route calculator resource was created in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`.
   *
   * - For example, `2020–07-2T12:15:20.000Z+01:00`
   *
   * @public
   */
  CreateTime: Date | undefined;

  /**
   * The timestamp when the route calculator resource was last updated in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`.
   *
   * - For example, `2020–07-2T12:15:20.000Z+01:00`
   *
   * @public
   */
  UpdateTime: Date | undefined;

  /**
   * The data provider of traffic and road network data. Indicates one of the available providers:
   *
   * - `Esri`
   * - `Grab`
   * - `Here`
   *
   * For more information about data providers, see [Amazon Location Service data providers](https://docs.aws.amazon.com/location/previous/developerguide/what-is-data-provider.html).
   *
   * @public
   */
  DataSource: string | undefined;

  /**
   * Tags associated with route calculator resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeTrackerRequest {
  /**
   * The name of the tracker resource.
   *
   * @public
   */
  TrackerName: string | undefined;
}

/**
 * @public
 */
export interface DescribeTrackerResponse {
  /**
   * The name of the tracker resource.
   *
   * @public
   */
  TrackerName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the tracker resource. Used when you need to specify a resource across all Amazon Web Services.
   *
   * - Format example: `arn:aws:geo:region:account-id:tracker/ExampleTracker`
   *
   * @public
   */
  TrackerArn: string | undefined;

  /**
   * The optional description for the tracker resource.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * Always returns `RequestBasedUsage`.
   *
   * @deprecated (since 2022-02-01) Deprecated. Always returns RequestBasedUsage.
   * @public
   */
  PricingPlan?: PricingPlan | undefined;

  /**
   * No longer used. Always returns an empty string.
   *
   * @deprecated (since 2022-02-01) Deprecated. Unused.
   * @public
   */
  PricingPlanDataSource?: string | undefined;

  /**
   * The tags associated with the tracker resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The timestamp for when the tracker resource was created in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`.
   *
   * @public
   */
  CreateTime: Date | undefined;

  /**
   * The timestamp for when the tracker resource was last updated in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`.
   *
   * @public
   */
  UpdateTime: Date | undefined;

  /**
   * A key identifier for an [Amazon Web Services KMS customer managed key](https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html) assigned to the Amazon Location resource.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The position filtering method of the tracker resource.
   *
   * @public
   */
  PositionFiltering?: PositionFiltering | undefined;

  /**
   * Whether `UPDATE` events from this tracker in EventBridge are enabled. If set to `true` these events will be sent to EventBridge.
   *
   * @public
   */
  EventBridgeEnabled?: boolean | undefined;

  /**
   * Enables `GeospatialQueries` for a tracker that uses a [Amazon Web Services KMS customer managed key](https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html).
   *
   * This parameter is only used if you are using a KMS customer managed key.
   *
   * > **Note:**
   * >
   * > If you wish to encrypt your data using your own KMS customer managed key, then the Bounding Polygon Queries feature will be disabled by default. This is because by using this feature, a representation of your device positions will not be encrypted using the your KMS managed key. The exact device position, however; is still encrypted using your managed key.
   * >
   * > You can choose to opt-in to the Bounding Polygon Quseries feature. This is done by setting the `KmsKeyEnableGeospatialQueries` parameter to true when creating or updating a Tracker.
   *
   * @public
   */
  KmsKeyEnableGeospatialQueries?: boolean | undefined;
}

/**
 * Wi-Fi access point.
 *
 * @public
 */
export interface WiFiAccessPoint {
  /**
   * Medium access control address (Mac).
   *
   * @public
   */
  MacAddress: string | undefined;

  /**
   * Received signal strength (dBm) of the WLAN measurement data.
   *
   * @public
   */
  Rss: number | undefined;
}

/**
 * The device's position, IP address, and Wi-Fi access points.
 *
 * @public
 */
export interface DeviceState {
  /**
   * The device identifier.
   *
   * @public
   */
  DeviceId: string | undefined;

  /**
   * The timestamp at which the device's position was determined. Uses [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`.
   *
   * @public
   */
  SampleTime: Date | undefined;

  /**
   * The last known device position.
   *
   * @public
   */
  Position: number[] | undefined;

  /**
   * Defines the level of certainty of the position.
   *
   * @public
   */
  Accuracy?: PositionalAccuracy | undefined;

  /**
   * The device's Ipv4 address.
   *
   * @public
   */
  Ipv4Address?: string | undefined;

  /**
   * The Wi-Fi access points the device is using.
   *
   * @public
   */
  WiFiAccessPoints?: WiFiAccessPoint[] | undefined;

  /**
   * The cellular network infrastructure that the device is connected to.
   *
   * @public
   */
  CellSignals?: CellSignals | undefined;
}

/**
 * @public
 */
export interface DisassociateTrackerConsumerRequest {
  /**
   * The name of the tracker resource to be dissociated from the consumer.
   *
   * @public
   */
  TrackerName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the geofence collection to be disassociated from the tracker resource. Used when you need to specify a resource across all Amazon Web Services.
   *
   * - Format example: `arn:aws:geo:region:account-id:geofence-collection/ExampleGeofenceCollectionConsumer`
   *
   * @public
   */
  ConsumerArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateTrackerConsumerResponse {}

/**
 * A forecasted event represents a geofence event in relation to the requested device state, that may occur given the provided device state and time horizon.
 *
 * @public
 */
export interface ForecastedEvent {
  /**
   * The forecasted event identifier.
   *
   * @public
   */
  EventId: string | undefined;

  /**
   * The geofence identifier pertaining to the forecasted event.
   *
   * @public
   */
  GeofenceId: string | undefined;

  /**
   * Indicates if the device is located within the geofence.
   *
   * @public
   */
  IsDeviceInGeofence: boolean | undefined;

  /**
   * The closest distance from the device's position to the geofence.
   *
   * @public
   */
  NearestDistance: number | undefined;

  /**
   * The event type, forecasting three states for which a device can be in relative to a geofence:
   *
   * `ENTER`: If a device is outside of a geofence, but would breach the fence if the device is moving at its current speed within time horizon window.
   *
   * `EXIT`: If a device is inside of a geofence, but would breach the fence if the device is moving at its current speed within time horizon window.
   *
   * `IDLE`: If a device is inside of a geofence, and the device is not moving.
   *
   * @public
   */
  EventType: ForecastedGeofenceEventType | undefined;

  /**
   * The forecasted time the device will breach the geofence in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`
   *
   * @public
   */
  ForecastedBreachTime?: Date | undefined;

  /**
   * The geofence properties.
   *
   * @public
   */
  GeofenceProperties?: Record<string, string> | undefined;
}

/**
 * The device's position and speed.
 *
 * @public
 */
export interface ForecastGeofenceEventsDeviceState {
  /**
   * The device's position.
   *
   * @public
   */
  Position: number[] | undefined;

  /**
   * The device's speed.
   *
   * @public
   */
  Speed?: number | undefined;
}

/**
 * @public
 */
export interface ForecastGeofenceEventsRequest {
  /**
   * The name of the geofence collection.
   *
   * @public
   */
  CollectionName: string | undefined;

  /**
   * Represents the device's state, including its current position and speed. When speed is omitted, this API performs a *containment check*. The *containment check* operation returns `IDLE` events for geofences where the device is currently inside of, but no other events.
   *
   * @public
   */
  DeviceState: ForecastGeofenceEventsDeviceState | undefined;

  /**
   * The forward-looking time window for forecasting, specified in minutes. The API only returns events that are predicted to occur within this time horizon. When no value is specified, this API performs a *containment check*. The *containment check* operation returns `IDLE` events for geofences where the device is currently inside of, but no other events.
   *
   * @public
   */
  TimeHorizonMinutes?: number | undefined;

  /**
   * The distance unit used for the `NearestDistance` property returned in a forecasted event. The measurement system must match for `DistanceUnit` and `SpeedUnit`; if `Kilometers` is specified for `DistanceUnit`, then `SpeedUnit` must be `KilometersPerHour`.
   *
   * Default Value: `Kilometers`
   *
   * @public
   */
  DistanceUnit?: DistanceUnit | undefined;

  /**
   * The speed unit for the device captured by the device state. The measurement system must match for `DistanceUnit` and `SpeedUnit`; if `Kilometers` is specified for `DistanceUnit`, then `SpeedUnit` must be `KilometersPerHour`.
   *
   * Default Value: `KilometersPerHour`.
   *
   * @public
   */
  SpeedUnit?: SpeedUnit | undefined;

  /**
   * The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.
   *
   * Default value: `null`
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An optional limit for the number of resources returned in a single call.
   *
   * Default value: `20`
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ForecastGeofenceEventsResponse {
  /**
   * The list of forecasted events.
   *
   * @public
   */
  ForecastedEvents: ForecastedEvent[] | undefined;

  /**
   * The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The distance unit for the forecasted events.
   *
   * @public
   */
  DistanceUnit: DistanceUnit | undefined;

  /**
   * The speed unit for the forecasted events.
   *
   * @public
   */
  SpeedUnit: SpeedUnit | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource whose tags you want to retrieve.
   *
   * - Format example: `arn:aws:geo:region:account-id:resourcetype/ExampleResource`
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * Tags that have been applied to the specified resource. Tags are mapped from the tag key to the tag value: `"TagKey" : "TagValue"`.
   *
   * - Format example: `\{"tag1" : "value1", "tag2" : "value2"\}`
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource whose tags you want to update.
   *
   * - Format example: `arn:aws:geo:region:account-id:resourcetype/ExampleResource`
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Applies one or more tags to specific resource. A tag is a key-value pair that helps you manage, identify, search, and filter your resources.
   *
   * Format: `"key" : "value"`
   *
   * Restrictions:
   *
   * - Maximum 50 tags per resource.
   * - Each tag key must be unique and must have exactly one associated value.
   * - Maximum key length: 128 Unicode characters in UTF-8.
   * - Maximum value length: 256 Unicode characters in UTF-8.
   * - Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @
   * - Cannot use "aws:" as a prefix for a key.
   *
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource from which you want to remove tags.
   *
   * - Format example: `arn:aws:geo:region:account-id:resourcetype/ExampleResource`
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The list of tag keys to remove from the specified resource.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface GetGeofenceRequest {
  /**
   * The geofence collection storing the target geofence.
   *
   * @public
   */
  CollectionName: string | undefined;

  /**
   * The geofence you're retrieving details for.
   *
   * @public
   */
  GeofenceId: string | undefined;
}

/**
 * @public
 */
export interface GetGeofenceResponse {
  /**
   * The geofence identifier.
   *
   * @public
   */
  GeofenceId: string | undefined;

  /**
   * Contains the geofence geometry details describing the position of the geofence. Can be a circle, a polygon, or a multipolygon.
   *
   * @public
   */
  Geometry: GeofenceGeometry | undefined;

  /**
   * Identifies the state of the geofence. A geofence will hold one of the following states:
   *
   * - `ACTIVE` — The geofence has been indexed by the system.
   * - `PENDING` — The geofence is being processed by the system.
   * - `FAILED` — The geofence failed to be indexed by the system.
   * - `DELETED` — The geofence has been deleted from the system index.
   * - `DELETING` — The geofence is being deleted from the system index.
   *
   * @public
   */
  Status: string | undefined;

  /**
   * The timestamp for when the geofence collection was created in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`
   *
   * @public
   */
  CreateTime: Date | undefined;

  /**
   * The timestamp for when the geofence collection was last updated in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`
   *
   * @public
   */
  UpdateTime: Date | undefined;

  /**
   * User defined properties of the geofence. A property is a key-value pair stored with the geofence and added to any geofence event triggered with that geofence.
   *
   * Format: `"key" : "value"`
   *
   * @public
   */
  GeofenceProperties?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListGeofenceCollectionsRequest {
  /**
   * An optional limit for the number of resources returned in a single call.
   *
   * Default value: `100`
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.
   *
   * Default value: `null`
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains the geofence collection details.
 *
 * > **Note:** The returned geometry will always match the geometry format used when the geofence was created.
 *
 * @public
 */
export interface ListGeofenceCollectionsResponseEntry {
  /**
   * The name of the geofence collection.
   *
   * @public
   */
  CollectionName: string | undefined;

  /**
   * The description for the geofence collection
   *
   * @public
   */
  Description: string | undefined;

  /**
   * No longer used. Always returns `RequestBasedUsage`.
   *
   * @deprecated (since 2022-02-01) Deprecated. Always returns RequestBasedUsage.
   * @public
   */
  PricingPlan?: PricingPlan | undefined;

  /**
   * No longer used. Always returns an empty string.
   *
   * @deprecated (since 2022-02-01) Deprecated. Unused.
   * @public
   */
  PricingPlanDataSource?: string | undefined;

  /**
   * The timestamp for when the geofence collection was created in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`
   *
   * @public
   */
  CreateTime: Date | undefined;

  /**
   * Specifies a timestamp for when the resource was last updated in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`
   *
   * @public
   */
  UpdateTime: Date | undefined;
}

/**
 * @public
 */
export interface ListGeofenceCollectionsResponse {
  /**
   * Lists the geofence collections that exist in your Amazon Web Services account.
   *
   * @public
   */
  Entries: ListGeofenceCollectionsResponseEntry[] | undefined;

  /**
   * A pagination token indicating there are additional pages available. You can use the token in a following request to fetch the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGeofencesRequest {
  /**
   * The name of the geofence collection storing the list of geofences.
   *
   * @public
   */
  CollectionName: string | undefined;

  /**
   * The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.
   *
   * Default value: `null`
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An optional limit for the number of geofences returned in a single call.
   *
   * Default value: `100`
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Contains a list of geofences stored in a given geofence collection.
 *
 * > **Note:** The returned geometry will always match the geometry format used when the geofence was created.
 *
 * @public
 */
export interface ListGeofenceResponseEntry {
  /**
   * The geofence identifier.
   *
   * @public
   */
  GeofenceId: string | undefined;

  /**
   * Contains the geofence geometry details describing the position of the geofence. Can be a circle, a polygon, or a multipolygon.
   *
   * @public
   */
  Geometry: GeofenceGeometry | undefined;

  /**
   * Identifies the state of the geofence. A geofence will hold one of the following states:
   *
   * - `ACTIVE` — The geofence has been indexed by the system.
   * - `PENDING` — The geofence is being processed by the system.
   * - `FAILED` — The geofence failed to be indexed by the system.
   * - `DELETED` — The geofence has been deleted from the system index.
   * - `DELETING` — The geofence is being deleted from the system index.
   *
   * @public
   */
  Status: string | undefined;

  /**
   * The timestamp for when the geofence was stored in a geofence collection in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`
   *
   * @public
   */
  CreateTime: Date | undefined;

  /**
   * The timestamp for when the geofence was last updated in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`
   *
   * @public
   */
  UpdateTime: Date | undefined;

  /**
   * User defined properties of the geofence. A property is a key-value pair stored with the geofence and added to any geofence event triggered with that geofence.
   *
   * Format: `"key" : "value"`
   *
   * @public
   */
  GeofenceProperties?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListGeofencesResponse {
  /**
   * Contains a list of geofences stored in the geofence collection.
   *
   * @public
   */
  Entries: ListGeofenceResponseEntry[] | undefined;

  /**
   * A pagination token indicating there are additional pages available. You can use the token in a following request to fetch the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutGeofenceRequest {
  /**
   * The geofence collection to store the geofence in.
   *
   * @public
   */
  CollectionName: string | undefined;

  /**
   * An identifier for the geofence. For example, `ExampleGeofence-1`.
   *
   * @public
   */
  GeofenceId: string | undefined;

  /**
   * Contains the details to specify the position of the geofence. Can be a circle, a polygon, or a multipolygon. `Polygon` and `MultiPolygon` geometries can be defined using their respective parameters, or encoded in Geobuf format using the `Geobuf` parameter. Including multiple geometry types in the same request will return a validation error.
   *
   * > **Note:** The geofence `Polygon` and `MultiPolygon` formats support a maximum of 1,000 total vertices. The `Geobuf` format supports a maximum of 100,000 vertices.
   *
   * @public
   */
  Geometry: GeofenceGeometry | undefined;

  /**
   * Associates one of more properties with the geofence. A property is a key-value pair stored with the geofence and added to any geofence event triggered with that geofence.
   *
   * Format: `"key" : "value"`
   *
   * @public
   */
  GeofenceProperties?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutGeofenceResponse {
  /**
   * The geofence identifier entered in the request.
   *
   * @public
   */
  GeofenceId: string | undefined;

  /**
   * The timestamp for when the geofence was created in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`
   *
   * @public
   */
  CreateTime: Date | undefined;

  /**
   * The timestamp for when the geofence was last updated in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`
   *
   * @public
   */
  UpdateTime: Date | undefined;
}

/**
 * @public
 */
export interface UpdateGeofenceCollectionRequest {
  /**
   * The name of the geofence collection to update.
   *
   * @public
   */
  CollectionName: string | undefined;

  /**
   * No longer used. If included, the only allowed value is `RequestBasedUsage`.
   *
   * @deprecated (since 2022-02-01) Deprecated. If included, the only allowed value is RequestBasedUsage.
   * @public
   */
  PricingPlan?: PricingPlan | undefined;

  /**
   * This parameter is no longer used.
   *
   * @deprecated (since 2022-02-01) Deprecated. No longer allowed.
   * @public
   */
  PricingPlanDataSource?: string | undefined;

  /**
   * Updates the description for the geofence collection.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateGeofenceCollectionResponse {
  /**
   * The name of the updated geofence collection.
   *
   * @public
   */
  CollectionName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the updated geofence collection. Used to specify a resource across Amazon Web Services.
   *
   * - Format example: `arn:aws:geo:region:account-id:geofence-collection/ExampleGeofenceCollection`
   *
   * @public
   */
  CollectionArn: string | undefined;

  /**
   * The time when the geofence collection was last updated in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`
   *
   * @public
   */
  UpdateTime: Date | undefined;
}

/**
 * @public
 */
export interface GetDevicePositionRequest {
  /**
   * The tracker resource receiving the position update.
   *
   * @public
   */
  TrackerName: string | undefined;

  /**
   * The device whose position you want to retrieve.
   *
   * @public
   */
  DeviceId: string | undefined;
}

/**
 * @public
 */
export interface GetDevicePositionResponse {
  /**
   * The device whose position you retrieved.
   *
   * @public
   */
  DeviceId?: string | undefined;

  /**
   * The timestamp at which the device's position was determined. Uses [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`.
   *
   * @public
   */
  SampleTime: Date | undefined;

  /**
   * The timestamp for when the tracker resource received the device position. Uses [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`.
   *
   * @public
   */
  ReceivedTime: Date | undefined;

  /**
   * The last known device position.
   *
   * @public
   */
  Position: number[] | undefined;

  /**
   * The accuracy of the device position.
   *
   * @public
   */
  Accuracy?: PositionalAccuracy | undefined;

  /**
   * The properties associated with the position.
   *
   * @public
   */
  PositionProperties?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetDevicePositionHistoryRequest {
  /**
   * The tracker resource receiving the request for the device position history.
   *
   * @public
   */
  TrackerName: string | undefined;

  /**
   * The device whose position history you want to retrieve.
   *
   * @public
   */
  DeviceId: string | undefined;

  /**
   * The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.
   *
   * Default value: `null`
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specify the start time for the position history in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`. By default, the value will be 24 hours prior to the time that the request is made.
   *
   * Requirement:
   *
   * - The time specified for `StartTimeInclusive` must be before `EndTimeExclusive`.
   *
   * @public
   */
  StartTimeInclusive?: Date | undefined;

  /**
   * Specify the end time for the position history in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`. By default, the value will be the time that the request is made.
   *
   * Requirement:
   *
   * - The time specified for `EndTimeExclusive` must be after the time for `StartTimeInclusive`.
   *
   * @public
   */
  EndTimeExclusive?: Date | undefined;

  /**
   * An optional limit for the number of device positions returned in a single call.
   *
   * Default value: `100`
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetDevicePositionHistoryResponse {
  /**
   * Contains the position history details for the requested device.
   *
   * @public
   */
  DevicePositions: DevicePosition[] | undefined;

  /**
   * A pagination token indicating there are additional pages available. You can use the token in a following request to fetch the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetJobRequest {
  /**
   * The unique identifier of the job to retrieve.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * Options specific to address validation jobs.
 *
 * @public
 */
export interface ValidateAddressActionOptions {
  /**
   * A list of optional additional parameters that can be requested for each result.
   *
   * Values:
   *
   * - `Position` - Return the position coordinates of the address if available.
   * - `CountrySpecificAttributes` - Return additional information about the address specific to the country of origin.
   *
   * @public
   */
  AdditionalFeatures?: ValidateAddressAdditionalFeature[] | undefined;
}

/**
 * Additional options for configuring job action parameters.
 *
 * @public
 */
export interface JobActionOptions {
  /**
   * Options specific to address validation jobs.
   *
   * @public
   */
  ValidateAddress?: ValidateAddressActionOptions | undefined;
}

/**
 * Error information for failed jobs.
 *
 * @public
 */
export interface JobError {
  /**
   * Error code indicating the type of error that occurred.
   *
   * @public
   */
  Code: JobErrorCode | undefined;

  /**
   * Error messages providing details about the failure.
   *
   * @public
   */
  Messages?: string[] | undefined;
}

/**
 * Configuration for input data location and format.
 *
 * > **Note:** Input files have a limitation of 10gb per file, and 1gb per Parquet row-group within the file.
 *
 * @public
 */
export interface JobInputOptions {
  /**
   * S3 ARN or URI where input files are stored.
   *
   * > **Note:** The Amazon S3 bucket must be created in the same Amazon Web Services region where you plan to run your job.
   *
   * @public
   */
  Location: string | undefined;

  /**
   * Input data format. Currently only `Parquet` is supported.
   *
   * > **Note:** Input files have a limitation of 10gb per file, and 1gb per Parquet row-group within the file.
   *
   * @public
   */
  Format: JobInputFormat | undefined;
}

/**
 * Configuration for output data location and format.
 *
 * @public
 */
export interface JobOutputOptions {
  /**
   * Output data format. Currently only "Parquet" is supported.
   *
   * @public
   */
  Format: JobOutputFormat | undefined;

  /**
   * S3 ARN or URI where output files will be written.
   *
   * > **Note:** The Amazon S3 bucket must exist in the same Amazon Web Services region where you plan to run your job.
   *
   * @public
   */
  Location: string | undefined;
}

/**
 * @public
 */
export interface GetJobResponse {
  /**
   * Action performed by the job.
   *
   * @public
   */
  Action: JobAction | undefined;

  /**
   * Additional options for configuring job action parameters.
   *
   * @public
   */
  ActionOptions?: JobActionOptions | undefined;

  /**
   * Job creation time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sss`.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * Job completion time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sss`. Only returned for jobs in a terminal status: `Completed` | `Failed` | `Cancelled`.
   *
   * @public
   */
  EndedAt?: Date | undefined;

  /**
   * Error information if the job failed.
   *
   * @public
   */
  Error?: JobError | undefined;

  /**
   * IAM role used for permissions when running the job.
   *
   * @public
   */
  ExecutionRoleArn: string | undefined;

  /**
   * Input configuration.
   *
   * @public
   */
  InputOptions: JobInputOptions | undefined;

  /**
   * Amazon Resource Name (ARN) of the specified job.
   *
   * @public
   */
  JobArn: string | undefined;

  /**
   * Unique job identifier.
   *
   * @public
   */
  JobId: string | undefined;

  /**
   * Job name (if provided during creation).
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Output configuration.
   *
   * @public
   */
  OutputOptions: JobOutputOptions | undefined;

  /**
   * Current job status.
   *
   * @public
   */
  Status: JobStatus | undefined;

  /**
   * Last update time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sss`.
   *
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * Tags and corresponding values associated with the specified job.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetMapGlyphsRequest {
  /**
   * The map resource associated with the glyph ﬁle.
   *
   * @public
   */
  MapName: string | undefined;

  /**
   * A comma-separated list of fonts to load glyphs from in order of preference. For example, `Noto Sans Regular, Arial Unicode`.
   *
   * Valid font stacks for [Esri](https://docs.aws.amazon.com/location/previous/developerguide/esri.html) styles:
   *
   * - VectorEsriDarkGrayCanvas – `Ubuntu Medium Italic` | `Ubuntu Medium` | `Ubuntu Italic` | `Ubuntu Regular` | `Ubuntu Bold`
   * - VectorEsriLightGrayCanvas – `Ubuntu Italic` | `Ubuntu Regular` | `Ubuntu Light` | `Ubuntu Bold`
   * - VectorEsriTopographic – `Noto Sans Italic` | `Noto Sans Regular` | `Noto Sans Bold` | `Noto Serif Regular` | `Roboto Condensed Light Italic`
   * - VectorEsriStreets – `Arial Regular` | `Arial Italic` | `Arial Bold`
   * - VectorEsriNavigation – `Arial Regular` | `Arial Italic` | `Arial Bold`
   *
   * Valid font stacks for [HERE Technologies](https://docs.aws.amazon.com/location/previous/developerguide/HERE.html) styles:
   *
   * - VectorHereContrast – `Fira GO Regular` | `Fira GO Bold`
   * - VectorHereExplore, VectorHereExploreTruck, HybridHereExploreSatellite – `Fira GO Italic` | `Fira GO Map` | `Fira GO Map Bold` | `Noto Sans CJK JP Bold` | `Noto Sans CJK JP Light` | `Noto Sans CJK JP Regular`
   *
   * Valid font stacks for [GrabMaps](https://docs.aws.amazon.com/location/previous/developerguide/grab.html) styles:
   *
   * - VectorGrabStandardLight, VectorGrabStandardDark – `Noto Sans Regular` | `Noto Sans Medium` | `Noto Sans Bold`
   *
   * Valid font stacks for [Open Data](https://docs.aws.amazon.com/location/previous/developerguide/open-data.html) styles:
   *
   * - VectorOpenDataStandardLight, VectorOpenDataStandardDark, VectorOpenDataVisualizationLight, VectorOpenDataVisualizationDark – `Amazon Ember Regular,Noto Sans Regular` | `Amazon Ember Bold,Noto Sans Bold` | `Amazon Ember Medium,Noto Sans Medium` | `Amazon Ember Regular Italic,Noto Sans Italic` | `Amazon Ember Condensed RC Regular,Noto Sans Regular` | `Amazon Ember Condensed RC Bold,Noto Sans Bold` | `Amazon Ember Regular,Noto Sans Regular,Noto Sans Arabic Regular` | `Amazon Ember Condensed RC Bold,Noto Sans Bold,Noto Sans Arabic Condensed Bold` | `Amazon Ember Bold,Noto Sans Bold,Noto Sans Arabic Bold` | `Amazon Ember Regular Italic,Noto Sans Italic,Noto Sans Arabic Regular` | `Amazon Ember Condensed RC Regular,Noto Sans Regular,Noto Sans Arabic Condensed Regular` | `Amazon Ember Medium,Noto Sans Medium,Noto Sans Arabic Medium`
   *
   * > **Note:** The fonts used by the Open Data map styles are combined fonts that use `Amazon Ember` for most glyphs but `Noto Sans` for glyphs unsupported by `Amazon Ember`.
   *
   * @public
   */
  FontStack: string | undefined;

  /**
   * A Unicode range of characters to download glyphs for. Each response will contain 256 characters. For example, 0–255 includes all characters from range `U+0000` to `00FF`. Must be aligned to multiples of 256.
   *
   * @public
   */
  FontUnicodeRange: string | undefined;

  /**
   * The optional [API key](https://docs.aws.amazon.com/location/previous/developerguide/using-apikeys.html) to authorize the request.
   *
   * @public
   */
  Key?: string | undefined;
}

/**
 * @public
 */
export interface GetMapGlyphsResponse {
  /**
   * The glyph, as binary blob.
   *
   * @public
   */
  Blob?: Uint8Array | undefined;

  /**
   * The map glyph content type. For example, `application/octet-stream`.
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * The HTTP Cache-Control directive for the value.
   *
   * @public
   */
  CacheControl?: string | undefined;
}

/**
 * @public
 */
export interface GetMapSpritesRequest {
  /**
   * The map resource associated with the sprite ﬁle.
   *
   * @public
   */
  MapName: string | undefined;

  /**
   * The name of the sprite ﬁle. Use the following ﬁle names for the sprite sheet:
   *
   * - `sprites.png`
   * - `sprites@2x.png` for high pixel density displays
   *
   * For the JSON document containing image offsets. Use the following ﬁle names:
   *
   * - `sprites.json`
   * - `sprites@2x.json` for high pixel density displays
   *
   * @public
   */
  FileName: string | undefined;

  /**
   * The optional [API key](https://docs.aws.amazon.com/location/previous/developerguide/using-apikeys.html) to authorize the request.
   *
   * @public
   */
  Key?: string | undefined;
}

/**
 * @public
 */
export interface GetMapSpritesResponse {
  /**
   * Contains the body of the sprite sheet or JSON offset ﬁle.
   *
   * @public
   */
  Blob?: Uint8Array | undefined;

  /**
   * The content type of the sprite sheet and offsets. For example, the sprite sheet content type is `image/png`, and the sprite offset JSON document is `application/json`.
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * The HTTP Cache-Control directive for the value.
   *
   * @public
   */
  CacheControl?: string | undefined;
}

/**
 * @public
 */
export interface GetMapStyleDescriptorRequest {
  /**
   * The map resource to retrieve the style descriptor from.
   *
   * @public
   */
  MapName: string | undefined;

  /**
   * The optional [API key](https://docs.aws.amazon.com/location/previous/developerguide/using-apikeys.html) to authorize the request.
   *
   * @public
   */
  Key?: string | undefined;
}

/**
 * @public
 */
export interface GetMapStyleDescriptorResponse {
  /**
   * Contains the body of the style descriptor.
   *
   * @public
   */
  Blob?: Uint8Array | undefined;

  /**
   * The style descriptor's content type. For example, `application/json`.
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * The HTTP Cache-Control directive for the value.
   *
   * @public
   */
  CacheControl?: string | undefined;
}

/**
 * @public
 */
export interface GetMapTileRequest {
  /**
   * The map resource to retrieve the map tiles from.
   *
   * @public
   */
  MapName: string | undefined;

  /**
   * The zoom value for the map tile.
   *
   * @public
   */
  Z: string | undefined;

  /**
   * The X axis value for the map tile.
   *
   * @public
   */
  X: string | undefined;

  /**
   * The Y axis value for the map tile.
   *
   * @public
   */
  Y: string | undefined;

  /**
   * The optional [API key](https://docs.aws.amazon.com/location/previous/developerguide/using-apikeys.html) to authorize the request.
   *
   * @public
   */
  Key?: string | undefined;
}

/**
 * @public
 */
export interface GetMapTileResponse {
  /**
   * Contains Mapbox Vector Tile (MVT) data.
   *
   * @public
   */
  Blob?: Uint8Array | undefined;

  /**
   * The map tile's content type. For example, `application/vnd.mapbox-vector-tile`.
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * The HTTP Cache-Control directive for the value.
   *
   * @public
   */
  CacheControl?: string | undefined;
}

/**
 * @public
 */
export interface GetPlaceRequest {
  /**
   * The name of the place index resource that you want to use for the search.
   *
   * @public
   */
  IndexName: string | undefined;

  /**
   * The identifier of the place to find.
   *
   * @public
   */
  PlaceId: string | undefined;

  /**
   * The preferred language used to return results. The value must be a valid [BCP 47](https://tools.ietf.org/search/bcp47) language tag, for example, `en` for English.
   *
   * This setting affects the languages used in the results, but not the results themselves. If no language is specified, or not supported for a particular result, the partner automatically chooses a language for the result.
   *
   * For an example, we'll use the Greek language. You search for a location around Athens, Greece, with the `language` parameter set to `en`. The `city` in the results will most likely be returned as `Athens`.
   *
   * If you set the `language` parameter to `el`, for Greek, then the `city` in the results will more likely be returned as `Αθήνα`.
   *
   * If the data provider does not have a value for Greek, the result will be in a language that the provider does support.
   *
   * @public
   */
  Language?: string | undefined;

  /**
   * The optional [API key](https://docs.aws.amazon.com/location/previous/developerguide/using-apikeys.html) to authorize the request.
   *
   * @public
   */
  Key?: string | undefined;
}

/**
 * Places uses a point geometry to specify a location or a Place.
 *
 * @public
 */
export interface PlaceGeometry {
  /**
   * A single point geometry specifies a location for a Place using [WGS 84](https://gisgeography.com/wgs84-world-geodetic-system/) coordinates:
   *
   * - *x* — Specifies the x coordinate or longitude.
   * - *y* — Specifies the y coordinate or latitude.
   *
   * @public
   */
  Point?: number[] | undefined;
}

/**
 * Information about a time zone. Includes the name of the time zone and the offset from UTC in seconds.
 *
 * @public
 */
export interface TimeZone {
  /**
   * The name of the time zone, following the [IANA time zone standard](https://www.iana.org/time-zones). For example, `America/Los_Angeles`.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The time zone's offset, in seconds, from UTC.
   *
   * @public
   */
  Offset?: number | undefined;
}

/**
 * Contains details about addresses or points of interest that match the search criteria.
 *
 * Not all details are included with all responses. Some details may only be returned by specific data partners.
 *
 * @public
 */
export interface Place {
  /**
   * The full name and address of the point of interest such as a city, region, or country. For example, `123 Any Street, Any Town, USA`.
   *
   * @public
   */
  Label?: string | undefined;

  /**
   * Places uses a point geometry to specify a location or a Place.
   *
   * @public
   */
  Geometry: PlaceGeometry | undefined;

  /**
   * The numerical portion of an address, such as a building number.
   *
   * @public
   */
  AddressNumber?: string | undefined;

  /**
   * The name for a street or a road to identify a location. For example, `Main Street`.
   *
   * @public
   */
  Street?: string | undefined;

  /**
   * The name of a community district. For example, `Downtown`.
   *
   * @public
   */
  Neighborhood?: string | undefined;

  /**
   * A name for a local area, such as a city or town name. For example, `Toronto`.
   *
   * @public
   */
  Municipality?: string | undefined;

  /**
   * A county, or an area that's part of a larger region. For example, `Metro Vancouver`.
   *
   * @public
   */
  SubRegion?: string | undefined;

  /**
   * A name for an area or geographical division, such as a province or state name. For example, `British Columbia`.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * A country/region specified using [ISO 3166](https://www.iso.org/iso-3166-country-codes.html) 3-digit country/region code. For example, `CAN`.
   *
   * @public
   */
  Country?: string | undefined;

  /**
   * A group of numbers and letters in a country-specific format, which accompanies the address for the purpose of identifying a location.
   *
   * @public
   */
  PostalCode?: string | undefined;

  /**
   * `True` if the result is interpolated from other known places.
   *
   * `False` if the Place is a known place.
   *
   * Not returned when the partner does not provide the information.
   *
   * For example, returns `False` for an address location that is found in the partner data, but returns `True` if an address does not exist in the partner data and its location is calculated by interpolating between other known addresses.
   *
   * @public
   */
  Interpolated?: boolean | undefined;

  /**
   * The time zone in which the `Place` is located. Returned only when using HERE or Grab as the selected partner.
   *
   * @public
   */
  TimeZone?: TimeZone | undefined;

  /**
   * For addresses with a `UnitNumber`, the type of unit. For example, `Apartment`.
   *
   * > **Note:** Returned only for a place index that uses Esri as a data provider.
   *
   * @public
   */
  UnitType?: string | undefined;

  /**
   * For addresses with multiple units, the unit identifier. Can include numbers and letters, for example `3B` or `Unit 123`.
   *
   * > **Note:** Returned only for a place index that uses Esri or Grab as a data provider. Is not returned for `SearchPlaceIndexForPosition`.
   *
   * @public
   */
  UnitNumber?: string | undefined;

  /**
   * The Amazon Location categories that describe this Place.
   *
   * For more information about using categories, including a list of Amazon Location categories, see [Categories and filtering](https://docs.aws.amazon.com/location/previous/developerguide/category-filtering.html), in the *Amazon Location Service developer guide*.
   *
   * @public
   */
  Categories?: string[] | undefined;

  /**
   * Categories from the data provider that describe the Place that are not mapped to any Amazon Location categories.
   *
   * @public
   */
  SupplementalCategories?: string[] | undefined;

  /**
   * An area that's part of a larger municipality. For example, `Blissville` is a submunicipality in the Queen County in New York.
   *
   * > **Note:** This property supported by Esri and OpenData. The Esri property is `district`, and the OpenData property is `borough`.
   *
   * @public
   */
  SubMunicipality?: string | undefined;
}

/**
 * @public
 */
export interface GetPlaceResponse {
  /**
   * Details about the result, such as its address and position.
   *
   * @public
   */
  Place: Place | undefined;
}

/**
 * The inferred state of the device, given the provided position, IP address, cellular signals, and Wi-Fi- access points.
 *
 * @public
 */
export interface InferredState {
  /**
   * The device position inferred by the provided position, IP address, cellular signals, and Wi-Fi- access points.
   *
   * @public
   */
  Position?: number[] | undefined;

  /**
   * The level of certainty of the inferred position.
   *
   * @public
   */
  Accuracy?: PositionalAccuracy | undefined;

  /**
   * The distance between the inferred position and the device's self-reported position.
   *
   * @public
   */
  DeviationDistance?: number | undefined;

  /**
   * Indicates if a proxy was used.
   *
   * @public
   */
  ProxyDetected: boolean | undefined;
}

/**
 * Criteria for filtering jobs.
 *
 * @public
 */
export interface JobsFilter {
  /**
   * Filter by job status.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;
}

/**
 * @public
 */
export interface ListJobsRequest {
  /**
   * An optional structure containing criteria by which to filter job results.
   *
   * @public
   */
  Filter?: JobsFilter | undefined;

  /**
   * Maximum number of jobs to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Job summary information returned in list operations.
 *
 * @public
 */
export interface ListJobsResponseEntry {
  /**
   * Action performed by the job.
   *
   * @public
   */
  Action: JobAction | undefined;

  /**
   * Additional options for configuring job action parameters.
   *
   * @public
   */
  ActionOptions?: JobActionOptions | undefined;

  /**
   * Job creation time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sss`.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * IAM role used for job execution.
   *
   * @public
   */
  ExecutionRoleArn: string | undefined;

  /**
   * Job completion time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sss`. Only returned for jobs in a terminal status: `Completed` | `Failed` | `Cancelled`.
   *
   * @public
   */
  EndedAt?: Date | undefined;

  /**
   * Error information if the job failed.
   *
   * @public
   */
  Error?: JobError | undefined;

  /**
   * Input configuration.
   *
   * @public
   */
  InputOptions: JobInputOptions | undefined;

  /**
   * Unique job identifier.
   *
   * @public
   */
  JobId: string | undefined;

  /**
   * Amazon Resource Name (ARN) of the job.
   *
   * @public
   */
  JobArn: string | undefined;

  /**
   * Job name (if provided during creation).
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Output configuration.
   *
   * @public
   */
  OutputOptions: JobOutputOptions | undefined;

  /**
   * Current job status.
   *
   * @public
   */
  Status: JobStatus | undefined;

  /**
   * Last update time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sss`.
   *
   * @public
   */
  UpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListJobsResponse {
  /**
   * List of jobs in your Amazon Web Services account.
   *
   * @public
   */
  Entries: ListJobsResponseEntry[] | undefined;

  /**
   * Token for retrieving the next page (present if more results available).
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartJobRequest {
  /**
   * A unique identifier for this request to ensure idempotency.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The action to perform on the input data.
   *
   * @public
   */
  Action: JobAction | undefined;

  /**
   * Additional parameters that can be requested for each result.
   *
   * @public
   */
  ActionOptions?: JobActionOptions | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that Amazon Location Service assumes during job processing. Amazon Location Service uses this role to access the input and output locations specified for the job.
   *
   * > **Note:** The IAM role must be created in the same Amazon Web Services account where you plan to run your job.
   *
   * For more information about configuring IAM roles for Amazon Location jobs, see [Configure IAM permissions](https://docs.aws.amazon.com/location/latest/developerguide/configure-iam-role-policy-credentials.html) in the *Amazon Location Service Developer Guide*.
   *
   * @public
   */
  ExecutionRoleArn: string | undefined;

  /**
   * Configuration for input data location and format.
   *
   * > **Note:** Input files have a limitation of 10gb per file, and 1gb per Parquet row-group within the file.
   *
   * @public
   */
  InputOptions: JobInputOptions | undefined;

  /**
   * An optional name for the job resource.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Configuration for output data location and format.
   *
   * @public
   */
  OutputOptions: JobOutputOptions | undefined;

  /**
   * Tags and corresponding values to be associated with the job.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartJobResponse {
  /**
   * Job creation time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sss`.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) for the job resource. Used when you need to specify a resource across all Amazon Web Services.
   *
   * Format example: `arn:aws:geo:region:account-id:job/ExampleJob`
   *
   * @public
   */
  JobArn: string | undefined;

  /**
   * Unique job identifier.
   *
   * @public
   */
  JobId: string | undefined;

  /**
   * Initial job status (always "Pending" for new jobs).
   *
   * @public
   */
  Status: JobStatus | undefined;
}

/**
 * The geomerty used to filter device positions.
 *
 * @public
 */
export interface TrackingFilterGeometry {
  /**
   * The set of arrays which define the polygon. A polygon can have between 4 and 1000 vertices.
   *
   * @public
   */
  Polygon?: number[][][] | undefined;
}

/**
 * @public
 */
export interface ListDevicePositionsRequest {
  /**
   * The tracker resource containing the requested devices.
   *
   * @public
   */
  TrackerName: string | undefined;

  /**
   * An optional limit for the number of entries returned in a single call.
   *
   * Default value: `100`
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.
   *
   * Default value: `null`
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The geometry used to filter device positions.
   *
   * @public
   */
  FilterGeometry?: TrackingFilterGeometry | undefined;
}

/**
 * Contains the tracker resource details.
 *
 * @public
 */
export interface ListDevicePositionsResponseEntry {
  /**
   * The ID of the device for this position.
   *
   * @public
   */
  DeviceId: string | undefined;

  /**
   * The timestamp at which the device position was determined. Uses [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`.
   *
   * @public
   */
  SampleTime: Date | undefined;

  /**
   * The last known device position. Empty if no positions currently stored.
   *
   * @public
   */
  Position: number[] | undefined;

  /**
   * The accuracy of the device position.
   *
   * @public
   */
  Accuracy?: PositionalAccuracy | undefined;

  /**
   * The properties associated with the position.
   *
   * @public
   */
  PositionProperties?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListDevicePositionsResponse {
  /**
   * Contains details about each device's last known position.
   *
   * @public
   */
  Entries: ListDevicePositionsResponseEntry[] | undefined;

  /**
   * A pagination token indicating there are additional pages available. You can use the token in a following request to fetch the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMapsRequest {
  /**
   * An optional limit for the number of resources returned in a single call.
   *
   * Default value: `100`
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.
   *
   * Default value: `null`
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains details of an existing map resource in your Amazon Web Services account.
 *
 * @public
 */
export interface ListMapsResponseEntry {
  /**
   * The name of the associated map resource.
   *
   * @public
   */
  MapName: string | undefined;

  /**
   * The description for the map resource.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * Specifies the data provider for the associated map tiles.
   *
   * @public
   */
  DataSource: string | undefined;

  /**
   * No longer used. Always returns `RequestBasedUsage`.
   *
   * @deprecated (since 2022-02-01) Deprecated. Always returns RequestBasedUsage.
   * @public
   */
  PricingPlan?: PricingPlan | undefined;

  /**
   * The timestamp for when the map resource was created in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`.
   *
   * @public
   */
  CreateTime: Date | undefined;

  /**
   * The timestamp for when the map resource was last updated in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`.
   *
   * @public
   */
  UpdateTime: Date | undefined;
}

/**
 * @public
 */
export interface ListMapsResponse {
  /**
   * Contains a list of maps in your Amazon Web Services account
   *
   * @public
   */
  Entries: ListMapsResponseEntry[] | undefined;

  /**
   * A pagination token indicating there are additional pages available. You can use the token in a following request to fetch the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPlaceIndexesRequest {
  /**
   * An optional limit for the maximum number of results returned in a single call.
   *
   * Default value: `100`
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.
   *
   * Default value: `null`
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A place index resource listed in your Amazon Web Services account.
 *
 * @public
 */
export interface ListPlaceIndexesResponseEntry {
  /**
   * The name of the place index resource.
   *
   * @public
   */
  IndexName: string | undefined;

  /**
   * The optional description for the place index resource.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * The data provider of geospatial data. Values can be one of the following:
   *
   * - `Esri`
   * - `Grab`
   * - `Here`
   *
   * For more information about data providers, see [Amazon Location Service data providers](https://docs.aws.amazon.com/location/previous/developerguide/what-is-data-provider.html).
   *
   * @public
   */
  DataSource: string | undefined;

  /**
   * No longer used. Always returns `RequestBasedUsage`.
   *
   * @deprecated (since 2022-02-01) Deprecated. Always returns RequestBasedUsage.
   * @public
   */
  PricingPlan?: PricingPlan | undefined;

  /**
   * The timestamp for when the place index resource was created in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`.
   *
   * @public
   */
  CreateTime: Date | undefined;

  /**
   * The timestamp for when the place index resource was last updated in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`.
   *
   * @public
   */
  UpdateTime: Date | undefined;
}

/**
 * @public
 */
export interface ListPlaceIndexesResponse {
  /**
   * Lists the place index resources that exist in your Amazon Web Services account
   *
   * @public
   */
  Entries: ListPlaceIndexesResponseEntry[] | undefined;

  /**
   * A pagination token indicating that there are additional pages available. You can use the token in a new request to fetch the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRouteCalculatorsRequest {
  /**
   * An optional maximum number of results returned in a single call.
   *
   * Default Value: `100`
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.
   *
   * Default Value: `null`
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A route calculator resource listed in your Amazon Web Services account.
 *
 * @public
 */
export interface ListRouteCalculatorsResponseEntry {
  /**
   * The name of the route calculator resource.
   *
   * @public
   */
  CalculatorName: string | undefined;

  /**
   * The optional description of the route calculator resource.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * The data provider of traffic and road network data. Indicates one of the available providers:
   *
   * - `Esri`
   * - `Grab`
   * - `Here`
   *
   * For more information about data providers, see [Amazon Location Service data providers](https://docs.aws.amazon.com/location/previous/developerguide/what-is-data-provider.html).
   *
   * @public
   */
  DataSource: string | undefined;

  /**
   * Always returns `RequestBasedUsage`.
   *
   * @deprecated (since 2022-02-01) Deprecated. Always returns RequestBasedUsage.
   * @public
   */
  PricingPlan?: PricingPlan | undefined;

  /**
   * The timestamp when the route calculator resource was created in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`.
   *
   * - For example, `2020–07-2T12:15:20.000Z+01:00`
   *
   * @public
   */
  CreateTime: Date | undefined;

  /**
   * The timestamp when the route calculator resource was last updated in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`.
   *
   * - For example, `2020–07-2T12:15:20.000Z+01:00`
   *
   * @public
   */
  UpdateTime: Date | undefined;
}

/**
 * @public
 */
export interface ListRouteCalculatorsResponse {
  /**
   * Lists the route calculator resources that exist in your Amazon Web Services account
   *
   * @public
   */
  Entries: ListRouteCalculatorsResponseEntry[] | undefined;

  /**
   * A pagination token indicating there are additional pages available. You can use the token in a subsequent request to fetch the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTrackerConsumersRequest {
  /**
   * The tracker resource whose associated geofence collections you want to list.
   *
   * @public
   */
  TrackerName: string | undefined;

  /**
   * An optional limit for the number of resources returned in a single call.
   *
   * Default value: `100`
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.
   *
   * Default value: `null`
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTrackerConsumersResponse {
  /**
   * Contains the list of geofence collection ARNs associated to the tracker resource.
   *
   * @public
   */
  ConsumerArns: string[] | undefined;

  /**
   * A pagination token indicating there are additional pages available. You can use the token in a following request to fetch the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTrackersRequest {
  /**
   * An optional limit for the number of resources returned in a single call.
   *
   * Default value: `100`
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.
   *
   * Default value: `null`
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains the tracker resource details.
 *
 * @public
 */
export interface ListTrackersResponseEntry {
  /**
   * The name of the tracker resource.
   *
   * @public
   */
  TrackerName: string | undefined;

  /**
   * The description for the tracker resource.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * Always returns `RequestBasedUsage`.
   *
   * @deprecated (since 2022-02-01) Deprecated. Always returns RequestBasedUsage.
   * @public
   */
  PricingPlan?: PricingPlan | undefined;

  /**
   * No longer used. Always returns an empty string.
   *
   * @deprecated (since 2022-02-01) Deprecated. Unused.
   * @public
   */
  PricingPlanDataSource?: string | undefined;

  /**
   * The timestamp for when the tracker resource was created in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`.
   *
   * @public
   */
  CreateTime: Date | undefined;

  /**
   * The timestamp at which the device's position was determined. Uses [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`.
   *
   * @public
   */
  UpdateTime: Date | undefined;
}

/**
 * @public
 */
export interface ListTrackersResponse {
  /**
   * Contains tracker resources in your Amazon Web Services account. Details include tracker name, description and timestamps for when the tracker was created and last updated.
   *
   * @public
   */
  Entries: ListTrackersResponseEntry[] | undefined;

  /**
   * A pagination token indicating there are additional pages available. You can use the token in a following request to fetch the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Specifies the political view for the style.
 *
 * @public
 */
export interface MapConfigurationUpdate {
  /**
   * Specifies the political view for the style. Set to an empty string to not use a political view, or, for styles that support specific political views, you can choose a view, such as `IND` for the Indian view.
   *
   * > **Note:** Not all map resources or styles support political view styles. See [Political views](https://docs.aws.amazon.com/location/previous/developerguide/map-concepts.html#political-views) for more information.
   *
   * @public
   */
  PoliticalView?: string | undefined;

  /**
   * Specifies the custom layers for the style. Leave unset to not enable any custom layer, or, for styles that support custom layers, you can enable layer(s), such as POI layer for the VectorEsriNavigation style. Default is `unset`.
   *
   * > **Note:** Not all map resources or styles support custom layers. See Custom Layers for more information.
   *
   * @public
   */
  CustomLayers?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateMapRequest {
  /**
   * The name of the map resource to update.
   *
   * @public
   */
  MapName: string | undefined;

  /**
   * No longer used. If included, the only allowed value is `RequestBasedUsage`.
   *
   * @deprecated (since 2022-02-01) Deprecated. If included, the only allowed value is RequestBasedUsage.
   * @public
   */
  PricingPlan?: PricingPlan | undefined;

  /**
   * Updates the description for the map resource.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Updates the parts of the map configuration that can be updated, including the political view.
   *
   * @public
   */
  ConfigurationUpdate?: MapConfigurationUpdate | undefined;
}

/**
 * @public
 */
export interface UpdateMapResponse {
  /**
   * The name of the updated map resource.
   *
   * @public
   */
  MapName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the updated map resource. Used to specify a resource across AWS.
   *
   * - Format example: `arn:aws:geo:region:account-id:map/ExampleMap`
   *
   * @public
   */
  MapArn: string | undefined;

  /**
   * The timestamp for when the map resource was last updated in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`.
   *
   * @public
   */
  UpdateTime: Date | undefined;
}

/**
 * @public
 */
export interface SearchPlaceIndexForPositionRequest {
  /**
   * The name of the place index resource you want to use for the search.
   *
   * @public
   */
  IndexName: string | undefined;

  /**
   * Specifies the longitude and latitude of the position to query.
   *
   * This parameter must contain a pair of numbers. The first number represents the X coordinate, or longitude; the second number represents the Y coordinate, or latitude.
   *
   * For example, `[-123.1174, 49.2847]` represents a position with longitude `-123.1174` and latitude `49.2847`.
   *
   * @public
   */
  Position: number[] | undefined;

  /**
   * An optional parameter. The maximum number of results returned per request.
   *
   * Default value: `50`
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The preferred language used to return results. The value must be a valid [BCP 47](https://tools.ietf.org/search/bcp47) language tag, for example, `en` for English.
   *
   * This setting affects the languages used in the results, but not the results themselves. If no language is specified, or not supported for a particular result, the partner automatically chooses a language for the result.
   *
   * For an example, we'll use the Greek language. You search for a location around Athens, Greece, with the `language` parameter set to `en`. The `city` in the results will most likely be returned as `Athens`.
   *
   * If you set the `language` parameter to `el`, for Greek, then the `city` in the results will more likely be returned as `Αθήνα`.
   *
   * If the data provider does not have a value for Greek, the result will be in a language that the provider does support.
   *
   * @public
   */
  Language?: string | undefined;

  /**
   * The optional [API key](https://docs.aws.amazon.com/location/previous/developerguide/using-apikeys.html) to authorize the request.
   *
   * @public
   */
  Key?: string | undefined;
}

/**
 * Contains a search result from a position search query that is run on a place index resource.
 *
 * @public
 */
export interface SearchForPositionResult {
  /**
   * Details about the search result, such as its address and position.
   *
   * @public
   */
  Place: Place | undefined;

  /**
   * The distance in meters of a great-circle arc between the query position and the result.
   *
   * > **Note:** A great-circle arc is the shortest path on a sphere, in this case the Earth. This returns the shortest distance between two locations.
   *
   * @public
   */
  Distance: number | undefined;

  /**
   * The unique identifier of the place. You can use this with the `GetPlace` operation to find the place again later.
   *
   * > **Note:** For `SearchPlaceIndexForPosition` operations, the `PlaceId` is returned only by place indexes that use HERE or Grab as a data provider.
   *
   * @public
   */
  PlaceId?: string | undefined;
}

/**
 * A summary of the request sent by using `SearchPlaceIndexForPosition`.
 *
 * @public
 */
export interface SearchPlaceIndexForPositionSummary {
  /**
   * The position specified in the request.
   *
   * @public
   */
  Position: number[] | undefined;

  /**
   * Contains the optional result count limit that is specified in the request.
   *
   * Default value: `50`
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The geospatial data provider attached to the place index resource specified in the request. Values can be one of the following:
   *
   * - Esri
   * - Grab
   * - Here
   *
   * For more information about data providers, see [Amazon Location Service data providers](https://docs.aws.amazon.com/location/previous/developerguide/what-is-data-provider.html).
   *
   * @public
   */
  DataSource: string | undefined;

  /**
   * The preferred language used to return results. Matches the language in the request. The value is a valid [BCP 47](https://tools.ietf.org/search/bcp47) language tag, for example, `en` for English.
   *
   * @public
   */
  Language?: string | undefined;
}

/**
 * @public
 */
export interface SearchPlaceIndexForPositionResponse {
  /**
   * Contains a summary of the request. Echoes the input values for `Position`, `Language`, `MaxResults`, and the `DataSource` of the place index.
   *
   * @public
   */
  Summary: SearchPlaceIndexForPositionSummary | undefined;

  /**
   * Returns a list of Places closest to the specified position. Each result contains additional information about the Places returned.
   *
   * @public
   */
  Results: SearchForPositionResult[] | undefined;
}

/**
 * @public
 */
export interface SearchPlaceIndexForSuggestionsRequest {
  /**
   * The name of the place index resource you want to use for the search.
   *
   * @public
   */
  IndexName: string | undefined;

  /**
   * The free-form partial text to use to generate place suggestions. For example, `eiffel tow`.
   *
   * @public
   */
  Text: string | undefined;

  /**
   * An optional parameter that indicates a preference for place suggestions that are closer to a specified position.
   *
   * If provided, this parameter must contain a pair of numbers. The first number represents the X coordinate, or longitude; the second number represents the Y coordinate, or latitude.
   *
   * For example, `[-123.1174, 49.2847]` represents the position with longitude `-123.1174` and latitude `49.2847`.
   *
   * > **Note:** `BiasPosition` and `FilterBBox` are mutually exclusive. Specifying both options results in an error.
   *
   * @public
   */
  BiasPosition?: number[] | undefined;

  /**
   * An optional parameter that limits the search results by returning only suggestions within a specified bounding box.
   *
   * If provided, this parameter must contain a total of four consecutive numbers in two pairs. The first pair of numbers represents the X and Y coordinates (longitude and latitude, respectively) of the southwest corner of the bounding box; the second pair of numbers represents the X and Y coordinates (longitude and latitude, respectively) of the northeast corner of the bounding box.
   *
   * For example, `[-12.7935, -37.4835, -12.0684, -36.9542]` represents a bounding box where the southwest corner has longitude `-12.7935` and latitude `-37.4835`, and the northeast corner has longitude `-12.0684` and latitude `-36.9542`.
   *
   * > **Note:** `FilterBBox` and `BiasPosition` are mutually exclusive. Specifying both options results in an error.
   *
   * @public
   */
  FilterBBox?: number[] | undefined;

  /**
   * An optional parameter that limits the search results by returning only suggestions within the provided list of countries.
   *
   * - Use the [ISO 3166](https://www.iso.org/iso-3166-country-codes.html) 3-digit country code. For example, Australia uses three upper-case characters: `AUS`.
   *
   * @public
   */
  FilterCountries?: string[] | undefined;

  /**
   * An optional parameter. The maximum number of results returned per request.
   *
   * The default: `5`
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The preferred language used to return results. The value must be a valid [BCP 47](https://tools.ietf.org/search/bcp47) language tag, for example, `en` for English.
   *
   * This setting affects the languages used in the results. If no language is specified, or not supported for a particular result, the partner automatically chooses a language for the result.
   *
   * For an example, we'll use the Greek language. You search for `Athens, Gr` to get suggestions with the `language` parameter set to `en`. The results found will most likely be returned as `Athens, Greece`.
   *
   * If you set the `language` parameter to `el`, for Greek, then the result found will more likely be returned as `Αθήνα, Ελλάδα`.
   *
   * If the data provider does not have a value for Greek, the result will be in a language that the provider does support.
   *
   * @public
   */
  Language?: string | undefined;

  /**
   * A list of one or more Amazon Location categories to filter the returned places. If you include more than one category, the results will include results that match *any* of the categories listed.
   *
   * For more information about using categories, including a list of Amazon Location categories, see [Categories and filtering](https://docs.aws.amazon.com/location/previous/developerguide/category-filtering.html), in the *Amazon Location Service developer guide*.
   *
   * @public
   */
  FilterCategories?: string[] | undefined;

  /**
   * The optional [API key](https://docs.aws.amazon.com/location/previous/developerguide/using-apikeys.html) to authorize the request.
   *
   * @public
   */
  Key?: string | undefined;
}

/**
 * Contains a place suggestion resulting from a place suggestion query that is run on a place index resource.
 *
 * @public
 */
export interface SearchForSuggestionsResult {
  /**
   * The text of the place suggestion, typically formatted as an address string.
   *
   * @public
   */
  Text: string | undefined;

  /**
   * The unique identifier of the Place. You can use this with the `GetPlace` operation to find the place again later, or to get full information for the Place.
   *
   * The `GetPlace` request must use the same `PlaceIndex` resource as the `SearchPlaceIndexForSuggestions` that generated the Place ID.
   *
   * > **Note:** For `SearchPlaceIndexForSuggestions` operations, the `PlaceId` is returned by place indexes that use Esri, Grab, or HERE as data providers.
   *
   * @public
   */
  PlaceId?: string | undefined;

  /**
   * The Amazon Location categories that describe the Place.
   *
   * For more information about using categories, including a list of Amazon Location categories, see [Categories and filtering](https://docs.aws.amazon.com/location/previous/developerguide/category-filtering.html), in the *Amazon Location Service developer guide*.
   *
   * @public
   */
  Categories?: string[] | undefined;

  /**
   * Categories from the data provider that describe the Place that are not mapped to any Amazon Location categories.
   *
   * @public
   */
  SupplementalCategories?: string[] | undefined;
}

/**
 * A summary of the request sent by using `SearchPlaceIndexForSuggestions`.
 *
 * @public
 */
export interface SearchPlaceIndexForSuggestionsSummary {
  /**
   * The free-form partial text input specified in the request.
   *
   * @public
   */
  Text: string | undefined;

  /**
   * Contains the coordinates for the optional bias position specified in the request.
   *
   * This parameter contains a pair of numbers. The first number represents the X coordinate, or longitude; the second number represents the Y coordinate, or latitude.
   *
   * For example, `[-123.1174, 49.2847]` represents the position with longitude `-123.1174` and latitude `49.2847`.
   *
   * @public
   */
  BiasPosition?: number[] | undefined;

  /**
   * Contains the coordinates for the optional bounding box specified in the request.
   *
   * @public
   */
  FilterBBox?: number[] | undefined;

  /**
   * Contains the optional country filter specified in the request.
   *
   * @public
   */
  FilterCountries?: string[] | undefined;

  /**
   * Contains the optional result count limit specified in the request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The geospatial data provider attached to the place index resource specified in the request. Values can be one of the following:
   *
   * - Esri
   * - Grab
   * - Here
   *
   * For more information about data providers, see [Amazon Location Service data providers](https://docs.aws.amazon.com/location/previous/developerguide/what-is-data-provider.html).
   *
   * @public
   */
  DataSource: string | undefined;

  /**
   * The preferred language used to return results. Matches the language in the request. The value is a valid [BCP 47](https://tools.ietf.org/search/bcp47) language tag, for example, `en` for English.
   *
   * @public
   */
  Language?: string | undefined;

  /**
   * The optional category filter specified in the request.
   *
   * @public
   */
  FilterCategories?: string[] | undefined;
}

/**
 * @public
 */
export interface SearchPlaceIndexForSuggestionsResponse {
  /**
   * Contains a summary of the request. Echoes the input values for `BiasPosition`, `FilterBBox`, `FilterCountries`, `Language`, `MaxResults`, and `Text`. Also includes the `DataSource` of the place index.
   *
   * @public
   */
  Summary: SearchPlaceIndexForSuggestionsSummary | undefined;

  /**
   * A list of place suggestions that best match the search text.
   *
   * @public
   */
  Results: SearchForSuggestionsResult[] | undefined;
}

/**
 * @public
 */
export interface SearchPlaceIndexForTextRequest {
  /**
   * The name of the place index resource you want to use for the search.
   *
   * @public
   */
  IndexName: string | undefined;

  /**
   * The address, name, city, or region to be used in the search in free-form text format. For example, `123 Any Street`.
   *
   * @public
   */
  Text: string | undefined;

  /**
   * An optional parameter that indicates a preference for places that are closer to a specified position.
   *
   * If provided, this parameter must contain a pair of numbers. The first number represents the X coordinate, or longitude; the second number represents the Y coordinate, or latitude.
   *
   * For example, `[-123.1174, 49.2847]` represents the position with longitude `-123.1174` and latitude `49.2847`.
   *
   * > **Note:** `BiasPosition` and `FilterBBox` are mutually exclusive. Specifying both options results in an error.
   *
   * @public
   */
  BiasPosition?: number[] | undefined;

  /**
   * An optional parameter that limits the search results by returning only places that are within the provided bounding box.
   *
   * If provided, this parameter must contain a total of four consecutive numbers in two pairs. The first pair of numbers represents the X and Y coordinates (longitude and latitude, respectively) of the southwest corner of the bounding box; the second pair of numbers represents the X and Y coordinates (longitude and latitude, respectively) of the northeast corner of the bounding box.
   *
   * For example, `[-12.7935, -37.4835, -12.0684, -36.9542]` represents a bounding box where the southwest corner has longitude `-12.7935` and latitude `-37.4835`, and the northeast corner has longitude `-12.0684` and latitude `-36.9542`.
   *
   * > **Note:** `FilterBBox` and `BiasPosition` are mutually exclusive. Specifying both options results in an error.
   *
   * @public
   */
  FilterBBox?: number[] | undefined;

  /**
   * An optional parameter that limits the search results by returning only places that are in a specified list of countries.
   *
   * - Valid values include [ISO 3166](https://www.iso.org/iso-3166-country-codes.html) 3-digit country codes. For example, Australia uses three upper-case characters: `AUS`.
   *
   * @public
   */
  FilterCountries?: string[] | undefined;

  /**
   * An optional parameter. The maximum number of results returned per request.
   *
   * The default: `50`
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The preferred language used to return results. The value must be a valid [BCP 47](https://tools.ietf.org/search/bcp47) language tag, for example, `en` for English.
   *
   * This setting affects the languages used in the results, but not the results themselves. If no language is specified, or not supported for a particular result, the partner automatically chooses a language for the result.
   *
   * For an example, we'll use the Greek language. You search for `Athens, Greece`, with the `language` parameter set to `en`. The result found will most likely be returned as `Athens`.
   *
   * If you set the `language` parameter to `el`, for Greek, then the result found will more likely be returned as `Αθήνα`.
   *
   * If the data provider does not have a value for Greek, the result will be in a language that the provider does support.
   *
   * @public
   */
  Language?: string | undefined;

  /**
   * A list of one or more Amazon Location categories to filter the returned places. If you include more than one category, the results will include results that match *any* of the categories listed.
   *
   * For more information about using categories, including a list of Amazon Location categories, see [Categories and filtering](https://docs.aws.amazon.com/location/previous/developerguide/category-filtering.html), in the *Amazon Location Service developer guide*.
   *
   * @public
   */
  FilterCategories?: string[] | undefined;

  /**
   * The optional [API key](https://docs.aws.amazon.com/location/previous/developerguide/using-apikeys.html) to authorize the request.
   *
   * @public
   */
  Key?: string | undefined;
}

/**
 * Contains a search result from a text search query that is run on a place index resource.
 *
 * @public
 */
export interface SearchForTextResult {
  /**
   * Details about the search result, such as its address and position.
   *
   * @public
   */
  Place: Place | undefined;

  /**
   * The distance in meters of a great-circle arc between the bias position specified and the result. `Distance` will be returned only if a bias position was specified in the query.
   *
   * > **Note:** A great-circle arc is the shortest path on a sphere, in this case the Earth. This returns the shortest distance between two locations.
   *
   * @public
   */
  Distance?: number | undefined;

  /**
   * The relative confidence in the match for a result among the results returned. For example, if more fields for an address match (including house number, street, city, country/region, and postal code), the relevance score is closer to 1.
   *
   * Returned only when the partner selected is Esri or Grab.
   *
   * @public
   */
  Relevance?: number | undefined;

  /**
   * The unique identifier of the place. You can use this with the `GetPlace` operation to find the place again later.
   *
   * > **Note:** For `SearchPlaceIndexForText` operations, the `PlaceId` is returned only by place indexes that use HERE or Grab as a data provider.
   *
   * @public
   */
  PlaceId?: string | undefined;
}

/**
 * A summary of the request sent by using `SearchPlaceIndexForText`.
 *
 * @public
 */
export interface SearchPlaceIndexForTextSummary {
  /**
   * The search text specified in the request.
   *
   * @public
   */
  Text: string | undefined;

  /**
   * Contains the coordinates for the optional bias position specified in the request.
   *
   * This parameter contains a pair of numbers. The first number represents the X coordinate, or longitude; the second number represents the Y coordinate, or latitude.
   *
   * For example, `[-123.1174, 49.2847]` represents the position with longitude `-123.1174` and latitude `49.2847`.
   *
   * @public
   */
  BiasPosition?: number[] | undefined;

  /**
   * Contains the coordinates for the optional bounding box specified in the request.
   *
   * @public
   */
  FilterBBox?: number[] | undefined;

  /**
   * Contains the optional country filter specified in the request.
   *
   * @public
   */
  FilterCountries?: string[] | undefined;

  /**
   * Contains the optional result count limit specified in the request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The bounding box that fully contains all search results.
   *
   * > **Note:** If you specified the optional `FilterBBox` parameter in the request, `ResultBBox` is contained within `FilterBBox`.
   *
   * @public
   */
  ResultBBox?: number[] | undefined;

  /**
   * The geospatial data provider attached to the place index resource specified in the request. Values can be one of the following:
   *
   * - Esri
   * - Grab
   * - Here
   *
   * For more information about data providers, see [Amazon Location Service data providers](https://docs.aws.amazon.com/location/previous/developerguide/what-is-data-provider.html).
   *
   * @public
   */
  DataSource: string | undefined;

  /**
   * The preferred language used to return results. Matches the language in the request. The value is a valid [BCP 47](https://tools.ietf.org/search/bcp47) language tag, for example, `en` for English.
   *
   * @public
   */
  Language?: string | undefined;

  /**
   * The optional category filter specified in the request.
   *
   * @public
   */
  FilterCategories?: string[] | undefined;
}

/**
 * @public
 */
export interface SearchPlaceIndexForTextResponse {
  /**
   * Contains a summary of the request. Echoes the input values for `BiasPosition`, `FilterBBox`, `FilterCountries`, `Language`, `MaxResults`, and `Text`. Also includes the `DataSource` of the place index and the bounding box, `ResultBBox`, which surrounds the search results.
   *
   * @public
   */
  Summary: SearchPlaceIndexForTextSummary | undefined;

  /**
   * A list of Places matching the input text. Each result contains additional information about the specific point of interest.
   *
   * Not all response properties are included with all responses. Some properties may only be returned by specific data partners.
   *
   * @public
   */
  Results: SearchForTextResult[] | undefined;
}

/**
 * @public
 */
export interface UpdatePlaceIndexRequest {
  /**
   * The name of the place index resource to update.
   *
   * @public
   */
  IndexName: string | undefined;

  /**
   * No longer used. If included, the only allowed value is `RequestBasedUsage`.
   *
   * @deprecated (since 2022-02-01) Deprecated. If included, the only allowed value is RequestBasedUsage.
   * @public
   */
  PricingPlan?: PricingPlan | undefined;

  /**
   * Updates the description for the place index resource.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Updates the data storage option for the place index resource.
   *
   * @public
   */
  DataSourceConfiguration?: DataSourceConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdatePlaceIndexResponse {
  /**
   * The name of the updated place index resource.
   *
   * @public
   */
  IndexName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the upated place index resource. Used to specify a resource across Amazon Web Services.
   *
   * - Format example: `arn:aws:geo:region:account-id:place- index/ExamplePlaceIndex`
   *
   * @public
   */
  IndexArn: string | undefined;

  /**
   * The timestamp for when the place index resource was last updated in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`.
   *
   * @public
   */
  UpdateTime: Date | undefined;
}

/**
 * @public
 */
export interface UpdateRouteCalculatorRequest {
  /**
   * The name of the route calculator resource to update.
   *
   * @public
   */
  CalculatorName: string | undefined;

  /**
   * No longer used. If included, the only allowed value is `RequestBasedUsage`.
   *
   * @deprecated (since 2022-02-01) Deprecated. If included, the only allowed value is RequestBasedUsage.
   * @public
   */
  PricingPlan?: PricingPlan | undefined;

  /**
   * Updates the description for the route calculator resource.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRouteCalculatorResponse {
  /**
   * The name of the updated route calculator resource.
   *
   * @public
   */
  CalculatorName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the updated route calculator resource. Used to specify a resource across AWS.
   *
   * - Format example: `arn:aws:geo:region:account-id:route- calculator/ExampleCalculator`
   *
   * @public
   */
  CalculatorArn: string | undefined;

  /**
   * The timestamp for when the route calculator was last updated in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`.
   *
   * @public
   */
  UpdateTime: Date | undefined;
}

/**
 * @public
 */
export interface UpdateTrackerRequest {
  /**
   * The name of the tracker resource to update.
   *
   * @public
   */
  TrackerName: string | undefined;

  /**
   * No longer used. If included, the only allowed value is `RequestBasedUsage`.
   *
   * @deprecated (since 2022-02-01) Deprecated. If included, the only allowed value is RequestBasedUsage.
   * @public
   */
  PricingPlan?: PricingPlan | undefined;

  /**
   * This parameter is no longer used.
   *
   * @deprecated (since 2022-02-01) Deprecated. No longer allowed.
   * @public
   */
  PricingPlanDataSource?: string | undefined;

  /**
   * Updates the description for the tracker resource.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Updates the position filtering for the tracker resource.
   *
   * Valid values:
   *
   * - `TimeBased` - Location updates are evaluated against linked geofence collections, but not every location update is stored. If your update frequency is more often than 30 seconds, only one update per 30 seconds is stored for each unique device ID.
   * - `DistanceBased` - If the device has moved less than 30 m (98.4 ft), location updates are ignored. Location updates within this distance are neither evaluated against linked geofence collections, nor stored. This helps control costs by reducing the number of geofence evaluations and historical device positions to paginate through. Distance-based filtering can also reduce the effects of GPS noise when displaying device trajectories on a map.
   * - `AccuracyBased` - If the device has moved less than the measured accuracy, location updates are ignored. For example, if two consecutive updates from a device have a horizontal accuracy of 5 m and 10 m, the second update is ignored if the device has moved less than 15 m. Ignored location updates are neither evaluated against linked geofence collections, nor stored. This helps educe the effects of GPS noise when displaying device trajectories on a map, and can help control costs by reducing the number of geofence evaluations.
   *
   * @public
   */
  PositionFiltering?: PositionFiltering | undefined;

  /**
   * Whether to enable position `UPDATE` events from this tracker to be sent to EventBridge.
   *
   * > **Note:** You do not need enable this feature to get `ENTER` and `EXIT` events for geofences with this tracker. Those events are always sent to EventBridge.
   *
   * @public
   */
  EventBridgeEnabled?: boolean | undefined;

  /**
   * Enables `GeospatialQueries` for a tracker that uses a [Amazon Web Services KMS customer managed key](https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html).
   *
   * This parameter is only used if you are using a KMS customer managed key.
   *
   * @public
   */
  KmsKeyEnableGeospatialQueries?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateTrackerResponse {
  /**
   * The name of the updated tracker resource.
   *
   * @public
   */
  TrackerName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the updated tracker resource. Used to specify a resource across AWS.
   *
   * - Format example: `arn:aws:geo:region:account-id:tracker/ExampleTracker`
   *
   * @public
   */
  TrackerArn: string | undefined;

  /**
   * The timestamp for when the tracker resource was last updated in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`.
   *
   * @public
   */
  UpdateTime: Date | undefined;
}

/**
 * @public
 */
export interface VerifyDevicePositionRequest {
  /**
   * The name of the tracker resource to be associated with verification request.
   *
   * @public
   */
  TrackerName: string | undefined;

  /**
   * The device's state, including position, IP address, cell signals and Wi-Fi access points.
   *
   * @public
   */
  DeviceState: DeviceState | undefined;

  /**
   * The distance unit for the verification request.
   *
   * Default Value: `Kilometers`
   *
   * @public
   */
  DistanceUnit?: DistanceUnit | undefined;
}

/**
 * @public
 */
export interface VerifyDevicePositionResponse {
  /**
   * The inferred state of the device, given the provided position, IP address, cellular signals, and Wi-Fi- access points.
   *
   * @public
   */
  InferredState: InferredState | undefined;

  /**
   * The device identifier.
   *
   * @public
   */
  DeviceId: string | undefined;

  /**
   * The timestamp at which the device's position was determined. Uses [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`.
   *
   * @public
   */
  SampleTime: Date | undefined;

  /**
   * The timestamp for when the tracker resource received the device position in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`.
   *
   * @public
   */
  ReceivedTime: Date | undefined;

  /**
   * The distance unit for the verification response.
   *
   * @public
   */
  DistanceUnit: DistanceUnit | undefined;
}
