// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AA,
  _AP,
  _Bc,
  _BL,
  _BLa,
  _Bs,
  _BSI,
  _C,
  _CC,
  _CLd,
  _CLI,
  _CN,
  _CNL,
  _CNO,
  _CO,
  _CP,
  _CT,
  _CTA,
  _CTa,
  _Ea,
  _EC,
  _G,
  _GC,
  _GIl,
  _GJP,
  _GLIs,
  _GLs,
  _GN,
  _Gn,
  _GNL,
  _GNO,
  _GO,
  _GPE,
  _GPER,
  _GPERe,
  _GTA,
  _h,
  _IA,
  _Ip,
  _L,
  _La,
  _LLI,
  _LLt,
  _LN,
  _LNL,
  _LNO,
  _LO,
  _LTA,
  _MA,
  _Mc,
  _Mn,
  _NC,
  _NI,
  _Pa,
  _Pc,
  _PL,
  _PO,
  _PP,
  _Ps,
  _RL,
  _Rs,
  _Rsc,
  _Rsr,
  _Rss,
  _RZ,
  _SI,
  _Tac,
  _Td,
  _Ti,
  _TLd,
  _TLI,
  _TNd,
  _TNL,
  _TNO,
  _TO,
  _TTA,
  _Ua,
  _Uar,
  _UC,
  _UDS,
  _W,
  _WFAP,
  _WFAPi,
  _WL,
  _WLI,
  _WN,
  _WNL,
  _WNO,
  _WO,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CdmaLocalId = struct(n0, _CLI, 0, [_PO, _CC], [1, 1]);
export var CdmaNmrObj = struct(n0, _CNO, 0, [_PO, _CC, _PP, _BSI], [1, 1, 1, 1]);
export var CdmaObj = struct(
  n0,
  _CO,
  0,
  [_SI, _NI, _BSI, _RZ, _CLI, _PP, _BL, _BLa, _CN],
  [1, 1, 1, 1, () => CdmaLocalId, 1, 1, 1, () => CdmaNmrList]
);
export var CellTowers = struct(
  n0,
  _CT,
  0,
  [_G, _W, _Td, _L, _C],
  [() => GsmList, () => WcdmaList, () => TdscdmaList, () => LteList, () => CdmaList]
);
export var GetPositionEstimateRequest = struct(
  n0,
  _GPER,
  0,
  [_WFAP, _CT, _Ip, _Gn, _Ti],
  [() => WiFiAccessPoints, () => CellTowers, () => Ip, () => Gnss, 4]
);
export var GetPositionEstimateResponse = struct(n0, _GPERe, 0, [_GJP], [[21, 16]]);
export var GlobalIdentity = struct(n0, _GIl, 0, [_La, _GC], [1, 1]);
export var Gnss = struct(n0, _Gn, 0, [_Pa, _CTa, _CTA, _AP, _AA, _UDS], [0, 1, 1, 64 | 1, 1, 2]);
export var GsmLocalId = struct(n0, _GLIs, 0, [_Bs, _Bc], [1, 1]);
export var GsmNmrObj = struct(n0, _GNO, 0, [_Bs, _Bc, _RL, _GIl], [1, 1, 1, () => GlobalIdentity]);
export var GsmObj = struct(
  n0,
  _GO,
  0,
  [_Mc, _Mn, _La, _GC, _GLIs, _GTA, _RL, _GN],
  [1, 1, 1, 1, () => GsmLocalId, 1, 1, () => GsmNmrList]
);
export var Ip = struct(n0, _Ip, 0, [_IA], [0]);
export var LteLocalId = struct(n0, _LLI, 0, [_Pc, _Ea], [1, 1]);
export var LteNmrObj = struct(n0, _LNO, 0, [_Pc, _Ea, _EC, _Rs, _Rsr], [1, 1, 1, 1, 1]);
export var LteObj = struct(
  n0,
  _LO,
  0,
  [_Mc, _Mn, _EC, _Tac, _LLI, _LTA, _Rs, _Rsr, _NC, _LN],
  [1, 1, 1, 1, () => LteLocalId, 1, 1, 1, 2, () => LteNmrList]
);
export var TdscdmaLocalId = struct(n0, _TLI, 0, [_Ua, _CP], [1, 1]);
export var TdscdmaNmrObj = struct(n0, _TNO, 0, [_Ua, _CP, _UC, _Rsc, _PL], [1, 1, 1, 1, 1]);
export var TdscdmaObj = struct(
  n0,
  _TO,
  0,
  [_Mc, _Mn, _La, _UC, _TLI, _TTA, _Rsc, _PL, _TNd],
  [1, 1, 1, 1, () => TdscdmaLocalId, 1, 1, 1, () => TdscdmaNmrList]
);
export var WcdmaLocalId = struct(n0, _WLI, 0, [_Uar, _Ps], [1, 1]);
export var WcdmaNmrObj = struct(n0, _WNO, 0, [_Uar, _Ps, _UC, _Rsc, _PL], [1, 1, 1, 1, 1]);
export var WcdmaObj = struct(
  n0,
  _WO,
  0,
  [_Mc, _Mn, _La, _UC, _WLI, _Rsc, _PL, _WN],
  [1, 1, 1, 1, () => WcdmaLocalId, 1, 1, () => WcdmaNmrList]
);
export var WiFiAccessPoint = struct(n0, _WFAPi, 0, [_MA, _Rss], [0, 1]);
export var AssistPosition = 64 | 1;

export var CdmaList = list(n0, _CLd, 0, () => CdmaObj);
export var CdmaNmrList = list(n0, _CNL, 0, () => CdmaNmrObj);
export var GsmList = list(n0, _GLs, 0, () => GsmObj);
export var GsmNmrList = list(n0, _GNL, 0, () => GsmNmrObj);
export var LteList = list(n0, _LLt, 0, () => LteObj);
export var LteNmrList = list(n0, _LNL, 0, () => LteNmrObj);
export var TdscdmaList = list(n0, _TLd, 0, () => TdscdmaObj);
export var TdscdmaNmrList = list(n0, _TNL, 0, () => TdscdmaNmrObj);
export var WcdmaList = list(n0, _WL, 0, () => WcdmaObj);
export var WcdmaNmrList = list(n0, _WNL, 0, () => WcdmaNmrObj);
export var WiFiAccessPoints = list(n0, _WFAP, 0, () => WiFiAccessPoint);
export var GetPositionEstimate = op(
  n0,
  _GPE,
  {
    [_h]: ["POST", "/position-estimate", 200],
  },
  () => GetPositionEstimateRequest,
  () => GetPositionEstimateResponse
);
