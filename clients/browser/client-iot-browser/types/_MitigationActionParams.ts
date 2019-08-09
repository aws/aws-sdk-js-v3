import {
  _UpdateDeviceCertificateParams,
  _UnmarshalledUpdateDeviceCertificateParams
} from "./_UpdateDeviceCertificateParams";
import {
  _UpdateCACertificateParams,
  _UnmarshalledUpdateCACertificateParams
} from "./_UpdateCACertificateParams";
import {
  _AddThingsToThingGroupParams,
  _UnmarshalledAddThingsToThingGroupParams
} from "./_AddThingsToThingGroupParams";
import {
  _ReplaceDefaultPolicyVersionParams,
  _UnmarshalledReplaceDefaultPolicyVersionParams
} from "./_ReplaceDefaultPolicyVersionParams";
import {
  _EnableIoTLoggingParams,
  _UnmarshalledEnableIoTLoggingParams
} from "./_EnableIoTLoggingParams";
import {
  _PublishFindingToSnsParams,
  _UnmarshalledPublishFindingToSnsParams
} from "./_PublishFindingToSnsParams";

/**
 * <p>The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action).</p>
 */
export interface _MitigationActionParams {
  /**
   * <p>Parameters to define a mitigation action that changes the state of the device certificate to inactive.</p>
   */
  updateDeviceCertificateParams?: _UpdateDeviceCertificateParams;

  /**
   * <p>Parameters to define a mitigation action that changes the state of the CA certificate to inactive.</p>
   */
  updateCACertificateParams?: _UpdateCACertificateParams;

  /**
   * <p>Parameters to define a mitigation action that moves devices associated with a certificate to one or more specified thing groups, typically for quarantine.</p>
   */
  addThingsToThingGroupParams?: _AddThingsToThingGroupParams;

  /**
   * <p>Parameters to define a mitigation action that adds a blank policy to restrict permissions.</p>
   */
  replaceDefaultPolicyVersionParams?: _ReplaceDefaultPolicyVersionParams;

  /**
   * <p>Parameters to define a mitigation action that enables AWS IoT logging at a specified level of detail.</p>
   */
  enableIoTLoggingParams?: _EnableIoTLoggingParams;

  /**
   * <p>Parameters to define a mitigation action that publishes findings to Amazon SNS. You can implement your own custom actions in response to the Amazon SNS messages.</p>
   */
  publishFindingToSnsParams?: _PublishFindingToSnsParams;
}

export interface _UnmarshalledMitigationActionParams
  extends _MitigationActionParams {
  /**
   * <p>Parameters to define a mitigation action that changes the state of the device certificate to inactive.</p>
   */
  updateDeviceCertificateParams?: _UnmarshalledUpdateDeviceCertificateParams;

  /**
   * <p>Parameters to define a mitigation action that changes the state of the CA certificate to inactive.</p>
   */
  updateCACertificateParams?: _UnmarshalledUpdateCACertificateParams;

  /**
   * <p>Parameters to define a mitigation action that moves devices associated with a certificate to one or more specified thing groups, typically for quarantine.</p>
   */
  addThingsToThingGroupParams?: _UnmarshalledAddThingsToThingGroupParams;

  /**
   * <p>Parameters to define a mitigation action that adds a blank policy to restrict permissions.</p>
   */
  replaceDefaultPolicyVersionParams?: _UnmarshalledReplaceDefaultPolicyVersionParams;

  /**
   * <p>Parameters to define a mitigation action that enables AWS IoT logging at a specified level of detail.</p>
   */
  enableIoTLoggingParams?: _UnmarshalledEnableIoTLoggingParams;

  /**
   * <p>Parameters to define a mitigation action that publishes findings to Amazon SNS. You can implement your own custom actions in response to the Amazon SNS messages.</p>
   */
  publishFindingToSnsParams?: _UnmarshalledPublishFindingToSnsParams;
}
