export const _AE = "AuthException";
export const _AZ = "AvailabilityZone";
export const _ECINFE = "EC2InstanceNotFoundException";
export const _ECISIE = "EC2InstanceStateInvalidException";
export const _ECITIE = "EC2InstanceTypeInvalidException";
export const _ECIUE = "EC2InstanceUnavailableException";
export const _IAE = "InvalidArgsException";
export const _II = "InstanceId";
export const _IOSU = "InstanceOSUser";
export const _M = "Message";
export const _RI = "RequestId";
export const _S = "Success";
export const _SCADE = "SerialConsoleAccessDisabledException";
export const _SCSLEE = "SerialConsoleSessionLimitExceededException";
export const _SCSUE = "SerialConsoleSessionUnavailableException";
export const _SCSUEe = "SerialConsoleSessionUnsupportedException";
export const _SE = "ServiceException";
export const _SP = "SerialPort";
export const _SSCSSHPK = "SendSerialConsoleSSHPublicKey";
export const _SSCSSHPKR = "SendSerialConsoleSSHPublicKeyRequest";
export const _SSCSSHPKRe = "SendSerialConsoleSSHPublicKeyResponse";
export const _SSHPK = "SSHPublicKey";
export const _SSSHPK = "SendSSHPublicKey";
export const _SSSHPKR = "SendSSHPublicKeyRequest";
export const _SSSHPKRe = "SendSSHPublicKeyResponse";
export const _TE = "ThrottlingException";
export const _aQE = "awsQueryError";
export const _c = "client";
export const _e = "error";
export const _hE = "httpError";
export const _s = "server";
export const n0 = "com.amazonaws.ec2instanceconnect";

// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import { EC2InstanceConnectServiceException as __EC2InstanceConnectServiceException } from "../models/EC2InstanceConnectServiceException";

/* eslint no-var: 0 */

export var EC2InstanceConnectServiceException = error(
  "smithy.ts.sdk.synthetic.com.amazonaws.ec2instanceconnect",
  "EC2InstanceConnectServiceException",
  0,
  [],
  [],
  __EC2InstanceConnectServiceException
);
