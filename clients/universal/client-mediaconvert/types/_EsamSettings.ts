import {
  _EsamManifestConfirmConditionNotification,
  _UnmarshalledEsamManifestConfirmConditionNotification
} from "./_EsamManifestConfirmConditionNotification";
import {
  _EsamSignalProcessingNotification,
  _UnmarshalledEsamSignalProcessingNotification
} from "./_EsamSignalProcessingNotification";

/**
 * Settings for Event Signaling And Messaging (ESAM). If you don't do ad insertion, you can ignore these settings.
 */
export interface _EsamSettings {
  /**
   * Specifies an ESAM ManifestConfirmConditionNotification XML as per OC-SP-ESAM-API-I03-131025. The transcoder uses the manifest conditioning instructions that you provide in the setting MCC XML (mccXml).
   */
  ManifestConfirmConditionNotification?: _EsamManifestConfirmConditionNotification;

  /**
   * Specifies the stream distance, in milliseconds, between the SCTE 35 messages that the transcoder places and the splice points that they refer to. If the time between the start of the asset and the SCTE-35 message is less than this value, then the transcoder places the SCTE-35 marker at the beginning of the stream.
   */
  ResponseSignalPreroll?: number;

  /**
   * Specifies an ESAM SignalProcessingNotification XML as per OC-SP-ESAM-API-I03-131025. The transcoder uses the signal processing instructions that you provide in the setting SCC XML (sccXml).
   */
  SignalProcessingNotification?: _EsamSignalProcessingNotification;
}

export interface _UnmarshalledEsamSettings extends _EsamSettings {
  /**
   * Specifies an ESAM ManifestConfirmConditionNotification XML as per OC-SP-ESAM-API-I03-131025. The transcoder uses the manifest conditioning instructions that you provide in the setting MCC XML (mccXml).
   */
  ManifestConfirmConditionNotification?: _UnmarshalledEsamManifestConfirmConditionNotification;

  /**
   * Specifies an ESAM SignalProcessingNotification XML as per OC-SP-ESAM-API-I03-131025. The transcoder uses the signal processing instructions that you provide in the setting SCC XML (sccXml).
   */
  SignalProcessingNotification?: _UnmarshalledEsamSignalProcessingNotification;
}
