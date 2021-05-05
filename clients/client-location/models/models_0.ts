import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>The request was denied due to insufficient access or permission. Check with an
 *       administrator to verify your permissions.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message: string | undefined;
}

export namespace AccessDeniedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

export interface AssociateTrackerConsumerRequest {
  /**
   * <p>The name of the tracker resource to be associated with a geofence collection.</p>
   */
  TrackerName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the geofence collection to be associated to tracker
   *             resource. Used when you need to specify a resource across all AWS. </p>
   *          <ul>
   *             <li>
   *                <p>Format example:
   *                <code>arn:partition:service:region:account-id:resource-type:resource-id</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ConsumerArn: string | undefined;
}

export namespace AssociateTrackerConsumerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateTrackerConsumerRequest): any => ({
    ...obj,
  });
}

export interface AssociateTrackerConsumerResponse {}

export namespace AssociateTrackerConsumerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateTrackerConsumerResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request was unsuccessful due to a conflict.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  Message: string | undefined;
}

export namespace ConflictException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

/**
 * <p>The request has failed to process because of an unknown server error, exception, or failure.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  $retryable: {};
  Message: string | undefined;
}

export namespace InternalServerException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

/**
 * <p>The resource that you've entered was not found in your AWS account.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message: string | undefined;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was denied due to request throttling.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  $retryable: {};
  Message: string | undefined;
}

export namespace ThrottlingException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
}

/**
 * <p>The input failed to meet the constraints specified by the AWS service in a specified
 *       field. </p>
 */
export interface ValidationExceptionField {
  /**
   * <p>The field name where the invalid entry was detected.</p>
   */
  Name: string | undefined;

  /**
   * <p>A message with the reason for the validation exception error.</p>
   */
  Message: string | undefined;
}

export namespace ValidationExceptionField {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationExceptionField): any => ({
    ...obj,
  });
}

export type ValidationExceptionReason =
  | "CannotParse"
  | "FieldValidationFailed"
  | "Missing"
  | "Other"
  | "UnknownOperation";

/**
 * <p>The input failed to meet the constraints specified by the AWS service. </p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  Message: string | undefined;
  /**
   * <p>A message with the reason for the validation exception error.</p>
   */
  Reason: ValidationExceptionReason | string | undefined;

  /**
   * <p>The field where the invalid entry was detected.</p>
   */
  FieldList: ValidationExceptionField[] | undefined;
}

export namespace ValidationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
}

export interface BatchDeleteGeofenceRequest {
  /**
   * <p>The geofence collection storing the geofences to be deleted.</p>
   */
  CollectionName: string | undefined;

  /**
   * <p>The batch of geofences to be deleted.</p>
   */
  GeofenceIds: string[] | undefined;
}

export namespace BatchDeleteGeofenceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDeleteGeofenceRequest): any => ({
    ...obj,
  });
}

export type BatchItemErrorCode =
  | "AccessDeniedError"
  | "ConflictError"
  | "InternalServerError"
  | "ResourceNotFoundError"
  | "ThrottlingError"
  | "ValidationError";

/**
 * <p>Contains the batch request error details associated with the request.</p>
 */
export interface BatchItemError {
  /**
   * <p>The error code associated with the batch request error.</p>
   */
  Code?: BatchItemErrorCode | string;

  /**
   * <p>A message with the reason for the batch request error.</p>
   */
  Message?: string;
}

export namespace BatchItemError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchItemError): any => ({
    ...obj,
  });
}

/**
 * <p>Contains error details for each geofence that failed to delete from the geofence
 *             collection.</p>
 */
export interface BatchDeleteGeofenceError {
  /**
   * <p>The geofence associated with the error message.</p>
   */
  GeofenceId: string | undefined;

  /**
   * <p>Contains details associated to the batch error.</p>
   */
  Error: BatchItemError | undefined;
}

export namespace BatchDeleteGeofenceError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDeleteGeofenceError): any => ({
    ...obj,
  });
}

export interface BatchDeleteGeofenceResponse {
  /**
   * <p>Contains error details for each geofence that failed to delete.</p>
   */
  Errors: BatchDeleteGeofenceError[] | undefined;
}

export namespace BatchDeleteGeofenceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDeleteGeofenceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the position update details for a device.</p>
 */
export interface DevicePositionUpdate {
  /**
   * <p>The device associated to the position update.</p>
   */
  DeviceId: string | undefined;

  /**
   * <p>The timestamp at which the device's position was determined. Uses <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>
   *          </p>
   */
  SampleTime: Date | undefined;

  /**
   * <p>The latest device position defined in <a href="https://earth-info.nga.mil/GandG/wgs84/index.html">WGS 84</a> format:
   *                 <code>[X or longitude, Y or latitude]</code>.</p>
   */
  Position: number[] | undefined;
}

export namespace DevicePositionUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DevicePositionUpdate): any => ({
    ...obj,
    ...(obj.Position && { Position: SENSITIVE_STRING }),
  });
}

export interface BatchEvaluateGeofencesRequest {
  /**
   * <p>The geofence collection used in evaluating the position of devices against its
   *             geofences.</p>
   */
  CollectionName: string | undefined;

  /**
   * <p>Contains device details for each device to be evaluated against the given geofence
   *             collection.</p>
   */
  DevicePositionUpdates: DevicePositionUpdate[] | undefined;
}

export namespace BatchEvaluateGeofencesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchEvaluateGeofencesRequest): any => ({
    ...obj,
    ...(obj.DevicePositionUpdates && {
      DevicePositionUpdates: obj.DevicePositionUpdates.map((item) => DevicePositionUpdate.filterSensitiveLog(item)),
    }),
  });
}

/**
 * <p>Contains error details for each device that failed to evaluate its position against
 *             the geofences in a given geofence collection.</p>
 */
export interface BatchEvaluateGeofencesError {
  /**
   * <p>The device associated with the position evaluation error.</p>
   */
  DeviceId: string | undefined;

  /**
   * <p>Specifies a timestamp for when the error occurred in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>
   *          </p>
   */
  SampleTime: Date | undefined;

  /**
   * <p>Contains details associated to the batch error.</p>
   */
  Error: BatchItemError | undefined;
}

export namespace BatchEvaluateGeofencesError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchEvaluateGeofencesError): any => ({
    ...obj,
  });
}

export interface BatchEvaluateGeofencesResponse {
  /**
   * <p>Contains error details for each device that failed to evaluate its position against
   *             the given geofence collection.</p>
   */
  Errors: BatchEvaluateGeofencesError[] | undefined;
}

export namespace BatchEvaluateGeofencesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchEvaluateGeofencesResponse): any => ({
    ...obj,
  });
}

export interface BatchGetDevicePositionRequest {
  /**
   * <p>The tracker resource retrieving the device position.</p>
   */
  TrackerName: string | undefined;

  /**
   * <p>Devices whose position you want to retrieve.</p>
   *          <ul>
   *             <li>
   *                <p>For example, for two devices:
   *                    <code>device-ids=DeviceId1&amp;device-ids=DeviceId2</code>
   *                </p>
   *            </li>
   *          </ul>
   */
  DeviceIds: string[] | undefined;
}

export namespace BatchGetDevicePositionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetDevicePositionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the device position details.</p>
 */
export interface DevicePosition {
  /**
   * <p>The device whose position you retrieved.</p>
   */
  DeviceId?: string;

  /**
   * <p>The timestamp at which the device's position was determined. Uses <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
   */
  SampleTime: Date | undefined;

  /**
   * <p>The timestamp for when the tracker resource received the device position in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
   */
  ReceivedTime: Date | undefined;

  /**
   * <p>The last known device position.</p>
   */
  Position: number[] | undefined;
}

export namespace DevicePosition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DevicePosition): any => ({
    ...obj,
    ...(obj.Position && { Position: SENSITIVE_STRING }),
  });
}

/**
 * <p>Contains error details for each device that didn't return a position.</p>
 */
export interface BatchGetDevicePositionError {
  /**
   * <p>The ID of the device that didn't return a position.</p>
   */
  DeviceId: string | undefined;

  /**
   * <p>Contains details related to the error code.</p>
   */
  Error: BatchItemError | undefined;
}

export namespace BatchGetDevicePositionError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetDevicePositionError): any => ({
    ...obj,
  });
}

export interface BatchGetDevicePositionResponse {
  /**
   * <p>Contains  error details for each device that failed to send its position to the tracker
   *             resource.</p>
   */
  Errors: BatchGetDevicePositionError[] | undefined;

  /**
   * <p>Contains device position details such as the device ID, position, and timestamps for
   *             when the position was received and sampled.</p>
   */
  DevicePositions: DevicePosition[] | undefined;
}

export namespace BatchGetDevicePositionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetDevicePositionResponse): any => ({
    ...obj,
    ...(obj.DevicePositions && {
      DevicePositions: obj.DevicePositions.map((item) => DevicePosition.filterSensitiveLog(item)),
    }),
  });
}

/**
 * <p>Contains the geofence geometry details.</p>
 *         <note>
 *             <p>Amazon Location does not currently support polygons with holes, multipolygons, polygons
 *                 that are wound clockwise, or that cross the antimeridian. </p>
 *         </note>
 */
export interface GeofenceGeometry {
  /**
   * <p>An array of 1 or more linear rings. A linear ring is an array of 4 or more vertices,
   *             where the first and last vertex are the same to form a closed boundary. Each vertex is a
   *             2-dimensional point of the form: <code>[longitude, latitude]</code>. </p>
   *         <p>The first linear ring is an outer ring, describing the polygon's boundary. Subsequent
   *             linear rings may be inner or outer rings to describe holes and islands. Outer rings must
   *             list their vertices in counter-clockwise order around the ring's center, where the left
   *             side is the polygon's exterior. Inner rings must list their vertices in clockwise order,
   *             where the left side is the polygon's interior.</p>
   */
  Polygon?: number[][][];
}

export namespace GeofenceGeometry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GeofenceGeometry): any => ({
    ...obj,
    ...(obj.Polygon && { Polygon: obj.Polygon.map((item) => SENSITIVE_STRING) }),
  });
}

/**
 * <p>Contains geofence geometry details. </p>
 */
export interface BatchPutGeofenceRequestEntry {
  /**
   * <p>The identifier for the geofence to be stored in a given geofence collection.</p>
   */
  GeofenceId: string | undefined;

  /**
   * <p>Contains the polygon details to specify the position of the geofence.</p>
   *         <note>
   *             <p>Each <a href="https://docs.aws.amazon.com/location-geofences/latest/APIReference/API_GeofenceGeometry.html">geofence polygon</a> can have a maximum of 1,000 vertices.</p>
   *         </note>
   */
  Geometry: GeofenceGeometry | undefined;
}

export namespace BatchPutGeofenceRequestEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchPutGeofenceRequestEntry): any => ({
    ...obj,
    ...(obj.Geometry && { Geometry: GeofenceGeometry.filterSensitiveLog(obj.Geometry) }),
  });
}

export interface BatchPutGeofenceRequest {
  /**
   * <p>The geofence collection storing the geofences.</p>
   */
  CollectionName: string | undefined;

  /**
   * <p>The batch of geofences to be stored in a geofence collection.</p>
   */
  Entries: BatchPutGeofenceRequestEntry[] | undefined;
}

export namespace BatchPutGeofenceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchPutGeofenceRequest): any => ({
    ...obj,
    ...(obj.Entries && { Entries: obj.Entries.map((item) => BatchPutGeofenceRequestEntry.filterSensitiveLog(item)) }),
  });
}

/**
 * <p>Contains error details for each geofence that failed to be stored in a given geofence
 *             collection.</p>
 */
export interface BatchPutGeofenceError {
  /**
   * <p>The geofence associated with the error message.</p>
   */
  GeofenceId: string | undefined;

  /**
   * <p>Contains details associated to the batch error.</p>
   */
  Error: BatchItemError | undefined;
}

export namespace BatchPutGeofenceError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchPutGeofenceError): any => ({
    ...obj,
  });
}

/**
 * <p>Contains a summary of each geofence that was successfully stored in a given geofence
 *             collection.</p>
 */
export interface BatchPutGeofenceSuccess {
  /**
   * <p>The geofence successfully stored in a geofence collection.</p>
   */
  GeofenceId: string | undefined;

  /**
   * <p>The timestamp for when the geofence was stored in a geofence collection in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>
   *          </p>
   */
  CreateTime: Date | undefined;

  /**
   * <p>The timestamp for when the geofence was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>
   *          </p>
   */
  UpdateTime: Date | undefined;
}

export namespace BatchPutGeofenceSuccess {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchPutGeofenceSuccess): any => ({
    ...obj,
  });
}

export interface BatchPutGeofenceResponse {
  /**
   * <p>Contains each geofence that was successfully stored in a geofence collection.</p>
   */
  Successes: BatchPutGeofenceSuccess[] | undefined;

  /**
   * <p>Contains additional error details for each geofence that failed to be stored in a
   *             geofence collection.</p>
   */
  Errors: BatchPutGeofenceError[] | undefined;
}

export namespace BatchPutGeofenceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchPutGeofenceResponse): any => ({
    ...obj,
  });
}

export interface BatchUpdateDevicePositionRequest {
  /**
   * <p>The name of the tracker resource to update.</p>
   */
  TrackerName: string | undefined;

  /**
   * <p>Contains the position update details for each device.</p>
   */
  Updates: DevicePositionUpdate[] | undefined;
}

export namespace BatchUpdateDevicePositionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchUpdateDevicePositionRequest): any => ({
    ...obj,
    ...(obj.Updates && { Updates: obj.Updates.map((item) => DevicePositionUpdate.filterSensitiveLog(item)) }),
  });
}

/**
 * <p>Contains  error details for each device that failed to update its position.</p>
 */
export interface BatchUpdateDevicePositionError {
  /**
   * <p>The device associated with the failed location update.</p>
   */
  DeviceId: string | undefined;

  /**
   * <p>The timestamp at which the device position was determined. Uses <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
   */
  SampleTime: Date | undefined;

  /**
   * <p>Contains details related to the error code such as the error code and error
   *             message.</p>
   */
  Error: BatchItemError | undefined;
}

export namespace BatchUpdateDevicePositionError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchUpdateDevicePositionError): any => ({
    ...obj,
  });
}

export interface BatchUpdateDevicePositionResponse {
  /**
   * <p>Contains  error details for each device that failed to update its position.</p>
   */
  Errors: BatchUpdateDevicePositionError[] | undefined;
}

export namespace BatchUpdateDevicePositionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchUpdateDevicePositionResponse): any => ({
    ...obj,
  });
}

export type PricingPlan = "MobileAssetManagement" | "MobileAssetTracking" | "RequestBasedUsage";

export interface CreateGeofenceCollectionRequest {
  /**
   * <p>A custom name for the geofence collection.</p>
   *         <p>Requirements:</p>
   *         <ul>
   *             <li>
   *                 <p>Contain only alphanumeric characters (A–Z, a–z, 0-9), hyphens (-), periods (.), and
   *                     underscores (_). </p>
   *             </li>
   *             <li>
   *                 <p>Must be a unique geofence collection name.</p>
   *             </li>
   *             <li>
   *                 <p>No spaces allowed. For example, <code>ExampleGeofenceCollection</code>.</p>
   *             </li>
   *          </ul>
   */
  CollectionName: string | undefined;

  /**
   * <p>Specifies the pricing plan for your geofence collection.</p>
   *         <p>For additional details and restrictions on each pricing plan option, see the <a href="https://aws.amazon.com/location/pricing/">Amazon Location Service pricing
   *             page</a>.</p>
   */
  PricingPlan: PricingPlan | string | undefined;

  /**
   * <p>Specifies the plan data source. Required if the Mobile Asset Tracking (MAT) or the
   *             Mobile Asset Management (MAM) pricing plan is selected.</p>
   *         <p>Billing is determined by the resource usage, the associated pricing plan, and the data
   *             source that was specified. For more information about each pricing plan option and
   *             restrictions, see the <a href="https://aws.amazon.com/location/pricing/">Amazon
   *                 Location Service pricing page</a>.</p>
   *         <p>Valid Values: <code>Esri </code>| <code>Here</code>
   *          </p>
   */
  PricingPlanDataSource?: string;

  /**
   * <p>An optional description for the geofence collection.</p>
   */
  Description?: string;
}

export namespace CreateGeofenceCollectionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateGeofenceCollectionRequest): any => ({
    ...obj,
  });
}

export interface CreateGeofenceCollectionResponse {
  /**
   * <p>The name for the geofence collection.</p>
   */
  CollectionName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the geofence collection resource. Used when you
   *             need to specify a resource across all AWS. </p>
   */
  CollectionArn: string | undefined;

  /**
   * <p>The timestamp for when the geofence collection was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>
   *          </p>
   */
  CreateTime: Date | undefined;
}

export namespace CreateGeofenceCollectionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateGeofenceCollectionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the map tile style selected from an available provider.</p>
 */
export interface MapConfiguration {
  /**
   * <p>Specifies the map style selected from an available data provider.</p>
   *         <p>Valid styles: <code>VectorEsriStreets</code>, <code>VectorEsriTopographic</code>,
   *                 <code>VectorEsriNavigation</code>, <code>VectorEsriDarkGrayCanvas</code>,
   *                 <code>VectorEsriLightGrayCanvas</code>, <code>VectorHereBerlin</code>.</p>
   *         <note>
   *             <p>When using HERE as your data provider, and selecting the Style
   *                     <code>VectorHereBerlin</code>, you may not use HERE Maps for Asset Management.
   *                 See the <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a> for Amazon Location Service. </p>
   *         </note>
   */
  Style: string | undefined;
}

export namespace MapConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MapConfiguration): any => ({
    ...obj,
  });
}

export interface CreateMapRequest {
  /**
   * <p>The name for the map resource.</p>
   *         <p>Requirements:</p>
   *         <ul>
   *             <li>
   *                <p>Must contain only alphanumeric characters (A–Z, a–z, 0–9), hyphens (-), periods (.), and underscores (_). </p>
   *             </li>
   *             <li>
   *                <p>Must be a unique map resource name. </p>
   *             </li>
   *             <li>
   *                 <p>No spaces allowed. For example, <code>ExampleMap</code>.</p>
   *             </li>
   *          </ul>
   */
  MapName: string | undefined;

  /**
   * <p>Specifies the map style selected from an available data provider.</p>
   */
  Configuration: MapConfiguration | undefined;

  /**
   * <p>Specifies the pricing plan for your map resource.</p>
   *         <p>For additional details and restrictions on each pricing plan option, see the <a href="https://aws.amazon.com/location/pricing/">Amazon Location Service pricing
   *                 page</a>.</p>
   */
  PricingPlan: PricingPlan | string | undefined;

  /**
   * <p>An optional description for the map resource.</p>
   */
  Description?: string;
}

export namespace CreateMapRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMapRequest): any => ({
    ...obj,
  });
}

export interface CreateMapResponse {
  /**
   * <p>The name of the map resource.</p>
   */
  MapName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the map resource. Used when you need to specify a
   *             resource across all AWS.</p>
   *         <ul>
   *             <li>
   *                 <p>Format example:
   *                         <code>arn:partition:service:region:account-id:resource-type:resource-id</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  MapArn: string | undefined;

  /**
   * <p>The timestamp for when the map resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>.</p>
   */
  CreateTime: Date | undefined;
}

export namespace CreateMapResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMapResponse): any => ({
    ...obj,
  });
}

export type IntendedUse = "SingleUse" | "Storage";

/**
 * <p>Specifies the data storage option chosen for requesting Places.</p>
 *          <note>
 *             <p>By using Places, you agree that AWS may transmit your API queries to your selected
 *             third party provider for processing, which may be outside the AWS region you are
 *             currently using. </p>
 *             <p>Also, when using HERE as your data provider, you may not (a) use HERE Places for
 *             Asset Management, or (b) select the <code>Storage</code> option for the
 *                <code>IntendedUse</code> parameter when requesting Places in Japan. For more
 *             information, see the <a href="https://aws.amazon.com/service-terms/">AWS Service
 *                Terms</a> for Amazon Location Service.</p>
 *          </note>
 */
export interface DataSourceConfiguration {
  /**
   * <p>Specifies how the results of an operation will be stored by the caller. </p>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SingleUse</code> specifies that the results won't be stored. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Storage</code> specifies that the result can be cached or stored in a database.</p>
   *             </li>
   *          </ul>
   *          <p>Default value:  <code>SingleUse</code>
   *          </p>
   */
  IntendedUse?: IntendedUse | string;
}

export namespace DataSourceConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataSourceConfiguration): any => ({
    ...obj,
  });
}

export interface CreatePlaceIndexRequest {
  /**
   * <p>The name of the Place index resource. </p>
   *          <p>Requirements:</p>
   *          <ul>
   *             <li>
   *                <p>Contain only alphanumeric characters (A-Z, a-z, 0-9) , hyphens (-), periods (.), and underscores (_).</p>
   *             </li>
   *             <li>
   *                <p>Must be a unique Place index resource name.</p>
   *             </li>
   *             <li>
   *                <p>No spaces allowed. For example, <code>ExamplePlaceIndex</code>.</p>
   *             </li>
   *          </ul>
   */
  IndexName: string | undefined;

  /**
   * <p>Specifies the data provider of geospatial data.</p>
   *          <note>
   *             <p>This field is case-sensitive. Enter the valid values as shown. For example, entering
   *                <code>HERE</code> will return an error.</p>
   *          </note>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Esri</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Here</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For additional details on data providers, see the <a href="https://docs.aws.amazon.com/location/latest/developerguide/what-is-data-provider.html">Amazon Location Service data providers page</a>.</p>
   */
  DataSource: string | undefined;

  /**
   * <p>Specifies the pricing plan for your Place index resource.</p>
   *          <p>For additional details and restrictions on each pricing plan option, see the <a href="https://aws.amazon.com/location/pricing/">Amazon Location Service pricing
   *          page</a>.</p>
   */
  PricingPlan: PricingPlan | string | undefined;

  /**
   * <p>The optional description for the Place index resource.</p>
   */
  Description?: string;

  /**
   * <p>Specifies the data storage option for requesting Places.</p>
   */
  DataSourceConfiguration?: DataSourceConfiguration;
}

export namespace CreatePlaceIndexRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePlaceIndexRequest): any => ({
    ...obj,
  });
}

export interface CreatePlaceIndexResponse {
  /**
   * <p>The name for the Place index resource.</p>
   */
  IndexName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the Place index resource. Used when you need to
   *          specify a resource across all AWS. </p>
   */
  IndexArn: string | undefined;

  /**
   * <p>The timestamp for when the Place index resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format:
   *             <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
   */
  CreateTime: Date | undefined;
}

export namespace CreatePlaceIndexResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePlaceIndexResponse): any => ({
    ...obj,
  });
}

export interface CreateTrackerRequest {
  /**
   * <p>The name for the tracker resource.</p>
   *          <p>Requirements:</p>
   *          <ul>
   *             <li>
   *                <p>Contain only alphanumeric characters (A-Z, a-z, 0-9) , hyphens (-), periods (.), and underscores (_).</p>
   *             </li>
   *             <li>
   *                <p>Must be a unique tracker resource name.</p>
   *             </li>
   *             <li>
   *                 <p>No spaces allowed. For example, <code>ExampleTracker</code>.</p>
   *             </li>
   *          </ul>
   */
  TrackerName: string | undefined;

  /**
   * <p>Specifies the pricing plan for your tracker resource.</p>
   *          <p>For additional details and restrictions on each pricing plan option, see the <a href="https://aws.amazon.com/location/pricing/">Amazon Location Service pricing
   *            page</a>.</p>
   */
  PricingPlan: PricingPlan | string | undefined;

  /**
   * <p>Specifies the plan data source. Required if the Mobile Asset Tracking (MAT) or the
   *             Mobile Asset Management (MAM) pricing plan is selected.</p>
   *         <p>Billing is determined by the resource usage, the associated pricing plan, and data
   *             source that was specified. For more information about each pricing plan option and
   *             restrictions, see the <a href="https://aws.amazon.com/location/pricing/">Amazon
   *                 Location Service pricing page</a>.</p>
   *         <p>Valid Values: <code>Esri</code> | <code>Here</code>
   *          </p>
   */
  PricingPlanDataSource?: string;

  /**
   * <p>An optional description for the tracker resource.</p>
   */
  Description?: string;
}

export namespace CreateTrackerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTrackerRequest): any => ({
    ...obj,
  });
}

export interface CreateTrackerResponse {
  /**
   * <p>The name of the tracker resource.</p>
   */
  TrackerName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the tracker resource. Used when you need to specify
   *             a resource across all AWS.</p>
   */
  TrackerArn: string | undefined;

  /**
   * <p>The timestamp for when the tracker resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
   */
  CreateTime: Date | undefined;
}

export namespace CreateTrackerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTrackerResponse): any => ({
    ...obj,
  });
}

export interface DeleteGeofenceCollectionRequest {
  /**
   * <p>The name of the geofence collection to be deleted.</p>
   */
  CollectionName: string | undefined;
}

export namespace DeleteGeofenceCollectionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteGeofenceCollectionRequest): any => ({
    ...obj,
  });
}

export interface DeleteGeofenceCollectionResponse {}

export namespace DeleteGeofenceCollectionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteGeofenceCollectionResponse): any => ({
    ...obj,
  });
}

export interface DeleteMapRequest {
  /**
   * <p>The name of the map resource to be deleted.</p>
   */
  MapName: string | undefined;
}

export namespace DeleteMapRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMapRequest): any => ({
    ...obj,
  });
}

export interface DeleteMapResponse {}

export namespace DeleteMapResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMapResponse): any => ({
    ...obj,
  });
}

export interface DeletePlaceIndexRequest {
  /**
   * <p>The name of the Place index resource to be deleted.</p>
   */
  IndexName: string | undefined;
}

export namespace DeletePlaceIndexRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePlaceIndexRequest): any => ({
    ...obj,
  });
}

export interface DeletePlaceIndexResponse {}

export namespace DeletePlaceIndexResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePlaceIndexResponse): any => ({
    ...obj,
  });
}

export interface DeleteTrackerRequest {
  /**
   * <p>The name of the tracker resource to be deleted.</p>
   */
  TrackerName: string | undefined;
}

export namespace DeleteTrackerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTrackerRequest): any => ({
    ...obj,
  });
}

export interface DeleteTrackerResponse {}

export namespace DeleteTrackerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTrackerResponse): any => ({
    ...obj,
  });
}

export interface DescribeGeofenceCollectionRequest {
  /**
   * <p>The name of the geofence collection.</p>
   */
  CollectionName: string | undefined;
}

export namespace DescribeGeofenceCollectionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeGeofenceCollectionRequest): any => ({
    ...obj,
  });
}

export interface DescribeGeofenceCollectionResponse {
  /**
   * <p>The name of the geofence collection.</p>
   */
  CollectionName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the geofence collection resource. Used when you
   *             need to specify a resource across all AWS. </p>
   */
  CollectionArn: string | undefined;

  /**
   * <p>The optional description for the geofence collection.</p>
   */
  Description: string | undefined;

  /**
   * <p>The pricing plan selected for the specified geofence collection.</p>
   *         <p>For additional details and restrictions on each pricing plan option, see the <a href="https://aws.amazon.com/location/pricing/">Amazon Location Service pricing
   *                 page</a>.</p>
   */
  PricingPlan: PricingPlan | string | undefined;

  /**
   * <p>The data source selected for the geofence collection and associated pricing
   *             plan.</p>
   */
  PricingPlanDataSource?: string;

  /**
   * <p>The timestamp for when the geofence resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>
   *          </p>
   */
  CreateTime: Date | undefined;

  /**
   * <p>The timestamp for when the geofence collection was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>
   *          </p>
   */
  UpdateTime: Date | undefined;
}

export namespace DescribeGeofenceCollectionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeGeofenceCollectionResponse): any => ({
    ...obj,
  });
}

export interface DescribeMapRequest {
  /**
   * <p>The name of the map resource.</p>
   */
  MapName: string | undefined;
}

export namespace DescribeMapRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeMapRequest): any => ({
    ...obj,
  });
}

export interface DescribeMapResponse {
  /**
   * <p>The map style selected from an available provider.</p>
   */
  MapName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the map resource. Used when you need to specify a
   *             resource across all AWS.</p>
   */
  MapArn: string | undefined;

  /**
   * <p>The pricing plan selected for the specified map resource.</p>
   *
   *         <p>For additional details and restrictions on each pricing plan option, see the <a href="https://aws.amazon.com/location/pricing/">Amazon Location Service pricing
   *                 page</a>.</p>
   */
  PricingPlan: PricingPlan | string | undefined;

  /**
   * <p>Specifies the data provider for the associated map tiles.</p>
   */
  DataSource: string | undefined;

  /**
   * <p>Specifies the map tile style selected from a partner data provider.</p>
   */
  Configuration: MapConfiguration | undefined;

  /**
   * <p>The optional description for the map resource.</p>
   */
  Description: string | undefined;

  /**
   * <p>The timestamp for when the map resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>.</p>
   */
  CreateTime: Date | undefined;

  /**
   * <p>The timestamp for when the map resource was last update in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>.</p>
   */
  UpdateTime: Date | undefined;
}

export namespace DescribeMapResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeMapResponse): any => ({
    ...obj,
  });
}

export interface DescribePlaceIndexRequest {
  /**
   * <p>The name of the Place index resource.</p>
   */
  IndexName: string | undefined;
}

export namespace DescribePlaceIndexRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePlaceIndexRequest): any => ({
    ...obj,
  });
}

export interface DescribePlaceIndexResponse {
  /**
   * <p>The name of the Place index resource being described.</p>
   */
  IndexName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the Place index resource. Used when you need to
   *          specify a resource across all AWS. </p>
   */
  IndexArn: string | undefined;

  /**
   * <p>The pricing plan selected for the specified Place index resource.</p>
   *          <p>For additional details and restrictions on each pricing plan option, see the <a href="https://aws.amazon.com/location/pricing/">Amazon Location Service pricing
   *             page</a>.</p>
   */
  PricingPlan: PricingPlan | string | undefined;

  /**
   * <p>The optional description for the Place index resource.</p>
   */
  Description: string | undefined;

  /**
   * <p>The timestamp for when the Place index resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format:
   *             <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
   */
  CreateTime: Date | undefined;

  /**
   * <p>The timestamp for when the Place index resource was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format:
   *             <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
   */
  UpdateTime: Date | undefined;

  /**
   * <p>The data provider of geospatial data. Indicates one of the available providers:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Esri</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Here</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For additional details on data providers, see the <a href="https://docs.aws.amazon.com/location/latest/developerguide/what-is-data-provider.html">Amazon Location Service data providers
   *          page</a>.</p>
   */
  DataSource: string | undefined;

  /**
   * <p>The specified data storage option for requesting Places.</p>
   */
  DataSourceConfiguration: DataSourceConfiguration | undefined;
}

export namespace DescribePlaceIndexResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePlaceIndexResponse): any => ({
    ...obj,
  });
}

export interface DescribeTrackerRequest {
  /**
   * <p>The name of the tracker resource.</p>
   */
  TrackerName: string | undefined;
}

export namespace DescribeTrackerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTrackerRequest): any => ({
    ...obj,
  });
}

export interface DescribeTrackerResponse {
  /**
   * <p>The name of the tracker resource.</p>
   */
  TrackerName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the tracker resource. Used when you need to specify
   *             a resource across all AWS.</p>
   */
  TrackerArn: string | undefined;

  /**
   * <p>The optional description for the tracker resource.</p>
   */
  Description: string | undefined;

  /**
   * <p>The pricing plan selected for the specified tracker resource.</p>
   *         <p>For additional details and restrictions on each pricing plan option, see the <a href="https://aws.amazon.com/location/pricing/">Amazon Location Service pricing
   *                 page</a>.</p>
   */
  PricingPlan: PricingPlan | string | undefined;

  /**
   * <p>The data source selected for the tracker resource and associated pricing plan.</p>
   */
  PricingPlanDataSource?: string;

  /**
   * <p>The timestamp for when the tracker resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
   */
  CreateTime: Date | undefined;

  /**
   * <p>The timestamp for when the tracker resource was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
   */
  UpdateTime: Date | undefined;
}

export namespace DescribeTrackerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTrackerResponse): any => ({
    ...obj,
  });
}

export interface DisassociateTrackerConsumerRequest {
  /**
   * <p>The name of the tracker resource to be dissociated from the consumer.</p>
   */
  TrackerName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the geofence collection to be disassociated from
   *             the tracker resource. Used when you need to specify a resource across all AWS. </p>
   *         <ul>
   *             <li>
   *                 <p>Format example:
   *                         <code>arn:partition:service:region:account-id:resource-type:resource-id</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ConsumerArn: string | undefined;
}

export namespace DisassociateTrackerConsumerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateTrackerConsumerRequest): any => ({
    ...obj,
  });
}

export interface DisassociateTrackerConsumerResponse {}

export namespace DisassociateTrackerConsumerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateTrackerConsumerResponse): any => ({
    ...obj,
  });
}

export interface GetGeofenceRequest {
  /**
   * <p>The geofence collection storing the target geofence.</p>
   */
  CollectionName: string | undefined;

  /**
   * <p>The geofence you're retrieving details for.</p>
   */
  GeofenceId: string | undefined;
}

export namespace GetGeofenceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetGeofenceRequest): any => ({
    ...obj,
  });
}

export interface GetGeofenceResponse {
  /**
   * <p>The geofence identifier.</p>
   */
  GeofenceId: string | undefined;

  /**
   * <p>Contains the geofence geometry details describing a polygon.</p>
   */
  Geometry: GeofenceGeometry | undefined;

  /**
   * <p>Identifies the state of the geofence. A geofence will hold one of the following
   *             states:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>ACTIVE</code> — The geofence has been indexed by the system. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>PENDING</code> — The geofence is being processed by the system.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>FAILED</code> — The geofence failed to be indexed by the system.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DELETED</code> — The geofence has been deleted from the system
   *                     index.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DELETING</code> — The geofence is being deleted from the system
   *                     index.</p>
   *             </li>
   *          </ul>
   */
  Status: string | undefined;

  /**
   * <p>The timestamp for when the geofence collection was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>
   *          </p>
   */
  CreateTime: Date | undefined;

  /**
   * <p>The timestamp for when the geofence collection was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>
   *          </p>
   */
  UpdateTime: Date | undefined;
}

export namespace GetGeofenceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetGeofenceResponse): any => ({
    ...obj,
    ...(obj.Geometry && { Geometry: GeofenceGeometry.filterSensitiveLog(obj.Geometry) }),
  });
}

export interface ListGeofenceCollectionsRequest {
  /**
   * <p>An optional limit for the number of resources returned in a single call. </p>
   *         <p>Default value: <code>100</code>
   *          </p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token specifying which page of results to return in the response. If no
   *             token is provided, the default page is the first page. </p>
   *         <p>Default value: <code>null</code>
   *          </p>
   */
  NextToken?: string;
}

export namespace ListGeofenceCollectionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListGeofenceCollectionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the geofence collection details.</p>
 */
export interface ListGeofenceCollectionsResponseEntry {
  /**
   * <p>The name of the geofence collection.</p>
   */
  CollectionName: string | undefined;

  /**
   * <p>The description for the geofence collection</p>
   */
  Description: string | undefined;

  /**
   * <p>The pricing plan for the specified geofence collection.</p>
   *         <p>For additional details and restrictions on each pricing plan option, see the <a href="https://aws.amazon.com/location/pricing/">Amazon Location Service pricing
   *             page</a>.</p>
   */
  PricingPlan: PricingPlan | string | undefined;

  /**
   * <p>The data source selected for the geofence collection and associated pricing
   *             plan.</p>
   */
  PricingPlanDataSource?: string;

  /**
   * <p>The timestamp for when the geofence collection was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>
   *          </p>
   */
  CreateTime: Date | undefined;

  /**
   * <p>Specifies a timestamp for when the resource was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>
   *          </p>
   */
  UpdateTime: Date | undefined;
}

export namespace ListGeofenceCollectionsResponseEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListGeofenceCollectionsResponseEntry): any => ({
    ...obj,
  });
}

export interface ListGeofenceCollectionsResponse {
  /**
   * <p>Lists the geofence collections that exist in your AWS account.</p>
   */
  Entries: ListGeofenceCollectionsResponseEntry[] | undefined;

  /**
   * <p>A pagination token indicating there are additional pages available. You can use the
   *             token in a following request to fetch the next set of results. </p>
   */
  NextToken?: string;
}

export namespace ListGeofenceCollectionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListGeofenceCollectionsResponse): any => ({
    ...obj,
  });
}

export interface ListGeofencesRequest {
  /**
   * <p>The name of the geofence collection storing the list of geofences.</p>
   */
  CollectionName: string | undefined;

  /**
   * <p>The pagination token specifying which page of results to return in the response. If no
   *             token is provided, the default page is the first page. </p>
   *         <p>Default value: <code>null</code>
   *          </p>
   */
  NextToken?: string;
}

export namespace ListGeofencesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListGeofencesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains a list of geofences stored in a given geofence collection.</p>
 */
export interface ListGeofenceResponseEntry {
  /**
   * <p>The geofence identifier.</p>
   */
  GeofenceId: string | undefined;

  /**
   * <p>Contains the geofence geometry details describing a polygon.</p>
   */
  Geometry: GeofenceGeometry | undefined;

  /**
   * <p>Identifies the state of the geofence. A geofence will hold one of the following
   *             states:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>ACTIVE</code> — The geofence has been indexed by the system. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>PENDING</code> — The geofence is being processed by the system.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>FAILED</code> — The geofence failed to be indexed by the system.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DELETED</code> — The geofence has been deleted from the system
   *                     index.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DELETING</code> — The geofence is being deleted from the system
   *                     index.</p>
   *             </li>
   *          </ul>
   */
  Status: string | undefined;

  /**
   * <p>The timestamp for when the geofence was stored in a geofence collection in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>
   *          </p>
   */
  CreateTime: Date | undefined;

  /**
   * <p>The timestamp for when the geofence was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>
   *          </p>
   */
  UpdateTime: Date | undefined;
}

export namespace ListGeofenceResponseEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListGeofenceResponseEntry): any => ({
    ...obj,
    ...(obj.Geometry && { Geometry: GeofenceGeometry.filterSensitiveLog(obj.Geometry) }),
  });
}

export interface ListGeofencesResponse {
  /**
   * <p>Contains a list of geofences stored in the geofence collection.</p>
   */
  Entries: ListGeofenceResponseEntry[] | undefined;

  /**
   * <p>A pagination token indicating there are additional pages available. You can use the
   *             token in a following request to fetch the next set of results. </p>
   */
  NextToken?: string;
}

export namespace ListGeofencesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListGeofencesResponse): any => ({
    ...obj,
    ...(obj.Entries && { Entries: obj.Entries.map((item) => ListGeofenceResponseEntry.filterSensitiveLog(item)) }),
  });
}

export interface PutGeofenceRequest {
  /**
   * <p>The geofence collection to store the geofence in.</p>
   */
  CollectionName: string | undefined;

  /**
   * <p>An identifier for the geofence. For example, <code>ExampleGeofence-1</code>.</p>
   */
  GeofenceId: string | undefined;

  /**
   * <p>Contains the polygon details to specify the position of the geofence.</p>
   *         <note>
   *             <p>Each <a href="https://docs.aws.amazon.com/location-geofences/latest/APIReference/API_GeofenceGeometry.html">geofence polygon</a> can have a maximum of 1,000 vertices.</p>
   *         </note>
   */
  Geometry: GeofenceGeometry | undefined;
}

export namespace PutGeofenceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutGeofenceRequest): any => ({
    ...obj,
    ...(obj.Geometry && { Geometry: GeofenceGeometry.filterSensitiveLog(obj.Geometry) }),
  });
}

export interface PutGeofenceResponse {
  /**
   * <p>The geofence identifier entered in the request.</p>
   */
  GeofenceId: string | undefined;

  /**
   * <p>The timestamp for when the geofence was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>
   *          </p>
   */
  CreateTime: Date | undefined;

  /**
   * <p>The timestamp for when the geofence was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>
   *          </p>
   */
  UpdateTime: Date | undefined;
}

export namespace PutGeofenceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutGeofenceResponse): any => ({
    ...obj,
  });
}

export interface GetDevicePositionRequest {
  /**
   * <p>The tracker resource receiving the position update.</p>
   */
  TrackerName: string | undefined;

  /**
   * <p>The device whose position you want to retrieve.</p>
   */
  DeviceId: string | undefined;
}

export namespace GetDevicePositionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDevicePositionRequest): any => ({
    ...obj,
  });
}

export interface GetDevicePositionResponse {
  /**
   * <p>The device whose position you retrieved.</p>
   */
  DeviceId?: string;

  /**
   * <p>The timestamp at which the device's position was determined. Uses <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601 </a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
   */
  SampleTime: Date | undefined;

  /**
   * <p>The timestamp for when the tracker resource received the device position in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601 </a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
   */
  ReceivedTime: Date | undefined;

  /**
   * <p>The last known device position.</p>
   */
  Position: number[] | undefined;
}

export namespace GetDevicePositionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDevicePositionResponse): any => ({
    ...obj,
    ...(obj.Position && { Position: SENSITIVE_STRING }),
  });
}

export interface GetDevicePositionHistoryRequest {
  /**
   * <p>The tracker resource receiving the request for the device position history.</p>
   */
  TrackerName: string | undefined;

  /**
   * <p>The device whose position history you want to retrieve.</p>
   */
  DeviceId: string | undefined;

  /**
   * <p>The pagination token specifying which page of results to return in the response. If no
   *             token is provided, the default page is the first page. </p>
   *          <p>Default value: <code>null</code>
   *          </p>
   */
  NextToken?: string;

  /**
   * <p>Specify the start time for the position history in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. By default, the value will be 24 hours
   *             prior to the time that the request is made.</p>
   *         <p>Requirement:</p>
   *          <ul>
   *             <li>
   *                <p>The time specified for <code>StartTimeInclusive</code> must be before
   *                         <code>EndTimeExclusive</code>.</p>
   *            </li>
   *          </ul>
   */
  StartTimeInclusive?: Date;

  /**
   * <p>Specify the end time for the position history in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. By default, the value will be the time
   *             that the request is made.</p>
   *         <p>Requirement:</p>
   *          <ul>
   *             <li>
   *                <p>The time specified for <code>EndTimeExclusive</code> must be after the time for
   *                         <code>StartTimeInclusive</code>.</p>
   *            </li>
   *          </ul>
   */
  EndTimeExclusive?: Date;
}

export namespace GetDevicePositionHistoryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDevicePositionHistoryRequest): any => ({
    ...obj,
  });
}

export interface GetDevicePositionHistoryResponse {
  /**
   * <p>Contains the position history details for the requested device.</p>
   */
  DevicePositions: DevicePosition[] | undefined;

  /**
   * <p>A pagination token indicating there are additional pages available. You can use the
   *             token in a following request to fetch the next set of results. </p>
   */
  NextToken?: string;
}

export namespace GetDevicePositionHistoryResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDevicePositionHistoryResponse): any => ({
    ...obj,
    ...(obj.DevicePositions && {
      DevicePositions: obj.DevicePositions.map((item) => DevicePosition.filterSensitiveLog(item)),
    }),
  });
}

export interface GetMapGlyphsRequest {
  /**
   * <p>The map resource associated with the glyph ﬁle.</p>
   */
  MapName: string | undefined;

  /**
   * <p>A comma-separated list of fonts to load glyphs from in order of preference.. For
   *             example, <code>Noto Sans, Arial Unicode</code>.</p>
   */
  FontStack: string | undefined;

  /**
   * <p>A Unicode range of characters to download glyphs for. Each response will contain 256
   *             characters. For example, 0-255 includes all characters from range <code>U+0000</code> to
   *                 <code>00FF</code>. Must be aligned to multiples of 256.</p>
   */
  FontUnicodeRange: string | undefined;
}

export namespace GetMapGlyphsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMapGlyphsRequest): any => ({
    ...obj,
  });
}

export interface GetMapGlyphsResponse {
  /**
   * <p>The blob's content type.</p>
   */
  Blob?: Uint8Array;

  /**
   * <p>The map glyph content type. For example, <code>application/octet-stream</code>.</p>
   */
  ContentType?: string;
}

export namespace GetMapGlyphsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMapGlyphsResponse): any => ({
    ...obj,
  });
}

export interface GetMapSpritesRequest {
  /**
   * <p>The map resource associated with the sprite ﬁle.</p>
   */
  MapName: string | undefined;

  /**
   * <p>The name of the sprite ﬁle. Use the following ﬁle names for the sprite sheet:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>sprites.png</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sprites@2x.png</code> for high pixel density displays</p>
   *             </li>
   *          </ul>
   *         <p>For the JSON document contain image offsets. Use the following ﬁle names:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>sprites.json</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sprites@2x.json</code> for high pixel density displays</p>
   *             </li>
   *          </ul>
   */
  FileName: string | undefined;
}

export namespace GetMapSpritesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMapSpritesRequest): any => ({
    ...obj,
  });
}

export interface GetMapSpritesResponse {
  /**
   * <p>Contains the body of the sprite sheet or JSON offset ﬁle.</p>
   */
  Blob?: Uint8Array;

  /**
   * <p>The content type of the sprite sheet and offsets. For example, the sprite sheet
   *             content type is <code>image/png</code>, and the sprite offset JSON document is
   *                 <code>application/json</code>. </p>
   */
  ContentType?: string;
}

export namespace GetMapSpritesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMapSpritesResponse): any => ({
    ...obj,
  });
}

export interface GetMapStyleDescriptorRequest {
  /**
   * <p>The map resource to retrieve the style descriptor from.</p>
   */
  MapName: string | undefined;
}

export namespace GetMapStyleDescriptorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMapStyleDescriptorRequest): any => ({
    ...obj,
  });
}

export interface GetMapStyleDescriptorResponse {
  /**
   * <p>Contains the body of the style descriptor.</p>
   */
  Blob?: Uint8Array;

  /**
   * <p>The style descriptor's content type. For example,
   *             <code>application/json</code>.</p>
   */
  ContentType?: string;
}

export namespace GetMapStyleDescriptorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMapStyleDescriptorResponse): any => ({
    ...obj,
  });
}

export interface GetMapTileRequest {
  /**
   * <p>The map resource to retrieve the map tiles from.</p>
   */
  MapName: string | undefined;

  /**
   * <p>The zoom value for the map tile.</p>
   */
  Z: string | undefined;

  /**
   * <p>The X axis value for the map tile.</p>
   */
  X: string | undefined;

  /**
   * <p>The Y axis value for the map tile. </p>
   */
  Y: string | undefined;
}

export namespace GetMapTileRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMapTileRequest): any => ({
    ...obj,
  });
}

export interface GetMapTileResponse {
  /**
   * <p>Contains Mapbox Vector Tile (MVT) data.</p>
   */
  Blob?: Uint8Array;

  /**
   * <p>The map tile's content type. For example,
   *                 <code>application/vnd.mapbox-vector-tile</code>.</p>
   */
  ContentType?: string;
}

export namespace GetMapTileResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMapTileResponse): any => ({
    ...obj,
  });
}

export interface ListMapsRequest {
  /**
   * <p>An optional limit for the number of resources returned in a single call. </p>
   *         <p>Default value: <code>100</code>
   *          </p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token specifying which page of results to return in the response. If no
   *             token is provided, the default page is the first page.</p>
   *         <p>Default value: <code>null</code>
   *          </p>
   */
  NextToken?: string;
}

export namespace ListMapsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMapsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains details of an existing map resource in your AWS account.</p>
 */
export interface ListMapsResponseEntry {
  /**
   * <p>The name of the associated map resource.</p>
   */
  MapName: string | undefined;

  /**
   * <p>The description for the map resource.</p>
   */
  Description: string | undefined;

  /**
   * <p>Specifies the data provider for the associated map tiles.</p>
   */
  DataSource: string | undefined;

  /**
   * <p>The pricing plan for the specified map resource.</p>
   *         <p>For additional details and restrictions on each pricing plan option, see the <a href="https://aws.amazon.com/location/pricing/">Amazon Location Service pricing
   *             page</a>.</p>
   */
  PricingPlan: PricingPlan | string | undefined;

  /**
   * <p>The timestamp for when the map resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>.</p>
   */
  CreateTime: Date | undefined;

  /**
   * <p>The timestamp for when the map resource was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>.</p>
   */
  UpdateTime: Date | undefined;
}

export namespace ListMapsResponseEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMapsResponseEntry): any => ({
    ...obj,
  });
}

export interface ListMapsResponse {
  /**
   * <p>Contains a list of maps in your AWS account</p>
   */
  Entries: ListMapsResponseEntry[] | undefined;

  /**
   * <p>A pagination token indicating there are additional pages available. You can use the token in a following request to fetch the next set of results. </p>
   */
  NextToken?: string;
}

export namespace ListMapsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMapsResponse): any => ({
    ...obj,
  });
}

export interface ListPlaceIndexesRequest {
  /**
   * <p>An optional limit for the maximum number of results returned in a single call.</p>
   *          <p>Default value: <code>100</code>
   *          </p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token specifying which page of results to return in the response. If no
   *          token is provided, the default page is the first page.</p>
   *          <p>Default value: <code>null</code>
   *          </p>
   */
  NextToken?: string;
}

export namespace ListPlaceIndexesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPlaceIndexesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A Place index resource listed in your AWS account.</p>
 */
export interface ListPlaceIndexesResponseEntry {
  /**
   * <p>The name of the Place index resource.</p>
   */
  IndexName: string | undefined;

  /**
   * <p>The optional description for the Place index resource.</p>
   */
  Description: string | undefined;

  /**
   * <p>The data provider of geospatial data. Indicates one of the available providers:</p>
   *          <ul>
   *             <li>
   *                <p>Esri</p>
   *             </li>
   *             <li>
   *                <p>HERE</p>
   *             </li>
   *          </ul>
   *          <p>For additional details on data providers, see the <a href="https://docs.aws.amazon.com/location/latest/developerguide/what-is-data-provider.html">Amazon Location Service data providers page</a>.</p>
   */
  DataSource: string | undefined;

  /**
   * <p>The pricing plan for the specified Place index resource.</p>
   *          <p>For additional details and restrictions on each pricing plan option, see the <a href="https://aws.amazon.com/location/pricing/">Amazon Location Service pricing
   *          page</a>.</p>
   */
  PricingPlan: PricingPlan | string | undefined;

  /**
   * <p>The timestamp for when the Place index resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format:
   *             <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
   */
  CreateTime: Date | undefined;

  /**
   * <p>The timestamp for when the Place index resource was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format:
   *             <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
   */
  UpdateTime: Date | undefined;
}

export namespace ListPlaceIndexesResponseEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPlaceIndexesResponseEntry): any => ({
    ...obj,
  });
}

export interface ListPlaceIndexesResponse {
  /**
   * <p>Lists the Place index resources that exist in your AWS account</p>
   */
  Entries: ListPlaceIndexesResponseEntry[] | undefined;

  /**
   * <p>A pagination token indicating there are additional pages available. You can use the
   *          token in a following request to fetch the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListPlaceIndexesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPlaceIndexesResponse): any => ({
    ...obj,
  });
}

export interface ListTrackerConsumersRequest {
  /**
   * <p>The tracker resource whose associated geofence collections you want to list.</p>
   */
  TrackerName: string | undefined;

  /**
   * <p>An optional limit for the number of resources returned in a single call. </p>
   *         <p>Default value: <code>100</code>
   *          </p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token specifying which page of results to return in the response. If no
   *             token is provided, the default page is the first page. </p>
   *          <p>Default value: <code>null</code>
   *          </p>
   */
  NextToken?: string;
}

export namespace ListTrackerConsumersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTrackerConsumersRequest): any => ({
    ...obj,
  });
}

export interface ListTrackerConsumersResponse {
  /**
   * <p>Contains the list of geofence collection ARNs associated to the tracker resource.</p>
   */
  ConsumerArns: string[] | undefined;

  /**
   * <p>A pagination token indicating there are additional pages available. You can use the
   *             token in a following request to fetch the next set of results. </p>
   */
  NextToken?: string;
}

export namespace ListTrackerConsumersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTrackerConsumersResponse): any => ({
    ...obj,
  });
}

export interface ListTrackersRequest {
  /**
   * <p>An optional limit for the number of resources returned in a single call. </p>
   *         <p>Default value: <code>100</code>
   *          </p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token specifying which page of results to return in the response. If no
   *             token is provided, the default page is the first page. </p>
   *         <p>Default value: <code>null</code>
   *          </p>
   */
  NextToken?: string;
}

export namespace ListTrackersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTrackersRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the tracker resource details.</p>
 */
export interface ListTrackersResponseEntry {
  /**
   * <p>The name of the tracker resource.</p>
   */
  TrackerName: string | undefined;

  /**
   * <p>The description for the tracker resource.</p>
   */
  Description: string | undefined;

  /**
   * <p>The pricing plan for the specified tracker resource.</p>
   *         <p>For additional details and restrictions on each pricing plan option, see the <a href="https://aws.amazon.com/location/pricing/">Amazon Location Service pricing
   *             page</a>.</p>
   */
  PricingPlan: PricingPlan | string | undefined;

  /**
   * <p>The data source selected for the tracker resource and associated pricing plan.</p>
   */
  PricingPlanDataSource?: string;

  /**
   * <p>The timestamp for when the tracker resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
   */
  CreateTime: Date | undefined;

  /**
   * <p>The timestamp at which the device's position was determined. Uses <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a>
   *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
   */
  UpdateTime: Date | undefined;
}

export namespace ListTrackersResponseEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTrackersResponseEntry): any => ({
    ...obj,
  });
}

export interface ListTrackersResponse {
  /**
   * <p>Contains tracker resources in your AWS account. Details include tracker name,
   *             description and timestamps for when the tracker was created and last updated.</p>
   */
  Entries: ListTrackersResponseEntry[] | undefined;

  /**
   * <p>A pagination token indicating there are additional pages available. You can use the
   *             token in a following request to fetch the next set of results.  </p>
   */
  NextToken?: string;
}

export namespace ListTrackersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTrackersResponse): any => ({
    ...obj,
  });
}

export interface SearchPlaceIndexForPositionRequest {
  /**
   * <p>The name of the Place index resource you want to use for the search.</p>
   */
  IndexName: string | undefined;

  /**
   * <p>Specifies a coordinate for the query defined by a longitude, and latitude.</p>
   *          <ul>
   *             <li>
   *                <p>The first position is the X coordinate, or longitude.</p>
   *             </li>
   *             <li>
   *                <p>The second position is the Y coordinate, or latitude. </p>
   *             </li>
   *          </ul>
   *          <p>For example, <code>position=xLongitude&amp;position=yLatitude</code> .</p>
   */
  Position: number[] | undefined;

  /**
   * <p>An optional paramer. The maximum number of results returned per request. </p>
   *          <p>Default value: <code>50</code>
   *          </p>
   */
  MaxResults?: number;
}

export namespace SearchPlaceIndexForPositionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchPlaceIndexForPositionRequest): any => ({
    ...obj,
    ...(obj.Position && { Position: SENSITIVE_STRING }),
  });
}

/**
 * <p>Places uses a point geometry to specify a location or a Place.</p>
 */
export interface PlaceGeometry {
  /**
   * <p>A single point geometry specifies a location for a Place using <a href="https://gisgeography.com/wgs84-world-geodetic-system/">WGS 84</a>
   *          coordinates:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <i>x</i> — Specifies the x coordinate or longitude. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>y</i> — Specifies the y coordinate or latitude. </p>
   *             </li>
   *          </ul>
   */
  Point?: number[];
}

export namespace PlaceGeometry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PlaceGeometry): any => ({
    ...obj,
    ...(obj.Point && { Point: SENSITIVE_STRING }),
  });
}

/**
 * <p>Contains details about addresses or points of interest that match the search
 *          criteria.</p>
 */
export interface Place {
  /**
   * <p>The full name and address of the point of interest such as a city,
   *          region, or country. For example, <code>123 Any Street, Any Town, USA</code>.</p>
   */
  Label?: string;

  /**
   * <p>Places uses a point geometry to specify a location or a Place.</p>
   */
  Geometry: PlaceGeometry | undefined;

  /**
   * <p>The numerical portion of an address, such as a building number. </p>
   */
  AddressNumber?: string;

  /**
   * <p>The name for a street or a road to identify a location. For example, <code>Main
   *          Street</code>.</p>
   */
  Street?: string;

  /**
   * <p>The name of a community district. For example, <code>Downtown</code>.</p>
   */
  Neighborhood?: string;

  /**
   * <p>A name for a local area, such as a city or town name. For example,
   *          <code>Toronto</code>.</p>
   */
  Municipality?: string;

  /**
   * <p>A country, or an area that's part of a larger region .  For example, <code>Metro
   *             Vancouver</code>.</p>
   */
  SubRegion?: string;

  /**
   * <p>A name for an area or geographical division, such as a province or state name. For
   *          example, <code>British Columbia</code>.</p>
   */
  Region?: string;

  /**
   * <p>A country/region specified using <a href="https://www.iso.org/iso-3166-country-codes.html">ISO 3166</a> 3-digit
   *          country/region code. For example, <code>CAN</code>.</p>
   */
  Country?: string;

  /**
   * <p>A group of numbers and letters in a country-specific format, which accompanies the
   *          address for the purpose of identifying a location. </p>
   */
  PostalCode?: string;
}

export namespace Place {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Place): any => ({
    ...obj,
    ...(obj.Geometry && { Geometry: PlaceGeometry.filterSensitiveLog(obj.Geometry) }),
  });
}

/**
 * <p>Specifies a single point of interest, or Place as a result of a search query obtained
 *          from a dataset configured in the Place index Resource.</p>
 */
export interface SearchForPositionResult {
  /**
   * <p>Contains details about the relevant point of interest.</p>
   */
  Place: Place | undefined;
}

export namespace SearchForPositionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchForPositionResult): any => ({
    ...obj,
    ...(obj.Place && { Place: Place.filterSensitiveLog(obj.Place) }),
  });
}

/**
 * <p>A summary of the reverse geocoding request sent using <code>SearchPlaceIndexForPosition</code>.</p>
 */
export interface SearchPlaceIndexForPositionSummary {
  /**
   * <p>The position given in the reverse geocoding request.</p>
   */
  Position: number[] | undefined;

  /**
   * <p>An optional parameter. The maximum number of results returned per request. </p>
   *          <p>Default value: <code>50</code>
   *          </p>
   */
  MaxResults?: number;

  /**
   * <p>The data provider of geospatial data. Indicates one of the available providers:</p>
   *          <ul>
   *             <li>
   *                <p>Esri</p>
   *             </li>
   *             <li>
   *                <p>HERE</p>
   *             </li>
   *          </ul>
   *          <p>For additional details on data providers, see the <a href="https://docs.aws.amazon.com/location/latest/developerguide/what-is-data-provider.html">Amazon Location Service data providers page</a>.</p>
   */
  DataSource: string | undefined;
}

export namespace SearchPlaceIndexForPositionSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchPlaceIndexForPositionSummary): any => ({
    ...obj,
    ...(obj.Position && { Position: SENSITIVE_STRING }),
  });
}

export interface SearchPlaceIndexForPositionResponse {
  /**
   * <p>Contains a summary of the request.</p>
   */
  Summary: SearchPlaceIndexForPositionSummary | undefined;

  /**
   * <p>Returns a list of Places closest to the specified position. Each result contains
   *          additional information about the Places returned.</p>
   */
  Results: SearchForPositionResult[] | undefined;
}

export namespace SearchPlaceIndexForPositionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchPlaceIndexForPositionResponse): any => ({
    ...obj,
    ...(obj.Summary && { Summary: SearchPlaceIndexForPositionSummary.filterSensitiveLog(obj.Summary) }),
    ...(obj.Results && { Results: obj.Results.map((item) => SearchForPositionResult.filterSensitiveLog(item)) }),
  });
}

export interface SearchPlaceIndexForTextRequest {
  /**
   * <p>The name of the Place index resource you want to use for the search.</p>
   */
  IndexName: string | undefined;

  /**
   * <p>The address, name,
   *          city, or region to be used in the search. In free-form text format. For example, <code>123 Any
   *             Street</code>.</p>
   */
  Text: string | undefined;

  /**
   * <p>Searches for results closest to the given position. An optional parameter defined by
   *          longitude, and latitude.</p>
   *          <ul>
   *             <li>
   *                <p>The first <code>bias</code> position is the X coordinate, or longitude.</p>
   *             </li>
   *             <li>
   *                <p>The second <code>bias</code> position is the Y coordinate, or latitude. </p>
   *             </li>
   *          </ul>
   *          <p>For example, <code>bias=xLongitude&amp;bias=yLatitude</code>.</p>
   */
  BiasPosition?: number[];

  /**
   * <p>Filters the results by returning only Places within the provided bounding box. An
   *          optional parameter.</p>
   *          <p>The first 2 <code>bbox</code> parameters describe the lower southwest corner:</p>
   *          <ul>
   *             <li>
   *                <p>The first <code>bbox</code> position is the X coordinate or longitude of the lower
   *                southwest corner.</p>
   *             </li>
   *             <li>
   *                <p>The second <code>bbox</code> position is the Y coordinate or latitude of the lower
   *                southwest corner.</p>
   *             </li>
   *          </ul>
   *          <p>For example, <code>bbox=xLongitudeSW&amp;bbox=yLatitudeSW</code>.</p>
   *          <p>The next <code>bbox</code> parameters describe the upper northeast corner:</p>
   *          <ul>
   *             <li>
   *                <p>The third <code>bbox</code> position is the X coordinate, or longitude of the
   *                upper northeast corner.</p>
   *             </li>
   *             <li>
   *                <p>The fourth <code>bbox</code> position is the Y coordinate, or longitude of the
   *                upper northeast corner.</p>
   *             </li>
   *          </ul>
   *          <p>For example, <code>bbox=xLongitudeNE&amp;bbox=yLatitudeNE</code>
   *          </p>
   */
  FilterBBox?: number[];

  /**
   * <p>Limits the search to the given a list of countries/regions. An optional
   *          parameter.</p>
   *          <ul>
   *             <li>
   *                <p>Use the <a href="https://www.iso.org/iso-3166-country-codes.html">ISO 3166</a> 3-digit
   *             country code. For example, Australia uses three upper-case characters:
   *             <code>AUS</code>.</p>
   *             </li>
   *          </ul>
   */
  FilterCountries?: string[];

  /**
   * <p>An optional parameter. The maximum number of results returned per request. </p>
   *          <p>The default: <code>50</code>
   *          </p>
   */
  MaxResults?: number;
}

export namespace SearchPlaceIndexForTextRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchPlaceIndexForTextRequest): any => ({
    ...obj,
    ...(obj.Text && { Text: SENSITIVE_STRING }),
    ...(obj.BiasPosition && { BiasPosition: SENSITIVE_STRING }),
    ...(obj.FilterBBox && { FilterBBox: SENSITIVE_STRING }),
  });
}

/**
 * <p>Contains relevant Places returned by calling
 *          <code>SearchPlaceIndexForText</code>.</p>
 */
export interface SearchForTextResult {
  /**
   * <p>Contains details about the relevant point of interest.</p>
   */
  Place: Place | undefined;
}

export namespace SearchForTextResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchForTextResult): any => ({
    ...obj,
    ...(obj.Place && { Place: Place.filterSensitiveLog(obj.Place) }),
  });
}

/**
 * <p>A summary of the geocoding request sent using <code>SearchPlaceIndexForText</code>.</p>
 */
export interface SearchPlaceIndexForTextSummary {
  /**
   * <p>The address, name, city or region to be used in the geocoding request. In free-form text
   *          format. For example, <code>Vancouver</code>.</p>
   */
  Text: string | undefined;

  /**
   * <p>Contains the coordinates for the bias position entered in the geocoding request.</p>
   */
  BiasPosition?: number[];

  /**
   * <p>Contains the coordinates for the optional bounding box coordinated entered in the
   *          geocoding request.</p>
   */
  FilterBBox?: number[];

  /**
   * <p>Contains the country filter entered in the geocoding request.</p>
   */
  FilterCountries?: string[];

  /**
   * <p>Contains the maximum number of results indicated for the request.</p>
   */
  MaxResults?: number;

  /**
   * <p>A bounding box that contains the search results within the specified area indicated by
   *             <code>FilterBBox</code>. A subset of bounding box specified using
   *             <code>FilterBBox</code>.</p>
   */
  ResultBBox?: number[];

  /**
   * <p>The data provider of geospatial data. Indicates one of the available providers:</p>
   *          <ul>
   *             <li>
   *                <p>Esri</p>
   *             </li>
   *             <li>
   *                <p>HERE</p>
   *             </li>
   *          </ul>
   *          <p>For additional details on data providers, see the <a href="https://docs.aws.amazon.com/location/latest/developerguide/what-is-data-provider.html">Amazon Location Service data providers page</a>.</p>
   */
  DataSource: string | undefined;
}

export namespace SearchPlaceIndexForTextSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchPlaceIndexForTextSummary): any => ({
    ...obj,
    ...(obj.Text && { Text: SENSITIVE_STRING }),
    ...(obj.BiasPosition && { BiasPosition: SENSITIVE_STRING }),
    ...(obj.FilterBBox && { FilterBBox: SENSITIVE_STRING }),
    ...(obj.ResultBBox && { ResultBBox: SENSITIVE_STRING }),
  });
}

export interface SearchPlaceIndexForTextResponse {
  /**
   * <p>Contains a summary of the request. Contains the <code>BiasPosition</code>,
   *          <code>DataSource</code>, <code>FilterBBox</code>, <code>FilterCountries</code>,
   *          <code>MaxResults</code>, <code>ResultBBox</code>, and <code>Text</code>.</p>
   */
  Summary: SearchPlaceIndexForTextSummary | undefined;

  /**
   * <p>A list of Places closest to the specified position. Each result contains additional
   *          information about the specific point of interest. </p>
   */
  Results: SearchForTextResult[] | undefined;
}

export namespace SearchPlaceIndexForTextResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchPlaceIndexForTextResponse): any => ({
    ...obj,
    ...(obj.Summary && { Summary: SearchPlaceIndexForTextSummary.filterSensitiveLog(obj.Summary) }),
    ...(obj.Results && { Results: obj.Results.map((item) => SearchForTextResult.filterSensitiveLog(item)) }),
  });
}
