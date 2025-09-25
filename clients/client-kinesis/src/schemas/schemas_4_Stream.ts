// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  KMSAccessDeniedException as __KMSAccessDeniedException,
  KMSDisabledException as __KMSDisabledException,
  KMSInvalidStateException as __KMSInvalidStateException,
  KMSNotFoundException as __KMSNotFoundException,
  KMSOptInRequired as __KMSOptInRequired,
  KMSThrottlingException as __KMSThrottlingException,
} from "../models/index";
import {
  _c,
  _e,
  _ET,
  _KI,
  _KMSADE,
  _KMSDE,
  _KMSISE,
  _KMSNFE,
  _KMSOIR,
  _KMSTE,
  _m,
  _SARN,
  _SN,
  _SSE,
  _SSEI,
  _SSEIt,
  _SSEt,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var KMSAccessDeniedException = error(
  n0,
  _KMSADE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __KMSAccessDeniedException
);
export var KMSDisabledException = error(
  n0,
  _KMSDE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __KMSDisabledException
);
export var KMSInvalidStateException = error(
  n0,
  _KMSISE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __KMSInvalidStateException
);
export var KMSNotFoundException = error(
  n0,
  _KMSNFE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __KMSNotFoundException
);
export var KMSOptInRequired = error(
  n0,
  _KMSOIR,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __KMSOptInRequired
);
export var KMSThrottlingException = error(
  n0,
  _KMSTE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __KMSThrottlingException
);
export var StartStreamEncryptionInput = struct(n0, _SSEI, 0, [_SN, _ET, _KI, _SARN], [0, 0, 0, 0]);
export var StopStreamEncryptionInput = struct(n0, _SSEIt, 0, [_SN, _ET, _KI, _SARN], [0, 0, 0, 0]);
export var StartStreamEncryption = op(
  n0,
  _SSE,
  0,
  () => StartStreamEncryptionInput,
  () => Unit
);
export var StopStreamEncryption = op(
  n0,
  _SSEt,
  0,
  () => StopStreamEncryptionInput,
  () => Unit
);
