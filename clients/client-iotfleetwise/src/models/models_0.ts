// smithy-typescript generated code
import {
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
 * <p>A signal that represents a vehicle device such as the engine, heater, and door locks.
 *             Data from an actuator reports the state of a certain vehicle device.</p>
 *          <note>
 *             <p> Updating actuator data can change the state of a device. For example, you can
 *                 turn on or off the heater by updating its actuator data.</p>
 *          </note>
 * @public
 */
export interface Actuator {
  /**
   * <p>The fully qualified name of the actuator. For example, the fully qualified name of an
   *             actuator might be <code>Vehicle.Front.Left.Door.Lock</code>.</p>
   * @public
   */
  fullyQualifiedName: string | undefined;

  /**
   * <p>The specified data type of the actuator. </p>
   * @public
   */
  dataType: NodeDataType | undefined;

  /**
   * <p>A brief description of the actuator.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The scientific unit for the actuator.</p>
   * @public
   */
  unit?: string | undefined;

  /**
   * <p>A list of possible values an actuator can take.</p>
   * @public
   */
  allowedValues?: string[] | undefined;

  /**
   * <p>The specified possible minimum value of an actuator.</p>
   * @public
   */
  min?: number | undefined;

  /**
   * <p>The specified possible maximum value of an actuator.</p>
   * @public
   */
  max?: number | undefined;

  /**
   * <p>A specified value for the actuator.</p>
   *
   * @deprecated assignedValue is no longer in use
   * @public
   */
  assignedValue?: string | undefined;

  /**
   * <p>The deprecation message for the node or the branch that was moved or deleted.</p>
   * @public
   */
  deprecationMessage?: string | undefined;

  /**
   * <p>A comment in addition to the description.</p>
   * @public
   */
  comment?: string | undefined;

  /**
   * <p>The fully qualified name of the struct node for the actuator if the data type of the
   *             actuator is <code>Struct</code> or <code>StructArray</code>. For example, the struct
   *             fully qualified name of an actuator might be
   *             <code>Vehicle.Door.LockStruct</code>.</p>
   * @public
   */
  structFullyQualifiedName?: string | undefined;
}

/**
 * @public
 */
export interface AssociateVehicleFleetRequest {
  /**
   * <p> The unique ID of the vehicle to associate with the fleet. </p>
   * @public
   */
  vehicleName: string | undefined;

  /**
   * <p> The ID of a fleet. </p>
   * @public
   */
  fleetId: string | undefined;
}

/**
 * @public
 */
export interface AssociateVehicleFleetResponse {}

/**
 * <p>A validation error due to mismatch between the expected data type, length, or pattern
 *             of the parameter and the input.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the parameter field with the validation error.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A message about the validation error.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * <p>A signal that represents static information about the vehicle, such as engine type or
 *             manufacturing date.</p>
 * @public
 */
export interface Attribute {
  /**
   * <p>The fully qualified name of the attribute. For example, the fully qualified name of an
   *             attribute might be <code>Vehicle.Body.Engine.Type</code>.</p>
   * @public
   */
  fullyQualifiedName: string | undefined;

  /**
   * <p>The specified data type of the attribute. </p>
   * @public
   */
  dataType: NodeDataType | undefined;

  /**
   * <p>A brief description of the attribute.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The scientific unit for the attribute.</p>
   * @public
   */
  unit?: string | undefined;

  /**
   * <p>A list of possible values an attribute can be assigned.</p>
   * @public
   */
  allowedValues?: string[] | undefined;

  /**
   * <p>The specified possible minimum value of the attribute.</p>
   * @public
   */
  min?: number | undefined;

  /**
   * <p>The specified possible maximum value of the attribute.</p>
   * @public
   */
  max?: number | undefined;

  /**
   * <p>A specified value for the attribute.</p>
   *
   * @deprecated assignedValue is no longer in use
   * @public
   */
  assignedValue?: string | undefined;

  /**
   * <p>The default value of the attribute.</p>
   * @public
   */
  defaultValue?: string | undefined;

  /**
   * <p>The deprecation message for the node or the branch that was moved or deleted.</p>
   * @public
   */
  deprecationMessage?: string | undefined;

  /**
   * <p>A comment in addition to the description.</p>
   * @public
   */
  comment?: string | undefined;
}

/**
 * <p>Vehicles associated with the state template will stream telemetry data when there is a change.</p>
 * @public
 */
export interface OnChangeStateTemplateUpdateStrategy {}

/**
 * <p>The length of time between state template updates.</p>
 * @public
 */
export interface TimePeriod {
  /**
   * <p>A unit of time.</p>
   * @public
   */
  unit: TimeUnit | undefined;

  /**
   * <p>A number of time units.</p>
   * @public
   */
  value: number | undefined;
}

/**
 * <p>Vehicles associated with the state template will stream telemetry data during a specified time period.</p>
 * @public
 */
export interface PeriodicStateTemplateUpdateStrategy {
  /**
   * <p>The length of time between state template updates.</p>
   * @public
   */
  stateTemplateUpdateRate: TimePeriod | undefined;
}

/**
 * <p>The update strategy for the state template. Vehicles associated with the state template can stream telemetry data with either an <code>onChange</code> or <code>periodic</code> update strategy. </p>
 *          <important>
 *             <p>Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html">Amazon Web Services Region and feature availability</a> in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>.</p>
 *          </important>
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
   * <p>Vehicles associated with the state template will stream telemetry data during a specified time period.</p>
   * @public
   */
  export interface PeriodicMember {
    periodic: PeriodicStateTemplateUpdateStrategy;
    onChange?: never;
    $unknown?: never;
  }

  /**
   * <p>Vehicles associated with the state template will stream telemetry data when there is a change.</p>
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
 * <p>The state template associated with a vehicle. State templates contain state properties, which are signals that belong to a signal catalog that is synchronized between the Amazon Web Services IoT FleetWise Edge and the Amazon Web Services Cloud.</p>
 *          <important>
 *             <p>Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html">Amazon Web Services Region and feature availability</a> in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>.</p>
 *          </important>
 * @public
 */
export interface StateTemplateAssociation {
  /**
   * <p>The unique ID of the state template.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The update strategy for the state template. Vehicles associated with the state template can stream telemetry data with either an <code>onChange</code> or <code>periodic</code> update strategy. </p>
   *          <important>
   *             <p>Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html">Amazon Web Services Region and feature availability</a> in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>.</p>
   *          </important>
   * @public
   */
  stateTemplateUpdateStrategy: StateTemplateUpdateStrategy | undefined;
}

/**
 * <p>A set of key/value pairs that are used to manage the resource.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The tag's key.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The tag's value.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>Information about the vehicle to create.</p>
 * @public
 */
export interface CreateVehicleRequestItem {
  /**
   * <p>The unique ID of the vehicle to create.</p>
   * @public
   */
  vehicleName: string | undefined;

  /**
   * <p>The ARN of the vehicle model (model manifest) to create the vehicle from.</p>
   * @public
   */
  modelManifestArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a decoder manifest associated with the vehicle to create.
   *         </p>
   * @public
   */
  decoderManifestArn: string | undefined;

  /**
   * <p>Static information about a vehicle in a key-value pair. For example: <code>"engine
   *                 Type"</code> : <code>"v6"</code>
   *          </p>
   * @public
   */
  attributes?: Record<string, string> | undefined;

  /**
   * <p>An option to create a new Amazon Web Services IoT thing when creating a vehicle, or to validate an
   *             existing thing as a vehicle.</p>
   * @public
   */
  associationBehavior?: VehicleAssociationBehavior | undefined;

  /**
   * <p>Metadata which can be used to manage the vehicle.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>Associate state templates to track the state of the vehicle. State templates determine which signal updates the vehicle sends to the cloud.</p>
   * @public
   */
  stateTemplates?: StateTemplateAssociation[] | undefined;
}

/**
 * @public
 */
export interface BatchCreateVehicleRequest {
  /**
   * <p> A list of information about each vehicle to create. For more information, see the
   *                  API data type.</p>
   * @public
   */
  vehicles: CreateVehicleRequestItem[] | undefined;
}

/**
 * <p>An HTTP error resulting from creating a vehicle.</p>
 * @public
 */
export interface CreateVehicleError {
  /**
   * <p>The ID of the vehicle with the error.</p>
   * @public
   */
  vehicleName?: string | undefined;

  /**
   * <p>An HTTP error code.</p>
   * @public
   */
  code?: string | undefined;

  /**
   * <p>A description of the HTTP error.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * <p>Information about a created vehicle.</p>
 * @public
 */
export interface CreateVehicleResponseItem {
  /**
   * <p>The unique ID of the vehicle to create.</p>
   * @public
   */
  vehicleName?: string | undefined;

  /**
   * <p>The ARN of the created vehicle.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The ARN of a created or validated Amazon Web Services IoT thing.</p>
   * @public
   */
  thingArn?: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateVehicleResponse {
  /**
   * <p> A list of information about a batch of created vehicles. For more information, see
   *             the  API data type.</p>
   * @public
   */
  vehicles?: CreateVehicleResponseItem[] | undefined;

  /**
   * <p>A list of information about creation errors, or an empty list if there aren't any
   *             errors. </p>
   * @public
   */
  errors?: CreateVehicleError[] | undefined;
}

/**
 * <p>Information about the vehicle to update.</p>
 *          <important>
 *             <p>Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html">Amazon Web Services Region and feature availability</a> in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>.</p>
 *          </important>
 * @public
 */
export interface UpdateVehicleRequestItem {
  /**
   * <p>The unique ID of the vehicle to update.</p>
   * @public
   */
  vehicleName: string | undefined;

  /**
   * <p>The ARN of the vehicle model (model manifest) associated with the vehicle to
   *             update.</p>
   * @public
   */
  modelManifestArn?: string | undefined;

  /**
   * <p>The ARN of the signal decoder manifest associated with the vehicle to update.</p>
   * @public
   */
  decoderManifestArn?: string | undefined;

  /**
   * <p>Static information about a vehicle in a key-value pair. For example:</p>
   *          <p>
   *             <code>"engineType"</code> : <code>"1.3 L R2"</code>
   *          </p>
   * @public
   */
  attributes?: Record<string, string> | undefined;

  /**
   * <p>The method the specified attributes will update the existing attributes on the
   *             vehicle. Use<code>Overwite</code> to replace the vehicle attributes with the specified
   *             attributes. Or use <code>Merge</code> to combine all attributes.</p>
   *          <p>This is required if attributes are present in the input.</p>
   * @public
   */
  attributeUpdateMode?: UpdateMode | undefined;

  /**
   * <p>Associate additional state templates to track the state of the vehicle. State templates determine which signal updates the vehicle sends to the cloud.</p>
   * @public
   */
  stateTemplatesToAdd?: StateTemplateAssociation[] | undefined;

  /**
   * <p>Remove existing state template associations from the vehicle.</p>
   * @public
   */
  stateTemplatesToRemove?: string[] | undefined;

  /**
   * <p>Change the <code>stateTemplateUpdateStrategy</code> of state templates already associated with the vehicle.</p>
   * @public
   */
  stateTemplatesToUpdate?: StateTemplateAssociation[] | undefined;
}

/**
 * @public
 */
export interface BatchUpdateVehicleRequest {
  /**
   * <p> A list of information about the vehicles to update. For more information, see the
   *                  API data type.</p>
   * @public
   */
  vehicles: UpdateVehicleRequestItem[] | undefined;
}

/**
 * <p>An HTTP error resulting from updating the description for a vehicle.</p>
 * @public
 */
export interface UpdateVehicleError {
  /**
   * <p>The ID of the vehicle with the error.</p>
   * @public
   */
  vehicleName?: string | undefined;

  /**
   * <p>The relevant HTTP error code (400+).</p>
   * @public
   */
  code?: number | undefined;

  /**
   * <p>A message associated with the error.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * <p>Information about the updated vehicle.</p>
 * @public
 */
export interface UpdateVehicleResponseItem {
  /**
   * <p>The unique ID of the updated vehicle.</p>
   * @public
   */
  vehicleName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the updated vehicle.</p>
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface BatchUpdateVehicleResponse {
  /**
   * <p> A list of information about the batch of updated vehicles. </p>
   *          <note>
   *             <p>This list contains only unique IDs for the vehicles that were updated.</p>
   *          </note>
   * @public
   */
  vehicles?: UpdateVehicleResponseItem[] | undefined;

  /**
   * <p>A list of information about errors returned while updating a batch of vehicles, or, if
   *             there aren't any errors, an empty list.</p>
   * @public
   */
  errors?: UpdateVehicleError[] | undefined;
}

/**
 * <p>A group of signals that are defined in a hierarchical structure.</p>
 * @public
 */
export interface Branch {
  /**
   * <p>The fully qualified name of the branch. For example, the fully qualified name of a
   *             branch might be <code>Vehicle.Body.Engine</code>.</p>
   * @public
   */
  fullyQualifiedName: string | undefined;

  /**
   * <p>A brief description of the branch.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The deprecation message for the node or the branch that was moved or deleted.</p>
   * @public
   */
  deprecationMessage?: string | undefined;

  /**
   * <p>A comment in addition to the description.</p>
   * @public
   */
  comment?: string | undefined;
}

/**
 * <p>Information about a collection scheme that uses a simple logical expression to
 *             recognize what data to collect.</p>
 * @public
 */
export interface ConditionBasedCollectionScheme {
  /**
   * <p>The logical expression used to recognize what data to collect. For example, <code>$variable.`Vehicle.OutsideAirTemperature` &gt;= 105.0</code>.</p>
   * @public
   */
  expression: string | undefined;

  /**
   * <p>The minimum duration of time between two triggering events to collect data, in
   *             milliseconds.</p>
   *          <note>
   *             <p>If a signal changes often, you might want to collect data at a slower rate.</p>
   *          </note>
   * @public
   */
  minimumTriggerIntervalMs?: number | undefined;

  /**
   * <p>Whether to collect data for all triggering events (<code>ALWAYS</code>). Specify
   *                 (<code>RISING_EDGE</code>), or specify only when the condition first evaluates to
   *             false. For example, triggering on "AirbagDeployed"; Users aren't interested on
   *             triggering when the airbag is already exploded; they only care about the change from not
   *             deployed =&gt; deployed.</p>
   * @public
   */
  triggerMode?: TriggerMode | undefined;

  /**
   * <p>Specifies the version of the conditional expression language.</p>
   * @public
   */
  conditionLanguageVersion?: number | undefined;
}

/**
 * <p>Information about a collection scheme that uses a time period to decide how often to
 *             collect data.</p>
 * @public
 */
export interface TimeBasedCollectionScheme {
  /**
   * <p>The time period (in milliseconds) to decide how often to collect data. For example, if
   *             the time period is <code>60000</code>, the Edge Agent software collects data once every
   *             minute.</p>
   * @public
   */
  periodMs: number | undefined;
}

/**
 * <p>Specifies what data to collect and how often or when to collect it.</p>
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
   * <p>Information about a collection scheme that uses a time period to decide how often to
   *             collect data.</p>
   * @public
   */
  export interface TimeBasedCollectionSchemeMember {
    timeBasedCollectionScheme: TimeBasedCollectionScheme;
    conditionBasedCollectionScheme?: never;
    $unknown?: never;
  }

  /**
   * <p>Information about a collection scheme that uses a simple logical expression to
   *             recognize what data to collect.</p>
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
 * <p>The MQTT topic to which the Amazon Web Services IoT FleetWise campaign routes data. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/protocols.html">Device communication
 *           protocols</a> in the <i>Amazon Web Services IoT Core Developer Guide</i>.</p>
 *          <important>
 *             <p>Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html">Amazon Web Services Region and feature availability</a> in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>.</p>
 *          </important>
 * @public
 */
export interface MqttTopicConfig {
  /**
   * <p>The ARN of the MQTT topic.</p>
   * @public
   */
  mqttTopicArn: string | undefined;

  /**
   * <p>The ARN of the role that grants Amazon Web Services IoT FleetWise permission to access and act on messages sent to
   *           the MQTT topic.</p>
   * @public
   */
  executionRoleArn: string | undefined;
}

/**
 * <p>The Amazon S3 bucket where the Amazon Web Services IoT FleetWise campaign sends data. Amazon S3 is an object storage
 *             service that stores data as objects within buckets. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets-s3.html">Creating, configuring, and working with Amazon S3 buckets</a> in the
 *                 <i>Amazon Simple Storage Service User Guide</i>.</p>
 * @public
 */
export interface S3Config {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon S3 bucket.</p>
   * @public
   */
  bucketArn: string | undefined;

  /**
   * <p>Specify the format that files are saved in the Amazon S3 bucket. You can save files in an
   *             Apache Parquet or JSON format.</p>
   *          <ul>
   *             <li>
   *                <p>Parquet - Store data in a columnar storage file format. Parquet is optimal for
   *                     fast data retrieval and can reduce costs. This option is selected by
   *                     default.</p>
   *             </li>
   *             <li>
   *                <p>JSON - Store data in a standard text-based JSON file format.</p>
   *             </li>
   *          </ul>
   * @public
   */
  dataFormat?: DataFormat | undefined;

  /**
   * <p>By default, stored data is compressed as a .gzip file. Compressed files have a reduced
   *             file size, which can optimize the cost of data storage.</p>
   * @public
   */
  storageCompressionFormat?: StorageCompressionFormat | undefined;

  /**
   * <p>Enter an S3 bucket prefix. The prefix is the string of characters after the
   *             bucket name and before the object name. You can use the prefix to organize data stored
   *             in Amazon S3 buckets. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-prefixes.html">Organizing objects using
   *                 prefixes</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p>
   *          <p>By default, Amazon Web Services IoT FleetWise sets the prefix
   *                 <code>processed-data/year=YY/month=MM/date=DD/hour=HH/</code> (in UTC) to data it
   *             delivers to Amazon S3. You can enter a prefix to append it to this default prefix. For
   *             example, if you enter the prefix <code>vehicles</code>, the prefix will be
   *                 <code>vehicles/processed-data/year=YY/month=MM/date=DD/hour=HH/</code>.</p>
   * @public
   */
  prefix?: string | undefined;
}

/**
 * <p>The Amazon Timestream table where the Amazon Web Services IoT FleetWise campaign sends data. Timestream stores and organizes
 *             data to optimize query processing time and to reduce storage costs. For more
 *             information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/data-modeling.html">Data modeling</a> in
 *             the <i>Amazon Timestream Developer Guide</i>.</p>
 * @public
 */
export interface TimestreamConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Timestream table.</p>
   * @public
   */
  timestreamTableArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the task execution role that grants Amazon Web Services IoT FleetWise permission to
   *             deliver data to the Amazon Timestream table.</p>
   * @public
   */
  executionRoleArn: string | undefined;
}

/**
 * <p>The destination where the campaign sends data. You can send data to an MQTT topic,
 *             or store it in Amazon S3 or Amazon Timestream.</p>
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
   * <p>The Amazon S3 bucket where the Amazon Web Services IoT FleetWise campaign sends data.</p>
   * @public
   */
  export interface S3ConfigMember {
    s3Config: S3Config;
    timestreamConfig?: never;
    mqttTopicConfig?: never;
    $unknown?: never;
  }

  /**
   * <p>The Amazon Timestream table where the campaign sends data.</p>
   * @public
   */
  export interface TimestreamConfigMember {
    s3Config?: never;
    timestreamConfig: TimestreamConfig;
    mqttTopicConfig?: never;
    $unknown?: never;
  }

  /**
   * <p>The MQTT topic to which the Amazon Web Services IoT FleetWise campaign routes data.</p>
   *          <important>
   *             <p>Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html">Amazon Web Services Region and feature availability</a> in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>.</p>
   *          </important>
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
 * <p>The maximum storage size for the data partition.</p>
 *          <important>
 *             <p>Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html">Amazon Web Services Region and feature availability</a> in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>.</p>
 *          </important>
 * @public
 */
export interface StorageMaximumSize {
  /**
   * <p>The data type of the data to store.</p>
   * @public
   */
  unit: StorageMaximumSizeUnit | undefined;

  /**
   * <p>The maximum amount of time to store data.</p>
   * @public
   */
  value: number | undefined;
}

/**
 * <p>Information about the minimum amount of time that data will be kept.</p>
 *          <important>
 *             <p>Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html">Amazon Web Services Region and feature availability</a> in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>.</p>
 *          </important>
 * @public
 */
export interface StorageMinimumTimeToLive {
  /**
   * <p>The time increment type.</p>
   * @public
   */
  unit: StorageMinimumTimeToLiveUnit | undefined;

  /**
   * <p>The minimum amount of time to store the data.</p>
   * @public
   */
  value: number | undefined;
}

/**
 * <p>Size, time, and location options for the data partition.</p>
 * @public
 */
export interface DataPartitionStorageOptions {
  /**
   * <p>The maximum storage size of the data stored in the data partition.</p>
   *          <note>
   *             <p>Newer data overwrites older data when the partition reaches the maximum
   *                 size.</p>
   *          </note>
   * @public
   */
  maximumSize: StorageMaximumSize | undefined;

  /**
   * <p>The folder name for the data partition under the campaign storage folder.</p>
   * @public
   */
  storageLocation: string | undefined;

  /**
   * <p>The amount of time that data in this partition will be kept on disk.</p>
   *          <ul>
   *             <li>
   *                <p>After the designated amount of time passes, the data can be removed, but it's
   *                     not guaranteed to be removed.</p>
   *             </li>
   *             <li>
   *                <p>Before the time expires, data in this partition can still be deleted if the
   *                     partition reaches its configured maximum size.</p>
   *             </li>
   *             <li>
   *                <p>Newer data will overwrite older data when the partition reaches the maximum
   *                     size.</p>
   *             </li>
   *          </ul>
   * @public
   */
  minimumTimeToLive: StorageMinimumTimeToLive | undefined;
}

/**
 * <p>The upload options for the data partition. If upload options are specified, you must
 *             also specify storage options. See <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_DataPartitionStorageOptions.html">DataPartitionStorageOptions</a>.</p>
 *          <important>
 *             <p>Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html">Amazon Web Services Region and feature availability</a> in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>.</p>
 *          </important>
 * @public
 */
export interface DataPartitionUploadOptions {
  /**
   * <p>The logical expression used to recognize what data to collect. For example, <code>$variable.`Vehicle.OutsideAirTemperature` &gt;= 105.0</code>.</p>
   * @public
   */
  expression: string | undefined;

  /**
   * <p>The version of the condition language. Defaults to the most recent condition language
   *             version.</p>
   * @public
   */
  conditionLanguageVersion?: number | undefined;
}

/**
 * <p>The configuration for signal data storage and upload options. You can only specify these
 *             options when the campaign's spooling mode is <code>TO_DISK</code>.</p>
 *          <important>
 *             <p>Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html">Amazon Web Services Region and feature availability</a> in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>.</p>
 *          </important>
 * @public
 */
export interface DataPartition {
  /**
   * <p>The ID of the data partition. The data partition ID must be unique within a campaign.
   *             You can establish a data partition as the default partition for a campaign by using
   *                 <code>default</code> as the ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The storage options for a data partition.</p>
   * @public
   */
  storageOptions: DataPartitionStorageOptions | undefined;

  /**
   * <p>The upload options for the data partition.</p>
   * @public
   */
  uploadOptions?: DataPartitionUploadOptions | undefined;
}

/**
 * <p>Information about a signal.</p>
 * @public
 */
export interface SignalInformation {
  /**
   * <p>The name of the signal.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The maximum number of samples to collect.</p>
   * @public
   */
  maxSampleCount?: number | undefined;

  /**
   * <p>The minimum duration of time (in milliseconds) between two triggering events to
   *             collect data.</p>
   *          <note>
   *             <p>If a signal changes often, you might want to collect data at a slower rate.</p>
   *          </note>
   * @public
   */
  minimumSamplingIntervalMs?: number | undefined;

  /**
   * <p>The ID of the data partition this signal is associated with.</p>
   *          <p>The ID must match one of the IDs provided in <code>dataPartitions</code>. This is
   *             accomplished either by specifying a particular data partition ID or by using
   *                 <code>default</code> for an established default partition. You can establish a
   *             default partition in the <code>DataPartition</code> data type.</p>
   *          <note>
   *             <p>If you upload a signal as a condition for a campaign's data partition,
   *                 the same signal must be included in <code>signalsToCollect</code>.</p>
   *          </note>
   *          <important>
   *             <p>Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html">Amazon Web Services Region and feature availability</a> in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>.</p>
   *          </important>
   * @public
   */
  dataPartitionId?: string | undefined;
}

/**
 * <p>Specifies the condition under which a signal fetch occurs.</p>
 * @public
 */
export interface ConditionBasedSignalFetchConfig {
  /**
   * <p>The condition that must be satisfied to trigger a signal fetch.</p>
   * @public
   */
  conditionExpression: string | undefined;

  /**
   * <p>Indicates the mode in which the signal fetch is triggered.</p>
   * @public
   */
  triggerMode: TriggerMode | undefined;
}

/**
 * <p>Used to configure a frequency-based vehicle signal fetch.</p>
 * @public
 */
export interface TimeBasedSignalFetchConfig {
  /**
   * <p>The frequency with which the signal fetch will be executed.</p>
   * @public
   */
  executionFrequencyMs: number | undefined;
}

/**
 * <p>The configuration of the signal fetch operation.</p>
 *          <important>
 *             <p>Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html">Amazon Web Services Region and feature availability</a> in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>.</p>
 *          </important>
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
   * <p>The configuration of a time-based signal fetch operation.</p>
   * @public
   */
  export interface TimeBasedMember {
    timeBased: TimeBasedSignalFetchConfig;
    conditionBased?: never;
    $unknown?: never;
  }

  /**
   * <p>The configuration of a condition-based signal fetch operation.</p>
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
 * <p>Information about the signal to be fetched.</p>
 *          <important>
 *             <p>Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html">Amazon Web Services Region and feature availability</a> in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>.</p>
 *          </important>
 * @public
 */
export interface SignalFetchInformation {
  /**
   * <p>The fully qualified name of the signal to be fetched.</p>
   * @public
   */
  fullyQualifiedName: string | undefined;

  /**
   * <p>The configuration of the signal fetch operation.</p>
   * @public
   */
  signalFetchConfig: SignalFetchConfig | undefined;

  /**
   * <p>The version of the condition language used.</p>
   * @public
   */
  conditionLanguageVersion?: number | undefined;

  /**
   * <p>The actions to be performed by the signal fetch.</p>
   * @public
   */
  actions: string[] | undefined;
}

/**
 * @public
 */
export interface CreateCampaignRequest {
  /**
   * <p> The name of the campaign to create. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>An optional description of the campaign to help identify its purpose.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the signal catalog to associate with the campaign.
   *         </p>
   * @public
   */
  signalCatalogArn: string | undefined;

  /**
   * <p> The ARN of the vehicle or fleet to deploy a campaign to. </p>
   * @public
   */
  targetArn: string | undefined;

  /**
   * <p>The time, in milliseconds, to deliver a campaign after it was approved. If
   *             it's not specified, <code>0</code> is used.</p>
   *          <p>Default: <code>0</code>
   *          </p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>The time the campaign expires, in seconds since epoch (January 1, 1970 at
   *             midnight UTC time). Vehicle data isn't collected after the campaign expires. </p>
   *          <p>Default: 253402214400 (December 31, 9999, 00:00:00 UTC)</p>
   * @public
   */
  expiryTime?: Date | undefined;

  /**
   * <p>How long (in milliseconds) to collect raw data after a triggering event
   *             initiates the collection. If it's not specified, <code>0</code> is used.</p>
   *          <p>Default: <code>0</code>
   *          </p>
   * @public
   */
  postTriggerCollectionDuration?: number | undefined;

  /**
   * <p>Option for a vehicle to send diagnostic trouble codes to Amazon Web Services IoT FleetWise. If you
   *             want to send diagnostic trouble codes, use <code>SEND_ACTIVE_DTCS</code>. If it's not
   *             specified, <code>OFF</code> is used.</p>
   *          <p>Default: <code>OFF</code>
   *          </p>
   * @public
   */
  diagnosticsMode?: DiagnosticsMode | undefined;

  /**
   * <p>Determines whether to store collected data after a vehicle lost a connection with the
   *             cloud. After a connection is re-established, the data is automatically forwarded to
   *             Amazon Web Services IoT FleetWise. If you want to store collected data when a vehicle loses connection with the
   *             cloud, use <code>TO_DISK</code>. If it's not specified, <code>OFF</code> is used.</p>
   *          <p>Default: <code>OFF</code>
   *          </p>
   * @public
   */
  spoolingMode?: SpoolingMode | undefined;

  /**
   * <p>Determines whether to compress signals before transmitting data to Amazon Web Services IoT FleetWise. If you
   *             don't want to compress the signals, use <code>OFF</code>. If it's not specified,
   *                 <code>SNAPPY</code> is used. </p>
   *          <p>Default: <code>SNAPPY</code>
   *          </p>
   * @public
   */
  compression?: Compression | undefined;

  /**
   * <p>A number indicating the priority of one campaign over another campaign for
   *             a certain vehicle or fleet. A campaign with the lowest value is deployed to vehicles
   *             before any other campaigns. If it's not specified, <code>0</code> is used. </p>
   *          <p>Default: <code>0</code>
   *          </p>
   *
   * @deprecated priority is no longer used or needed as input
   * @public
   */
  priority?: number | undefined;

  /**
   * <p>A list of information about signals to collect. </p>
   *          <note>
   *             <p>If you upload a signal as a condition in a data partition for a campaign, then
   *                 those same signals must be included in <code>signalsToCollect</code>.</p>
   *          </note>
   * @public
   */
  signalsToCollect?: SignalInformation[] | undefined;

  /**
   * <p> The data collection scheme associated with the campaign. You can specify a scheme
   *             that collects data based on time or an event.</p>
   * @public
   */
  collectionScheme: CollectionScheme | undefined;

  /**
   * <p>A list of vehicle attributes to associate with a campaign. </p>
   *          <p>Enrich the data with specified vehicle attributes. For example, add <code>make</code>
   *             and <code>model</code> to the campaign, and Amazon Web Services IoT FleetWise will associate the data with those
   *             attributes as dimensions in Amazon Timestream. You can then query the data against
   *                 <code>make</code> and <code>model</code>.</p>
   *          <p>Default: An empty array</p>
   * @public
   */
  dataExtraDimensions?: string[] | undefined;

  /**
   * <p>Metadata that can be used to manage the campaign.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The destination where the campaign sends data. You can send data to an MQTT topic,
   *             or store it in Amazon S3 or Amazon Timestream.</p>
   *          <p>MQTT is the publish/subscribe messaging protocol used by Amazon Web Services IoT to communicate with
   *             your devices.</p>
   *          <p>Amazon S3 optimizes the cost of data storage and provides additional mechanisms to use vehicle
   *             data, such as data lakes, centralized data storage, data processing pipelines, and analytics.
   *             Amazon Web Services IoT FleetWise supports at-least-once file delivery to S3. Your vehicle data is stored on multiple
   *             Amazon Web Services IoT FleetWise servers for redundancy and high availability.</p>
   *          <p>You can use Amazon Timestream to access and analyze time series data, and Timestream to query
   *             vehicle data so that you can identify trends and patterns.</p>
   * @public
   */
  dataDestinationConfigs?: DataDestinationConfig[] | undefined;

  /**
   * <p>The data partitions associated with the signals collected from the vehicle.</p>
   * @public
   */
  dataPartitions?: DataPartition[] | undefined;

  /**
   * <p>A list of information about signals to fetch.</p>
   * @public
   */
  signalsToFetch?: SignalFetchInformation[] | undefined;
}

/**
 * @public
 */
export interface CreateCampaignResponse {
  /**
   * <p>The name of the created campaign.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p> The ARN of the created campaign. </p>
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteCampaignRequest {
  /**
   * <p> The name of the campaign to delete. </p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteCampaignResponse {
  /**
   * <p>The name of the deleted campaign.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the deleted campaign.</p>
   *          <note>
   *             <p>The ARN isn’t returned if a campaign doesn’t exist.</p>
   *          </note>
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface GetCampaignRequest {
  /**
   * <p> The name of the campaign to retrieve information about. </p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetCampaignResponse {
  /**
   * <p>The name of the campaign.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the campaign. </p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The description of the campaign.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The ARN of a signal catalog. </p>
   * @public
   */
  signalCatalogArn?: string | undefined;

  /**
   * <p> The ARN of the vehicle or the fleet targeted by the campaign. </p>
   * @public
   */
  targetArn?: string | undefined;

  /**
   * <p>The state of the campaign. The status can be one of: <code>CREATING</code>,
   *                 <code>WAITING_FOR_APPROVAL</code>, <code>RUNNING</code>, and <code>SUSPENDED</code>.
   *         </p>
   * @public
   */
  status?: CampaignStatus | undefined;

  /**
   * <p> The time, in milliseconds, to deliver a campaign after it was approved.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p> The time the campaign expires, in seconds since epoch (January 1, 1970 at midnight
   *             UTC time). Vehicle data won't be collected after the campaign expires.</p>
   * @public
   */
  expiryTime?: Date | undefined;

  /**
   * <p> How long (in seconds) to collect raw data after a triggering event initiates the
   *             collection. </p>
   * @public
   */
  postTriggerCollectionDuration?: number | undefined;

  /**
   * <p> Option for a vehicle to send diagnostic trouble codes to Amazon Web Services IoT FleetWise. </p>
   * @public
   */
  diagnosticsMode?: DiagnosticsMode | undefined;

  /**
   * <p> Whether to store collected data after a vehicle lost a connection with the cloud.
   *             After a connection is re-established, the data is automatically forwarded to Amazon Web Services IoT FleetWise.
   *         </p>
   * @public
   */
  spoolingMode?: SpoolingMode | undefined;

  /**
   * <p> Whether to compress signals before transmitting data to Amazon Web Services IoT FleetWise. If
   *                 <code>OFF</code> is specified, the signals aren't compressed. If it's not specified,
   *                 <code>SNAPPY</code> is used. </p>
   * @public
   */
  compression?: Compression | undefined;

  /**
   * <p> A number indicating the priority of one campaign over another campaign for a certain
   *             vehicle or fleet. A campaign with the lowest value is deployed to vehicles before any
   *             other campaigns.</p>
   * @public
   */
  priority?: number | undefined;

  /**
   * <p> Information about a list of signals to collect data on. </p>
   * @public
   */
  signalsToCollect?: SignalInformation[] | undefined;

  /**
   * <p> Information about the data collection scheme associated with the campaign. </p>
   * @public
   */
  collectionScheme?: CollectionScheme | undefined;

  /**
   * <p> A list of vehicle attributes associated with the campaign. </p>
   * @public
   */
  dataExtraDimensions?: string[] | undefined;

  /**
   * <p> The time the campaign was created in seconds since epoch (January 1, 1970 at midnight
   *             UTC time). </p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The last time the campaign was modified.</p>
   * @public
   */
  lastModificationTime?: Date | undefined;

  /**
   * <p>The destination where the campaign sends data. You can send data to an MQTT topic,
   *             or store it in Amazon S3 or Amazon Timestream.</p>
   *          <p>MQTT is the publish/subscribe messaging protocol used by Amazon Web Services IoT to communicate with
   *             your devices.</p>
   *          <p>Amazon S3 optimizes the cost of data storage and provides additional mechanisms to use vehicle data,
   *             such as data lakes, centralized data storage, data processing pipelines, and analytics. </p>
   *          <p>You can use Amazon Timestream to access and analyze time series data, and Timestream to query
   *             vehicle data so that you can identify trends and patterns.</p>
   * @public
   */
  dataDestinationConfigs?: DataDestinationConfig[] | undefined;

  /**
   * <p>The data partitions associated with the signals collected from the vehicle.</p>
   * @public
   */
  dataPartitions?: DataPartition[] | undefined;

  /**
   * <p>Information about a list of signals to fetch data from.</p>
   * @public
   */
  signalsToFetch?: SignalFetchInformation[] | undefined;
}

/**
 * @public
 */
export interface ListCampaignsRequest {
  /**
   * <p>A pagination token for the next set of results.</p>
   *          <p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return, between 1 and 100, inclusive.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>An optional parameter to filter the results by the status of each created campaign in
   *             your account. The status can be one of: <code>CREATING</code>,
   *                 <code>WAITING_FOR_APPROVAL</code>, <code>RUNNING</code>, or
   *             <code>SUSPENDED</code>.</p>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>When you set the <code>listResponseScope</code> parameter to <code>METADATA_ONLY</code>, the list response includes: campaign name, Amazon Resource Name (ARN), creation time, and last modification time.</p>
   * @public
   */
  listResponseScope?: ListResponseScope | undefined;
}

/**
 * <p>Information about a campaign. </p>
 *          <p>You can use the  API operation to return this
 *             information about multiple created campaigns.</p>
 * @public
 */
export interface CampaignSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of a campaign.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of a campaign.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the campaign.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ARN of the signal catalog associated with the campaign.</p>
   * @public
   */
  signalCatalogArn?: string | undefined;

  /**
   * <p>The ARN of a vehicle or fleet to which the campaign is deployed.</p>
   * @public
   */
  targetArn?: string | undefined;

  /**
   * <p>The state of a campaign. The status can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATING</code> - Amazon Web Services IoT FleetWise is processing your request to create the
   *                     campaign.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WAITING_FOR_APPROVAL</code> - After a campaign is created, it enters the
   *                         <code>WAITING_FOR_APPROVAL</code> state. To allow Amazon Web Services IoT FleetWise to deploy the
   *                     campaign to the target vehicle or fleet, use the  API operation to approve the campaign.
   *                 </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RUNNING</code> - The campaign is active. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUSPENDED</code> - The campaign is suspended. To resume the campaign, use
   *                     the  API operation. </p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: CampaignStatus | undefined;

  /**
   * <p>The time the campaign was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The last time the campaign was modified.</p>
   * @public
   */
  lastModificationTime: Date | undefined;
}

/**
 * @public
 */
export interface ListCampaignsResponse {
  /**
   * <p> A summary of information about each campaign. </p>
   * @public
   */
  campaignSummaries?: CampaignSummary[] | undefined;

  /**
   * <p> The token to retrieve the next set of results, or <code>null</code> if there are no more results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateCampaignRequest {
  /**
   * <p> The name of the campaign to update. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the campaign.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> A list of vehicle attributes to associate with a signal. </p>
   *          <p>Default: An empty array</p>
   * @public
   */
  dataExtraDimensions?: string[] | undefined;

  /**
   * <p> Specifies how to update a campaign. The action can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>APPROVE</code> - To approve delivering a data collection scheme to
   *                     vehicles. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUSPEND</code> - To suspend collecting signal data. The campaign is
   *                     deleted from vehicles and all vehicles in the suspended campaign will stop
   *                     sending data.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESUME</code> - To reactivate the <code>SUSPEND</code> campaign. The
   *                     campaign is redeployed to all vehicles and the vehicles will resume sending
   *                     data.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE</code> - To update a campaign. </p>
   *             </li>
   *          </ul>
   * @public
   */
  action: UpdateCampaignAction | undefined;
}

/**
 * @public
 */
export interface UpdateCampaignResponse {
  /**
   * <p> The Amazon Resource Name (ARN) of the campaign. </p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the updated campaign.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The state of a campaign. The status can be one of:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATING</code> - Amazon Web Services IoT FleetWise is processing your request to create the
   *                     campaign. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WAITING_FOR_APPROVAL</code> - After you create a campaign, it enters this state. Use the  API operation to approve the campaign for deployment to the target vehicle or fleet.
   *                 </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RUNNING</code> - The campaign is active. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUSPENDED</code> - The campaign is suspended. To resume the campaign, use
   *                     the  API operation. </p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: CampaignStatus | undefined;
}

/**
 * <p>Configurations used to create a decoder manifest.</p>
 * @public
 */
export interface CanDbcDefinition {
  /**
   * <p>Contains information about a network interface.</p>
   * @public
   */
  networkInterface: string | undefined;

  /**
   * <p>A list of DBC files. You can upload only one DBC file for each network interface and
   *             specify up to five (inclusive) files in the list. The DBC file can be a maximum size of
   *             200 MB.</p>
   * @public
   */
  canDbcFiles: Uint8Array[] | undefined;

  /**
   * <p>Pairs every signal specified in your vehicle model with a signal decoder.</p>
   * @public
   */
  signalsMap?: Record<string, string> | undefined;
}

/**
 * <p>A single controller area network (CAN) device interface.</p>
 * @public
 */
export interface CanInterface {
  /**
   * <p>The unique name of the interface.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The name of the communication protocol for the interface.</p>
   * @public
   */
  protocolName?: string | undefined;

  /**
   * <p>The version of the communication protocol for the interface.</p>
   * @public
   */
  protocolVersion?: string | undefined;
}

/**
 * <p>Information about a single controller area network (CAN) signal and the messages it
 *             receives and transmits.</p>
 * @public
 */
export interface CanSignal {
  /**
   * <p>The ID of the message.</p>
   * @public
   */
  messageId: number | undefined;

  /**
   * <p>Whether the byte ordering of a CAN message is big-endian.</p>
   * @public
   */
  isBigEndian: boolean | undefined;

  /**
   * <p>Determines whether the message is signed (<code>true</code>) or not (<code>false</code>). If it's signed, the message can represent both positive and negative numbers. The <code>isSigned</code> parameter only applies to the <code>INTEGER</code> raw signal type, and it doesn't affect the <code>FLOATING_POINT</code> raw signal type.</p>
   * @public
   */
  isSigned: boolean | undefined;

  /**
   * <p>Indicates the beginning of the CAN signal. This should always be the least significant
   *             bit (LSB).</p>
   *          <p>This value might be different from the value in a DBC file. For little endian signals,
   *                 <code>startBit</code> is the same value as in the DBC file. For big endian signals
   *             in a DBC file, the start bit is the most significant bit (MSB). You will have to
   *             calculate the LSB instead and pass it as the <code>startBit</code>.</p>
   * @public
   */
  startBit: number | undefined;

  /**
   * <p>The offset used to calculate the signal value. Combined with factor, the calculation
   *             is <code>value = raw_value * factor + offset</code>.</p>
   * @public
   */
  offset: number | undefined;

  /**
   * <p>A multiplier used to decode the CAN message.</p>
   * @public
   */
  factor: number | undefined;

  /**
   * <p>How many bytes of data are in the message.</p>
   * @public
   */
  length: number | undefined;

  /**
   * <p>The name of the signal.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The value type of the signal. The default value is <code>INTEGER</code>.</p>
   * @public
   */
  signalValueType?: SignalValueType | undefined;
}

/**
 * <p>The log delivery option to send data to Amazon CloudWatch Logs.</p>
 * @public
 */
export interface CloudWatchLogDeliveryOptions {
  /**
   * <p>The type of log to send data to Amazon CloudWatch Logs.</p>
   * @public
   */
  logType: LogType | undefined;

  /**
   * <p>The Amazon CloudWatch Logs group the operation sends data to.</p>
   * @public
   */
  logGroupName?: string | undefined;
}

/**
 * <p>Represents a custom network interface as defined by the customer.</p>
 *          <important>
 *             <p>Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html">Amazon Web Services Region and feature availability</a> in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>.</p>
 *          </important>
 * @public
 */
export interface CustomDecodingInterface {
  /**
   * <p>The name of the interface.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * <p>A network interface that specifies the on-board diagnostic (OBD) II network
 *             protocol.</p>
 * @public
 */
export interface ObdInterface {
  /**
   * <p>The name of the interface.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ID of the message requesting vehicle data.</p>
   * @public
   */
  requestMessageId: number | undefined;

  /**
   * <p>The standard OBD II PID.</p>
   * @public
   */
  obdStandard?: string | undefined;

  /**
   * <p>The maximum number message requests per second.</p>
   * @public
   */
  pidRequestIntervalSeconds?: number | undefined;

  /**
   * <p>The maximum number message requests per diagnostic trouble code per second.</p>
   * @public
   */
  dtcRequestIntervalSeconds?: number | undefined;

  /**
   * <p>Whether to use extended IDs in the message.</p>
   * @public
   */
  useExtendedIds?: boolean | undefined;

  /**
   * <p>Whether the vehicle has a transmission control module (TCM).</p>
   * @public
   */
  hasTransmissionEcu?: boolean | undefined;
}

/**
 * <p>The vehicle middleware defined as a type of network interface. Examples of vehicle
 *             middleware include <code>ROS2</code> and <code>SOME/IP</code>.</p>
 * @public
 */
export interface VehicleMiddleware {
  /**
   * <p>The name of the vehicle middleware. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The protocol name of the vehicle middleware. </p>
   * @public
   */
  protocolName: VehicleMiddlewareProtocol | undefined;
}

/**
 * <p>Represents a node and its specifications in an in-vehicle communication network. All
 *             signal decoders must be associated with a network node. </p>
 *          <p> To return this information about all the network interfaces specified in a decoder
 *             manifest, use the  API
 *             operation.</p>
 * @public
 */
export interface NetworkInterface {
  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  interfaceId: string | undefined;

  /**
   * <p>The network protocol for the vehicle. For example, <code>CAN_SIGNAL</code> specifies a
   *             protocol that defines how data is communicated between electronic control units (ECUs).
   *                 <code>OBD_SIGNAL</code> specifies a protocol that defines how self-diagnostic data
   *             is communicated between ECUs.</p>
   * @public
   */
  type: NetworkInterfaceType | undefined;

  /**
   * <p>Information about a network interface specified by the Controller Area Network (CAN)
   *             protocol.</p>
   * @public
   */
  canInterface?: CanInterface | undefined;

  /**
   * <p>Information about a network interface specified by the on-board diagnostic (OBD) II
   *             protocol.</p>
   * @public
   */
  obdInterface?: ObdInterface | undefined;

  /**
   * <p>The vehicle middleware defined as a type of network interface. Examples of vehicle
   *             middleware include <code>ROS2</code> and <code>SOME/IP</code>.</p>
   * @public
   */
  vehicleMiddleware?: VehicleMiddleware | undefined;

  /**
   * <p>Information about a <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_CustomDecodingInterface.html">custom network
   *           interface</a>.</p>
   * @public
   */
  customDecodingInterface?: CustomDecodingInterface | undefined;
}

/**
 * <p>Information about signals using a custom decoding protocol as defined by the customer.</p>
 *          <important>
 *             <p>Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html">Amazon Web Services Region and feature availability</a> in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>.</p>
 *          </important>
 * @public
 */
export interface CustomDecodingSignal {
  /**
   * <p>The ID of the signal.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * <p>Represents a ROS 2 compliant primitive type message of the complex data
 *             structure.</p>
 * @public
 */
export interface ROS2PrimitiveMessageDefinition {
  /**
   * <p>The primitive type (integer, floating point, boolean, etc.) for the ROS 2 primitive
   *             message definition.</p>
   * @public
   */
  primitiveType: ROS2PrimitiveType | undefined;

  /**
   * <p>The offset used to calculate the signal value. Combined with scaling, the calculation
   *             is <code>value = raw_value * scaling + offset</code>.</p>
   * @public
   */
  offset?: number | undefined;

  /**
   * <p>A multiplier used to decode the message.</p>
   * @public
   */
  scaling?: number | undefined;

  /**
   * <p>An optional attribute specifying the upper bound for <code>STRING</code> and
   *                 <code>WSTRING</code>.</p>
   * @public
   */
  upperBound?: number | undefined;
}

/**
 * <p>Represents a primitive type node of the complex data structure.</p>
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
   * <p>Information about a <code>PrimitiveMessage</code> using a ROS 2 compliant primitive
   *             type message of the complex data structure.</p>
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
 * <p>Information about signal messages using the on-board diagnostics (OBD) II protocol in
 *             a vehicle.</p>
 * @public
 */
export interface ObdSignal {
  /**
   * <p>The length of the requested data.</p>
   * @public
   */
  pidResponseLength: number | undefined;

  /**
   * <p>The mode of operation (diagnostic service) in a message.</p>
   * @public
   */
  serviceMode: number | undefined;

  /**
   * <p>The diagnostic code used to request data from a vehicle for this signal.</p>
   * @public
   */
  pid: number | undefined;

  /**
   * <p>A multiplier used to decode the message.</p>
   * @public
   */
  scaling: number | undefined;

  /**
   * <p>The offset used to calculate the signal value. Combined with scaling, the calculation
   *             is <code>value = raw_value * scaling + offset</code>.</p>
   * @public
   */
  offset: number | undefined;

  /**
   * <p>Indicates the beginning of the message.</p>
   * @public
   */
  startByte: number | undefined;

  /**
   * <p>The length of a message.</p>
   * @public
   */
  byteLength: number | undefined;

  /**
   * <p>The number of positions to shift bits in the message.</p>
   * @public
   */
  bitRightShift?: number | undefined;

  /**
   * <p>The number of bits to mask in a message.</p>
   * @public
   */
  bitMaskLength?: number | undefined;

  /**
   * <p>Determines whether the message is signed (<code>true</code>) or not (<code>false</code>). If it's signed, the message can represent both positive and negative numbers. The <code>isSigned</code> parameter only applies to the <code>INTEGER</code> raw signal type, and it doesn't affect the <code>FLOATING_POINT</code> raw signal type. The default value is <code>false</code>.</p>
   * @public
   */
  isSigned?: boolean | undefined;

  /**
   * <p>The value type of the signal. The default value is <code>INTEGER</code>.</p>
   * @public
   */
  signalValueType?: SignalValueType | undefined;
}

/**
 * @public
 */
export interface CreateDecoderManifestResponse {
  /**
   * <p> The name of the created decoder manifest. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> The ARN of the created decoder manifest. </p>
   * @public
   */
  arn: string | undefined;
}

/**
 * <p>A reason a vehicle network interface isn't valid.</p>
 * @public
 */
export interface InvalidNetworkInterface {
  /**
   * <p>The ID of the interface that isn't valid.</p>
   * @public
   */
  interfaceId?: string | undefined;

  /**
   * <p>A message about why the interface isn't valid. </p>
   * @public
   */
  reason?: NetworkInterfaceFailureReason | undefined;
}

/**
 * <p>A reason that a signal decoder isn't valid.</p>
 * @public
 */
export interface InvalidSignalDecoder {
  /**
   * <p>The name of a signal decoder that isn't valid.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A message about why the signal decoder isn't valid.</p>
   * @public
   */
  reason?: SignalDecoderFailureReason | undefined;

  /**
   * <p>The possible cause for the invalid signal decoder.</p>
   * @public
   */
  hint?: string | undefined;
}

/**
 * @public
 */
export interface CreateFleetRequest {
  /**
   * <p> The unique ID of the fleet to create. </p>
   * @public
   */
  fleetId: string | undefined;

  /**
   * <p> A brief description of the fleet to create. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of a signal catalog. </p>
   * @public
   */
  signalCatalogArn: string | undefined;

  /**
   * <p>Metadata that can be used to manage the fleet.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateFleetResponse {
  /**
   * <p> The ID of the created fleet. </p>
   * @public
   */
  id: string | undefined;

  /**
   * <p> The ARN of the created fleet. </p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface CreateModelManifestRequest {
  /**
   * <p> The name of the vehicle model to create.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> A brief description of the vehicle model. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> A list of nodes, which are a general abstraction of signals. </p>
   * @public
   */
  nodes: string[] | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of a signal catalog. </p>
   * @public
   */
  signalCatalogArn: string | undefined;

  /**
   * <p>Metadata that can be used to manage the vehicle model.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateModelManifestResponse {
  /**
   * <p> The name of the created vehicle model.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> The ARN of the created vehicle model.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * <p>A reason that a signal isn't valid.</p>
 * @public
 */
export interface InvalidSignal {
  /**
   * <p>The name of the signal that isn't valid.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A message about why the signal isn't valid.</p>
   * @public
   */
  reason?: string | undefined;
}

/**
 * <p>Represents a member of the complex data structure. The data type of the property can
 *             be either primitive or another <code>struct</code>.</p>
 * @public
 */
export interface CustomProperty {
  /**
   * <p>The fully qualified name of the custom property. For example, the fully qualified name
   *             of a custom property might be
   *                 <code>ComplexDataTypes.VehicleDataTypes.SVMCamera.FPS</code>.</p>
   * @public
   */
  fullyQualifiedName: string | undefined;

  /**
   * <p>The data type for the custom property. </p>
   * @public
   */
  dataType: NodeDataType | undefined;

  /**
   * <p>Indicates whether the property is binary data.</p>
   * @public
   */
  dataEncoding?: NodeDataEncoding | undefined;

  /**
   * <p>A brief description of the custom property.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The deprecation message for the node or the branch that was moved or deleted.</p>
   * @public
   */
  deprecationMessage?: string | undefined;

  /**
   * <p>A comment in addition to the description.</p>
   * @public
   */
  comment?: string | undefined;

  /**
   * <p>The fully qualified name of the struct node for the custom property if the data type
   *             of the custom property is <code>Struct</code> or <code>StructArray</code>. </p>
   * @public
   */
  structFullyQualifiedName?: string | undefined;
}

/**
 * <p>An input component that reports the environmental condition of a vehicle.</p>
 *          <note>
 *             <p>You can collect data about fluid levels, temperatures, vibrations, or battery
 *                 voltage from sensors.</p>
 *          </note>
 * @public
 */
export interface Sensor {
  /**
   * <p>The fully qualified name of the sensor. For example, the fully qualified name of a
   *             sensor might be <code>Vehicle.Body.Engine.Battery</code>.</p>
   * @public
   */
  fullyQualifiedName: string | undefined;

  /**
   * <p>The specified data type of the sensor. </p>
   * @public
   */
  dataType: NodeDataType | undefined;

  /**
   * <p>A brief description of a sensor.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The scientific unit of measurement for data collected by the sensor.</p>
   * @public
   */
  unit?: string | undefined;

  /**
   * <p>A list of possible values a sensor can take.</p>
   * @public
   */
  allowedValues?: string[] | undefined;

  /**
   * <p>The specified possible minimum value of the sensor.</p>
   * @public
   */
  min?: number | undefined;

  /**
   * <p>The specified possible maximum value of the sensor.</p>
   * @public
   */
  max?: number | undefined;

  /**
   * <p>The deprecation message for the node or the branch that was moved or deleted.</p>
   * @public
   */
  deprecationMessage?: string | undefined;

  /**
   * <p>A comment in addition to the description.</p>
   * @public
   */
  comment?: string | undefined;

  /**
   * <p>The fully qualified name of the struct node for a sensor if the data type of the
   *             actuator is <code>Struct</code> or <code>StructArray</code>. For example, the struct
   *             fully qualified name of a sensor might be <code>Vehicle.ADAS.CameraStruct</code>.</p>
   * @public
   */
  structFullyQualifiedName?: string | undefined;
}

/**
 * <p>The custom structure represents a complex or higher-order data structure.</p>
 * @public
 */
export interface CustomStruct {
  /**
   * <p>The fully qualified name of the custom structure. For example, the fully qualified
   *             name of a custom structure might be
   *                 <code>ComplexDataTypes.VehicleDataTypes.SVMCamera</code>.</p>
   * @public
   */
  fullyQualifiedName: string | undefined;

  /**
   * <p>A brief description of the custom structure.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The deprecation message for the node or the branch that was moved or deleted.</p>
   * @public
   */
  deprecationMessage?: string | undefined;

  /**
   * <p>A comment in addition to the description.</p>
   * @public
   */
  comment?: string | undefined;
}

/**
 * <p>A general abstraction of a signal. A node can be specified as an actuator, attribute,
 *             branch, or sensor.</p>
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
   * <p>Information about a node specified as a branch.</p>
   *          <note>
   *             <p>A group of signals that are defined in a hierarchical structure.</p>
   *          </note>
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
   * <p>An input component that reports the environmental condition of a vehicle.</p>
   *          <note>
   *             <p>You can collect data about fluid levels, temperatures, vibrations, or battery
   *                 voltage from sensors.</p>
   *          </note>
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
   * <p>Information about a node specified as an actuator.</p>
   *          <note>
   *             <p>An actuator is a digital representation of a vehicle device.</p>
   *          </note>
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
   * <p>Information about a node specified as an attribute.</p>
   *          <note>
   *             <p>An attribute represents static information about a vehicle.</p>
   *          </note>
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
   * <p>Represents a complex or higher-order data structure.</p>
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
   * <p>Represents a member of the complex data structure. The <code>datatype</code> of the
   *             property can be either primitive or another <code>struct</code>.</p>
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
   * <p> The name of the signal catalog to create. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A brief description of the signal catalog.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> A list of information about nodes, which are a general abstraction of signals. For
   *             more information, see the  API data type.</p>
   * @public
   */
  nodes?: Node[] | undefined;

  /**
   * <p>Metadata that can be used to manage the signal catalog.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateSignalCatalogResponse {
  /**
   * <p> The name of the created signal catalog. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> The ARN of the created signal catalog. </p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface CreateStateTemplateRequest {
  /**
   * <p>The name of the state template.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A brief description of the state template.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ARN of the signal catalog associated with the state template.</p>
   * @public
   */
  signalCatalogArn: string | undefined;

  /**
   * <p>A list of signals from which data is collected. The state template properties contain the fully qualified names of the signals.</p>
   * @public
   */
  stateTemplateProperties: string[] | undefined;

  /**
   * <p>A list of vehicle attributes to associate with the payload published on the state template's
   *           MQTT topic. (See <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/process-visualize-data.html#process-last-known-state-vehicle-data">
   *           Processing last known state vehicle data using MQTT messaging</a>). For example, if you add
   *           <code>Vehicle.Attributes.Make</code> and <code>Vehicle.Attributes.Model</code> attributes, Amazon Web Services IoT FleetWise
   *           will enrich the protobuf encoded payload with those attributes in the <code>extraDimensions</code>
   *           field.</p>
   * @public
   */
  dataExtraDimensions?: string[] | undefined;

  /**
   * <p>A list of vehicle attributes to associate with user properties of the messages published on the
   *           state template's MQTT topic. (See <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/process-visualize-data.html#process-last-known-state-vehicle-data">
   *           Processing last known state vehicle data using MQTT messaging</a>). For example, if you add
   *           <code>Vehicle.Attributes.Make</code> and <code>Vehicle.Attributes.Model</code> attributes, Amazon Web Services IoT FleetWise
   *           will include these attributes as User Properties with the MQTT message.</p>
   *          <p>Default: An empty array</p>
   * @public
   */
  metadataExtraDimensions?: string[] | undefined;

  /**
   * <p>Metadata that can be used to manage the state template.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateStateTemplateResponse {
  /**
   * <p>The name of the state template.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the state template.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The unique ID of the state template.</p>
   * @public
   */
  id?: string | undefined;
}

/**
 * @public
 */
export interface CreateVehicleRequest {
  /**
   * <p> The unique ID of the vehicle to create. </p>
   * @public
   */
  vehicleName: string | undefined;

  /**
   * <p> The Amazon Resource Name ARN of a vehicle model. </p>
   * @public
   */
  modelManifestArn: string | undefined;

  /**
   * <p> The ARN of a decoder manifest. </p>
   * @public
   */
  decoderManifestArn: string | undefined;

  /**
   * <p>Static information about a vehicle in a key-value pair. For example:
   *             <code>"engineType"</code> : <code>"1.3 L R2"</code>
   *          </p>
   *          <p>To use attributes with Campaigns or State Templates, you must include them using the
   *             request parameters <code>dataExtraDimensions</code> and/or <code>metadataExtraDimensions</code>
   *             (for state templates only) when creating your campaign/state template. </p>
   * @public
   */
  attributes?: Record<string, string> | undefined;

  /**
   * <p> An option to create a new Amazon Web Services IoT thing when creating a vehicle, or to validate an
   *             existing Amazon Web Services IoT thing as a vehicle. </p>
   *          <p>Default: <code/>
   *          </p>
   * @public
   */
  associationBehavior?: VehicleAssociationBehavior | undefined;

  /**
   * <p>Metadata that can be used to manage the vehicle.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>Associate state templates with the vehicle. You can monitor the last known state of the vehicle in near real time.</p>
   * @public
   */
  stateTemplates?: StateTemplateAssociation[] | undefined;
}

/**
 * @public
 */
export interface CreateVehicleResponse {
  /**
   * <p>The unique ID of the created vehicle.</p>
   * @public
   */
  vehicleName?: string | undefined;

  /**
   * <p> The ARN of the created vehicle. </p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p> The ARN of a created or validated Amazon Web Services IoT thing. </p>
   * @public
   */
  thingArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDecoderManifestRequest {
  /**
   * <p> The name of the decoder manifest to delete. </p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteDecoderManifestResponse {
  /**
   * <p>The name of the deleted decoder manifest.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the deleted decoder manifest.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetDecoderManifestRequest {
  /**
   * <p> The name of the decoder manifest to retrieve information about. </p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetDecoderManifestResponse {
  /**
   * <p> The name of the decoder manifest. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the decoder manifest. </p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p> A brief description of the decoder manifest.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The ARN of a vehicle model (model manifest) associated with the decoder
   *             manifest.</p>
   * @public
   */
  modelManifestArn?: string | undefined;

  /**
   * <p> The state of the decoder manifest. If the status is <code>ACTIVE</code>, the decoder
   *             manifest can't be edited. If the status is marked <code>DRAFT</code>, you can edit the
   *             decoder manifest.</p>
   * @public
   */
  status?: ManifestStatus | undefined;

  /**
   * <p> The time the decoder manifest was created in seconds since epoch (January 1, 1970 at midnight UTC time). </p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p> The time the decoder manifest was last updated in seconds since epoch (January 1, 1970 at midnight UTC time).  </p>
   * @public
   */
  lastModificationTime: Date | undefined;

  /**
   * <p>The detailed message for the decoder manifest. When a decoder manifest is in an
   *                 <code>INVALID</code> status, the message contains detailed reason and help
   *             information.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * <p>Specifications for defining a vehicle network.</p>
 * @public
 */
export type NetworkFileDefinition = NetworkFileDefinition.CanDbcMember | NetworkFileDefinition.$UnknownMember;

/**
 * @public
 */
export namespace NetworkFileDefinition {
  /**
   * <p>Information, including CAN DBC files, about the configurations used to create a
   *             decoder manifest.</p>
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
   * <p> The name of the decoder manifest to import. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> The file to load into an Amazon Web Services account. </p>
   * @public
   */
  networkFileDefinitions: NetworkFileDefinition[] | undefined;
}

/**
 * @public
 */
export interface ImportDecoderManifestResponse {
  /**
   * <p> The name of the imported decoder manifest. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the decoder manifest that was imported. </p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface ListDecoderManifestNetworkInterfacesRequest {
  /**
   * <p> The name of the decoder manifest to list information about. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A pagination token for the next set of results.</p>
   *          <p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return, between 1 and 100, inclusive.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDecoderManifestNetworkInterfacesResponse {
  /**
   * <p> A list of information about network interfaces. </p>
   * @public
   */
  networkInterfaces?: NetworkInterface[] | undefined;

  /**
   * <p> The token to retrieve the next set of results, or <code>null</code> if there are no more results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDecoderManifestsRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of a vehicle model (model manifest) associated with
   *             the decoder manifest. </p>
   * @public
   */
  modelManifestArn?: string | undefined;

  /**
   * <p>A pagination token for the next set of results.</p>
   *          <p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return, between 1 and 100, inclusive.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>When you set the <code>listResponseScope</code> parameter to <code>METADATA_ONLY</code>, the list response includes: decoder manifest name, Amazon Resource Name (ARN), creation time, and last modification time.</p>
   * @public
   */
  listResponseScope?: ListResponseScope | undefined;
}

/**
 * <p>Information about a created decoder manifest. You can use the  API operation to return this information about
 *             multiple decoder manifests.</p>
 * @public
 */
export interface DecoderManifestSummary {
  /**
   * <p>The name of the decoder manifest.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The ARN of a vehicle model (model manifest) associated with the decoder manifest.
   *         </p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The ARN of a vehicle model (model manifest) associated with the decoder
   *             manifest.</p>
   * @public
   */
  modelManifestArn?: string | undefined;

  /**
   * <p>A brief description of the decoder manifest.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The state of the decoder manifest. If the status is <code>ACTIVE</code>, the decoder
   *             manifest can't be edited. If the status is marked <code>DRAFT</code>, you can edit the
   *             decoder manifest.</p>
   * @public
   */
  status?: ManifestStatus | undefined;

  /**
   * <p>The time the decoder manifest was created in seconds since epoch (January 1, 1970 at
   *             midnight UTC time).</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The time the decoder manifest was last updated in seconds since epoch (January 1, 1970
   *             at midnight UTC time).</p>
   * @public
   */
  lastModificationTime: Date | undefined;

  /**
   * <p>The detailed message for the decoder manifest. When a decoder manifest is in an
   *                 <code>INVALID</code> status, the message contains detailed reason and help
   *             information.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface ListDecoderManifestsResponse {
  /**
   * <p> A list of information about each decoder manifest. </p>
   * @public
   */
  summaries?: DecoderManifestSummary[] | undefined;

  /**
   * <p> The token to retrieve the next set of results, or <code>null</code> if there are no more results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDecoderManifestSignalsRequest {
  /**
   * <p> The name of the decoder manifest to list information about. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A pagination token for the next set of results.</p>
   *          <p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return, between 1 and 100, inclusive.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface UpdateDecoderManifestResponse {
  /**
   * <p> The name of the updated decoder manifest. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the updated decoder manifest. </p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteFleetRequest {
  /**
   * <p> The ID of the fleet to delete. </p>
   * @public
   */
  fleetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFleetResponse {
  /**
   * <p>The ID of the deleted fleet.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the deleted fleet.</p>
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteModelManifestRequest {
  /**
   * <p> The name of the model manifest to delete. </p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteModelManifestResponse {
  /**
   * <p>The name of the deleted model manifest.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the deleted model manifest.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteSignalCatalogRequest {
  /**
   * <p> The name of the signal catalog to delete. </p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteSignalCatalogResponse {
  /**
   * <p>The name of the deleted signal catalog.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the deleted signal catalog.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteStateTemplateRequest {
  /**
   * <p>The unique ID of the state template.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteStateTemplateResponse {
  /**
   * <p>The name of the state template.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the state template.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The unique ID of the state template.</p>
   * @public
   */
  id?: string | undefined;
}

/**
 * @public
 */
export interface DeleteVehicleRequest {
  /**
   * <p>The ID of the vehicle to delete. </p>
   * @public
   */
  vehicleName: string | undefined;
}

/**
 * @public
 */
export interface DeleteVehicleResponse {
  /**
   * <p>The ID of the deleted vehicle.</p>
   * @public
   */
  vehicleName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the deleted vehicle.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateVehicleFleetRequest {
  /**
   * <p> The unique ID of the vehicle to disassociate from the fleet.</p>
   * @public
   */
  vehicleName: string | undefined;

  /**
   * <p> The unique ID of a fleet. </p>
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
   * <p> The ID of the vehicle to retrieve information about. </p>
   * @public
   */
  vehicleName: string | undefined;

  /**
   * <p>A pagination token for the next set of results.</p>
   *          <p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return, between 1 and 100, inclusive.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListFleetsForVehicleResponse {
  /**
   * <p> A list of fleet IDs that the vehicle is associated with. </p>
   * @public
   */
  fleets?: string[] | undefined;

  /**
   * <p> The token to retrieve the next set of results, or <code>null</code> if there are no more results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetFleetRequest {
  /**
   * <p> The ID of the fleet to retrieve information about. </p>
   * @public
   */
  fleetId: string | undefined;
}

/**
 * @public
 */
export interface GetFleetResponse {
  /**
   * <p> The ID of the fleet.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the fleet. </p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p> A brief description of the fleet. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The ARN of a signal catalog associated with the fleet. </p>
   * @public
   */
  signalCatalogArn: string | undefined;

  /**
   * <p> The time the fleet was created in seconds since epoch (January 1, 1970 at midnight
   *             UTC time). </p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p> The time the fleet was last updated, in seconds since epoch (January 1, 1970 at
   *             midnight UTC time). </p>
   * @public
   */
  lastModificationTime: Date | undefined;
}

/**
 * @public
 */
export interface ListFleetsRequest {
  /**
   * <p>A pagination token for the next set of results.</p>
   *          <p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return, between 1 and 100, inclusive.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>When you set the <code>listResponseScope</code> parameter to <code>METADATA_ONLY</code>, the list response includes: fleet ID, Amazon Resource Name (ARN), creation time, and last modification time.</p>
   * @public
   */
  listResponseScope?: ListResponseScope | undefined;
}

/**
 * <p>Information about a fleet.</p>
 *          <p>You can use the  API operation to return this
 *             information about multiple fleets.</p>
 * @public
 */
export interface FleetSummary {
  /**
   * <p>The unique ID of the fleet.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>A brief description of the fleet.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ARN of the signal catalog associated with the fleet.</p>
   * @public
   */
  signalCatalogArn: string | undefined;

  /**
   * <p>The time the fleet was created, in seconds since epoch (January 1, 1970 at midnight
   *             UTC time).</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The time the fleet was last updated in seconds since epoch (January 1, 1970 at
   *             midnight UTC time).</p>
   * @public
   */
  lastModificationTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListFleetsResponse {
  /**
   * <p> A list of information for each fleet. </p>
   * @public
   */
  fleetSummaries?: FleetSummary[] | undefined;

  /**
   * <p> The token to retrieve the next set of results, or <code>null</code> if there are no more results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFleetRequest {
  /**
   * <p> The ID of the fleet to update. </p>
   * @public
   */
  fleetId: string | undefined;

  /**
   * <p> An updated description of the fleet. </p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFleetResponse {
  /**
   * <p>The ID of the updated fleet.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the updated fleet.</p>
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface ListVehiclesInFleetRequest {
  /**
   * <p> The ID of a fleet. </p>
   * @public
   */
  fleetId: string | undefined;

  /**
   * <p>A pagination token for the next set of results.</p>
   *          <p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return, between 1 and 100, inclusive.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListVehiclesInFleetResponse {
  /**
   * <p> A list of vehicles associated with the fleet. </p>
   * @public
   */
  vehicles?: string[] | undefined;

  /**
   * <p> The token to retrieve the next set of results, or <code>null</code> if there are no more results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>
 *             <a href="https://www.w3.org/auto/wg/wiki/Vehicle_Signal_Specification_(VSS)/Vehicle_Data_Spec">Vehicle Signal Specification (VSS)</a> is a precise language used to describe
 *             and model signals in vehicle networks. The JSON file collects signal specificiations in
 *             a VSS format.</p>
 * @public
 */
export type FormattedVss = FormattedVss.VssJsonMember | FormattedVss.$UnknownMember;

/**
 * @public
 */
export namespace FormattedVss {
  /**
   * <p>Provides the VSS in JSON format.</p>
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
   * <p>The ID of the KMS key that is used for encryption.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>The encryption status.</p>
   * @public
   */
  encryptionStatus: EncryptionStatus | undefined;

  /**
   * <p>The type of encryption. Set to <code>KMS_BASED_ENCRYPTION</code> to use a KMS key
   *             that you own and manage. Set to <code>FLEETWISE_DEFAULT_ENCRYPTION</code> to use an
   *             Amazon Web Services managed key that is owned by the Amazon Web Services IoT FleetWise service account.</p>
   * @public
   */
  encryptionType: EncryptionType | undefined;

  /**
   * <p>The error message that describes why encryption settings couldn't be configured, if
   *             applicable.</p>
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * <p>The time when encryption was configured in seconds since epoch (January 1, 1970 at
   *             midnight UTC time).</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The time when encryption was last updated in seconds since epoch (January 1, 1970 at
   *             midnight UTC time).</p>
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
   * <p>Returns information about log delivery to Amazon CloudWatch Logs.</p>
   * @public
   */
  cloudWatchLogDelivery: CloudWatchLogDeliveryOptions | undefined;
}

/**
 * @public
 */
export interface GetModelManifestRequest {
  /**
   * <p> The name of the vehicle model to retrieve information about. </p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetModelManifestResponse {
  /**
   * <p> The name of the vehicle model. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the vehicle model. </p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p> A brief description of the vehicle model. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The ARN of the signal catalog associated with the vehicle model. </p>
   * @public
   */
  signalCatalogArn?: string | undefined;

  /**
   * <p> The state of the vehicle model. If the status is <code>ACTIVE</code>, the vehicle
   *             model can't be edited. You can edit the vehicle model if the status is marked
   *                 <code>DRAFT</code>.</p>
   * @public
   */
  status?: ManifestStatus | undefined;

  /**
   * <p>The time the vehicle model was created, in seconds since epoch (January 1, 1970 at
   *             midnight UTC time).</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The last time the vehicle model was modified.</p>
   * @public
   */
  lastModificationTime: Date | undefined;
}

/**
 * @public
 */
export interface GetRegisterAccountStatusRequest {}

/**
 * <p>Information about registering an Identity and Access Management (IAM) resource so Amazon Web Services IoT FleetWise edge agent
 *             software can transfer your vehicle data to Amazon Timestream.</p>
 * @public
 */
export interface IamRegistrationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to register.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The status of registering your IAM resource. The status can be one of
   *                 <code>REGISTRATION_SUCCESS</code>, <code>REGISTRATION_PENDING</code>,
   *                 <code>REGISTRATION_FAILURE</code>.</p>
   * @public
   */
  registrationStatus: RegistrationStatus | undefined;

  /**
   * <p>A message associated with a registration error.</p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * <p>Information about the registered Amazon Timestream resources or errors, if any.</p>
 * @public
 */
export interface TimestreamRegistrationResponse {
  /**
   * <p>The name of the Timestream database.</p>
   * @public
   */
  timestreamDatabaseName: string | undefined;

  /**
   * <p>The name of the Timestream database table.</p>
   * @public
   */
  timestreamTableName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Timestream database.</p>
   * @public
   */
  timestreamDatabaseArn?: string | undefined;

  /**
   * <p>The ARN of the Timestream database table.</p>
   * @public
   */
  timestreamTableArn?: string | undefined;

  /**
   * <p>The status of registering your Amazon Timestream resources. The status can be one of
   *                 <code>REGISTRATION_SUCCESS</code>, <code>REGISTRATION_PENDING</code>,
   *                 <code>REGISTRATION_FAILURE</code>.</p>
   * @public
   */
  registrationStatus: RegistrationStatus | undefined;

  /**
   * <p>A message associated with a registration error.</p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface GetRegisterAccountStatusResponse {
  /**
   * <p> The unique ID of the Amazon Web Services account, provided at account creation. </p>
   * @public
   */
  customerAccountId: string | undefined;

  /**
   * <p> The status of registering your account and resources. The status can be one
   *             of:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>REGISTRATION_SUCCESS</code> - The Amazon Web Services resource is successfully
   *                     registered.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REGISTRATION_PENDING</code> - Amazon Web Services IoT FleetWise is processing the registration
   *                     request. This process takes approximately five minutes to complete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REGISTRATION_FAILURE</code> - Amazon Web Services IoT FleetWise can't register the AWS resource.
   *                     Try again later.</p>
   *             </li>
   *          </ul>
   * @public
   */
  accountStatus: RegistrationStatus | undefined;

  /**
   * <p> Information about the registered Amazon Timestream resources or errors, if any.</p>
   * @public
   */
  timestreamRegistrationResponse?: TimestreamRegistrationResponse | undefined;

  /**
   * <p> Information about the registered IAM resources or errors, if any. </p>
   * @public
   */
  iamRegistrationResponse: IamRegistrationResponse | undefined;

  /**
   * <p> The time the account was registered, in seconds since epoch (January 1, 1970 at
   *             midnight UTC time). </p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p> The time this registration was last updated, in seconds since epoch (January 1, 1970
   *             at midnight UTC time). </p>
   * @public
   */
  lastModificationTime: Date | undefined;
}

/**
 * @public
 */
export interface GetSignalCatalogRequest {
  /**
   * <p> The name of the signal catalog to retrieve information about. </p>
   * @public
   */
  name: string | undefined;
}

/**
 * <p>Information about the number of nodes and node types in a vehicle network.</p>
 * @public
 */
export interface NodeCounts {
  /**
   * <p>The total number of nodes in a vehicle network.</p>
   * @public
   */
  totalNodes?: number | undefined;

  /**
   * <p>The total number of nodes in a vehicle network that represent branches.</p>
   * @public
   */
  totalBranches?: number | undefined;

  /**
   * <p>The total number of nodes in a vehicle network that represent sensors.</p>
   * @public
   */
  totalSensors?: number | undefined;

  /**
   * <p>The total number of nodes in a vehicle network that represent attributes.</p>
   * @public
   */
  totalAttributes?: number | undefined;

  /**
   * <p>The total number of nodes in a vehicle network that represent actuators.</p>
   * @public
   */
  totalActuators?: number | undefined;

  /**
   * <p>The total structure for the node.</p>
   * @public
   */
  totalStructs?: number | undefined;

  /**
   * <p>The total properties for the node.</p>
   * @public
   */
  totalProperties?: number | undefined;
}

/**
 * @public
 */
export interface GetSignalCatalogResponse {
  /**
   * <p> The name of the signal catalog. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the signal catalog. </p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p> A brief description of the signal catalog. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The total number of network nodes specified in a signal catalog. </p>
   * @public
   */
  nodeCounts?: NodeCounts | undefined;

  /**
   * <p> The time the signal catalog was created in seconds since epoch (January 1, 1970 at midnight UTC time).  </p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The last time the signal catalog was modified.</p>
   * @public
   */
  lastModificationTime: Date | undefined;
}

/**
 * @public
 */
export interface GetStateTemplateRequest {
  /**
   * <p>The unique ID of the state template.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetStateTemplateResponse {
  /**
   * <p>The name of the state template.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the state template.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>A brief description of the state template.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ARN of the signal catalog associated with the state template.</p>
   * @public
   */
  signalCatalogArn?: string | undefined;

  /**
   * <p>A list of signals from which data is collected. The state template properties contain the fully qualified names of the signals.</p>
   * @public
   */
  stateTemplateProperties?: string[] | undefined;

  /**
   * <p>A list of vehicle attributes associated with the payload published on the state template's
   *           MQTT topic. </p>
   *          <p>Default: An empty array</p>
   * @public
   */
  dataExtraDimensions?: string[] | undefined;

  /**
   * <p>A list of vehicle attributes to associate with user properties of the messages published on the
   *           state template's MQTT topic.</p>
   *          <p>Default: An empty array</p>
   * @public
   */
  metadataExtraDimensions?: string[] | undefined;

  /**
   * <p>The time the state template was created in seconds since epoch (January 1, 1970 at midnight UTC time).</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The time the state template was last updated in seconds since epoch (January 1, 1970 at midnight UTC time).</p>
   * @public
   */
  lastModificationTime?: Date | undefined;

  /**
   * <p>The unique ID of the state template.</p>
   * @public
   */
  id?: string | undefined;
}

/**
 * @public
 */
export interface GetVehicleRequest {
  /**
   * <p> The ID of the vehicle to retrieve information about. </p>
   * @public
   */
  vehicleName: string | undefined;
}

/**
 * @public
 */
export interface GetVehicleResponse {
  /**
   * <p>The ID of the vehicle.</p>
   * @public
   */
  vehicleName?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the vehicle to retrieve information about. </p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p> The ARN of a vehicle model (model manifest) associated with the vehicle. </p>
   * @public
   */
  modelManifestArn?: string | undefined;

  /**
   * <p> The ARN of a decoder manifest associated with the vehicle. </p>
   * @public
   */
  decoderManifestArn?: string | undefined;

  /**
   * <p>Static information about a vehicle in a key-value pair. For example:</p>
   *          <p>
   *             <code>"engineType"</code> : <code>"1.3 L R2"</code>
   *          </p>
   * @public
   */
  attributes?: Record<string, string> | undefined;

  /**
   * <p>State templates associated with the vehicle.</p>
   * @public
   */
  stateTemplates?: StateTemplateAssociation[] | undefined;

  /**
   * <p> The time the vehicle was created in seconds since epoch (January 1, 1970 at midnight UTC time). </p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p> The time the vehicle was last updated in seconds since epoch (January 1, 1970 at midnight UTC time).  </p>
   * @public
   */
  lastModificationTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetVehicleStatusRequest {
  /**
   * <p>A pagination token for the next set of results.</p>
   *          <p>If the results of a search are large, only a portion of the results are returned, and a
   *             <code>nextToken</code> pagination token is returned in the response. To retrieve the next
   *             set of results, reissue the search request and include the returned token. When all results
   *             have been returned, the response does not contain a pagination token value. This parameter
   *             is only supported for resources of type <code>CAMPAIGN</code>.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return, between 1 and 100, inclusive. This parameter is only
   *             supported for resources of type <code>CAMPAIGN</code>.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p> The ID of the vehicle to retrieve information about. </p>
   * @public
   */
  vehicleName: string | undefined;
}

/**
 * <p>Information about a campaign associated with a vehicle.</p>
 * @public
 */
export interface VehicleStatus {
  /**
   * <p>The name of a campaign.</p>
   * @public
   */
  campaignName?: string | undefined;

  /**
   * <p>The unique ID of the vehicle.</p>
   * @public
   */
  vehicleName?: string | undefined;

  /**
   * <p>The status of a campaign, which can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATED</code> - The campaign exists but is not yet approved.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>READY</code> - The campaign is approved but has not been deployed to the vehicle. Data has not arrived at the vehicle yet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HEALTHY</code> - The campaign is deployed to the vehicle.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUSPENDED</code> - The campaign is suspended and data collection is paused.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> - The campaign is being removed from the vehicle.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>READY_FOR_CHECKIN</code> - The campaign is approved and waiting for vehicle check-in before deployment.</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: VehicleState | undefined;
}

/**
 * @public
 */
export interface GetVehicleStatusResponse {
  /**
   * <p> Lists information about the state of the vehicle with deployed campaigns. </p>
   * @public
   */
  campaigns?: VehicleStatus[] | undefined;

  /**
   * <p> The token to retrieve the next set of results, or <code>null</code> if there are no more results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The IAM resource that enables Amazon Web Services IoT FleetWise edge agent software to send data to
 *             Amazon Timestream. </p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html">IAM roles</a> in the
 *                 <i>Identity and Access Management User Guide</i>.</p>
 * @public
 */
export interface IamResources {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM resource that allows Amazon Web Services IoT FleetWise to send data to
   *             Amazon Timestream. For example, <code>arn:aws:iam::123456789012:role/SERVICE-ROLE-ARN</code>.
   *         </p>
   * @public
   */
  roleArn: string | undefined;
}

/**
 * @public
 */
export interface ImportSignalCatalogRequest {
  /**
   * <p>The name of the signal catalog to import.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> A brief description of the signal catalog. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The contents of the Vehicle Signal Specification (VSS) configuration. VSS is a precise
   *             language used to describe and model signals in vehicle networks.</p>
   * @public
   */
  vss?: FormattedVss | undefined;

  /**
   * <p>Metadata that can be used to manage the signal catalog.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ImportSignalCatalogResponse {
  /**
   * <p> The name of the imported signal catalog. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the imported signal catalog.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The list of tags assigned to the resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListModelManifestNodesRequest {
  /**
   * <p> The name of the vehicle model to list information about. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A pagination token for the next set of results.</p>
   *          <p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return, between 1 and 100, inclusive.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListModelManifestNodesResponse {
  /**
   * <p> A list of information about nodes. </p>
   * @public
   */
  nodes?: Node[] | undefined;

  /**
   * <p> The token to retrieve the next set of results, or <code>null</code> if there are no more results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListModelManifestsRequest {
  /**
   * <p> The ARN of a signal catalog. If you specify a signal catalog, only the vehicle models
   *             associated with it are returned.</p>
   * @public
   */
  signalCatalogArn?: string | undefined;

  /**
   * <p>A pagination token for the next set of results.</p>
   *          <p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return, between 1 and 100, inclusive.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>When you set the <code>listResponseScope</code> parameter to <code>METADATA_ONLY</code>, the list response includes: model manifest name, Amazon Resource Name (ARN), creation time, and last modification time.</p>
   * @public
   */
  listResponseScope?: ListResponseScope | undefined;
}

/**
 * <p>Information about a vehicle model (model manifest). You can use the  API operation to return this information about
 *             multiple vehicle models.</p>
 * @public
 */
export interface ModelManifestSummary {
  /**
   * <p>The name of the vehicle model.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the vehicle model.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The ARN of the signal catalog associated with the vehicle model.</p>
   * @public
   */
  signalCatalogArn?: string | undefined;

  /**
   * <p>A brief description of the vehicle model.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The state of the vehicle model. If the status is <code>ACTIVE</code>, the vehicle
   *             model can't be edited. If the status is <code>DRAFT</code>, you can edit the vehicle
   *             model.</p>
   * @public
   */
  status?: ManifestStatus | undefined;

  /**
   * <p>The time the vehicle model was created, in seconds since epoch (January 1, 1970 at
   *             midnight UTC time).</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The time the vehicle model was last updated, in seconds since epoch (January 1, 1970
   *             at midnight UTC time).</p>
   * @public
   */
  lastModificationTime: Date | undefined;
}

/**
 * @public
 */
export interface ListModelManifestsResponse {
  /**
   * <p> A list of information about vehicle models.</p>
   * @public
   */
  summaries?: ModelManifestSummary[] | undefined;

  /**
   * <p> The token to retrieve the next set of results, or <code>null</code> if there are no more results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateModelManifestRequest {
  /**
   * <p> The name of the vehicle model to update. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> A brief description of the vehicle model. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> A list of <code>fullyQualifiedName</code> of nodes, which are a general abstraction
   *             of signals, to add to the vehicle model. </p>
   * @public
   */
  nodesToAdd?: string[] | undefined;

  /**
   * <p> A list of <code>fullyQualifiedName</code> of nodes, which are a general abstraction
   *             of signals, to remove from the vehicle model. </p>
   * @public
   */
  nodesToRemove?: string[] | undefined;

  /**
   * <p> The state of the vehicle model. If the status is <code>ACTIVE</code>, the vehicle
   *             model can't be edited. If the status is <code>DRAFT</code>, you can edit the vehicle
   *             model. </p>
   * @public
   */
  status?: ManifestStatus | undefined;
}

/**
 * @public
 */
export interface UpdateModelManifestResponse {
  /**
   * <p> The name of the updated vehicle model. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the updated vehicle model. </p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface PutEncryptionConfigurationRequest {
  /**
   * <p>The ID of the KMS key that is used for encryption.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>The type of encryption. Choose <code>KMS_BASED_ENCRYPTION</code> to use a KMS key or
   *                 <code>FLEETWISE_DEFAULT_ENCRYPTION</code> to use an Amazon Web Services managed key.</p>
   * @public
   */
  encryptionType: EncryptionType | undefined;
}

/**
 * @public
 */
export interface PutEncryptionConfigurationResponse {
  /**
   * <p>The ID of the KMS key that is used for encryption.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>The encryption status.</p>
   * @public
   */
  encryptionStatus: EncryptionStatus | undefined;

  /**
   * <p>The type of encryption. Set to <code>KMS_BASED_ENCRYPTION</code> to use an KMS key that
   *             you own and manage. Set to <code>FLEETWISE_DEFAULT_ENCRYPTION</code> to use an Amazon Web Services managed
   *             key that is owned by the Amazon Web Services IoT FleetWise service account.</p>
   * @public
   */
  encryptionType: EncryptionType | undefined;
}

/**
 * @public
 */
export interface PutLoggingOptionsRequest {
  /**
   * <p>Creates or updates the log delivery option to Amazon CloudWatch Logs.</p>
   * @public
   */
  cloudWatchLogDelivery: CloudWatchLogDeliveryOptions | undefined;
}

/**
 * @public
 */
export interface PutLoggingOptionsResponse {}

/**
 * <p>The registered Amazon Timestream resources that Amazon Web Services IoT FleetWise edge agent software can transfer
 *             your vehicle data to.</p>
 * @public
 */
export interface TimestreamResources {
  /**
   * <p>The name of the registered Amazon Timestream database.</p>
   * @public
   */
  timestreamDatabaseName: string | undefined;

  /**
   * <p>The name of the registered Amazon Timestream database table.</p>
   * @public
   */
  timestreamTableName: string | undefined;
}

/**
 * @public
 */
export interface RegisterAccountRequest {
  /**
   * <p>The registered Amazon Timestream resources that Amazon Web Services IoT FleetWise edge agent software can transfer
   *             your vehicle data to.</p>
   *
   * @deprecated Amazon Timestream metadata is now passed in the CreateCampaign API.
   * @public
   */
  timestreamResources?: TimestreamResources | undefined;

  /**
   * <p>The IAM resource that allows Amazon Web Services IoT FleetWise to send data to Amazon Timestream.</p>
   *
   * @deprecated iamResources is no longer used or needed as input
   * @public
   */
  iamResources?: IamResources | undefined;
}

/**
 * @public
 */
export interface RegisterAccountResponse {
  /**
   * <p> The status of registering your Amazon Web Services account, IAM role, and Timestream resources.
   *         </p>
   * @public
   */
  registerAccountStatus: RegistrationStatus | undefined;

  /**
   * <p>The registered Amazon Timestream resources that Amazon Web Services IoT FleetWise edge agent software can transfer
   *             your vehicle data to.</p>
   * @public
   */
  timestreamResources?: TimestreamResources | undefined;

  /**
   * <p> The registered IAM resource that allows Amazon Web Services IoT FleetWise to send data to Amazon Timestream. </p>
   * @public
   */
  iamResources: IamResources | undefined;

  /**
   * <p> The time the account was registered, in seconds since epoch (January 1, 1970 at
   *             midnight UTC time). </p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p> The time this registration was last updated, in seconds since epoch (January 1, 1970
   *             at midnight UTC time). </p>
   * @public
   */
  lastModificationTime: Date | undefined;
}

/**
 * @public
 */
export interface ListSignalCatalogNodesRequest {
  /**
   * <p> The name of the signal catalog to list information about. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A pagination token for the next set of results.</p>
   *          <p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return, between 1 and 100, inclusive.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The type of node in the signal catalog.</p>
   * @public
   */
  signalNodeType?: SignalNodeType | undefined;
}

/**
 * @public
 */
export interface ListSignalCatalogNodesResponse {
  /**
   * <p> A list of information about nodes. </p>
   * @public
   */
  nodes?: Node[] | undefined;

  /**
   * <p> The token to retrieve the next set of results, or <code>null</code> if there are no more results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSignalCatalogsRequest {
  /**
   * <p>A pagination token for the next set of results.</p>
   *          <p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return, between 1 and 100, inclusive.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Information about a collection of standardized signals, which can be attributes,
 *             branches, sensors, or actuators.</p>
 * @public
 */
export interface SignalCatalogSummary {
  /**
   * <p>The name of the signal catalog.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the signal catalog.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The time the signal catalog was created in seconds since epoch (January 1, 1970 at midnight UTC time). </p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The time the signal catalog was last updated in seconds since epoch (January 1, 1970 at midnight UTC time). </p>
   * @public
   */
  lastModificationTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListSignalCatalogsResponse {
  /**
   * <p> A list of information about each signal catalog. </p>
   * @public
   */
  summaries?: SignalCatalogSummary[] | undefined;

  /**
   * <p> The token to retrieve the next set of results, or <code>null</code> if there are no more results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSignalCatalogRequest {
  /**
   * <p> The name of the signal catalog to update. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> A brief description of the signal catalog to update.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> A list of information about nodes to add to the signal catalog. </p>
   * @public
   */
  nodesToAdd?: Node[] | undefined;

  /**
   * <p> A list of information about nodes to update in the signal catalog. </p>
   * @public
   */
  nodesToUpdate?: Node[] | undefined;

  /**
   * <p> A list of <code>fullyQualifiedName</code> of nodes to remove from the signal catalog.
   *         </p>
   * @public
   */
  nodesToRemove?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateSignalCatalogResponse {
  /**
   * <p> The name of the updated signal catalog. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> The ARN of the updated signal catalog. </p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface ListStateTemplatesRequest {
  /**
   * <p> The token to retrieve the next set of results, or <code>null</code> if there are no more results. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return, between 1 and 100, inclusive.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>When you set the <code>listResponseScope</code> parameter to <code>METADATA_ONLY</code>, the list response includes: state template ID, Amazon Resource Name (ARN), creation time, and last modification time.</p>
   * @public
   */
  listResponseScope?: ListResponseScope | undefined;
}

/**
 * <p>Information about a state template.</p>
 *          <important>
 *             <p>Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html">Amazon Web Services Region and feature availability</a> in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>.</p>
 *          </important>
 * @public
 */
export interface StateTemplateSummary {
  /**
   * <p>The name of the state template.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the state template.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the signal catalog associated with the state template.</p>
   * @public
   */
  signalCatalogArn?: string | undefined;

  /**
   * <p>A brief description of the state template.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The time the state template was created, in seconds since epoch (January 1, 1970 at midnight UTC time).</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The time the state template was last updated, in seconds since epoch (January 1, 1970 at midnight UTC time).</p>
   * @public
   */
  lastModificationTime?: Date | undefined;

  /**
   * <p>The unique ID of the state template.</p>
   * @public
   */
  id?: string | undefined;
}

/**
 * @public
 */
export interface ListStateTemplatesResponse {
  /**
   * <p>A list of information about each state template.</p>
   * @public
   */
  summaries?: StateTemplateSummary[] | undefined;

  /**
   * <p> The token to retrieve the next set of results, or <code>null</code> if there are no more results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateStateTemplateRequest {
  /**
   * <p>The unique ID of the state template.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>A brief description of the state template.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Add signals from which data is collected as part of the state template.</p>
   * @public
   */
  stateTemplatePropertiesToAdd?: string[] | undefined;

  /**
   * <p>Remove signals from which data is collected as part of the state template.</p>
   * @public
   */
  stateTemplatePropertiesToRemove?: string[] | undefined;

  /**
   * <p>A list of vehicle attributes to associate with the payload published on the state template's
   *           MQTT topic. (See <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/process-visualize-data.html#process-last-known-state-vehicle-data">
   *           Processing last known state vehicle data using MQTT messaging</a>). For example, if you add
   *           <code>Vehicle.Attributes.Make</code> and <code>Vehicle.Attributes.Model</code> attributes, Amazon Web Services IoT FleetWise
   *           will enrich the protobuf encoded payload with those attributes in the <code>extraDimensions</code>
   *           field.</p>
   *          <p>Default: An empty array</p>
   * @public
   */
  dataExtraDimensions?: string[] | undefined;

  /**
   * <p>A list of vehicle attributes to associate with user properties of the messages published on the
   *           state template's MQTT topic. (See <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/process-visualize-data.html#process-last-known-state-vehicle-data">
   *           Processing last known state vehicle data using MQTT messaging</a>). For example, if you add
   *           <code>Vehicle.Attributes.Make</code> and <code>Vehicle.Attributes.Model</code> attributes, Amazon Web Services IoT FleetWise
   *           will include these attributes as User Properties with the MQTT message.</p>
   * @public
   */
  metadataExtraDimensions?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateStateTemplateResponse {
  /**
   * <p>The name of the state template.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the state template.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The unique ID of the state template.</p>
   * @public
   */
  id?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>The new or modified tags for the resource.</p>
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
   * <p>The ARN of the resource.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>A list of the keys of the tags to be removed from the resource.</p>
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
   * <p> The Amazon Resource Name (ARN) of a vehicle model (model manifest). You can use this optional
   *             parameter to list only the vehicles created from a certain vehicle model. </p>
   * @public
   */
  modelManifestArn?: string | undefined;

  /**
   * <p>The fully qualified names of the attributes. You can use this optional parameter to list the
   *             vehicles containing all the attributes in the request. For example, <code>attributeNames</code>
   *             could be "<code>Vehicle.Body.Engine.Type, Vehicle.Color</code>" and the corresponding
   *             <code>attributeValues</code> could be "<code>1.3 L R2, Blue</code>" . In this case, the API
   *             will filter vehicles with an attribute name <code>Vehicle.Body.Engine.Type</code> that contains
   *             a value of <code>1.3 L R2</code> AND an attribute name <code>Vehicle.Color</code> that contains
   *             a value of "<code>Blue</code>". A request must contain unique values for the <code>attributeNames</code>
   *             filter and the matching number of <code>attributeValues</code> filters to return the subset
   *             of vehicles that match the attributes filter condition.</p>
   * @public
   */
  attributeNames?: string[] | undefined;

  /**
   * <p>Static information about a vehicle attribute value in string format. You can use this optional
   *             parameter in conjunction with <code>attributeNames</code> to list the vehicles containing all
   *             the <code>attributeValues</code> corresponding to the <code>attributeNames</code> filter. For
   *             example, <code>attributeValues</code> could be "<code>1.3 L R2, Blue</code>" and the corresponding
   *             <code>attributeNames</code> filter could be "<code>Vehicle.Body.Engine.Type, Vehicle.Color</code>".
   *             In this case, the API will filter vehicles with attribute name <code>Vehicle.Body.Engine.Type</code>
   *             that contains a value of <code>1.3 L R2</code> AND an attribute name <code>Vehicle.Color</code> that
   *             contains a value of "<code>Blue</code>". A request must contain unique values for the
   *             <code>attributeNames</code> filter and the matching number of <code>attributeValues</code>
   *             filter to return the subset of vehicles that match the attributes filter condition.</p>
   * @public
   */
  attributeValues?: string[] | undefined;

  /**
   * <p>A pagination token for the next set of results.</p>
   *          <p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return, between 1 and 100, inclusive.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>When you set the <code>listResponseScope</code> parameter to <code>METADATA_ONLY</code>, the list response includes: vehicle name, Amazon Resource Name (ARN), creation time, and last modification time.</p>
   * @public
   */
  listResponseScope?: ListResponseScope | undefined;
}

/**
 * <p>Information about a vehicle.</p>
 *          <p>To return this information about vehicles in your account, you can use the  API operation.</p>
 * @public
 */
export interface VehicleSummary {
  /**
   * <p>The unique ID of the vehicle.</p>
   * @public
   */
  vehicleName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the vehicle.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The ARN of a vehicle model (model manifest) associated with the vehicle.</p>
   * @public
   */
  modelManifestArn: string | undefined;

  /**
   * <p>The ARN of a decoder manifest associated with the vehicle.</p>
   * @public
   */
  decoderManifestArn: string | undefined;

  /**
   * <p>The time the vehicle was created in seconds since epoch (January 1, 1970 at midnight UTC time).</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The time the vehicle was last updated in seconds since epoch (January 1, 1970 at midnight UTC time). </p>
   * @public
   */
  lastModificationTime: Date | undefined;

  /**
   * <p>Static information about a vehicle in a key-value pair. For example:</p>
   *          <p>
   *             <code>"engineType"</code> : <code>"1.3 L R2"</code>
   *          </p>
   * @public
   */
  attributes?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListVehiclesResponse {
  /**
   * <p> A list of vehicles and information about them. </p>
   * @public
   */
  vehicleSummaries?: VehicleSummary[] | undefined;

  /**
   * <p> The token to retrieve the next set of results, or <code>null</code> if there are no more results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateVehicleRequest {
  /**
   * <p>The unique ID of the vehicle to update.</p>
   * @public
   */
  vehicleName: string | undefined;

  /**
   * <p>The ARN of a vehicle model (model manifest) associated with the vehicle.</p>
   * @public
   */
  modelManifestArn?: string | undefined;

  /**
   * <p>The ARN of the decoder manifest associated with this vehicle.</p>
   * @public
   */
  decoderManifestArn?: string | undefined;

  /**
   * <p>Static information about a vehicle in a key-value pair. For example:</p>
   *          <p>
   *             <code>"engineType"</code> : <code>"1.3 L R2"</code>
   *          </p>
   * @public
   */
  attributes?: Record<string, string> | undefined;

  /**
   * <p>The method the specified attributes will update the existing attributes on the
   *             vehicle. Use<code>Overwite</code> to replace the vehicle attributes with the specified
   *             attributes. Or use <code>Merge</code> to combine all attributes.</p>
   *          <p>This is required if attributes are present in the input.</p>
   * @public
   */
  attributeUpdateMode?: UpdateMode | undefined;

  /**
   * <p>Associate state templates with the vehicle.</p>
   * @public
   */
  stateTemplatesToAdd?: StateTemplateAssociation[] | undefined;

  /**
   * <p>Remove state templates from the vehicle.</p>
   * @public
   */
  stateTemplatesToRemove?: string[] | undefined;

  /**
   * <p>Change the <code>stateTemplateUpdateStrategy</code> of state templates already associated with the vehicle.</p>
   * @public
   */
  stateTemplatesToUpdate?: StateTemplateAssociation[] | undefined;
}

/**
 * @public
 */
export interface UpdateVehicleResponse {
  /**
   * <p>The ID of the updated vehicle.</p>
   * @public
   */
  vehicleName?: string | undefined;

  /**
   * <p>The ARN of the updated vehicle.</p>
   * @public
   */
  arn?: string | undefined;
}

/**
 * <p>The structured message for the message signal. It can be defined with either a
 *                 <code>primitiveMessageDefinition</code>,
 *                 <code>structuredMessageListDefinition</code>, or
 *                 <code>structuredMessageDefinition</code> recursively.</p>
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
   * <p>Represents a primitive type node of the complex data structure.</p>
   * @public
   */
  export interface PrimitiveMessageDefinitionMember {
    primitiveMessageDefinition: PrimitiveMessageDefinition;
    structuredMessageListDefinition?: never;
    structuredMessageDefinition?: never;
    $unknown?: never;
  }

  /**
   * <p>Represents a list type node of the complex data structure.</p>
   * @public
   */
  export interface StructuredMessageListDefinitionMember {
    primitiveMessageDefinition?: never;
    structuredMessageListDefinition: StructuredMessageListDefinition;
    structuredMessageDefinition?: never;
    $unknown?: never;
  }

  /**
   * <p>Represents a struct type node of the complex data structure.</p>
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
 * <p>Represents a <code>StructureMessageName</code> to <code>DataType</code> map
 *             element.</p>
 * @public
 */
export interface StructuredMessageFieldNameAndDataTypePair {
  /**
   * <p>The field name of the structured message. It determines how a data value is referenced
   *             in the target language. </p>
   * @public
   */
  fieldName: string | undefined;

  /**
   * <p>The data type. </p>
   * @public
   */
  dataType: StructuredMessage | undefined;
}

/**
 * <p>Represents a list type node of the complex data structure.</p>
 * @public
 */
export interface StructuredMessageListDefinition {
  /**
   * <p>The name of the structured message list definition. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The member type of the structured message list definition.</p>
   * @public
   */
  memberType: StructuredMessage | undefined;

  /**
   * <p>The type of list of the structured message list definition.</p>
   * @public
   */
  listType: StructuredMessageListType | undefined;

  /**
   * <p>The capacity of the structured message list definition when the list type is
   *                 <code>FIXED_CAPACITY</code> or <code>DYNAMIC_BOUNDED_CAPACITY</code>.</p>
   * @public
   */
  capacity?: number | undefined;
}

/**
 * <p>The decoding information for a specific message which support higher order data types.
 *         </p>
 * @public
 */
export interface MessageSignal {
  /**
   * <p>The topic name for the message signal. It corresponds to topics in ROS 2. </p>
   * @public
   */
  topicName: string | undefined;

  /**
   * <p>The structured message for the message signal. It can be defined with either a
   *                 <code>primitiveMessageDefinition</code>,
   *                 <code>structuredMessageListDefinition</code>, or
   *                 <code>structuredMessageDefinition</code> recursively.</p>
   * @public
   */
  structuredMessage: StructuredMessage | undefined;
}

/**
 * <p>Information about a signal decoder.</p>
 * @public
 */
export interface SignalDecoder {
  /**
   * <p>The fully qualified name of a signal decoder as defined in a vehicle model.</p>
   * @public
   */
  fullyQualifiedName: string | undefined;

  /**
   * <p>The network protocol for the vehicle. For example, <code>CAN_SIGNAL</code> specifies a
   *             protocol that defines how data is communicated between electronic control units (ECUs).
   *                 <code>OBD_SIGNAL</code> specifies a protocol that defines how self-diagnostic data
   *             is communicated between ECUs.</p>
   * @public
   */
  type: SignalDecoderType | undefined;

  /**
   * <p>The ID of a network interface that specifies what network protocol a vehicle
   *             follows.</p>
   * @public
   */
  interfaceId: string | undefined;

  /**
   * <p>Information about signal decoder using the Controller Area Network (CAN)
   *             protocol.</p>
   * @public
   */
  canSignal?: CanSignal | undefined;

  /**
   * <p>Information about signal decoder using the on-board diagnostic (OBD) II
   *             protocol.</p>
   * @public
   */
  obdSignal?: ObdSignal | undefined;

  /**
   * <p>The decoding information for a specific message which supports higher order data
   *             types. </p>
   * @public
   */
  messageSignal?: MessageSignal | undefined;

  /**
   * <p>Information about a <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_CustomDecodingSignal.html">custom signal
   *           decoder</a>.</p>
   *          <important>
   *             <p>Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html">Amazon Web Services Region and feature availability</a> in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>.</p>
   *          </important>
   * @public
   */
  customDecodingSignal?: CustomDecodingSignal | undefined;
}

/**
 * @public
 */
export interface CreateDecoderManifestRequest {
  /**
   * <p> The unique name of the decoder manifest to create.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A brief description of the decoder manifest. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the vehicle model (model manifest). </p>
   * @public
   */
  modelManifestArn: string | undefined;

  /**
   * <p> A list of information about signal decoders. </p>
   * @public
   */
  signalDecoders?: SignalDecoder[] | undefined;

  /**
   * <p> A list of information about available network interfaces. </p>
   * @public
   */
  networkInterfaces?: NetworkInterface[] | undefined;

  /**
   * <p>Use default decoders for all unmapped signals in the model. You don't need to provide any detailed decoding information.</p>
   *          <important>
   *             <p>Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html">Amazon Web Services Region and feature availability</a> in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>.</p>
   *          </important>
   * @public
   */
  defaultForUnmappedSignals?: DefaultForUnmappedSignalsType | undefined;

  /**
   * <p>Metadata that can be used to manage the decoder manifest.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListDecoderManifestSignalsResponse {
  /**
   * <p> Information about a list of signals to decode. </p>
   * @public
   */
  signalDecoders?: SignalDecoder[] | undefined;

  /**
   * <p> The token to retrieve the next set of results, or <code>null</code> if there are no more results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDecoderManifestRequest {
  /**
   * <p> The name of the decoder manifest to update.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> A brief description of the decoder manifest to update. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> A list of information about decoding additional signals to add to the decoder
   *             manifest. </p>
   * @public
   */
  signalDecodersToAdd?: SignalDecoder[] | undefined;

  /**
   * <p> A list of updated information about decoding signals to update in the decoder
   *             manifest. </p>
   * @public
   */
  signalDecodersToUpdate?: SignalDecoder[] | undefined;

  /**
   * <p> A list of signal decoders to remove from the decoder manifest. </p>
   * @public
   */
  signalDecodersToRemove?: string[] | undefined;

  /**
   * <p> A list of information about the network interfaces to add to the decoder manifest.
   *         </p>
   * @public
   */
  networkInterfacesToAdd?: NetworkInterface[] | undefined;

  /**
   * <p> A list of information about the network interfaces to update in the decoder manifest.
   *         </p>
   * @public
   */
  networkInterfacesToUpdate?: NetworkInterface[] | undefined;

  /**
   * <p> A list of network interfaces to remove from the decoder manifest.</p>
   * @public
   */
  networkInterfacesToRemove?: string[] | undefined;

  /**
   * <p> The state of the decoder manifest. If the status is <code>ACTIVE</code>, the decoder
   *             manifest can't be edited. If the status is <code>DRAFT</code>, you can edit the decoder
   *             manifest. </p>
   * @public
   */
  status?: ManifestStatus | undefined;

  /**
   * <p>Use default decoders for all unmapped signals in the model. You don't need to provide any detailed decoding information.</p>
   *          <important>
   *             <p>Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html">Amazon Web Services Region and feature availability</a> in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>.</p>
   *          </important>
   * @public
   */
  defaultForUnmappedSignals?: DefaultForUnmappedSignalsType | undefined;
}
