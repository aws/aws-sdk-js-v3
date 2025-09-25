// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  EventDestinationDoesNotExistException as __EventDestinationDoesNotExistException,
  InvalidCloudWatchDestinationException as __InvalidCloudWatchDestinationException,
  InvalidFirehoseDestinationException as __InvalidFirehoseDestinationException,
  InvalidSNSDestinationException as __InvalidSNSDestinationException,
} from "../models/index";
import {
  _aQE,
  _c,
  _CSN,
  _CWD,
  _CWDC,
  _CWDCl,
  _DC,
  _DCSED,
  _DCSEDR,
  _DCSEDRe,
  _DDV,
  _DN,
  _DSARN,
  _DVS,
  _e,
  _ED,
  _EDDNEE,
  _EDN,
  _En,
  _hE,
  _IAMRARN,
  _ICWDE,
  _IFDE,
  _ISNSDE,
  _KFD,
  _m,
  _MET,
  _N,
  _SNSD,
  _TARN,
  _UCSED,
  _UCSEDR,
  _UCSEDRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CloudWatchDestination = struct(n0, _CWD, 0, [_DC], [() => CloudWatchDimensionConfigurations]);
export var CloudWatchDimensionConfiguration = struct(n0, _CWDC, 0, [_DN, _DVS, _DDV], [0, 0, 0]);
export var DeleteConfigurationSetEventDestinationRequest = struct(n0, _DCSEDR, 0, [_CSN, _EDN], [0, 0]);
export var DeleteConfigurationSetEventDestinationResponse = struct(n0, _DCSEDRe, 0, [], []);
export var EventDestination = struct(
  n0,
  _ED,
  0,
  [_N, _En, _MET, _KFD, _CWD, _SNSD],
  [0, 2, 64 | 0, () => KinesisFirehoseDestination, () => CloudWatchDestination, () => SNSDestination]
);
export var EventDestinationDoesNotExistException = error(
  n0,
  _EDDNEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`EventDestinationDoesNotExist`, 400],
  },
  [_CSN, _EDN, _m],
  [0, 0, 0],

  __EventDestinationDoesNotExistException
);
export var InvalidCloudWatchDestinationException = error(
  n0,
  _ICWDE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidCloudWatchDestination`, 400],
  },
  [_CSN, _EDN, _m],
  [0, 0, 0],

  __InvalidCloudWatchDestinationException
);
export var InvalidFirehoseDestinationException = error(
  n0,
  _IFDE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidFirehoseDestination`, 400],
  },
  [_CSN, _EDN, _m],
  [0, 0, 0],

  __InvalidFirehoseDestinationException
);
export var InvalidSNSDestinationException = error(
  n0,
  _ISNSDE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidSNSDestination`, 400],
  },
  [_CSN, _EDN, _m],
  [0, 0, 0],

  __InvalidSNSDestinationException
);
export var KinesisFirehoseDestination = struct(n0, _KFD, 0, [_IAMRARN, _DSARN], [0, 0]);
export var SNSDestination = struct(n0, _SNSD, 0, [_TARN], [0]);
export var UpdateConfigurationSetEventDestinationRequest = struct(
  n0,
  _UCSEDR,
  0,
  [_CSN, _ED],
  [0, () => EventDestination]
);
export var UpdateConfigurationSetEventDestinationResponse = struct(n0, _UCSEDRp, 0, [], []);
export var CloudWatchDimensionConfigurations = list(n0, _CWDCl, 0, () => CloudWatchDimensionConfiguration);
export var EventTypes = 64 | 0;

export var DeleteConfigurationSetEventDestination = op(
  n0,
  _DCSED,
  0,
  () => DeleteConfigurationSetEventDestinationRequest,
  () => DeleteConfigurationSetEventDestinationResponse
);
export var UpdateConfigurationSetEventDestination = op(
  n0,
  _UCSED,
  0,
  () => UpdateConfigurationSetEventDestinationRequest,
  () => UpdateConfigurationSetEventDestinationResponse
);
