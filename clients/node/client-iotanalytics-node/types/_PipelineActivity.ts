import {
  _ChannelActivity,
  _UnmarshalledChannelActivity
} from "./_ChannelActivity";
import {
  _LambdaActivity,
  _UnmarshalledLambdaActivity
} from "./_LambdaActivity";
import {
  _DatastoreActivity,
  _UnmarshalledDatastoreActivity
} from "./_DatastoreActivity";
import {
  _AddAttributesActivity,
  _UnmarshalledAddAttributesActivity
} from "./_AddAttributesActivity";
import {
  _RemoveAttributesActivity,
  _UnmarshalledRemoveAttributesActivity
} from "./_RemoveAttributesActivity";
import {
  _SelectAttributesActivity,
  _UnmarshalledSelectAttributesActivity
} from "./_SelectAttributesActivity";
import {
  _FilterActivity,
  _UnmarshalledFilterActivity
} from "./_FilterActivity";
import { _MathActivity, _UnmarshalledMathActivity } from "./_MathActivity";
import {
  _DeviceRegistryEnrichActivity,
  _UnmarshalledDeviceRegistryEnrichActivity
} from "./_DeviceRegistryEnrichActivity";
import {
  _DeviceShadowEnrichActivity,
  _UnmarshalledDeviceShadowEnrichActivity
} from "./_DeviceShadowEnrichActivity";

/**
 * <p>An activity that performs a transformation on a message.</p>
 */
export interface _PipelineActivity {
  /**
   * <p>Determines the source of the messages to be processed.</p>
   */
  channel?: _ChannelActivity;

  /**
   * <p>Runs a Lambda function to modify the message.</p>
   */
  lambda?: _LambdaActivity;

  /**
   * <p>Specifies where to store the processed message data.</p>
   */
  datastore?: _DatastoreActivity;

  /**
   * <p>Adds other attributes based on existing attributes in the message.</p>
   */
  addAttributes?: _AddAttributesActivity;

  /**
   * <p>Removes attributes from a message.</p>
   */
  removeAttributes?: _RemoveAttributesActivity;

  /**
   * <p>Creates a new message using only the specified attributes from the original message. </p>
   */
  selectAttributes?: _SelectAttributesActivity;

  /**
   * <p>Filters a message based on its attributes.</p>
   */
  filter?: _FilterActivity;

  /**
   * <p>Computes an arithmetic expression using the message's attributes and adds it to the message.</p>
   */
  math?: _MathActivity;

  /**
   * <p>Adds data from the AWS IoT device registry to your message.</p>
   */
  deviceRegistryEnrich?: _DeviceRegistryEnrichActivity;

  /**
   * <p>Adds information from the AWS IoT Device Shadows service to a message.</p>
   */
  deviceShadowEnrich?: _DeviceShadowEnrichActivity;
}

export interface _UnmarshalledPipelineActivity extends _PipelineActivity {
  /**
   * <p>Determines the source of the messages to be processed.</p>
   */
  channel?: _UnmarshalledChannelActivity;

  /**
   * <p>Runs a Lambda function to modify the message.</p>
   */
  lambda?: _UnmarshalledLambdaActivity;

  /**
   * <p>Specifies where to store the processed message data.</p>
   */
  datastore?: _UnmarshalledDatastoreActivity;

  /**
   * <p>Adds other attributes based on existing attributes in the message.</p>
   */
  addAttributes?: _UnmarshalledAddAttributesActivity;

  /**
   * <p>Removes attributes from a message.</p>
   */
  removeAttributes?: _UnmarshalledRemoveAttributesActivity;

  /**
   * <p>Creates a new message using only the specified attributes from the original message. </p>
   */
  selectAttributes?: _UnmarshalledSelectAttributesActivity;

  /**
   * <p>Filters a message based on its attributes.</p>
   */
  filter?: _UnmarshalledFilterActivity;

  /**
   * <p>Computes an arithmetic expression using the message's attributes and adds it to the message.</p>
   */
  math?: _UnmarshalledMathActivity;

  /**
   * <p>Adds data from the AWS IoT device registry to your message.</p>
   */
  deviceRegistryEnrich?: _UnmarshalledDeviceRegistryEnrichActivity;

  /**
   * <p>Adds information from the AWS IoT Device Shadows service to a message.</p>
   */
  deviceShadowEnrich?: _UnmarshalledDeviceShadowEnrichActivity;
}
