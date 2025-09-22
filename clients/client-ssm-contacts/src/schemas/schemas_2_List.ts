// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AP,
  _AS,
  _C,
  _CA,
  _CC,
  _CCA,
  _CCL,
  _CCo,
  _CI,
  _CIo,
  _CL,
  _Con,
  _CTr,
  _DA,
  _DN,
  _DT,
  _EA,
  _EI,
  _EL,
  _En,
  _Eng,
  _ET,
  _II,
  _LC,
  _LCC,
  _LCCR,
  _LCCRi,
  _LCR,
  _LCRi,
  _LE,
  _LER,
  _LERi,
  _LPBC,
  _LPBCR,
  _LPBCRi,
  _LPBE,
  _LPBER,
  _LPBERi,
  _LPR,
  _LPRi,
  _LPRR,
  _LPRRi,
  _LPRRis,
  _LPRRist,
  _LPRS,
  _LPRSR,
  _LPRSRi,
  _LR,
  _LRO,
  _LROR,
  _LRORi,
  _LRR,
  _LRRi,
  _LRS,
  _LRSR,
  _LRSRi,
  _Me,
  _MR,
  _Na,
  _NCI,
  _NM,
  _NT,
  _O,
  _OCI,
  _OL,
  _PA,
  _Pa,
  _Pag,
  _PI,
  _PL,
  _PO,
  _PR,
  _R,
  _RA,
  _RC,
  _Re,
  _Rec,
  _RIe,
  _RIo,
  _RL,
  _RLe,
  _RNP,
  _RO,
  _Ro,
  _ROI,
  _ROo,
  _Rot,
  _RS,
  _RSo,
  _RST,
  _RTea,
  _RTec,
  _RTece,
  _SD,
  _Se,
  _SI,
  _ST,
  _STe,
  _STt,
  _T,
  _TR,
  _TRV,
  _TZI,
  n0,
} from "./schemas_0";
import { ContactChannelAddress } from "./schemas_1_Contact";
import { RecurrenceSettings } from "./schemas_3_Rotation";

/* eslint no-var: 0 */

export var Contact = struct(n0, _C, 0, [_CA, _A, _DN, _T], [0, 0, 0, 0]);
export var ContactChannel = struct(
  n0,
  _CC,
  0,
  [_CCA, _CA, _Na, _T, _DA, _AS],
  [0, 0, 0, 0, () => ContactChannelAddress, 0]
);
export var Engagement = struct(n0, _En, 0, [_EA, _CA, _Se, _II, _ST, _STt], [0, 0, 0, 0, 4, 4]);
export var ListContactChannelsRequest = struct(n0, _LCCR, 0, [_CI, _NT, _MR], [0, 0, 1]);
export var ListContactChannelsResult = struct(n0, _LCCRi, 0, [_NT, _CCo], [0, () => ContactChannelList]);
export var ListContactsRequest = struct(n0, _LCR, 0, [_NT, _MR, _AP, _T], [0, 1, 0, 0]);
export var ListContactsResult = struct(n0, _LCRi, 0, [_NT, _Con], [0, () => ContactsList]);
export var ListEngagementsRequest = struct(n0, _LER, 0, [_NT, _MR, _II, _TRV], [0, 1, 0, () => TimeRange]);
export var ListEngagementsResult = struct(n0, _LERi, 0, [_NT, _Eng], [0, () => EngagementsList]);
export var ListPageReceiptsRequest = struct(n0, _LPRR, 0, [_PI, _NT, _MR], [0, 0, 1]);
export var ListPageReceiptsResult = struct(n0, _LPRRi, 0, [_NT, _Re], [0, () => ReceiptsList]);
export var ListPageResolutionsRequest = struct(n0, _LPRRis, 0, [_NT, _PI], [0, 0]);
export var ListPageResolutionsResult = struct(n0, _LPRRist, 0, [_NT, _PR], [0, () => ResolutionList]);
export var ListPagesByContactRequest = struct(n0, _LPBCR, 0, [_CI, _NT, _MR], [0, 0, 1]);
export var ListPagesByContactResult = struct(n0, _LPBCRi, 0, [_NT, _Pa], [0, () => PagesList]);
export var ListPagesByEngagementRequest = struct(n0, _LPBER, 0, [_EI, _NT, _MR], [0, 0, 1]);
export var ListPagesByEngagementResult = struct(n0, _LPBERi, 0, [_NT, _Pa], [0, () => PagesList]);
export var ListPreviewRotationShiftsRequest = struct(
  n0,
  _LPRSR,
  0,
  [_RST, _ST, _ET, _Me, _TZI, _R, _O, _NT, _MR],
  [4, 4, 4, 64 | 0, 0, () => RecurrenceSettings, () => OverrideList, 0, 1]
);
export var ListPreviewRotationShiftsResult = struct(n0, _LPRSRi, 0, [_RS, _NT], [() => RotationShifts, 0]);
export var ListRotationOverridesRequest = struct(n0, _LROR, 0, [_RIo, _ST, _ET, _NT, _MR], [0, 4, 4, 0, 1]);
export var ListRotationOverridesResult = struct(n0, _LRORi, 0, [_RO, _NT], [() => RotationOverrides, 0]);
export var ListRotationShiftsRequest = struct(n0, _LRSR, 0, [_RIo, _ST, _ET, _NT, _MR], [0, 4, 4, 0, 1]);
export var ListRotationShiftsResult = struct(n0, _LRSRi, 0, [_RS, _NT], [() => RotationShifts, 0]);
export var ListRotationsRequest = struct(n0, _LRR, 0, [_RNP, _NT, _MR], [0, 0, 1]);
export var ListRotationsResult = struct(n0, _LRRi, 0, [_NT, _Ro], [0, () => Rotations]);
export var Page = struct(n0, _Pag, 0, [_PA, _EA, _CA, _Se, _II, _STe, _DT, _RTea], [0, 0, 0, 0, 0, 4, 4, 4]);
export var PreviewOverride = struct(n0, _PO, 0, [_NM, _ST, _ET], [64 | 0, 4, 4]);
export var Receipt = struct(n0, _Rec, 0, [_CCA, _RTec, _RIe, _RTece], [0, 0, 0, 4]);
export var ResolutionContact = struct(n0, _RC, 0, [_CA, _T, _SI], [0, 0, 1]);
export var Rotation = struct(
  n0,
  _Rot,
  0,
  [_RA, _Na, _CIo, _ST, _TZI, _R],
  [0, 0, 64 | 0, 4, 0, () => RecurrenceSettings]
);
export var RotationOverride = struct(n0, _ROo, 0, [_ROI, _NCI, _ST, _ET, _CTr], [0, 64 | 0, 4, 4, 4]);
export var RotationShift = struct(n0, _RSo, 0, [_CIo, _ST, _ET, _T, _SD], [64 | 0, 4, 4, 0, () => ShiftDetails]);
export var ShiftDetails = struct(n0, _SD, 0, [_OCI], [64 | 0]);
export var TimeRange = struct(n0, _TR, 0, [_ST, _ET], [4, 4]);
export var ContactChannelList = list(n0, _CCL, 0, () => ContactChannel);
export var ContactsList = list(n0, _CL, 0, () => Contact);
export var EngagementsList = list(n0, _EL, 0, () => Engagement);
export var OverrideList = list(n0, _OL, 0, () => PreviewOverride);
export var PagesList = list(n0, _PL, 0, () => Page);
export var ReceiptsList = list(n0, _RL, 0, () => Receipt);
export var ResolutionList = list(n0, _RLe, 0, () => ResolutionContact);
export var RotationOverridePreviewMemberList = 64 | 0;

export var RotationOverrides = list(n0, _RO, 0, () => RotationOverride);
export var RotationPreviewMemberList = 64 | 0;

export var Rotations = list(n0, _Ro, 0, () => Rotation);
export var RotationShifts = list(n0, _RS, 0, () => RotationShift);
export var ListContactChannels = op(
  n0,
  _LCC,
  0,
  () => ListContactChannelsRequest,
  () => ListContactChannelsResult
);
export var ListContacts = op(
  n0,
  _LC,
  0,
  () => ListContactsRequest,
  () => ListContactsResult
);
export var ListEngagements = op(
  n0,
  _LE,
  0,
  () => ListEngagementsRequest,
  () => ListEngagementsResult
);
export var ListPageReceipts = op(
  n0,
  _LPR,
  0,
  () => ListPageReceiptsRequest,
  () => ListPageReceiptsResult
);
export var ListPageResolutions = op(
  n0,
  _LPRi,
  0,
  () => ListPageResolutionsRequest,
  () => ListPageResolutionsResult
);
export var ListPagesByContact = op(
  n0,
  _LPBC,
  0,
  () => ListPagesByContactRequest,
  () => ListPagesByContactResult
);
export var ListPagesByEngagement = op(
  n0,
  _LPBE,
  0,
  () => ListPagesByEngagementRequest,
  () => ListPagesByEngagementResult
);
export var ListPreviewRotationShifts = op(
  n0,
  _LPRS,
  0,
  () => ListPreviewRotationShiftsRequest,
  () => ListPreviewRotationShiftsResult
);
export var ListRotationOverrides = op(
  n0,
  _LRO,
  0,
  () => ListRotationOverridesRequest,
  () => ListRotationOverridesResult
);
export var ListRotations = op(
  n0,
  _LR,
  0,
  () => ListRotationsRequest,
  () => ListRotationsResult
);
export var ListRotationShifts = op(
  n0,
  _LRS,
  0,
  () => ListRotationShiftsRequest,
  () => ListRotationShiftsResult
);
