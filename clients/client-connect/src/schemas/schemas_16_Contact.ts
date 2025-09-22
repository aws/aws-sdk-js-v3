// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ContactFlowNotPublishedException as __ContactFlowNotPublishedException } from "../models/index";
import {
  _A,
  _c,
  _CCF,
  _CCFR,
  _CCFRr,
  _CCFV,
  _CCFVR,
  _CCFVRr,
  _CFA,
  _CFI,
  _CFNPE,
  _CFo,
  _CFSo,
  _CFV,
  _CFVS,
  _CFVSL,
  _Co,
  _D,
  _DCFe,
  _DCFRes,
  _DCFResc,
  _e,
  _FCS,
  _h,
  _hE,
  _hQ,
  _I,
  _II,
  _LCFV,
  _LCFVR,
  _LCFVRi,
  _LMR,
  _LMT,
  _M,
  _mR,
  _MRa,
  _N,
  _NT,
  _nT,
  _S,
  _St,
  _T,
  _Ta,
  _UCFM,
  _UCFMR,
  _UCFMRp,
  _UCFN,
  _UCFNR,
  _UCFNRp,
  _VD,
  _Ve,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ContactFlow = struct(
  n0,
  _CFo,
  0,
  [_A, _I, _N, _T, _S, _St, _D, _Co, _Ta, _FCS, _Ve, _VD, _LMT, _LMR],
  [0, 0, 0, 0, 0, 0, 0, 0, 128 | 0, 0, 1, 0, 4, 0]
);
export var ContactFlowNotPublishedException = error(
  n0,
  _CFNPE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __ContactFlowNotPublishedException
);
export var ContactFlowVersionSummary = struct(n0, _CFVS, 0, [_A, _VD, _Ve], [0, 0, 1]);
export var CreateContactFlowRequest = struct(
  n0,
  _CCFR,
  0,
  [_II, _N, _T, _D, _Co, _St, _Ta],
  [[0, 1], 0, 0, 0, 0, 0, 128 | 0]
);
export var CreateContactFlowResponse = struct(n0, _CCFRr, 0, [_CFI, _CFA, _FCS], [0, 0, 0]);
export var CreateContactFlowVersionRequest = struct(
  n0,
  _CCFVR,
  0,
  [_II, _D, _CFI, _FCS, _CFV, _LMT, _LMR],
  [[0, 1], 0, [0, 1], 0, 1, 4, 0]
);
export var CreateContactFlowVersionResponse = struct(n0, _CCFVRr, 0, [_CFA, _Ve], [0, 1]);
export var DescribeContactFlowRequest = struct(
  n0,
  _DCFRes,
  0,
  [_II, _CFI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeContactFlowResponse = struct(n0, _DCFResc, 0, [_CFo], [() => ContactFlow]);
export var ListContactFlowVersionsRequest = struct(
  n0,
  _LCFVR,
  0,
  [_II, _CFI, _NT, _MRa],
  [
    [0, 1],
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
  ]
);
export var ListContactFlowVersionsResponse = struct(
  n0,
  _LCFVRi,
  0,
  [_CFVSL, _NT],
  [() => ContactFlowVersionSummaryList, 0]
);
export var UpdateContactFlowMetadataRequest = struct(
  n0,
  _UCFMR,
  0,
  [_II, _CFI, _N, _D, _CFSo],
  [[0, 1], [0, 1], 0, 0, 0]
);
export var UpdateContactFlowMetadataResponse = struct(n0, _UCFMRp, 0, [], []);
export var UpdateContactFlowNameRequest = struct(n0, _UCFNR, 0, [_II, _CFI, _N, _D], [[0, 1], [0, 1], 0, 0]);
export var UpdateContactFlowNameResponse = struct(n0, _UCFNRp, 0, [], []);
export var ContactFlowVersionSummaryList = list(n0, _CFVSL, 0, () => ContactFlowVersionSummary);
export var CreateContactFlow = op(
  n0,
  _CCF,
  {
    [_h]: ["PUT", "/contact-flows/{InstanceId}", 200],
  },
  () => CreateContactFlowRequest,
  () => CreateContactFlowResponse
);
export var CreateContactFlowVersion = op(
  n0,
  _CCFV,
  {
    [_h]: ["PUT", "/contact-flows/{InstanceId}/{ContactFlowId}/version", 200],
  },
  () => CreateContactFlowVersionRequest,
  () => CreateContactFlowVersionResponse
);
export var DescribeContactFlow = op(
  n0,
  _DCFe,
  {
    [_h]: ["GET", "/contact-flows/{InstanceId}/{ContactFlowId}", 200],
  },
  () => DescribeContactFlowRequest,
  () => DescribeContactFlowResponse
);
export var ListContactFlowVersions = op(
  n0,
  _LCFV,
  {
    [_h]: ["GET", "/contact-flows/{InstanceId}/{ContactFlowId}/versions", 200],
  },
  () => ListContactFlowVersionsRequest,
  () => ListContactFlowVersionsResponse
);
export var UpdateContactFlowMetadata = op(
  n0,
  _UCFM,
  {
    [_h]: ["POST", "/contact-flows/{InstanceId}/{ContactFlowId}/metadata", 200],
  },
  () => UpdateContactFlowMetadataRequest,
  () => UpdateContactFlowMetadataResponse
);
export var UpdateContactFlowName = op(
  n0,
  _UCFN,
  {
    [_h]: ["POST", "/contact-flows/{InstanceId}/{ContactFlowId}/name", 200],
  },
  () => UpdateContactFlowNameRequest,
  () => UpdateContactFlowNameResponse
);
