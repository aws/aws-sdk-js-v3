// smithy-typescript generated code
import { error, list, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  EncryptionTypeMismatch as __EncryptionTypeMismatch,
  InvalidObjectState as __InvalidObjectState,
  InvalidRequest as __InvalidRequest,
  InvalidWriteOffset as __InvalidWriteOffset,
  ObjectNotInActiveTierError as __ObjectNotInActiveTierError,
  TooManyParts as __TooManyParts,
} from "../models/index";
import {
  _ACL_,
  _AD,
  _AR,
  _ar,
  _ARI,
  _AS,
  _AT,
  _B,
  _BKE,
  _Bo,
  _BP,
  _BRy,
  _BS,
  _C,
  _c,
  _CA,
  _CC,
  _CC_,
  _CCRC,
  _CCRCC,
  _CCRCNVME,
  _CD_,
  _CDo,
  _CE,
  _CE_,
  _CEo,
  _CL,
  _CL_,
  _CL__,
  _CLo,
  _CM,
  _CMD,
  _CMh,
  _CMU,
  _CMUO,
  _CMUo,
  _CMUOr,
  _CMUR,
  _CMUr,
  _CMURo,
  _CMURr,
  _CO,
  _Cont,
  _COO,
  _COR,
  _CORo,
  _CPLo,
  _CPo,
  _CPR,
  _CR,
  _CR_,
  _CS,
  _CSHA,
  _CSHAh,
  _CSIM,
  _CSIMS,
  _CSINM,
  _CSIUS,
  _CSRo,
  _CSSSECA,
  _CSSSECK,
  _CSSSECKMD,
  _CSVI,
  _CT,
  _CT_,
  _CTo,
  _Det,
  _DM,
  _E,
  _e,
  _EBO,
  _EE,
  _Ena,
  _End,
  _eP,
  _ES,
  _ESBO,
  _ET,
  _ETM,
  _ETx,
  _Ex,
  _Exp,
  _GFC,
  _GO,
  _GOAe,
  _GOAOe,
  _GOAP,
  _GOARe,
  _GOARet,
  _GOO,
  _GOR,
  _GR,
  _GRACP,
  _GWACP,
  _h,
  _hE,
  _hH,
  _HO,
  _HOO,
  _HOR,
  _hP,
  _hPH,
  _hQ,
  _IM,
  _IM_,
  _IMS_,
  _IMSf,
  _IMUR,
  _In,
  _INM,
  _INM_,
  _IOS,
  _IR,
  _IS,
  _IT,
  _IUS,
  _IUS_,
  _IWO,
  _K,
  _L,
  _LM,
  _LM_,
  _LP,
  _LPO,
  _LPR,
  _LPRi,
  _M,
  _MD,
  _MM,
  _MOS,
  _MP,
  _mp,
  _MU,
  _NPNM,
  _O,
  _OA,
  _OLLHS,
  _OLM,
  _OLRUD,
  _ONIATE,
  _OP,
  _OPb,
  _OS,
  _OSu,
  _Pa,
  _Par,
  _Payl,
  _PC,
  _PE,
  _PL,
  _PN,
  _pN,
  _PNM,
  _pnm,
  _PO,
  _POO,
  _POR,
  _Pr,
  _Ra,
  _RC,
  _RCC,
  _rcc,
  _RCD,
  _rcd,
  _RCE,
  _rce,
  _RCL,
  _rcl,
  _RCT,
  _rct,
  _RE,
  _Re,
  _re,
  _Rec,
  _REec,
  _RP,
  _RPe,
  _RS,
  _s,
  _SC,
  _SE,
  _Si,
  _SOC,
  _SOCES,
  _SOCO,
  _SOCR,
  _SR,
  _SSE,
  _SSECA,
  _SSECK,
  _SSECKMD,
  _SSEKMSEC,
  _SSEKMSKI,
  _St,
  _Sta,
  _Tag,
  _TC,
  _TD,
  _TMP,
  _TPC,
  _UI,
  _uI,
  _UP,
  _UPC,
  _UPCO,
  _UPCR,
  _UPO,
  _UPR,
  _VI,
  _vI,
  _WOB,
  _WRL,
  _xaa,
  _xaad,
  _xaari,
  _xaas,
  _xaca,
  _xacc,
  _xacc_,
  _xacc__,
  _xacm,
  _xacs,
  _xacs_,
  _xacs__,
  _xacsim,
  _xacsims,
  _xacsinm,
  _xacsius,
  _xacsr,
  _xacssseca,
  _xacssseck,
  _xacssseckM,
  _xacsvi,
  _xact,
  _xadm,
  _xae,
  _xaebo,
  _xagfc,
  _xagr,
  _xagra,
  _xagwa,
  _xam,
  _xamd,
  _xamm,
  _xamos,
  _xamp,
  _xampc,
  _xaoa,
  _xaollh,
  _xaolm,
  _xaolrud,
  _xaos,
  _xapnm,
  _xar,
  _xarc,
  _xarp,
  _xars,
  _xasc,
  _xasca,
  _xasebo,
  _xasse,
  _xasseakki,
  _xassebke,
  _xassec,
  _xasseca,
  _xasseck,
  _xasseckM,
  _xat,
  _xatc,
  _xatd,
  _xavi,
  _xawob,
  _xawrl,
  _xF,
  _xN,
  n0,
  SSEKMSKeyId,
} from "./schemas_0";
import { Initiator, Owner } from "./schemas_15_List";
import { InputSerialization, OutputSerialization } from "./schemas_28_Object";
import { SSEKMSEncryptionContext } from "./schemas_42_Create";
import { StreamingBlob } from "./schemas_49_Object";

/* eslint no-var: 0 */

export var CopySourceSSECustomerKey = sim(n0, _CSSSECK, 0, 8);
export var SSECustomerKey = sim(n0, _SSECK, 0, 8);
export var Checksum = struct(n0, _C, 0, [_CCRC, _CCRCC, _CCRCNVME, _CSHA, _CSHAh, _CT], [0, 0, 0, 0, 0, 0]);
export var CompletedMultipartUpload = struct(
  n0,
  _CMU,
  0,
  [_Pa],
  [
    [
      () => CompletedPartList,
      {
        [_xN]: _Par,
        [_xF]: 1,
      },
    ],
  ]
);
export var CompletedPart = struct(
  n0,
  _CPo,
  0,
  [_ET, _CCRC, _CCRCC, _CCRCNVME, _CSHA, _CSHAh, _PN],
  [0, 0, 0, 0, 0, 0, 1]
);
export var CompleteMultipartUploadOutput = struct(
  n0,
  _CMUO,
  {
    [_xN]: _CMUR,
  },
  [_L, _B, _K, _E, _ET, _CCRC, _CCRCC, _CCRCNVME, _CSHA, _CSHAh, _CT, _SSE, _VI, _SSEKMSKI, _BKE, _RC],
  [
    0,
    0,
    0,
    [
      0,
      {
        [_hH]: _xae,
      },
    ],
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    [
      0,
      {
        [_hH]: _xasse,
      },
    ],
    [
      0,
      {
        [_hH]: _xavi,
      },
    ],
    [
      () => SSEKMSKeyId,
      {
        [_hH]: _xasseakki,
      },
    ],
    [
      2,
      {
        [_hH]: _xassebke,
      },
    ],
    [
      0,
      {
        [_hH]: _xarc,
      },
    ],
  ]
);
export var CompleteMultipartUploadRequest = struct(
  n0,
  _CMURo,
  0,
  [
    _B,
    _K,
    _MU,
    _UI,
    _CCRC,
    _CCRCC,
    _CCRCNVME,
    _CSHA,
    _CSHAh,
    _CT,
    _MOS,
    _RP,
    _EBO,
    _IM,
    _INM,
    _SSECA,
    _SSECK,
    _SSECKMD,
  ],
  [
    [0, 1],
    [0, 1],
    [
      () => CompletedMultipartUpload,
      {
        [_xN]: _CMUo,
        [_hP]: 1,
      },
    ],
    [
      0,
      {
        [_hQ]: _uI,
      },
    ],
    [
      0,
      {
        [_hH]: _xacc,
      },
    ],
    [
      0,
      {
        [_hH]: _xacc_,
      },
    ],
    [
      0,
      {
        [_hH]: _xacc__,
      },
    ],
    [
      0,
      {
        [_hH]: _xacs,
      },
    ],
    [
      0,
      {
        [_hH]: _xacs_,
      },
    ],
    [
      0,
      {
        [_hH]: _xact,
      },
    ],
    [
      1,
      {
        [_hH]: _xamos,
      },
    ],
    [
      0,
      {
        [_hH]: _xarp,
      },
    ],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
    [
      0,
      {
        [_hH]: _IM_,
      },
    ],
    [
      0,
      {
        [_hH]: _INM_,
      },
    ],
    [
      0,
      {
        [_hH]: _xasseca,
      },
    ],
    [
      () => SSECustomerKey,
      {
        [_hH]: _xasseck,
      },
    ],
    [
      0,
      {
        [_hH]: _xasseckM,
      },
    ],
  ]
);
export var ContinuationEvent = struct(n0, _CE, 0, [], []);
export var CopyObjectOutput = struct(
  n0,
  _COO,
  0,
  [_COR, _E, _CSVI, _VI, _SSE, _SSECA, _SSECKMD, _SSEKMSKI, _SSEKMSEC, _BKE, _RC],
  [
    [() => CopyObjectResult, 16],
    [
      0,
      {
        [_hH]: _xae,
      },
    ],
    [
      0,
      {
        [_hH]: _xacsvi,
      },
    ],
    [
      0,
      {
        [_hH]: _xavi,
      },
    ],
    [
      0,
      {
        [_hH]: _xasse,
      },
    ],
    [
      0,
      {
        [_hH]: _xasseca,
      },
    ],
    [
      0,
      {
        [_hH]: _xasseckM,
      },
    ],
    [
      () => SSEKMSKeyId,
      {
        [_hH]: _xasseakki,
      },
    ],
    [
      () => SSEKMSEncryptionContext,
      {
        [_hH]: _xassec,
      },
    ],
    [
      2,
      {
        [_hH]: _xassebke,
      },
    ],
    [
      0,
      {
        [_hH]: _xarc,
      },
    ],
  ]
);
export var CopyObjectRequest = struct(
  n0,
  _CORo,
  0,
  [
    _ACL_,
    _B,
    _CC,
    _CA,
    _CDo,
    _CEo,
    _CL,
    _CTo,
    _CS,
    _CSIM,
    _CSIMS,
    _CSINM,
    _CSIUS,
    _Ex,
    _GFC,
    _GR,
    _GRACP,
    _GWACP,
    _K,
    _M,
    _MD,
    _TD,
    _SSE,
    _SC,
    _WRL,
    _SSECA,
    _SSECK,
    _SSECKMD,
    _SSEKMSKI,
    _SSEKMSEC,
    _BKE,
    _CSSSECA,
    _CSSSECK,
    _CSSSECKMD,
    _RP,
    _Tag,
    _OLM,
    _OLRUD,
    _OLLHS,
    _EBO,
    _ESBO,
  ],
  [
    [
      0,
      {
        [_hH]: _xaa,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_hH]: _CC_,
      },
    ],
    [
      0,
      {
        [_hH]: _xaca,
      },
    ],
    [
      0,
      {
        [_hH]: _CD_,
      },
    ],
    [
      0,
      {
        [_hH]: _CE_,
      },
    ],
    [
      0,
      {
        [_hH]: _CL_,
      },
    ],
    [
      0,
      {
        [_hH]: _CT_,
      },
    ],
    [
      0,
      {
        [_hH]: _xacs__,
      },
    ],
    [
      0,
      {
        [_hH]: _xacsim,
      },
    ],
    [
      4,
      {
        [_hH]: _xacsims,
      },
    ],
    [
      0,
      {
        [_hH]: _xacsinm,
      },
    ],
    [
      4,
      {
        [_hH]: _xacsius,
      },
    ],
    [
      4,
      {
        [_hH]: _Ex,
      },
    ],
    [
      0,
      {
        [_hH]: _xagfc,
      },
    ],
    [
      0,
      {
        [_hH]: _xagr,
      },
    ],
    [
      0,
      {
        [_hH]: _xagra,
      },
    ],
    [
      0,
      {
        [_hH]: _xagwa,
      },
    ],
    [0, 1],
    [
      128 | 0,
      {
        [_hPH]: _xam,
      },
    ],
    [
      0,
      {
        [_hH]: _xamd,
      },
    ],
    [
      0,
      {
        [_hH]: _xatd,
      },
    ],
    [
      0,
      {
        [_hH]: _xasse,
      },
    ],
    [
      0,
      {
        [_hH]: _xasc,
      },
    ],
    [
      0,
      {
        [_hH]: _xawrl,
      },
    ],
    [
      0,
      {
        [_hH]: _xasseca,
      },
    ],
    [
      () => SSECustomerKey,
      {
        [_hH]: _xasseck,
      },
    ],
    [
      0,
      {
        [_hH]: _xasseckM,
      },
    ],
    [
      () => SSEKMSKeyId,
      {
        [_hH]: _xasseakki,
      },
    ],
    [
      () => SSEKMSEncryptionContext,
      {
        [_hH]: _xassec,
      },
    ],
    [
      2,
      {
        [_hH]: _xassebke,
      },
    ],
    [
      0,
      {
        [_hH]: _xacssseca,
      },
    ],
    [
      () => CopySourceSSECustomerKey,
      {
        [_hH]: _xacssseck,
      },
    ],
    [
      0,
      {
        [_hH]: _xacssseckM,
      },
    ],
    [
      0,
      {
        [_hH]: _xarp,
      },
    ],
    [
      0,
      {
        [_hH]: _xat,
      },
    ],
    [
      0,
      {
        [_hH]: _xaolm,
      },
    ],
    [
      5,
      {
        [_hH]: _xaolrud,
      },
    ],
    [
      0,
      {
        [_hH]: _xaollh,
      },
    ],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
    [
      0,
      {
        [_hH]: _xasebo,
      },
    ],
  ]
);
export var CopyObjectResult = struct(
  n0,
  _COR,
  0,
  [_ET, _LM, _CT, _CCRC, _CCRCC, _CCRCNVME, _CSHA, _CSHAh],
  [0, 4, 0, 0, 0, 0, 0, 0]
);
export var CopyPartResult = struct(
  n0,
  _CPR,
  0,
  [_ET, _LM, _CCRC, _CCRCC, _CCRCNVME, _CSHA, _CSHAh],
  [0, 4, 0, 0, 0, 0, 0]
);
export var CreateMultipartUploadOutput = struct(
  n0,
  _CMUOr,
  {
    [_xN]: _IMUR,
  },
  [_AD, _ARI, _B, _K, _UI, _SSE, _SSECA, _SSECKMD, _SSEKMSKI, _SSEKMSEC, _BKE, _RC, _CA, _CT],
  [
    [
      4,
      {
        [_hH]: _xaad,
      },
    ],
    [
      0,
      {
        [_hH]: _xaari,
      },
    ],
    [
      0,
      {
        [_xN]: _B,
      },
    ],
    0,
    0,
    [
      0,
      {
        [_hH]: _xasse,
      },
    ],
    [
      0,
      {
        [_hH]: _xasseca,
      },
    ],
    [
      0,
      {
        [_hH]: _xasseckM,
      },
    ],
    [
      () => SSEKMSKeyId,
      {
        [_hH]: _xasseakki,
      },
    ],
    [
      () => SSEKMSEncryptionContext,
      {
        [_hH]: _xassec,
      },
    ],
    [
      2,
      {
        [_hH]: _xassebke,
      },
    ],
    [
      0,
      {
        [_hH]: _xarc,
      },
    ],
    [
      0,
      {
        [_hH]: _xaca,
      },
    ],
    [
      0,
      {
        [_hH]: _xact,
      },
    ],
  ]
);
export var CreateMultipartUploadRequest = struct(
  n0,
  _CMURr,
  0,
  [
    _ACL_,
    _B,
    _CC,
    _CDo,
    _CEo,
    _CL,
    _CTo,
    _Ex,
    _GFC,
    _GR,
    _GRACP,
    _GWACP,
    _K,
    _M,
    _SSE,
    _SC,
    _WRL,
    _SSECA,
    _SSECK,
    _SSECKMD,
    _SSEKMSKI,
    _SSEKMSEC,
    _BKE,
    _RP,
    _Tag,
    _OLM,
    _OLRUD,
    _OLLHS,
    _EBO,
    _CA,
    _CT,
  ],
  [
    [
      0,
      {
        [_hH]: _xaa,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_hH]: _CC_,
      },
    ],
    [
      0,
      {
        [_hH]: _CD_,
      },
    ],
    [
      0,
      {
        [_hH]: _CE_,
      },
    ],
    [
      0,
      {
        [_hH]: _CL_,
      },
    ],
    [
      0,
      {
        [_hH]: _CT_,
      },
    ],
    [
      4,
      {
        [_hH]: _Ex,
      },
    ],
    [
      0,
      {
        [_hH]: _xagfc,
      },
    ],
    [
      0,
      {
        [_hH]: _xagr,
      },
    ],
    [
      0,
      {
        [_hH]: _xagra,
      },
    ],
    [
      0,
      {
        [_hH]: _xagwa,
      },
    ],
    [0, 1],
    [
      128 | 0,
      {
        [_hPH]: _xam,
      },
    ],
    [
      0,
      {
        [_hH]: _xasse,
      },
    ],
    [
      0,
      {
        [_hH]: _xasc,
      },
    ],
    [
      0,
      {
        [_hH]: _xawrl,
      },
    ],
    [
      0,
      {
        [_hH]: _xasseca,
      },
    ],
    [
      () => SSECustomerKey,
      {
        [_hH]: _xasseck,
      },
    ],
    [
      0,
      {
        [_hH]: _xasseckM,
      },
    ],
    [
      () => SSEKMSKeyId,
      {
        [_hH]: _xasseakki,
      },
    ],
    [
      () => SSEKMSEncryptionContext,
      {
        [_hH]: _xassec,
      },
    ],
    [
      2,
      {
        [_hH]: _xassebke,
      },
    ],
    [
      0,
      {
        [_hH]: _xarp,
      },
    ],
    [
      0,
      {
        [_hH]: _xat,
      },
    ],
    [
      0,
      {
        [_hH]: _xaolm,
      },
    ],
    [
      5,
      {
        [_hH]: _xaolrud,
      },
    ],
    [
      0,
      {
        [_hH]: _xaollh,
      },
    ],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
    [
      0,
      {
        [_hH]: _xaca,
      },
    ],
    [
      0,
      {
        [_hH]: _xact,
      },
    ],
  ]
);
export var EncryptionTypeMismatch = error(
  n0,
  _ETM,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [],
  [],

  __EncryptionTypeMismatch
);
export var EndEvent = struct(n0, _EE, 0, [], []);
export var GetObjectAttributesOutput = struct(
  n0,
  _GOAOe,
  {
    [_xN]: _GOARe,
  },
  [_DM, _LM, _VI, _RC, _ET, _C, _OP, _SC, _OS],
  [
    [
      2,
      {
        [_hH]: _xadm,
      },
    ],
    [
      4,
      {
        [_hH]: _LM_,
      },
    ],
    [
      0,
      {
        [_hH]: _xavi,
      },
    ],
    [
      0,
      {
        [_hH]: _xarc,
      },
    ],
    0,
    () => Checksum,
    [() => GetObjectAttributesParts, 0],
    0,
    1,
  ]
);
export var GetObjectAttributesParts = struct(
  n0,
  _GOAP,
  0,
  [_TPC, _PNM, _NPNM, _MP, _IT, _Pa],
  [
    [
      1,
      {
        [_xN]: _PC,
      },
    ],
    0,
    0,
    1,
    2,
    [
      () => PartsList,
      {
        [_xN]: _Par,
        [_xF]: 1,
      },
    ],
  ]
);
export var GetObjectAttributesRequest = struct(
  n0,
  _GOARet,
  0,
  [_B, _K, _VI, _MP, _PNM, _SSECA, _SSECK, _SSECKMD, _RP, _EBO, _OA],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _vI,
      },
    ],
    [
      1,
      {
        [_hH]: _xamp,
      },
    ],
    [
      0,
      {
        [_hH]: _xapnm,
      },
    ],
    [
      0,
      {
        [_hH]: _xasseca,
      },
    ],
    [
      () => SSECustomerKey,
      {
        [_hH]: _xasseck,
      },
    ],
    [
      0,
      {
        [_hH]: _xasseckM,
      },
    ],
    [
      0,
      {
        [_hH]: _xarp,
      },
    ],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
    [
      64 | 0,
      {
        [_hH]: _xaoa,
      },
    ],
  ]
);
export var GetObjectOutput = struct(
  n0,
  _GOO,
  0,
  [
    _Bo,
    _DM,
    _AR,
    _E,
    _Re,
    _LM,
    _CLo,
    _ET,
    _CCRC,
    _CCRCC,
    _CCRCNVME,
    _CSHA,
    _CSHAh,
    _CT,
    _MM,
    _VI,
    _CC,
    _CDo,
    _CEo,
    _CL,
    _CR,
    _CTo,
    _Ex,
    _ES,
    _WRL,
    _SSE,
    _M,
    _SSECA,
    _SSECKMD,
    _SSEKMSKI,
    _BKE,
    _SC,
    _RC,
    _RS,
    _PC,
    _TC,
    _OLM,
    _OLRUD,
    _OLLHS,
  ],
  [
    [() => StreamingBlob, 16],
    [
      2,
      {
        [_hH]: _xadm,
      },
    ],
    [
      0,
      {
        [_hH]: _ar,
      },
    ],
    [
      0,
      {
        [_hH]: _xae,
      },
    ],
    [
      0,
      {
        [_hH]: _xar,
      },
    ],
    [
      4,
      {
        [_hH]: _LM_,
      },
    ],
    [
      1,
      {
        [_hH]: _CL__,
      },
    ],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
    [
      0,
      {
        [_hH]: _xacc,
      },
    ],
    [
      0,
      {
        [_hH]: _xacc_,
      },
    ],
    [
      0,
      {
        [_hH]: _xacc__,
      },
    ],
    [
      0,
      {
        [_hH]: _xacs,
      },
    ],
    [
      0,
      {
        [_hH]: _xacs_,
      },
    ],
    [
      0,
      {
        [_hH]: _xact,
      },
    ],
    [
      1,
      {
        [_hH]: _xamm,
      },
    ],
    [
      0,
      {
        [_hH]: _xavi,
      },
    ],
    [
      0,
      {
        [_hH]: _CC_,
      },
    ],
    [
      0,
      {
        [_hH]: _CD_,
      },
    ],
    [
      0,
      {
        [_hH]: _CE_,
      },
    ],
    [
      0,
      {
        [_hH]: _CL_,
      },
    ],
    [
      0,
      {
        [_hH]: _CR_,
      },
    ],
    [
      0,
      {
        [_hH]: _CT_,
      },
    ],
    [
      4,
      {
        [_hH]: _Ex,
      },
    ],
    [
      0,
      {
        [_hH]: _ES,
      },
    ],
    [
      0,
      {
        [_hH]: _xawrl,
      },
    ],
    [
      0,
      {
        [_hH]: _xasse,
      },
    ],
    [
      128 | 0,
      {
        [_hPH]: _xam,
      },
    ],
    [
      0,
      {
        [_hH]: _xasseca,
      },
    ],
    [
      0,
      {
        [_hH]: _xasseckM,
      },
    ],
    [
      () => SSEKMSKeyId,
      {
        [_hH]: _xasseakki,
      },
    ],
    [
      2,
      {
        [_hH]: _xassebke,
      },
    ],
    [
      0,
      {
        [_hH]: _xasc,
      },
    ],
    [
      0,
      {
        [_hH]: _xarc,
      },
    ],
    [
      0,
      {
        [_hH]: _xars,
      },
    ],
    [
      1,
      {
        [_hH]: _xampc,
      },
    ],
    [
      1,
      {
        [_hH]: _xatc,
      },
    ],
    [
      0,
      {
        [_hH]: _xaolm,
      },
    ],
    [
      5,
      {
        [_hH]: _xaolrud,
      },
    ],
    [
      0,
      {
        [_hH]: _xaollh,
      },
    ],
  ]
);
export var GetObjectRequest = struct(
  n0,
  _GOR,
  0,
  [
    _B,
    _IM,
    _IMSf,
    _INM,
    _IUS,
    _K,
    _Ra,
    _RCC,
    _RCD,
    _RCE,
    _RCL,
    _RCT,
    _RE,
    _VI,
    _SSECA,
    _SSECK,
    _SSECKMD,
    _RP,
    _PN,
    _EBO,
    _CMh,
  ],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _IM_,
      },
    ],
    [
      4,
      {
        [_hH]: _IMS_,
      },
    ],
    [
      0,
      {
        [_hH]: _INM_,
      },
    ],
    [
      4,
      {
        [_hH]: _IUS_,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_hH]: _Ra,
      },
    ],
    [
      0,
      {
        [_hQ]: _rcc,
      },
    ],
    [
      0,
      {
        [_hQ]: _rcd,
      },
    ],
    [
      0,
      {
        [_hQ]: _rce,
      },
    ],
    [
      0,
      {
        [_hQ]: _rcl,
      },
    ],
    [
      0,
      {
        [_hQ]: _rct,
      },
    ],
    [
      6,
      {
        [_hQ]: _re,
      },
    ],
    [
      0,
      {
        [_hQ]: _vI,
      },
    ],
    [
      0,
      {
        [_hH]: _xasseca,
      },
    ],
    [
      () => SSECustomerKey,
      {
        [_hH]: _xasseck,
      },
    ],
    [
      0,
      {
        [_hH]: _xasseckM,
      },
    ],
    [
      0,
      {
        [_hH]: _xarp,
      },
    ],
    [
      1,
      {
        [_hQ]: _pN,
      },
    ],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
    [
      0,
      {
        [_hH]: _xacm,
      },
    ],
  ]
);
export var HeadObjectOutput = struct(
  n0,
  _HOO,
  0,
  [
    _DM,
    _AR,
    _E,
    _Re,
    _AS,
    _LM,
    _CLo,
    _CCRC,
    _CCRCC,
    _CCRCNVME,
    _CSHA,
    _CSHAh,
    _CT,
    _ET,
    _MM,
    _VI,
    _CC,
    _CDo,
    _CEo,
    _CL,
    _CTo,
    _CR,
    _Ex,
    _ES,
    _WRL,
    _SSE,
    _M,
    _SSECA,
    _SSECKMD,
    _SSEKMSKI,
    _BKE,
    _SC,
    _RC,
    _RS,
    _PC,
    _TC,
    _OLM,
    _OLRUD,
    _OLLHS,
  ],
  [
    [
      2,
      {
        [_hH]: _xadm,
      },
    ],
    [
      0,
      {
        [_hH]: _ar,
      },
    ],
    [
      0,
      {
        [_hH]: _xae,
      },
    ],
    [
      0,
      {
        [_hH]: _xar,
      },
    ],
    [
      0,
      {
        [_hH]: _xaas,
      },
    ],
    [
      4,
      {
        [_hH]: _LM_,
      },
    ],
    [
      1,
      {
        [_hH]: _CL__,
      },
    ],
    [
      0,
      {
        [_hH]: _xacc,
      },
    ],
    [
      0,
      {
        [_hH]: _xacc_,
      },
    ],
    [
      0,
      {
        [_hH]: _xacc__,
      },
    ],
    [
      0,
      {
        [_hH]: _xacs,
      },
    ],
    [
      0,
      {
        [_hH]: _xacs_,
      },
    ],
    [
      0,
      {
        [_hH]: _xact,
      },
    ],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
    [
      1,
      {
        [_hH]: _xamm,
      },
    ],
    [
      0,
      {
        [_hH]: _xavi,
      },
    ],
    [
      0,
      {
        [_hH]: _CC_,
      },
    ],
    [
      0,
      {
        [_hH]: _CD_,
      },
    ],
    [
      0,
      {
        [_hH]: _CE_,
      },
    ],
    [
      0,
      {
        [_hH]: _CL_,
      },
    ],
    [
      0,
      {
        [_hH]: _CT_,
      },
    ],
    [
      0,
      {
        [_hH]: _CR_,
      },
    ],
    [
      4,
      {
        [_hH]: _Ex,
      },
    ],
    [
      0,
      {
        [_hH]: _ES,
      },
    ],
    [
      0,
      {
        [_hH]: _xawrl,
      },
    ],
    [
      0,
      {
        [_hH]: _xasse,
      },
    ],
    [
      128 | 0,
      {
        [_hPH]: _xam,
      },
    ],
    [
      0,
      {
        [_hH]: _xasseca,
      },
    ],
    [
      0,
      {
        [_hH]: _xasseckM,
      },
    ],
    [
      () => SSEKMSKeyId,
      {
        [_hH]: _xasseakki,
      },
    ],
    [
      2,
      {
        [_hH]: _xassebke,
      },
    ],
    [
      0,
      {
        [_hH]: _xasc,
      },
    ],
    [
      0,
      {
        [_hH]: _xarc,
      },
    ],
    [
      0,
      {
        [_hH]: _xars,
      },
    ],
    [
      1,
      {
        [_hH]: _xampc,
      },
    ],
    [
      1,
      {
        [_hH]: _xatc,
      },
    ],
    [
      0,
      {
        [_hH]: _xaolm,
      },
    ],
    [
      5,
      {
        [_hH]: _xaolrud,
      },
    ],
    [
      0,
      {
        [_hH]: _xaollh,
      },
    ],
  ]
);
export var HeadObjectRequest = struct(
  n0,
  _HOR,
  0,
  [
    _B,
    _IM,
    _IMSf,
    _INM,
    _IUS,
    _K,
    _Ra,
    _RCC,
    _RCD,
    _RCE,
    _RCL,
    _RCT,
    _RE,
    _VI,
    _SSECA,
    _SSECK,
    _SSECKMD,
    _RP,
    _PN,
    _EBO,
    _CMh,
  ],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _IM_,
      },
    ],
    [
      4,
      {
        [_hH]: _IMS_,
      },
    ],
    [
      0,
      {
        [_hH]: _INM_,
      },
    ],
    [
      4,
      {
        [_hH]: _IUS_,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_hH]: _Ra,
      },
    ],
    [
      0,
      {
        [_hQ]: _rcc,
      },
    ],
    [
      0,
      {
        [_hQ]: _rcd,
      },
    ],
    [
      0,
      {
        [_hQ]: _rce,
      },
    ],
    [
      0,
      {
        [_hQ]: _rcl,
      },
    ],
    [
      0,
      {
        [_hQ]: _rct,
      },
    ],
    [
      6,
      {
        [_hQ]: _re,
      },
    ],
    [
      0,
      {
        [_hQ]: _vI,
      },
    ],
    [
      0,
      {
        [_hH]: _xasseca,
      },
    ],
    [
      () => SSECustomerKey,
      {
        [_hH]: _xasseck,
      },
    ],
    [
      0,
      {
        [_hH]: _xasseckM,
      },
    ],
    [
      0,
      {
        [_hH]: _xarp,
      },
    ],
    [
      1,
      {
        [_hQ]: _pN,
      },
    ],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
    [
      0,
      {
        [_hH]: _xacm,
      },
    ],
  ]
);
export var InvalidObjectState = error(
  n0,
  _IOS,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_SC, _AT],
  [0, 0],

  __InvalidObjectState
);
export var InvalidRequest = error(
  n0,
  _IR,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [],
  [],

  __InvalidRequest
);
export var InvalidWriteOffset = error(
  n0,
  _IWO,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [],
  [],

  __InvalidWriteOffset
);
export var ListPartsOutput = struct(
  n0,
  _LPO,
  {
    [_xN]: _LPR,
  },
  [_AD, _ARI, _B, _K, _UI, _PNM, _NPNM, _MP, _IT, _Pa, _In, _O, _SC, _RC, _CA, _CT],
  [
    [
      4,
      {
        [_hH]: _xaad,
      },
    ],
    [
      0,
      {
        [_hH]: _xaari,
      },
    ],
    0,
    0,
    0,
    0,
    0,
    1,
    2,
    [
      () => Parts,
      {
        [_xN]: _Par,
        [_xF]: 1,
      },
    ],
    () => Initiator,
    () => Owner,
    0,
    [
      0,
      {
        [_hH]: _xarc,
      },
    ],
    0,
    0,
  ]
);
export var ListPartsRequest = struct(
  n0,
  _LPRi,
  0,
  [_B, _K, _MP, _PNM, _UI, _RP, _EBO, _SSECA, _SSECK, _SSECKMD],
  [
    [0, 1],
    [0, 1],
    [
      1,
      {
        [_hQ]: _mp,
      },
    ],
    [
      0,
      {
        [_hQ]: _pnm,
      },
    ],
    [
      0,
      {
        [_hQ]: _uI,
      },
    ],
    [
      0,
      {
        [_hH]: _xarp,
      },
    ],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
    [
      0,
      {
        [_hH]: _xasseca,
      },
    ],
    [
      () => SSECustomerKey,
      {
        [_hH]: _xasseck,
      },
    ],
    [
      0,
      {
        [_hH]: _xasseckM,
      },
    ],
  ]
);
export var ObjectNotInActiveTierError = error(
  n0,
  _ONIATE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [],
  [],

  __ObjectNotInActiveTierError
);
export var ObjectPart = struct(n0, _OPb, 0, [_PN, _Si, _CCRC, _CCRCC, _CCRCNVME, _CSHA, _CSHAh], [1, 1, 0, 0, 0, 0, 0]);
export var Part = struct(
  n0,
  _Par,
  0,
  [_PN, _LM, _ET, _Si, _CCRC, _CCRCC, _CCRCNVME, _CSHA, _CSHAh],
  [1, 4, 0, 1, 0, 0, 0, 0, 0]
);
export var Progress = struct(n0, _Pr, 0, [_BS, _BP, _BRy], [1, 1, 1]);
export var ProgressEvent = struct(
  n0,
  _PE,
  0,
  [_Det],
  [
    [
      () => Progress,
      {
        [_eP]: 1,
      },
    ],
  ]
);
export var PutObjectOutput = struct(
  n0,
  _POO,
  0,
  [
    _E,
    _ET,
    _CCRC,
    _CCRCC,
    _CCRCNVME,
    _CSHA,
    _CSHAh,
    _CT,
    _SSE,
    _VI,
    _SSECA,
    _SSECKMD,
    _SSEKMSKI,
    _SSEKMSEC,
    _BKE,
    _Si,
    _RC,
  ],
  [
    [
      0,
      {
        [_hH]: _xae,
      },
    ],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
    [
      0,
      {
        [_hH]: _xacc,
      },
    ],
    [
      0,
      {
        [_hH]: _xacc_,
      },
    ],
    [
      0,
      {
        [_hH]: _xacc__,
      },
    ],
    [
      0,
      {
        [_hH]: _xacs,
      },
    ],
    [
      0,
      {
        [_hH]: _xacs_,
      },
    ],
    [
      0,
      {
        [_hH]: _xact,
      },
    ],
    [
      0,
      {
        [_hH]: _xasse,
      },
    ],
    [
      0,
      {
        [_hH]: _xavi,
      },
    ],
    [
      0,
      {
        [_hH]: _xasseca,
      },
    ],
    [
      0,
      {
        [_hH]: _xasseckM,
      },
    ],
    [
      () => SSEKMSKeyId,
      {
        [_hH]: _xasseakki,
      },
    ],
    [
      () => SSEKMSEncryptionContext,
      {
        [_hH]: _xassec,
      },
    ],
    [
      2,
      {
        [_hH]: _xassebke,
      },
    ],
    [
      1,
      {
        [_hH]: _xaos,
      },
    ],
    [
      0,
      {
        [_hH]: _xarc,
      },
    ],
  ]
);
export var PutObjectRequest = struct(
  n0,
  _POR,
  0,
  [
    _ACL_,
    _Bo,
    _B,
    _CC,
    _CDo,
    _CEo,
    _CL,
    _CLo,
    _CMD,
    _CTo,
    _CA,
    _CCRC,
    _CCRCC,
    _CCRCNVME,
    _CSHA,
    _CSHAh,
    _Ex,
    _IM,
    _INM,
    _GFC,
    _GR,
    _GRACP,
    _GWACP,
    _K,
    _WOB,
    _M,
    _SSE,
    _SC,
    _WRL,
    _SSECA,
    _SSECK,
    _SSECKMD,
    _SSEKMSKI,
    _SSEKMSEC,
    _BKE,
    _RP,
    _Tag,
    _OLM,
    _OLRUD,
    _OLLHS,
    _EBO,
  ],
  [
    [
      0,
      {
        [_hH]: _xaa,
      },
    ],
    [() => StreamingBlob, 16],
    [0, 1],
    [
      0,
      {
        [_hH]: _CC_,
      },
    ],
    [
      0,
      {
        [_hH]: _CD_,
      },
    ],
    [
      0,
      {
        [_hH]: _CE_,
      },
    ],
    [
      0,
      {
        [_hH]: _CL_,
      },
    ],
    [
      1,
      {
        [_hH]: _CL__,
      },
    ],
    [
      0,
      {
        [_hH]: _CM,
      },
    ],
    [
      0,
      {
        [_hH]: _CT_,
      },
    ],
    [
      0,
      {
        [_hH]: _xasca,
      },
    ],
    [
      0,
      {
        [_hH]: _xacc,
      },
    ],
    [
      0,
      {
        [_hH]: _xacc_,
      },
    ],
    [
      0,
      {
        [_hH]: _xacc__,
      },
    ],
    [
      0,
      {
        [_hH]: _xacs,
      },
    ],
    [
      0,
      {
        [_hH]: _xacs_,
      },
    ],
    [
      4,
      {
        [_hH]: _Ex,
      },
    ],
    [
      0,
      {
        [_hH]: _IM_,
      },
    ],
    [
      0,
      {
        [_hH]: _INM_,
      },
    ],
    [
      0,
      {
        [_hH]: _xagfc,
      },
    ],
    [
      0,
      {
        [_hH]: _xagr,
      },
    ],
    [
      0,
      {
        [_hH]: _xagra,
      },
    ],
    [
      0,
      {
        [_hH]: _xagwa,
      },
    ],
    [0, 1],
    [
      1,
      {
        [_hH]: _xawob,
      },
    ],
    [
      128 | 0,
      {
        [_hPH]: _xam,
      },
    ],
    [
      0,
      {
        [_hH]: _xasse,
      },
    ],
    [
      0,
      {
        [_hH]: _xasc,
      },
    ],
    [
      0,
      {
        [_hH]: _xawrl,
      },
    ],
    [
      0,
      {
        [_hH]: _xasseca,
      },
    ],
    [
      () => SSECustomerKey,
      {
        [_hH]: _xasseck,
      },
    ],
    [
      0,
      {
        [_hH]: _xasseckM,
      },
    ],
    [
      () => SSEKMSKeyId,
      {
        [_hH]: _xasseakki,
      },
    ],
    [
      () => SSEKMSEncryptionContext,
      {
        [_hH]: _xassec,
      },
    ],
    [
      2,
      {
        [_hH]: _xassebke,
      },
    ],
    [
      0,
      {
        [_hH]: _xarp,
      },
    ],
    [
      0,
      {
        [_hH]: _xat,
      },
    ],
    [
      0,
      {
        [_hH]: _xaolm,
      },
    ],
    [
      5,
      {
        [_hH]: _xaolrud,
      },
    ],
    [
      0,
      {
        [_hH]: _xaollh,
      },
    ],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
  ]
);
export var RecordsEvent = struct(
  n0,
  _REec,
  0,
  [_Payl],
  [
    [
      21,
      {
        [_eP]: 1,
      },
    ],
  ]
);
export var RequestProgress = struct(n0, _RPe, 0, [_Ena], [2]);
export var ScanRange = struct(n0, _SR, 0, [_St, _End], [1, 1]);
export var SelectObjectContentOutput = struct(n0, _SOCO, 0, [_Payl], [[() => SelectObjectContentEventStream, 16]]);
export var SelectObjectContentRequest = struct(
  n0,
  _SOCR,
  0,
  [_B, _K, _SSECA, _SSECK, _SSECKMD, _Exp, _ETx, _RPe, _IS, _OSu, _SR, _EBO],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hH]: _xasseca,
      },
    ],
    [
      () => SSECustomerKey,
      {
        [_hH]: _xasseck,
      },
    ],
    [
      0,
      {
        [_hH]: _xasseckM,
      },
    ],
    0,
    0,
    () => RequestProgress,
    () => InputSerialization,
    () => OutputSerialization,
    () => ScanRange,
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
  ]
);
export var Stats = struct(n0, _Sta, 0, [_BS, _BP, _BRy], [1, 1, 1]);
export var StatsEvent = struct(
  n0,
  _SE,
  0,
  [_Det],
  [
    [
      () => Stats,
      {
        [_eP]: 1,
      },
    ],
  ]
);
export var TooManyParts = error(
  n0,
  _TMP,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [],
  [],

  __TooManyParts
);
export var UploadPartCopyOutput = struct(
  n0,
  _UPCO,
  0,
  [_CSVI, _CPR, _SSE, _SSECA, _SSECKMD, _SSEKMSKI, _BKE, _RC],
  [
    [
      0,
      {
        [_hH]: _xacsvi,
      },
    ],
    [() => CopyPartResult, 16],
    [
      0,
      {
        [_hH]: _xasse,
      },
    ],
    [
      0,
      {
        [_hH]: _xasseca,
      },
    ],
    [
      0,
      {
        [_hH]: _xasseckM,
      },
    ],
    [
      () => SSEKMSKeyId,
      {
        [_hH]: _xasseakki,
      },
    ],
    [
      2,
      {
        [_hH]: _xassebke,
      },
    ],
    [
      0,
      {
        [_hH]: _xarc,
      },
    ],
  ]
);
export var UploadPartCopyRequest = struct(
  n0,
  _UPCR,
  0,
  [
    _B,
    _CS,
    _CSIM,
    _CSIMS,
    _CSINM,
    _CSIUS,
    _CSRo,
    _K,
    _PN,
    _UI,
    _SSECA,
    _SSECK,
    _SSECKMD,
    _CSSSECA,
    _CSSSECK,
    _CSSSECKMD,
    _RP,
    _EBO,
    _ESBO,
  ],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _xacs__,
      },
    ],
    [
      0,
      {
        [_hH]: _xacsim,
      },
    ],
    [
      4,
      {
        [_hH]: _xacsims,
      },
    ],
    [
      0,
      {
        [_hH]: _xacsinm,
      },
    ],
    [
      4,
      {
        [_hH]: _xacsius,
      },
    ],
    [
      0,
      {
        [_hH]: _xacsr,
      },
    ],
    [0, 1],
    [
      1,
      {
        [_hQ]: _pN,
      },
    ],
    [
      0,
      {
        [_hQ]: _uI,
      },
    ],
    [
      0,
      {
        [_hH]: _xasseca,
      },
    ],
    [
      () => SSECustomerKey,
      {
        [_hH]: _xasseck,
      },
    ],
    [
      0,
      {
        [_hH]: _xasseckM,
      },
    ],
    [
      0,
      {
        [_hH]: _xacssseca,
      },
    ],
    [
      () => CopySourceSSECustomerKey,
      {
        [_hH]: _xacssseck,
      },
    ],
    [
      0,
      {
        [_hH]: _xacssseckM,
      },
    ],
    [
      0,
      {
        [_hH]: _xarp,
      },
    ],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
    [
      0,
      {
        [_hH]: _xasebo,
      },
    ],
  ]
);
export var UploadPartOutput = struct(
  n0,
  _UPO,
  0,
  [_SSE, _ET, _CCRC, _CCRCC, _CCRCNVME, _CSHA, _CSHAh, _SSECA, _SSECKMD, _SSEKMSKI, _BKE, _RC],
  [
    [
      0,
      {
        [_hH]: _xasse,
      },
    ],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
    [
      0,
      {
        [_hH]: _xacc,
      },
    ],
    [
      0,
      {
        [_hH]: _xacc_,
      },
    ],
    [
      0,
      {
        [_hH]: _xacc__,
      },
    ],
    [
      0,
      {
        [_hH]: _xacs,
      },
    ],
    [
      0,
      {
        [_hH]: _xacs_,
      },
    ],
    [
      0,
      {
        [_hH]: _xasseca,
      },
    ],
    [
      0,
      {
        [_hH]: _xasseckM,
      },
    ],
    [
      () => SSEKMSKeyId,
      {
        [_hH]: _xasseakki,
      },
    ],
    [
      2,
      {
        [_hH]: _xassebke,
      },
    ],
    [
      0,
      {
        [_hH]: _xarc,
      },
    ],
  ]
);
export var UploadPartRequest = struct(
  n0,
  _UPR,
  0,
  [
    _Bo,
    _B,
    _CLo,
    _CMD,
    _CA,
    _CCRC,
    _CCRCC,
    _CCRCNVME,
    _CSHA,
    _CSHAh,
    _K,
    _PN,
    _UI,
    _SSECA,
    _SSECK,
    _SSECKMD,
    _RP,
    _EBO,
  ],
  [
    [() => StreamingBlob, 16],
    [0, 1],
    [
      1,
      {
        [_hH]: _CL__,
      },
    ],
    [
      0,
      {
        [_hH]: _CM,
      },
    ],
    [
      0,
      {
        [_hH]: _xasca,
      },
    ],
    [
      0,
      {
        [_hH]: _xacc,
      },
    ],
    [
      0,
      {
        [_hH]: _xacc_,
      },
    ],
    [
      0,
      {
        [_hH]: _xacc__,
      },
    ],
    [
      0,
      {
        [_hH]: _xacs,
      },
    ],
    [
      0,
      {
        [_hH]: _xacs_,
      },
    ],
    [0, 1],
    [
      1,
      {
        [_hQ]: _pN,
      },
    ],
    [
      0,
      {
        [_hQ]: _uI,
      },
    ],
    [
      0,
      {
        [_hH]: _xasseca,
      },
    ],
    [
      () => SSECustomerKey,
      {
        [_hH]: _xasseck,
      },
    ],
    [
      0,
      {
        [_hH]: _xasseckM,
      },
    ],
    [
      0,
      {
        [_hH]: _xarp,
      },
    ],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
  ]
);
export var CompletedPartList = list(n0, _CPLo, 0, () => CompletedPart);
export var ObjectAttributesList = 64 | 0;

export var Parts = list(n0, _Pa, 0, () => Part);
export var PartsList = list(n0, _PL, 0, () => ObjectPart);
export var SelectObjectContentEventStream = uni(
  n0,
  _SOCES,
  {
    [_s]: 1,
  },
  [_Rec, _Sta, _Pr, _Cont, _End],
  [[() => RecordsEvent, 0], [() => StatsEvent, 0], [() => ProgressEvent, 0], () => ContinuationEvent, () => EndEvent]
);
export var CompleteMultipartUpload = op(
  n0,
  _CMUo,
  {
    [_h]: ["POST", "/{Key+}", 200],
  },
  () => CompleteMultipartUploadRequest,
  () => CompleteMultipartUploadOutput
);
export var CopyObject = op(
  n0,
  _CO,
  {
    [_h]: ["PUT", "/{Key+}?x-id=CopyObject", 200],
  },
  () => CopyObjectRequest,
  () => CopyObjectOutput
);
export var CreateMultipartUpload = op(
  n0,
  _CMUr,
  {
    [_h]: ["POST", "/{Key+}?uploads", 200],
  },
  () => CreateMultipartUploadRequest,
  () => CreateMultipartUploadOutput
);
export var GetObject = op(
  n0,
  _GO,
  {
    [_h]: ["GET", "/{Key+}?x-id=GetObject", 200],
  },
  () => GetObjectRequest,
  () => GetObjectOutput
);
export var GetObjectAttributes = op(
  n0,
  _GOAe,
  {
    [_h]: ["GET", "/{Key+}?attributes", 200],
  },
  () => GetObjectAttributesRequest,
  () => GetObjectAttributesOutput
);
export var HeadObject = op(
  n0,
  _HO,
  {
    [_h]: ["HEAD", "/{Key+}", 200],
  },
  () => HeadObjectRequest,
  () => HeadObjectOutput
);
export var ListParts = op(
  n0,
  _LP,
  {
    [_h]: ["GET", "/{Key+}?x-id=ListParts", 200],
  },
  () => ListPartsRequest,
  () => ListPartsOutput
);
export var PutObject = op(
  n0,
  _PO,
  {
    [_h]: ["PUT", "/{Key+}?x-id=PutObject", 200],
  },
  () => PutObjectRequest,
  () => PutObjectOutput
);
export var SelectObjectContent = op(
  n0,
  _SOC,
  {
    [_h]: ["POST", "/{Key+}?select&select-type=2", 200],
  },
  () => SelectObjectContentRequest,
  () => SelectObjectContentOutput
);
export var UploadPart = op(
  n0,
  _UP,
  {
    [_h]: ["PUT", "/{Key+}?x-id=UploadPart", 200],
  },
  () => UploadPartRequest,
  () => UploadPartOutput
);
export var UploadPartCopy = op(
  n0,
  _UPC,
  {
    [_h]: ["PUT", "/{Key+}?x-id=UploadPartCopy", 200],
  },
  () => UploadPartCopyRequest,
  () => UploadPartCopyOutput
);
