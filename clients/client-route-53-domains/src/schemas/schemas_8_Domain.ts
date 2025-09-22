// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AP,
  _BP,
  _DN,
  _dN,
  _DS,
  _DSL,
  _eA,
  _GDS,
  _GDSR,
  _GDSRe,
  _iAV,
  _OA,
  _OI,
  _RCRE,
  _RCRER,
  _RCRERe,
  _RPeg,
  _SC,
  _SLu,
  _TPe,
  _UDCP,
  _UDCPR,
  _UDCPRp,
  n0,
} from "./schemas_0";
import { Email } from "./schemas_24_Domain";

/* eslint no-var: 0 */

export var DomainSuggestion = struct(n0, _DS, 0, [_DN, _A], [0, 0]);
export var GetDomainSuggestionsRequest = struct(n0, _GDSR, 0, [_DN, _SC, _OA], [0, 1, 2]);
export var GetDomainSuggestionsResponse = struct(n0, _GDSRe, 0, [_SLu], [() => DomainSuggestionsList]);
export var ResendContactReachabilityEmailRequest = struct(n0, _RCRER, 0, [_dN], [0]);
export var ResendContactReachabilityEmailResponse = struct(n0, _RCRERe, 0, [_dN, _eA, _iAV], [0, [() => Email, 0], 2]);
export var UpdateDomainContactPrivacyRequest = struct(n0, _UDCPR, 0, [_DN, _AP, _RPeg, _TPe, _BP], [0, 2, 2, 2, 2]);
export var UpdateDomainContactPrivacyResponse = struct(n0, _UDCPRp, 0, [_OI], [0]);
export var DomainSuggestionsList = list(n0, _DSL, 0, () => DomainSuggestion);
export var GetDomainSuggestions = op(
  n0,
  _GDS,
  0,
  () => GetDomainSuggestionsRequest,
  () => GetDomainSuggestionsResponse
);
export var ResendContactReachabilityEmail = op(
  n0,
  _RCRE,
  0,
  () => ResendContactReachabilityEmailRequest,
  () => ResendContactReachabilityEmailResponse
);
export var UpdateDomainContactPrivacy = op(
  n0,
  _UDCP,
  0,
  () => UpdateDomainContactPrivacyRequest,
  () => UpdateDomainContactPrivacyResponse
);
