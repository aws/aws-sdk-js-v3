// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { IoTFleetWiseServiceException as __BaseException } from "./IoTFleetWiseServiceException";

/**
 * <p>You don't have sufficient permission to perform this action.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

export enum NodeDataType {
  BOOLEAN = "BOOLEAN",
  BOOLEAN_ARRAY = "BOOLEAN_ARRAY",
  DOUBLE = "DOUBLE",
  DOUBLE_ARRAY = "DOUBLE_ARRAY",
  FLOAT = "FLOAT",
  FLOAT_ARRAY = "FLOAT_ARRAY",
  INT16 = "INT16",
  INT16_ARRAY = "INT16_ARRAY",
  INT32 = "INT32",
  INT32_ARRAY = "INT32_ARRAY",
  INT64 = "INT64",
  INT64_ARRAY = "INT64_ARRAY",
  INT8 = "INT8",
  INT8_ARRAY = "INT8_ARRAY",
  STRING = "STRING",
  STRING_ARRAY = "STRING_ARRAY",
  UINT16 = "UINT16",
  UINT16_ARRAY = "UINT16_ARRAY",
  UINT32 = "UINT32",
  UINT32_ARRAY = "UINT32_ARRAY",
  UINT64 = "UINT64",
  UINT64_ARRAY = "UINT64_ARRAY",
  UINT8 = "UINT8",
  UINT8_ARRAY = "UINT8_ARRAY",
  UNIX_TIMESTAMP = "UNIX_TIMESTAMP",
  UNIX_TIMESTAMP_ARRAY = "UNIX_TIMESTAMP_ARRAY",
  UNKNOWN = "UNKNOWN",
}

/**
 * <p>A signal that represents a vehicle device such as the engine, heater, and door locks.
 *             Data from an actuator reports the state of a certain vehicle device.</p>
 *         <note>
 *             <p> Updating actuator data can change the state of a device. For example, you can
 *                 turn on or off the heater by updating its actuator data.</p>
 *         </note>
 */
export interface Actuator {
  /**
   * <p>The fully qualified name of the actuator. For example, the fully qualified name of an
   *             actuator might be <code>Vehicle.Front.Left.Door.Lock</code>.</p>
   */
  fullyQualifiedName: string | undefined;

  /**
   * <p>The specified data type of the actuator. </p>
   */
  dataType: NodeDataType | string | undefined;

  /**
   * <p>A brief description of the actuator.</p>
   */
  description?: string;

  /**
   * <p>The scientific unit for the actuator.</p>
   */
  unit?: string;

  /**
   * <p>A list of possible values an actuator can take.</p>
   */
  allowedValues?: string[];

  /**
   * <p>The specified possible minimum value of an actuator.</p>
   */
  min?: number;

  /**
   * <p>The specified possible maximum value of an actuator.</p>
   */
  max?: number;

  /**
   * @deprecated
   *
   * <p>A specified value for the actuator.</p>
   */
  assignedValue?: string;
}

export interface AssociateVehicleFleetRequest {
  /**
   * <p> The unique ID of the vehicle to associate with the fleet. </p>
   */
  vehicleName: string | undefined;

  /**
   * <p> The ID of a fleet. </p>
   */
  fleetId: string | undefined;
}

export interface AssociateVehicleFleetResponse {}

/**
 * <p>The request couldn't be completed because the server temporarily failed.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * <p>The number of seconds to wait before retrying the command.</p>
   */
  retryAfterSeconds?: number;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>The resource wasn't found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The identifier of the resource that wasn't found.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>The type of resource that wasn't found.</p>
   */
  resourceType: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p>The request couldn't be completed due to throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * <p>The quota identifier of the applied throttling rules for this request.</p>
   */
  quotaCode?: string;

  /**
   * <p>The code for the service that couldn't be completed due to throttling.</p>
   */
  serviceCode?: string;

  /**
   * <p>The number of seconds to wait before retrying the command.</p>
   */
  retryAfterSeconds?: number;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.quotaCode = opts.quotaCode;
    this.serviceCode = opts.serviceCode;
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>A validation error due to mismatch between the expected data type, length, or pattern
 *             of the parameter and the input.</p>
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the parameter field with the validation error.</p>
   */
  name: string | undefined;

  /**
   * <p>A message about the validation error.</p>
   */
  message: string | undefined;
}

export enum ValidationExceptionReason {
  CANNOT_PARSE = "cannotParse",
  FIELD_VALIDATION_FAILED = "fieldValidationFailed",
  OTHER = "other",
  UNKNOWN_OPERATION = "unknownOperation",
}

/**
 * <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>The reason the input failed to satisfy the constraints specified by an Amazon Web Services service.</p>
   */
  reason?: ValidationExceptionReason | string;

  /**
   * <p>The list of fields that fail to satisfy the constraints specified by an Amazon Web Services service.</p>
   */
  fieldList?: ValidationExceptionField[];

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.reason = opts.reason;
    this.fieldList = opts.fieldList;
  }
}

/**
 * <p>A signal that represents static information about the vehicle, such as engine type or
 *             manufacturing date.</p>
 */
export interface Attribute {
  /**
   * <p>The fully qualified name of the attribute. For example, the fully qualified name of an
   *             attribute might be <code>Vehicle.Body.Engine.Type</code>.</p>
   */
  fullyQualifiedName: string | undefined;

  /**
   * <p>The specified data type of the attribute. </p>
   */
  dataType: NodeDataType | string | undefined;

  /**
   * <p>A brief description of the attribute.</p>
   */
  description?: string;

  /**
   * <p>The scientific unit for the attribute.</p>
   */
  unit?: string;

  /**
   * <p>A list of possible values an attribute can be assigned.</p>
   */
  allowedValues?: string[];

  /**
   * <p>The specified possible minimum value of the attribute.</p>
   */
  min?: number;

  /**
   * <p>The specified possible maximum value of the attribute.</p>
   */
  max?: number;

  /**
   * @deprecated
   *
   * <p>A specified value for the attribute.</p>
   */
  assignedValue?: string;

  /**
   * <p>The default value of the attribute.</p>
   */
  defaultValue?: string;
}

export enum VehicleAssociationBehavior {
  CREATE_IOT_THING = "CreateIotThing",
  VALIDATE_IOT_THING_EXISTS = "ValidateIotThingExists",
}

/**
 * <p>A set of key/value pairs that are used to manage the resource.</p>
 */
export interface Tag {
  /**
   * <p>The tag's key.</p>
   */
  Key: string | undefined;

  /**
   * <p>The tag's value.</p>
   */
  Value: string | undefined;
}

/**
 * <p>Information about the vehicle to create.</p>
 */
export interface CreateVehicleRequestItem {
  /**
   * <p>The unique ID of the vehicle to create.</p>
   */
  vehicleName: string | undefined;

  /**
   * <p>The ARN of the vehicle model (model manifest) to create the vehicle from.</p>
   */
  modelManifestArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a decoder manifest associated with the vehicle to create.
   *         </p>
   */
  decoderManifestArn: string | undefined;

  /**
   * <p>Static information about a vehicle in a key-value pair. For example: <code>"engine
   *                 Type"</code> : <code>"v6"</code>
   *          </p>
   */
  attributes?: Record<string, string>;

  /**
   * <p>An option to create a new Amazon Web Services IoT thing when creating a vehicle, or to validate an
   *             existing thing as a vehicle.</p>
   */
  associationBehavior?: VehicleAssociationBehavior | string;

  /**
   * <p>Metadata which can be used to manage the vehicle.</p>
   */
  tags?: Tag[];
}

export interface BatchCreateVehicleRequest {
  /**
   * <p> A list of information about each vehicle to create. For more information, see the
   *                  API data type.</p>
   */
  vehicles: CreateVehicleRequestItem[] | undefined;
}

/**
 * <p>An HTTP error resulting from creating a vehicle.</p>
 */
export interface CreateVehicleError {
  /**
   * <p>The ID of the vehicle with the error.</p>
   */
  vehicleName?: string;

  /**
   * <p>An HTTP error code.</p>
   */
  code?: string;

  /**
   * <p>A description of the HTTP error.</p>
   */
  message?: string;
}

/**
 * <p>Information about a created vehicle.</p>
 */
export interface CreateVehicleResponseItem {
  /**
   * <p>The unique ID of the vehicle to create.</p>
   */
  vehicleName?: string;

  /**
   * <p>The ARN of the created vehicle.</p>
   */
  arn?: string;

  /**
   * <p>The ARN of a created or validated Amazon Web Services IoT thing.</p>
   */
  thingArn?: string;
}

export interface BatchCreateVehicleResponse {
  /**
   * <p> A list of information about a batch of created vehicles. For more information, see
   *             the  API data type.</p>
   */
  vehicles?: CreateVehicleResponseItem[];

  /**
   * <p>A list of information about creation errors, or an empty list if there aren't any
   *             errors. </p>
   */
  errors?: CreateVehicleError[];
}

/**
 * <p>A service quota was exceeded. </p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The identifier of the resource that was exceeded.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>The type of resource that was exceeded.</p>
   */
  resourceType: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

export enum UpdateMode {
  MERGE = "Merge",
  OVERWRITE = "Overwrite",
}

/**
 * <p>Information about the vehicle to update.</p>
 */
export interface UpdateVehicleRequestItem {
  /**
   * <p>The unique ID of the vehicle to update.</p>
   */
  vehicleName: string | undefined;

  /**
   * <p>The ARN of the vehicle model (model manifest) associated with the vehicle to update.</p>
   */
  modelManifestArn?: string;

  /**
   * <p>The ARN of the signal decoder manifest associated with the vehicle to update.</p>
   */
  decoderManifestArn?: string;

  /**
   * <p>Static information about a vehicle in a key-value pair. For example:</p>
   *         <p>
   *             <code>"engineType"</code> : <code>"1.3 L R2"</code>
   *          </p>
   */
  attributes?: Record<string, string>;

  /**
   * <p>The method the specified attributes will update the existing attributes on the
   *             vehicle. Use<code>Overwite</code> to replace the vehicle attributes with the specified
   *             attributes. Or use <code>Merge</code> to combine all attributes.</p>
   *         <p>This is required if attributes are present in the input.</p>
   */
  attributeUpdateMode?: UpdateMode | string;
}

export interface BatchUpdateVehicleRequest {
  /**
   * <p> A list of information about the vehicles to update. For more information, see the
   *                  API data type.</p>
   */
  vehicles: UpdateVehicleRequestItem[] | undefined;
}

/**
 * <p>An HTTP error resulting from updating the description for a vehicle.</p>
 */
export interface UpdateVehicleError {
  /**
   * <p>The ID of the vehicle with the error.</p>
   */
  vehicleName?: string;

  /**
   * <p>The relevant HTTP error code (400+).</p>
   */
  code?: number;

  /**
   * <p>A message associated with the error.</p>
   */
  message?: string;
}

/**
 * <p>Information about the updated vehicle.</p>
 */
export interface UpdateVehicleResponseItem {
  /**
   * <p>The unique ID of the updated vehicle.</p>
   */
  vehicleName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the updated vehicle.</p>
   */
  arn?: string;
}

export interface BatchUpdateVehicleResponse {
  /**
   * <p> A list of information about the batch of updated vehicles. </p>
   *         <note>
   *             <p>This list contains only unique IDs for the vehicles that were updated.</p>
   *         </note>
   */
  vehicles?: UpdateVehicleResponseItem[];

  /**
   * <p>A list of information about errors returned while updating a batch of vehicles, or, if
   *             there aren't any errors, an empty list.</p>
   */
  errors?: UpdateVehicleError[];
}

/**
 * <p>A group of signals that are defined in a hierarchical structure.</p>
 */
export interface Branch {
  /**
   * <p>The fully qualified name of the branch. For example, the fully qualified name of a
   *             branch might be <code>Vehicle.Body.Engine</code>.</p>
   */
  fullyQualifiedName: string | undefined;

  /**
   * <p>A brief description of the branch.</p>
   */
  description?: string;
}

/**
 * <p>The request has conflicting operations. This can occur if you're trying to perform
 *             more than one operation on the same resource at the same time.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>The resource on which there are conflicting operations.</p>
   */
  resource: string | undefined;

  /**
   * <p>The type of resource on which there are conflicting operations..</p>
   */
  resourceType: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.resource = opts.resource;
    this.resourceType = opts.resourceType;
  }
}

export enum TriggerMode {
  ALWAYS = "ALWAYS",
  RISING_EDGE = "RISING_EDGE",
}

/**
 * <p>Information about a collection scheme that uses a simple logical expression to
 *             recognize what data to collect.</p>
 */
export interface ConditionBasedCollectionScheme {
  /**
   * <p>The logical expression used to recognize what data to collect. For example,
   *                 <code>$variable.Vehicle.OutsideAirTemperature &gt;= 105.0</code>.</p>
   */
  expression: string | undefined;

  /**
   * <p>The minimum duration of time between two triggering events to collect data, in
   *             milliseconds.</p>
   *         <note>
   *             <p>If a signal changes often, you might want to collect data at a slower rate.</p>
   *         </note>
   */
  minimumTriggerIntervalMs?: number;

  /**
   * <p>Whether to collect data for all triggering events (<code>ALWAYS</code>). Specify
   *                 (<code>RISING_EDGE</code>), or specify only when the condition first evaluates to
   *             false. For example, triggering on "AirbagDeployed"; Users aren't interested on
   *             triggering when the airbag is already exploded; they only care about the change from not
   *             deployed =&gt; deployed.</p>
   */
  triggerMode?: TriggerMode | string;

  /**
   * <p>Specifies the version of the conditional expression language.</p>
   */
  conditionLanguageVersion?: number;
}

/**
 * <p>Information about a collection scheme that uses a time period to decide how often to
 *             collect data.</p>
 */
export interface TimeBasedCollectionScheme {
  /**
   * <p>The time period (in milliseconds) to decide how often to collect data. For example,
   *             if the time period is <code>60000</code>, the Edge Agent software collects data once
   *             every minute.</p>
   */
  periodMs: number | undefined;
}

/**
 * <p>Specifies what data to collect and how often or when to collect it.</p>
 */
export type CollectionScheme =
  | CollectionScheme.ConditionBasedCollectionSchemeMember
  | CollectionScheme.TimeBasedCollectionSchemeMember
  | CollectionScheme.$UnknownMember;

export namespace CollectionScheme {
  /**
   * <p>Information about a collection scheme that uses a time period to decide how often to
   *             collect data.</p>
   */
  export interface TimeBasedCollectionSchemeMember {
    timeBasedCollectionScheme: TimeBasedCollectionScheme;
    conditionBasedCollectionScheme?: never;
    $unknown?: never;
  }

  /**
   * <p>Information about a collection scheme that uses a simple logical expression to
   *             recognize what data to collect.</p>
   */
  export interface ConditionBasedCollectionSchemeMember {
    timeBasedCollectionScheme?: never;
    conditionBasedCollectionScheme: ConditionBasedCollectionScheme;
    $unknown?: never;
  }

  export interface $UnknownMember {
    timeBasedCollectionScheme?: never;
    conditionBasedCollectionScheme?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    timeBasedCollectionScheme: (value: TimeBasedCollectionScheme) => T;
    conditionBasedCollectionScheme: (value: ConditionBasedCollectionScheme) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: CollectionScheme, visitor: Visitor<T>): T => {
    if (value.timeBasedCollectionScheme !== undefined)
      return visitor.timeBasedCollectionScheme(value.timeBasedCollectionScheme);
    if (value.conditionBasedCollectionScheme !== undefined)
      return visitor.conditionBasedCollectionScheme(value.conditionBasedCollectionScheme);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

export enum Compression {
  OFF = "OFF",
  SNAPPY = "SNAPPY",
}

export enum DiagnosticsMode {
  OFF = "OFF",
  SEND_ACTIVE_DTCS = "SEND_ACTIVE_DTCS",
}

/**
 * <p>Information about a signal.</p>
 */
export interface SignalInformation {
  /**
   * <p>The name of the signal.</p>
   */
  name: string | undefined;

  /**
   * <p>The maximum number of samples to collect.</p>
   */
  maxSampleCount?: number;

  /**
   * <p>The minimum duration of time (in milliseconds) between two triggering events to
   *             collect data.</p>
   *         <note>
   *             <p>If a signal changes often, you might want to collect data at a slower rate.</p>
   *         </note>
   */
  minimumSamplingIntervalMs?: number;
}

export enum SpoolingMode {
  OFF = "OFF",
  TO_DISK = "TO_DISK",
}

export interface CreateCampaignRequest {
  /**
   * <p> The name of the campaign to create. </p>
   */
  name: string | undefined;

  /**
   * <p>An optional description of the campaign to help identify its purpose.</p>
   */
  description?: string;

  /**
   * <p>(Optional) The Amazon Resource Name (ARN) of the signal catalog to associate with the campaign.
   *         </p>
   */
  signalCatalogArn: string | undefined;

  /**
   * <p> The ARN of the vehicle or fleet to deploy a campaign to. </p>
   */
  targetArn: string | undefined;

  /**
   * <p>(Optional) The time, in milliseconds, to deliver a campaign after it was approved. If
   *             it's not specified, <code>0</code> is used.</p>
   *         <p>Default: <code>0</code>
   *          </p>
   */
  startTime?: Date;

  /**
   * <p> (Optional) The time the campaign expires, in seconds since epoch (January 1, 1970 at
   *             midnight UTC time). Vehicle data won't be collected after the campaign expires. </p>
   *         <p>Default: 253402214400 (December 31, 9999, 00:00:00 UTC)</p>
   */
  expiryTime?: Date;

  /**
   * <p> (Optional) How long (in milliseconds) to collect raw data after a triggering event
   *             initiates the collection. If it's not specified, <code>0</code> is used.</p>
   *         <p>Default: <code>0</code>
   *          </p>
   */
  postTriggerCollectionDuration?: number;

  /**
   * <p> (Optional) Option for a vehicle to send diagnostic trouble codes to Amazon Web Services IoT FleetWise. If you
   *             want to send diagnostic trouble codes, use <code>SEND_ACTIVE_DTCS</code>. If it's not
   *             specified, <code>OFF</code> is used.</p>
   *         <p>Default: <code>OFF</code>
   *          </p>
   */
  diagnosticsMode?: DiagnosticsMode | string;

  /**
   * <p>(Optional) Whether to store collected data after a vehicle lost a connection with the
   *             cloud. After a connection is re-established, the data is automatically forwarded to
   *             Amazon Web Services IoT FleetWise. If you want to store collected data when a vehicle loses connection with the
   *             cloud, use <code>TO_DISK</code>. If it's not specified, <code>OFF</code> is used.</p>
   *         <p>Default: <code>OFF</code>
   *          </p>
   */
  spoolingMode?: SpoolingMode | string;

  /**
   * <p> (Optional) Whether to compress signals before transmitting data to Amazon Web Services IoT FleetWise. If you
   *             don't want to compress the signals, use <code>OFF</code>. If it's not specified,
   *                 <code>SNAPPY</code> is used. </p>
   *         <p>Default: <code>SNAPPY</code>
   *          </p>
   */
  compression?: Compression | string;

  /**
   * <p>(Optional) A number indicating the priority of one campaign over another campaign for
   *             a certain vehicle or fleet. A campaign with the lowest value is deployed to vehicles
   *             before any other campaigns. If it's not specified, <code>0</code> is used. </p>
   *         <p>Default: <code>0</code>
   *          </p>
   */
  priority?: number;

  /**
   * <p>(Optional) A list of information about signals to collect. </p>
   */
  signalsToCollect?: SignalInformation[];

  /**
   * <p> The data collection scheme associated with the campaign. You can specify a scheme
   *             that collects data based on time or an event.</p>
   */
  collectionScheme: CollectionScheme | undefined;

  /**
   * <p> (Optional) A list of vehicle attributes to associate with a campaign. </p>
   *         <p>Enrich the data with specified vehicle attributes. For example, add <code>make</code> and <code>model</code> to the campaign, and Amazon Web Services IoT FleetWise will associate the data with those attributes as dimensions in Amazon Timestream. You can then query the data against <code>make</code> and <code>model</code>.</p>
   *         <p>Default: An empty array</p>
   */
  dataExtraDimensions?: string[];

  /**
   * <p>Metadata that can be used to manage the campaign.</p>
   */
  tags?: Tag[];
}

export interface CreateCampaignResponse {
  /**
   * <p>The name of the created campaign.</p>
   */
  name?: string;

  /**
   * <p> The ARN of the created campaign. </p>
   */
  arn?: string;
}

export interface DeleteCampaignRequest {
  /**
   * <p> The name of the campaign to delete. </p>
   */
  name: string | undefined;
}

export interface DeleteCampaignResponse {
  /**
   * <p>The name of the deleted campaign.</p>
   */
  name?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the deleted campaign.</p>
   *         <note>
   *             <p>The ARN isn’t returned if a campaign doesn’t exist.</p>
   *         </note>
   */
  arn?: string;
}

export interface GetCampaignRequest {
  /**
   * <p> The name of the campaign to retrieve information about. </p>
   */
  name: string | undefined;
}

export enum CampaignStatus {
  CREATING = "CREATING",
  RUNNING = "RUNNING",
  SUSPENDED = "SUSPENDED",
  WAITING_FOR_APPROVAL = "WAITING_FOR_APPROVAL",
}

export interface GetCampaignResponse {
  /**
   * <p>The name of the campaign.</p>
   */
  name?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the campaign. </p>
   */
  arn?: string;

  /**
   * <p>The description of the campaign.</p>
   */
  description?: string;

  /**
   * <p> The ARN of a signal catalog. </p>
   */
  signalCatalogArn?: string;

  /**
   * <p> The ARN of the vehicle or the fleet targeted by the campaign. </p>
   */
  targetArn?: string;

  /**
   * <p>The state of the campaign. The status can be one of: <code>CREATING</code>,
   *                 <code>WAITING_FOR_APPROVAL</code>, <code>RUNNING</code>, and <code>SUSPENDED</code>.
   *         </p>
   */
  status?: CampaignStatus | string;

  /**
   * <p> The time, in milliseconds, to deliver a campaign after it was approved.</p>
   */
  startTime?: Date;

  /**
   * <p> The time the campaign expires, in seconds since epoch (January 1, 1970 at midnight
   *             UTC time). Vehicle data won't be collected after the campaign expires.</p>
   */
  expiryTime?: Date;

  /**
   * <p> How long (in seconds) to collect raw data after a triggering event initiates the
   *             collection. </p>
   */
  postTriggerCollectionDuration?: number;

  /**
   * <p> Option for a vehicle to send diagnostic trouble codes to Amazon Web Services IoT FleetWise. </p>
   */
  diagnosticsMode?: DiagnosticsMode | string;

  /**
   * <p> Whether to store collected data after a vehicle lost a connection with the cloud.
   *             After a connection is re-established, the data is automatically forwarded to Amazon Web Services IoT FleetWise.
   *         </p>
   */
  spoolingMode?: SpoolingMode | string;

  /**
   * <p> Whether to compress signals before transmitting data to Amazon Web Services IoT FleetWise. If
   *                 <code>OFF</code> is specified, the signals aren't compressed. If it's not specified,
   *                 <code>SNAPPY</code> is used. </p>
   */
  compression?: Compression | string;

  /**
   * <p> A number indicating the priority of one campaign over another campaign for a certain
   *             vehicle or fleet. A campaign with the lowest value is deployed to vehicles before any
   *             other campaigns.</p>
   */
  priority?: number;

  /**
   * <p> Information about a list of signals to collect data on. </p>
   */
  signalsToCollect?: SignalInformation[];

  /**
   * <p> Information about the data collection scheme associated with the campaign. </p>
   */
  collectionScheme?: CollectionScheme;

  /**
   * <p> A list of vehicle attributes associated with the campaign. </p>
   */
  dataExtraDimensions?: string[];

  /**
   * <p> The time the campaign was created in seconds since epoch (January 1, 1970 at midnight
   *             UTC time). </p>
   */
  creationTime?: Date;

  /**
   * <p>The last time the campaign was modified.</p>
   */
  lastModificationTime?: Date;
}

export interface ListCampaignsRequest {
  /**
   * <p>A pagination token for the next set of results.</p>
   *          <p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value. </p>
   */
  nextToken?: string;

  /**
   * <p> The maximum number of items to return, between 1 and 100, inclusive. </p>
   */
  maxResults?: number;

  /**
   * <p>Optional parameter to filter the results by the status of each created campaign in
   *             your account. The status can be one of: <code>CREATING</code>,
   *                 <code>WAITING_FOR_APPROVAL</code>, <code>RUNNING</code>, or
   *             <code>SUSPENDED</code>.</p>
   */
  status?: string;
}

/**
 * <p>Information about a campaign. </p>
 *         <p>You can use the  API operation to return this
 *             information about multiple created campaigns.</p>
 */
export interface CampaignSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of a campaign.</p>
   */
  arn?: string;

  /**
   * <p>The name of a campaign.</p>
   */
  name?: string;

  /**
   * <p>The description of the campaign.</p>
   */
  description?: string;

  /**
   * <p>The ARN of the signal catalog associated with the campaign.</p>
   */
  signalCatalogArn?: string;

  /**
   * <p>The ARN of a vehicle or fleet to which the campaign is deployed.</p>
   */
  targetArn?: string;

  /**
   * <p>The state of a campaign. The status can be one of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>CREATING</code> - Amazon Web Services IoT FleetWise is processing your request to create the
   *                     campaign.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>WAITING_FOR_APPROVAL</code> - After a campaign is created, it enters the
   *                         <code>WAITING_FOR_APPROVAL</code> state. To allow Amazon Web Services IoT FleetWise to deploy the
   *                     campaign to the target vehicle or fleet, use the  API operation to approve the campaign.
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>RUNNING</code> - The campaign is active. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>SUSPENDED</code> - The campaign is suspended. To resume the campaign, use
   *                     the  API operation. </p>
   *             </li>
   *          </ul>
   */
  status?: CampaignStatus | string;

  /**
   * <p>The time the campaign was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * <p>The last time the campaign was modified.</p>
   */
  lastModificationTime: Date | undefined;
}

export interface ListCampaignsResponse {
  /**
   * <p> A summary of information about each campaign. </p>
   */
  campaignSummaries?: CampaignSummary[];

  /**
   * <p> The token to retrieve the next set of results, or <code>null</code> if there are no more results. </p>
   */
  nextToken?: string;
}

export enum UpdateCampaignAction {
  APPROVE = "APPROVE",
  RESUME = "RESUME",
  SUSPEND = "SUSPEND",
  UPDATE = "UPDATE",
}

export interface UpdateCampaignRequest {
  /**
   * <p> The name of the campaign to update. </p>
   */
  name: string | undefined;

  /**
   * <p>The description of the campaign.</p>
   */
  description?: string;

  /**
   * <p> A list of vehicle attributes to associate with a signal. </p>
   *         <p>Default: An empty array</p>
   */
  dataExtraDimensions?: string[];

  /**
   * <p> Specifies how to update a campaign. The action can be one of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>APPROVE</code> - To approve delivering a data collection scheme to
   *                     vehicles. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>SUSPEND</code> - To suspend collecting signal data. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>RESUME</code> - To resume collecting signal data. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>UPDATE</code> - To update a campaign. </p>
   *             </li>
   *          </ul>
   */
  action: UpdateCampaignAction | string | undefined;
}

export interface UpdateCampaignResponse {
  /**
   * <p> The Amazon Resource Name (ARN) of the campaign. </p>
   */
  arn?: string;

  /**
   * <p>The name of the updated campaign.</p>
   */
  name?: string;

  /**
   * <p>The state of a campaign. The status can be one of:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>CREATING</code> - Amazon Web Services IoT FleetWise is processing your request to create the
   *                     campaign. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>WAITING_FOR_APPROVAL</code> - After a campaign is created, it enters the
   *                         <code>WAITING_FOR_APPROVAL</code> state. To allow Amazon Web Services IoT FleetWise to deploy the
   *                     campaign to the target vehicle or fleet, use the  API operation to approve the campaign.
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>RUNNING</code> - The campaign is active. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>SUSPENDED</code> - The campaign is suspended. To resume the campaign, use
   *                     the  API operation. </p>
   *             </li>
   *          </ul>
   */
  status?: CampaignStatus | string;
}

/**
 * <p>Configurations used to create a decoder manifest.</p>
 */
export interface CanDbcDefinition {
  /**
   * <p>Contains information about a network interface.</p>
   */
  networkInterface: string | undefined;

  /**
   * <p>A list of DBC files. You can upload only one DBC file for each network interface and
   *             specify up to five (inclusive) files in the list.</p>
   */
  canDbcFiles: Uint8Array[] | undefined;

  /**
   * <p>Pairs every signal specified in your vehicle model with a signal decoder.</p>
   */
  signalsMap?: Record<string, string>;
}

/**
 * <p>A single controller area network (CAN) device interface.</p>
 */
export interface CanInterface {
  /**
   * <p>The unique name of the interface.</p>
   */
  name: string | undefined;

  /**
   * <p>The name of the communication protocol for the interface.</p>
   */
  protocolName?: string;

  /**
   * <p>The version of the communication protocol for the interface.</p>
   */
  protocolVersion?: string;
}

/**
 * <p>Information about a single controller area network (CAN) signal and the messages it
 *             receives and transmits.</p>
 */
export interface CanSignal {
  /**
   * <p>The ID of the message.</p>
   */
  messageId: number | undefined;

  /**
   * <p>Whether the byte ordering of a CAN message is big-endian.</p>
   */
  isBigEndian: boolean | undefined;

  /**
   * <p>Whether the message data is specified as a signed value.</p>
   */
  isSigned: boolean | undefined;

  /**
   * <p>Indicates the beginning of the CAN message.</p>
   */
  startBit: number | undefined;

  /**
   * <p>Indicates where data appears in the CAN message.</p>
   */
  offset: number | undefined;

  /**
   * <p>A multiplier used to decode the CAN message.</p>
   */
  factor: number | undefined;

  /**
   * <p>How many bytes of data are in the message.</p>
   */
  length: number | undefined;

  /**
   * <p>The name of the signal.</p>
   */
  name?: string;
}

export enum LogType {
  ERROR = "ERROR",
  OFF = "OFF",
}

/**
 * <p>The log delivery option to send data to Amazon CloudWatch Logs.</p>
 */
export interface CloudWatchLogDeliveryOptions {
  /**
   * <p>The type of log to send data to Amazon CloudWatch Logs.</p>
   */
  logType: LogType | string | undefined;

  /**
   * <p>The Amazon CloudWatch Logs group the operation sends data to.</p>
   */
  logGroupName?: string;
}

/**
 * <p>A network interface that specifies the On-board diagnostic (OBD) II network protocol.</p>
 */
export interface ObdInterface {
  /**
   * <p>The name of the interface.</p>
   */
  name: string | undefined;

  /**
   * <p>The ID of the message requesting vehicle data.</p>
   */
  requestMessageId: number | undefined;

  /**
   * <p>The standard OBD II PID.</p>
   */
  obdStandard?: string;

  /**
   * <p>The maximum number message requests per second.</p>
   */
  pidRequestIntervalSeconds?: number;

  /**
   * <p>The maximum number message requests per diagnostic trouble code per second.</p>
   */
  dtcRequestIntervalSeconds?: number;

  /**
   * <p>Whether to use extended IDs in the message.</p>
   */
  useExtendedIds?: boolean;

  /**
   * <p>Whether the vehicle has a transmission control module (TCM).</p>
   */
  hasTransmissionEcu?: boolean;
}

export enum NetworkInterfaceType {
  CAN_INTERFACE = "CAN_INTERFACE",
  OBD_INTERFACE = "OBD_INTERFACE",
}

/**
 * <p>Represents a node and its specifications in an in-vehicle communication network. All
 *             signal decoders must be associated with a network node. </p>
 *         <p> To return this information about all the network interfaces specified in a decoder
 *             manifest, use the  API
 *             operation.</p>
 */
export interface NetworkInterface {
  /**
   * <p>The ID of the network interface.</p>
   */
  interfaceId: string | undefined;

  /**
   * <p>The network protocol for the vehicle. For example, <code>CAN_SIGNAL</code> specifies
   *             a protocol that defines how data is communicated between electronic control units
   *             (ECUs). <code>OBD_SIGNAL</code> specifies a protocol that defines how self-diagnostic
   *             data is communicated between ECUs.</p>
   */
  type: NetworkInterfaceType | string | undefined;

  /**
   * <p>Information about a network interface specified by the Controller Area Network (CAN)
   *             protocol.</p>
   */
  canInterface?: CanInterface;

  /**
   * <p>Information about a network interface specified by the On-board diagnostic (OBD) II
   *             protocol.</p>
   */
  obdInterface?: ObdInterface;
}

/**
 * <p>Information about signal messages using the on-board diagnostics (OBD) II protocol in
 *             a vehicle.</p>
 */
export interface ObdSignal {
  /**
   * <p>The length of the requested data.</p>
   */
  pidResponseLength: number | undefined;

  /**
   * <p>The mode of operation (diagnostic service) in a message.</p>
   */
  serviceMode: number | undefined;

  /**
   * <p>The diagnostic code used to request data from a vehicle for this signal.</p>
   */
  pid: number | undefined;

  /**
   * <p>A multiplier used to decode the message.</p>
   */
  scaling: number | undefined;

  /**
   * <p>Indicates where data appears in the message.</p>
   */
  offset: number | undefined;

  /**
   * <p>Indicates the beginning of the message.</p>
   */
  startByte: number | undefined;

  /**
   * <p>The length of a message.</p>
   */
  byteLength: number | undefined;

  /**
   * <p>The number of positions to shift bits in the message.</p>
   */
  bitRightShift?: number;

  /**
   * <p>The number of bits to mask in a message.</p>
   */
  bitMaskLength?: number;
}

export enum SignalDecoderType {
  CAN_SIGNAL = "CAN_SIGNAL",
  OBD_SIGNAL = "OBD_SIGNAL",
}

/**
 * <p>Information about a signal decoder.</p>
 */
export interface SignalDecoder {
  /**
   * <p>The fully qualified name of a signal decoder as defined in a vehicle model.</p>
   */
  fullyQualifiedName: string | undefined;

  /**
   * <p>The network protocol for the vehicle. For example, <code>CAN_SIGNAL</code> specifies
   *             a protocol that defines how data is communicated between electronic control units
   *             (ECUs). <code>OBD_SIGNAL</code> specifies a protocol that defines how self-diagnostic
   *             data is communicated between ECUs.</p>
   */
  type: SignalDecoderType | string | undefined;

  /**
   * <p>The ID of a network interface that specifies what network protocol a vehicle follows.</p>
   */
  interfaceId: string | undefined;

  /**
   * <p>Information about signal decoder using the Controller Area Network (CAN) protocol.</p>
   */
  canSignal?: CanSignal;

  /**
   * <p>Information about signal decoder using the On-board diagnostic (OBD) II protocol.</p>
   */
  obdSignal?: ObdSignal;
}

export interface CreateDecoderManifestRequest {
  /**
   * <p> The unique name of the decoder manifest to create.</p>
   */
  name: string | undefined;

  /**
   * <p> A brief description of the decoder manifest. </p>
   */
  description?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the vehicle model (model manifest). </p>
   */
  modelManifestArn: string | undefined;

  /**
   * <p> A list of information about signal decoders. </p>
   */
  signalDecoders?: SignalDecoder[];

  /**
   * <p> A list of information about available network interfaces. </p>
   */
  networkInterfaces?: NetworkInterface[];

  /**
   * <p>Metadata that can be used to manage the decoder manifest.</p>
   */
  tags?: Tag[];
}

export interface CreateDecoderManifestResponse {
  /**
   * <p> The name of the created decoder manifest. </p>
   */
  name: string | undefined;

  /**
   * <p> The ARN of the created decoder manifest. </p>
   */
  arn: string | undefined;
}

export enum NetworkInterfaceFailureReason {
  CAN_NETWORK_INTERFACE_INFO_IS_NULL = "CAN_NETWORK_INTERFACE_INFO_IS_NULL",
  CONFLICTING_NETWORK_INTERFACE = "CONFLICTING_NETWORK_INTERFACE",
  DUPLICATE_INTERFACE = "DUPLICATE_NETWORK_INTERFACE",
  NETWORK_INTERFACE_TO_ADD_ALREADY_EXISTS = "NETWORK_INTERFACE_TO_ADD_ALREADY_EXISTS",
  NETWORK_INTERFACE_TO_REMOVE_ASSOCIATED_WITH_SIGNALS = "NETWORK_INTERFACE_TO_REMOVE_ASSOCIATED_WITH_SIGNALS",
  OBD_NETWORK_INTERFACE_INFO_IS_NULL = "OBD_NETWORK_INTERFACE_INFO_IS_NULL",
}

/**
 * <p>A reason a vehicle network interface isn't valid.</p>
 */
export interface InvalidNetworkInterface {
  /**
   * <p>The ID of the interface that isn't valid.</p>
   */
  interfaceId?: string;

  /**
   * <p>A message about why the interface isn't valid. </p>
   */
  reason?: NetworkInterfaceFailureReason | string;
}

export enum SignalDecoderFailureReason {
  CAN_SIGNAL_INFO_IS_NULL = "CAN_SIGNAL_INFO_IS_NULL",
  CONFLICTING_SIGNAL = "CONFLICTING_SIGNAL",
  DUPLICATE_SIGNAL = "DUPLICATE_SIGNAL",
  NETWORK_INTERFACE_TYPE_INCOMPATIBLE_WITH_SIGNAL_DECODER_TYPE = "NETWORK_INTERFACE_TYPE_INCOMPATIBLE_WITH_SIGNAL_DECODER_TYPE",
  NO_DECODER_INFO_FOR_SIGNAL_IN_MODEL = "NO_DECODER_INFO_FOR_SIGNAL_IN_MODEL",
  OBD_SIGNAL_INFO_IS_NULL = "OBD_SIGNAL_INFO_IS_NULL",
  SIGNAL_NOT_ASSOCIATED_WITH_NETWORK_INTERFACE = "SIGNAL_NOT_ASSOCIATED_WITH_NETWORK_INTERFACE",
  SIGNAL_NOT_IN_MODEL = "SIGNAL_NOT_IN_MODEL",
  SIGNAL_TO_ADD_ALREADY_EXISTS = "SIGNAL_TO_ADD_ALREADY_EXISTS",
}

/**
 * <p>A reason that a signal decoder isn't valid.</p>
 */
export interface InvalidSignalDecoder {
  /**
   * <p>The name of a signal decoder that isn't valid.</p>
   */
  name?: string;

  /**
   * <p>A message about why the signal decoder isn't valid.</p>
   */
  reason?: SignalDecoderFailureReason | string;
}

/**
 * <p>The request couldn't be completed because it contains signal decoders with one or more validation errors.</p>
 */
export class DecoderManifestValidationException extends __BaseException {
  readonly name: "DecoderManifestValidationException" = "DecoderManifestValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>The request couldn't be completed because of invalid signals in the request.</p>
   */
  invalidSignals?: InvalidSignalDecoder[];

  /**
   * <p>The request couldn't be completed because of invalid network interfaces in the request.</p>
   */
  invalidNetworkInterfaces?: InvalidNetworkInterface[];

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DecoderManifestValidationException, __BaseException>) {
    super({
      name: "DecoderManifestValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DecoderManifestValidationException.prototype);
    this.invalidSignals = opts.invalidSignals;
    this.invalidNetworkInterfaces = opts.invalidNetworkInterfaces;
  }
}

export interface CreateFleetRequest {
  /**
   * <p> The unique ID of the fleet to create. </p>
   */
  fleetId: string | undefined;

  /**
   * <p> A brief description of the fleet to create. </p>
   */
  description?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of a signal catalog. </p>
   */
  signalCatalogArn: string | undefined;

  /**
   * <p>Metadata that can be used to manage the fleet.</p>
   */
  tags?: Tag[];
}

export interface CreateFleetResponse {
  /**
   * <p> The ID of the created fleet. </p>
   */
  id: string | undefined;

  /**
   * <p> The ARN of the created fleet. </p>
   */
  arn: string | undefined;
}

export interface CreateModelManifestRequest {
  /**
   * <p> The name of the vehicle model to create.</p>
   */
  name: string | undefined;

  /**
   * <p> A brief description of the vehicle model. </p>
   */
  description?: string;

  /**
   * <p> A list of nodes, which are a general abstraction of signals. </p>
   */
  nodes: string[] | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of a signal catalog. </p>
   */
  signalCatalogArn: string | undefined;

  /**
   * <p>Metadata that can be used to manage the vehicle model.</p>
   */
  tags?: Tag[];
}

export interface CreateModelManifestResponse {
  /**
   * <p> The name of the created vehicle model.</p>
   */
  name: string | undefined;

  /**
   * <p> The ARN of the created vehicle model.</p>
   */
  arn: string | undefined;
}

/**
 * <p>A reason that a signal isn't valid.</p>
 */
export interface InvalidSignal {
  /**
   * <p>The name of the signal that isn't valid.</p>
   */
  name?: string;

  /**
   * <p>A message about why the signal isn't valid.</p>
   */
  reason?: string;
}

/**
 * <p>The request couldn't be completed because it contains signals that aren't valid.</p>
 */
export class InvalidSignalsException extends __BaseException {
  readonly name: "InvalidSignalsException" = "InvalidSignalsException";
  readonly $fault: "client" = "client";
  /**
   * <p>The signals which caused the exception.</p>
   */
  invalidSignals?: InvalidSignal[];

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSignalsException, __BaseException>) {
    super({
      name: "InvalidSignalsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSignalsException.prototype);
    this.invalidSignals = opts.invalidSignals;
  }
}

/**
 * <p>An input component that reports the environmental condition of a vehicle.</p>
 *         <note>
 *             <p>You can collect data about fluid levels, temperatures, vibrations, or battery
 *                 voltage from sensors.</p>
 *         </note>
 */
export interface Sensor {
  /**
   * <p>The fully qualified name of the sensor. For example, the fully qualified name of a
   *             sensor might be <code>Vehicle.Body.Engine.Battery</code>.</p>
   */
  fullyQualifiedName: string | undefined;

  /**
   * <p>The specified data type of the sensor. </p>
   */
  dataType: NodeDataType | string | undefined;

  /**
   * <p>A brief description of a sensor.</p>
   */
  description?: string;

  /**
   * <p>The scientific unit of measurement for data collected by the sensor.</p>
   */
  unit?: string;

  /**
   * <p>A list of possible values a sensor can take.</p>
   */
  allowedValues?: string[];

  /**
   * <p>The specified possible minimum value of the sensor.</p>
   */
  min?: number;

  /**
   * <p>The specified possible maximum value of the sensor.</p>
   */
  max?: number;
}

/**
 * <p>A general abstraction of a signal. A node can be specified as an actuator, attribute,
 *             branch, or sensor.</p>
 */
export type Node =
  | Node.ActuatorMember
  | Node.AttributeMember
  | Node.BranchMember
  | Node.SensorMember
  | Node.$UnknownMember;

export namespace Node {
  /**
   * <p>Information about a node specified as a branch.</p>
   *         <note>
   *             <p>A group of signals that are defined in a hierarchical structure.</p>
   *         </note>
   */
  export interface BranchMember {
    branch: Branch;
    sensor?: never;
    actuator?: never;
    attribute?: never;
    $unknown?: never;
  }

  /**
   * <p>An input component that reports the environmental condition of a vehicle.</p>
   *         <note>
   *             <p>You can collect data about fluid levels, temperatures, vibrations, or battery
   *                 voltage from sensors.</p>
   *         </note>
   */
  export interface SensorMember {
    branch?: never;
    sensor: Sensor;
    actuator?: never;
    attribute?: never;
    $unknown?: never;
  }

  /**
   * <p>Information about a node specified as an actuator.</p>
   *         <note>
   *             <p>An actuator is a digital representation of a vehicle device.</p>
   *         </note>
   */
  export interface ActuatorMember {
    branch?: never;
    sensor?: never;
    actuator: Actuator;
    attribute?: never;
    $unknown?: never;
  }

  /**
   * <p>Information about a node specified as an attribute.</p>
   *         <note>
   *             <p>An attribute represents static information about a vehicle.</p>
   *         </note>
   */
  export interface AttributeMember {
    branch?: never;
    sensor?: never;
    actuator?: never;
    attribute: Attribute;
    $unknown?: never;
  }

  export interface $UnknownMember {
    branch?: never;
    sensor?: never;
    actuator?: never;
    attribute?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    branch: (value: Branch) => T;
    sensor: (value: Sensor) => T;
    actuator: (value: Actuator) => T;
    attribute: (value: Attribute) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Node, visitor: Visitor<T>): T => {
    if (value.branch !== undefined) return visitor.branch(value.branch);
    if (value.sensor !== undefined) return visitor.sensor(value.sensor);
    if (value.actuator !== undefined) return visitor.actuator(value.actuator);
    if (value.attribute !== undefined) return visitor.attribute(value.attribute);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

export interface CreateSignalCatalogRequest {
  /**
   * <p> The name of the signal catalog to create. </p>
   */
  name: string | undefined;

  /**
   * <p>A brief description of the signal catalog.</p>
   */
  description?: string;

  /**
   * <p> A list of information about nodes, which are a general abstraction of signals. For
   *             more information, see the  API data type.</p>
   */
  nodes?: Node[];

  /**
   * <p>Metadata that can be used to manage the signal catalog.</p>
   */
  tags?: Tag[];
}

export interface CreateSignalCatalogResponse {
  /**
   * <p> The name of the created signal catalog. </p>
   */
  name: string | undefined;

  /**
   * <p> The ARN of the created signal catalog. </p>
   */
  arn: string | undefined;
}

/**
 * <p>The specified node type doesn't match the expected node type for a node. You can
 *             specify the node type as branch, sensor, actuator, or attribute.</p>
 */
export class InvalidNodeException extends __BaseException {
  readonly name: "InvalidNodeException" = "InvalidNodeException";
  readonly $fault: "client" = "client";
  /**
   * <p>The specified node type isn't valid.</p>
   */
  invalidNodes?: Node[];

  /**
   * <p>The reason the node validation failed.</p>
   */
  reason?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNodeException, __BaseException>) {
    super({
      name: "InvalidNodeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNodeException.prototype);
    this.invalidNodes = opts.invalidNodes;
    this.reason = opts.reason;
  }
}

export interface CreateVehicleRequest {
  /**
   * <p> The unique ID of the vehicle to create. </p>
   */
  vehicleName: string | undefined;

  /**
   * <p> The Amazon Resource Name ARN of a vehicle model. </p>
   */
  modelManifestArn: string | undefined;

  /**
   * <p> The ARN of a decoder manifest. </p>
   */
  decoderManifestArn: string | undefined;

  /**
   * <p>Static information about a vehicle in a key-value pair. For example:
   *                 <code>"engineType"</code> : <code>"1.3 L R2"</code>
   *          </p>
   */
  attributes?: Record<string, string>;

  /**
   * <p> An option to create a new Amazon Web Services IoT thing when creating a vehicle, or to validate an
   *             existing Amazon Web Services IoT thing as a vehicle. </p>
   *         <p>Default: <code/>
   *          </p>
   */
  associationBehavior?: VehicleAssociationBehavior | string;

  /**
   * <p>Metadata that can be used to manage the vehicle.</p>
   */
  tags?: Tag[];
}

export interface CreateVehicleResponse {
  /**
   * <p>The unique ID of the created vehicle.</p>
   */
  vehicleName?: string;

  /**
   * <p> The ARN of the created vehicle. </p>
   */
  arn?: string;

  /**
   * <p> The ARN of a created or validated Amazon Web Services IoT thing. </p>
   */
  thingArn?: string;
}

export interface DeleteDecoderManifestRequest {
  /**
   * <p> The name of the decoder manifest to delete. </p>
   */
  name: string | undefined;
}

export interface DeleteDecoderManifestResponse {
  /**
   * <p>The name of the deleted decoder manifest.</p>
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the deleted decoder manifest.</p>
   */
  arn: string | undefined;
}

export interface GetDecoderManifestRequest {
  /**
   * <p> The name of the decoder manifest to retrieve information about. </p>
   */
  name: string | undefined;
}

export enum ManifestStatus {
  ACTIVE = "ACTIVE",
  DRAFT = "DRAFT",
}

export interface GetDecoderManifestResponse {
  /**
   * <p> The name of the decoder manifest. </p>
   */
  name: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the decoder manifest. </p>
   */
  arn: string | undefined;

  /**
   * <p> A brief description of the decoder manifest.</p>
   */
  description?: string;

  /**
   * <p> The ARN of a vehicle model (model manifest) associated with the decoder
   *             manifest.</p>
   */
  modelManifestArn?: string;

  /**
   * <p> The state of the decoder manifest. If the status is <code>ACTIVE</code>, the decoder
   *             manifest can't be edited. If the status is marked <code>DRAFT</code>, you can edit the
   *             decoder manifest.</p>
   */
  status?: ManifestStatus | string;

  /**
   * <p> The time the decoder manifest was created in seconds since epoch (January 1, 1970 at midnight UTC time). </p>
   */
  creationTime: Date | undefined;

  /**
   * <p> The time the decoder manifest was last updated in seconds since epoch (January 1, 1970 at midnight UTC time).  </p>
   */
  lastModificationTime: Date | undefined;
}

/**
 * <p>Specifications for defining a vehicle network.</p>
 */
export type NetworkFileDefinition = NetworkFileDefinition.CanDbcMember | NetworkFileDefinition.$UnknownMember;

export namespace NetworkFileDefinition {
  /**
   * <p>Information, including CAN DBC files, about the configurations used to create a
   *             decoder manifest.</p>
   */
  export interface CanDbcMember {
    canDbc: CanDbcDefinition;
    $unknown?: never;
  }

  export interface $UnknownMember {
    canDbc?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    canDbc: (value: CanDbcDefinition) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: NetworkFileDefinition, visitor: Visitor<T>): T => {
    if (value.canDbc !== undefined) return visitor.canDbc(value.canDbc);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

export interface ImportDecoderManifestRequest {
  /**
   * <p> The name of the decoder manifest to import. </p>
   */
  name: string | undefined;

  /**
   * <p> The file to load into an Amazon Web Services account. </p>
   */
  networkFileDefinitions: NetworkFileDefinition[] | undefined;
}

export interface ImportDecoderManifestResponse {
  /**
   * <p> The name of the imported decoder manifest. </p>
   */
  name: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the decoder manifest that was imported. </p>
   */
  arn: string | undefined;
}

export interface ListDecoderManifestNetworkInterfacesRequest {
  /**
   * <p> The name of the decoder manifest to list information about. </p>
   */
  name: string | undefined;

  /**
   * <p>A pagination token for the next set of results.</p>
   *          <p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value. </p>
   */
  nextToken?: string;

  /**
   * <p> The maximum number of items to return, between 1 and 100, inclusive. </p>
   */
  maxResults?: number;
}

export interface ListDecoderManifestNetworkInterfacesResponse {
  /**
   * <p> A list of information about network interfaces. </p>
   */
  networkInterfaces?: NetworkInterface[];

  /**
   * <p> The token to retrieve the next set of results, or <code>null</code> if there are no more results. </p>
   */
  nextToken?: string;
}

export interface ListDecoderManifestsRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of a vehicle model (model manifest) associated with
   *             the decoder manifest. </p>
   */
  modelManifestArn?: string;

  /**
   * <p>A pagination token for the next set of results.</p>
   *          <p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value. </p>
   */
  nextToken?: string;

  /**
   * <p> The maximum number of items to return, between 1 and 100, inclusive. </p>
   */
  maxResults?: number;
}

/**
 * <p>Information about a created decoder manifest. You can use the  API operation to return this information about
 *             multiple decoder manifests.</p>
 */
export interface DecoderManifestSummary {
  /**
   * <p>The name of the decoder manifest.</p>
   */
  name?: string;

  /**
   * <p>The ARN of a vehicle model (model manifest) associated with the decoder manifest.
   *         </p>
   */
  arn?: string;

  /**
   * <p>The ARN of a vehicle model (model manifest) associated with the decoder
   *             manifest.</p>
   */
  modelManifestArn?: string;

  /**
   * <p>A brief description of the decoder manifest.</p>
   */
  description?: string;

  /**
   * <p>The state of the decoder manifest. If the status is <code>ACTIVE</code>, the decoder
   *             manifest can't be edited. If the status is marked <code>DRAFT</code>, you can edit the
   *             decoder manifest.</p>
   */
  status?: ManifestStatus | string;

  /**
   * <p>The time the decoder manifest was created in seconds since epoch (January 1, 1970 at
   *             midnight UTC time).</p>
   */
  creationTime: Date | undefined;

  /**
   * <p>The time the decoder manifest was last updated in seconds since epoch (January 1,
   *             1970 at midnight UTC time).</p>
   */
  lastModificationTime: Date | undefined;
}

export interface ListDecoderManifestsResponse {
  /**
   * <p> A list of information about each decoder manifest. </p>
   */
  summaries?: DecoderManifestSummary[];

  /**
   * <p> The token to retrieve the next set of results, or <code>null</code> if there are no more results. </p>
   */
  nextToken?: string;
}

export interface ListDecoderManifestSignalsRequest {
  /**
   * <p> The name of the decoder manifest to list information about. </p>
   */
  name: string | undefined;

  /**
   * <p>A pagination token for the next set of results.</p>
   *          <p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value. </p>
   */
  nextToken?: string;

  /**
   * <p> The maximum number of items to return, between 1 and 100, inclusive. </p>
   */
  maxResults?: number;
}

export interface ListDecoderManifestSignalsResponse {
  /**
   * <p> Information about a list of signals to decode. </p>
   */
  signalDecoders?: SignalDecoder[];

  /**
   * <p> The token to retrieve the next set of results, or <code>null</code> if there are no more results. </p>
   */
  nextToken?: string;
}

export interface UpdateDecoderManifestRequest {
  /**
   * <p> The name of the decoder manifest to update.</p>
   */
  name: string | undefined;

  /**
   * <p> A brief description of the decoder manifest to update. </p>
   */
  description?: string;

  /**
   * <p> A list of information about decoding additional signals to add to the decoder
   *             manifest. </p>
   */
  signalDecodersToAdd?: SignalDecoder[];

  /**
   * <p> A list of updated information about decoding signals to update in the decoder
   *             manifest. </p>
   */
  signalDecodersToUpdate?: SignalDecoder[];

  /**
   * <p> A list of signal decoders to remove from the decoder manifest. </p>
   */
  signalDecodersToRemove?: string[];

  /**
   * <p> A list of information about the network interfaces to add to the decoder manifest.
   *         </p>
   */
  networkInterfacesToAdd?: NetworkInterface[];

  /**
   * <p> A list of information about the network interfaces to update in the decoder manifest.
   *         </p>
   */
  networkInterfacesToUpdate?: NetworkInterface[];

  /**
   * <p> A list of network interfaces to remove from the decoder manifest.</p>
   */
  networkInterfacesToRemove?: string[];

  /**
   * <p> The state of the decoder manifest. If the status is <code>ACTIVE</code>, the decoder
   *             manifest can't be edited. If the status is <code>DRAFT</code>, you can edit the decoder
   *             manifest. </p>
   */
  status?: ManifestStatus | string;
}

export interface UpdateDecoderManifestResponse {
  /**
   * <p> The name of the updated decoder manifest. </p>
   */
  name: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the updated decoder manifest. </p>
   */
  arn: string | undefined;
}

export interface DeleteFleetRequest {
  /**
   * <p> The ID of the fleet to delete. </p>
   */
  fleetId: string | undefined;
}

export interface DeleteFleetResponse {
  /**
   * <p>The ID of the deleted fleet.</p>
   */
  id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the deleted fleet.</p>
   */
  arn?: string;
}

export interface DeleteModelManifestRequest {
  /**
   * <p> The name of the model manifest to delete. </p>
   */
  name: string | undefined;
}

export interface DeleteModelManifestResponse {
  /**
   * <p>The name of the deleted model manifest.</p>
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the deleted model manifest.</p>
   */
  arn: string | undefined;
}

export interface DeleteSignalCatalogRequest {
  /**
   * <p> The name of the signal catalog to delete. </p>
   */
  name: string | undefined;
}

export interface DeleteSignalCatalogResponse {
  /**
   * <p>The name of the deleted signal catalog.</p>
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the deleted signal catalog.</p>
   */
  arn: string | undefined;
}

export interface DeleteVehicleRequest {
  /**
   * <p>The ID of the vehicle to delete. </p>
   */
  vehicleName: string | undefined;
}

export interface DeleteVehicleResponse {
  /**
   * <p>The ID of the deleted vehicle.</p>
   */
  vehicleName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the deleted vehicle.</p>
   */
  arn: string | undefined;
}

export interface DisassociateVehicleFleetRequest {
  /**
   * <p> The unique ID of the vehicle to disassociate from the fleet.</p>
   */
  vehicleName: string | undefined;

  /**
   * <p> The unique ID of a fleet. </p>
   */
  fleetId: string | undefined;
}

export interface DisassociateVehicleFleetResponse {}

export interface ListFleetsForVehicleRequest {
  /**
   * <p> The ID of the vehicle to retrieve information about. </p>
   */
  vehicleName: string | undefined;

  /**
   * <p>A pagination token for the next set of results.</p>
   *          <p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value. </p>
   */
  nextToken?: string;

  /**
   * <p> The maximum number of items to return, between 1 and 100, inclusive. </p>
   */
  maxResults?: number;
}

export interface ListFleetsForVehicleResponse {
  /**
   * <p> A list of fleet IDs that the vehicle is associated with. </p>
   */
  fleets?: string[];

  /**
   * <p> The token to retrieve the next set of results, or <code>null</code> if there are no more results. </p>
   */
  nextToken?: string;
}

export interface GetFleetRequest {
  /**
   * <p> The ID of the fleet to retrieve information about. </p>
   */
  fleetId: string | undefined;
}

export interface GetFleetResponse {
  /**
   * <p> The ID of the fleet.</p>
   */
  id: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the fleet. </p>
   */
  arn: string | undefined;

  /**
   * <p> A brief description of the fleet. </p>
   */
  description?: string;

  /**
   * <p> The ARN of a signal catalog associated with the fleet. </p>
   */
  signalCatalogArn: string | undefined;

  /**
   * <p> The time the fleet was created in seconds since epoch (January 1, 1970 at midnight
   *             UTC time). </p>
   */
  creationTime: Date | undefined;

  /**
   * <p> The time the fleet was last updated, in seconds since epoch (January 1, 1970 at
   *             midnight UTC time). </p>
   */
  lastModificationTime: Date | undefined;
}

export interface ListFleetsRequest {
  /**
   * <p>A pagination token for the next set of results.</p>
   *          <p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value. </p>
   */
  nextToken?: string;

  /**
   * <p> The maximum number of items to return, between 1 and 100, inclusive. </p>
   */
  maxResults?: number;
}

/**
 * <p>Information about a fleet.</p>
 *         <p>You can use the  API operation to return this
 *             information about multiple fleets.</p>
 */
export interface FleetSummary {
  /**
   * <p>The unique ID of the fleet.</p>
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  arn: string | undefined;

  /**
   * <p>A brief description of the fleet.</p>
   */
  description?: string;

  /**
   * <p>The ARN of the signal catalog associated with the fleet.</p>
   */
  signalCatalogArn: string | undefined;

  /**
   * <p>The time the fleet was created, in seconds since epoch (January 1, 1970 at midnight
   *             UTC time).</p>
   */
  creationTime: Date | undefined;

  /**
   * <p>The time the fleet was last updated in seconds since epoch (January 1, 1970 at
   *             midnight UTC time).</p>
   */
  lastModificationTime?: Date;
}

export interface ListFleetsResponse {
  /**
   * <p> A list of information for each fleet. </p>
   */
  fleetSummaries?: FleetSummary[];

  /**
   * <p> The token to retrieve the next set of results, or <code>null</code> if there are no more results. </p>
   */
  nextToken?: string;
}

export interface UpdateFleetRequest {
  /**
   * <p> The ID of the fleet to update. </p>
   */
  fleetId: string | undefined;

  /**
   * <p> An updated description of the fleet. </p>
   */
  description?: string;
}

export interface UpdateFleetResponse {
  /**
   * <p>The ID of the updated fleet.</p>
   */
  id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the updated fleet.</p>
   */
  arn?: string;
}

export interface ListVehiclesInFleetRequest {
  /**
   * <p> The ID of a fleet. </p>
   */
  fleetId: string | undefined;

  /**
   * <p>A pagination token for the next set of results.</p>
   *          <p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value. </p>
   */
  nextToken?: string;

  /**
   * <p> The maximum number of items to return, between 1 and 100, inclusive. </p>
   */
  maxResults?: number;
}

export interface ListVehiclesInFleetResponse {
  /**
   * <p> A list of vehicles associated with the fleet. </p>
   */
  vehicles?: string[];

  /**
   * <p> The token to retrieve the next set of results, or <code>null</code> if there are no more results. </p>
   */
  nextToken?: string;
}

/**
 * <p>Vehicle Signal Specification (VSS) is a precise language used to describe and model
 *             signals in vehicle networks. The JSON file collects signal specificiations in a VSS
 *             format.</p>
 */
export type FormattedVss = FormattedVss.VssJsonMember | FormattedVss.$UnknownMember;

export namespace FormattedVss {
  /**
   * <p>Provides the VSS in JSON format.</p>
   */
  export interface VssJsonMember {
    vssJson: string;
    $unknown?: never;
  }

  export interface $UnknownMember {
    vssJson?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    vssJson: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: FormattedVss, visitor: Visitor<T>): T => {
    if (value.vssJson !== undefined) return visitor.vssJson(value.vssJson);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

export interface GetLoggingOptionsRequest {}

export interface GetLoggingOptionsResponse {
  /**
   * <p>Returns information about log delivery to Amazon CloudWatch Logs.</p>
   */
  cloudWatchLogDelivery: CloudWatchLogDeliveryOptions | undefined;
}

export interface GetModelManifestRequest {
  /**
   * <p> The name of the vehicle model to retrieve information about. </p>
   */
  name: string | undefined;
}

export interface GetModelManifestResponse {
  /**
   * <p> The name of the vehicle model. </p>
   */
  name: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the vehicle model. </p>
   */
  arn: string | undefined;

  /**
   * <p> A brief description of the vehicle model. </p>
   */
  description?: string;

  /**
   * <p> The ARN of the signal catalog associated with the vehicle model. </p>
   */
  signalCatalogArn?: string;

  /**
   * <p> The state of the vehicle model. If the status is <code>ACTIVE</code>, the vehicle
   *             model can't be edited. You can edit the vehicle model if the status is marked
   *                 <code>DRAFT</code>.</p>
   */
  status?: ManifestStatus | string;

  /**
   * <p>The time the vehicle model was created, in seconds since epoch (January 1, 1970 at
   *             midnight UTC time).</p>
   */
  creationTime: Date | undefined;

  /**
   * <p>The last time the vehicle model was modified.</p>
   */
  lastModificationTime: Date | undefined;
}

export interface GetRegisterAccountStatusRequest {}

export enum RegistrationStatus {
  REGISTRATION_FAILURE = "REGISTRATION_FAILURE",
  REGISTRATION_PENDING = "REGISTRATION_PENDING",
  REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS",
}

/**
 * <p>Information about registering an Identity and Access Management (IAM) resource so Amazon Web Services IoT FleetWise edge agent
 *             software can transfer your vehicle data to Amazon Timestream.</p>
 */
export interface IamRegistrationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to register.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The status of registering your IAM resource. The status can be one of
   *                 <code>REGISTRATION_SUCCESS</code>, <code>REGISTRATION_PENDING</code>,
   *                 <code>REGISTRATION_FAILURE</code>.</p>
   */
  registrationStatus: RegistrationStatus | string | undefined;

  /**
   * <p>A message associated with a registration error.</p>
   */
  errorMessage?: string;
}

/**
 * <p>Information about the registered Amazon Timestream resources or errors, if any.</p>
 */
export interface TimestreamRegistrationResponse {
  /**
   * <p>The name of the Timestream database.</p>
   */
  timestreamDatabaseName: string | undefined;

  /**
   * <p>The name of the Timestream database table.</p>
   */
  timestreamTableName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Timestream database.</p>
   */
  timestreamDatabaseArn?: string;

  /**
   * <p>The ARN of the Timestream database table.</p>
   */
  timestreamTableArn?: string;

  /**
   * <p>The status of registering your Amazon Timestream resources. The status can be one of
   *                 <code>REGISTRATION_SUCCESS</code>, <code>REGISTRATION_PENDING</code>,
   *                 <code>REGISTRATION_FAILURE</code>.</p>
   */
  registrationStatus: RegistrationStatus | string | undefined;

  /**
   * <p>A message associated with a registration error.</p>
   */
  errorMessage?: string;
}

export interface GetRegisterAccountStatusResponse {
  /**
   * <p> The unique ID of the Amazon Web Services account, provided at account creation. </p>
   */
  customerAccountId: string | undefined;

  /**
   * <p> The status of registering your account and resources. The status can be one
   *             of:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>REGISTRATION_SUCCESS</code> - The Amazon Web Services resource is successfully
   *                     registered.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>REGISTRATION_PENDING</code> - Amazon Web Services IoT FleetWise is processing the registration
   *                     request. This process takes approximately five minutes to complete.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>REGISTRATION_FAILURE</code> - Amazon Web Services IoT FleetWise can't register the AWS resource.
   *                     Try again later.</p>
   *             </li>
   *          </ul>
   */
  accountStatus: RegistrationStatus | string | undefined;

  /**
   * <p> Information about the registered Amazon Timestream resources or errors, if any.</p>
   */
  timestreamRegistrationResponse: TimestreamRegistrationResponse | undefined;

  /**
   * <p> Information about the registered IAM resources or errors, if any. </p>
   */
  iamRegistrationResponse: IamRegistrationResponse | undefined;

  /**
   * <p> The time the account was registered, in seconds since epoch (January 1, 1970 at
   *             midnight UTC time). </p>
   */
  creationTime: Date | undefined;

  /**
   * <p> The time this registration was last updated, in seconds since epoch (January 1, 1970
   *             at midnight UTC time). </p>
   */
  lastModificationTime: Date | undefined;
}

export interface GetSignalCatalogRequest {
  /**
   * <p> The name of the signal catalog to retrieve information about. </p>
   */
  name: string | undefined;
}

/**
 * <p>Information about the number of nodes and node types in a vehicle network.</p>
 */
export interface NodeCounts {
  /**
   * <p>The total number of nodes in a vehicle network.</p>
   */
  totalNodes?: number;

  /**
   * <p>The total number of nodes in a vehicle network that represent branches.</p>
   */
  totalBranches?: number;

  /**
   * <p>The total number of nodes in a vehicle network that represent sensors.</p>
   */
  totalSensors?: number;

  /**
   * <p>The total number of nodes in a vehicle network that represent attributes.</p>
   */
  totalAttributes?: number;

  /**
   * <p>The total number of nodes in a vehicle network that represent actuators.</p>
   */
  totalActuators?: number;
}

export interface GetSignalCatalogResponse {
  /**
   * <p> The name of the signal catalog. </p>
   */
  name: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the signal catalog. </p>
   */
  arn: string | undefined;

  /**
   * <p> A brief description of the signal catalog. </p>
   */
  description?: string;

  /**
   * <p> The total number of network nodes specified in a signal catalog. </p>
   */
  nodeCounts?: NodeCounts;

  /**
   * <p> The time the signal catalog was created in seconds since epoch (January 1, 1970 at midnight UTC time).  </p>
   */
  creationTime: Date | undefined;

  /**
   * <p>The last time the signal catalog was modified.</p>
   */
  lastModificationTime: Date | undefined;
}

export interface GetVehicleRequest {
  /**
   * <p> The ID of the vehicle to retrieve information about. </p>
   */
  vehicleName: string | undefined;
}

export interface GetVehicleResponse {
  /**
   * <p>The ID of the vehicle.</p>
   */
  vehicleName?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the vehicle to retrieve information about. </p>
   */
  arn?: string;

  /**
   * <p> The ARN of a vehicle model (model manifest) associated with the vehicle. </p>
   */
  modelManifestArn?: string;

  /**
   * <p> The ARN of a decoder manifest associated with the vehicle. </p>
   */
  decoderManifestArn?: string;

  /**
   * <p>Static information about a vehicle in a key-value pair. For example:</p>
   *         <p>
   *             <code>"engineType"</code> : <code>"1.3 L R2"</code>
   *          </p>
   */
  attributes?: Record<string, string>;

  /**
   * <p> The time the vehicle was created in seconds since epoch (January 1, 1970 at midnight UTC time). </p>
   */
  creationTime?: Date;

  /**
   * <p> The time the vehicle was last updated in seconds since epoch (January 1, 1970 at midnight UTC time).  </p>
   */
  lastModificationTime?: Date;
}

export interface GetVehicleStatusRequest {
  /**
   * <p>A pagination token for the next set of results.</p>
   *          <p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value. </p>
   */
  nextToken?: string;

  /**
   * <p> The maximum number of items to return, between 1 and 100, inclusive. </p>
   */
  maxResults?: number;

  /**
   * <p> The ID of the vehicle to retrieve information about. </p>
   */
  vehicleName: string | undefined;
}

export enum VehicleState {
  CREATED = "CREATED",
  DELETING = "DELETING",
  HEALTHY = "HEALTHY",
  READY = "READY",
  SUSPENDED = "SUSPENDED",
}

/**
 * <p>Information about the state of a vehicle and how it relates to the status of a
 *             campaign.</p>
 */
export interface VehicleStatus {
  /**
   * <p>The name of a campaign.</p>
   */
  campaignName?: string;

  /**
   * <p>The unique ID of the vehicle.</p>
   */
  vehicleName?: string;

  /**
   * <p>The state of a vehicle, which can be one of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>CREATED</code> - Amazon Web Services IoT FleetWise sucessfully created the vehicle. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>READY</code> - The vehicle is ready to receive a campaign deployment.
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>HEALTHY</code> - A campaign deployment was delivered to the vehicle.
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>SUSPENDED</code> - A campaign associated with the vehicle was suspended
   *                     and data collection was paused. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DELETING</code> - Amazon Web Services IoT FleetWise is removing a campaign from the vehicle.
   *                 </p>
   *             </li>
   *          </ul>
   */
  status?: VehicleState | string;
}

export interface GetVehicleStatusResponse {
  /**
   * <p> Lists information about the state of the vehicle with deployed campaigns. </p>
   */
  campaigns?: VehicleStatus[];

  /**
   * <p> The token to retrieve the next set of results, or <code>null</code> if there are no more results. </p>
   */
  nextToken?: string;
}

/**
 * <p>The IAM resource that enables Amazon Web Services IoT FleetWise edge agent software to send data to
 *             Amazon Timestream. </p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html">IAM roles</a> in the
 *                 <i>Identity and Access Management User Guide</i>.</p>
 */
export interface IamResources {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM resource that allows Amazon Web Services IoT FleetWise to send data to
   *             Amazon Timestream. For example, <code>arn:aws:iam::123456789012:role/SERVICE-ROLE-ARN</code>.
   *         </p>
   */
  roleArn: string | undefined;
}

export interface ImportSignalCatalogRequest {
  /**
   * <p>The name of the signal catalog to import.</p>
   */
  name: string | undefined;

  /**
   * <p> A brief description of the signal catalog. </p>
   */
  description?: string;

  /**
   * <p>The contents of the Vehicle Signal Specification (VSS) configuration. VSS is a precise
   *             language used to describe and model signals in vehicle networks.</p>
   */
  vss?: FormattedVss;

  /**
   * <p>Metadata that can be used to manage the signal catalog.</p>
   */
  tags?: Tag[];
}

export interface ImportSignalCatalogResponse {
  /**
   * <p> The name of the imported signal catalog. </p>
   */
  name: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the imported signal catalog.</p>
   */
  arn: string | undefined;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   */
  ResourceARN: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The list of tags assigned to the resource.</p>
   */
  Tags?: Tag[];
}

export interface ListModelManifestNodesRequest {
  /**
   * <p> The name of the vehicle model to list information about. </p>
   */
  name: string | undefined;

  /**
   * <p>A pagination token for the next set of results.</p>
   *          <p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value. </p>
   */
  nextToken?: string;

  /**
   * <p> The maximum number of items to return, between 1 and 100, inclusive. </p>
   */
  maxResults?: number;
}

export interface ListModelManifestNodesResponse {
  /**
   * <p> A list of information about nodes. </p>
   */
  nodes?: Node[];

  /**
   * <p> The token to retrieve the next set of results, or <code>null</code> if there are no more results. </p>
   */
  nextToken?: string;
}

export interface ListModelManifestsRequest {
  /**
   * <p> The ARN of a signal catalog. If you specify a signal catalog, only the vehicle models
   *             associated with it are returned.</p>
   */
  signalCatalogArn?: string;

  /**
   * <p>A pagination token for the next set of results.</p>
   *          <p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value. </p>
   */
  nextToken?: string;

  /**
   * <p> The maximum number of items to return, between 1 and 100, inclusive. </p>
   */
  maxResults?: number;
}

/**
 * <p>Information about a vehicle model (model manifest). You can use the  API operation to return this information about
 *             multiple vehicle models.</p>
 */
export interface ModelManifestSummary {
  /**
   * <p>The name of the vehicle model.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the vehicle model.</p>
   */
  arn?: string;

  /**
   * <p>The ARN of the signal catalog associated with the vehicle model.</p>
   */
  signalCatalogArn?: string;

  /**
   * <p>A brief description of the vehicle model.</p>
   */
  description?: string;

  /**
   * <p>The state of the vehicle model. If the status is <code>ACTIVE</code>, the vehicle
   *             model can't be edited. If the status is <code>DRAFT</code>, you can edit the vehicle
   *             model.</p>
   */
  status?: ManifestStatus | string;

  /**
   * <p>The time the vehicle model was created, in seconds since epoch (January 1, 1970 at
   *             midnight UTC time).</p>
   */
  creationTime: Date | undefined;

  /**
   * <p>The time the vehicle model was last updated, in seconds since epoch (January 1, 1970
   *             at midnight UTC time).</p>
   */
  lastModificationTime: Date | undefined;
}

export interface ListModelManifestsResponse {
  /**
   * <p> A list of information about vehicle models.</p>
   */
  summaries?: ModelManifestSummary[];

  /**
   * <p> The token to retrieve the next set of results, or <code>null</code> if there are no more results. </p>
   */
  nextToken?: string;
}

export interface UpdateModelManifestRequest {
  /**
   * <p> The name of the vehicle model to update. </p>
   */
  name: string | undefined;

  /**
   * <p> A brief description of the vehicle model. </p>
   */
  description?: string;

  /**
   * <p> A list of <code>fullyQualifiedName</code> of nodes, which are a general abstraction
   *             of signals, to add to the vehicle model. </p>
   */
  nodesToAdd?: string[];

  /**
   * <p> A list of <code>fullyQualifiedName</code> of nodes, which are a general abstraction
   *             of signals, to remove from the vehicle model. </p>
   */
  nodesToRemove?: string[];

  /**
   * <p> The state of the vehicle model. If the status is <code>ACTIVE</code>, the vehicle
   *             model can't be edited. If the status is <code>DRAFT</code>, you can edit the vehicle
   *             model. </p>
   */
  status?: ManifestStatus | string;
}

export interface UpdateModelManifestResponse {
  /**
   * <p> The name of the updated vehicle model. </p>
   */
  name: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the updated vehicle model. </p>
   */
  arn: string | undefined;
}

export interface PutLoggingOptionsRequest {
  /**
   * <p>Creates or updates the log delivery option to Amazon CloudWatch Logs.</p>
   */
  cloudWatchLogDelivery: CloudWatchLogDeliveryOptions | undefined;
}

export interface PutLoggingOptionsResponse {}

/**
 * <p>The registered Amazon Timestream resources that Amazon Web Services IoT FleetWise edge agent software can transfer
 *             your vehicle data to.</p>
 */
export interface TimestreamResources {
  /**
   * <p>The name of the registered Amazon Timestream database.</p>
   */
  timestreamDatabaseName: string | undefined;

  /**
   * <p>The name of the registered Amazon Timestream database table.</p>
   */
  timestreamTableName: string | undefined;
}

export interface RegisterAccountRequest {
  /**
   * <p>The registered Amazon Timestream resources that Amazon Web Services IoT FleetWise edge agent software can transfer
   *             your vehicle data to.</p>
   */
  timestreamResources: TimestreamResources | undefined;

  /**
   * @deprecated
   *
   * <p>The IAM resource that allows Amazon Web Services IoT FleetWise to send data to Amazon Timestream.</p>
   */
  iamResources?: IamResources;
}

export interface RegisterAccountResponse {
  /**
   * <p> The status of registering your Amazon Web Services account, IAM role, and Timestream resources.
   *         </p>
   */
  registerAccountStatus: RegistrationStatus | string | undefined;

  /**
   * <p>The registered Amazon Timestream resources that Amazon Web Services IoT FleetWise edge agent software can transfer
   *             your vehicle data to.</p>
   */
  timestreamResources: TimestreamResources | undefined;

  /**
   * <p> The registered IAM resource that allows Amazon Web Services IoT FleetWise to send data to Amazon Timestream. </p>
   */
  iamResources: IamResources | undefined;

  /**
   * <p> The time the account was registered, in seconds since epoch (January 1, 1970 at
   *             midnight UTC time). </p>
   */
  creationTime: Date | undefined;

  /**
   * <p> The time this registration was last updated, in seconds since epoch (January 1, 1970
   *             at midnight UTC time). </p>
   */
  lastModificationTime: Date | undefined;
}

export interface ListSignalCatalogNodesRequest {
  /**
   * <p> The name of the signal catalog to list information about. </p>
   */
  name: string | undefined;

  /**
   * <p>A pagination token for the next set of results.</p>
   *          <p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value. </p>
   */
  nextToken?: string;

  /**
   * <p> The maximum number of items to return, between 1 and 100, inclusive. </p>
   */
  maxResults?: number;
}

export interface ListSignalCatalogNodesResponse {
  /**
   * <p> A list of information about nodes. </p>
   */
  nodes?: Node[];

  /**
   * <p> The token to retrieve the next set of results, or <code>null</code> if there are no more results. </p>
   */
  nextToken?: string;
}

export interface ListSignalCatalogsRequest {
  /**
   * <p>A pagination token for the next set of results.</p>
   *          <p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value. </p>
   */
  nextToken?: string;

  /**
   * <p> The maximum number of items to return, between 1 and 100, inclusive. </p>
   */
  maxResults?: number;
}

/**
 * <p>Information about a collection of standardized signals, which can be attributes,
 *             branches, sensors, or actuators.</p>
 */
export interface SignalCatalogSummary {
  /**
   * <p>The name of the signal catalog.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the signal catalog.</p>
   */
  arn?: string;

  /**
   * <p>The time the signal catalog was created in seconds since epoch (January 1, 1970 at midnight UTC time). </p>
   */
  creationTime?: Date;

  /**
   * <p>The time the signal catalog was last updated in seconds since epoch (January 1, 1970 at midnight UTC time). </p>
   */
  lastModificationTime?: Date;
}

export interface ListSignalCatalogsResponse {
  /**
   * <p> A list of information about each signal catalog. </p>
   */
  summaries?: SignalCatalogSummary[];

  /**
   * <p> The token to retrieve the next set of results, or <code>null</code> if there are no more results. </p>
   */
  nextToken?: string;
}

export interface UpdateSignalCatalogRequest {
  /**
   * <p> The name of the signal catalog to update. </p>
   */
  name: string | undefined;

  /**
   * <p> A brief description of the signal catalog to update.</p>
   */
  description?: string;

  /**
   * <p> A list of information about nodes to add to the signal catalog. </p>
   */
  nodesToAdd?: Node[];

  /**
   * <p> A list of information about nodes to update in the signal catalog. </p>
   */
  nodesToUpdate?: Node[];

  /**
   * <p> A list of <code>fullyQualifiedName</code> of nodes to remove from the signal catalog.
   *         </p>
   */
  nodesToRemove?: string[];
}

export interface UpdateSignalCatalogResponse {
  /**
   * <p> The name of the updated signal catalog. </p>
   */
  name: string | undefined;

  /**
   * <p> The ARN of the updated signal catalog. </p>
   */
  arn: string | undefined;
}

export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The new or modified tags for the resource.</p>
   */
  Tags: Tag[] | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>A list of the keys of the tags to be removed from the resource.</p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

export interface ListVehiclesRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of a vehicle model (model manifest). You can use this optional
   *             parameter to list only the vehicles created from a certain vehicle model. </p>
   */
  modelManifestArn?: string;

  /**
   * <p>A pagination token for the next set of results.</p>
   *          <p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value. </p>
   */
  nextToken?: string;

  /**
   * <p> The maximum number of items to return, between 1 and 100, inclusive. </p>
   */
  maxResults?: number;
}

/**
 * <p>Information about a vehicle.</p>
 *         <p>To return this information about vehicles in your account, you can use the  API operation.</p>
 */
export interface VehicleSummary {
  /**
   * <p>The unique ID of the vehicle.</p>
   */
  vehicleName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the vehicle.</p>
   */
  arn: string | undefined;

  /**
   * <p>The ARN of a vehicle model (model manifest) associated with the vehicle.</p>
   */
  modelManifestArn: string | undefined;

  /**
   * <p>The ARN of a decoder manifest associated with the vehicle.</p>
   */
  decoderManifestArn: string | undefined;

  /**
   * <p>The time the vehicle was created in seconds since epoch (January 1, 1970 at midnight UTC time).</p>
   */
  creationTime: Date | undefined;

  /**
   * <p>The time the vehicle was last updated in seconds since epoch (January 1, 1970 at midnight UTC time). </p>
   */
  lastModificationTime: Date | undefined;
}

export interface ListVehiclesResponse {
  /**
   * <p> A list of vehicles and information about them. </p>
   */
  vehicleSummaries?: VehicleSummary[];

  /**
   * <p> The token to retrieve the next set of results, or <code>null</code> if there are no more results. </p>
   */
  nextToken?: string;
}

export interface UpdateVehicleRequest {
  /**
   * <p>The unique ID of the vehicle to update.</p>
   */
  vehicleName: string | undefined;

  /**
   * <p>The ARN of a vehicle model (model manifest) associated with the vehicle.</p>
   */
  modelManifestArn?: string;

  /**
   * <p>The ARN of the decoder manifest associated with this vehicle.</p>
   */
  decoderManifestArn?: string;

  /**
   * <p>Static information about a vehicle in a key-value pair. For example:</p>
   *         <p>
   *             <code>"engineType"</code> : <code>"1.3 L R2"</code>
   *          </p>
   */
  attributes?: Record<string, string>;

  /**
   * <p>The method the specified attributes will update the existing attributes on the
   *             vehicle. Use<code>Overwite</code> to replace the vehicle attributes with the specified
   *             attributes. Or use <code>Merge</code> to combine all attributes.</p>
   *         <p>This is required if attributes are present in the input.</p>
   */
  attributeUpdateMode?: UpdateMode | string;
}

export interface UpdateVehicleResponse {
  /**
   * <p>The ID of the updated vehicle.</p>
   */
  vehicleName?: string;

  /**
   * <p>The ARN of the updated vehicle.</p>
   */
  arn?: string;
}

/**
 * @internal
 */
export const ActuatorFilterSensitiveLog = (obj: Actuator): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateVehicleFleetRequestFilterSensitiveLog = (obj: AssociateVehicleFleetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateVehicleFleetResponseFilterSensitiveLog = (obj: AssociateVehicleFleetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ValidationExceptionFieldFilterSensitiveLog = (obj: ValidationExceptionField): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttributeFilterSensitiveLog = (obj: Attribute): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateVehicleRequestItemFilterSensitiveLog = (obj: CreateVehicleRequestItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchCreateVehicleRequestFilterSensitiveLog = (obj: BatchCreateVehicleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateVehicleErrorFilterSensitiveLog = (obj: CreateVehicleError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateVehicleResponseItemFilterSensitiveLog = (obj: CreateVehicleResponseItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchCreateVehicleResponseFilterSensitiveLog = (obj: BatchCreateVehicleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateVehicleRequestItemFilterSensitiveLog = (obj: UpdateVehicleRequestItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchUpdateVehicleRequestFilterSensitiveLog = (obj: BatchUpdateVehicleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateVehicleErrorFilterSensitiveLog = (obj: UpdateVehicleError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateVehicleResponseItemFilterSensitiveLog = (obj: UpdateVehicleResponseItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchUpdateVehicleResponseFilterSensitiveLog = (obj: BatchUpdateVehicleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BranchFilterSensitiveLog = (obj: Branch): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConditionBasedCollectionSchemeFilterSensitiveLog = (obj: ConditionBasedCollectionScheme): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TimeBasedCollectionSchemeFilterSensitiveLog = (obj: TimeBasedCollectionScheme): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CollectionSchemeFilterSensitiveLog = (obj: CollectionScheme): any => {
  if (obj.timeBasedCollectionScheme !== undefined)
    return { timeBasedCollectionScheme: TimeBasedCollectionSchemeFilterSensitiveLog(obj.timeBasedCollectionScheme) };
  if (obj.conditionBasedCollectionScheme !== undefined)
    return {
      conditionBasedCollectionScheme: ConditionBasedCollectionSchemeFilterSensitiveLog(
        obj.conditionBasedCollectionScheme
      ),
    };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const SignalInformationFilterSensitiveLog = (obj: SignalInformation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCampaignRequestFilterSensitiveLog = (obj: CreateCampaignRequest): any => ({
  ...obj,
  ...(obj.collectionScheme && { collectionScheme: CollectionSchemeFilterSensitiveLog(obj.collectionScheme) }),
});

/**
 * @internal
 */
export const CreateCampaignResponseFilterSensitiveLog = (obj: CreateCampaignResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCampaignRequestFilterSensitiveLog = (obj: DeleteCampaignRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCampaignResponseFilterSensitiveLog = (obj: DeleteCampaignResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCampaignRequestFilterSensitiveLog = (obj: GetCampaignRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCampaignResponseFilterSensitiveLog = (obj: GetCampaignResponse): any => ({
  ...obj,
  ...(obj.collectionScheme && { collectionScheme: CollectionSchemeFilterSensitiveLog(obj.collectionScheme) }),
});

/**
 * @internal
 */
export const ListCampaignsRequestFilterSensitiveLog = (obj: ListCampaignsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CampaignSummaryFilterSensitiveLog = (obj: CampaignSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCampaignsResponseFilterSensitiveLog = (obj: ListCampaignsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateCampaignRequestFilterSensitiveLog = (obj: UpdateCampaignRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateCampaignResponseFilterSensitiveLog = (obj: UpdateCampaignResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CanDbcDefinitionFilterSensitiveLog = (obj: CanDbcDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CanInterfaceFilterSensitiveLog = (obj: CanInterface): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CanSignalFilterSensitiveLog = (obj: CanSignal): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CloudWatchLogDeliveryOptionsFilterSensitiveLog = (obj: CloudWatchLogDeliveryOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ObdInterfaceFilterSensitiveLog = (obj: ObdInterface): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkInterfaceFilterSensitiveLog = (obj: NetworkInterface): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ObdSignalFilterSensitiveLog = (obj: ObdSignal): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SignalDecoderFilterSensitiveLog = (obj: SignalDecoder): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDecoderManifestRequestFilterSensitiveLog = (obj: CreateDecoderManifestRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDecoderManifestResponseFilterSensitiveLog = (obj: CreateDecoderManifestResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InvalidNetworkInterfaceFilterSensitiveLog = (obj: InvalidNetworkInterface): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InvalidSignalDecoderFilterSensitiveLog = (obj: InvalidSignalDecoder): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFleetRequestFilterSensitiveLog = (obj: CreateFleetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFleetResponseFilterSensitiveLog = (obj: CreateFleetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateModelManifestRequestFilterSensitiveLog = (obj: CreateModelManifestRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateModelManifestResponseFilterSensitiveLog = (obj: CreateModelManifestResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InvalidSignalFilterSensitiveLog = (obj: InvalidSignal): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SensorFilterSensitiveLog = (obj: Sensor): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NodeFilterSensitiveLog = (obj: Node): any => {
  if (obj.branch !== undefined) return { branch: BranchFilterSensitiveLog(obj.branch) };
  if (obj.sensor !== undefined) return { sensor: SensorFilterSensitiveLog(obj.sensor) };
  if (obj.actuator !== undefined) return { actuator: ActuatorFilterSensitiveLog(obj.actuator) };
  if (obj.attribute !== undefined) return { attribute: AttributeFilterSensitiveLog(obj.attribute) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const CreateSignalCatalogRequestFilterSensitiveLog = (obj: CreateSignalCatalogRequest): any => ({
  ...obj,
  ...(obj.nodes && { nodes: obj.nodes.map((item) => NodeFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateSignalCatalogResponseFilterSensitiveLog = (obj: CreateSignalCatalogResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateVehicleRequestFilterSensitiveLog = (obj: CreateVehicleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateVehicleResponseFilterSensitiveLog = (obj: CreateVehicleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDecoderManifestRequestFilterSensitiveLog = (obj: DeleteDecoderManifestRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDecoderManifestResponseFilterSensitiveLog = (obj: DeleteDecoderManifestResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDecoderManifestRequestFilterSensitiveLog = (obj: GetDecoderManifestRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDecoderManifestResponseFilterSensitiveLog = (obj: GetDecoderManifestResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkFileDefinitionFilterSensitiveLog = (obj: NetworkFileDefinition): any => {
  if (obj.canDbc !== undefined) return { canDbc: CanDbcDefinitionFilterSensitiveLog(obj.canDbc) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const ImportDecoderManifestRequestFilterSensitiveLog = (obj: ImportDecoderManifestRequest): any => ({
  ...obj,
  ...(obj.networkFileDefinitions && {
    networkFileDefinitions: obj.networkFileDefinitions.map((item) => NetworkFileDefinitionFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ImportDecoderManifestResponseFilterSensitiveLog = (obj: ImportDecoderManifestResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDecoderManifestNetworkInterfacesRequestFilterSensitiveLog = (
  obj: ListDecoderManifestNetworkInterfacesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDecoderManifestNetworkInterfacesResponseFilterSensitiveLog = (
  obj: ListDecoderManifestNetworkInterfacesResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDecoderManifestsRequestFilterSensitiveLog = (obj: ListDecoderManifestsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DecoderManifestSummaryFilterSensitiveLog = (obj: DecoderManifestSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDecoderManifestsResponseFilterSensitiveLog = (obj: ListDecoderManifestsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDecoderManifestSignalsRequestFilterSensitiveLog = (obj: ListDecoderManifestSignalsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDecoderManifestSignalsResponseFilterSensitiveLog = (obj: ListDecoderManifestSignalsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDecoderManifestRequestFilterSensitiveLog = (obj: UpdateDecoderManifestRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDecoderManifestResponseFilterSensitiveLog = (obj: UpdateDecoderManifestResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFleetRequestFilterSensitiveLog = (obj: DeleteFleetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFleetResponseFilterSensitiveLog = (obj: DeleteFleetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteModelManifestRequestFilterSensitiveLog = (obj: DeleteModelManifestRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteModelManifestResponseFilterSensitiveLog = (obj: DeleteModelManifestResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSignalCatalogRequestFilterSensitiveLog = (obj: DeleteSignalCatalogRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSignalCatalogResponseFilterSensitiveLog = (obj: DeleteSignalCatalogResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVehicleRequestFilterSensitiveLog = (obj: DeleteVehicleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVehicleResponseFilterSensitiveLog = (obj: DeleteVehicleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateVehicleFleetRequestFilterSensitiveLog = (obj: DisassociateVehicleFleetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateVehicleFleetResponseFilterSensitiveLog = (obj: DisassociateVehicleFleetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFleetsForVehicleRequestFilterSensitiveLog = (obj: ListFleetsForVehicleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFleetsForVehicleResponseFilterSensitiveLog = (obj: ListFleetsForVehicleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFleetRequestFilterSensitiveLog = (obj: GetFleetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFleetResponseFilterSensitiveLog = (obj: GetFleetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFleetsRequestFilterSensitiveLog = (obj: ListFleetsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FleetSummaryFilterSensitiveLog = (obj: FleetSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFleetsResponseFilterSensitiveLog = (obj: ListFleetsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFleetRequestFilterSensitiveLog = (obj: UpdateFleetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFleetResponseFilterSensitiveLog = (obj: UpdateFleetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListVehiclesInFleetRequestFilterSensitiveLog = (obj: ListVehiclesInFleetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListVehiclesInFleetResponseFilterSensitiveLog = (obj: ListVehiclesInFleetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FormattedVssFilterSensitiveLog = (obj: FormattedVss): any => {
  if (obj.vssJson !== undefined) return { vssJson: obj.vssJson };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const GetLoggingOptionsRequestFilterSensitiveLog = (obj: GetLoggingOptionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLoggingOptionsResponseFilterSensitiveLog = (obj: GetLoggingOptionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetModelManifestRequestFilterSensitiveLog = (obj: GetModelManifestRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetModelManifestResponseFilterSensitiveLog = (obj: GetModelManifestResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRegisterAccountStatusRequestFilterSensitiveLog = (obj: GetRegisterAccountStatusRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IamRegistrationResponseFilterSensitiveLog = (obj: IamRegistrationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TimestreamRegistrationResponseFilterSensitiveLog = (obj: TimestreamRegistrationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRegisterAccountStatusResponseFilterSensitiveLog = (obj: GetRegisterAccountStatusResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSignalCatalogRequestFilterSensitiveLog = (obj: GetSignalCatalogRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NodeCountsFilterSensitiveLog = (obj: NodeCounts): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSignalCatalogResponseFilterSensitiveLog = (obj: GetSignalCatalogResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetVehicleRequestFilterSensitiveLog = (obj: GetVehicleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetVehicleResponseFilterSensitiveLog = (obj: GetVehicleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetVehicleStatusRequestFilterSensitiveLog = (obj: GetVehicleStatusRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VehicleStatusFilterSensitiveLog = (obj: VehicleStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetVehicleStatusResponseFilterSensitiveLog = (obj: GetVehicleStatusResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IamResourcesFilterSensitiveLog = (obj: IamResources): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportSignalCatalogRequestFilterSensitiveLog = (obj: ImportSignalCatalogRequest): any => ({
  ...obj,
  ...(obj.vss && { vss: FormattedVssFilterSensitiveLog(obj.vss) }),
});

/**
 * @internal
 */
export const ImportSignalCatalogResponseFilterSensitiveLog = (obj: ImportSignalCatalogResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListModelManifestNodesRequestFilterSensitiveLog = (obj: ListModelManifestNodesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListModelManifestNodesResponseFilterSensitiveLog = (obj: ListModelManifestNodesResponse): any => ({
  ...obj,
  ...(obj.nodes && { nodes: obj.nodes.map((item) => NodeFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListModelManifestsRequestFilterSensitiveLog = (obj: ListModelManifestsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelManifestSummaryFilterSensitiveLog = (obj: ModelManifestSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListModelManifestsResponseFilterSensitiveLog = (obj: ListModelManifestsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateModelManifestRequestFilterSensitiveLog = (obj: UpdateModelManifestRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateModelManifestResponseFilterSensitiveLog = (obj: UpdateModelManifestResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutLoggingOptionsRequestFilterSensitiveLog = (obj: PutLoggingOptionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutLoggingOptionsResponseFilterSensitiveLog = (obj: PutLoggingOptionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TimestreamResourcesFilterSensitiveLog = (obj: TimestreamResources): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterAccountRequestFilterSensitiveLog = (obj: RegisterAccountRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterAccountResponseFilterSensitiveLog = (obj: RegisterAccountResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSignalCatalogNodesRequestFilterSensitiveLog = (obj: ListSignalCatalogNodesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSignalCatalogNodesResponseFilterSensitiveLog = (obj: ListSignalCatalogNodesResponse): any => ({
  ...obj,
  ...(obj.nodes && { nodes: obj.nodes.map((item) => NodeFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListSignalCatalogsRequestFilterSensitiveLog = (obj: ListSignalCatalogsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SignalCatalogSummaryFilterSensitiveLog = (obj: SignalCatalogSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSignalCatalogsResponseFilterSensitiveLog = (obj: ListSignalCatalogsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSignalCatalogRequestFilterSensitiveLog = (obj: UpdateSignalCatalogRequest): any => ({
  ...obj,
  ...(obj.nodesToAdd && { nodesToAdd: obj.nodesToAdd.map((item) => NodeFilterSensitiveLog(item)) }),
  ...(obj.nodesToUpdate && { nodesToUpdate: obj.nodesToUpdate.map((item) => NodeFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpdateSignalCatalogResponseFilterSensitiveLog = (obj: UpdateSignalCatalogResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListVehiclesRequestFilterSensitiveLog = (obj: ListVehiclesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VehicleSummaryFilterSensitiveLog = (obj: VehicleSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListVehiclesResponseFilterSensitiveLog = (obj: ListVehiclesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateVehicleRequestFilterSensitiveLog = (obj: UpdateVehicleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateVehicleResponseFilterSensitiveLog = (obj: UpdateVehicleResponse): any => ({
  ...obj,
});
