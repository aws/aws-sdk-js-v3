// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _a,
  _AR,
  _CRT,
  _CSMA,
  _CSMAR,
  _CSMARr,
  _CVC,
  _CVCR,
  _CVCRr,
  _CVPD,
  _CVPDR,
  _CVPDRr,
  _De,
  _E,
  _h,
  _hQ,
  _IT,
  _K,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _N,
  _RARN,
  _RE,
  _SMA,
  _SSEC,
  _T,
  _Ta,
  _TK,
  _TKa,
  _TKL,
  _TL,
  _TR,
  _TRR,
  _TV,
  _UR,
  _URR,
  _V,
  _VC,
  _VPD,
  Arn,
  n0,
  Unit,
} from "./schemas_0";
import { ServerSideEncryptionConfiguration, VoiceProfileDomain } from "./schemas_18_VoiceProfile";
import { VoiceConnector } from "./schemas_21_Voice";
import { SipMediaApplication, SipMediaApplicationEndpointList } from "./schemas_31_SipMedia";

/* eslint no-var: 0 */

export var TagKey = sim(n0, _TK, 0, 8);
export var TagValue = sim(n0, _TV, 0, 8);
export var CreateSipMediaApplicationRequest = struct(
  n0,
  _CSMAR,
  0,
  [_AR, _N, _E, _T],
  [0, 0, [() => SipMediaApplicationEndpointList, 0], [() => TagList, 0]]
);
export var CreateSipMediaApplicationResponse = struct(n0, _CSMARr, 0, [_SMA], [[() => SipMediaApplication, 0]]);
export var CreateVoiceConnectorRequest = struct(
  n0,
  _CVCR,
  0,
  [_N, _AR, _RE, _T, _IT],
  [0, 0, 2, [() => TagList, 0], 0]
);
export var CreateVoiceConnectorResponse = struct(n0, _CVCRr, 0, [_VC], [() => VoiceConnector]);
export var CreateVoiceProfileDomainRequest = struct(
  n0,
  _CVPDR,
  0,
  [_N, _De, _SSEC, _CRT, _T],
  [0, 0, [() => ServerSideEncryptionConfiguration, 0], 0, [() => TagList, 0]]
);
export var CreateVoiceProfileDomainResponse = struct(n0, _CVPDRr, 0, [_VPD], [[() => VoiceProfileDomain, 0]]);
export var ListTagsForResourceRequest = struct(
  n0,
  _LTFRR,
  0,
  [_RARN],
  [
    [
      () => Arn,
      {
        [_hQ]: _a,
      },
    ],
  ]
);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_T], [[() => TagList, 0]]);
export var Tag = struct(
  n0,
  _Ta,
  0,
  [_K, _V],
  [
    [() => TagKey, 0],
    [() => TagValue, 0],
  ]
);
export var TagResourceRequest = struct(
  n0,
  _TRR,
  0,
  [_RARN, _T],
  [
    [() => Arn, 0],
    [() => TagList, 0],
  ]
);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_RARN, _TKa],
  [
    [() => Arn, 0],
    [() => TagKeyList, 0],
  ]
);
export var TagKeyList = list(n0, _TKL, 0, [() => TagKey, 0]);
export var TagList = list(n0, _TL, 0, [() => Tag, 0]);
export var CreateSipMediaApplication = op(
  n0,
  _CSMA,
  {
    [_h]: ["POST", "/sip-media-applications", 201],
  },
  () => CreateSipMediaApplicationRequest,
  () => CreateSipMediaApplicationResponse
);
export var CreateVoiceConnector = op(
  n0,
  _CVC,
  {
    [_h]: ["POST", "/voice-connectors", 201],
  },
  () => CreateVoiceConnectorRequest,
  () => CreateVoiceConnectorResponse
);
export var CreateVoiceProfileDomain = op(
  n0,
  _CVPD,
  {
    [_h]: ["POST", "/voice-profile-domains", 201],
  },
  () => CreateVoiceProfileDomainRequest,
  () => CreateVoiceProfileDomainResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags?operation=tag-resource", 204],
  },
  () => TagResourceRequest,
  () => Unit
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["POST", "/tags?operation=untag-resource", 204],
  },
  () => UntagResourceRequest,
  () => Unit
);
