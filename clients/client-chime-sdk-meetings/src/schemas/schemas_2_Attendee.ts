// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  NotFoundException as __NotFoundException,
  UnprocessableEntityException as __UnprocessableEntityException,
} from "../models/index";
import {
  _AI,
  _AII,
  _AIL,
  _At,
  _Att,
  _BCA,
  _BCAR,
  _BCARa,
  _BUACE,
  _BUACER,
  _C,
  _c,
  _CA,
  _CAR,
  _CARIL,
  _CARr,
  _CIT,
  _Cod,
  _CRTo,
  _DA,
  _DAR,
  _DM,
  _DMR,
  _E,
  _e,
  _EAI,
  _EPRS,
  _ETMS,
  _ETS,
  _EUI,
  _GA,
  _GAR,
  _GARe,
  _GM,
  _GMR,
  _GMRe,
  _h,
  _hE,
  _hQ,
  _IL,
  _LA,
  _LAR,
  _LARi,
  _LC,
  _LMN,
  _LO,
  _M,
  _Me,
  _MI,
  _mr,
  _MRa,
  _NFE,
  _NT,
  _nt,
  _PET,
  _PL,
  _PRS,
  _R,
  _RI,
  _S,
  _SMT,
  _SMTR,
  _SMTRt,
  _SMTt,
  _TC,
  _Ty,
  _UAC,
  _UACR,
  _UACRp,
  _UEE,
  _VFM,
  _VFN,
  _VFNo,
  _VN,
  _VNo,
  n0,
} from "./schemas_0";
import {
  Attendee,
  AttendeeCapabilities,
  AttendeeList,
  BatchCreateAttendeeErrorList,
  CreateAttendeeRequestItem,
  ExternalUserId,
  Meeting,
  Unit,
} from "./schemas_1_Attendee";

/* eslint no-var: 0 */

export var AttendeeIdItem = struct(n0, _AII, 0, [_AI], [0]);
export var BatchCreateAttendeeRequest = struct(
  n0,
  _BCAR,
  0,
  [_MI, _Att],
  [
    [0, 1],
    [() => CreateAttendeeRequestItemList, 0],
  ]
);
export var BatchCreateAttendeeResponse = struct(
  n0,
  _BCARa,
  0,
  [_Att, _E],
  [
    [() => AttendeeList, 0],
    [() => BatchCreateAttendeeErrorList, 0],
  ]
);
export var BatchUpdateAttendeeCapabilitiesExceptRequest = struct(
  n0,
  _BUACER,
  0,
  [_MI, _EAI, _C],
  [[0, 1], () => AttendeeIdsList, () => AttendeeCapabilities]
);
export var CreateAttendeeRequest = struct(
  n0,
  _CAR,
  0,
  [_MI, _EUI, _C],
  [[0, 1], [() => ExternalUserId, 0], () => AttendeeCapabilities]
);
export var CreateAttendeeResponse = struct(n0, _CARr, 0, [_At], [[() => Attendee, 0]]);
export var DeleteAttendeeRequest = struct(
  n0,
  _DAR,
  0,
  [_MI, _AI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteMeetingRequest = struct(n0, _DMR, 0, [_MI], [[0, 1]]);
export var EngineTranscribeMedicalSettings = struct(n0, _ETMS, 0, [_LC, _S, _Ty, _VN, _R, _CIT], [0, 0, 0, 0, 0, 0]);
export var EngineTranscribeSettings = struct(
  n0,
  _ETS,
  0,
  [_LC, _VFM, _VFN, _VN, _R, _EPRS, _PRS, _CIT, _CRTo, _PET, _LMN, _IL, _LO, _PL, _VNo, _VFNo],
  [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0]
);
export var GetAttendeeRequest = struct(
  n0,
  _GAR,
  0,
  [_MI, _AI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetAttendeeResponse = struct(n0, _GARe, 0, [_At], [[() => Attendee, 0]]);
export var GetMeetingRequest = struct(n0, _GMR, 0, [_MI], [[0, 1]]);
export var GetMeetingResponse = struct(n0, _GMRe, 0, [_Me], [[() => Meeting, 0]]);
export var ListAttendeesRequest = struct(
  n0,
  _LAR,
  0,
  [_MI, _NT, _MRa],
  [
    [0, 1],
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
export var ListAttendeesResponse = struct(n0, _LARi, 0, [_Att, _NT], [[() => AttendeeList, 0], 0]);
export var NotFoundException = error(
  n0,
  _NFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_Cod, _M, _RI],
  [0, 0, 0],

  __NotFoundException
);
export var StartMeetingTranscriptionRequest = struct(
  n0,
  _SMTR,
  0,
  [_MI, _TC],
  [[0, 1], () => TranscriptionConfiguration]
);
export var StopMeetingTranscriptionRequest = struct(n0, _SMTRt, 0, [_MI], [[0, 1]]);
export var TranscriptionConfiguration = struct(
  n0,
  _TC,
  0,
  [_ETS, _ETMS],
  [() => EngineTranscribeSettings, () => EngineTranscribeMedicalSettings]
);
export var UnprocessableEntityException = error(
  n0,
  _UEE,
  {
    [_e]: _c,
    [_hE]: 422,
  },
  [_Cod, _M, _RI],
  [0, 0, 0],

  __UnprocessableEntityException
);
export var UpdateAttendeeCapabilitiesRequest = struct(
  n0,
  _UACR,
  0,
  [_MI, _AI, _C],
  [[0, 1], [0, 1], () => AttendeeCapabilities]
);
export var UpdateAttendeeCapabilitiesResponse = struct(n0, _UACRp, 0, [_At], [[() => Attendee, 0]]);
export var AttendeeIdsList = list(n0, _AIL, 0, () => AttendeeIdItem);
export var CreateAttendeeRequestItemList = list(n0, _CARIL, 0, [() => CreateAttendeeRequestItem, 0]);
export var BatchCreateAttendee = op(
  n0,
  _BCA,
  {
    [_h]: ["POST", "/meetings/{MeetingId}/attendees?operation=batch-create", 200],
  },
  () => BatchCreateAttendeeRequest,
  () => BatchCreateAttendeeResponse
);
export var BatchUpdateAttendeeCapabilitiesExcept = op(
  n0,
  _BUACE,
  {
    [_h]: ["PUT", "/meetings/{MeetingId}/attendees/capabilities?operation=batch-update-except", 200],
  },
  () => BatchUpdateAttendeeCapabilitiesExceptRequest,
  () => Unit
);
export var CreateAttendee = op(
  n0,
  _CA,
  {
    [_h]: ["POST", "/meetings/{MeetingId}/attendees", 200],
  },
  () => CreateAttendeeRequest,
  () => CreateAttendeeResponse
);
export var DeleteAttendee = op(
  n0,
  _DA,
  {
    [_h]: ["DELETE", "/meetings/{MeetingId}/attendees/{AttendeeId}", 204],
  },
  () => DeleteAttendeeRequest,
  () => Unit
);
export var DeleteMeeting = op(
  n0,
  _DM,
  {
    [_h]: ["DELETE", "/meetings/{MeetingId}", 204],
  },
  () => DeleteMeetingRequest,
  () => Unit
);
export var GetAttendee = op(
  n0,
  _GA,
  {
    [_h]: ["GET", "/meetings/{MeetingId}/attendees/{AttendeeId}", 200],
  },
  () => GetAttendeeRequest,
  () => GetAttendeeResponse
);
export var GetMeeting = op(
  n0,
  _GM,
  {
    [_h]: ["GET", "/meetings/{MeetingId}", 200],
  },
  () => GetMeetingRequest,
  () => GetMeetingResponse
);
export var ListAttendees = op(
  n0,
  _LA,
  {
    [_h]: ["GET", "/meetings/{MeetingId}/attendees", 200],
  },
  () => ListAttendeesRequest,
  () => ListAttendeesResponse
);
export var StartMeetingTranscription = op(
  n0,
  _SMT,
  {
    [_h]: ["POST", "/meetings/{MeetingId}/transcription?operation=start", 200],
  },
  () => StartMeetingTranscriptionRequest,
  () => Unit
);
export var StopMeetingTranscription = op(
  n0,
  _SMTt,
  {
    [_h]: ["POST", "/meetings/{MeetingId}/transcription?operation=stop", 200],
  },
  () => StopMeetingTranscriptionRequest,
  () => Unit
);
export var UpdateAttendeeCapabilities = op(
  n0,
  _UAC,
  {
    [_h]: ["PUT", "/meetings/{MeetingId}/attendees/{AttendeeId}/capabilities", 200],
  },
  () => UpdateAttendeeCapabilitiesRequest,
  () => UpdateAttendeeCapabilitiesResponse
);
