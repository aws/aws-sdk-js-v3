// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { InvalidContactFlowModuleException as __InvalidContactFlowModuleException } from "../models/index";
import {
  _A,
  _c,
  _CCFM,
  _CCFMR,
  _CCFMRr,
  _CFM,
  _CFMI,
  _CFMS,
  _CFMSL,
  _CFMSo,
  _Co,
  _CT,
  _D,
  _DCFM,
  _DCFMe,
  _DCFMR,
  _DCFMRe,
  _DCFMRes,
  _DCFMResc,
  _e,
  _h,
  _hE,
  _hQ,
  _I,
  _ICFME,
  _II,
  _LCFM,
  _LCFMR,
  _LCFMRi,
  _mR,
  _MRa,
  _N,
  _NT,
  _nT,
  _Pro,
  _S,
  _St,
  _st,
  _Ta,
  _UCFMC,
  _UCFMCR,
  _UCFMCRp,
  _UCFMM,
  _UCFMMR,
  _UCFMMRp,
  n0,
} from "./schemas_0";
import { Problems } from "./schemas_51_Flow";

/* eslint no-var: 0 */

export var ContactFlowModule = struct(n0, _CFM, 0, [_A, _I, _N, _Co, _D, _S, _St, _Ta], [0, 0, 0, 0, 0, 0, 0, 128 | 0]);
export var ContactFlowModuleSummary = struct(n0, _CFMS, 0, [_I, _A, _N, _S], [0, 0, 0, 0]);
export var CreateContactFlowModuleRequest = struct(
  n0,
  _CCFMR,
  0,
  [_II, _N, _D, _Co, _Ta, _CT],
  [[0, 1], 0, 0, 0, 128 | 0, [0, 4]]
);
export var CreateContactFlowModuleResponse = struct(n0, _CCFMRr, 0, [_I, _A], [0, 0]);
export var DeleteContactFlowModuleRequest = struct(
  n0,
  _DCFMR,
  0,
  [_II, _CFMI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteContactFlowModuleResponse = struct(n0, _DCFMRe, 0, [], []);
export var DescribeContactFlowModuleRequest = struct(
  n0,
  _DCFMRes,
  0,
  [_II, _CFMI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeContactFlowModuleResponse = struct(n0, _DCFMResc, 0, [_CFM], [() => ContactFlowModule]);
export var InvalidContactFlowModuleException = error(
  n0,
  _ICFME,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_Pro],
  [() => Problems],

  __InvalidContactFlowModuleException
);
export var ListContactFlowModulesRequest = struct(
  n0,
  _LCFMR,
  0,
  [_II, _NT, _MRa, _CFMSo],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _st,
      },
    ],
  ]
);
export var ListContactFlowModulesResponse = struct(
  n0,
  _LCFMRi,
  0,
  [_CFMSL, _NT],
  [() => ContactFlowModulesSummaryList, 0]
);
export var UpdateContactFlowModuleContentRequest = struct(n0, _UCFMCR, 0, [_II, _CFMI, _Co], [[0, 1], [0, 1], 0]);
export var UpdateContactFlowModuleContentResponse = struct(n0, _UCFMCRp, 0, [], []);
export var UpdateContactFlowModuleMetadataRequest = struct(
  n0,
  _UCFMMR,
  0,
  [_II, _CFMI, _N, _D, _S],
  [[0, 1], [0, 1], 0, 0, 0]
);
export var UpdateContactFlowModuleMetadataResponse = struct(n0, _UCFMMRp, 0, [], []);
export var ContactFlowModulesSummaryList = list(n0, _CFMSL, 0, () => ContactFlowModuleSummary);
export var CreateContactFlowModule = op(
  n0,
  _CCFM,
  {
    [_h]: ["PUT", "/contact-flow-modules/{InstanceId}", 200],
  },
  () => CreateContactFlowModuleRequest,
  () => CreateContactFlowModuleResponse
);
export var DeleteContactFlowModule = op(
  n0,
  _DCFM,
  {
    [_h]: ["DELETE", "/contact-flow-modules/{InstanceId}/{ContactFlowModuleId}", 200],
  },
  () => DeleteContactFlowModuleRequest,
  () => DeleteContactFlowModuleResponse
);
export var DescribeContactFlowModule = op(
  n0,
  _DCFMe,
  {
    [_h]: ["GET", "/contact-flow-modules/{InstanceId}/{ContactFlowModuleId}", 200],
  },
  () => DescribeContactFlowModuleRequest,
  () => DescribeContactFlowModuleResponse
);
export var ListContactFlowModules = op(
  n0,
  _LCFM,
  {
    [_h]: ["GET", "/contact-flow-modules-summary/{InstanceId}", 200],
  },
  () => ListContactFlowModulesRequest,
  () => ListContactFlowModulesResponse
);
export var UpdateContactFlowModuleContent = op(
  n0,
  _UCFMC,
  {
    [_h]: ["POST", "/contact-flow-modules/{InstanceId}/{ContactFlowModuleId}/content", 200],
  },
  () => UpdateContactFlowModuleContentRequest,
  () => UpdateContactFlowModuleContentResponse
);
export var UpdateContactFlowModuleMetadata = op(
  n0,
  _UCFMM,
  {
    [_h]: ["POST", "/contact-flow-modules/{InstanceId}/{ContactFlowModuleId}/metadata", 200],
  },
  () => UpdateContactFlowModuleMetadataRequest,
  () => UpdateContactFlowModuleMetadataResponse
);
