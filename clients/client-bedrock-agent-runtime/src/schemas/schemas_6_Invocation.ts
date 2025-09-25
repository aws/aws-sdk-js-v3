// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _BSCB,
  _BSCBe,
  _by,
  _cA,
  _cB,
  _CIR,
  _CIr,
  _CIRr,
  _CS,
  _CSR,
  _CSRr,
  _d,
  _eKA,
  _ESn,
  _ESR,
  _ESRn,
  _fo,
  _GIS,
  _GISR,
  _GISRe,
  _GS,
  _GSR,
  _GSRe,
  _h,
  _hQ,
  _IB,
  _iI,
  _iIn,
  _ima,
  _IS,
  _iS,
  _iSI,
  _ISm,
  _ISn,
  _iSn,
  _ISnv,
  _ISP,
  _ISSn,
  _iSSn,
  _ISSnv,
  _iST,
  _LI,
  _LIR,
  _LIRi,
  _LIS,
  _LISR,
  _LISRi,
  _LS,
  _LSR,
  _LSRi,
  _lUA,
  _mR,
  _nTe,
  _pa,
  _PIS,
  _PISR,
  _PISRu,
  _sA,
  _sI,
  _sIe,
  _SL,
  _sL,
  _sM,
  _sou,
  _sS,
  _SSe,
  _SSes,
  _sSes,
  _t,
  _ta,
  _uri,
  _US,
  _USR,
  _USRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateInvocationRequest = struct(n0, _CIR, 0, [_iI, _d, _sI], [0, 0, [0, 1]]);
export var CreateInvocationResponse = struct(n0, _CIRr, 0, [_sIe, _iI, _cA], [0, 0, 5]);
export var CreateSessionRequest = struct(n0, _CSR, 0, [_sM, _eKA, _ta], [128 | 0, 0, 128 | 0]);
export var CreateSessionResponse = struct(n0, _CSRr, 0, [_sIe, _sA, _sS, _cA], [0, 0, 0, 5]);
export var EndSessionRequest = struct(n0, _ESR, 0, [_sI], [[0, 1]]);
export var EndSessionResponse = struct(n0, _ESRn, 0, [_sIe, _sA, _sS], [0, 0, 0]);
export var GetInvocationStepRequest = struct(n0, _GISR, 0, [_iIn, _iSI, _sI], [0, [0, 1], [0, 1]]);
export var GetInvocationStepResponse = struct(n0, _GISRe, 0, [_iS], [[() => InvocationStep, 0]]);
export var GetSessionRequest = struct(n0, _GSR, 0, [_sI], [[0, 1]]);
export var GetSessionResponse = struct(
  n0,
  _GSRe,
  0,
  [_sIe, _sA, _sS, _cA, _lUA, _sM, _eKA],
  [0, 0, 0, 5, 5, 128 | 0, 0]
);
export var ImageBlock = struct(n0, _IB, 0, [_fo, _sou], [0, () => ImageSource]);
export var InvocationStep = struct(
  n0,
  _IS,
  0,
  [_sIe, _iI, _iSI, _iST, _pa],
  [0, 0, 0, 5, [() => InvocationStepPayload, 0]]
);
export var InvocationStepSummary = struct(n0, _ISSn, 0, [_sIe, _iI, _iSI, _iST], [0, 0, 0, 5]);
export var InvocationSummary = struct(n0, _ISn, 0, [_sIe, _iI, _cA], [0, 0, 5]);
export var ListInvocationsRequest = struct(
  n0,
  _LIR,
  0,
  [_nTe, _mR, _sI],
  [
    [
      0,
      {
        [_hQ]: _nTe,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [0, 1],
  ]
);
export var ListInvocationsResponse = struct(n0, _LIRi, 0, [_iSn, _nTe], [() => InvocationSummaries, 0]);
export var ListInvocationStepsRequest = struct(
  n0,
  _LISR,
  0,
  [_iIn, _nTe, _mR, _sI],
  [
    0,
    [
      0,
      {
        [_hQ]: _nTe,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [0, 1],
  ]
);
export var ListInvocationStepsResponse = struct(n0, _LISRi, 0, [_iSSn, _nTe], [() => InvocationStepSummaries, 0]);
export var ListSessionsRequest = struct(
  n0,
  _LSR,
  0,
  [_mR, _nTe],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nTe,
      },
    ],
  ]
);
export var ListSessionsResponse = struct(n0, _LSRi, 0, [_sSes, _nTe], [() => SessionSummaries, 0]);
export var PutInvocationStepRequest = struct(
  n0,
  _PISR,
  0,
  [_sI, _iIn, _iST, _pa, _iSI],
  [[0, 1], 0, 5, [() => InvocationStepPayload, 0], 0]
);
export var PutInvocationStepResponse = struct(n0, _PISRu, 0, [_iSI], [0]);
export var S3Location = struct(n0, _SL, 0, [_uri], [0]);
export var SessionSummary = struct(n0, _SSe, 0, [_sIe, _sA, _sS, _cA, _lUA], [0, 0, 0, 5, 5]);
export var UpdateSessionRequest = struct(n0, _USR, 0, [_sM, _sI], [128 | 0, [0, 1]]);
export var UpdateSessionResponse = struct(n0, _USRp, 0, [_sIe, _sA, _sS, _cA, _lUA], [0, 0, 0, 5, 5]);
export var BedrockSessionContentBlocks = list(n0, _BSCB, 0, [() => BedrockSessionContentBlock, 0]);
export var InvocationStepSummaries = list(n0, _ISSnv, 0, () => InvocationStepSummary);
export var InvocationSummaries = list(n0, _ISnv, 0, () => InvocationSummary);
export var SessionSummaries = list(n0, _SSes, 0, () => SessionSummary);
export var SessionMetadataMap = 128 | 0;

export var BedrockSessionContentBlock = uni(n0, _BSCBe, 8, [_t, _ima], [0, () => ImageBlock]);
export var ImageSource = uni(n0, _ISm, 0, [_by, _sL], [21, () => S3Location]);
export var InvocationStepPayload = uni(n0, _ISP, 0, [_cB], [[() => BedrockSessionContentBlocks, 0]]);
export var CreateInvocation = op(
  n0,
  _CIr,
  {
    [_h]: ["PUT", "/sessions/{sessionIdentifier}/invocations/", 201],
  },
  () => CreateInvocationRequest,
  () => CreateInvocationResponse
);
export var CreateSession = op(
  n0,
  _CS,
  {
    [_h]: ["PUT", "/sessions/", 201],
  },
  () => CreateSessionRequest,
  () => CreateSessionResponse
);
export var EndSession = op(
  n0,
  _ESn,
  {
    [_h]: ["PATCH", "/sessions/{sessionIdentifier}", 200],
  },
  () => EndSessionRequest,
  () => EndSessionResponse
);
export var GetInvocationStep = op(
  n0,
  _GIS,
  {
    [_h]: ["POST", "/sessions/{sessionIdentifier}/invocationSteps/{invocationStepId}", 200],
  },
  () => GetInvocationStepRequest,
  () => GetInvocationStepResponse
);
export var GetSession = op(
  n0,
  _GS,
  {
    [_h]: ["GET", "/sessions/{sessionIdentifier}/", 200],
  },
  () => GetSessionRequest,
  () => GetSessionResponse
);
export var ListInvocations = op(
  n0,
  _LI,
  {
    [_h]: ["POST", "/sessions/{sessionIdentifier}/invocations/", 200],
  },
  () => ListInvocationsRequest,
  () => ListInvocationsResponse
);
export var ListInvocationSteps = op(
  n0,
  _LIS,
  {
    [_h]: ["POST", "/sessions/{sessionIdentifier}/invocationSteps/", 200],
  },
  () => ListInvocationStepsRequest,
  () => ListInvocationStepsResponse
);
export var ListSessions = op(
  n0,
  _LS,
  {
    [_h]: ["POST", "/sessions/", 200],
  },
  () => ListSessionsRequest,
  () => ListSessionsResponse
);
export var PutInvocationStep = op(
  n0,
  _PIS,
  {
    [_h]: ["PUT", "/sessions/{sessionIdentifier}/invocationSteps/", 201],
  },
  () => PutInvocationStepRequest,
  () => PutInvocationStepResponse
);
export var UpdateSession = op(
  n0,
  _US,
  {
    [_h]: ["PUT", "/sessions/{sessionIdentifier}/", 200],
  },
  () => UpdateSessionRequest,
  () => UpdateSessionResponse
);
