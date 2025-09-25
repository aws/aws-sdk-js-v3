// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  ConflictException as __ConflictException,
  InvalidJobStateException as __InvalidJobStateException,
  ReturnShippingLabelAlreadyExistsException as __ReturnShippingLabelAlreadyExistsException,
} from "../models/index";
import {
  _AI,
  _c,
  _CC,
  _CCR,
  _CCRa,
  _CE,
  _CI,
  _CJ,
  _CJR,
  _CJRa,
  _CR,
  _CRSL,
  _CRSLR,
  _CRSLRr,
  _D,
  _DRSL,
  _DRSLR,
  _DRSLRe,
  _e,
  _ED,
  _FAI,
  _GJM,
  _GJMR,
  _GJMRe,
  _GJUC,
  _GJUCR,
  _GJUCRe,
  _GSUe,
  _GSURet,
  _GSUReto,
  _IJSE,
  _JI,
  _M,
  _MURI,
  _No,
  _ODSC,
  _PD,
  _R,
  _RARN,
  _RSLAEE,
  _RSLURI,
  _SCP,
  _SO,
  _SSh,
  _Sta,
  _UC,
  _UCp,
  _UCR,
  _UCRp,
  _UJ,
  _UJR,
  _UJRp,
  _UJSS,
  _UJSSR,
  _UJSSRp,
  _UURI,
  n0,
} from "./schemas_0";
import { JobResource, Notification, OnDeviceServiceConfiguration } from "./schemas_1_Describe";
import { PickupDetails } from "./schemas_2_List";

/* eslint no-var: 0 */

export var CancelClusterRequest = struct(n0, _CCR, 0, [_CI], [0]);
export var CancelClusterResult = struct(n0, _CCRa, 0, [], []);
export var CancelJobRequest = struct(n0, _CJR, 0, [_JI], [0]);
export var CancelJobResult = struct(n0, _CJRa, 0, [], []);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
  },
  [_CR, _M],
  [0, 0],

  __ConflictException
);
export var CreateReturnShippingLabelRequest = struct(n0, _CRSLR, 0, [_JI, _SO], [0, 0]);
export var CreateReturnShippingLabelResult = struct(n0, _CRSLRr, 0, [_Sta], [0]);
export var DescribeReturnShippingLabelRequest = struct(n0, _DRSLR, 0, [_JI], [0]);
export var DescribeReturnShippingLabelResult = struct(n0, _DRSLRe, 0, [_Sta, _ED, _RSLURI], [0, 4, 0]);
export var GetJobManifestRequest = struct(n0, _GJMR, 0, [_JI], [0]);
export var GetJobManifestResult = struct(n0, _GJMRe, 0, [_MURI], [0]);
export var GetJobUnlockCodeRequest = struct(n0, _GJUCR, 0, [_JI], [0]);
export var GetJobUnlockCodeResult = struct(n0, _GJUCRe, 0, [_UC], [0]);
export var GetSoftwareUpdatesRequest = struct(n0, _GSURet, 0, [_JI], [0]);
export var GetSoftwareUpdatesResult = struct(n0, _GSUReto, 0, [_UURI], [0]);
export var InvalidJobStateException = error(
  n0,
  _IJSE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __InvalidJobStateException
);
export var ReturnShippingLabelAlreadyExistsException = error(
  n0,
  _RSLAEE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __ReturnShippingLabelAlreadyExistsException
);
export var UpdateClusterRequest = struct(
  n0,
  _UCR,
  0,
  [_CI, _RARN, _D, _R, _ODSC, _AI, _SO, _No, _FAI],
  [0, 0, 0, () => JobResource, () => OnDeviceServiceConfiguration, 0, 0, () => Notification, 0]
);
export var UpdateClusterResult = struct(n0, _UCRp, 0, [], []);
export var UpdateJobRequest = struct(
  n0,
  _UJR,
  0,
  [_JI, _RARN, _No, _R, _ODSC, _AI, _SO, _D, _SCP, _FAI, _PD],
  [
    0,
    0,
    () => Notification,
    () => JobResource,
    () => OnDeviceServiceConfiguration,
    0,
    0,
    0,
    0,
    0,
    [() => PickupDetails, 0],
  ]
);
export var UpdateJobResult = struct(n0, _UJRp, 0, [], []);
export var UpdateJobShipmentStateRequest = struct(n0, _UJSSR, 0, [_JI, _SSh], [0, 0]);
export var UpdateJobShipmentStateResult = struct(n0, _UJSSRp, 0, [], []);
export var CancelCluster = op(
  n0,
  _CC,
  0,
  () => CancelClusterRequest,
  () => CancelClusterResult
);
export var CancelJob = op(
  n0,
  _CJ,
  0,
  () => CancelJobRequest,
  () => CancelJobResult
);
export var CreateReturnShippingLabel = op(
  n0,
  _CRSL,
  0,
  () => CreateReturnShippingLabelRequest,
  () => CreateReturnShippingLabelResult
);
export var DescribeReturnShippingLabel = op(
  n0,
  _DRSL,
  0,
  () => DescribeReturnShippingLabelRequest,
  () => DescribeReturnShippingLabelResult
);
export var GetJobManifest = op(
  n0,
  _GJM,
  0,
  () => GetJobManifestRequest,
  () => GetJobManifestResult
);
export var GetJobUnlockCode = op(
  n0,
  _GJUC,
  0,
  () => GetJobUnlockCodeRequest,
  () => GetJobUnlockCodeResult
);
export var GetSoftwareUpdates = op(
  n0,
  _GSUe,
  0,
  () => GetSoftwareUpdatesRequest,
  () => GetSoftwareUpdatesResult
);
export var UpdateCluster = op(
  n0,
  _UCp,
  0,
  () => UpdateClusterRequest,
  () => UpdateClusterResult
);
export var UpdateJob = op(
  n0,
  _UJ,
  0,
  () => UpdateJobRequest,
  () => UpdateJobResult
);
export var UpdateJobShipmentState = op(
  n0,
  _UJSS,
  0,
  () => UpdateJobShipmentStateRequest,
  () => UpdateJobShipmentStateResult
);
