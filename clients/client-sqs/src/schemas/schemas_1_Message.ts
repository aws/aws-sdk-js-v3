// smithy-typescript generated code
import { error, list, map, op, struct } from "@smithy/core/schema";

import {
  BatchRequestTooLong as __BatchRequestTooLong,
  InvalidMessageContents as __InvalidMessageContents,
  KmsAccessDenied as __KmsAccessDenied,
  KmsDisabled as __KmsDisabled,
  KmsInvalidKeyUsage as __KmsInvalidKeyUsage,
  KmsInvalidState as __KmsInvalidState,
  KmsNotFound as __KmsNotFound,
  KmsOptInRequired as __KmsOptInRequired,
  KmsThrottled as __KmsThrottled,
  MessageNotInflight as __MessageNotInflight,
} from "../models/index";
import {
  _ANOMM,
  _ANOMTM,
  _ANt,
  _ANtt,
  _aQE,
  _At,
  _Att,
  _B,
  _BL,
  _BLV,
  _BLVi,
  _BREE,
  _BRTL,
  _BV,
  _c,
  _CMV,
  _CMVB,
  _CMVBR,
  _CMVBRE,
  _CMVBREh,
  _CMVBREL,
  _CMVBRELh,
  _CMVBRh,
  _CMVR,
  _DA,
  _DS,
  _DT,
  _E,
  _e,
  _F,
  _FR,
  _hE,
  _I,
  _IMC,
  _KAD,
  _KD,
  _KIKU,
  _KIS,
  _KNF,
  _KOIR,
  _KT,
  _LMMT,
  _LMMTR,
  _LMMTRE,
  _LMMTREL,
  _LMMTRi,
  _M,
  _m,
  _MA,
  _MAe,
  _MAN,
  _MANe,
  _MAV,
  _MB,
  _MBAM,
  _MBSAM,
  _MDI,
  _MDOB,
  _MDOMA,
  _MDOMB,
  _MDOMSA,
  _Me,
  _MGI,
  _MI,
  _ML,
  _MNI,
  _MNOM,
  _MNOMPS,
  _MR,
  _MSA,
  _MSAe,
  _MSAM,
  _MSAN,
  _MSAV,
  _N,
  _QU,
  _R,
  _RH,
  _RM,
  _RMR,
  _RMRe,
  _RRAI,
  _S,
  _SA,
  _SL,
  _SLV,
  _SLVt,
  _SM,
  _SMB,
  _SMBR,
  _SMBRE,
  _SMBRe,
  _SMBREe,
  _SMBREL,
  _SMBRELe,
  _SMMT,
  _SMMTR,
  _SMMTRt,
  _SMR,
  _SMRe,
  _SN,
  _ST,
  _St,
  _SV,
  _TH,
  _V,
  _VT,
  _WTS,
  _xF,
  _xN,
  n0,
} from "./schemas_0";
import { Unit } from "./schemas_2_Message";
import { BatchResultErrorEntryList } from "./schemas_8_Message";

/* eslint no-var: 0 */

export var BatchRequestTooLong = error(
  n0,
  _BRTL,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`AWS.SimpleQueueService.BatchRequestTooLong`, 400],
  },
  [_m],
  [0],

  __BatchRequestTooLong
);
export var ChangeMessageVisibilityBatchRequest = struct(
  n0,
  _CMVBR,
  0,
  [_QU, _E],
  [
    0,
    [
      () => ChangeMessageVisibilityBatchRequestEntryList,
      {
        [_xN]: _CMVBRE,
        [_xF]: 1,
      },
    ],
  ]
);
export var ChangeMessageVisibilityBatchRequestEntry = struct(n0, _CMVBRE, 0, [_I, _RH, _VT], [0, 0, 1]);
export var ChangeMessageVisibilityBatchResult = struct(
  n0,
  _CMVBRh,
  0,
  [_S, _F],
  [
    [
      () => ChangeMessageVisibilityBatchResultEntryList,
      {
        [_xN]: _CMVBREh,
        [_xF]: 1,
      },
    ],
    [
      () => BatchResultErrorEntryList,
      {
        [_xN]: _BREE,
        [_xF]: 1,
      },
    ],
  ]
);
export var ChangeMessageVisibilityBatchResultEntry = struct(n0, _CMVBREh, 0, [_I], [0]);
export var ChangeMessageVisibilityRequest = struct(n0, _CMVR, 0, [_QU, _RH, _VT], [0, 0, 1]);
export var InvalidMessageContents = error(
  n0,
  _IMC,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidMessageContents
);
export var KmsAccessDenied = error(
  n0,
  _KAD,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`KMS.AccessDeniedException`, 400],
  },
  [_m],
  [0],

  __KmsAccessDenied
);
export var KmsDisabled = error(
  n0,
  _KD,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`KMS.DisabledException`, 400],
  },
  [_m],
  [0],

  __KmsDisabled
);
export var KmsInvalidKeyUsage = error(
  n0,
  _KIKU,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`KMS.InvalidKeyUsageException`, 400],
  },
  [_m],
  [0],

  __KmsInvalidKeyUsage
);
export var KmsInvalidState = error(
  n0,
  _KIS,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`KMS.InvalidStateException`, 400],
  },
  [_m],
  [0],

  __KmsInvalidState
);
export var KmsNotFound = error(
  n0,
  _KNF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`KMS.NotFoundException`, 400],
  },
  [_m],
  [0],

  __KmsNotFound
);
export var KmsOptInRequired = error(
  n0,
  _KOIR,
  {
    [_e]: _c,
    [_hE]: 403,
    [_aQE]: [`KMS.OptInRequired`, 403],
  },
  [_m],
  [0],

  __KmsOptInRequired
);
export var KmsThrottled = error(
  n0,
  _KT,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`KMS.ThrottlingException`, 400],
  },
  [_m],
  [0],

  __KmsThrottled
);
export var ListMessageMoveTasksRequest = struct(n0, _LMMTR, 0, [_SA, _MR], [0, 1]);
export var ListMessageMoveTasksResult = struct(
  n0,
  _LMMTRi,
  {
    [_xN]: _LMMTRi,
  },
  [_R],
  [
    [
      () => ListMessageMoveTasksResultEntryList,
      {
        [_xN]: _LMMTRE,
        [_xF]: 1,
      },
    ],
  ]
);
export var ListMessageMoveTasksResultEntry = struct(
  n0,
  _LMMTRE,
  0,
  [_TH, _St, _SA, _DA, _MNOMPS, _ANOMM, _ANOMTM, _FR, _ST],
  [0, 0, 0, 0, 1, 1, 1, 0, 1]
);
export var Message = struct(
  n0,
  _M,
  0,
  [_MI, _RH, _MDOB, _B, _At, _MDOMA, _MA],
  [
    0,
    0,
    0,
    0,
    [
      () => MessageSystemAttributeMap,
      {
        [_xN]: _Att,
        [_xF]: 1,
      },
    ],
    0,
    [
      () => MessageBodyAttributeMap,
      {
        [_xN]: _MAe,
        [_xF]: 1,
      },
    ],
  ]
);
export var MessageAttributeValue = struct(
  n0,
  _MAV,
  0,
  [_SV, _BV, _SLV, _BLV, _DT],
  [
    0,
    21,
    [
      () => StringList,
      {
        [_xN]: _SLVt,
        [_xF]: 1,
      },
    ],
    [
      () => BinaryList,
      {
        [_xN]: _BLVi,
        [_xF]: 1,
      },
    ],
    0,
  ]
);
export var MessageNotInflight = error(
  n0,
  _MNI,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`AWS.SimpleQueueService.MessageNotInflight`, 400],
  },
  [],
  [],

  __MessageNotInflight
);
export var MessageSystemAttributeValue = struct(
  n0,
  _MSAV,
  0,
  [_SV, _BV, _SLV, _BLV, _DT],
  [
    0,
    21,
    [
      () => StringList,
      {
        [_xN]: _SLVt,
        [_xF]: 1,
      },
    ],
    [
      () => BinaryList,
      {
        [_xN]: _BLVi,
        [_xF]: 1,
      },
    ],
    0,
  ]
);
export var ReceiveMessageRequest = struct(
  n0,
  _RMR,
  0,
  [_QU, _ANt, _MSAN, _MAN, _MNOM, _VT, _WTS, _RRAI],
  [
    0,
    [
      64 | 0,
      {
        [_xN]: _ANtt,
        [_xF]: 1,
      },
    ],
    [
      64 | 0,
      {
        [_xN]: _ANtt,
        [_xF]: 1,
      },
    ],
    [
      64 | 0,
      {
        [_xN]: _MANe,
        [_xF]: 1,
      },
    ],
    1,
    1,
    1,
    0,
  ]
);
export var ReceiveMessageResult = struct(
  n0,
  _RMRe,
  0,
  [_Me],
  [
    [
      () => MessageList,
      {
        [_xN]: _M,
        [_xF]: 1,
      },
    ],
  ]
);
export var SendMessageBatchRequest = struct(
  n0,
  _SMBR,
  0,
  [_QU, _E],
  [
    0,
    [
      () => SendMessageBatchRequestEntryList,
      {
        [_xN]: _SMBRE,
        [_xF]: 1,
      },
    ],
  ]
);
export var SendMessageBatchRequestEntry = struct(
  n0,
  _SMBRE,
  0,
  [_I, _MB, _DS, _MA, _MSA, _MDI, _MGI],
  [
    0,
    0,
    1,
    [
      () => MessageBodyAttributeMap,
      {
        [_xN]: _MAe,
        [_xF]: 1,
      },
    ],
    [
      () => MessageBodySystemAttributeMap,
      {
        [_xN]: _MSAe,
        [_xF]: 1,
      },
    ],
    0,
    0,
  ]
);
export var SendMessageBatchResult = struct(
  n0,
  _SMBRe,
  0,
  [_S, _F],
  [
    [
      () => SendMessageBatchResultEntryList,
      {
        [_xN]: _SMBREe,
        [_xF]: 1,
      },
    ],
    [
      () => BatchResultErrorEntryList,
      {
        [_xN]: _BREE,
        [_xF]: 1,
      },
    ],
  ]
);
export var SendMessageBatchResultEntry = struct(
  n0,
  _SMBREe,
  0,
  [_I, _MI, _MDOMB, _MDOMA, _MDOMSA, _SN],
  [0, 0, 0, 0, 0, 0]
);
export var SendMessageRequest = struct(
  n0,
  _SMR,
  0,
  [_QU, _MB, _DS, _MA, _MSA, _MDI, _MGI],
  [
    0,
    0,
    1,
    [
      () => MessageBodyAttributeMap,
      {
        [_xN]: _MAe,
        [_xF]: 1,
      },
    ],
    [
      () => MessageBodySystemAttributeMap,
      {
        [_xN]: _MSAe,
        [_xF]: 1,
      },
    ],
    0,
    0,
  ]
);
export var SendMessageResult = struct(n0, _SMRe, 0, [_MDOMB, _MDOMA, _MDOMSA, _MI, _SN], [0, 0, 0, 0, 0]);
export var StartMessageMoveTaskRequest = struct(n0, _SMMTR, 0, [_SA, _DA, _MNOMPS], [0, 0, 1]);
export var StartMessageMoveTaskResult = struct(n0, _SMMTRt, 0, [_TH], [0]);
export var BinaryList = list(n0, _BL, 0, [
  21,
  {
    [_xN]: _BLVi,
  },
]);
export var ChangeMessageVisibilityBatchRequestEntryList = list(
  n0,
  _CMVBREL,
  0,
  () => ChangeMessageVisibilityBatchRequestEntry
);
export var ChangeMessageVisibilityBatchResultEntryList = list(
  n0,
  _CMVBRELh,
  0,
  () => ChangeMessageVisibilityBatchResultEntry
);
export var ListMessageMoveTasksResultEntryList = list(n0, _LMMTREL, 0, () => ListMessageMoveTasksResultEntry);
export var MessageAttributeNameList = 64 | 0;

export var MessageList = list(n0, _ML, 0, [() => Message, 0]);
export var MessageSystemAttributeList = 64 | 0;

export var SendMessageBatchRequestEntryList = list(n0, _SMBREL, 0, [() => SendMessageBatchRequestEntry, 0]);
export var SendMessageBatchResultEntryList = list(n0, _SMBRELe, 0, () => SendMessageBatchResultEntry);
export var StringList = list(n0, _SL, 0, [
  0,
  {
    [_xN]: _SLVt,
  },
]);
export var MessageBodyAttributeMap = map(
  n0,
  _MBAM,
  0,
  [
    0,
    {
      [_xN]: _N,
    },
  ],
  [
    () => MessageAttributeValue,
    {
      [_xN]: _V,
    },
  ]
);
export var MessageBodySystemAttributeMap = map(
  n0,
  _MBSAM,
  0,
  [
    0,
    {
      [_xN]: _N,
    },
  ],
  [
    () => MessageSystemAttributeValue,
    {
      [_xN]: _V,
    },
  ]
);
export var MessageSystemAttributeMap = map(
  n0,
  _MSAM,
  0,
  [
    0,
    {
      [_xN]: _N,
    },
  ],
  [
    0,
    {
      [_xN]: _V,
    },
  ]
);
export var ChangeMessageVisibility = op(
  n0,
  _CMV,
  0,
  () => ChangeMessageVisibilityRequest,
  () => Unit
);
export var ChangeMessageVisibilityBatch = op(
  n0,
  _CMVB,
  0,
  () => ChangeMessageVisibilityBatchRequest,
  () => ChangeMessageVisibilityBatchResult
);
export var ListMessageMoveTasks = op(
  n0,
  _LMMT,
  0,
  () => ListMessageMoveTasksRequest,
  () => ListMessageMoveTasksResult
);
export var ReceiveMessage = op(
  n0,
  _RM,
  0,
  () => ReceiveMessageRequest,
  () => ReceiveMessageResult
);
export var SendMessage = op(
  n0,
  _SM,
  0,
  () => SendMessageRequest,
  () => SendMessageResult
);
export var SendMessageBatch = op(
  n0,
  _SMB,
  0,
  () => SendMessageBatchRequest,
  () => SendMessageBatchResult
);
export var StartMessageMoveTask = op(
  n0,
  _SMMT,
  0,
  () => StartMessageMoveTaskRequest,
  () => StartMessageMoveTaskResult
);
