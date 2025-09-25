// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _aPA,
  _cAr,
  _cB,
  _ch,
  _CTA,
  _CTAR,
  _DTA,
  _DTAi,
  _en,
  _ETA,
  _ev,
  _GTA,
  _h,
  _LTA,
  _LTAR,
  _n,
  _NS,
  _nS,
  _NSD,
  _NSDo,
  _NSK,
  _nSK,
  _NSKo,
  _NSo,
  _nT,
  _PNS,
  _PNSR,
  _PNSRu,
  _RNS,
  _RNSR,
  _RNSRe,
  _S,
  _s,
  _sD,
  _SDo,
  _sT,
  _STAR,
  _t,
  _tA,
  _tAA,
  _TAD,
  _TADR,
  _TADr,
  _tAI,
  _tAr,
  _th,
  _uA,
  _UTA,
  _UTAR,
  _xCD,
  n0,
} from "./schemas_0";
import { ListRequest } from "./schemas_3_List";
import { TagList } from "./schemas_4_Resource";

/* eslint no-var: 0 */

export var CreateTrustAnchorRequest = struct(
  n0,
  _CTAR,
  0,
  [_n, _s, _en, _t, _nS],
  [0, () => Source, 2, [() => TagList, 0], () => NotificationSettings]
);
export var ListTrustAnchorsResponse = struct(n0, _LTAR, 0, [_nT, _tA], [0, () => TrustAnchorDetails]);
export var NotificationSetting = struct(n0, _NS, 0, [_en, _ev, _th, _ch], [2, 0, 1, 0]);
export var NotificationSettingDetail = struct(n0, _NSD, 0, [_en, _ev, _th, _ch, _cB], [2, 0, 1, 0, 0]);
export var NotificationSettingKey = struct(n0, _NSK, 0, [_ev, _ch], [0, 0]);
export var PutNotificationSettingsRequest = struct(n0, _PNSR, 0, [_tAI, _nS], [0, () => NotificationSettings]);
export var PutNotificationSettingsResponse = struct(n0, _PNSRu, 0, [_tAr], [() => TrustAnchorDetail]);
export var ResetNotificationSettingsRequest = struct(n0, _RNSR, 0, [_tAI, _nSK], [0, () => NotificationSettingKeys]);
export var ResetNotificationSettingsResponse = struct(n0, _RNSRe, 0, [_tAr], [() => TrustAnchorDetail]);
export var ScalarTrustAnchorRequest = struct(n0, _STAR, 0, [_tAI], [[0, 1]]);
export var Source = struct(n0, _S, 0, [_sT, _sD], [0, () => SourceData]);
export var TrustAnchorDetail = struct(
  n0,
  _TAD,
  0,
  [_tAI, _tAA, _n, _s, _en, _cAr, _uA, _nS],
  [0, 0, 0, () => Source, 2, 5, 5, () => NotificationSettingDetails]
);
export var TrustAnchorDetailResponse = struct(n0, _TADR, 0, [_tAr], [() => TrustAnchorDetail]);
export var UpdateTrustAnchorRequest = struct(n0, _UTAR, 0, [_tAI, _n, _s], [[0, 1], 0, () => Source]);
export var NotificationSettingDetails = list(n0, _NSDo, 0, () => NotificationSettingDetail);
export var NotificationSettingKeys = list(n0, _NSKo, 0, () => NotificationSettingKey);
export var NotificationSettings = list(n0, _NSo, 0, () => NotificationSetting);
export var TrustAnchorDetails = list(n0, _TADr, 0, () => TrustAnchorDetail);
export var SourceData = uni(n0, _SDo, 0, [_xCD, _aPA], [0, 0]);
export var CreateTrustAnchor = op(
  n0,
  _CTA,
  {
    [_h]: ["POST", "/trustanchors", 201],
  },
  () => CreateTrustAnchorRequest,
  () => TrustAnchorDetailResponse
);
export var DeleteTrustAnchor = op(
  n0,
  _DTA,
  {
    [_h]: ["DELETE", "/trustanchor/{trustAnchorId}", 200],
  },
  () => ScalarTrustAnchorRequest,
  () => TrustAnchorDetailResponse
);
export var DisableTrustAnchor = op(
  n0,
  _DTAi,
  {
    [_h]: ["POST", "/trustanchor/{trustAnchorId}/disable", 200],
  },
  () => ScalarTrustAnchorRequest,
  () => TrustAnchorDetailResponse
);
export var EnableTrustAnchor = op(
  n0,
  _ETA,
  {
    [_h]: ["POST", "/trustanchor/{trustAnchorId}/enable", 200],
  },
  () => ScalarTrustAnchorRequest,
  () => TrustAnchorDetailResponse
);
export var GetTrustAnchor = op(
  n0,
  _GTA,
  {
    [_h]: ["GET", "/trustanchor/{trustAnchorId}", 200],
  },
  () => ScalarTrustAnchorRequest,
  () => TrustAnchorDetailResponse
);
export var ListTrustAnchors = op(
  n0,
  _LTA,
  {
    [_h]: ["GET", "/trustanchors", 200],
  },
  () => ListRequest,
  () => ListTrustAnchorsResponse
);
export var PutNotificationSettings = op(
  n0,
  _PNS,
  {
    [_h]: ["PATCH", "/put-notifications-settings", 200],
  },
  () => PutNotificationSettingsRequest,
  () => PutNotificationSettingsResponse
);
export var ResetNotificationSettings = op(
  n0,
  _RNS,
  {
    [_h]: ["PATCH", "/reset-notifications-settings", 200],
  },
  () => ResetNotificationSettingsRequest,
  () => ResetNotificationSettingsResponse
);
export var UpdateTrustAnchor = op(
  n0,
  _UTA,
  {
    [_h]: ["PATCH", "/trustanchor/{trustAnchorId}", 200],
  },
  () => UpdateTrustAnchorRequest,
  () => TrustAnchorDetailResponse
);
