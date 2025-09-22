// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _AC,
  _ac,
  _AI,
  _APNWU,
  _APNWUR,
  _APNWURs,
  _As,
  _ATs,
  _Ca,
  _Ci,
  _ci,
  _CMDO,
  _CMDOR,
  _CMDORr,
  _CN,
  _CNS,
  _Co,
  _co,
  _CPNO,
  _CPNOR,
  _CPNORr,
  _CT,
  _DT,
  _EPN,
  _EPNh,
  _EPNL,
  _FN,
  _fn,
  _FPN,
  _FV,
  _fv,
  _GPN,
  _GPNO,
  _GPNOR,
  _GPNORe,
  _GPNR,
  _GPNRe,
  _h,
  _hQ,
  _IC,
  _IMMS,
  _ISMS,
  _JT,
  _JTS,
  _LPN,
  _LPNO,
  _LPNOR,
  _LPNORi,
  _LPNR,
  _LPNRi,
  _MI,
  _MR,
  _mr,
  _N,
  _NT,
  _nt,
  _OC,
  _OMMS,
  _OPN,
  _OPNL,
  _OPNr,
  _OSMS,
  _PN,
  _PNA,
  _PNAL,
  _PNCh,
  _PNh,
  _PNIh,
  _PNL,
  _PNO,
  _PNOh,
  _PNOI,
  _PNOL,
  _PNT,
  _pnt,
  _PT,
  _pt,
  _RPN,
  _RPNR,
  _RPNRe,
  _S,
  _s,
  _SAPN,
  _SAPNR,
  _SAPNRe,
  _St,
  _st,
  _T,
  _TFP,
  _tfp,
  _TI,
  _TPN,
  _UI,
  _UPN,
  _UPNR,
  _UPNRp,
  _UT,
  _V,
  n0,
} from "./schemas_0";
import { CallingName } from "./schemas_7_Phone";

/* eslint no-var: 0 */

export var E164PhoneNumber = sim(n0, _EPN, 0, 8);
export var JoinTokenString = sim(n0, _JTS, 0, 8);
export var AssociatePhoneNumberWithUserRequest = struct(
  n0,
  _APNWUR,
  0,
  [_AI, _UI, _EPN],
  [
    [0, 1],
    [0, 1],
    [() => E164PhoneNumber, 0],
  ]
);
export var AssociatePhoneNumberWithUserResponse = struct(n0, _APNWURs, 0, [], []);
export var CreateMeetingDialOutRequest = struct(
  n0,
  _CMDOR,
  0,
  [_MI, _FPN, _TPN, _JT],
  [
    [0, 1],
    [() => E164PhoneNumber, 0],
    [() => E164PhoneNumber, 0],
    [() => JoinTokenString, 0],
  ]
);
export var CreateMeetingDialOutResponse = struct(n0, _CMDORr, 0, [_TI], [0]);
export var CreatePhoneNumberOrderRequest = struct(n0, _CPNOR, 0, [_PT, _EPNh], [0, [() => E164PhoneNumberList, 0]]);
export var CreatePhoneNumberOrderResponse = struct(n0, _CPNORr, 0, [_PNO], [[() => PhoneNumberOrder, 0]]);
export var GetPhoneNumberOrderRequest = struct(n0, _GPNOR, 0, [_PNOI], [[0, 1]]);
export var GetPhoneNumberOrderResponse = struct(n0, _GPNORe, 0, [_PNO], [[() => PhoneNumberOrder, 0]]);
export var GetPhoneNumberRequest = struct(n0, _GPNR, 0, [_PNIh], [[0, 1]]);
export var GetPhoneNumberResponse = struct(n0, _GPNRe, 0, [_PN], [[() => PhoneNumber, 0]]);
export var ListPhoneNumberOrdersRequest = struct(
  n0,
  _LPNOR,
  0,
  [_NT, _MR],
  [
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
  ]
);
export var ListPhoneNumberOrdersResponse = struct(n0, _LPNORi, 0, [_PNOh, _NT], [[() => PhoneNumberOrderList, 0], 0]);
export var ListPhoneNumbersRequest = struct(
  n0,
  _LPNR,
  0,
  [_S, _PT, _FN, _FV, _MR, _NT],
  [
    [
      0,
      {
        [_hQ]: _s,
      },
    ],
    [
      0,
      {
        [_hQ]: _pt,
      },
    ],
    [
      0,
      {
        [_hQ]: _fn,
      },
    ],
    [
      0,
      {
        [_hQ]: _fv,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
  ]
);
export var ListPhoneNumbersResponse = struct(n0, _LPNRi, 0, [_PNh, _NT], [[() => PhoneNumberList, 0], 0]);
export var OrderedPhoneNumber = struct(n0, _OPN, 0, [_EPN, _S], [[() => E164PhoneNumber, 0], 0]);
export var PhoneNumber = struct(
  n0,
  _PN,
  0,
  [_PNIh, _EPN, _Co, _T, _PT, _S, _Ca, _As, _CN, _CNS, _CT, _UT, _DT],
  [
    0,
    [() => E164PhoneNumber, 0],
    0,
    0,
    0,
    0,
    () => PhoneNumberCapabilities,
    () => PhoneNumberAssociationList,
    [() => CallingName, 0],
    0,
    5,
    5,
    5,
  ]
);
export var PhoneNumberAssociation = struct(n0, _PNA, 0, [_V, _N, _ATs], [0, 0, 5]);
export var PhoneNumberCapabilities = struct(n0, _PNCh, 0, [_IC, _OC, _ISMS, _OSMS, _IMMS, _OMMS], [2, 2, 2, 2, 2, 2]);
export var PhoneNumberOrder = struct(
  n0,
  _PNO,
  0,
  [_PNOI, _PT, _S, _OPNr, _CT, _UT],
  [0, 0, 0, [() => OrderedPhoneNumberList, 0], 5, 5]
);
export var RestorePhoneNumberRequest = struct(n0, _RPNR, 0, [_PNIh], [[0, 1]]);
export var RestorePhoneNumberResponse = struct(n0, _RPNRe, 0, [_PN], [[() => PhoneNumber, 0]]);
export var SearchAvailablePhoneNumbersRequest = struct(
  n0,
  _SAPNR,
  0,
  [_AC, _Ci, _Co, _St, _TFP, _PNT, _MR, _NT],
  [
    [
      0,
      {
        [_hQ]: _ac,
      },
    ],
    [
      0,
      {
        [_hQ]: _ci,
      },
    ],
    [
      0,
      {
        [_hQ]: _co,
      },
    ],
    [
      0,
      {
        [_hQ]: _st,
      },
    ],
    [
      0,
      {
        [_hQ]: _tfp,
      },
    ],
    [
      0,
      {
        [_hQ]: _pnt,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
  ]
);
export var SearchAvailablePhoneNumbersResponse = struct(
  n0,
  _SAPNRe,
  0,
  [_EPNh, _NT],
  [[() => E164PhoneNumberList, 0], 0]
);
export var UpdatePhoneNumberRequest = struct(n0, _UPNR, 0, [_PNIh, _PT, _CN], [[0, 1], 0, [() => CallingName, 0]]);
export var UpdatePhoneNumberResponse = struct(n0, _UPNRp, 0, [_PN], [[() => PhoneNumber, 0]]);
export var E164PhoneNumberList = list(n0, _EPNL, 0, [() => E164PhoneNumber, 0]);
export var OrderedPhoneNumberList = list(n0, _OPNL, 0, [() => OrderedPhoneNumber, 0]);
export var PhoneNumberAssociationList = list(n0, _PNAL, 0, () => PhoneNumberAssociation);
export var PhoneNumberList = list(n0, _PNL, 0, [() => PhoneNumber, 0]);
export var PhoneNumberOrderList = list(n0, _PNOL, 0, [() => PhoneNumberOrder, 0]);
export var AssociatePhoneNumberWithUser = op(
  n0,
  _APNWU,
  {
    [_h]: ["POST", "/accounts/{AccountId}/users/{UserId}?operation=associate-phone-number", 200],
  },
  () => AssociatePhoneNumberWithUserRequest,
  () => AssociatePhoneNumberWithUserResponse
);
export var CreateMeetingDialOut = op(
  n0,
  _CMDO,
  {
    [_h]: ["POST", "/meetings/{MeetingId}/dial-outs", 201],
  },
  () => CreateMeetingDialOutRequest,
  () => CreateMeetingDialOutResponse
);
export var CreatePhoneNumberOrder = op(
  n0,
  _CPNO,
  {
    [_h]: ["POST", "/phone-number-orders", 201],
  },
  () => CreatePhoneNumberOrderRequest,
  () => CreatePhoneNumberOrderResponse
);
export var GetPhoneNumber = op(
  n0,
  _GPN,
  {
    [_h]: ["GET", "/phone-numbers/{PhoneNumberId}", 200],
  },
  () => GetPhoneNumberRequest,
  () => GetPhoneNumberResponse
);
export var GetPhoneNumberOrder = op(
  n0,
  _GPNO,
  {
    [_h]: ["GET", "/phone-number-orders/{PhoneNumberOrderId}", 200],
  },
  () => GetPhoneNumberOrderRequest,
  () => GetPhoneNumberOrderResponse
);
export var ListPhoneNumberOrders = op(
  n0,
  _LPNO,
  {
    [_h]: ["GET", "/phone-number-orders", 200],
  },
  () => ListPhoneNumberOrdersRequest,
  () => ListPhoneNumberOrdersResponse
);
export var ListPhoneNumbers = op(
  n0,
  _LPN,
  {
    [_h]: ["GET", "/phone-numbers", 200],
  },
  () => ListPhoneNumbersRequest,
  () => ListPhoneNumbersResponse
);
export var RestorePhoneNumber = op(
  n0,
  _RPN,
  {
    [_h]: ["POST", "/phone-numbers/{PhoneNumberId}?operation=restore", 200],
  },
  () => RestorePhoneNumberRequest,
  () => RestorePhoneNumberResponse
);
export var SearchAvailablePhoneNumbers = op(
  n0,
  _SAPN,
  {
    [_h]: ["GET", "/search?type=phone-numbers", 200],
  },
  () => SearchAvailablePhoneNumbersRequest,
  () => SearchAvailablePhoneNumbersResponse
);
export var UpdatePhoneNumber = op(
  n0,
  _UPN,
  {
    [_h]: ["POST", "/phone-numbers/{PhoneNumberId}", 200],
  },
  () => UpdatePhoneNumberRequest,
  () => UpdatePhoneNumberResponse
);
