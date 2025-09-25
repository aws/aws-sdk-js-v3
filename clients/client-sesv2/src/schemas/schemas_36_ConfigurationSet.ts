// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAp,
  _CCSED,
  _CCSEDR,
  _CCSEDRr,
  _CSN,
  _CWD,
  _CWDC,
  _CWDCl,
  _DCi,
  _DDV,
  _DN,
  _DSAe,
  _DVS,
  _EBA,
  _EBD,
  _EDD,
  _EDN,
  _EDv,
  _EDven,
  _En,
  _GCSED,
  _GCSEDR,
  _GCSEDRe,
  _h,
  _IRA,
  _KFD,
  _MET,
  _Na,
  _PD,
  _SDn,
  _TAop,
  _UCSED,
  _UCSEDR,
  _UCSEDRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CloudWatchDestination = struct(n0, _CWD, 0, [_DCi], [() => CloudWatchDimensionConfigurations]);
export var CloudWatchDimensionConfiguration = struct(n0, _CWDC, 0, [_DN, _DVS, _DDV], [0, 0, 0]);
export var CreateConfigurationSetEventDestinationRequest = struct(
  n0,
  _CCSEDR,
  0,
  [_CSN, _EDN, _EDv],
  [[0, 1], 0, () => EventDestinationDefinition]
);
export var CreateConfigurationSetEventDestinationResponse = struct(n0, _CCSEDRr, 0, [], []);
export var EventBridgeDestination = struct(n0, _EBD, 0, [_EBA], [0]);
export var EventDestination = struct(
  n0,
  _EDv,
  0,
  [_Na, _En, _MET, _KFD, _CWD, _SDn, _EBD, _PD],
  [
    0,
    2,
    64 | 0,
    () => KinesisFirehoseDestination,
    () => CloudWatchDestination,
    () => SnsDestination,
    () => EventBridgeDestination,
    () => PinpointDestination,
  ]
);
export var EventDestinationDefinition = struct(
  n0,
  _EDD,
  0,
  [_En, _MET, _KFD, _CWD, _SDn, _EBD, _PD],
  [
    2,
    64 | 0,
    () => KinesisFirehoseDestination,
    () => CloudWatchDestination,
    () => SnsDestination,
    () => EventBridgeDestination,
    () => PinpointDestination,
  ]
);
export var GetConfigurationSetEventDestinationsRequest = struct(n0, _GCSEDR, 0, [_CSN], [[0, 1]]);
export var GetConfigurationSetEventDestinationsResponse = struct(n0, _GCSEDRe, 0, [_EDven], [() => EventDestinations]);
export var KinesisFirehoseDestination = struct(n0, _KFD, 0, [_IRA, _DSAe], [0, 0]);
export var PinpointDestination = struct(n0, _PD, 0, [_AAp], [0]);
export var SnsDestination = struct(n0, _SDn, 0, [_TAop], [0]);
export var UpdateConfigurationSetEventDestinationRequest = struct(
  n0,
  _UCSEDR,
  0,
  [_CSN, _EDN, _EDv],
  [[0, 1], [0, 1], () => EventDestinationDefinition]
);
export var UpdateConfigurationSetEventDestinationResponse = struct(n0, _UCSEDRp, 0, [], []);
export var CloudWatchDimensionConfigurations = list(n0, _CWDCl, 0, () => CloudWatchDimensionConfiguration);
export var EventDestinations = list(n0, _EDven, 0, () => EventDestination);
export var EventTypes = 64 | 0;

export var CreateConfigurationSetEventDestination = op(
  n0,
  _CCSED,
  {
    [_h]: ["POST", "/v2/email/configuration-sets/{ConfigurationSetName}/event-destinations", 200],
  },
  () => CreateConfigurationSetEventDestinationRequest,
  () => CreateConfigurationSetEventDestinationResponse
);
export var GetConfigurationSetEventDestinations = op(
  n0,
  _GCSED,
  {
    [_h]: ["GET", "/v2/email/configuration-sets/{ConfigurationSetName}/event-destinations", 200],
  },
  () => GetConfigurationSetEventDestinationsRequest,
  () => GetConfigurationSetEventDestinationsResponse
);
export var UpdateConfigurationSetEventDestination = op(
  n0,
  _UCSED,
  {
    [_h]: ["PUT", "/v2/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}", 200],
  },
  () => UpdateConfigurationSetEventDestinationRequest,
  () => UpdateConfigurationSetEventDestinationResponse
);
