// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _AM,
  _Ar,
  _As,
  _AT,
  _Ca,
  _CN,
  _CNS,
  _Co,
  _CPNO,
  _CPNOR,
  _CPNORr,
  _CSMAC,
  _CSMACR,
  _CSMACRr,
  _CT,
  _DT,
  _EPN,
  _EPNh,
  _FD,
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
  _ICn,
  _IMMS,
  _ISMS,
  _LPN,
  _LPNO,
  _LPNOR,
  _LPNORi,
  _LPNR,
  _LPNRi,
  _MR,
  _mr,
  _N,
  _NT,
  _nt,
  _OC,
  _OI,
  _OMMS,
  _OPN,
  _OPNL,
  _OPNr,
  _OSMS,
  _OT,
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
  _PT,
  _pt,
  _RPN,
  _RPNR,
  _RPNRe,
  _S,
  _SH,
  _SHM,
  _SMAC,
  _SMACCAM,
  _SMAI,
  _SMAUCAM,
  _st,
  _TI,
  _TPN,
  _Ty,
  _UPN,
  _UPNR,
  _UPNRp,
  _USMAC,
  _USMACR,
  _USMACRp,
  _UT,
  _V,
  E164PhoneNumber,
  n0,
} from "./schemas_0";
import { PhoneNumberName } from "./schemas_12_Phone";
import { SensitiveString } from "./schemas_15_Connector";
import { CallingName } from "./schemas_16_Phone";
import { SensitiveNonEmptyString } from "./schemas_30_Phone";
import { E164PhoneNumberList } from "./schemas_43_Phone";

/* eslint no-var: 0 */

export var CreatePhoneNumberOrderRequest = struct(
  n0,
  _CPNOR,
  0,
  [_PT, _EPNh, _N],
  [0, [() => E164PhoneNumberList, 0], [() => PhoneNumberName, 0]]
);
export var CreatePhoneNumberOrderResponse = struct(n0, _CPNORr, 0, [_PNO], [[() => PhoneNumberOrder, 0]]);
export var CreateSipMediaApplicationCallRequest = struct(
  n0,
  _CSMACR,
  0,
  [_FPN, _TPN, _SMAI, _SH, _AM],
  [
    [() => E164PhoneNumber, 0],
    [() => E164PhoneNumber, 0],
    [0, 1],
    [() => SipHeadersMap, 0],
    [() => SMACreateCallArgumentsMap, 0],
  ]
);
export var CreateSipMediaApplicationCallResponse = struct(n0, _CSMACRr, 0, [_SMAC], [() => SipMediaApplicationCall]);
export var GetPhoneNumberOrderRequest = struct(n0, _GPNOR, 0, [_PNOI], [[0, 1]]);
export var GetPhoneNumberOrderResponse = struct(n0, _GPNORe, 0, [_PNO], [[() => PhoneNumberOrder, 0]]);
export var GetPhoneNumberRequest = struct(n0, _GPNR, 0, [_PNIh], [[() => SensitiveNonEmptyString, 1]]);
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
        [_hQ]: _st,
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
  [_PNIh, _EPN, _Co, _Ty, _PT, _S, _Ca, _As, _CN, _CNS, _CT, _UT, _DT, _OI, _N],
  [
    [() => SensitiveNonEmptyString, 0],
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
    0,
    [() => PhoneNumberName, 0],
  ]
);
export var PhoneNumberAssociation = struct(n0, _PNA, 0, [_V, _N, _AT], [0, 0, 5]);
export var PhoneNumberCapabilities = struct(n0, _PNCh, 0, [_ICn, _OC, _ISMS, _OSMS, _IMMS, _OMMS], [2, 2, 2, 2, 2, 2]);
export var PhoneNumberOrder = struct(
  n0,
  _PNO,
  0,
  [_PNOI, _PT, _S, _OT, _OPNr, _CT, _UT, _FD],
  [0, 0, 0, 0, [() => OrderedPhoneNumberList, 0], 5, 5, 5]
);
export var RestorePhoneNumberRequest = struct(n0, _RPNR, 0, [_PNIh], [[() => SensitiveNonEmptyString, 1]]);
export var RestorePhoneNumberResponse = struct(n0, _RPNRe, 0, [_PN], [[() => PhoneNumber, 0]]);
export var SipMediaApplicationCall = struct(n0, _SMAC, 0, [_TI], [0]);
export var UpdatePhoneNumberRequest = struct(
  n0,
  _UPNR,
  0,
  [_PNIh, _PT, _CN, _N],
  [[() => SensitiveNonEmptyString, 1], 0, [() => CallingName, 0], [() => PhoneNumberName, 0]]
);
export var UpdatePhoneNumberResponse = struct(n0, _UPNRp, 0, [_PN], [[() => PhoneNumber, 0]]);
export var UpdateSipMediaApplicationCallRequest = struct(
  n0,
  _USMACR,
  0,
  [_SMAI, _TI, _Ar],
  [
    [0, 1],
    [0, 1],
    [() => SMAUpdateCallArgumentsMap, 0],
  ]
);
export var UpdateSipMediaApplicationCallResponse = struct(n0, _USMACRp, 0, [_SMAC], [() => SipMediaApplicationCall]);
export var OrderedPhoneNumberList = list(n0, _OPNL, 0, [() => OrderedPhoneNumber, 0]);
export var PhoneNumberAssociationList = list(n0, _PNAL, 0, () => PhoneNumberAssociation);
export var PhoneNumberList = list(n0, _PNL, 0, [() => PhoneNumber, 0]);
export var PhoneNumberOrderList = list(n0, _PNOL, 0, [() => PhoneNumberOrder, 0]);
export var SipHeadersMap = map(n0, _SHM, 0, [() => SensitiveString, 0], [() => SensitiveString, 0]);
export var SMACreateCallArgumentsMap = map(n0, _SMACCAM, 0, [() => SensitiveString, 0], [() => SensitiveString, 0]);
export var SMAUpdateCallArgumentsMap = map(n0, _SMAUCAM, 0, [() => SensitiveString, 0], [() => SensitiveString, 0]);
export var CreatePhoneNumberOrder = op(
  n0,
  _CPNO,
  {
    [_h]: ["POST", "/phone-number-orders", 201],
  },
  () => CreatePhoneNumberOrderRequest,
  () => CreatePhoneNumberOrderResponse
);
export var CreateSipMediaApplicationCall = op(
  n0,
  _CSMAC,
  {
    [_h]: ["POST", "/sip-media-applications/{SipMediaApplicationId}/calls", 201],
  },
  () => CreateSipMediaApplicationCallRequest,
  () => CreateSipMediaApplicationCallResponse
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
export var UpdatePhoneNumber = op(
  n0,
  _UPN,
  {
    [_h]: ["POST", "/phone-numbers/{PhoneNumberId}", 200],
  },
  () => UpdatePhoneNumberRequest,
  () => UpdatePhoneNumberResponse
);
export var UpdateSipMediaApplicationCall = op(
  n0,
  _USMAC,
  {
    [_h]: ["POST", "/sip-media-applications/{SipMediaApplicationId}/calls/{TransactionId}", 202],
  },
  () => UpdateSipMediaApplicationCallRequest,
  () => UpdateSipMediaApplicationCallResponse
);
