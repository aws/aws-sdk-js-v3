// smithy-typescript generated code
import type {
  CampaignStatus,
  Compression,
  DataFormat,
  DefaultForUnmappedSignalsType,
  DiagnosticsMode,
  EncryptionStatus,
  EncryptionType,
  ListResponseScope,
  LogType,
  ManifestStatus,
  NetworkInterfaceFailureReason,
  NetworkInterfaceType,
  NodeDataEncoding,
  NodeDataType,
  RegistrationStatus,
  ROS2PrimitiveType,
  SignalDecoderFailureReason,
  SignalDecoderType,
  SignalNodeType,
  SignalValueType,
  SpoolingMode,
  StorageCompressionFormat,
  StorageMaximumSizeUnit,
  StorageMinimumTimeToLiveUnit,
  StructuredMessageListType,
  TimeUnit,
  TriggerMode,
  UpdateCampaignAction,
  UpdateMode,
  VehicleAssociationBehavior,
  VehicleMiddlewareProtocol,
  VehicleState,
} from "./enums";

/**
 * A signal that represents a vehicle device such as the engine, heater, and door locks. Data from an actuator reports the state of a certain vehicle device.
 *
 * > **Note:** Updating actuator data can change the state of a device. For example, you can turn on or off the heater by updating its actuator data.
 *
 * @public
 */
export interface Actuator {
  /**
   * The fully qualified name of the actuator. For example, the fully qualified name of an actuator might be `Vehicle.Front.Left.Door.Lock`.
   *
   * @public
   */
  fullyQualifiedName: string | undefined;

  /**
   * The specified data type of the actuator.
   *
   * @public
   */
  dataType: NodeDataType | undefined;

  /**
   * A brief description of the actuator.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The scientific unit for the actuator.
   *
   * @public
   */
  unit?: string | undefined;

  /**
   * A list of possible values an actuator can take.
   *
   * @public
   */
  allowedValues?: string[] | undefined;

  /**
   * The specified possible minimum value of an actuator.
   *
   * @public
   */
  min?: number | undefined;

  /**
   * The specified possible maximum value of an actuator.
   *
   * @public
   */
  max?: number | undefined;

  /**
   * A specified value for the actuator.
   *
   * @deprecated assignedValue is no longer in use.
   * @public
   */
  assignedValue?: string | undefined;

  /**
   * The deprecation message for the node or the branch that was moved or deleted.
   *
   * @public
   */
  deprecationMessage?: string | undefined;

  /**
   * A comment in addition to the description.
   *
   * @public
   */
  comment?: string | undefined;

  /**
   * The fully qualified name of the struct node for the actuator if the data type of the actuator is `Struct` or `StructArray`. For example, the struct fully qualified name of an actuator might be `Vehicle.Door.LockStruct`.
   *
   * @public
   */
  structFullyQualifiedName?: string | undefined;
}

/**
 * @public
 */
export interface AssociateVehicleFleetRequest {
  /**
   * The unique ID of the vehicle to associate with the fleet.
   *
   * @public
   */
  vehicleName: string | undefined;

  /**
   * The ID of a fleet.
   *
   * @public
   */
  fleetId: string | undefined;
}

/**
 * @public
 */
export interface AssociateVehicleFleetResponse {}

/**
 * A validation error due to mismatch between the expected data type, length, or pattern of the parameter and the input.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The name of the parameter field with the validation error.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A message about the validation error.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * A signal that represents static information about the vehicle, such as engine type or manufacturing date.
 *
 * @public
 */
export interface Attribute {
  /**
   * The fully qualified name of the attribute. For example, the fully qualified name of an attribute might be `Vehicle.Body.Engine.Type`.
   *
   * @public
   */
  fullyQualifiedName: string | undefined;

  /**
   * The specified data type of the attribute.
   *
   * @public
   */
  dataType: NodeDataType | undefined;

  /**
   * A brief description of the attribute.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The scientific unit for the attribute.
   *
   * @public
   */
  unit?: string | undefined;

  /**
   * A list of possible values an attribute can be assigned.
   *
   * @public
   */
  allowedValues?: string[] | undefined;

  /**
   * The specified possible minimum value of the attribute.
   *
   * @public
   */
  min?: number | undefined;

  /**
   * The specified possible maximum value of the attribute.
   *
   * @public
   */
  max?: number | undefined;

  /**
   * A specified value for the attribute.
   *
   * @deprecated assignedValue is no longer in use.
   * @public
   */
  assignedValue?: string | undefined;

  /**
   * The default value of the attribute.
   *
   * @public
   */
  defaultValue?: string | undefined;

  /**
   * The deprecation message for the node or the branch that was moved or deleted.
   *
   * @public
   */
  deprecationMessage?: string | undefined;

  /**
   * A comment in addition to the description.
   *
   * @public
   */
  comment?: string | undefined;
}

/**
 * Vehicles associated with the state template will stream telemetry data when there is a change.
 *
 * @public
 */
export interface OnChangeStateTemplateUpdateStrategy {}

/**
 * The length of time between state template updates.
 *
 * @public
 */
export interface TimePeriod {
  /**
   * A unit of time.
   *
   * @public
   */
  unit: TimeUnit | undefined;

  /**
   * A number of time units.
   *
   * @public
   */
  value: number | undefined;
}

/**
 * Vehicles associated with the state template will stream telemetry data during a specified time period.
 *
 * @public
 */
export interface PeriodicStateTemplateUpdateStrategy {
  /**
   * The length of time between state template updates.
   *
   * @public
   */
  stateTemplateUpdateRate: TimePeriod | undefined;
}

/**
 * The update strategy for the state template. Vehicles associated with the state template can stream telemetry data with either an `onChange` or `periodic` update strategy.
 *
 * > **Important:** Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see [Amazon Web Services Region and feature availability](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html) in the *Amazon Web Services IoT FleetWise Developer Guide*.
 *
 * @public
 */
export type StateTemplateUpdateStrategy =
  | StateTemplateUpdateStrategy.OnChangeMember
  | StateTemplateUpdateStrategy.PeriodicMember
  | StateTemplateUpdateStrategy.$UnknownMember;

/**
 * @public
 */
export namespace StateTemplateUpdateStrategy {
  /**
   * Vehicles associated with the state template will stream telemetry data during a specified time period.
   *
   * @public
   */
  export interface PeriodicMember {
    periodic: PeriodicStateTemplateUpdateStrategy;
    onChange?: never;
    $unknown?: never;
  }

  /**
   * Vehicles associated with the state template will stream telemetry data when there is a change.
   *
   * @public
   */
  export interface OnChangeMember {
    periodic?: never;
    onChange: OnChangeStateTemplateUpdateStrategy;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    periodic?: never;
    onChange?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    periodic: (value: PeriodicStateTemplateUpdateStrategy) => T;
    onChange: (value: OnChangeStateTemplateUpdateStrategy) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The state template associated with a vehicle. State templates contain state properties, which are signals that belong to a signal catalog that is synchronized between the Amazon Web Services IoT FleetWise Edge and the Amazon Web Services Cloud.
 *
 * > **Important:** Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see [Amazon Web Services Region and feature availability](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html) in the *Amazon Web Services IoT FleetWise Developer Guide*.
 *
 * @public
 */
export interface StateTemplateAssociation {
  /**
   * The unique ID of the state template.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The update strategy for the state template. Vehicles associated with the state template can stream telemetry data with either an `onChange` or `periodic` update strategy.
   *
   * > **Important:** Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see [Amazon Web Services Region and feature availability](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html) in the *Amazon Web Services IoT FleetWise Developer Guide*.
   *
   * @public
   */
  stateTemplateUpdateStrategy: StateTemplateUpdateStrategy | undefined;
}

/**
 * A set of key/value pairs that are used to manage the resource.
 *
 * @public
 */
export interface Tag {
  /**
   * The tag's key.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The tag's value.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * Information about the vehicle to create.
 *
 * @public
 */
export interface CreateVehicleRequestItem {
  /**
   * The unique ID of the vehicle to create.
   *
   * @public
   */
  vehicleName: string | undefined;

  /**
   * The ARN of the vehicle model (model manifest) to create the vehicle from.
   *
   * @public
   */
  modelManifestArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a decoder manifest associated with the vehicle to create.
   *
   * @public
   */
  decoderManifestArn: string | undefined;

  /**
   * Static information about a vehicle in a key-value pair. For example: `"engine Type"` : `"v6"`
   *
   * @public
   */
  attributes?: Record<string, string> | undefined;

  /**
   * An option to create a new Amazon Web Services IoT thing when creating a vehicle, or to validate an existing thing as a vehicle.
   *
   * @public
   */
  associationBehavior?: VehicleAssociationBehavior | undefined;

  /**
   * Metadata which can be used to manage the vehicle.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * Associate state templates to track the state of the vehicle. State templates determine which signal updates the vehicle sends to the cloud.
   *
   * @public
   */
  stateTemplates?: StateTemplateAssociation[] | undefined;
}

/**
 * @public
 */
export interface BatchCreateVehicleRequest {
  /**
   * A list of information about each vehicle to create. For more information, see the API data type.
   *
   * @public
   */
  vehicles: CreateVehicleRequestItem[] | undefined;
}

/**
 * An HTTP error resulting from creating a vehicle.
 *
 * @public
 */
export interface CreateVehicleError {
  /**
   * The ID of the vehicle with the error.
   *
   * @public
   */
  vehicleName?: string | undefined;

  /**
   * An HTTP error code.
   *
   * @public
   */
  code?: string | undefined;

  /**
   * A description of the HTTP error.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * Information about a created vehicle.
 *
 * @public
 */
export interface CreateVehicleResponseItem {
  /**
   * The unique ID of the vehicle to create.
   *
   * @public
   */
  vehicleName?: string | undefined;

  /**
   * The ARN of the created vehicle.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The ARN of a created or validated Amazon Web Services IoT thing.
   *
   * @public
   */
  thingArn?: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateVehicleResponse {
  /**
   * A list of information about a batch of created vehicles. For more information, see the API data type.
   *
   * @public
   */
  vehicles?: CreateVehicleResponseItem[] | undefined;

  /**
   * A list of information about creation errors, or an empty list if there aren't any errors.
   *
   * @public
   */
  errors?: CreateVehicleError[] | undefined;
}

/**
 * Information about the vehicle to update.
 *
 * > **Important:** Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see [Amazon Web Services Region and feature availability](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html) in the *Amazon Web Services IoT FleetWise Developer Guide*.
 *
 * @public
 */
export interface UpdateVehicleRequestItem {
  /**
   * The unique ID of the vehicle to update.
   *
   * @public
   */
  vehicleName: string | undefined;

  /**
   * The ARN of the vehicle model (model manifest) associated with the vehicle to update.
   *
   * @public
   */
  modelManifestArn?: string | undefined;

  /**
   * The ARN of the signal decoder manifest associated with the vehicle to update.
   *
   * @public
   */
  decoderManifestArn?: string | undefined;

  /**
   * Static information about a vehicle in a key-value pair. For example:
   *
   * `"engineType"` : `"1.3 L R2"`
   *
   * @public
   */
  attributes?: Record<string, string> | undefined;

  /**
   * The method the specified attributes will update the existing attributes on the vehicle. Use`Overwite` to replace the vehicle attributes with the specified attributes. Or use `Merge` to combine all attributes.
   *
   * This is required if attributes are present in the input.
   *
   * @public
   */
  attributeUpdateMode?: UpdateMode | undefined;

  /**
   * Associate additional state templates to track the state of the vehicle. State templates determine which signal updates the vehicle sends to the cloud.
   *
   * @public
   */
  stateTemplatesToAdd?: StateTemplateAssociation[] | undefined;

  /**
   * Remove existing state template associations from the vehicle.
   *
   * @public
   */
  stateTemplatesToRemove?: string[] | undefined;

  /**
   * Change the `stateTemplateUpdateStrategy` of state templates already associated with the vehicle.
   *
   * @public
   */
  stateTemplatesToUpdate?: StateTemplateAssociation[] | undefined;
}

/**
 * @public
 */
export interface BatchUpdateVehicleRequest {
  /**
   * A list of information about the vehicles to update. For more information, see the API data type.
   *
   * @public
   */
  vehicles: UpdateVehicleRequestItem[] | undefined;
}

/**
 * An HTTP error resulting from updating the description for a vehicle.
 *
 * @public
 */
export interface UpdateVehicleError {
  /**
   * The ID of the vehicle with the error.
   *
   * @public
   */
  vehicleName?: string | undefined;

  /**
   * The relevant HTTP error code (400+).
   *
   * @public
   */
  code?: number | undefined;

  /**
   * A message associated with the error.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * Information about the updated vehicle.
 *
 * @public
 */
export interface UpdateVehicleResponseItem {
  /**
   * The unique ID of the updated vehicle.
   *
   * @public
   */
  vehicleName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the updated vehicle.
   *
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface BatchUpdateVehicleResponse {
  /**
   * A list of information about the batch of updated vehicles.
   *
   * > **Note:** This list contains only unique IDs for the vehicles that were updated.
   *
   * @public
   */
  vehicles?: UpdateVehicleResponseItem[] | undefined;

  /**
   * A list of information about errors returned while updating a batch of vehicles, or, if there aren't any errors, an empty list.
   *
   * @public
   */
  errors?: UpdateVehicleError[] | undefined;
}

/**
 * A group of signals that are defined in a hierarchical structure.
 *
 * @public
 */
export interface Branch {
  /**
   * The fully qualified name of the branch. For example, the fully qualified name of a branch might be `Vehicle.Body.Engine`.
   *
   * @public
   */
  fullyQualifiedName: string | undefined;

  /**
   * A brief description of the branch.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The deprecation message for the node or the branch that was moved or deleted.
   *
   * @public
   */
  deprecationMessage?: string | undefined;

  /**
   * A comment in addition to the description.
   *
   * @public
   */
  comment?: string | undefined;
}

/**
 * Information about a collection scheme that uses a simple logical expression to recognize what data to collect.
 *
 * @public
 */
export interface ConditionBasedCollectionScheme {
  /**
   * The logical expression used to recognize what data to collect. For example, ``$variable.`Vehicle.OutsideAirTemperature` >= 105.0``.
   *
   * @public
   */
  expression: string | undefined;

  /**
   * The minimum duration of time between two triggering events to collect data, in milliseconds.
   *
   * > **Note:** If a signal changes often, you might want to collect data at a slower rate.
   *
   * @public
   */
  minimumTriggerIntervalMs?: number | undefined;

  /**
   * Whether to collect data for all triggering events (`ALWAYS`). Specify (`RISING_EDGE`), or specify only when the condition first evaluates to false. For example, triggering on "AirbagDeployed"; Users aren't interested on triggering when the airbag is already exploded; they only care about the change from not deployed =&gt; deployed.
   *
   * @public
   */
  triggerMode?: TriggerMode | undefined;

  /**
   * Specifies the version of the conditional expression language.
   *
   * @public
   */
  conditionLanguageVersion?: number | undefined;
}

/**
 * Information about a collection scheme that uses a time period to decide how often to collect data.
 *
 * @public
 */
export interface TimeBasedCollectionScheme {
  /**
   * The time period (in milliseconds) to decide how often to collect data. For example, if the time period is `60000`, the Edge Agent software collects data once every minute.
   *
   * @public
   */
  periodMs: number | undefined;
}

/**
 * Specifies what data to collect and how often or when to collect it.
 *
 * @public
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
   * Information about a collection scheme that uses a time period to decide how often to collect data.
   *
   * @public
   */
  export interface TimeBasedCollectionSchemeMember {
    timeBasedCollectionScheme: TimeBasedCollectionScheme;
    conditionBasedCollectionScheme?: never;
    $unknown?: never;
  }

  /**
   * Information about a collection scheme that uses a simple logical expression to recognize what data to collect.
   *
   * @public
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    timeBasedCollectionScheme: (value: TimeBasedCollectionScheme) => T;
    conditionBasedCollectionScheme: (value: ConditionBasedCollectionScheme) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The MQTT topic to which the Amazon Web Services IoT FleetWise campaign routes data. For more information, see [Device communication protocols](https://docs.aws.amazon.com/iot/latest/developerguide/protocols.html) in the *Amazon Web Services IoT Core Developer Guide*.
 *
 * > **Important:** Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see [Amazon Web Services Region and feature availability](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html) in the *Amazon Web Services IoT FleetWise Developer Guide*.
 *
 * @public
 */
export interface MqttTopicConfig {
  /**
   * The ARN of the MQTT topic.
   *
   * @public
   */
  mqttTopicArn: string | undefined;

  /**
   * The ARN of the role that grants Amazon Web Services IoT FleetWise permission to access and act on messages sent to the MQTT topic.
   *
   * @public
   */
  executionRoleArn: string | undefined;
}

/**
 * The Amazon S3 bucket where the Amazon Web Services IoT FleetWise campaign sends data. Amazon S3 is an object storage service that stores data as objects within buckets. For more information, see [Creating, configuring, and working with Amazon S3 buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets-s3.html) in the *Amazon Simple Storage Service User Guide*.
 *
 * @public
 */
export interface S3Config {
  /**
   * The Amazon Resource Name (ARN) of the Amazon S3 bucket.
   *
   * @public
   */
  bucketArn: string | undefined;

  /**
   * Specify the format that files are saved in the Amazon S3 bucket. You can save files in an Apache Parquet or JSON format.
   *
   * - Parquet - Store data in a columnar storage file format. Parquet is optimal for fast data retrieval and can reduce costs. This option is selected by default.
   * - JSON - Store data in a standard text-based JSON file format.
   *
   * @public
   */
  dataFormat?: DataFormat | undefined;

  /**
   * By default, stored data is compressed as a .gzip file. Compressed files have a reduced file size, which can optimize the cost of data storage.
   *
   * @public
   */
  storageCompressionFormat?: StorageCompressionFormat | undefined;

  /**
   * Enter an S3 bucket prefix. The prefix is the string of characters after the bucket name and before the object name. You can use the prefix to organize data stored in Amazon S3 buckets. For more information, see [Organizing objects using prefixes](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-prefixes.html) in the *Amazon Simple Storage Service User Guide*.
   *
   * By default, Amazon Web Services IoT FleetWise sets the prefix `processed-data/year=YY/month=MM/date=DD/hour=HH/` (in UTC) to data it delivers to Amazon S3. You can enter a prefix to append it to this default prefix. For example, if you enter the prefix `vehicles`, the prefix will be `vehicles/processed-data/year=YY/month=MM/date=DD/hour=HH/`.
   *
   * @public
   */
  prefix?: string | undefined;
}

/**
 * The Amazon Timestream table where the Amazon Web Services IoT FleetWise campaign sends data. Timestream stores and organizes data to optimize query processing time and to reduce storage costs. For more information, see [Data modeling](https://docs.aws.amazon.com/timestream/latest/developerguide/data-modeling.html) in the *Amazon Timestream Developer Guide*.
 *
 * @public
 */
export interface TimestreamConfig {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Timestream table.
   *
   * @public
   */
  timestreamTableArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the task execution role that grants Amazon Web Services IoT FleetWise permission to deliver data to the Amazon Timestream table.
   *
   * @public
   */
  executionRoleArn: string | undefined;
}

/**
 * The destination where the campaign sends data. You can send data to an MQTT topic, or store it in Amazon S3 or Amazon Timestream.
 *
 * @public
 */
export type DataDestinationConfig =
  | DataDestinationConfig.MqttTopicConfigMember
  | DataDestinationConfig.S3ConfigMember
  | DataDestinationConfig.TimestreamConfigMember
  | DataDestinationConfig.$UnknownMember;

/**
 * @public
 */
export namespace DataDestinationConfig {
  /**
   * The Amazon S3 bucket where the Amazon Web Services IoT FleetWise campaign sends data.
   *
   * @public
   */
  export interface S3ConfigMember {
    s3Config: S3Config;
    timestreamConfig?: never;
    mqttTopicConfig?: never;
    $unknown?: never;
  }

  /**
   * The Amazon Timestream table where the campaign sends data.
   *
   * @public
   */
  export interface TimestreamConfigMember {
    s3Config?: never;
    timestreamConfig: TimestreamConfig;
    mqttTopicConfig?: never;
    $unknown?: never;
  }

  /**
   * The MQTT topic to which the Amazon Web Services IoT FleetWise campaign routes data.
   *
   * > **Important:** Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see [Amazon Web Services Region and feature availability](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html) in the *Amazon Web Services IoT FleetWise Developer Guide*.
   *
   * @public
   */
  export interface MqttTopicConfigMember {
    s3Config?: never;
    timestreamConfig?: never;
    mqttTopicConfig: MqttTopicConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3Config?: never;
    timestreamConfig?: never;
    mqttTopicConfig?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    s3Config: (value: S3Config) => T;
    timestreamConfig: (value: TimestreamConfig) => T;
    mqttTopicConfig: (value: MqttTopicConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The maximum storage size for the data partition.
 *
 * > **Important:** Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see [Amazon Web Services Region and feature availability](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html) in the *Amazon Web Services IoT FleetWise Developer Guide*.
 *
 * @public
 */
export interface StorageMaximumSize {
  /**
   * The data type of the data to store.
   *
   * @public
   */
  unit: StorageMaximumSizeUnit | undefined;

  /**
   * The maximum amount of time to store data.
   *
   * @public
   */
  value: number | undefined;
}

/**
 * Information about the minimum amount of time that data will be kept.
 *
 * > **Important:** Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see [Amazon Web Services Region and feature availability](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html) in the *Amazon Web Services IoT FleetWise Developer Guide*.
 *
 * @public
 */
export interface StorageMinimumTimeToLive {
  /**
   * The time increment type.
   *
   * @public
   */
  unit: StorageMinimumTimeToLiveUnit | undefined;

  /**
   * The minimum amount of time to store the data.
   *
   * @public
   */
  value: number | undefined;
}

/**
 * Size, time, and location options for the data partition.
 *
 * @public
 */
export interface DataPartitionStorageOptions {
  /**
   * The maximum storage size of the data stored in the data partition.
   *
   * > **Note:** Newer data overwrites older data when the partition reaches the maximum size.
   *
   * @public
   */
  maximumSize: StorageMaximumSize | undefined;

  /**
   * The folder name for the data partition under the campaign storage folder.
   *
   * @public
   */
  storageLocation: string | undefined;

  /**
   * The amount of time that data in this partition will be kept on disk.
   *
   * - After the designated amount of time passes, the data can be removed, but it's not guaranteed to be removed.
   * - Before the time expires, data in this partition can still be deleted if the partition reaches its configured maximum size.
   * - Newer data will overwrite older data when the partition reaches the maximum size.
   *
   * @public
   */
  minimumTimeToLive: StorageMinimumTimeToLive | undefined;
}

/**
 * The upload options for the data partition. If upload options are specified, you must also specify storage options. See [DataPartitionStorageOptions](https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_DataPartitionStorageOptions.html).
 *
 * > **Important:** Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see [Amazon Web Services Region and feature availability](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html) in the *Amazon Web Services IoT FleetWise Developer Guide*.
 *
 * @public
 */
export interface DataPartitionUploadOptions {
  /**
   * The logical expression used to recognize what data to collect. For example, ``$variable.`Vehicle.OutsideAirTemperature` >= 105.0``.
   *
   * @public
   */
  expression: string | undefined;

  /**
   * The version of the condition language. Defaults to the most recent condition language version.
   *
   * @public
   */
  conditionLanguageVersion?: number | undefined;
}

/**
 * The configuration for signal data storage and upload options. You can only specify these options when the campaign's spooling mode is `TO_DISK`.
 *
 * > **Important:** Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see [Amazon Web Services Region and feature availability](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html) in the *Amazon Web Services IoT FleetWise Developer Guide*.
 *
 * @public
 */
export interface DataPartition {
  /**
   * The ID of the data partition. The data partition ID must be unique within a campaign. You can establish a data partition as the default partition for a campaign by using `default` as the ID.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The storage options for a data partition.
   *
   * @public
   */
  storageOptions: DataPartitionStorageOptions | undefined;

  /**
   * The upload options for the data partition.
   *
   * @public
   */
  uploadOptions?: DataPartitionUploadOptions | undefined;
}

/**
 * Information about a signal.
 *
 * @public
 */
export interface SignalInformation {
  /**
   * The name of the signal.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The maximum number of samples to collect.
   *
   * @public
   */
  maxSampleCount?: number | undefined;

  /**
   * The minimum duration of time (in milliseconds) between two triggering events to collect data.
   *
   * > **Note:** If a signal changes often, you might want to collect data at a slower rate.
   *
   * @public
   */
  minimumSamplingIntervalMs?: number | undefined;

  /**
   * The ID of the data partition this signal is associated with.
   *
   * The ID must match one of the IDs provided in `dataPartitions`. This is accomplished either by specifying a particular data partition ID or by using `default` for an established default partition. You can establish a default partition in the `DataPartition` data type.
   *
   * > **Note:** If you upload a signal as a condition for a campaign's data partition, the same signal must be included in `signalsToCollect`.
   *
   * > **Important:** Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see [Amazon Web Services Region and feature availability](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html) in the *Amazon Web Services IoT FleetWise Developer Guide*.
   *
   * @public
   */
  dataPartitionId?: string | undefined;
}

/**
 * Specifies the condition under which a signal fetch occurs.
 *
 * @public
 */
export interface ConditionBasedSignalFetchConfig {
  /**
   * The condition that must be satisfied to trigger a signal fetch.
   *
   * @public
   */
  conditionExpression: string | undefined;

  /**
   * Indicates the mode in which the signal fetch is triggered.
   *
   * @public
   */
  triggerMode: TriggerMode | undefined;
}

/**
 * Used to configure a frequency-based vehicle signal fetch.
 *
 * @public
 */
export interface TimeBasedSignalFetchConfig {
  /**
   * The frequency with which the signal fetch will be executed.
   *
   * @public
   */
  executionFrequencyMs: number | undefined;
}

/**
 * The configuration of the signal fetch operation.
 *
 * > **Important:** Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see [Amazon Web Services Region and feature availability](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html) in the *Amazon Web Services IoT FleetWise Developer Guide*.
 *
 * @public
 */
export type SignalFetchConfig =
  | SignalFetchConfig.ConditionBasedMember
  | SignalFetchConfig.TimeBasedMember
  | SignalFetchConfig.$UnknownMember;

/**
 * @public
 */
export namespace SignalFetchConfig {
  /**
   * The configuration of a time-based signal fetch operation.
   *
   * @public
   */
  export interface TimeBasedMember {
    timeBased: TimeBasedSignalFetchConfig;
    conditionBased?: never;
    $unknown?: never;
  }

  /**
   * The configuration of a condition-based signal fetch operation.
   *
   * @public
   */
  export interface ConditionBasedMember {
    timeBased?: never;
    conditionBased: ConditionBasedSignalFetchConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    timeBased?: never;
    conditionBased?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    timeBased: (value: TimeBasedSignalFetchConfig) => T;
    conditionBased: (value: ConditionBasedSignalFetchConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Information about the signal to be fetched.
 *
 * > **Important:** Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see [Amazon Web Services Region and feature availability](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html) in the *Amazon Web Services IoT FleetWise Developer Guide*.
 *
 * @public
 */
export interface SignalFetchInformation {
  /**
   * The fully qualified name of the signal to be fetched.
   *
   * @public
   */
  fullyQualifiedName: string | undefined;

  /**
   * The configuration of the signal fetch operation.
   *
   * @public
   */
  signalFetchConfig: SignalFetchConfig | undefined;

  /**
   * The version of the condition language used.
   *
   * @public
   */
  conditionLanguageVersion?: number | undefined;

  /**
   * The actions to be performed by the signal fetch.
   *
   * @public
   */
  actions: string[] | undefined;
}

/**
 * @public
 */
export interface CreateCampaignRequest {
  /**
   * The name of the campaign to create.
   *
   * @public
   */
  name: string | undefined;

  /**
   * An optional description of the campaign to help identify its purpose.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the signal catalog to associate with the campaign.
   *
   * @public
   */
  signalCatalogArn: string | undefined;

  /**
   * The ARN of the vehicle or fleet to deploy a campaign to.
   *
   * @public
   */
  targetArn: string | undefined;

  /**
   * The time, in milliseconds, to deliver a campaign after it was approved. If it's not specified, `0` is used.
   *
   * Default: `0`
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The time the campaign expires, in seconds since epoch (January 1, 1970 at midnight UTC time). Vehicle data isn't collected after the campaign expires.
   *
   * Default: 253402214400 (December 31, 9999, 00:00:00 UTC)
   *
   * @public
   */
  expiryTime?: Date | undefined;

  /**
   * How long (in milliseconds) to collect raw data after a triggering event initiates the collection. If it's not specified, `0` is used.
   *
   * Default: `0`
   *
   * @public
   */
  postTriggerCollectionDuration?: number | undefined;

  /**
   * Option for a vehicle to send diagnostic trouble codes to Amazon Web Services IoT FleetWise. If you want to send diagnostic trouble codes, use `SEND_ACTIVE_DTCS`. If it's not specified, `OFF` is used.
   *
   * Default: `OFF`
   *
   * @public
   */
  diagnosticsMode?: DiagnosticsMode | undefined;

  /**
   * Determines whether to store collected data after a vehicle lost a connection with the cloud. After a connection is re-established, the data is automatically forwarded to Amazon Web Services IoT FleetWise. If you want to store collected data when a vehicle loses connection with the cloud, use `TO_DISK`. If it's not specified, `OFF` is used.
   *
   * Default: `OFF`
   *
   * @public
   */
  spoolingMode?: SpoolingMode | undefined;

  /**
   * Determines whether to compress signals before transmitting data to Amazon Web Services IoT FleetWise. If you don't want to compress the signals, use `OFF`. If it's not specified, `SNAPPY` is used.
   *
   * Default: `SNAPPY`
   *
   * @public
   */
  compression?: Compression | undefined;

  /**
   * A number indicating the priority of one campaign over another campaign for a certain vehicle or fleet. A campaign with the lowest value is deployed to vehicles before any other campaigns. If it's not specified, `0` is used.
   *
   * Default: `0`
   *
   * @deprecated priority is no longer used or needed as input.
   * @public
   */
  priority?: number | undefined;

  /**
   * A list of information about signals to collect.
   *
   * > **Note:** If you upload a signal as a condition in a data partition for a campaign, then those same signals must be included in `signalsToCollect`.
   *
   * @public
   */
  signalsToCollect?: SignalInformation[] | undefined;

  /**
   * The data collection scheme associated with the campaign. You can specify a scheme that collects data based on time or an event.
   *
   * @public
   */
  collectionScheme: CollectionScheme | undefined;

  /**
   * A list of vehicle attributes to associate with a campaign.
   *
   * Enrich the data with specified vehicle attributes. For example, add `make` and `model` to the campaign, and Amazon Web Services IoT FleetWise will associate the data with those attributes as dimensions in Amazon Timestream. You can then query the data against `make` and `model`.
   *
   * Default: An empty array
   *
   * @public
   */
  dataExtraDimensions?: string[] | undefined;

  /**
   * Metadata that can be used to manage the campaign.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The destination where the campaign sends data. You can send data to an MQTT topic, or store it in Amazon S3 or Amazon Timestream.
   *
   * MQTT is the publish/subscribe messaging protocol used by Amazon Web Services IoT to communicate with your devices.
   *
   * Amazon S3 optimizes the cost of data storage and provides additional mechanisms to use vehicle data, such as data lakes, centralized data storage, data processing pipelines, and analytics. Amazon Web Services IoT FleetWise supports at-least-once file delivery to S3. Your vehicle data is stored on multiple Amazon Web Services IoT FleetWise servers for redundancy and high availability.
   *
   * You can use Amazon Timestream to access and analyze time series data, and Timestream to query vehicle data so that you can identify trends and patterns.
   *
   * @public
   */
  dataDestinationConfigs?: DataDestinationConfig[] | undefined;

  /**
   * The data partitions associated with the signals collected from the vehicle.
   *
   * @public
   */
  dataPartitions?: DataPartition[] | undefined;

  /**
   * A list of information about signals to fetch.
   *
   * @public
   */
  signalsToFetch?: SignalFetchInformation[] | undefined;
}

/**
 * @public
 */
export interface CreateCampaignResponse {
  /**
   * The name of the created campaign.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The ARN of the created campaign.
   *
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteCampaignRequest {
  /**
   * The name of the campaign to delete.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteCampaignResponse {
  /**
   * The name of the deleted campaign.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the deleted campaign.
   *
   * > **Note:** The ARN isn’t returned if a campaign doesn’t exist.
   *
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface GetCampaignRequest {
  /**
   * The name of the campaign to retrieve information about.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetCampaignResponse {
  /**
   * The name of the campaign.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the campaign.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The description of the campaign.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ARN of a signal catalog.
   *
   * @public
   */
  signalCatalogArn?: string | undefined;

  /**
   * The ARN of the vehicle or the fleet targeted by the campaign.
   *
   * @public
   */
  targetArn?: string | undefined;

  /**
   * The state of the campaign. The status can be one of: `CREATING`, `WAITING_FOR_APPROVAL`, `RUNNING`, and `SUSPENDED`.
   *
   * @public
   */
  status?: CampaignStatus | undefined;

  /**
   * The time, in milliseconds, to deliver a campaign after it was approved.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The time the campaign expires, in seconds since epoch (January 1, 1970 at midnight UTC time). Vehicle data won't be collected after the campaign expires.
   *
   * @public
   */
  expiryTime?: Date | undefined;

  /**
   * How long (in seconds) to collect raw data after a triggering event initiates the collection.
   *
   * @public
   */
  postTriggerCollectionDuration?: number | undefined;

  /**
   * Option for a vehicle to send diagnostic trouble codes to Amazon Web Services IoT FleetWise.
   *
   * @public
   */
  diagnosticsMode?: DiagnosticsMode | undefined;

  /**
   * Whether to store collected data after a vehicle lost a connection with the cloud. After a connection is re-established, the data is automatically forwarded to Amazon Web Services IoT FleetWise.
   *
   * @public
   */
  spoolingMode?: SpoolingMode | undefined;

  /**
   * Whether to compress signals before transmitting data to Amazon Web Services IoT FleetWise. If `OFF` is specified, the signals aren't compressed. If it's not specified, `SNAPPY` is used.
   *
   * @public
   */
  compression?: Compression | undefined;

  /**
   * A number indicating the priority of one campaign over another campaign for a certain vehicle or fleet. A campaign with the lowest value is deployed to vehicles before any other campaigns.
   *
   * @public
   */
  priority?: number | undefined;

  /**
   * Information about a list of signals to collect data on.
   *
   * @public
   */
  signalsToCollect?: SignalInformation[] | undefined;

  /**
   * Information about the data collection scheme associated with the campaign.
   *
   * @public
   */
  collectionScheme?: CollectionScheme | undefined;

  /**
   * A list of vehicle attributes associated with the campaign.
   *
   * @public
   */
  dataExtraDimensions?: string[] | undefined;

  /**
   * The time the campaign was created in seconds since epoch (January 1, 1970 at midnight UTC time).
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The last time the campaign was modified.
   *
   * @public
   */
  lastModificationTime?: Date | undefined;

  /**
   * The destination where the campaign sends data. You can send data to an MQTT topic, or store it in Amazon S3 or Amazon Timestream.
   *
   * MQTT is the publish/subscribe messaging protocol used by Amazon Web Services IoT to communicate with your devices.
   *
   * Amazon S3 optimizes the cost of data storage and provides additional mechanisms to use vehicle data, such as data lakes, centralized data storage, data processing pipelines, and analytics.
   *
   * You can use Amazon Timestream to access and analyze time series data, and Timestream to query vehicle data so that you can identify trends and patterns.
   *
   * @public
   */
  dataDestinationConfigs?: DataDestinationConfig[] | undefined;

  /**
   * The data partitions associated with the signals collected from the vehicle.
   *
   * @public
   */
  dataPartitions?: DataPartition[] | undefined;

  /**
   * Information about a list of signals to fetch data from.
   *
   * @public
   */
  signalsToFetch?: SignalFetchInformation[] | undefined;
}

/**
 * @public
 */
export interface ListCampaignsRequest {
  /**
   * A pagination token for the next set of results.
   *
   * If the results of a search are large, only a portion of the results are returned, and a `nextToken` pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of items to return, between 1 and 100, inclusive.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * An optional parameter to filter the results by the status of each created campaign in your account. The status can be one of: `CREATING`, `WAITING_FOR_APPROVAL`, `RUNNING`, or `SUSPENDED`.
   *
   * @public
   */
  status?: string | undefined;

  /**
   * When you set the `listResponseScope` parameter to `METADATA_ONLY`, the list response includes: campaign name, Amazon Resource Name (ARN), creation time, and last modification time.
   *
   * @public
   */
  listResponseScope?: ListResponseScope | undefined;
}

/**
 * Information about a campaign.
 *
 * You can use the API operation to return this information about multiple created campaigns.
 *
 * @public
 */
export interface CampaignSummary {
  /**
   * The Amazon Resource Name (ARN) of a campaign.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of a campaign.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the campaign.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ARN of the signal catalog associated with the campaign.
   *
   * @public
   */
  signalCatalogArn?: string | undefined;

  /**
   * The ARN of a vehicle or fleet to which the campaign is deployed.
   *
   * @public
   */
  targetArn?: string | undefined;

  /**
   * The state of a campaign. The status can be one of the following:
   *
   * - `CREATING` - Amazon Web Services IoT FleetWise is processing your request to create the campaign.
   * - `WAITING_FOR_APPROVAL` - After a campaign is created, it enters the `WAITING_FOR_APPROVAL` state. To allow Amazon Web Services IoT FleetWise to deploy the campaign to the target vehicle or fleet, use the API operation to approve the campaign.
   * - `RUNNING` - The campaign is active.
   * - `SUSPENDED` - The campaign is suspended. To resume the campaign, use the API operation.
   *
   * @public
   */
  status?: CampaignStatus | undefined;

  /**
   * The time the campaign was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * The last time the campaign was modified.
   *
   * @public
   */
  lastModificationTime: Date | undefined;
}

/**
 * @public
 */
export interface ListCampaignsResponse {
  /**
   * A summary of information about each campaign.
   *
   * @public
   */
  campaignSummaries?: CampaignSummary[] | undefined;

  /**
   * The token to retrieve the next set of results, or `null` if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateCampaignRequest {
  /**
   * The name of the campaign to update.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the campaign.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of vehicle attributes to associate with a signal.
   *
   * Default: An empty array
   *
   * @public
   */
  dataExtraDimensions?: string[] | undefined;

  /**
   * Specifies how to update a campaign. The action can be one of the following:
   *
   * - `APPROVE` - To approve delivering a data collection scheme to vehicles.
   * - `SUSPEND` - To suspend collecting signal data. The campaign is deleted from vehicles and all vehicles in the suspended campaign will stop sending data.
   * - `RESUME` - To reactivate the `SUSPEND` campaign. The campaign is redeployed to all vehicles and the vehicles will resume sending data.
   * - `UPDATE` - To update a campaign.
   *
   * @public
   */
  action: UpdateCampaignAction | undefined;
}

/**
 * @public
 */
export interface UpdateCampaignResponse {
  /**
   * The Amazon Resource Name (ARN) of the campaign.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the updated campaign.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The state of a campaign. The status can be one of:
   *
   * - `CREATING` - Amazon Web Services IoT FleetWise is processing your request to create the campaign.
   * - `WAITING_FOR_APPROVAL` - After you create a campaign, it enters this state. Use the API operation to approve the campaign for deployment to the target vehicle or fleet.
   * - `RUNNING` - The campaign is active.
   * - `SUSPENDED` - The campaign is suspended. To resume the campaign, use the API operation.
   *
   * @public
   */
  status?: CampaignStatus | undefined;
}

/**
 * Configurations used to create a decoder manifest.
 *
 * @public
 */
export interface CanDbcDefinition {
  /**
   * Contains information about a network interface.
   *
   * @public
   */
  networkInterface: string | undefined;

  /**
   * A list of DBC files. You can upload only one DBC file for each network interface and specify up to five (inclusive) files in the list. The DBC file can be a maximum size of 200 MB.
   *
   * @public
   */
  canDbcFiles: Uint8Array[] | undefined;

  /**
   * Pairs every signal specified in your vehicle model with a signal decoder.
   *
   * @public
   */
  signalsMap?: Record<string, string> | undefined;
}

/**
 * A single controller area network (CAN) device interface.
 *
 * @public
 */
export interface CanInterface {
  /**
   * The unique name of the interface.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The name of the communication protocol for the interface.
   *
   * @public
   */
  protocolName?: string | undefined;

  /**
   * The version of the communication protocol for the interface.
   *
   * @public
   */
  protocolVersion?: string | undefined;
}

/**
 * Information about a single controller area network (CAN) signal and the messages it receives and transmits.
 *
 * @public
 */
export interface CanSignal {
  /**
   * The ID of the message.
   *
   * @public
   */
  messageId: number | undefined;

  /**
   * Whether the byte ordering of a CAN message is big-endian.
   *
   * @public
   */
  isBigEndian: boolean | undefined;

  /**
   * Determines whether the message is signed (`true`) or not (`false`). If it's signed, the message can represent both positive and negative numbers. The `isSigned` parameter only applies to the `INTEGER` raw signal type, and it doesn't affect the `FLOATING_POINT` raw signal type.
   *
   * @public
   */
  isSigned: boolean | undefined;

  /**
   * Indicates the beginning of the CAN signal. This should always be the least significant bit (LSB).
   *
   * This value might be different from the value in a DBC file. For little endian signals, `startBit` is the same value as in the DBC file. For big endian signals in a DBC file, the start bit is the most significant bit (MSB). You will have to calculate the LSB instead and pass it as the `startBit`.
   *
   * @public
   */
  startBit: number | undefined;

  /**
   * The offset used to calculate the signal value. Combined with factor, the calculation is `value = raw_value * factor + offset`.
   *
   * @public
   */
  offset: number | undefined;

  /**
   * A multiplier used to decode the CAN message.
   *
   * @public
   */
  factor: number | undefined;

  /**
   * How many bytes of data are in the message.
   *
   * @public
   */
  length: number | undefined;

  /**
   * The name of the signal.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The value type of the signal. The default value is `INTEGER`.
   *
   * @public
   */
  signalValueType?: SignalValueType | undefined;
}

/**
 * The log delivery option to send data to Amazon CloudWatch Logs.
 *
 * @public
 */
export interface CloudWatchLogDeliveryOptions {
  /**
   * The type of log to send data to Amazon CloudWatch Logs.
   *
   * @public
   */
  logType: LogType | undefined;

  /**
   * The Amazon CloudWatch Logs group the operation sends data to.
   *
   * @public
   */
  logGroupName?: string | undefined;
}

/**
 * Represents a custom network interface as defined by the customer.
 *
 * > **Important:** Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see [Amazon Web Services Region and feature availability](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html) in the *Amazon Web Services IoT FleetWise Developer Guide*.
 *
 * @public
 */
export interface CustomDecodingInterface {
  /**
   * The name of the interface.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * A network interface that specifies the on-board diagnostic (OBD) II network protocol.
 *
 * @public
 */
export interface ObdInterface {
  /**
   * The name of the interface.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ID of the message requesting vehicle data.
   *
   * @public
   */
  requestMessageId: number | undefined;

  /**
   * The standard OBD II PID.
   *
   * @public
   */
  obdStandard?: string | undefined;

  /**
   * The maximum number message requests per second.
   *
   * @public
   */
  pidRequestIntervalSeconds?: number | undefined;

  /**
   * The maximum number message requests per diagnostic trouble code per second.
   *
   * @public
   */
  dtcRequestIntervalSeconds?: number | undefined;

  /**
   * Whether to use extended IDs in the message.
   *
   * @public
   */
  useExtendedIds?: boolean | undefined;

  /**
   * Whether the vehicle has a transmission control module (TCM).
   *
   * @public
   */
  hasTransmissionEcu?: boolean | undefined;
}

/**
 * The vehicle middleware defined as a type of network interface. Examples of vehicle middleware include `ROS2` and `SOME/IP`.
 *
 * @public
 */
export interface VehicleMiddleware {
  /**
   * The name of the vehicle middleware.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The protocol name of the vehicle middleware.
   *
   * @public
   */
  protocolName: VehicleMiddlewareProtocol | undefined;
}

/**
 * Represents a node and its specifications in an in-vehicle communication network. All signal decoders must be associated with a network node.
 *
 * To return this information about all the network interfaces specified in a decoder manifest, use the API operation.
 *
 * @public
 */
export interface NetworkInterface {
  /**
   * The ID of the network interface.
   *
   * @public
   */
  interfaceId: string | undefined;

  /**
   * The network protocol for the vehicle. For example, `CAN_SIGNAL` specifies a protocol that defines how data is communicated between electronic control units (ECUs). `OBD_SIGNAL` specifies a protocol that defines how self-diagnostic data is communicated between ECUs.
   *
   * @public
   */
  type: NetworkInterfaceType | undefined;

  /**
   * Information about a network interface specified by the Controller Area Network (CAN) protocol.
   *
   * @public
   */
  canInterface?: CanInterface | undefined;

  /**
   * Information about a network interface specified by the on-board diagnostic (OBD) II protocol.
   *
   * @public
   */
  obdInterface?: ObdInterface | undefined;

  /**
   * The vehicle middleware defined as a type of network interface. Examples of vehicle middleware include `ROS2` and `SOME/IP`.
   *
   * @public
   */
  vehicleMiddleware?: VehicleMiddleware | undefined;

  /**
   * Information about a [custom network interface](https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_CustomDecodingInterface.html).
   *
   * @public
   */
  customDecodingInterface?: CustomDecodingInterface | undefined;
}

/**
 * Information about signals using a custom decoding protocol as defined by the customer.
 *
 * > **Important:** Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see [Amazon Web Services Region and feature availability](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html) in the *Amazon Web Services IoT FleetWise Developer Guide*.
 *
 * @public
 */
export interface CustomDecodingSignal {
  /**
   * The ID of the signal.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * Represents a ROS 2 compliant primitive type message of the complex data structure.
 *
 * @public
 */
export interface ROS2PrimitiveMessageDefinition {
  /**
   * The primitive type (integer, floating point, boolean, etc.) for the ROS 2 primitive message definition.
   *
   * @public
   */
  primitiveType: ROS2PrimitiveType | undefined;

  /**
   * The offset used to calculate the signal value. Combined with scaling, the calculation is `value = raw_value * scaling + offset`.
   *
   * @public
   */
  offset?: number | undefined;

  /**
   * A multiplier used to decode the message.
   *
   * @public
   */
  scaling?: number | undefined;

  /**
   * An optional attribute specifying the upper bound for `STRING` and `WSTRING`.
   *
   * @public
   */
  upperBound?: number | undefined;
}

/**
 * Represents a primitive type node of the complex data structure.
 *
 * @public
 */
export type PrimitiveMessageDefinition =
  | PrimitiveMessageDefinition.Ros2PrimitiveMessageDefinitionMember
  | PrimitiveMessageDefinition.$UnknownMember;

/**
 * @public
 */
export namespace PrimitiveMessageDefinition {
  /**
   * Information about a `PrimitiveMessage` using a ROS 2 compliant primitive type message of the complex data structure.
   *
   * @public
   */
  export interface Ros2PrimitiveMessageDefinitionMember {
    ros2PrimitiveMessageDefinition: ROS2PrimitiveMessageDefinition;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    ros2PrimitiveMessageDefinition?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    ros2PrimitiveMessageDefinition: (value: ROS2PrimitiveMessageDefinition) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Information about signal messages using the on-board diagnostics (OBD) II protocol in a vehicle.
 *
 * @public
 */
export interface ObdSignal {
  /**
   * The length of the requested data.
   *
   * @public
   */
  pidResponseLength: number | undefined;

  /**
   * The mode of operation (diagnostic service) in a message.
   *
   * @public
   */
  serviceMode: number | undefined;

  /**
   * The diagnostic code used to request data from a vehicle for this signal.
   *
   * @public
   */
  pid: number | undefined;

  /**
   * A multiplier used to decode the message.
   *
   * @public
   */
  scaling: number | undefined;

  /**
   * The offset used to calculate the signal value. Combined with scaling, the calculation is `value = raw_value * scaling + offset`.
   *
   * @public
   */
  offset: number | undefined;

  /**
   * Indicates the beginning of the message.
   *
   * @public
   */
  startByte: number | undefined;

  /**
   * The length of a message.
   *
   * @public
   */
  byteLength: number | undefined;

  /**
   * The number of positions to shift bits in the message.
   *
   * @public
   */
  bitRightShift?: number | undefined;

  /**
   * The number of bits to mask in a message.
   *
   * @public
   */
  bitMaskLength?: number | undefined;

  /**
   * Determines whether the message is signed (`true`) or not (`false`). If it's signed, the message can represent both positive and negative numbers. The `isSigned` parameter only applies to the `INTEGER` raw signal type, and it doesn't affect the `FLOATING_POINT` raw signal type. The default value is `false`.
   *
   * @public
   */
  isSigned?: boolean | undefined;

  /**
   * The value type of the signal. The default value is `INTEGER`.
   *
   * @public
   */
  signalValueType?: SignalValueType | undefined;
}

/**
 * @public
 */
export interface CreateDecoderManifestResponse {
  /**
   * The name of the created decoder manifest.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ARN of the created decoder manifest.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * A reason a vehicle network interface isn't valid.
 *
 * @public
 */
export interface InvalidNetworkInterface {
  /**
   * The ID of the interface that isn't valid.
   *
   * @public
   */
  interfaceId?: string | undefined;

  /**
   * A message about why the interface isn't valid.
   *
   * @public
   */
  reason?: NetworkInterfaceFailureReason | undefined;
}

/**
 * A reason that a signal decoder isn't valid.
 *
 * @public
 */
export interface InvalidSignalDecoder {
  /**
   * The name of a signal decoder that isn't valid.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A message about why the signal decoder isn't valid.
   *
   * @public
   */
  reason?: SignalDecoderFailureReason | undefined;

  /**
   * The possible cause for the invalid signal decoder.
   *
   * @public
   */
  hint?: string | undefined;
}

/**
 * @public
 */
export interface CreateFleetRequest {
  /**
   * The unique ID of the fleet to create.
   *
   * @public
   */
  fleetId: string | undefined;

  /**
   * A brief description of the fleet to create.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a signal catalog.
   *
   * @public
   */
  signalCatalogArn: string | undefined;

  /**
   * Metadata that can be used to manage the fleet.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateFleetResponse {
  /**
   * The ID of the created fleet.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The ARN of the created fleet.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface CreateModelManifestRequest {
  /**
   * The name of the vehicle model to create.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A brief description of the vehicle model.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of nodes, which are a general abstraction of signals.
   *
   * @public
   */
  nodes: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of a signal catalog.
   *
   * @public
   */
  signalCatalogArn: string | undefined;

  /**
   * Metadata that can be used to manage the vehicle model.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateModelManifestResponse {
  /**
   * The name of the created vehicle model.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ARN of the created vehicle model.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * A reason that a signal isn't valid.
 *
 * @public
 */
export interface InvalidSignal {
  /**
   * The name of the signal that isn't valid.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A message about why the signal isn't valid.
   *
   * @public
   */
  reason?: string | undefined;
}

/**
 * Represents a member of the complex data structure. The data type of the property can be either primitive or another `struct`.
 *
 * @public
 */
export interface CustomProperty {
  /**
   * The fully qualified name of the custom property. For example, the fully qualified name of a custom property might be `ComplexDataTypes.VehicleDataTypes.SVMCamera.FPS`.
   *
   * @public
   */
  fullyQualifiedName: string | undefined;

  /**
   * The data type for the custom property.
   *
   * @public
   */
  dataType: NodeDataType | undefined;

  /**
   * Indicates whether the property is binary data.
   *
   * @public
   */
  dataEncoding?: NodeDataEncoding | undefined;

  /**
   * A brief description of the custom property.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The deprecation message for the node or the branch that was moved or deleted.
   *
   * @public
   */
  deprecationMessage?: string | undefined;

  /**
   * A comment in addition to the description.
   *
   * @public
   */
  comment?: string | undefined;

  /**
   * The fully qualified name of the struct node for the custom property if the data type of the custom property is `Struct` or `StructArray`.
   *
   * @public
   */
  structFullyQualifiedName?: string | undefined;
}

/**
 * An input component that reports the environmental condition of a vehicle.
 *
 * > **Note:** You can collect data about fluid levels, temperatures, vibrations, or battery voltage from sensors.
 *
 * @public
 */
export interface Sensor {
  /**
   * The fully qualified name of the sensor. For example, the fully qualified name of a sensor might be `Vehicle.Body.Engine.Battery`.
   *
   * @public
   */
  fullyQualifiedName: string | undefined;

  /**
   * The specified data type of the sensor.
   *
   * @public
   */
  dataType: NodeDataType | undefined;

  /**
   * A brief description of a sensor.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The scientific unit of measurement for data collected by the sensor.
   *
   * @public
   */
  unit?: string | undefined;

  /**
   * A list of possible values a sensor can take.
   *
   * @public
   */
  allowedValues?: string[] | undefined;

  /**
   * The specified possible minimum value of the sensor.
   *
   * @public
   */
  min?: number | undefined;

  /**
   * The specified possible maximum value of the sensor.
   *
   * @public
   */
  max?: number | undefined;

  /**
   * The deprecation message for the node or the branch that was moved or deleted.
   *
   * @public
   */
  deprecationMessage?: string | undefined;

  /**
   * A comment in addition to the description.
   *
   * @public
   */
  comment?: string | undefined;

  /**
   * The fully qualified name of the struct node for a sensor if the data type of the actuator is `Struct` or `StructArray`. For example, the struct fully qualified name of a sensor might be `Vehicle.ADAS.CameraStruct`.
   *
   * @public
   */
  structFullyQualifiedName?: string | undefined;
}

/**
 * The custom structure represents a complex or higher-order data structure.
 *
 * @public
 */
export interface CustomStruct {
  /**
   * The fully qualified name of the custom structure. For example, the fully qualified name of a custom structure might be `ComplexDataTypes.VehicleDataTypes.SVMCamera`.
   *
   * @public
   */
  fullyQualifiedName: string | undefined;

  /**
   * A brief description of the custom structure.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The deprecation message for the node or the branch that was moved or deleted.
   *
   * @public
   */
  deprecationMessage?: string | undefined;

  /**
   * A comment in addition to the description.
   *
   * @public
   */
  comment?: string | undefined;
}

/**
 * A general abstraction of a signal. A node can be specified as an actuator, attribute, branch, or sensor.
 *
 * @public
 */
export type Node =
  | Node.ActuatorMember
  | Node.AttributeMember
  | Node.BranchMember
  | Node.PropertyMember
  | Node.SensorMember
  | Node.StructMember
  | Node.$UnknownMember;

/**
 * @public
 */
export namespace Node {
  /**
   * Information about a node specified as a branch.
   *
   * > **Note:** A group of signals that are defined in a hierarchical structure.
   *
   * @public
   */
  export interface BranchMember {
    branch: Branch;
    sensor?: never;
    actuator?: never;
    attribute?: never;
    struct?: never;
    property?: never;
    $unknown?: never;
  }

  /**
   * An input component that reports the environmental condition of a vehicle.
   *
   * > **Note:** You can collect data about fluid levels, temperatures, vibrations, or battery voltage from sensors.
   *
   * @public
   */
  export interface SensorMember {
    branch?: never;
    sensor: Sensor;
    actuator?: never;
    attribute?: never;
    struct?: never;
    property?: never;
    $unknown?: never;
  }

  /**
   * Information about a node specified as an actuator.
   *
   * > **Note:** An actuator is a digital representation of a vehicle device.
   *
   * @public
   */
  export interface ActuatorMember {
    branch?: never;
    sensor?: never;
    actuator: Actuator;
    attribute?: never;
    struct?: never;
    property?: never;
    $unknown?: never;
  }

  /**
   * Information about a node specified as an attribute.
   *
   * > **Note:** An attribute represents static information about a vehicle.
   *
   * @public
   */
  export interface AttributeMember {
    branch?: never;
    sensor?: never;
    actuator?: never;
    attribute: Attribute;
    struct?: never;
    property?: never;
    $unknown?: never;
  }

  /**
   * Represents a complex or higher-order data structure.
   *
   * @public
   */
  export interface StructMember {
    branch?: never;
    sensor?: never;
    actuator?: never;
    attribute?: never;
    struct: CustomStruct;
    property?: never;
    $unknown?: never;
  }

  /**
   * Represents a member of the complex data structure. The `datatype` of the property can be either primitive or another `struct`.
   *
   * @public
   */
  export interface PropertyMember {
    branch?: never;
    sensor?: never;
    actuator?: never;
    attribute?: never;
    struct?: never;
    property: CustomProperty;
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
    struct?: never;
    property?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    branch: (value: Branch) => T;
    sensor: (value: Sensor) => T;
    actuator: (value: Actuator) => T;
    attribute: (value: Attribute) => T;
    struct: (value: CustomStruct) => T;
    property: (value: CustomProperty) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateSignalCatalogRequest {
  /**
   * The name of the signal catalog to create.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A brief description of the signal catalog.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of information about nodes, which are a general abstraction of signals. For more information, see the API data type.
   *
   * @public
   */
  nodes?: Node[] | undefined;

  /**
   * Metadata that can be used to manage the signal catalog.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateSignalCatalogResponse {
  /**
   * The name of the created signal catalog.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ARN of the created signal catalog.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface CreateStateTemplateRequest {
  /**
   * The name of the state template.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A brief description of the state template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ARN of the signal catalog associated with the state template.
   *
   * @public
   */
  signalCatalogArn: string | undefined;

  /**
   * A list of signals from which data is collected. The state template properties contain the fully qualified names of the signals.
   *
   * @public
   */
  stateTemplateProperties: string[] | undefined;

  /**
   * A list of vehicle attributes to associate with the payload published on the state template's MQTT topic. (See [Processing last known state vehicle data using MQTT messaging](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/process-visualize-data.html#process-last-known-state-vehicle-data)). For example, if you add `Vehicle.Attributes.Make` and `Vehicle.Attributes.Model` attributes, Amazon Web Services IoT FleetWise will enrich the protobuf encoded payload with those attributes in the `extraDimensions` field.
   *
   * @public
   */
  dataExtraDimensions?: string[] | undefined;

  /**
   * A list of vehicle attributes to associate with user properties of the messages published on the state template's MQTT topic. (See [Processing last known state vehicle data using MQTT messaging](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/process-visualize-data.html#process-last-known-state-vehicle-data)). For example, if you add `Vehicle.Attributes.Make` and `Vehicle.Attributes.Model` attributes, Amazon Web Services IoT FleetWise will include these attributes as User Properties with the MQTT message.
   *
   * Default: An empty array
   *
   * @public
   */
  metadataExtraDimensions?: string[] | undefined;

  /**
   * Metadata that can be used to manage the state template.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateStateTemplateResponse {
  /**
   * The name of the state template.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the state template.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The unique ID of the state template.
   *
   * @public
   */
  id?: string | undefined;
}

/**
 * @public
 */
export interface CreateVehicleRequest {
  /**
   * The unique ID of the vehicle to create.
   *
   * @public
   */
  vehicleName: string | undefined;

  /**
   * The Amazon Resource Name ARN of a vehicle model.
   *
   * @public
   */
  modelManifestArn: string | undefined;

  /**
   * The ARN of a decoder manifest.
   *
   * @public
   */
  decoderManifestArn: string | undefined;

  /**
   * Static information about a vehicle in a key-value pair. For example: `"engineType"` : `"1.3 L R2"`
   *
   * To use attributes with Campaigns or State Templates, you must include them using the request parameters `dataExtraDimensions` and/or `metadataExtraDimensions` (for state templates only) when creating your campaign/state template.
   *
   * @public
   */
  attributes?: Record<string, string> | undefined;

  /**
   * An option to create a new Amazon Web Services IoT thing when creating a vehicle, or to validate an existing Amazon Web Services IoT thing as a vehicle.
   *
   * Default:
   *
   * @public
   */
  associationBehavior?: VehicleAssociationBehavior | undefined;

  /**
   * Metadata that can be used to manage the vehicle.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * Associate state templates with the vehicle. You can monitor the last known state of the vehicle in near real time.
   *
   * @public
   */
  stateTemplates?: StateTemplateAssociation[] | undefined;
}

/**
 * @public
 */
export interface CreateVehicleResponse {
  /**
   * The unique ID of the created vehicle.
   *
   * @public
   */
  vehicleName?: string | undefined;

  /**
   * The ARN of the created vehicle.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The ARN of a created or validated Amazon Web Services IoT thing.
   *
   * @public
   */
  thingArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDecoderManifestRequest {
  /**
   * The name of the decoder manifest to delete.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteDecoderManifestResponse {
  /**
   * The name of the deleted decoder manifest.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the deleted decoder manifest.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetDecoderManifestRequest {
  /**
   * The name of the decoder manifest to retrieve information about.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetDecoderManifestResponse {
  /**
   * The name of the decoder manifest.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the decoder manifest.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * A brief description of the decoder manifest.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ARN of a vehicle model (model manifest) associated with the decoder manifest.
   *
   * @public
   */
  modelManifestArn?: string | undefined;

  /**
   * The state of the decoder manifest. If the status is `ACTIVE`, the decoder manifest can't be edited. If the status is marked `DRAFT`, you can edit the decoder manifest.
   *
   * @public
   */
  status?: ManifestStatus | undefined;

  /**
   * The time the decoder manifest was created in seconds since epoch (January 1, 1970 at midnight UTC time).
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * The time the decoder manifest was last updated in seconds since epoch (January 1, 1970 at midnight UTC time).
   *
   * @public
   */
  lastModificationTime: Date | undefined;

  /**
   * The detailed message for the decoder manifest. When a decoder manifest is in an `INVALID` status, the message contains detailed reason and help information.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * Specifications for defining a vehicle network.
 *
 * @public
 */
export type NetworkFileDefinition =
  | NetworkFileDefinition.CanDbcMember
  | NetworkFileDefinition.$UnknownMember;

/**
 * @public
 */
export namespace NetworkFileDefinition {
  /**
   * Information, including CAN DBC files, about the configurations used to create a decoder manifest.
   *
   * @public
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    canDbc: (value: CanDbcDefinition) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface ImportDecoderManifestRequest {
  /**
   * The name of the decoder manifest to import.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The file to load into an Amazon Web Services account.
   *
   * @public
   */
  networkFileDefinitions: NetworkFileDefinition[] | undefined;
}

/**
 * @public
 */
export interface ImportDecoderManifestResponse {
  /**
   * The name of the imported decoder manifest.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the decoder manifest that was imported.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface ListDecoderManifestNetworkInterfacesRequest {
  /**
   * The name of the decoder manifest to list information about.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A pagination token for the next set of results.
   *
   * If the results of a search are large, only a portion of the results are returned, and a `nextToken` pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of items to return, between 1 and 100, inclusive.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDecoderManifestNetworkInterfacesResponse {
  /**
   * A list of information about network interfaces.
   *
   * @public
   */
  networkInterfaces?: NetworkInterface[] | undefined;

  /**
   * The token to retrieve the next set of results, or `null` if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDecoderManifestsRequest {
  /**
   * The Amazon Resource Name (ARN) of a vehicle model (model manifest) associated with the decoder manifest.
   *
   * @public
   */
  modelManifestArn?: string | undefined;

  /**
   * A pagination token for the next set of results.
   *
   * If the results of a search are large, only a portion of the results are returned, and a `nextToken` pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of items to return, between 1 and 100, inclusive.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * When you set the `listResponseScope` parameter to `METADATA_ONLY`, the list response includes: decoder manifest name, Amazon Resource Name (ARN), creation time, and last modification time.
   *
   * @public
   */
  listResponseScope?: ListResponseScope | undefined;
}

/**
 * Information about a created decoder manifest. You can use the API operation to return this information about multiple decoder manifests.
 *
 * @public
 */
export interface DecoderManifestSummary {
  /**
   * The name of the decoder manifest.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The ARN of a vehicle model (model manifest) associated with the decoder manifest.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The ARN of a vehicle model (model manifest) associated with the decoder manifest.
   *
   * @public
   */
  modelManifestArn?: string | undefined;

  /**
   * A brief description of the decoder manifest.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The state of the decoder manifest. If the status is `ACTIVE`, the decoder manifest can't be edited. If the status is marked `DRAFT`, you can edit the decoder manifest.
   *
   * @public
   */
  status?: ManifestStatus | undefined;

  /**
   * The time the decoder manifest was created in seconds since epoch (January 1, 1970 at midnight UTC time).
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * The time the decoder manifest was last updated in seconds since epoch (January 1, 1970 at midnight UTC time).
   *
   * @public
   */
  lastModificationTime: Date | undefined;

  /**
   * The detailed message for the decoder manifest. When a decoder manifest is in an `INVALID` status, the message contains detailed reason and help information.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface ListDecoderManifestsResponse {
  /**
   * A list of information about each decoder manifest.
   *
   * @public
   */
  summaries?: DecoderManifestSummary[] | undefined;

  /**
   * The token to retrieve the next set of results, or `null` if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDecoderManifestSignalsRequest {
  /**
   * The name of the decoder manifest to list information about.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A pagination token for the next set of results.
   *
   * If the results of a search are large, only a portion of the results are returned, and a `nextToken` pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of items to return, between 1 and 100, inclusive.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface UpdateDecoderManifestResponse {
  /**
   * The name of the updated decoder manifest.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the updated decoder manifest.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteFleetRequest {
  /**
   * The ID of the fleet to delete.
   *
   * @public
   */
  fleetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFleetResponse {
  /**
   * The ID of the deleted fleet.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the deleted fleet.
   *
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteModelManifestRequest {
  /**
   * The name of the model manifest to delete.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteModelManifestResponse {
  /**
   * The name of the deleted model manifest.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the deleted model manifest.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteSignalCatalogRequest {
  /**
   * The name of the signal catalog to delete.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteSignalCatalogResponse {
  /**
   * The name of the deleted signal catalog.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the deleted signal catalog.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteStateTemplateRequest {
  /**
   * The unique ID of the state template.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteStateTemplateResponse {
  /**
   * The name of the state template.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the state template.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The unique ID of the state template.
   *
   * @public
   */
  id?: string | undefined;
}

/**
 * @public
 */
export interface DeleteVehicleRequest {
  /**
   * The ID of the vehicle to delete.
   *
   * @public
   */
  vehicleName: string | undefined;
}

/**
 * @public
 */
export interface DeleteVehicleResponse {
  /**
   * The ID of the deleted vehicle.
   *
   * @public
   */
  vehicleName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the deleted vehicle.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateVehicleFleetRequest {
  /**
   * The unique ID of the vehicle to disassociate from the fleet.
   *
   * @public
   */
  vehicleName: string | undefined;

  /**
   * The unique ID of a fleet.
   *
   * @public
   */
  fleetId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateVehicleFleetResponse {}

/**
 * @public
 */
export interface ListFleetsForVehicleRequest {
  /**
   * The ID of the vehicle to retrieve information about.
   *
   * @public
   */
  vehicleName: string | undefined;

  /**
   * A pagination token for the next set of results.
   *
   * If the results of a search are large, only a portion of the results are returned, and a `nextToken` pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of items to return, between 1 and 100, inclusive.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListFleetsForVehicleResponse {
  /**
   * A list of fleet IDs that the vehicle is associated with.
   *
   * @public
   */
  fleets?: string[] | undefined;

  /**
   * The token to retrieve the next set of results, or `null` if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetFleetRequest {
  /**
   * The ID of the fleet to retrieve information about.
   *
   * @public
   */
  fleetId: string | undefined;
}

/**
 * @public
 */
export interface GetFleetResponse {
  /**
   * The ID of the fleet.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the fleet.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * A brief description of the fleet.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ARN of a signal catalog associated with the fleet.
   *
   * @public
   */
  signalCatalogArn: string | undefined;

  /**
   * The time the fleet was created in seconds since epoch (January 1, 1970 at midnight UTC time).
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * The time the fleet was last updated, in seconds since epoch (January 1, 1970 at midnight UTC time).
   *
   * @public
   */
  lastModificationTime: Date | undefined;
}

/**
 * @public
 */
export interface ListFleetsRequest {
  /**
   * A pagination token for the next set of results.
   *
   * If the results of a search are large, only a portion of the results are returned, and a `nextToken` pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of items to return, between 1 and 100, inclusive.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * When you set the `listResponseScope` parameter to `METADATA_ONLY`, the list response includes: fleet ID, Amazon Resource Name (ARN), creation time, and last modification time.
   *
   * @public
   */
  listResponseScope?: ListResponseScope | undefined;
}

/**
 * Information about a fleet.
 *
 * You can use the API operation to return this information about multiple fleets.
 *
 * @public
 */
export interface FleetSummary {
  /**
   * The unique ID of the fleet.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the fleet.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * A brief description of the fleet.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ARN of the signal catalog associated with the fleet.
   *
   * @public
   */
  signalCatalogArn: string | undefined;

  /**
   * The time the fleet was created, in seconds since epoch (January 1, 1970 at midnight UTC time).
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * The time the fleet was last updated in seconds since epoch (January 1, 1970 at midnight UTC time).
   *
   * @public
   */
  lastModificationTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListFleetsResponse {
  /**
   * A list of information for each fleet.
   *
   * @public
   */
  fleetSummaries?: FleetSummary[] | undefined;

  /**
   * The token to retrieve the next set of results, or `null` if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFleetRequest {
  /**
   * The ID of the fleet to update.
   *
   * @public
   */
  fleetId: string | undefined;

  /**
   * An updated description of the fleet.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFleetResponse {
  /**
   * The ID of the updated fleet.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the updated fleet.
   *
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface ListVehiclesInFleetRequest {
  /**
   * The ID of a fleet.
   *
   * @public
   */
  fleetId: string | undefined;

  /**
   * A pagination token for the next set of results.
   *
   * If the results of a search are large, only a portion of the results are returned, and a `nextToken` pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of items to return, between 1 and 100, inclusive.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListVehiclesInFleetResponse {
  /**
   * A list of vehicles associated with the fleet.
   *
   * @public
   */
  vehicles?: string[] | undefined;

  /**
   * The token to retrieve the next set of results, or `null` if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * [Vehicle Signal Specification (VSS)](<https://www.w3.org/auto/wg/wiki/Vehicle_Signal_Specification_(VSS)/Vehicle_Data_Spec>) is a precise language used to describe and model signals in vehicle networks. The JSON file collects signal specificiations in a VSS format.
 *
 * @public
 */
export type FormattedVss =
  | FormattedVss.VssJsonMember
  | FormattedVss.$UnknownMember;

/**
 * @public
 */
export namespace FormattedVss {
  /**
   * Provides the VSS in JSON format.
   *
   * @public
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    vssJson: (value: string) => T;
    _: (name: string, value: any) => T;
  }
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
   * The ID of the KMS key that is used for encryption.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * The encryption status.
   *
   * @public
   */
  encryptionStatus: EncryptionStatus | undefined;

  /**
   * The type of encryption. Set to `KMS_BASED_ENCRYPTION` to use a KMS key that you own and manage. Set to `FLEETWISE_DEFAULT_ENCRYPTION` to use an Amazon Web Services managed key that is owned by the Amazon Web Services IoT FleetWise service account.
   *
   * @public
   */
  encryptionType: EncryptionType | undefined;

  /**
   * The error message that describes why encryption settings couldn't be configured, if applicable.
   *
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * The time when encryption was configured in seconds since epoch (January 1, 1970 at midnight UTC time).
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The time when encryption was last updated in seconds since epoch (January 1, 1970 at midnight UTC time).
   *
   * @public
   */
  lastModificationTime?: Date | undefined;
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
   * Returns information about log delivery to Amazon CloudWatch Logs.
   *
   * @public
   */
  cloudWatchLogDelivery: CloudWatchLogDeliveryOptions | undefined;
}

/**
 * @public
 */
export interface GetModelManifestRequest {
  /**
   * The name of the vehicle model to retrieve information about.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetModelManifestResponse {
  /**
   * The name of the vehicle model.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the vehicle model.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * A brief description of the vehicle model.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ARN of the signal catalog associated with the vehicle model.
   *
   * @public
   */
  signalCatalogArn?: string | undefined;

  /**
   * The state of the vehicle model. If the status is `ACTIVE`, the vehicle model can't be edited. You can edit the vehicle model if the status is marked `DRAFT`.
   *
   * @public
   */
  status?: ManifestStatus | undefined;

  /**
   * The time the vehicle model was created, in seconds since epoch (January 1, 1970 at midnight UTC time).
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * The last time the vehicle model was modified.
   *
   * @public
   */
  lastModificationTime: Date | undefined;
}

/**
 * @public
 */
export interface GetRegisterAccountStatusRequest {}

/**
 * Information about registering an Identity and Access Management (IAM) resource so Amazon Web Services IoT FleetWise edge agent software can transfer your vehicle data to Amazon Timestream.
 *
 * @public
 */
export interface IamRegistrationResponse {
  /**
   * The Amazon Resource Name (ARN) of the IAM role to register.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The status of registering your IAM resource. The status can be one of `REGISTRATION_SUCCESS`, `REGISTRATION_PENDING`, `REGISTRATION_FAILURE`.
   *
   * @public
   */
  registrationStatus: RegistrationStatus | undefined;

  /**
   * A message associated with a registration error.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * Information about the registered Amazon Timestream resources or errors, if any.
 *
 * @public
 */
export interface TimestreamRegistrationResponse {
  /**
   * The name of the Timestream database.
   *
   * @public
   */
  timestreamDatabaseName: string | undefined;

  /**
   * The name of the Timestream database table.
   *
   * @public
   */
  timestreamTableName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Timestream database.
   *
   * @public
   */
  timestreamDatabaseArn?: string | undefined;

  /**
   * The ARN of the Timestream database table.
   *
   * @public
   */
  timestreamTableArn?: string | undefined;

  /**
   * The status of registering your Amazon Timestream resources. The status can be one of `REGISTRATION_SUCCESS`, `REGISTRATION_PENDING`, `REGISTRATION_FAILURE`.
   *
   * @public
   */
  registrationStatus: RegistrationStatus | undefined;

  /**
   * A message associated with a registration error.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface GetRegisterAccountStatusResponse {
  /**
   * The unique ID of the Amazon Web Services account, provided at account creation.
   *
   * @public
   */
  customerAccountId: string | undefined;

  /**
   * The status of registering your account and resources. The status can be one of:
   *
   * - `REGISTRATION_SUCCESS` - The Amazon Web Services resource is successfully registered.
   * - `REGISTRATION_PENDING` - Amazon Web Services IoT FleetWise is processing the registration request. This process takes approximately five minutes to complete.
   * - `REGISTRATION_FAILURE` - Amazon Web Services IoT FleetWise can't register the AWS resource. Try again later.
   *
   * @public
   */
  accountStatus: RegistrationStatus | undefined;

  /**
   * Information about the registered Amazon Timestream resources or errors, if any.
   *
   * @public
   */
  timestreamRegistrationResponse?: TimestreamRegistrationResponse | undefined;

  /**
   * Information about the registered IAM resources or errors, if any.
   *
   * @public
   */
  iamRegistrationResponse: IamRegistrationResponse | undefined;

  /**
   * The time the account was registered, in seconds since epoch (January 1, 1970 at midnight UTC time).
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * The time this registration was last updated, in seconds since epoch (January 1, 1970 at midnight UTC time).
   *
   * @public
   */
  lastModificationTime: Date | undefined;
}

/**
 * @public
 */
export interface GetSignalCatalogRequest {
  /**
   * The name of the signal catalog to retrieve information about.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * Information about the number of nodes and node types in a vehicle network.
 *
 * @public
 */
export interface NodeCounts {
  /**
   * The total number of nodes in a vehicle network.
   *
   * @public
   */
  totalNodes?: number | undefined;

  /**
   * The total number of nodes in a vehicle network that represent branches.
   *
   * @public
   */
  totalBranches?: number | undefined;

  /**
   * The total number of nodes in a vehicle network that represent sensors.
   *
   * @public
   */
  totalSensors?: number | undefined;

  /**
   * The total number of nodes in a vehicle network that represent attributes.
   *
   * @public
   */
  totalAttributes?: number | undefined;

  /**
   * The total number of nodes in a vehicle network that represent actuators.
   *
   * @public
   */
  totalActuators?: number | undefined;

  /**
   * The total structure for the node.
   *
   * @public
   */
  totalStructs?: number | undefined;

  /**
   * The total properties for the node.
   *
   * @public
   */
  totalProperties?: number | undefined;
}

/**
 * @public
 */
export interface GetSignalCatalogResponse {
  /**
   * The name of the signal catalog.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the signal catalog.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * A brief description of the signal catalog.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The total number of network nodes specified in a signal catalog.
   *
   * @public
   */
  nodeCounts?: NodeCounts | undefined;

  /**
   * The time the signal catalog was created in seconds since epoch (January 1, 1970 at midnight UTC time).
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * The last time the signal catalog was modified.
   *
   * @public
   */
  lastModificationTime: Date | undefined;
}

/**
 * @public
 */
export interface GetStateTemplateRequest {
  /**
   * The unique ID of the state template.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetStateTemplateResponse {
  /**
   * The name of the state template.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the state template.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * A brief description of the state template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ARN of the signal catalog associated with the state template.
   *
   * @public
   */
  signalCatalogArn?: string | undefined;

  /**
   * A list of signals from which data is collected. The state template properties contain the fully qualified names of the signals.
   *
   * @public
   */
  stateTemplateProperties?: string[] | undefined;

  /**
   * A list of vehicle attributes associated with the payload published on the state template's MQTT topic.
   *
   * Default: An empty array
   *
   * @public
   */
  dataExtraDimensions?: string[] | undefined;

  /**
   * A list of vehicle attributes to associate with user properties of the messages published on the state template's MQTT topic.
   *
   * Default: An empty array
   *
   * @public
   */
  metadataExtraDimensions?: string[] | undefined;

  /**
   * The time the state template was created in seconds since epoch (January 1, 1970 at midnight UTC time).
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The time the state template was last updated in seconds since epoch (January 1, 1970 at midnight UTC time).
   *
   * @public
   */
  lastModificationTime?: Date | undefined;

  /**
   * The unique ID of the state template.
   *
   * @public
   */
  id?: string | undefined;
}

/**
 * @public
 */
export interface GetVehicleRequest {
  /**
   * The ID of the vehicle to retrieve information about.
   *
   * @public
   */
  vehicleName: string | undefined;
}

/**
 * @public
 */
export interface GetVehicleResponse {
  /**
   * The ID of the vehicle.
   *
   * @public
   */
  vehicleName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the vehicle to retrieve information about.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The ARN of a vehicle model (model manifest) associated with the vehicle.
   *
   * @public
   */
  modelManifestArn?: string | undefined;

  /**
   * The ARN of a decoder manifest associated with the vehicle.
   *
   * @public
   */
  decoderManifestArn?: string | undefined;

  /**
   * Static information about a vehicle in a key-value pair. For example:
   *
   * `"engineType"` : `"1.3 L R2"`
   *
   * @public
   */
  attributes?: Record<string, string> | undefined;

  /**
   * State templates associated with the vehicle.
   *
   * @public
   */
  stateTemplates?: StateTemplateAssociation[] | undefined;

  /**
   * The time the vehicle was created in seconds since epoch (January 1, 1970 at midnight UTC time).
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The time the vehicle was last updated in seconds since epoch (January 1, 1970 at midnight UTC time).
   *
   * @public
   */
  lastModificationTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetVehicleStatusRequest {
  /**
   * A pagination token for the next set of results.
   *
   * If the results of a search are large, only a portion of the results are returned, and a `nextToken` pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value. This parameter is only supported for resources of type `CAMPAIGN`.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of items to return, between 1 and 100, inclusive. This parameter is only supported for resources of type `CAMPAIGN`.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The ID of the vehicle to retrieve information about.
   *
   * @public
   */
  vehicleName: string | undefined;
}

/**
 * Information about a campaign associated with a vehicle.
 *
 * @public
 */
export interface VehicleStatus {
  /**
   * The name of a campaign.
   *
   * @public
   */
  campaignName?: string | undefined;

  /**
   * The unique ID of the vehicle.
   *
   * @public
   */
  vehicleName?: string | undefined;

  /**
   * The status of a campaign, which can be one of the following:
   *
   * - `CREATED` - The campaign exists but is not yet approved.
   * - `READY` - The campaign is approved but has not been deployed to the vehicle. Data has not arrived at the vehicle yet.
   * - `HEALTHY` - The campaign is deployed to the vehicle.
   * - `SUSPENDED` - The campaign is suspended and data collection is paused.
   * - `DELETING` - The campaign is being removed from the vehicle.
   * - `READY_FOR_CHECKIN` - The campaign is approved and waiting for vehicle check-in before deployment.
   *
   * @public
   */
  status?: VehicleState | undefined;
}

/**
 * @public
 */
export interface GetVehicleStatusResponse {
  /**
   * Lists information about the state of the vehicle with deployed campaigns.
   *
   * @public
   */
  campaigns?: VehicleStatus[] | undefined;

  /**
   * The token to retrieve the next set of results, or `null` if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The IAM resource that enables Amazon Web Services IoT FleetWise edge agent software to send data to Amazon Timestream.
 *
 * For more information, see [IAM roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html) in the *Identity and Access Management User Guide*.
 *
 * @public
 */
export interface IamResources {
  /**
   * The Amazon Resource Name (ARN) of the IAM resource that allows Amazon Web Services IoT FleetWise to send data to Amazon Timestream. For example, `arn:aws:iam::123456789012:role/SERVICE-ROLE-ARN`.
   *
   * @public
   */
  roleArn: string | undefined;
}

/**
 * @public
 */
export interface ImportSignalCatalogRequest {
  /**
   * The name of the signal catalog to import.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A brief description of the signal catalog.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The contents of the Vehicle Signal Specification (VSS) configuration. VSS is a precise language used to describe and model signals in vehicle networks.
   *
   * @public
   */
  vss?: FormattedVss | undefined;

  /**
   * Metadata that can be used to manage the signal catalog.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ImportSignalCatalogResponse {
  /**
   * The name of the imported signal catalog.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the imported signal catalog.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The ARN of the resource.
   *
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The list of tags assigned to the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListModelManifestNodesRequest {
  /**
   * The name of the vehicle model to list information about.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A pagination token for the next set of results.
   *
   * If the results of a search are large, only a portion of the results are returned, and a `nextToken` pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of items to return, between 1 and 100, inclusive.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListModelManifestNodesResponse {
  /**
   * A list of information about nodes.
   *
   * @public
   */
  nodes?: Node[] | undefined;

  /**
   * The token to retrieve the next set of results, or `null` if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListModelManifestsRequest {
  /**
   * The ARN of a signal catalog. If you specify a signal catalog, only the vehicle models associated with it are returned.
   *
   * @public
   */
  signalCatalogArn?: string | undefined;

  /**
   * A pagination token for the next set of results.
   *
   * If the results of a search are large, only a portion of the results are returned, and a `nextToken` pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of items to return, between 1 and 100, inclusive.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * When you set the `listResponseScope` parameter to `METADATA_ONLY`, the list response includes: model manifest name, Amazon Resource Name (ARN), creation time, and last modification time.
   *
   * @public
   */
  listResponseScope?: ListResponseScope | undefined;
}

/**
 * Information about a vehicle model (model manifest). You can use the API operation to return this information about multiple vehicle models.
 *
 * @public
 */
export interface ModelManifestSummary {
  /**
   * The name of the vehicle model.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the vehicle model.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The ARN of the signal catalog associated with the vehicle model.
   *
   * @public
   */
  signalCatalogArn?: string | undefined;

  /**
   * A brief description of the vehicle model.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The state of the vehicle model. If the status is `ACTIVE`, the vehicle model can't be edited. If the status is `DRAFT`, you can edit the vehicle model.
   *
   * @public
   */
  status?: ManifestStatus | undefined;

  /**
   * The time the vehicle model was created, in seconds since epoch (January 1, 1970 at midnight UTC time).
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * The time the vehicle model was last updated, in seconds since epoch (January 1, 1970 at midnight UTC time).
   *
   * @public
   */
  lastModificationTime: Date | undefined;
}

/**
 * @public
 */
export interface ListModelManifestsResponse {
  /**
   * A list of information about vehicle models.
   *
   * @public
   */
  summaries?: ModelManifestSummary[] | undefined;

  /**
   * The token to retrieve the next set of results, or `null` if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateModelManifestRequest {
  /**
   * The name of the vehicle model to update.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A brief description of the vehicle model.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of `fullyQualifiedName` of nodes, which are a general abstraction of signals, to add to the vehicle model.
   *
   * @public
   */
  nodesToAdd?: string[] | undefined;

  /**
   * A list of `fullyQualifiedName` of nodes, which are a general abstraction of signals, to remove from the vehicle model.
   *
   * @public
   */
  nodesToRemove?: string[] | undefined;

  /**
   * The state of the vehicle model. If the status is `ACTIVE`, the vehicle model can't be edited. If the status is `DRAFT`, you can edit the vehicle model.
   *
   * @public
   */
  status?: ManifestStatus | undefined;
}

/**
 * @public
 */
export interface UpdateModelManifestResponse {
  /**
   * The name of the updated vehicle model.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the updated vehicle model.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface PutEncryptionConfigurationRequest {
  /**
   * The ID of the KMS key that is used for encryption.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * The type of encryption. Choose `KMS_BASED_ENCRYPTION` to use a KMS key or `FLEETWISE_DEFAULT_ENCRYPTION` to use an Amazon Web Services managed key.
   *
   * @public
   */
  encryptionType: EncryptionType | undefined;
}

/**
 * @public
 */
export interface PutEncryptionConfigurationResponse {
  /**
   * The ID of the KMS key that is used for encryption.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * The encryption status.
   *
   * @public
   */
  encryptionStatus: EncryptionStatus | undefined;

  /**
   * The type of encryption. Set to `KMS_BASED_ENCRYPTION` to use an KMS key that you own and manage. Set to `FLEETWISE_DEFAULT_ENCRYPTION` to use an Amazon Web Services managed key that is owned by the Amazon Web Services IoT FleetWise service account.
   *
   * @public
   */
  encryptionType: EncryptionType | undefined;
}

/**
 * @public
 */
export interface PutLoggingOptionsRequest {
  /**
   * Creates or updates the log delivery option to Amazon CloudWatch Logs.
   *
   * @public
   */
  cloudWatchLogDelivery: CloudWatchLogDeliveryOptions | undefined;
}

/**
 * @public
 */
export interface PutLoggingOptionsResponse {}

/**
 * The registered Amazon Timestream resources that Amazon Web Services IoT FleetWise edge agent software can transfer your vehicle data to.
 *
 * @public
 */
export interface TimestreamResources {
  /**
   * The name of the registered Amazon Timestream database.
   *
   * @public
   */
  timestreamDatabaseName: string | undefined;

  /**
   * The name of the registered Amazon Timestream database table.
   *
   * @public
   */
  timestreamTableName: string | undefined;
}

/**
 * @public
 */
export interface RegisterAccountRequest {
  /**
   * The registered Amazon Timestream resources that Amazon Web Services IoT FleetWise edge agent software can transfer your vehicle data to.
   *
   * @deprecated Amazon Timestream metadata is now passed in the CreateCampaign API.
   * @public
   */
  timestreamResources?: TimestreamResources | undefined;

  /**
   * The IAM resource that allows Amazon Web Services IoT FleetWise to send data to Amazon Timestream.
   *
   * @deprecated iamResources is no longer used or needed as input.
   * @public
   */
  iamResources?: IamResources | undefined;
}

/**
 * @public
 */
export interface RegisterAccountResponse {
  /**
   * The status of registering your Amazon Web Services account, IAM role, and Timestream resources.
   *
   * @public
   */
  registerAccountStatus: RegistrationStatus | undefined;

  /**
   * The registered Amazon Timestream resources that Amazon Web Services IoT FleetWise edge agent software can transfer your vehicle data to.
   *
   * @public
   */
  timestreamResources?: TimestreamResources | undefined;

  /**
   * The registered IAM resource that allows Amazon Web Services IoT FleetWise to send data to Amazon Timestream.
   *
   * @public
   */
  iamResources: IamResources | undefined;

  /**
   * The time the account was registered, in seconds since epoch (January 1, 1970 at midnight UTC time).
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * The time this registration was last updated, in seconds since epoch (January 1, 1970 at midnight UTC time).
   *
   * @public
   */
  lastModificationTime: Date | undefined;
}

/**
 * @public
 */
export interface ListSignalCatalogNodesRequest {
  /**
   * The name of the signal catalog to list information about.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A pagination token for the next set of results.
   *
   * If the results of a search are large, only a portion of the results are returned, and a `nextToken` pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of items to return, between 1 and 100, inclusive.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The type of node in the signal catalog.
   *
   * @public
   */
  signalNodeType?: SignalNodeType | undefined;
}

/**
 * @public
 */
export interface ListSignalCatalogNodesResponse {
  /**
   * A list of information about nodes.
   *
   * @public
   */
  nodes?: Node[] | undefined;

  /**
   * The token to retrieve the next set of results, or `null` if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSignalCatalogsRequest {
  /**
   * A pagination token for the next set of results.
   *
   * If the results of a search are large, only a portion of the results are returned, and a `nextToken` pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of items to return, between 1 and 100, inclusive.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Information about a collection of standardized signals, which can be attributes, branches, sensors, or actuators.
 *
 * @public
 */
export interface SignalCatalogSummary {
  /**
   * The name of the signal catalog.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the signal catalog.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The time the signal catalog was created in seconds since epoch (January 1, 1970 at midnight UTC time).
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The time the signal catalog was last updated in seconds since epoch (January 1, 1970 at midnight UTC time).
   *
   * @public
   */
  lastModificationTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListSignalCatalogsResponse {
  /**
   * A list of information about each signal catalog.
   *
   * @public
   */
  summaries?: SignalCatalogSummary[] | undefined;

  /**
   * The token to retrieve the next set of results, or `null` if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSignalCatalogRequest {
  /**
   * The name of the signal catalog to update.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A brief description of the signal catalog to update.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of information about nodes to add to the signal catalog.
   *
   * @public
   */
  nodesToAdd?: Node[] | undefined;

  /**
   * A list of information about nodes to update in the signal catalog.
   *
   * @public
   */
  nodesToUpdate?: Node[] | undefined;

  /**
   * A list of `fullyQualifiedName` of nodes to remove from the signal catalog.
   *
   * @public
   */
  nodesToRemove?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateSignalCatalogResponse {
  /**
   * The name of the updated signal catalog.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ARN of the updated signal catalog.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface ListStateTemplatesRequest {
  /**
   * The token to retrieve the next set of results, or `null` if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of items to return, between 1 and 100, inclusive.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * When you set the `listResponseScope` parameter to `METADATA_ONLY`, the list response includes: state template ID, Amazon Resource Name (ARN), creation time, and last modification time.
   *
   * @public
   */
  listResponseScope?: ListResponseScope | undefined;
}

/**
 * Information about a state template.
 *
 * > **Important:** Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see [Amazon Web Services Region and feature availability](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html) in the *Amazon Web Services IoT FleetWise Developer Guide*.
 *
 * @public
 */
export interface StateTemplateSummary {
  /**
   * The name of the state template.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the state template.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the signal catalog associated with the state template.
   *
   * @public
   */
  signalCatalogArn?: string | undefined;

  /**
   * A brief description of the state template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The time the state template was created, in seconds since epoch (January 1, 1970 at midnight UTC time).
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The time the state template was last updated, in seconds since epoch (January 1, 1970 at midnight UTC time).
   *
   * @public
   */
  lastModificationTime?: Date | undefined;

  /**
   * The unique ID of the state template.
   *
   * @public
   */
  id?: string | undefined;
}

/**
 * @public
 */
export interface ListStateTemplatesResponse {
  /**
   * A list of information about each state template.
   *
   * @public
   */
  summaries?: StateTemplateSummary[] | undefined;

  /**
   * The token to retrieve the next set of results, or `null` if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateStateTemplateRequest {
  /**
   * The unique ID of the state template.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * A brief description of the state template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Add signals from which data is collected as part of the state template.
   *
   * @public
   */
  stateTemplatePropertiesToAdd?: string[] | undefined;

  /**
   * Remove signals from which data is collected as part of the state template.
   *
   * @public
   */
  stateTemplatePropertiesToRemove?: string[] | undefined;

  /**
   * A list of vehicle attributes to associate with the payload published on the state template's MQTT topic. (See [Processing last known state vehicle data using MQTT messaging](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/process-visualize-data.html#process-last-known-state-vehicle-data)). For example, if you add `Vehicle.Attributes.Make` and `Vehicle.Attributes.Model` attributes, Amazon Web Services IoT FleetWise will enrich the protobuf encoded payload with those attributes in the `extraDimensions` field.
   *
   * Default: An empty array
   *
   * @public
   */
  dataExtraDimensions?: string[] | undefined;

  /**
   * A list of vehicle attributes to associate with user properties of the messages published on the state template's MQTT topic. (See [Processing last known state vehicle data using MQTT messaging](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/process-visualize-data.html#process-last-known-state-vehicle-data)). For example, if you add `Vehicle.Attributes.Make` and `Vehicle.Attributes.Model` attributes, Amazon Web Services IoT FleetWise will include these attributes as User Properties with the MQTT message.
   *
   * @public
   */
  metadataExtraDimensions?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateStateTemplateResponse {
  /**
   * The name of the state template.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the state template.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The unique ID of the state template.
   *
   * @public
   */
  id?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The ARN of the resource.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * The new or modified tags for the resource.
   *
   * @public
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
   * The ARN of the resource.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * A list of the keys of the tags to be removed from the resource.
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
export interface ListVehiclesRequest {
  /**
   * The Amazon Resource Name (ARN) of a vehicle model (model manifest). You can use this optional parameter to list only the vehicles created from a certain vehicle model.
   *
   * @public
   */
  modelManifestArn?: string | undefined;

  /**
   * The fully qualified names of the attributes. You can use this optional parameter to list the vehicles containing all the attributes in the request. For example, `attributeNames` could be "`Vehicle.Body.Engine.Type, Vehicle.Color`" and the corresponding `attributeValues` could be "`1.3 L R2, Blue`" . In this case, the API will filter vehicles with an attribute name `Vehicle.Body.Engine.Type` that contains a value of `1.3 L R2` AND an attribute name `Vehicle.Color` that contains a value of "`Blue`". A request must contain unique values for the `attributeNames` filter and the matching number of `attributeValues` filters to return the subset of vehicles that match the attributes filter condition.
   *
   * @public
   */
  attributeNames?: string[] | undefined;

  /**
   * Static information about a vehicle attribute value in string format. You can use this optional parameter in conjunction with `attributeNames` to list the vehicles containing all the `attributeValues` corresponding to the `attributeNames` filter. For example, `attributeValues` could be "`1.3 L R2, Blue`" and the corresponding `attributeNames` filter could be "`Vehicle.Body.Engine.Type, Vehicle.Color`". In this case, the API will filter vehicles with attribute name `Vehicle.Body.Engine.Type` that contains a value of `1.3 L R2` AND an attribute name `Vehicle.Color` that contains a value of "`Blue`". A request must contain unique values for the `attributeNames` filter and the matching number of `attributeValues` filter to return the subset of vehicles that match the attributes filter condition.
   *
   * @public
   */
  attributeValues?: string[] | undefined;

  /**
   * A pagination token for the next set of results.
   *
   * If the results of a search are large, only a portion of the results are returned, and a `nextToken` pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of items to return, between 1 and 100, inclusive.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * When you set the `listResponseScope` parameter to `METADATA_ONLY`, the list response includes: vehicle name, Amazon Resource Name (ARN), creation time, and last modification time.
   *
   * @public
   */
  listResponseScope?: ListResponseScope | undefined;
}

/**
 * Information about a vehicle.
 *
 * To return this information about vehicles in your account, you can use the API operation.
 *
 * @public
 */
export interface VehicleSummary {
  /**
   * The unique ID of the vehicle.
   *
   * @public
   */
  vehicleName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the vehicle.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The ARN of a vehicle model (model manifest) associated with the vehicle.
   *
   * @public
   */
  modelManifestArn: string | undefined;

  /**
   * The ARN of a decoder manifest associated with the vehicle.
   *
   * @public
   */
  decoderManifestArn: string | undefined;

  /**
   * The time the vehicle was created in seconds since epoch (January 1, 1970 at midnight UTC time).
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * The time the vehicle was last updated in seconds since epoch (January 1, 1970 at midnight UTC time).
   *
   * @public
   */
  lastModificationTime: Date | undefined;

  /**
   * Static information about a vehicle in a key-value pair. For example:
   *
   * `"engineType"` : `"1.3 L R2"`
   *
   * @public
   */
  attributes?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListVehiclesResponse {
  /**
   * A list of vehicles and information about them.
   *
   * @public
   */
  vehicleSummaries?: VehicleSummary[] | undefined;

  /**
   * The token to retrieve the next set of results, or `null` if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateVehicleRequest {
  /**
   * The unique ID of the vehicle to update.
   *
   * @public
   */
  vehicleName: string | undefined;

  /**
   * The ARN of a vehicle model (model manifest) associated with the vehicle.
   *
   * @public
   */
  modelManifestArn?: string | undefined;

  /**
   * The ARN of the decoder manifest associated with this vehicle.
   *
   * @public
   */
  decoderManifestArn?: string | undefined;

  /**
   * Static information about a vehicle in a key-value pair. For example:
   *
   * `"engineType"` : `"1.3 L R2"`
   *
   * @public
   */
  attributes?: Record<string, string> | undefined;

  /**
   * The method the specified attributes will update the existing attributes on the vehicle. Use`Overwite` to replace the vehicle attributes with the specified attributes. Or use `Merge` to combine all attributes.
   *
   * This is required if attributes are present in the input.
   *
   * @public
   */
  attributeUpdateMode?: UpdateMode | undefined;

  /**
   * Associate state templates with the vehicle.
   *
   * @public
   */
  stateTemplatesToAdd?: StateTemplateAssociation[] | undefined;

  /**
   * Remove state templates from the vehicle.
   *
   * @public
   */
  stateTemplatesToRemove?: string[] | undefined;

  /**
   * Change the `stateTemplateUpdateStrategy` of state templates already associated with the vehicle.
   *
   * @public
   */
  stateTemplatesToUpdate?: StateTemplateAssociation[] | undefined;
}

/**
 * @public
 */
export interface UpdateVehicleResponse {
  /**
   * The ID of the updated vehicle.
   *
   * @public
   */
  vehicleName?: string | undefined;

  /**
   * The ARN of the updated vehicle.
   *
   * @public
   */
  arn?: string | undefined;
}

/**
 * The structured message for the message signal. It can be defined with either a `primitiveMessageDefinition`, `structuredMessageListDefinition`, or `structuredMessageDefinition` recursively.
 *
 * @public
 */
export type StructuredMessage =
  | StructuredMessage.PrimitiveMessageDefinitionMember
  | StructuredMessage.StructuredMessageDefinitionMember
  | StructuredMessage.StructuredMessageListDefinitionMember
  | StructuredMessage.$UnknownMember;

/**
 * @public
 */
export namespace StructuredMessage {
  /**
   * Represents a primitive type node of the complex data structure.
   *
   * @public
   */
  export interface PrimitiveMessageDefinitionMember {
    primitiveMessageDefinition: PrimitiveMessageDefinition;
    structuredMessageListDefinition?: never;
    structuredMessageDefinition?: never;
    $unknown?: never;
  }

  /**
   * Represents a list type node of the complex data structure.
   *
   * @public
   */
  export interface StructuredMessageListDefinitionMember {
    primitiveMessageDefinition?: never;
    structuredMessageListDefinition: StructuredMessageListDefinition;
    structuredMessageDefinition?: never;
    $unknown?: never;
  }

  /**
   * Represents a struct type node of the complex data structure.
   *
   * @public
   */
  export interface StructuredMessageDefinitionMember {
    primitiveMessageDefinition?: never;
    structuredMessageListDefinition?: never;
    structuredMessageDefinition: StructuredMessageFieldNameAndDataTypePair[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    primitiveMessageDefinition?: never;
    structuredMessageListDefinition?: never;
    structuredMessageDefinition?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    primitiveMessageDefinition: (value: PrimitiveMessageDefinition) => T;
    structuredMessageListDefinition: (value: StructuredMessageListDefinition) => T;
    structuredMessageDefinition: (value: StructuredMessageFieldNameAndDataTypePair[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Represents a `StructureMessageName` to `DataType` map element.
 *
 * @public
 */
export interface StructuredMessageFieldNameAndDataTypePair {
  /**
   * The field name of the structured message. It determines how a data value is referenced in the target language.
   *
   * @public
   */
  fieldName: string | undefined;

  /**
   * The data type.
   *
   * @public
   */
  dataType: StructuredMessage | undefined;
}

/**
 * Represents a list type node of the complex data structure.
 *
 * @public
 */
export interface StructuredMessageListDefinition {
  /**
   * The name of the structured message list definition.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The member type of the structured message list definition.
   *
   * @public
   */
  memberType: StructuredMessage | undefined;

  /**
   * The type of list of the structured message list definition.
   *
   * @public
   */
  listType: StructuredMessageListType | undefined;

  /**
   * The capacity of the structured message list definition when the list type is `FIXED_CAPACITY` or `DYNAMIC_BOUNDED_CAPACITY`.
   *
   * @public
   */
  capacity?: number | undefined;
}

/**
 * The decoding information for a specific message which support higher order data types.
 *
 * @public
 */
export interface MessageSignal {
  /**
   * The topic name for the message signal. It corresponds to topics in ROS 2.
   *
   * @public
   */
  topicName: string | undefined;

  /**
   * The structured message for the message signal. It can be defined with either a `primitiveMessageDefinition`, `structuredMessageListDefinition`, or `structuredMessageDefinition` recursively.
   *
   * @public
   */
  structuredMessage: StructuredMessage | undefined;
}

/**
 * Information about a signal decoder.
 *
 * @public
 */
export interface SignalDecoder {
  /**
   * The fully qualified name of a signal decoder as defined in a vehicle model.
   *
   * @public
   */
  fullyQualifiedName: string | undefined;

  /**
   * The network protocol for the vehicle. For example, `CAN_SIGNAL` specifies a protocol that defines how data is communicated between electronic control units (ECUs). `OBD_SIGNAL` specifies a protocol that defines how self-diagnostic data is communicated between ECUs.
   *
   * @public
   */
  type: SignalDecoderType | undefined;

  /**
   * The ID of a network interface that specifies what network protocol a vehicle follows.
   *
   * @public
   */
  interfaceId: string | undefined;

  /**
   * Information about signal decoder using the Controller Area Network (CAN) protocol.
   *
   * @public
   */
  canSignal?: CanSignal | undefined;

  /**
   * Information about signal decoder using the on-board diagnostic (OBD) II protocol.
   *
   * @public
   */
  obdSignal?: ObdSignal | undefined;

  /**
   * The decoding information for a specific message which supports higher order data types.
   *
   * @public
   */
  messageSignal?: MessageSignal | undefined;

  /**
   * Information about a [custom signal decoder](https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_CustomDecodingSignal.html).
   *
   * > **Important:** Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see [Amazon Web Services Region and feature availability](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html) in the *Amazon Web Services IoT FleetWise Developer Guide*.
   *
   * @public
   */
  customDecodingSignal?: CustomDecodingSignal | undefined;
}

/**
 * @public
 */
export interface CreateDecoderManifestRequest {
  /**
   * The unique name of the decoder manifest to create.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A brief description of the decoder manifest.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the vehicle model (model manifest).
   *
   * @public
   */
  modelManifestArn: string | undefined;

  /**
   * A list of information about signal decoders.
   *
   * @public
   */
  signalDecoders?: SignalDecoder[] | undefined;

  /**
   * A list of information about available network interfaces.
   *
   * @public
   */
  networkInterfaces?: NetworkInterface[] | undefined;

  /**
   * Use default decoders for all unmapped signals in the model. You don't need to provide any detailed decoding information.
   *
   * > **Important:** Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see [Amazon Web Services Region and feature availability](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html) in the *Amazon Web Services IoT FleetWise Developer Guide*.
   *
   * @public
   */
  defaultForUnmappedSignals?: DefaultForUnmappedSignalsType | undefined;

  /**
   * Metadata that can be used to manage the decoder manifest.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListDecoderManifestSignalsResponse {
  /**
   * Information about a list of signals to decode.
   *
   * @public
   */
  signalDecoders?: SignalDecoder[] | undefined;

  /**
   * The token to retrieve the next set of results, or `null` if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDecoderManifestRequest {
  /**
   * The name of the decoder manifest to update.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A brief description of the decoder manifest to update.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of information about decoding additional signals to add to the decoder manifest.
   *
   * @public
   */
  signalDecodersToAdd?: SignalDecoder[] | undefined;

  /**
   * A list of updated information about decoding signals to update in the decoder manifest.
   *
   * @public
   */
  signalDecodersToUpdate?: SignalDecoder[] | undefined;

  /**
   * A list of signal decoders to remove from the decoder manifest.
   *
   * @public
   */
  signalDecodersToRemove?: string[] | undefined;

  /**
   * A list of information about the network interfaces to add to the decoder manifest.
   *
   * @public
   */
  networkInterfacesToAdd?: NetworkInterface[] | undefined;

  /**
   * A list of information about the network interfaces to update in the decoder manifest.
   *
   * @public
   */
  networkInterfacesToUpdate?: NetworkInterface[] | undefined;

  /**
   * A list of network interfaces to remove from the decoder manifest.
   *
   * @public
   */
  networkInterfacesToRemove?: string[] | undefined;

  /**
   * The state of the decoder manifest. If the status is `ACTIVE`, the decoder manifest can't be edited. If the status is `DRAFT`, you can edit the decoder manifest.
   *
   * @public
   */
  status?: ManifestStatus | undefined;

  /**
   * Use default decoders for all unmapped signals in the model. You don't need to provide any detailed decoding information.
   *
   * > **Important:** Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see [Amazon Web Services Region and feature availability](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html) in the *Amazon Web Services IoT FleetWise Developer Guide*.
   *
   * @public
   */
  defaultForUnmappedSignals?: DefaultForUnmappedSignalsType | undefined;
}
