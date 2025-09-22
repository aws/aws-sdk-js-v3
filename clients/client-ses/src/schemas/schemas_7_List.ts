// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CSo,
  _CVET,
  _CVETu,
  _FEA,
  _FRURL,
  _Id,
  _ITd,
  _LCS,
  _LCSR,
  _LCSRi,
  _LCVET,
  _LCVETR,
  _LCVETRi,
  _LI,
  _LIR,
  _LIRi,
  _MIa,
  _MR,
  _NT,
  _SRURL,
  _TN,
  _TS,
  n0,
} from "./schemas_0";
import { ConfigurationSet } from "./schemas_35_Configuration";

/* eslint no-var: 0 */

export var CustomVerificationEmailTemplate = struct(n0, _CVET, 0, [_TN, _FEA, _TS, _SRURL, _FRURL], [0, 0, 0, 0, 0]);
export var ListConfigurationSetsRequest = struct(n0, _LCSR, 0, [_NT, _MIa], [0, 1]);
export var ListConfigurationSetsResponse = struct(n0, _LCSRi, 0, [_CSo, _NT], [() => ConfigurationSets, 0]);
export var ListCustomVerificationEmailTemplatesRequest = struct(n0, _LCVETR, 0, [_NT, _MR], [0, 1]);
export var ListCustomVerificationEmailTemplatesResponse = struct(
  n0,
  _LCVETRi,
  0,
  [_CVETu, _NT],
  [() => CustomVerificationEmailTemplates, 0]
);
export var ListIdentitiesRequest = struct(n0, _LIR, 0, [_ITd, _NT, _MIa], [0, 0, 1]);
export var ListIdentitiesResponse = struct(n0, _LIRi, 0, [_Id, _NT], [64 | 0, 0]);
export var ConfigurationSets = list(n0, _CSo, 0, () => ConfigurationSet);
export var CustomVerificationEmailTemplates = list(n0, _CVETu, 0, () => CustomVerificationEmailTemplate);
export var ListConfigurationSets = op(
  n0,
  _LCS,
  0,
  () => ListConfigurationSetsRequest,
  () => ListConfigurationSetsResponse
);
export var ListCustomVerificationEmailTemplates = op(
  n0,
  _LCVET,
  0,
  () => ListCustomVerificationEmailTemplatesRequest,
  () => ListCustomVerificationEmailTemplatesResponse
);
export var ListIdentities = op(
  n0,
  _LI,
  0,
  () => ListIdentitiesRequest,
  () => ListIdentitiesResponse
);
