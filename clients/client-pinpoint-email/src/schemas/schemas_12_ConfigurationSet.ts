// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AA,
  _CSN,
  _CWD,
  _CWDC,
  _CWDCl,
  _DC,
  _DDV,
  _DN,
  _DSA,
  _DVS,
  _ED,
  _EDD,
  _EDN,
  _EDv,
  _En,
  _GCSED,
  _GCSEDR,
  _GCSEDRe,
  _h,
  _IRA,
  _KFD,
  _MET,
  _N,
  _PD,
  _SDn,
  _TAo,
  _UCSED,
  _UCSEDR,
  _UCSEDRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CloudWatchDestination = struct(n0, _CWD, 0, [_DC], [() => CloudWatchDimensionConfigurations]);
export var CloudWatchDimensionConfiguration = struct(n0, _CWDC, 0, [_DN, _DVS, _DDV], [0, 0, 0]);
export var EventDestination = struct(
  n0,
  _ED,
  0,
  [_N, _En, _MET, _KFD, _CWD, _SDn, _PD],
  [
    0,
    2,
    64 | 0,
    () => KinesisFirehoseDestination,
    () => CloudWatchDestination,
    () => SnsDestination,
    () => PinpointDestination,
  ]
);
export var EventDestinationDefinition = struct(
  n0,
  _EDD,
  0,
  [_En, _MET, _KFD, _CWD, _SDn, _PD],
  [
    2,
    64 | 0,
    () => KinesisFirehoseDestination,
    () => CloudWatchDestination,
    () => SnsDestination,
    () => PinpointDestination,
  ]
);
export var GetConfigurationSetEventDestinationsRequest = struct(n0, _GCSEDR, 0, [_CSN], [[0, 1]]);
export var GetConfigurationSetEventDestinationsResponse = struct(n0, _GCSEDRe, 0, [_EDv], [() => EventDestinations]);
export var KinesisFirehoseDestination = struct(n0, _KFD, 0, [_IRA, _DSA], [0, 0]);
export var PinpointDestination = struct(n0, _PD, 0, [_AA], [0]);
export var SnsDestination = struct(n0, _SDn, 0, [_TAo], [0]);
export var UpdateConfigurationSetEventDestinationRequest = struct(
  n0,
  _UCSEDR,
  0,
  [_CSN, _EDN, _ED],
  [[0, 1], [0, 1], () => EventDestinationDefinition]
);
export var UpdateConfigurationSetEventDestinationResponse = struct(n0, _UCSEDRp, 0, [], []);
export var CloudWatchDimensionConfigurations = list(n0, _CWDCl, 0, () => CloudWatchDimensionConfiguration);
export var EventDestinations = list(n0, _EDv, 0, () => EventDestination);
export var EventTypes = 64 | 0;

export var GetConfigurationSetEventDestinations = op(
  n0,
  _GCSED,
  {
    [_h]: ["GET", "/v1/email/configuration-sets/{ConfigurationSetName}/event-destinations", 200],
  },
  () => GetConfigurationSetEventDestinationsRequest,
  () => GetConfigurationSetEventDestinationsResponse
);
export var UpdateConfigurationSetEventDestination = op(
  n0,
  _UCSED,
  {
    [_h]: ["PUT", "/v1/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}", 200],
  },
  () => UpdateConfigurationSetEventDestinationRequest,
  () => UpdateConfigurationSetEventDestinationResponse
);
