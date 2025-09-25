// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ConcurrentResourcesLimitExceededException as __ConcurrentResourcesLimitExceededException,
  GeneratedTemplateNotFoundException as __GeneratedTemplateNotFoundException,
} from "../models/index";
import {
  _aQE,
  _c,
  _CRLEE,
  _CT,
  _D,
  _DGT,
  _DGTe,
  _DGTI,
  _DGTIe,
  _DGTO,
  _DP,
  _e,
  _F,
  _GGT,
  _GGTI,
  _GGTO,
  _GTI,
  _GTN,
  _GTNFE,
  _hE,
  _LGT,
  _LGTI,
  _LGTO,
  _LRI,
  _LUT,
  _M,
  _MR,
  _NOR,
  _NT,
  _PPr,
  _Pr,
  _Pro,
  _R,
  _RDe,
  _RDeso,
  _Req,
  _RF,
  _RI,
  _RPe,
  _RPes,
  _RSes,
  _RSeso,
  _RSR,
  _RT,
  _S,
  _SI,
  _SR,
  _Su,
  _T,
  _TB,
  _TCe,
  _TPe,
  _TSe,
  _TSem,
  _TW,
  _URP,
  _W,
  _WD,
  _WDa,
  _WP,
  _WPa,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConcurrentResourcesLimitExceededException = error(
  n0,
  _CRLEE,
  {
    [_e]: _c,
    [_hE]: 429,
    [_aQE]: [`ConcurrentResourcesLimitExceeded`, 429],
  },
  [_M],
  [0],

  __ConcurrentResourcesLimitExceededException
);
export var DeleteGeneratedTemplateInput = struct(n0, _DGTI, 0, [_GTN], [0]);
export var DescribeGeneratedTemplateInput = struct(n0, _DGTIe, 0, [_GTN], [0]);
export var DescribeGeneratedTemplateOutput = struct(
  n0,
  _DGTO,
  0,
  [_GTI, _GTN, _R, _S, _SR, _CT, _LUT, _Pr, _SI, _TCe, _TW],
  [0, 0, () => ResourceDetails, 0, 0, 4, 4, () => TemplateProgress, 0, () => TemplateConfiguration, 1]
);
export var GeneratedTemplateNotFoundException = error(
  n0,
  _GTNFE,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`GeneratedTemplateNotFound`, 404],
  },
  [_M],
  [0],

  __GeneratedTemplateNotFoundException
);
export var GetGeneratedTemplateInput = struct(n0, _GGTI, 0, [_F, _GTN], [0, 0]);
export var GetGeneratedTemplateOutput = struct(n0, _GGTO, 0, [_S, _TB], [0, 0]);
export var ListGeneratedTemplatesInput = struct(n0, _LGTI, 0, [_NT, _MR], [0, 1]);
export var ListGeneratedTemplatesOutput = struct(n0, _LGTO, 0, [_Su, _NT], [() => TemplateSummaries, 0]);
export var ResourceDetail = struct(
  n0,
  _RDe,
  0,
  [_RT, _LRI, _RI, _RSes, _RSR, _W],
  [0, 0, 128 | 0, 0, 0, () => WarningDetails]
);
export var TemplateConfiguration = struct(n0, _TCe, 0, [_DP, _URP], [0, 0]);
export var TemplateProgress = struct(n0, _TPe, 0, [_RSeso, _RF, _RPe, _RPes], [1, 1, 1, 1]);
export var TemplateSummary = struct(n0, _TSe, 0, [_GTI, _GTN, _S, _SR, _CT, _LUT, _NOR], [0, 0, 0, 0, 4, 4, 1]);
export var WarningDetail = struct(n0, _WD, 0, [_T, _Pro], [0, () => WarningProperties]);
export var WarningProperty = struct(n0, _WP, 0, [_PPr, _Req, _D], [0, 2, 0]);
export var ResourceDetails = list(n0, _RDeso, 0, () => ResourceDetail);
export var TemplateSummaries = list(n0, _TSem, 0, () => TemplateSummary);
export var WarningDetails = list(n0, _WDa, 0, () => WarningDetail);
export var WarningProperties = list(n0, _WPa, 0, () => WarningProperty);
export var DeleteGeneratedTemplate = op(
  n0,
  _DGT,
  0,
  () => DeleteGeneratedTemplateInput,
  () => Unit
);
export var DescribeGeneratedTemplate = op(
  n0,
  _DGTe,
  0,
  () => DescribeGeneratedTemplateInput,
  () => DescribeGeneratedTemplateOutput
);
export var GetGeneratedTemplate = op(
  n0,
  _GGT,
  0,
  () => GetGeneratedTemplateInput,
  () => GetGeneratedTemplateOutput
);
export var ListGeneratedTemplates = op(
  n0,
  _LGT,
  0,
  () => ListGeneratedTemplatesInput,
  () => ListGeneratedTemplatesOutput
);
