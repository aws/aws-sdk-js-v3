// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import {
  _A,
  _AC,
  _AF,
  _AFU,
  _AFu,
  _AHU,
  _AI,
  _AL,
  _At,
  _Att,
  _Au,
  _BCAEL,
  _C,
  _c,
  _CAE,
  _CARI,
  _CE,
  _CF,
  _CM,
  _CMR,
  _CMRr,
  _CMWA,
  _CMWAR,
  _CMWARIL,
  _CMWARr,
  _Co,
  _Cod,
  _CRT,
  _E,
  _e,
  _EC,
  _EIU,
  _EM,
  _EMI,
  _ER,
  _EUI,
  _h,
  _hE,
  _JT,
  _JTS,
  _LFA,
  _M,
  _MA,
  _MC,
  _Me,
  _MF,
  _MFC,
  _MHI,
  _MI,
  _MP,
  _MR,
  _MRe,
  _NC,
  _PMI,
  _RI,
  _SDU,
  _SQA,
  _SSU,
  _STA,
  _SU,
  _SVU,
  _T,
  _TCU,
  _TI,
  _V,
  _VF,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_3_Create";

/* eslint no-var: 0 */

export var Arn = sim(n0, _A, 0, 8);
export var ClientRequestToken = sim(n0, _CRT, 0, 8);
export var ExternalMeetingId = sim(n0, _EMI, 0, 8);
export var ExternalUserId = sim(n0, _EUI, 0, 8);
export var JoinTokenString = sim(n0, _JTS, 0, 8);
export var Attendee = struct(
  n0,
  _At,
  0,
  [_EUI, _AI, _JT, _C],
  [[() => ExternalUserId, 0], 0, [() => JoinTokenString, 0], () => AttendeeCapabilities]
);
export var AttendeeCapabilities = struct(n0, _AC, 0, [_Au, _V, _Co], [0, 0, 0]);
export var AttendeeFeatures = struct(n0, _AF, 0, [_MC], [1]);
export var AudioFeatures = struct(n0, _AFu, 0, [_ER], [0]);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_Cod, _M, _RI],
  [0, 0, 0],

  __ConflictException
);
export var ContentFeatures = struct(n0, _CF, 0, [_MR], [0]);
export var CreateAttendeeError = struct(n0, _CAE, 0, [_EUI, _EC, _EM], [[() => ExternalUserId, 0], 0, 0]);
export var CreateAttendeeRequestItem = struct(
  n0,
  _CARI,
  0,
  [_EUI, _C],
  [[() => ExternalUserId, 0], () => AttendeeCapabilities]
);
export var CreateMeetingRequest = struct(
  n0,
  _CMR,
  0,
  [_CRT, _MRe, _MHI, _EMI, _NC, _MF, _PMI, _TI, _T],
  [
    [() => ClientRequestToken, 4],
    0,
    [() => ExternalUserId, 0],
    [() => ExternalMeetingId, 0],
    [() => NotificationsConfiguration, 0],
    () => MeetingFeaturesConfiguration,
    0,
    64 | 0,
    () => TagList,
  ]
);
export var CreateMeetingResponse = struct(n0, _CMRr, 0, [_Me], [[() => Meeting, 0]]);
export var CreateMeetingWithAttendeesRequest = struct(
  n0,
  _CMWAR,
  0,
  [_CRT, _MRe, _MHI, _EMI, _MF, _NC, _Att, _PMI, _TI, _T],
  [
    [() => ClientRequestToken, 4],
    0,
    [() => ExternalUserId, 0],
    [() => ExternalMeetingId, 0],
    () => MeetingFeaturesConfiguration,
    [() => NotificationsConfiguration, 0],
    [() => CreateMeetingWithAttendeesRequestItemList, 0],
    0,
    64 | 0,
    () => TagList,
  ]
);
export var CreateMeetingWithAttendeesResponse = struct(
  n0,
  _CMWARr,
  0,
  [_Me, _Att, _E],
  [
    [() => Meeting, 0],
    [() => AttendeeList, 0],
    [() => BatchCreateAttendeeErrorList, 0],
  ]
);
export var MediaPlacement = struct(
  n0,
  _MP,
  0,
  [_AHU, _AFU, _SU, _TCU, _SDU, _SVU, _SSU, _EIU],
  [0, 0, 0, 0, 0, 0, 0, 0]
);
export var Meeting = struct(
  n0,
  _Me,
  0,
  [_MI, _MHI, _EMI, _MRe, _MP, _MF, _PMI, _TI, _MA],
  [
    0,
    [() => ExternalUserId, 0],
    [() => ExternalMeetingId, 0],
    0,
    () => MediaPlacement,
    () => MeetingFeaturesConfiguration,
    0,
    64 | 0,
    0,
  ]
);
export var MeetingFeaturesConfiguration = struct(
  n0,
  _MFC,
  0,
  [_Au, _V, _Co, _At],
  [() => AudioFeatures, () => VideoFeatures, () => ContentFeatures, () => AttendeeFeatures]
);
export var NotificationsConfiguration = struct(
  n0,
  _NC,
  0,
  [_LFA, _STA, _SQA],
  [
    [() => Arn, 0],
    [() => Arn, 0],
    [() => Arn, 0],
  ]
);
export var VideoFeatures = struct(n0, _VF, 0, [_MR], [0]);
export var Unit = "unit" as const;

export var AttendeeList = list(n0, _AL, 0, [() => Attendee, 0]);
export var BatchCreateAttendeeErrorList = list(n0, _BCAEL, 0, [() => CreateAttendeeError, 0]);
export var CreateMeetingWithAttendeesRequestItemList = list(n0, _CMWARIL, 0, [() => CreateAttendeeRequestItem, 0]);
export var TenantIdList = 64 | 0;

export var CreateMeeting = op(
  n0,
  _CM,
  {
    [_h]: ["POST", "/meetings", 200],
  },
  () => CreateMeetingRequest,
  () => CreateMeetingResponse
);
export var CreateMeetingWithAttendees = op(
  n0,
  _CMWA,
  {
    [_h]: ["POST", "/meetings?operation=create-attendees", 200],
  },
  () => CreateMeetingWithAttendeesRequest,
  () => CreateMeetingWithAttendeesResponse
);
