// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { IoTFleetWiseServiceException as __BaseException } from "./IoTFleetWiseServiceException";

/**
 * @public
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

/**
 * @public
 * @enum
 */
export const NodeDataType = {
  BOOLEAN: "BOOLEAN",
  BOOLEAN_ARRAY: "BOOLEAN_ARRAY",
  DOUBLE: "DOUBLE",
  DOUBLE_ARRAY: "DOUBLE_ARRAY",
  FLOAT: "FLOAT",
  FLOAT_ARRAY: "FLOAT_ARRAY",
  INT16: "INT16",
  INT16_ARRAY: "INT16_ARRAY",
  INT32: "INT32",
  INT32_ARRAY: "INT32_ARRAY",
  INT64: "INT64",
  INT64_ARRAY: "INT64_ARRAY",
  INT8: "INT8",
  INT8_ARRAY: "INT8_ARRAY",
  STRING: "STRING",
  STRING_ARRAY: "STRING_ARRAY",
  UINT16: "UINT16",
  UINT16_ARRAY: "UINT16_ARRAY",
  UINT32: "UINT32",
  UINT32_ARRAY: "UINT32_ARRAY",
  UINT64: "UINT64",
  UINT64_ARRAY: "UINT64_ARRAY",
  UINT8: "UINT8",
  UINT8_ARRAY: "UINT8_ARRAY",
  UNIX_TIMESTAMP: "UNIX_TIMESTAMP",
  UNIX_TIMESTAMP_ARRAY: "UNIX_TIMESTAMP_ARRAY",
  UNKNOWN: "UNKNOWN",
} as const;

/**
 * @public
 */
export type NodeDataType = (typeof NodeDataType)[keyof typeof NodeDataType];

/**
 * @public
 * <p>A signal that represents a vehicle device such as the engine, heater, and door locks.
 *             Data from an actuator reports the state of a certain vehicle device.</p>
 *         <note>
 *             <p> Updating actuator data can change the state of a device. For example, you can
 *                 turn on or off the heater by updating its actuator data.</p>
 *         </note>
 */
export interface Actuator {
  /**
   * @public
   * <p>The fully qualified name of the actuator. For example, the fully qualified name of an
   *             actuator might be <code>Vehicle.Front.Left.Door.Lock</code>.</p>
   */
  fullyQualifiedName: string | undefined;

  /**
   * @public
   * <p>The specified data type of the actuator. </p>
   */
  dataType: NodeDataType | undefined;

  /**
   * @public
   * <p>A brief description of the actuator.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The scientific unit for the actuator.</p>
   */
  unit?: string;

  /**
   * @public
   * <p>A list of possible values an actuator can take.</p>
   */
  allowedValues?: string[];

  /**
   * @public
   * <p>The specified possible minimum value of an actuator.</p>
   */
  min?: number;

  /**
   * @public
   * <p>The specified possible maximum value of an actuator.</p>
   */
  max?: number;

  /**
   * @public
   * @deprecated
   *
   * <p>A specified value for the actuator.</p>
   */
  assignedValue?: string;

  /**
   * @public
   * <p>The deprecation message for the node or the branch that was moved or deleted.</p>
   */
  deprecationMessage?: string;

  /**
   * @public
   * <p>A comment in addition to the description.</p>
   */
  comment?: string;
}

/**
 * @public
 */
export interface AssociateVehicleFleetRequest {
  /**
   * @public
   * <p> The unique ID of the vehicle to associate with the fleet. </p>
   */
  vehicleName: string | undefined;

  /**
   * @public
   * <p> The ID of a fleet. </p>
   */
  fleetId: string | undefined;
}

/**
 * @public
 */
export interface AssociateVehicleFleetResponse {}

/**
 * @public
 * <p>The request couldn't be completed because the server temporarily failed.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * @public
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
 * @public
 * <p>The resource wasn't found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The identifier of the resource that wasn't found.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
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
 * @public
 * <p>The request couldn't be completed due to throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The quota identifier of the applied throttling rules for this request.</p>
   */
  quotaCode?: string;

  /**
   * @public
   * <p>The code for the service that couldn't be completed due to throttling.</p>
   */
  serviceCode?: string;

  /**
   * @public
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
 * @public
 * <p>A validation error due to mismatch between the expected data type, length, or pattern
 *             of the parameter and the input.</p>
 */
export interface ValidationExceptionField {
  /**
   * @public
   * <p>The name of the parameter field with the validation error.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A message about the validation error.</p>
   */
  message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "cannotParse",
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  OTHER: "other",
  UNKNOWN_OPERATION: "unknownOperation",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The reason the input failed to satisfy the constraints specified by an Amazon Web Services service.</p>
   */
  reason?: ValidationExceptionReason;

  /**
   * @public
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
 * @public
 * <p>A signal that represents static information about the vehicle, such as engine type or
 *             manufacturing date.</p>
 */
export interface Attribute {
  /**
   * @public
   * <p>The fully qualified name of the attribute. For example, the fully qualified name of an
   *             attribute might be <code>Vehicle.Body.Engine.Type</code>.</p>
   */
  fullyQualifiedName: string | undefined;

  /**
   * @public
   * <p>The specified data type of the attribute. </p>
   */
  dataType: NodeDataType | undefined;

  /**
   * @public
   * <p>A brief description of the attribute.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The scientific unit for the attribute.</p>
   */
  unit?: string;

  /**
   * @public
   * <p>A list of possible values an attribute can be assigned.</p>
   */
  allowedValues?: string[];

  /**
   * @public
   * <p>The specified possible minimum value of the attribute.</p>
   */
  min?: number;

  /**
   * @public
   * <p>The specified possible maximum value of the attribute.</p>
   */
  max?: number;

  /**
   * @public
   * @deprecated
   *
   * <p>A specified value for the attribute.</p>
   */
  assignedValue?: string;

  /**
   * @public
   * <p>The default value of the attribute.</p>
   */
  defaultValue?: string;

  /**
   * @public
   * <p>The deprecation message for the node or the branch that was moved or deleted.</p>
   */
  deprecationMessage?: string;

  /**
   * @public
   * <p>A comment in addition to the description.</p>
   */
  comment?: string;
}

/**
 * @public
 * @enum
 */
export const VehicleAssociationBehavior = {
  CREATE_IOT_THING: "CreateIotThing",
  VALIDATE_IOT_THING_EXISTS: "ValidateIotThingExists",
} as const;

/**
 * @public
 */
export type VehicleAssociationBehavior = (typeof VehicleAssociationBehavior)[keyof typeof VehicleAssociationBehavior];

/**
 * @public
 * <p>A set of key/value pairs that are used to manage the resource.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>The tag's key.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The tag's value.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 * <p>Information about the vehicle to create.</p>
 */
export interface CreateVehicleRequestItem {
  /**
   * @public
   * <p>The unique ID of the vehicle to create.</p>
   */
  vehicleName: string | undefined;

  /**
   * @public
   * <p>The ARN of the vehicle model (model manifest) to create the vehicle from.</p>
   */
  modelManifestArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a decoder manifest associated with the vehicle to create.
   *         </p>
   */
  decoderManifestArn: string | undefined;

  /**
   * @public
   * <p>Static information about a vehicle in a key-value pair. For example: <code>"engine
   *                 Type"</code> : <code>"v6"</code>
   *          </p>
   */
  attributes?: Record<string, string>;

  /**
   * @public
   * <p>An option to create a new Amazon Web Services IoT thing when creating a vehicle, or to validate an
   *             existing thing as a vehicle.</p>
   */
  associationBehavior?: VehicleAssociationBehavior;

  /**
   * @public
   * <p>Metadata which can be used to manage the vehicle.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface BatchCreateVehicleRequest {
  /**
   * @public
   * <p> A list of information about each vehicle to create. For more information, see the
   *                  API data type.</p>
   */
  vehicles: CreateVehicleRequestItem[] | undefined;
}

/**
 * @public
 * <p>An HTTP error resulting from creating a vehicle.</p>
 */
export interface CreateVehicleError {
  /**
   * @public
   * <p>The ID of the vehicle with the error.</p>
   */
  vehicleName?: string;

  /**
   * @public
   * <p>An HTTP error code.</p>
   */
  code?: string;

  /**
   * @public
   * <p>A description of the HTTP error.</p>
   */
  message?: string;
}

/**
 * @public
 * <p>Information about a created vehicle.</p>
 */
export interface CreateVehicleResponseItem {
  /**
   * @public
   * <p>The unique ID of the vehicle to create.</p>
   */
  vehicleName?: string;

  /**
   * @public
   * <p>The ARN of the created vehicle.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The ARN of a created or validated Amazon Web Services IoT thing.</p>
   */
  thingArn?: string;
}

/**
 * @public
 */
export interface BatchCreateVehicleResponse {
  /**
   * @public
   * <p> A list of information about a batch of created vehicles. For more information, see
   *             the  API data type.</p>
   */
  vehicles?: CreateVehicleResponseItem[];

  /**
   * @public
   * <p>A list of information about creation errors, or an empty list if there aren't any
   *             errors. </p>
   */
  errors?: CreateVehicleError[];
}

/**
 * @public
 * <p>A service quota was exceeded. </p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The identifier of the resource that was exceeded.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
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

/**
 * @public
 * @enum
 */
export const UpdateMode = {
  MERGE: "Merge",
  OVERWRITE: "Overwrite",
} as const;

/**
 * @public
 */
export type UpdateMode = (typeof UpdateMode)[keyof typeof UpdateMode];

/**
 * @public
 * <p>Information about the vehicle to update.</p>
 */
export interface UpdateVehicleRequestItem {
  /**
   * @public
   * <p>The unique ID of the vehicle to update.</p>
   */
  vehicleName: string | undefined;

  /**
   * @public
   * <p>The ARN of the vehicle model (model manifest) associated with the vehicle to update.</p>
   */
  modelManifestArn?: string;

  /**
   * @public
   * <p>The ARN of the signal decoder manifest associated with the vehicle to update.</p>
   */
  decoderManifestArn?: string;

  /**
   * @public
   * <p>Static information about a vehicle in a key-value pair. For example:</p>
   *         <p>
   *             <code>"engineType"</code> : <code>"1.3 L R2"</code>
   *          </p>
   */
  attributes?: Record<string, string>;

  /**
   * @public
   * <p>The method the specified attributes will update the existing attributes on the
   *             vehicle. Use<code>Overwite</code> to replace the vehicle attributes with the specified
   *             attributes. Or use <code>Merge</code> to combine all attributes.</p>
   *         <p>This is required if attributes are present in the input.</p>
   */
  attributeUpdateMode?: UpdateMode;
}

/**
 * @public
 */
export interface BatchUpdateVehicleRequest {
  /**
   * @public
   * <p> A list of information about the vehicles to update. For more information, see the
   *                  API data type.</p>
   */
  vehicles: UpdateVehicleRequestItem[] | undefined;
}

/**
 * @public
 * <p>An HTTP error resulting from updating the description for a vehicle.</p>
 */
export interface UpdateVehicleError {
  /**
   * @public
   * <p>The ID of the vehicle with the error.</p>
   */
  vehicleName?: string;

  /**
   * @public
   * <p>The relevant HTTP error code (400+).</p>
   */
  code?: number;

  /**
   * @public
   * <p>A message associated with the error.</p>
   */
  message?: string;
}

/**
 * @public
 * <p>Information about the updated vehicle.</p>
 */
export interface UpdateVehicleResponseItem {
  /**
   * @public
   * <p>The unique ID of the updated vehicle.</p>
   */
  vehicleName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the updated vehicle.</p>
   */
  arn?: string;
}

/**
 * @public
 */
export interface BatchUpdateVehicleResponse {
  /**
   * @public
   * <p> A list of information about the batch of updated vehicles. </p>
   *         <note>
   *             <p>This list contains only unique IDs for the vehicles that were updated.</p>
   *         </note>
   */
  vehicles?: UpdateVehicleResponseItem[];

  /**
   * @public
   * <p>A list of information about errors returned while updating a batch of vehicles, or, if
   *             there aren't any errors, an empty list.</p>
   */
  errors?: UpdateVehicleError[];
}

/**
 * @public
 * <p>A group of signals that are defined in a hierarchical structure.</p>
 */
export interface Branch {
  /**
   * @public
   * <p>The fully qualified name of the branch. For example, the fully qualified name of a
   *             branch might be <code>Vehicle.Body.Engine</code>.</p>
   */
  fullyQualifiedName: string | undefined;

  /**
   * @public
   * <p>A brief description of the branch.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The deprecation message for the node or the branch that was moved or deleted.</p>
   */
  deprecationMessage?: string;

  /**
   * @public
   * <p>A comment in addition to the description.</p>
   */
  comment?: string;
}

/**
 * @public
 * <p>The request has conflicting operations. This can occur if you're trying to perform
 *             more than one operation on the same resource at the same time.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The resource on which there are conflicting operations.</p>
   */
  resource: string | undefined;

  /**
   * @public
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

/**
 * @public
 * @enum
 */
export const TriggerMode = {
  ALWAYS: "ALWAYS",
  RISING_EDGE: "RISING_EDGE",
} as const;

/**
 * @public
 */
export type TriggerMode = (typeof TriggerMode)[keyof typeof TriggerMode];

/**
 * @public
 * <p>Information about a collection scheme that uses a simple logical expression to
 *             recognize what data to collect.</p>
 */
export interface ConditionBasedCollectionScheme {
  /**
   * @public
   * <p>The logical expression used to recognize what data to collect. For example,
   *                 <code>$variable.Vehicle.OutsideAirTemperature &gt;= 105.0</code>.</p>
   */
  expression: string | undefined;

  /**
   * @public
   * <p>The minimum duration of time between two triggering events to collect data, in
   *             milliseconds.</p>
   *         <note>
   *             <p>If a signal changes often, you might want to collect data at a slower rate.</p>
   *         </note>
   */
  minimumTriggerIntervalMs?: number;

  /**
   * @public
   * <p>Whether to collect data for all triggering events (<code>ALWAYS</code>). Specify
   *                 (<code>RISING_EDGE</code>), or specify only when the condition first evaluates to
   *             false. For example, triggering on "AirbagDeployed"; Users aren't interested on
   *             triggering when the airbag is already exploded; they only care about the change from not
   *             deployed =&gt; deployed.</p>
   */
  triggerMode?: TriggerMode;

  /**
   * @public
   * <p>Specifies the version of the conditional expression language.</p>
   */
  conditionLanguageVersion?: number;
}

/**
 * @public
 * <p>Information about a collection scheme that uses a time period to decide how often to
 *             collect data.</p>
 */
export interface TimeBasedCollectionScheme {
  /**
   * @public
   * <p>The time period (in milliseconds) to decide how often to collect data. For example,
   *             if the time period is <code>60000</code>, the Edge Agent software collects data once
   *             every minute.</p>
   */
  periodMs: number | undefined;
}

/**
 * @public
 * <p>Specifies what data to collect and how often or when to collect it.</p>
 */
export type CollectionScheme =
  | CollectionScheme.ConditionBasedCollectionSchemeMember
  | CollectionScheme.TimeBasedCollectionSchemeMember
  | CollectionScheme.$UnknownMember;

/**
 * @public
 */
export namespace CollectionScheme {
  /**
   * @public
   * <p>Information about a collection scheme that uses a time period to decide how often to
   *             collect data.</p>
   */
  export interface TimeBasedCollectionSchemeMember {
    timeBasedCollectionScheme: TimeBasedCollectionScheme;
    conditionBasedCollectionScheme?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Information about a collection scheme that uses a simple logical expression to
   *             recognize what data to collect.</p>
   */
  export interface ConditionBasedCollectionSchemeMember {
    timeBasedCollectionScheme?: never;
    conditionBasedCollectionScheme: ConditionBasedCollectionScheme;
    $unknown?: never;
  }

  /**
   * @public
   */
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

/**
 * @public
 * @enum
 */
export const Compression = {
  OFF: "OFF",
  SNAPPY: "SNAPPY",
} as const;

/**
 * @public
 */
export type Compression = (typeof Compression)[keyof typeof Compression];

/**
 * @public
 * @enum
 */
export const DataFormat = {
  JSON: "JSON",
  PARQUET: "PARQUET",
} as const;

/**
 * @public
 */
export type DataFormat = (typeof DataFormat)[keyof typeof DataFormat];

/**
 * @public
 * @enum
 */
export const StorageCompressionFormat = {
  GZIP: "GZIP",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type StorageCompressionFormat = (typeof StorageCompressionFormat)[keyof typeof StorageCompressionFormat];

/**
 * @public
 * <p>The Amazon S3 bucket where the Amazon Web Services IoT FleetWise campaign sends data. Amazon S3 is an object storage service that stores data as objects within buckets. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets-s3.html">Creating, configuring, and working with Amazon S3 buckets</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p>
 */
export interface S3Config {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon S3 bucket.</p>
   */
  bucketArn: string | undefined;

  /**
   * @public
   * <p>Specify the format that files are saved in the Amazon S3 bucket. You can save files in an Apache Parquet or JSON format.</p>
   *         <ul>
   *             <li>
   *                 <p>Parquet - Store data in a columnar storage file format. Parquet is optimal for
   *                     fast data retrieval and can reduce costs. This option is selected by
   *                     default.</p>
   *             </li>
   *             <li>
   *                 <p>JSON - Store data in a standard text-based JSON file format.</p>
   *             </li>
   *          </ul>
   */
  dataFormat?: DataFormat;

  /**
   * @public
   * <p>By default, stored data is compressed as a .gzip file. Compressed files have a reduced
   *             file size, which can optimize the cost of data storage.</p>
   */
  storageCompressionFormat?: StorageCompressionFormat;

  /**
   * @public
   * <p>(Optional) Enter an S3 bucket prefix. The prefix is the string of characters after the bucket name and before the object name. You can use the prefix to organize data stored in Amazon S3 buckets. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-prefixes.html">Organizing objects using prefixes</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p>
   *         <p>By default, Amazon Web Services IoT FleetWise sets the prefix <code>processed-data/year=YY/month=MM/date=DD/hour=HH/</code> (in UTC) to data it delivers to Amazon S3. You can enter a prefix to append it to this default prefix. For example, if you enter the prefix <code>vehicles</code>, the prefix will be <code>vehicles/processed-data/year=YY/month=MM/date=DD/hour=HH/</code>.</p>
   */
  prefix?: string;
}

/**
 * @public
 * <p>The Amazon Timestream table where the Amazon Web Services IoT FleetWise campaign sends data. Timestream stores and organizes data to optimize query processing time and to reduce storage costs. For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/data-modeling.html">Data modeling</a> in the <i>Amazon Timestream Developer Guide</i>.</p>
 */
export interface TimestreamConfig {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon Timestream table.</p>
   */
  timestreamTableArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the task execution role that grants Amazon Web Services IoT FleetWise permission to deliver data to the Amazon Timestream table.</p>
   */
  executionRoleArn: string | undefined;
}

/**
 * @public
 * <p>The destination where the Amazon Web Services IoT FleetWise campaign sends data. You can send data to be stored in Amazon S3 or Amazon Timestream.</p>
 */
export type DataDestinationConfig =
  | DataDestinationConfig.S3ConfigMember
  | DataDestinationConfig.TimestreamConfigMember
  | DataDestinationConfig.$UnknownMember;

/**
 * @public
 */
export namespace DataDestinationConfig {
  /**
   * @public
   * <p>The Amazon S3 bucket where the Amazon Web Services IoT FleetWise campaign sends data.</p>
   */
  export interface S3ConfigMember {
    s3Config: S3Config;
    timestreamConfig?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The Amazon Timestream table where the campaign sends data.</p>
   */
  export interface TimestreamConfigMember {
    s3Config?: never;
    timestreamConfig: TimestreamConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3Config?: never;
    timestreamConfig?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    s3Config: (value: S3Config) => T;
    timestreamConfig: (value: TimestreamConfig) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: DataDestinationConfig, visitor: Visitor<T>): T => {
    if (value.s3Config !== undefined) return visitor.s3Config(value.s3Config);
    if (value.timestreamConfig !== undefined) return visitor.timestreamConfig(value.timestreamConfig);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const DiagnosticsMode = {
  OFF: "OFF",
  SEND_ACTIVE_DTCS: "SEND_ACTIVE_DTCS",
} as const;

/**
 * @public
 */
export type DiagnosticsMode = (typeof DiagnosticsMode)[keyof typeof DiagnosticsMode];

/**
 * @public
 * <p>Information about a signal.</p>
 */
export interface SignalInformation {
  /**
   * @public
   * <p>The name of the signal.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The maximum number of samples to collect.</p>
   */
  maxSampleCount?: number;

  /**
   * @public
   * <p>The minimum duration of time (in milliseconds) between two triggering events to
   *             collect data.</p>
   *         <note>
   *             <p>If a signal changes often, you might want to collect data at a slower rate.</p>
   *         </note>
   */
  minimumSamplingIntervalMs?: number;
}

/**
 * @public
 * @enum
 */
export const SpoolingMode = {
  OFF: "OFF",
  TO_DISK: "TO_DISK",
} as const;

/**
 * @public
 */
export type SpoolingMode = (typeof SpoolingMode)[keyof typeof SpoolingMode];

/**
 * @public
 */
export interface CreateCampaignRequest {
  /**
   * @public
   * <p> The name of the campaign to create. </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>An optional description of the campaign to help identify its purpose.</p>
   */
  description?: string;

  /**
   * @public
   * <p>(Optional) The Amazon Resource Name (ARN) of the signal catalog to associate with the campaign.
   *         </p>
   */
  signalCatalogArn: string | undefined;

  /**
   * @public
   * <p> The ARN of the vehicle or fleet to deploy a campaign to. </p>
   */
  targetArn: string | undefined;

  /**
   * @public
   * <p>(Optional) The time, in milliseconds, to deliver a campaign after it was approved. If
   *             it's not specified, <code>0</code> is used.</p>
   *         <p>Default: <code>0</code>
   *          </p>
   */
  startTime?: Date;

  /**
   * @public
   * <p> (Optional) The time the campaign expires, in seconds since epoch (January 1, 1970 at
   *             midnight UTC time). Vehicle data isn't collected after the campaign expires. </p>
   *         <p>Default: 253402214400 (December 31, 9999, 00:00:00 UTC)</p>
   */
  expiryTime?: Date;

  /**
   * @public
   * <p> (Optional) How long (in milliseconds) to collect raw data after a triggering event
   *             initiates the collection. If it's not specified, <code>0</code> is used.</p>
   *         <p>Default: <code>0</code>
   *          </p>
   */
  postTriggerCollectionDuration?: number;

  /**
   * @public
   * <p> (Optional) Option for a vehicle to send diagnostic trouble codes to Amazon Web Services IoT FleetWise. If you
   *             want to send diagnostic trouble codes, use <code>SEND_ACTIVE_DTCS</code>. If it's not
   *             specified, <code>OFF</code> is used.</p>
   *         <p>Default: <code>OFF</code>
   *          </p>
   */
  diagnosticsMode?: DiagnosticsMode;

  /**
   * @public
   * <p>(Optional) Whether to store collected data after a vehicle lost a connection with the
   *             cloud. After a connection is re-established, the data is automatically forwarded to
   *             Amazon Web Services IoT FleetWise. If you want to store collected data when a vehicle loses connection with the
   *             cloud, use <code>TO_DISK</code>. If it's not specified, <code>OFF</code> is used.</p>
   *         <p>Default: <code>OFF</code>
   *          </p>
   */
  spoolingMode?: SpoolingMode;

  /**
   * @public
   * <p> (Optional) Whether to compress signals before transmitting data to Amazon Web Services IoT FleetWise. If you
   *             don't want to compress the signals, use <code>OFF</code>. If it's not specified,
   *                 <code>SNAPPY</code> is used. </p>
   *         <p>Default: <code>SNAPPY</code>
   *          </p>
   */
  compression?: Compression;

  /**
   * @public
   * <p>(Optional) A number indicating the priority of one campaign over another campaign for
   *             a certain vehicle or fleet. A campaign with the lowest value is deployed to vehicles
   *             before any other campaigns. If it's not specified, <code>0</code> is used. </p>
   *         <p>Default: <code>0</code>
   *          </p>
   */
  priority?: number;

  /**
   * @public
   * <p>(Optional) A list of information about signals to collect. </p>
   */
  signalsToCollect?: SignalInformation[];

  /**
   * @public
   * <p> The data collection scheme associated with the campaign. You can specify a scheme
   *             that collects data based on time or an event.</p>
   */
  collectionScheme: CollectionScheme | undefined;

  /**
   * @public
   * <p> (Optional) A list of vehicle attributes to associate with a campaign. </p>
   *         <p>Enrich the data with specified vehicle attributes. For example, add <code>make</code> and <code>model</code> to the campaign, and Amazon Web Services IoT FleetWise will associate the data with those attributes as dimensions in Amazon Timestream. You can then query the data against <code>make</code> and <code>model</code>.</p>
   *         <p>Default: An empty array</p>
   */
  dataExtraDimensions?: string[];

  /**
   * @public
   * <p>Metadata that can be used to manage the campaign.</p>
   */
  tags?: Tag[];

  /**
   * @public
   * <p>The destination where the campaign sends data. You can choose to send data to be stored in Amazon S3 or Amazon Timestream.</p>
   *         <p>Amazon S3 optimizes the cost of data storage and provides additional mechanisms to use vehicle data, such as data lakes, centralized data storage, data processing pipelines, and analytics. Amazon Web Services IoT FleetWise supports at-least-once file delivery to S3. Your vehicle data is stored on multiple Amazon Web Services IoT FleetWise servers for redundancy and high availability.</p>
   *         <p>You can use Amazon Timestream to access and analyze time series data, and Timestream to query
   *             vehicle data so that you can identify trends and patterns.</p>
   */
  dataDestinationConfigs?: DataDestinationConfig[];
}

/**
 * @public
 */
export interface CreateCampaignResponse {
  /**
   * @public
   * <p>The name of the created campaign.</p>
   */
  name?: string;

  /**
   * @public
   * <p> The ARN of the created campaign. </p>
   */
  arn?: string;
}

/**
 * @public
 */
export interface DeleteCampaignRequest {
  /**
   * @public
   * <p> The name of the campaign to delete. </p>
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteCampaignResponse {
  /**
   * @public
   * <p>The name of the deleted campaign.</p>
   */
  name?: string;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the deleted campaign.</p>
   *         <note>
   *             <p>The ARN isn’t returned if a campaign doesn’t exist.</p>
   *         </note>
   */
  arn?: string;
}

/**
 * @public
 */
export interface GetCampaignRequest {
  /**
   * @public
   * <p> The name of the campaign to retrieve information about. </p>
   */
  name: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CampaignStatus = {
  CREATING: "CREATING",
  RUNNING: "RUNNING",
  SUSPENDED: "SUSPENDED",
  WAITING_FOR_APPROVAL: "WAITING_FOR_APPROVAL",
} as const;

/**
 * @public
 */
export type CampaignStatus = (typeof CampaignStatus)[keyof typeof CampaignStatus];

/**
 * @public
 */
export interface GetCampaignResponse {
  /**
   * @public
   * <p>The name of the campaign.</p>
   */
  name?: string;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the campaign. </p>
   */
  arn?: string;

  /**
   * @public
   * <p>The description of the campaign.</p>
   */
  description?: string;

  /**
   * @public
   * <p> The ARN of a signal catalog. </p>
   */
  signalCatalogArn?: string;

  /**
   * @public
   * <p> The ARN of the vehicle or the fleet targeted by the campaign. </p>
   */
  targetArn?: string;

  /**
   * @public
   * <p>The state of the campaign. The status can be one of: <code>CREATING</code>,
   *                 <code>WAITING_FOR_APPROVAL</code>, <code>RUNNING</code>, and <code>SUSPENDED</code>.
   *         </p>
   */
  status?: CampaignStatus;

  /**
   * @public
   * <p> The time, in milliseconds, to deliver a campaign after it was approved.</p>
   */
  startTime?: Date;

  /**
   * @public
   * <p> The time the campaign expires, in seconds since epoch (January 1, 1970 at midnight
   *             UTC time). Vehicle data won't be collected after the campaign expires.</p>
   */
  expiryTime?: Date;

  /**
   * @public
   * <p> How long (in seconds) to collect raw data after a triggering event initiates the
   *             collection. </p>
   */
  postTriggerCollectionDuration?: number;

  /**
   * @public
   * <p> Option for a vehicle to send diagnostic trouble codes to Amazon Web Services IoT FleetWise. </p>
   */
  diagnosticsMode?: DiagnosticsMode;

  /**
   * @public
   * <p> Whether to store collected data after a vehicle lost a connection with the cloud.
   *             After a connection is re-established, the data is automatically forwarded to Amazon Web Services IoT FleetWise.
   *         </p>
   */
  spoolingMode?: SpoolingMode;

  /**
   * @public
   * <p> Whether to compress signals before transmitting data to Amazon Web Services IoT FleetWise. If
   *                 <code>OFF</code> is specified, the signals aren't compressed. If it's not specified,
   *                 <code>SNAPPY</code> is used. </p>
   */
  compression?: Compression;

  /**
   * @public
   * <p> A number indicating the priority of one campaign over another campaign for a certain
   *             vehicle or fleet. A campaign with the lowest value is deployed to vehicles before any
   *             other campaigns.</p>
   */
  priority?: number;

  /**
   * @public
   * <p> Information about a list of signals to collect data on. </p>
   */
  signalsToCollect?: SignalInformation[];

  /**
   * @public
   * <p> Information about the data collection scheme associated with the campaign. </p>
   */
  collectionScheme?: CollectionScheme;

  /**
   * @public
   * <p> A list of vehicle attributes associated with the campaign. </p>
   */
  dataExtraDimensions?: string[];

  /**
   * @public
   * <p> The time the campaign was created in seconds since epoch (January 1, 1970 at midnight
   *             UTC time). </p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p>The last time the campaign was modified.</p>
   */
  lastModificationTime?: Date;

  /**
   * @public
   * <p>The destination where the campaign sends data. You can choose to send data to be stored in Amazon S3 or Amazon Timestream.</p>
   *         <p>Amazon S3 optimizes the cost of data storage and provides additional mechanisms to use vehicle data, such as data lakes, centralized data storage, data processing pipelines, and analytics. </p>
   *         <p>You can use Amazon Timestream to access and analyze time series data, and Timestream to query
   *             vehicle data so that you can identify trends and patterns.</p>
   */
  dataDestinationConfigs?: DataDestinationConfig[];
}

/**
 * @public
 */
export interface ListCampaignsRequest {
  /**
   * @public
   * <p>A pagination token for the next set of results.</p>
   *          <p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p> The maximum number of items to return, between 1 and 100, inclusive. </p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>Optional parameter to filter the results by the status of each created campaign in
   *             your account. The status can be one of: <code>CREATING</code>,
   *                 <code>WAITING_FOR_APPROVAL</code>, <code>RUNNING</code>, or
   *             <code>SUSPENDED</code>.</p>
   */
  status?: string;
}

/**
 * @public
 * <p>Information about a campaign. </p>
 *         <p>You can use the  API operation to return this
 *             information about multiple created campaigns.</p>
 */
export interface CampaignSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a campaign.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of a campaign.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The description of the campaign.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The ARN of the signal catalog associated with the campaign.</p>
   */
  signalCatalogArn?: string;

  /**
   * @public
   * <p>The ARN of a vehicle or fleet to which the campaign is deployed.</p>
   */
  targetArn?: string;

  /**
   * @public
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
  status?: CampaignStatus;

  /**
   * @public
   * <p>The time the campaign was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p>The last time the campaign was modified.</p>
   */
  lastModificationTime: Date | undefined;
}

/**
 * @public
 */
export interface ListCampaignsResponse {
  /**
   * @public
   * <p> A summary of information about each campaign. </p>
   */
  campaignSummaries?: CampaignSummary[];

  /**
   * @public
   * <p> The token to retrieve the next set of results, or <code>null</code> if there are no more results. </p>
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const UpdateCampaignAction = {
  APPROVE: "APPROVE",
  RESUME: "RESUME",
  SUSPEND: "SUSPEND",
  UPDATE: "UPDATE",
} as const;

/**
 * @public
 */
export type UpdateCampaignAction = (typeof UpdateCampaignAction)[keyof typeof UpdateCampaignAction];

/**
 * @public
 */
export interface UpdateCampaignRequest {
  /**
   * @public
   * <p> The name of the campaign to update. </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of the campaign.</p>
   */
  description?: string;

  /**
   * @public
   * <p> A list of vehicle attributes to associate with a signal. </p>
   *         <p>Default: An empty array</p>
   */
  dataExtraDimensions?: string[];

  /**
   * @public
   * <p> Specifies how to update a campaign. The action can be one of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>APPROVE</code> - To approve delivering a data collection scheme to
   *                     vehicles. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>SUSPEND</code> - To suspend collecting signal data. The campaign is deleted from vehicles and all vehicles in the suspended campaign will stop sending data.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>RESUME</code> - To reactivate the <code>SUSPEND</code> campaign. The campaign is redeployed to all vehicles and the vehicles will resume sending data.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>UPDATE</code> - To update a campaign. </p>
   *             </li>
   *          </ul>
   */
  action: UpdateCampaignAction | undefined;
}

/**
 * @public
 */
export interface UpdateCampaignResponse {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the campaign. </p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the updated campaign.</p>
   */
  name?: string;

  /**
   * @public
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
  status?: CampaignStatus;
}

/**
 * @public
 * <p>Configurations used to create a decoder manifest.</p>
 */
export interface CanDbcDefinition {
  /**
   * @public
   * <p>Contains information about a network interface.</p>
   */
  networkInterface: string | undefined;

  /**
   * @public
   * <p>A list of DBC files. You can upload only one DBC file for each network interface and
   *             specify up to five (inclusive) files in the list.</p>
   */
  canDbcFiles: Uint8Array[] | undefined;

  /**
   * @public
   * <p>Pairs every signal specified in your vehicle model with a signal decoder.</p>
   */
  signalsMap?: Record<string, string>;
}

/**
 * @public
 * <p>A single controller area network (CAN) device interface.</p>
 */
export interface CanInterface {
  /**
   * @public
   * <p>The unique name of the interface.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The name of the communication protocol for the interface.</p>
   */
  protocolName?: string;

  /**
   * @public
   * <p>The version of the communication protocol for the interface.</p>
   */
  protocolVersion?: string;
}

/**
 * @public
 * <p>Information about a single controller area network (CAN) signal and the messages it
 *             receives and transmits.</p>
 */
export interface CanSignal {
  /**
   * @public
   * <p>The ID of the message.</p>
   */
  messageId: number | undefined;

  /**
   * @public
   * <p>Whether the byte ordering of a CAN message is big-endian.</p>
   */
  isBigEndian: boolean | undefined;

  /**
   * @public
   * <p>Whether the message data is specified as a signed value.</p>
   */
  isSigned: boolean | undefined;

  /**
   * @public
   * <p>Indicates the beginning of the CAN signal. This should always be the least significant bit (LSB).</p>
   *         <p>This value might be different from the value in a DBC file. For little endian signals,
   *                 <code>startBit</code> is the same value as in the DBC file. For big endian signals
   *             in a DBC file, the start bit is the most significant bit (MSB). You will have to
   *             calculate the LSB instead and pass it as the <code>startBit</code>.</p>
   */
  startBit: number | undefined;

  /**
   * @public
   * <p>The offset used to calculate the signal value. Combined with factor, the calculation is <code>value = raw_value * factor + offset</code>.</p>
   */
  offset: number | undefined;

  /**
   * @public
   * <p>A multiplier used to decode the CAN message.</p>
   */
  factor: number | undefined;

  /**
   * @public
   * <p>How many bytes of data are in the message.</p>
   */
  length: number | undefined;

  /**
   * @public
   * <p>The name of the signal.</p>
   */
  name?: string;
}

/**
 * @public
 * @enum
 */
export const LogType = {
  ERROR: "ERROR",
  OFF: "OFF",
} as const;

/**
 * @public
 */
export type LogType = (typeof LogType)[keyof typeof LogType];

/**
 * @public
 * <p>The log delivery option to send data to Amazon CloudWatch Logs.</p>
 */
export interface CloudWatchLogDeliveryOptions {
  /**
   * @public
   * <p>The type of log to send data to Amazon CloudWatch Logs.</p>
   */
  logType: LogType | undefined;

  /**
   * @public
   * <p>The Amazon CloudWatch Logs group the operation sends data to.</p>
   */
  logGroupName?: string;
}

/**
 * @public
 * <p>A network interface that specifies the On-board diagnostic (OBD) II network protocol.</p>
 */
export interface ObdInterface {
  /**
   * @public
   * <p>The name of the interface.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The ID of the message requesting vehicle data.</p>
   */
  requestMessageId: number | undefined;

  /**
   * @public
   * <p>The standard OBD II PID.</p>
   */
  obdStandard?: string;

  /**
   * @public
   * <p>The maximum number message requests per second.</p>
   */
  pidRequestIntervalSeconds?: number;

  /**
   * @public
   * <p>The maximum number message requests per diagnostic trouble code per second.</p>
   */
  dtcRequestIntervalSeconds?: number;

  /**
   * @public
   * <p>Whether to use extended IDs in the message.</p>
   */
  useExtendedIds?: boolean;

  /**
   * @public
   * <p>Whether the vehicle has a transmission control module (TCM).</p>
   */
  hasTransmissionEcu?: boolean;
}

/**
 * @public
 * @enum
 */
export const NetworkInterfaceType = {
  CAN_INTERFACE: "CAN_INTERFACE",
  OBD_INTERFACE: "OBD_INTERFACE",
} as const;

/**
 * @public
 */
export type NetworkInterfaceType = (typeof NetworkInterfaceType)[keyof typeof NetworkInterfaceType];

/**
 * @public
 * <p>Represents a node and its specifications in an in-vehicle communication network. All
 *             signal decoders must be associated with a network node. </p>
 *         <p> To return this information about all the network interfaces specified in a decoder
 *             manifest, use the  API
 *             operation.</p>
 */
export interface NetworkInterface {
  /**
   * @public
   * <p>The ID of the network interface.</p>
   */
  interfaceId: string | undefined;

  /**
   * @public
   * <p>The network protocol for the vehicle. For example, <code>CAN_SIGNAL</code> specifies
   *             a protocol that defines how data is communicated between electronic control units
   *             (ECUs). <code>OBD_SIGNAL</code> specifies a protocol that defines how self-diagnostic
   *             data is communicated between ECUs.</p>
   */
  type: NetworkInterfaceType | undefined;

  /**
   * @public
   * <p>Information about a network interface specified by the Controller Area Network (CAN)
   *             protocol.</p>
   */
  canInterface?: CanInterface;

  /**
   * @public
   * <p>Information about a network interface specified by the On-board diagnostic (OBD) II
   *             protocol.</p>
   */
  obdInterface?: ObdInterface;
}

/**
 * @public
 * <p>Information about signal messages using the on-board diagnostics (OBD) II protocol in
 *             a vehicle.</p>
 */
export interface ObdSignal {
  /**
   * @public
   * <p>The length of the requested data.</p>
   */
  pidResponseLength: number | undefined;

  /**
   * @public
   * <p>The mode of operation (diagnostic service) in a message.</p>
   */
  serviceMode: number | undefined;

  /**
   * @public
   * <p>The diagnostic code used to request data from a vehicle for this signal.</p>
   */
  pid: number | undefined;

  /**
   * @public
   * <p>A multiplier used to decode the message.</p>
   */
  scaling: number | undefined;

  /**
   * @public
   * <p>The offset used to calculate the signal value. Combined with scaling, the calculation is <code>value = raw_value * scaling + offset</code>.</p>
   */
  offset: number | undefined;

  /**
   * @public
   * <p>Indicates the beginning of the message.</p>
   */
  startByte: number | undefined;

  /**
   * @public
   * <p>The length of a message.</p>
   */
  byteLength: number | undefined;

  /**
   * @public
   * <p>The number of positions to shift bits in the message.</p>
   */
  bitRightShift?: number;

  /**
   * @public
   * <p>The number of bits to mask in a message.</p>
   */
  bitMaskLength?: number;
}

/**
 * @public
 * @enum
 */
export const SignalDecoderType = {
  CAN_SIGNAL: "CAN_SIGNAL",
  OBD_SIGNAL: "OBD_SIGNAL",
} as const;

/**
 * @public
 */
export type SignalDecoderType = (typeof SignalDecoderType)[keyof typeof SignalDecoderType];

/**
 * @public
 * <p>Information about a signal decoder.</p>
 */
export interface SignalDecoder {
  /**
   * @public
   * <p>The fully qualified name of a signal decoder as defined in a vehicle model.</p>
   */
  fullyQualifiedName: string | undefined;

  /**
   * @public
   * <p>The network protocol for the vehicle. For example, <code>CAN_SIGNAL</code> specifies
   *             a protocol that defines how data is communicated between electronic control units
   *             (ECUs). <code>OBD_SIGNAL</code> specifies a protocol that defines how self-diagnostic
   *             data is communicated between ECUs.</p>
   */
  type: SignalDecoderType | undefined;

  /**
   * @public
   * <p>The ID of a network interface that specifies what network protocol a vehicle follows.</p>
   */
  interfaceId: string | undefined;

  /**
   * @public
   * <p>Information about signal decoder using the Controller Area Network (CAN) protocol.</p>
   */
  canSignal?: CanSignal;

  /**
   * @public
   * <p>Information about signal decoder using the On-board diagnostic (OBD) II protocol.</p>
   */
  obdSignal?: ObdSignal;
}

/**
 * @public
 */
export interface CreateDecoderManifestRequest {
  /**
   * @public
   * <p> The unique name of the decoder manifest to create.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p> A brief description of the decoder manifest. </p>
   */
  description?: string;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the vehicle model (model manifest). </p>
   */
  modelManifestArn: string | undefined;

  /**
   * @public
   * <p> A list of information about signal decoders. </p>
   */
  signalDecoders?: SignalDecoder[];

  /**
   * @public
   * <p> A list of information about available network interfaces. </p>
   */
  networkInterfaces?: NetworkInterface[];

  /**
   * @public
   * <p>Metadata that can be used to manage the decoder manifest.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface CreateDecoderManifestResponse {
  /**
   * @public
   * <p> The name of the created decoder manifest. </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p> The ARN of the created decoder manifest. </p>
   */
  arn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const NetworkInterfaceFailureReason = {
  CAN_NETWORK_INTERFACE_INFO_IS_NULL: "CAN_NETWORK_INTERFACE_INFO_IS_NULL",
  CONFLICTING_NETWORK_INTERFACE: "CONFLICTING_NETWORK_INTERFACE",
  DUPLICATE_INTERFACE: "DUPLICATE_NETWORK_INTERFACE",
  NETWORK_INTERFACE_TO_ADD_ALREADY_EXISTS: "NETWORK_INTERFACE_TO_ADD_ALREADY_EXISTS",
  NETWORK_INTERFACE_TO_REMOVE_ASSOCIATED_WITH_SIGNALS: "NETWORK_INTERFACE_TO_REMOVE_ASSOCIATED_WITH_SIGNALS",
  OBD_NETWORK_INTERFACE_INFO_IS_NULL: "OBD_NETWORK_INTERFACE_INFO_IS_NULL",
} as const;

/**
 * @public
 */
export type NetworkInterfaceFailureReason =
  (typeof NetworkInterfaceFailureReason)[keyof typeof NetworkInterfaceFailureReason];

/**
 * @public
 * <p>A reason a vehicle network interface isn't valid.</p>
 */
export interface InvalidNetworkInterface {
  /**
   * @public
   * <p>The ID of the interface that isn't valid.</p>
   */
  interfaceId?: string;

  /**
   * @public
   * <p>A message about why the interface isn't valid. </p>
   */
  reason?: NetworkInterfaceFailureReason;
}

/**
 * @public
 * @enum
 */
export const SignalDecoderFailureReason = {
  CAN_SIGNAL_INFO_IS_NULL: "CAN_SIGNAL_INFO_IS_NULL",
  CONFLICTING_SIGNAL: "CONFLICTING_SIGNAL",
  DUPLICATE_SIGNAL: "DUPLICATE_SIGNAL",
  NETWORK_INTERFACE_TYPE_INCOMPATIBLE_WITH_SIGNAL_DECODER_TYPE:
    "NETWORK_INTERFACE_TYPE_INCOMPATIBLE_WITH_SIGNAL_DECODER_TYPE",
  NO_DECODER_INFO_FOR_SIGNAL_IN_MODEL: "NO_DECODER_INFO_FOR_SIGNAL_IN_MODEL",
  OBD_SIGNAL_INFO_IS_NULL: "OBD_SIGNAL_INFO_IS_NULL",
  SIGNAL_NOT_ASSOCIATED_WITH_NETWORK_INTERFACE: "SIGNAL_NOT_ASSOCIATED_WITH_NETWORK_INTERFACE",
  SIGNAL_NOT_IN_MODEL: "SIGNAL_NOT_IN_MODEL",
  SIGNAL_TO_ADD_ALREADY_EXISTS: "SIGNAL_TO_ADD_ALREADY_EXISTS",
} as const;

/**
 * @public
 */
export type SignalDecoderFailureReason = (typeof SignalDecoderFailureReason)[keyof typeof SignalDecoderFailureReason];

/**
 * @public
 * <p>A reason that a signal decoder isn't valid.</p>
 */
export interface InvalidSignalDecoder {
  /**
   * @public
   * <p>The name of a signal decoder that isn't valid.</p>
   */
  name?: string;

  /**
   * @public
   * <p>A message about why the signal decoder isn't valid.</p>
   */
  reason?: SignalDecoderFailureReason;
}

/**
 * @public
 * <p>The request couldn't be completed because it contains signal decoders with one or more validation errors.</p>
 */
export class DecoderManifestValidationException extends __BaseException {
  readonly name: "DecoderManifestValidationException" = "DecoderManifestValidationException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The request couldn't be completed because of invalid signals in the request.</p>
   */
  invalidSignals?: InvalidSignalDecoder[];

  /**
   * @public
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

/**
 * @public
 */
export interface CreateFleetRequest {
  /**
   * @public
   * <p> The unique ID of the fleet to create. </p>
   */
  fleetId: string | undefined;

  /**
   * @public
   * <p> A brief description of the fleet to create. </p>
   */
  description?: string;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of a signal catalog. </p>
   */
  signalCatalogArn: string | undefined;

  /**
   * @public
   * <p>Metadata that can be used to manage the fleet.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface CreateFleetResponse {
  /**
   * @public
   * <p> The ID of the created fleet. </p>
   */
  id: string | undefined;

  /**
   * @public
   * <p> The ARN of the created fleet. </p>
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface CreateModelManifestRequest {
  /**
   * @public
   * <p> The name of the vehicle model to create.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p> A brief description of the vehicle model. </p>
   */
  description?: string;

  /**
   * @public
   * <p> A list of nodes, which are a general abstraction of signals. </p>
   */
  nodes: string[] | undefined;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of a signal catalog. </p>
   */
  signalCatalogArn: string | undefined;

  /**
   * @public
   * <p>Metadata that can be used to manage the vehicle model.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface CreateModelManifestResponse {
  /**
   * @public
   * <p> The name of the created vehicle model.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p> The ARN of the created vehicle model.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 * <p>A reason that a signal isn't valid.</p>
 */
export interface InvalidSignal {
  /**
   * @public
   * <p>The name of the signal that isn't valid.</p>
   */
  name?: string;

  /**
   * @public
   * <p>A message about why the signal isn't valid.</p>
   */
  reason?: string;
}

/**
 * @public
 * <p>The request couldn't be completed because it contains signals that aren't valid.</p>
 */
export class InvalidSignalsException extends __BaseException {
  readonly name: "InvalidSignalsException" = "InvalidSignalsException";
  readonly $fault: "client" = "client";
  /**
   * @public
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
 * @public
 * <p>An input component that reports the environmental condition of a vehicle.</p>
 *         <note>
 *             <p>You can collect data about fluid levels, temperatures, vibrations, or battery
 *                 voltage from sensors.</p>
 *         </note>
 */
export interface Sensor {
  /**
   * @public
   * <p>The fully qualified name of the sensor. For example, the fully qualified name of a
   *             sensor might be <code>Vehicle.Body.Engine.Battery</code>.</p>
   */
  fullyQualifiedName: string | undefined;

  /**
   * @public
   * <p>The specified data type of the sensor. </p>
   */
  dataType: NodeDataType | undefined;

  /**
   * @public
   * <p>A brief description of a sensor.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The scientific unit of measurement for data collected by the sensor.</p>
   */
  unit?: string;

  /**
   * @public
   * <p>A list of possible values a sensor can take.</p>
   */
  allowedValues?: string[];

  /**
   * @public
   * <p>The specified possible minimum value of the sensor.</p>
   */
  min?: number;

  /**
   * @public
   * <p>The specified possible maximum value of the sensor.</p>
   */
  max?: number;

  /**
   * @public
   * <p>The deprecation message for the node or the branch that was moved or deleted.</p>
   */
  deprecationMessage?: string;

  /**
   * @public
   * <p>A comment in addition to the description.</p>
   */
  comment?: string;
}

/**
 * @public
 * <p>A general abstraction of a signal. A node can be specified as an actuator, attribute,
 *             branch, or sensor.</p>
 */
export type Node =
  | Node.ActuatorMember
  | Node.AttributeMember
  | Node.BranchMember
  | Node.SensorMember
  | Node.$UnknownMember;

/**
 * @public
 */
export namespace Node {
  /**
   * @public
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
   * @public
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
   * @public
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
   * @public
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

  /**
   * @public
   */
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

/**
 * @public
 */
export interface CreateSignalCatalogRequest {
  /**
   * @public
   * <p> The name of the signal catalog to create. </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A brief description of the signal catalog.</p>
   */
  description?: string;

  /**
   * @public
   * <p> A list of information about nodes, which are a general abstraction of signals. For
   *             more information, see the  API data type.</p>
   */
  nodes?: Node[];

  /**
   * @public
   * <p>Metadata that can be used to manage the signal catalog.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface CreateSignalCatalogResponse {
  /**
   * @public
   * <p> The name of the created signal catalog. </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p> The ARN of the created signal catalog. </p>
   */
  arn: string | undefined;
}

/**
 * @public
 * <p>The specified node type doesn't match the expected node type for a node. You can
 *             specify the node type as branch, sensor, actuator, or attribute.</p>
 */
export class InvalidNodeException extends __BaseException {
  readonly name: "InvalidNodeException" = "InvalidNodeException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The specified node type isn't valid.</p>
   */
  invalidNodes?: Node[];

  /**
   * @public
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

/**
 * @public
 */
export interface CreateVehicleRequest {
  /**
   * @public
   * <p> The unique ID of the vehicle to create. </p>
   */
  vehicleName: string | undefined;

  /**
   * @public
   * <p> The Amazon Resource Name ARN of a vehicle model. </p>
   */
  modelManifestArn: string | undefined;

  /**
   * @public
   * <p> The ARN of a decoder manifest. </p>
   */
  decoderManifestArn: string | undefined;

  /**
   * @public
   * <p>Static information about a vehicle in a key-value pair. For example:
   *                 <code>"engineType"</code> : <code>"1.3 L R2"</code>
   *          </p>
   *         <p>A campaign must include the keys (attribute names) in <code>dataExtraDimensions</code> for them to display in Amazon Timestream.</p>
   */
  attributes?: Record<string, string>;

  /**
   * @public
   * <p> An option to create a new Amazon Web Services IoT thing when creating a vehicle, or to validate an
   *             existing Amazon Web Services IoT thing as a vehicle. </p>
   *         <p>Default: <code/>
   *          </p>
   */
  associationBehavior?: VehicleAssociationBehavior;

  /**
   * @public
   * <p>Metadata that can be used to manage the vehicle.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface CreateVehicleResponse {
  /**
   * @public
   * <p>The unique ID of the created vehicle.</p>
   */
  vehicleName?: string;

  /**
   * @public
   * <p> The ARN of the created vehicle. </p>
   */
  arn?: string;

  /**
   * @public
   * <p> The ARN of a created or validated Amazon Web Services IoT thing. </p>
   */
  thingArn?: string;
}

/**
 * @public
 */
export interface DeleteDecoderManifestRequest {
  /**
   * @public
   * <p> The name of the decoder manifest to delete. </p>
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteDecoderManifestResponse {
  /**
   * @public
   * <p>The name of the deleted decoder manifest.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the deleted decoder manifest.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetDecoderManifestRequest {
  /**
   * @public
   * <p> The name of the decoder manifest to retrieve information about. </p>
   */
  name: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ManifestStatus = {
  ACTIVE: "ACTIVE",
  DRAFT: "DRAFT",
} as const;

/**
 * @public
 */
export type ManifestStatus = (typeof ManifestStatus)[keyof typeof ManifestStatus];

/**
 * @public
 */
export interface GetDecoderManifestResponse {
  /**
   * @public
   * <p> The name of the decoder manifest. </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the decoder manifest. </p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p> A brief description of the decoder manifest.</p>
   */
  description?: string;

  /**
   * @public
   * <p> The ARN of a vehicle model (model manifest) associated with the decoder
   *             manifest.</p>
   */
  modelManifestArn?: string;

  /**
   * @public
   * <p> The state of the decoder manifest. If the status is <code>ACTIVE</code>, the decoder
   *             manifest can't be edited. If the status is marked <code>DRAFT</code>, you can edit the
   *             decoder manifest.</p>
   */
  status?: ManifestStatus;

  /**
   * @public
   * <p> The time the decoder manifest was created in seconds since epoch (January 1, 1970 at midnight UTC time). </p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p> The time the decoder manifest was last updated in seconds since epoch (January 1, 1970 at midnight UTC time).  </p>
   */
  lastModificationTime: Date | undefined;
}

/**
 * @public
 * <p>Specifications for defining a vehicle network.</p>
 */
export type NetworkFileDefinition = NetworkFileDefinition.CanDbcMember | NetworkFileDefinition.$UnknownMember;

/**
 * @public
 */
export namespace NetworkFileDefinition {
  /**
   * @public
   * <p>Information, including CAN DBC files, about the configurations used to create a
   *             decoder manifest.</p>
   */
  export interface CanDbcMember {
    canDbc: CanDbcDefinition;
    $unknown?: never;
  }

  /**
   * @public
   */
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

/**
 * @public
 */
export interface ImportDecoderManifestRequest {
  /**
   * @public
   * <p> The name of the decoder manifest to import. </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p> The file to load into an Amazon Web Services account. </p>
   */
  networkFileDefinitions: NetworkFileDefinition[] | undefined;
}

/**
 * @public
 */
export interface ImportDecoderManifestResponse {
  /**
   * @public
   * <p> The name of the imported decoder manifest. </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the decoder manifest that was imported. </p>
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface ListDecoderManifestNetworkInterfacesRequest {
  /**
   * @public
   * <p> The name of the decoder manifest to list information about. </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A pagination token for the next set of results.</p>
   *          <p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p> The maximum number of items to return, between 1 and 100, inclusive. </p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListDecoderManifestNetworkInterfacesResponse {
  /**
   * @public
   * <p> A list of information about network interfaces. </p>
   */
  networkInterfaces?: NetworkInterface[];

  /**
   * @public
   * <p> The token to retrieve the next set of results, or <code>null</code> if there are no more results. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListDecoderManifestsRequest {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of a vehicle model (model manifest) associated with
   *             the decoder manifest. </p>
   */
  modelManifestArn?: string;

  /**
   * @public
   * <p>A pagination token for the next set of results.</p>
   *          <p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p> The maximum number of items to return, between 1 and 100, inclusive. </p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Information about a created decoder manifest. You can use the  API operation to return this information about
 *             multiple decoder manifests.</p>
 */
export interface DecoderManifestSummary {
  /**
   * @public
   * <p>The name of the decoder manifest.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The ARN of a vehicle model (model manifest) associated with the decoder manifest.
   *         </p>
   */
  arn?: string;

  /**
   * @public
   * <p>The ARN of a vehicle model (model manifest) associated with the decoder
   *             manifest.</p>
   */
  modelManifestArn?: string;

  /**
   * @public
   * <p>A brief description of the decoder manifest.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The state of the decoder manifest. If the status is <code>ACTIVE</code>, the decoder
   *             manifest can't be edited. If the status is marked <code>DRAFT</code>, you can edit the
   *             decoder manifest.</p>
   */
  status?: ManifestStatus;

  /**
   * @public
   * <p>The time the decoder manifest was created in seconds since epoch (January 1, 1970 at
   *             midnight UTC time).</p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p>The time the decoder manifest was last updated in seconds since epoch (January 1,
   *             1970 at midnight UTC time).</p>
   */
  lastModificationTime: Date | undefined;
}

/**
 * @public
 */
export interface ListDecoderManifestsResponse {
  /**
   * @public
   * <p> A list of information about each decoder manifest. </p>
   */
  summaries?: DecoderManifestSummary[];

  /**
   * @public
   * <p> The token to retrieve the next set of results, or <code>null</code> if there are no more results. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListDecoderManifestSignalsRequest {
  /**
   * @public
   * <p> The name of the decoder manifest to list information about. </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A pagination token for the next set of results.</p>
   *          <p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p> The maximum number of items to return, between 1 and 100, inclusive. </p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListDecoderManifestSignalsResponse {
  /**
   * @public
   * <p> Information about a list of signals to decode. </p>
   */
  signalDecoders?: SignalDecoder[];

  /**
   * @public
   * <p> The token to retrieve the next set of results, or <code>null</code> if there are no more results. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateDecoderManifestRequest {
  /**
   * @public
   * <p> The name of the decoder manifest to update.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p> A brief description of the decoder manifest to update. </p>
   */
  description?: string;

  /**
   * @public
   * <p> A list of information about decoding additional signals to add to the decoder
   *             manifest. </p>
   */
  signalDecodersToAdd?: SignalDecoder[];

  /**
   * @public
   * <p> A list of updated information about decoding signals to update in the decoder
   *             manifest. </p>
   */
  signalDecodersToUpdate?: SignalDecoder[];

  /**
   * @public
   * <p> A list of signal decoders to remove from the decoder manifest. </p>
   */
  signalDecodersToRemove?: string[];

  /**
   * @public
   * <p> A list of information about the network interfaces to add to the decoder manifest.
   *         </p>
   */
  networkInterfacesToAdd?: NetworkInterface[];

  /**
   * @public
   * <p> A list of information about the network interfaces to update in the decoder manifest.
   *         </p>
   */
  networkInterfacesToUpdate?: NetworkInterface[];

  /**
   * @public
   * <p> A list of network interfaces to remove from the decoder manifest.</p>
   */
  networkInterfacesToRemove?: string[];

  /**
   * @public
   * <p> The state of the decoder manifest. If the status is <code>ACTIVE</code>, the decoder
   *             manifest can't be edited. If the status is <code>DRAFT</code>, you can edit the decoder
   *             manifest. </p>
   */
  status?: ManifestStatus;
}

/**
 * @public
 */
export interface UpdateDecoderManifestResponse {
  /**
   * @public
   * <p> The name of the updated decoder manifest. </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the updated decoder manifest. </p>
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteFleetRequest {
  /**
   * @public
   * <p> The ID of the fleet to delete. </p>
   */
  fleetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFleetResponse {
  /**
   * @public
   * <p>The ID of the deleted fleet.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the deleted fleet.</p>
   */
  arn?: string;
}

/**
 * @public
 */
export interface DeleteModelManifestRequest {
  /**
   * @public
   * <p> The name of the model manifest to delete. </p>
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteModelManifestResponse {
  /**
   * @public
   * <p>The name of the deleted model manifest.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the deleted model manifest.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteSignalCatalogRequest {
  /**
   * @public
   * <p> The name of the signal catalog to delete. </p>
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteSignalCatalogResponse {
  /**
   * @public
   * <p>The name of the deleted signal catalog.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the deleted signal catalog.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteVehicleRequest {
  /**
   * @public
   * <p>The ID of the vehicle to delete. </p>
   */
  vehicleName: string | undefined;
}

/**
 * @public
 */
export interface DeleteVehicleResponse {
  /**
   * @public
   * <p>The ID of the deleted vehicle.</p>
   */
  vehicleName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the deleted vehicle.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateVehicleFleetRequest {
  /**
   * @public
   * <p> The unique ID of the vehicle to disassociate from the fleet.</p>
   */
  vehicleName: string | undefined;

  /**
   * @public
   * <p> The unique ID of a fleet. </p>
   */
  fleetId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateVehicleFleetResponse {}

/**
 * @public
 * @enum
 */
export const EncryptionStatus = {
  FAILURE: "FAILURE",
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type EncryptionStatus = (typeof EncryptionStatus)[keyof typeof EncryptionStatus];

/**
 * @public
 * @enum
 */
export const EncryptionType = {
  FLEETWISE_DEFAULT_ENCRYPTION: "FLEETWISE_DEFAULT_ENCRYPTION",
  KMS_BASED_ENCRYPTION: "KMS_BASED_ENCRYPTION",
} as const;

/**
 * @public
 */
export type EncryptionType = (typeof EncryptionType)[keyof typeof EncryptionType];

/**
 * @public
 */
export interface ListFleetsForVehicleRequest {
  /**
   * @public
   * <p> The ID of the vehicle to retrieve information about. </p>
   */
  vehicleName: string | undefined;

  /**
   * @public
   * <p>A pagination token for the next set of results.</p>
   *          <p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p> The maximum number of items to return, between 1 and 100, inclusive. </p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListFleetsForVehicleResponse {
  /**
   * @public
   * <p> A list of fleet IDs that the vehicle is associated with. </p>
   */
  fleets?: string[];

  /**
   * @public
   * <p> The token to retrieve the next set of results, or <code>null</code> if there are no more results. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetFleetRequest {
  /**
   * @public
   * <p> The ID of the fleet to retrieve information about. </p>
   */
  fleetId: string | undefined;
}

/**
 * @public
 */
export interface GetFleetResponse {
  /**
   * @public
   * <p> The ID of the fleet.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the fleet. </p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p> A brief description of the fleet. </p>
   */
  description?: string;

  /**
   * @public
   * <p> The ARN of a signal catalog associated with the fleet. </p>
   */
  signalCatalogArn: string | undefined;

  /**
   * @public
   * <p> The time the fleet was created in seconds since epoch (January 1, 1970 at midnight
   *             UTC time). </p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p> The time the fleet was last updated, in seconds since epoch (January 1, 1970 at
   *             midnight UTC time). </p>
   */
  lastModificationTime: Date | undefined;
}

/**
 * @public
 */
export interface ListFleetsRequest {
  /**
   * @public
   * <p>A pagination token for the next set of results.</p>
   *          <p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p> The maximum number of items to return, between 1 and 100, inclusive. </p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Information about a fleet.</p>
 *         <p>You can use the  API operation to return this
 *             information about multiple fleets.</p>
 */
export interface FleetSummary {
  /**
   * @public
   * <p>The unique ID of the fleet.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>A brief description of the fleet.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The ARN of the signal catalog associated with the fleet.</p>
   */
  signalCatalogArn: string | undefined;

  /**
   * @public
   * <p>The time the fleet was created, in seconds since epoch (January 1, 1970 at midnight
   *             UTC time).</p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p>The time the fleet was last updated in seconds since epoch (January 1, 1970 at
   *             midnight UTC time).</p>
   */
  lastModificationTime?: Date;
}

/**
 * @public
 */
export interface ListFleetsResponse {
  /**
   * @public
   * <p> A list of information for each fleet. </p>
   */
  fleetSummaries?: FleetSummary[];

  /**
   * @public
   * <p> The token to retrieve the next set of results, or <code>null</code> if there are no more results. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateFleetRequest {
  /**
   * @public
   * <p> The ID of the fleet to update. </p>
   */
  fleetId: string | undefined;

  /**
   * @public
   * <p> An updated description of the fleet. </p>
   */
  description?: string;
}

/**
 * @public
 */
export interface UpdateFleetResponse {
  /**
   * @public
   * <p>The ID of the updated fleet.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the updated fleet.</p>
   */
  arn?: string;
}

/**
 * @public
 */
export interface ListVehiclesInFleetRequest {
  /**
   * @public
   * <p> The ID of a fleet. </p>
   */
  fleetId: string | undefined;

  /**
   * @public
   * <p>A pagination token for the next set of results.</p>
   *          <p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p> The maximum number of items to return, between 1 and 100, inclusive. </p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListVehiclesInFleetResponse {
  /**
   * @public
   * <p> A list of vehicles associated with the fleet. </p>
   */
  vehicles?: string[];

  /**
   * @public
   * <p> The token to retrieve the next set of results, or <code>null</code> if there are no more results. </p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>
 *             <a href="https://www.w3.org/auto/wg/wiki/Vehicle_Signal_Specification_(VSS)/Vehicle_Data_Spec">Vehicle Signal Specification (VSS)</a> is a precise language used to describe and model
 *             signals in vehicle networks. The JSON file collects signal specificiations in a VSS
 *             format.</p>
 */
export type FormattedVss = FormattedVss.VssJsonMember | FormattedVss.$UnknownMember;

/**
 * @public
 */
export namespace FormattedVss {
  /**
   * @public
   * <p>Provides the VSS in JSON format.</p>
   */
  export interface VssJsonMember {
    vssJson: string;
    $unknown?: never;
  }

  /**
   * @public
   */
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

/**
 * @public
 */
export interface GetEncryptionConfigurationRequest {}

/**
 * @public
 */
export interface GetEncryptionConfigurationResponse {
  /**
   * @public
   * <p>The ID of the KMS key that is used for encryption.</p>
   */
  kmsKeyId?: string;

  /**
   * @public
   * <p>The encryption status.</p>
   */
  encryptionStatus: EncryptionStatus | undefined;

  /**
   * @public
   * <p>The type of encryption. Set to <code>KMS_BASED_ENCRYPTION</code> to use an KMS key that you own and manage. Set to <code>FLEETWISE_DEFAULT_ENCRYPTION</code> to use an Amazon Web Services managed key that is owned by the Amazon Web Services IoT FleetWise service account.</p>
   */
  encryptionType: EncryptionType | undefined;

  /**
   * @public
   * <p>The error message that describes why encryption settings couldn't be configured, if applicable.</p>
   */
  errorMessage?: string;

  /**
   * @public
   * <p>The time when encryption was configured in seconds since epoch (January 1, 1970 at midnight UTC time).</p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p>The time when encryption was last updated in seconds since epoch (January 1, 1970 at midnight UTC time).</p>
   */
  lastModificationTime?: Date;
}

/**
 * @public
 */
export interface GetLoggingOptionsRequest {}

/**
 * @public
 */
export interface GetLoggingOptionsResponse {
  /**
   * @public
   * <p>Returns information about log delivery to Amazon CloudWatch Logs.</p>
   */
  cloudWatchLogDelivery: CloudWatchLogDeliveryOptions | undefined;
}

/**
 * @public
 */
export interface GetModelManifestRequest {
  /**
   * @public
   * <p> The name of the vehicle model to retrieve information about. </p>
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetModelManifestResponse {
  /**
   * @public
   * <p> The name of the vehicle model. </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the vehicle model. </p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p> A brief description of the vehicle model. </p>
   */
  description?: string;

  /**
   * @public
   * <p> The ARN of the signal catalog associated with the vehicle model. </p>
   */
  signalCatalogArn?: string;

  /**
   * @public
   * <p> The state of the vehicle model. If the status is <code>ACTIVE</code>, the vehicle
   *             model can't be edited. You can edit the vehicle model if the status is marked
   *                 <code>DRAFT</code>.</p>
   */
  status?: ManifestStatus;

  /**
   * @public
   * <p>The time the vehicle model was created, in seconds since epoch (January 1, 1970 at
   *             midnight UTC time).</p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p>The last time the vehicle model was modified.</p>
   */
  lastModificationTime: Date | undefined;
}

/**
 * @public
 */
export interface GetRegisterAccountStatusRequest {}

/**
 * @public
 * @enum
 */
export const RegistrationStatus = {
  REGISTRATION_FAILURE: "REGISTRATION_FAILURE",
  REGISTRATION_PENDING: "REGISTRATION_PENDING",
  REGISTRATION_SUCCESS: "REGISTRATION_SUCCESS",
} as const;

/**
 * @public
 */
export type RegistrationStatus = (typeof RegistrationStatus)[keyof typeof RegistrationStatus];

/**
 * @public
 * <p>Information about registering an Identity and Access Management (IAM) resource so Amazon Web Services IoT FleetWise edge agent
 *             software can transfer your vehicle data to Amazon Timestream.</p>
 */
export interface IamRegistrationResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role to register.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>The status of registering your IAM resource. The status can be one of
   *                 <code>REGISTRATION_SUCCESS</code>, <code>REGISTRATION_PENDING</code>,
   *                 <code>REGISTRATION_FAILURE</code>.</p>
   */
  registrationStatus: RegistrationStatus | undefined;

  /**
   * @public
   * <p>A message associated with a registration error.</p>
   */
  errorMessage?: string;
}

/**
 * @public
 * <p>Information about the registered Amazon Timestream resources or errors, if any.</p>
 */
export interface TimestreamRegistrationResponse {
  /**
   * @public
   * <p>The name of the Timestream database.</p>
   */
  timestreamDatabaseName: string | undefined;

  /**
   * @public
   * <p>The name of the Timestream database table.</p>
   */
  timestreamTableName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Timestream database.</p>
   */
  timestreamDatabaseArn?: string;

  /**
   * @public
   * <p>The ARN of the Timestream database table.</p>
   */
  timestreamTableArn?: string;

  /**
   * @public
   * <p>The status of registering your Amazon Timestream resources. The status can be one of
   *                 <code>REGISTRATION_SUCCESS</code>, <code>REGISTRATION_PENDING</code>,
   *                 <code>REGISTRATION_FAILURE</code>.</p>
   */
  registrationStatus: RegistrationStatus | undefined;

  /**
   * @public
   * <p>A message associated with a registration error.</p>
   */
  errorMessage?: string;
}

/**
 * @public
 */
export interface GetRegisterAccountStatusResponse {
  /**
   * @public
   * <p> The unique ID of the Amazon Web Services account, provided at account creation. </p>
   */
  customerAccountId: string | undefined;

  /**
   * @public
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
  accountStatus: RegistrationStatus | undefined;

  /**
   * @public
   * <p> Information about the registered Amazon Timestream resources or errors, if any.</p>
   */
  timestreamRegistrationResponse?: TimestreamRegistrationResponse;

  /**
   * @public
   * <p> Information about the registered IAM resources or errors, if any. </p>
   */
  iamRegistrationResponse: IamRegistrationResponse | undefined;

  /**
   * @public
   * <p> The time the account was registered, in seconds since epoch (January 1, 1970 at
   *             midnight UTC time). </p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p> The time this registration was last updated, in seconds since epoch (January 1, 1970
   *             at midnight UTC time). </p>
   */
  lastModificationTime: Date | undefined;
}

/**
 * @public
 */
export interface GetSignalCatalogRequest {
  /**
   * @public
   * <p> The name of the signal catalog to retrieve information about. </p>
   */
  name: string | undefined;
}

/**
 * @public
 * <p>Information about the number of nodes and node types in a vehicle network.</p>
 */
export interface NodeCounts {
  /**
   * @public
   * <p>The total number of nodes in a vehicle network.</p>
   */
  totalNodes?: number;

  /**
   * @public
   * <p>The total number of nodes in a vehicle network that represent branches.</p>
   */
  totalBranches?: number;

  /**
   * @public
   * <p>The total number of nodes in a vehicle network that represent sensors.</p>
   */
  totalSensors?: number;

  /**
   * @public
   * <p>The total number of nodes in a vehicle network that represent attributes.</p>
   */
  totalAttributes?: number;

  /**
   * @public
   * <p>The total number of nodes in a vehicle network that represent actuators.</p>
   */
  totalActuators?: number;
}

/**
 * @public
 */
export interface GetSignalCatalogResponse {
  /**
   * @public
   * <p> The name of the signal catalog. </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the signal catalog. </p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p> A brief description of the signal catalog. </p>
   */
  description?: string;

  /**
   * @public
   * <p> The total number of network nodes specified in a signal catalog. </p>
   */
  nodeCounts?: NodeCounts;

  /**
   * @public
   * <p> The time the signal catalog was created in seconds since epoch (January 1, 1970 at midnight UTC time).  </p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p>The last time the signal catalog was modified.</p>
   */
  lastModificationTime: Date | undefined;
}

/**
 * @public
 */
export interface GetVehicleRequest {
  /**
   * @public
   * <p> The ID of the vehicle to retrieve information about. </p>
   */
  vehicleName: string | undefined;
}

/**
 * @public
 */
export interface GetVehicleResponse {
  /**
   * @public
   * <p>The ID of the vehicle.</p>
   */
  vehicleName?: string;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the vehicle to retrieve information about. </p>
   */
  arn?: string;

  /**
   * @public
   * <p> The ARN of a vehicle model (model manifest) associated with the vehicle. </p>
   */
  modelManifestArn?: string;

  /**
   * @public
   * <p> The ARN of a decoder manifest associated with the vehicle. </p>
   */
  decoderManifestArn?: string;

  /**
   * @public
   * <p>Static information about a vehicle in a key-value pair. For example:</p>
   *         <p>
   *             <code>"engineType"</code> : <code>"1.3 L R2"</code>
   *          </p>
   */
  attributes?: Record<string, string>;

  /**
   * @public
   * <p> The time the vehicle was created in seconds since epoch (January 1, 1970 at midnight UTC time). </p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p> The time the vehicle was last updated in seconds since epoch (January 1, 1970 at midnight UTC time).  </p>
   */
  lastModificationTime?: Date;
}

/**
 * @public
 */
export interface GetVehicleStatusRequest {
  /**
   * @public
   * <p>A pagination token for the next set of results.</p>
   *          <p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p> The maximum number of items to return, between 1 and 100, inclusive. </p>
   */
  maxResults?: number;

  /**
   * @public
   * <p> The ID of the vehicle to retrieve information about. </p>
   */
  vehicleName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const VehicleState = {
  CREATED: "CREATED",
  DELETING: "DELETING",
  HEALTHY: "HEALTHY",
  READY: "READY",
  SUSPENDED: "SUSPENDED",
} as const;

/**
 * @public
 */
export type VehicleState = (typeof VehicleState)[keyof typeof VehicleState];

/**
 * @public
 * <p>Information about the state of a vehicle and how it relates to the status of a
 *             campaign.</p>
 */
export interface VehicleStatus {
  /**
   * @public
   * <p>The name of a campaign.</p>
   */
  campaignName?: string;

  /**
   * @public
   * <p>The unique ID of the vehicle.</p>
   */
  vehicleName?: string;

  /**
   * @public
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
  status?: VehicleState;
}

/**
 * @public
 */
export interface GetVehicleStatusResponse {
  /**
   * @public
   * <p> Lists information about the state of the vehicle with deployed campaigns. </p>
   */
  campaigns?: VehicleStatus[];

  /**
   * @public
   * <p> The token to retrieve the next set of results, or <code>null</code> if there are no more results. </p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>The IAM resource that enables Amazon Web Services IoT FleetWise edge agent software to send data to
 *             Amazon Timestream. </p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html">IAM roles</a> in the
 *                 <i>Identity and Access Management User Guide</i>.</p>
 */
export interface IamResources {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM resource that allows Amazon Web Services IoT FleetWise to send data to
   *             Amazon Timestream. For example, <code>arn:aws:iam::123456789012:role/SERVICE-ROLE-ARN</code>.
   *         </p>
   */
  roleArn: string | undefined;
}

/**
 * @public
 */
export interface ImportSignalCatalogRequest {
  /**
   * @public
   * <p>The name of the signal catalog to import.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p> A brief description of the signal catalog. </p>
   */
  description?: string;

  /**
   * @public
   * <p>The contents of the Vehicle Signal Specification (VSS) configuration. VSS is a precise
   *             language used to describe and model signals in vehicle networks.</p>
   */
  vss?: FormattedVss;

  /**
   * @public
   * <p>Metadata that can be used to manage the signal catalog.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface ImportSignalCatalogResponse {
  /**
   * @public
   * <p> The name of the imported signal catalog. </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the imported signal catalog.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource.</p>
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The list of tags assigned to the resource.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface ListModelManifestNodesRequest {
  /**
   * @public
   * <p> The name of the vehicle model to list information about. </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A pagination token for the next set of results.</p>
   *          <p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p> The maximum number of items to return, between 1 and 100, inclusive. </p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListModelManifestNodesResponse {
  /**
   * @public
   * <p> A list of information about nodes. </p>
   */
  nodes?: Node[];

  /**
   * @public
   * <p> The token to retrieve the next set of results, or <code>null</code> if there are no more results. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListModelManifestsRequest {
  /**
   * @public
   * <p> The ARN of a signal catalog. If you specify a signal catalog, only the vehicle models
   *             associated with it are returned.</p>
   */
  signalCatalogArn?: string;

  /**
   * @public
   * <p>A pagination token for the next set of results.</p>
   *          <p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p> The maximum number of items to return, between 1 and 100, inclusive. </p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Information about a vehicle model (model manifest). You can use the  API operation to return this information about
 *             multiple vehicle models.</p>
 */
export interface ModelManifestSummary {
  /**
   * @public
   * <p>The name of the vehicle model.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the vehicle model.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The ARN of the signal catalog associated with the vehicle model.</p>
   */
  signalCatalogArn?: string;

  /**
   * @public
   * <p>A brief description of the vehicle model.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The state of the vehicle model. If the status is <code>ACTIVE</code>, the vehicle
   *             model can't be edited. If the status is <code>DRAFT</code>, you can edit the vehicle
   *             model.</p>
   */
  status?: ManifestStatus;

  /**
   * @public
   * <p>The time the vehicle model was created, in seconds since epoch (January 1, 1970 at
   *             midnight UTC time).</p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p>The time the vehicle model was last updated, in seconds since epoch (January 1, 1970
   *             at midnight UTC time).</p>
   */
  lastModificationTime: Date | undefined;
}

/**
 * @public
 */
export interface ListModelManifestsResponse {
  /**
   * @public
   * <p> A list of information about vehicle models.</p>
   */
  summaries?: ModelManifestSummary[];

  /**
   * @public
   * <p> The token to retrieve the next set of results, or <code>null</code> if there are no more results. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateModelManifestRequest {
  /**
   * @public
   * <p> The name of the vehicle model to update. </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p> A brief description of the vehicle model. </p>
   */
  description?: string;

  /**
   * @public
   * <p> A list of <code>fullyQualifiedName</code> of nodes, which are a general abstraction
   *             of signals, to add to the vehicle model. </p>
   */
  nodesToAdd?: string[];

  /**
   * @public
   * <p> A list of <code>fullyQualifiedName</code> of nodes, which are a general abstraction
   *             of signals, to remove from the vehicle model. </p>
   */
  nodesToRemove?: string[];

  /**
   * @public
   * <p> The state of the vehicle model. If the status is <code>ACTIVE</code>, the vehicle
   *             model can't be edited. If the status is <code>DRAFT</code>, you can edit the vehicle
   *             model. </p>
   */
  status?: ManifestStatus;
}

/**
 * @public
 */
export interface UpdateModelManifestResponse {
  /**
   * @public
   * <p> The name of the updated vehicle model. </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the updated vehicle model. </p>
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface PutEncryptionConfigurationRequest {
  /**
   * @public
   * <p>The ID of the KMS key that is used for encryption.</p>
   */
  kmsKeyId?: string;

  /**
   * @public
   * <p>The type of encryption. Choose <code>KMS_BASED_ENCRYPTION</code> to use a KMS key or <code>FLEETWISE_DEFAULT_ENCRYPTION</code> to use an Amazon Web Services managed key.</p>
   */
  encryptionType: EncryptionType | undefined;
}

/**
 * @public
 */
export interface PutEncryptionConfigurationResponse {
  /**
   * @public
   * <p>The ID of the KMS key that is used for encryption.</p>
   */
  kmsKeyId?: string;

  /**
   * @public
   * <p>The encryption status.</p>
   */
  encryptionStatus: EncryptionStatus | undefined;

  /**
   * @public
   * <p>The type of encryption. Set to <code>KMS_BASED_ENCRYPTION</code> to use an KMS key that you own and manage. Set to <code>FLEETWISE_DEFAULT_ENCRYPTION</code> to use an Amazon Web Services managed key that is owned by the Amazon Web Services IoT FleetWise service account.</p>
   */
  encryptionType: EncryptionType | undefined;
}

/**
 * @public
 */
export interface PutLoggingOptionsRequest {
  /**
   * @public
   * <p>Creates or updates the log delivery option to Amazon CloudWatch Logs.</p>
   */
  cloudWatchLogDelivery: CloudWatchLogDeliveryOptions | undefined;
}

/**
 * @public
 */
export interface PutLoggingOptionsResponse {}

/**
 * @public
 * <p>The registered Amazon Timestream resources that Amazon Web Services IoT FleetWise edge agent software can transfer
 *             your vehicle data to.</p>
 */
export interface TimestreamResources {
  /**
   * @public
   * <p>The name of the registered Amazon Timestream database.</p>
   */
  timestreamDatabaseName: string | undefined;

  /**
   * @public
   * <p>The name of the registered Amazon Timestream database table.</p>
   */
  timestreamTableName: string | undefined;
}

/**
 * @public
 */
export interface RegisterAccountRequest {
  /**
   * @public
   * @deprecated
   *
   * <p>The registered Amazon Timestream resources that Amazon Web Services IoT FleetWise edge agent software can transfer
   *             your vehicle data to.</p>
   */
  timestreamResources?: TimestreamResources;

  /**
   * @public
   * @deprecated
   *
   * <p>The IAM resource that allows Amazon Web Services IoT FleetWise to send data to Amazon Timestream.</p>
   */
  iamResources?: IamResources;
}

/**
 * @public
 */
export interface RegisterAccountResponse {
  /**
   * @public
   * <p> The status of registering your Amazon Web Services account, IAM role, and Timestream resources.
   *         </p>
   */
  registerAccountStatus: RegistrationStatus | undefined;

  /**
   * @public
   * <p>The registered Amazon Timestream resources that Amazon Web Services IoT FleetWise edge agent software can transfer
   *             your vehicle data to.</p>
   */
  timestreamResources?: TimestreamResources;

  /**
   * @public
   * <p> The registered IAM resource that allows Amazon Web Services IoT FleetWise to send data to Amazon Timestream. </p>
   */
  iamResources: IamResources | undefined;

  /**
   * @public
   * <p> The time the account was registered, in seconds since epoch (January 1, 1970 at
   *             midnight UTC time). </p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p> The time this registration was last updated, in seconds since epoch (January 1, 1970
   *             at midnight UTC time). </p>
   */
  lastModificationTime: Date | undefined;
}

/**
 * @public
 */
export interface ListSignalCatalogNodesRequest {
  /**
   * @public
   * <p> The name of the signal catalog to list information about. </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A pagination token for the next set of results.</p>
   *          <p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p> The maximum number of items to return, between 1 and 100, inclusive. </p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListSignalCatalogNodesResponse {
  /**
   * @public
   * <p> A list of information about nodes. </p>
   */
  nodes?: Node[];

  /**
   * @public
   * <p> The token to retrieve the next set of results, or <code>null</code> if there are no more results. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListSignalCatalogsRequest {
  /**
   * @public
   * <p>A pagination token for the next set of results.</p>
   *          <p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p> The maximum number of items to return, between 1 and 100, inclusive. </p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Information about a collection of standardized signals, which can be attributes,
 *             branches, sensors, or actuators.</p>
 */
export interface SignalCatalogSummary {
  /**
   * @public
   * <p>The name of the signal catalog.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the signal catalog.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The time the signal catalog was created in seconds since epoch (January 1, 1970 at midnight UTC time). </p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p>The time the signal catalog was last updated in seconds since epoch (January 1, 1970 at midnight UTC time). </p>
   */
  lastModificationTime?: Date;
}

/**
 * @public
 */
export interface ListSignalCatalogsResponse {
  /**
   * @public
   * <p> A list of information about each signal catalog. </p>
   */
  summaries?: SignalCatalogSummary[];

  /**
   * @public
   * <p> The token to retrieve the next set of results, or <code>null</code> if there are no more results. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateSignalCatalogRequest {
  /**
   * @public
   * <p> The name of the signal catalog to update. </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p> A brief description of the signal catalog to update.</p>
   */
  description?: string;

  /**
   * @public
   * <p> A list of information about nodes to add to the signal catalog. </p>
   */
  nodesToAdd?: Node[];

  /**
   * @public
   * <p> A list of information about nodes to update in the signal catalog. </p>
   */
  nodesToUpdate?: Node[];

  /**
   * @public
   * <p> A list of <code>fullyQualifiedName</code> of nodes to remove from the signal catalog.
   *         </p>
   */
  nodesToRemove?: string[];
}

/**
 * @public
 */
export interface UpdateSignalCatalogResponse {
  /**
   * @public
   * <p> The name of the updated signal catalog. </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p> The ARN of the updated signal catalog. </p>
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>The new or modified tags for the resource.</p>
   */
  Tags: Tag[] | undefined;
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
   * @public
   * <p>The ARN of the resource.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>A list of the keys of the tags to be removed from the resource.</p>
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
export interface ListVehiclesRequest {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of a vehicle model (model manifest). You can use this optional
   *             parameter to list only the vehicles created from a certain vehicle model. </p>
   */
  modelManifestArn?: string;

  /**
   * @public
   * <p>A pagination token for the next set of results.</p>
   *          <p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p> The maximum number of items to return, between 1 and 100, inclusive. </p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Information about a vehicle.</p>
 *         <p>To return this information about vehicles in your account, you can use the  API operation.</p>
 */
export interface VehicleSummary {
  /**
   * @public
   * <p>The unique ID of the vehicle.</p>
   */
  vehicleName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the vehicle.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The ARN of a vehicle model (model manifest) associated with the vehicle.</p>
   */
  modelManifestArn: string | undefined;

  /**
   * @public
   * <p>The ARN of a decoder manifest associated with the vehicle.</p>
   */
  decoderManifestArn: string | undefined;

  /**
   * @public
   * <p>The time the vehicle was created in seconds since epoch (January 1, 1970 at midnight UTC time).</p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p>The time the vehicle was last updated in seconds since epoch (January 1, 1970 at midnight UTC time). </p>
   */
  lastModificationTime: Date | undefined;
}

/**
 * @public
 */
export interface ListVehiclesResponse {
  /**
   * @public
   * <p> A list of vehicles and information about them. </p>
   */
  vehicleSummaries?: VehicleSummary[];

  /**
   * @public
   * <p> The token to retrieve the next set of results, or <code>null</code> if there are no more results. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateVehicleRequest {
  /**
   * @public
   * <p>The unique ID of the vehicle to update.</p>
   */
  vehicleName: string | undefined;

  /**
   * @public
   * <p>The ARN of a vehicle model (model manifest) associated with the vehicle.</p>
   */
  modelManifestArn?: string;

  /**
   * @public
   * <p>The ARN of the decoder manifest associated with this vehicle.</p>
   */
  decoderManifestArn?: string;

  /**
   * @public
   * <p>Static information about a vehicle in a key-value pair. For example:</p>
   *         <p>
   *             <code>"engineType"</code> : <code>"1.3 L R2"</code>
   *          </p>
   */
  attributes?: Record<string, string>;

  /**
   * @public
   * <p>The method the specified attributes will update the existing attributes on the
   *             vehicle. Use<code>Overwite</code> to replace the vehicle attributes with the specified
   *             attributes. Or use <code>Merge</code> to combine all attributes.</p>
   *         <p>This is required if attributes are present in the input.</p>
   */
  attributeUpdateMode?: UpdateMode;
}

/**
 * @public
 */
export interface UpdateVehicleResponse {
  /**
   * @public
   * <p>The ID of the updated vehicle.</p>
   */
  vehicleName?: string;

  /**
   * @public
   * <p>The ARN of the updated vehicle.</p>
   */
  arn?: string;
}
