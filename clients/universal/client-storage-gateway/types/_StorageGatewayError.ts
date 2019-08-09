/**
 * <p>Provides additional information about an error that was returned by the service as an or. See the <code>errorCode</code> and <code>errorDetails</code> members for more information about the error.</p>
 */
export interface _StorageGatewayError {
  /**
   * <p>Additional information about the error.</p>
   */
  errorCode?:
    | "ActivationKeyExpired"
    | "ActivationKeyInvalid"
    | "ActivationKeyNotFound"
    | "GatewayInternalError"
    | "GatewayNotConnected"
    | "GatewayNotFound"
    | "GatewayProxyNetworkConnectionBusy"
    | "AuthenticationFailure"
    | "BandwidthThrottleScheduleNotFound"
    | "Blocked"
    | "CannotExportSnapshot"
    | "ChapCredentialNotFound"
    | "DiskAlreadyAllocated"
    | "DiskDoesNotExist"
    | "DiskSizeGreaterThanVolumeMaxSize"
    | "DiskSizeLessThanVolumeSize"
    | "DiskSizeNotGigAligned"
    | "DuplicateCertificateInfo"
    | "DuplicateSchedule"
    | "EndpointNotFound"
    | "IAMNotSupported"
    | "InitiatorInvalid"
    | "InitiatorNotFound"
    | "InternalError"
    | "InvalidGateway"
    | "InvalidEndpoint"
    | "InvalidParameters"
    | "InvalidSchedule"
    | "LocalStorageLimitExceeded"
    | "LunAlreadyAllocated "
    | "LunInvalid"
    | "MaximumContentLengthExceeded"
    | "MaximumTapeCartridgeCountExceeded"
    | "MaximumVolumeCountExceeded"
    | "NetworkConfigurationChanged"
    | "NoDisksAvailable"
    | "NotImplemented"
    | "NotSupported"
    | "OperationAborted"
    | "OutdatedGateway"
    | "ParametersNotImplemented"
    | "RegionInvalid"
    | "RequestTimeout"
    | "ServiceUnavailable"
    | "SnapshotDeleted"
    | "SnapshotIdInvalid"
    | "SnapshotInProgress"
    | "SnapshotNotFound"
    | "SnapshotScheduleNotFound"
    | "StagingAreaFull"
    | "StorageFailure"
    | "TapeCartridgeNotFound"
    | "TargetAlreadyExists"
    | "TargetInvalid"
    | "TargetNotFound"
    | "UnauthorizedOperation"
    | "VolumeAlreadyExists"
    | "VolumeIdInvalid"
    | "VolumeInUse"
    | "VolumeNotFound"
    | "VolumeNotReady"
    | string;

  /**
   * <p>Human-readable text that provides detail about the error that occurred.</p>
   */
  errorDetails?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledStorageGatewayError extends _StorageGatewayError {
  /**
   * <p>Human-readable text that provides detail about the error that occurred.</p>
   */
  errorDetails?: { [key: string]: string };
}
