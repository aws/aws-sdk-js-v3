// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _AL,
  _ALF,
  _Ar,
  _C,
  _CT,
  _CWD,
  _CWDl,
  _D,
  _DPP,
  _DPPI,
  _DPPO,
  _DR,
  _DRI,
  _DRO,
  _F,
  _Id,
  _IE,
  _IT,
  _K,
  _LPRI,
  _LRA,
  _LRH,
  _LRHI,
  _LRHO,
  _LRHSF,
  _LRI,
  _LSPRI,
  _N,
  _NA,
  _NPT,
  _PAI,
  _PAN,
  _PIa,
  _PIh,
  _PIr,
  _PNa,
  _PNr,
  _PP,
  _PPA,
  _PPAr,
  _PPD,
  _PPDr,
  _PPF,
  _PPIr,
  _PPIro,
  _PPN,
  _PPO,
  _PPr,
  _PPro,
  _PProv,
  _PProvi,
  _PPT,
  _PS,
  _PTa,
  _PTro,
  _RD,
  _RDe,
  _RE,
  _REe,
  _RIe,
  _RO,
  _RPR,
  _RTe,
  _RTec,
  _RTeco,
  _S,
  _SB,
  _SF,
  _SM,
  _SO,
  _SPP,
  _SPPe,
  _SPPI,
  _SPPIe,
  _SPPO,
  _SPPOe,
  _SSA,
  _SSFTC,
  _SSFTP,
  _SSMCC,
  _SSMCP,
  _SSOT,
  _SSR,
  _T,
  _Ta,
  _TPP,
  _TPPI,
  _TPPO,
  _TRC,
  _TT,
  _UA,
  _UAS,
  _UPPI,
  _UPPO,
  _UPPp,
  _UPPpda,
  _UTp,
  _UTpd,
  _V,
  n0,
} from "./schemas_0";
import { RecordOutputs } from "./schemas_15_Describe";
import { UpdateProvisioningParameters } from "./schemas_16_Product";
import { Tags } from "./schemas_25_Product";
import { AccessLevelFilter } from "./schemas_27_Provisioned";

/* eslint no-var: 0 */

export var CloudWatchDashboard = struct(n0, _CWD, 0, [_N], [0]);
export var DescribeProvisionedProductInput = struct(n0, _DPPI, 0, [_AL, _Id, _N], [0, 0, 0]);
export var DescribeProvisionedProductOutput = struct(
  n0,
  _DPPO,
  0,
  [_PPD, _CWDl],
  [() => ProvisionedProductDetail, () => CloudWatchDashboards]
);
export var DescribeRecordInput = struct(n0, _DRI, 0, [_AL, _Id, _PTa, _PS], [0, 0, 0, 1]);
export var DescribeRecordOutput = struct(n0, _DRO, 0, [_RD, _RO, _NPT], [() => RecordDetail, () => RecordOutputs, 0]);
export var ListRecordHistoryInput = struct(
  n0,
  _LRHI,
  0,
  [_AL, _ALF, _SF, _PS, _PTa],
  [0, () => AccessLevelFilter, () => ListRecordHistorySearchFilter, 1, 0]
);
export var ListRecordHistoryOutput = struct(n0, _LRHO, 0, [_RDe, _NPT], [() => RecordDetails, 0]);
export var ListRecordHistorySearchFilter = struct(n0, _LRHSF, 0, [_K, _V], [0, 0]);
export var ProvisionedProductAttribute = struct(
  n0,
  _PPA,
  0,
  [_N, _Ar, _T, _Id, _S, _SM, _CT, _IT, _LRI, _LPRI, _LSPRI, _Ta, _PIh, _PIr, _PNr, _PAI, _PAN, _UA, _UAS],
  [0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, () => Tags, 0, 0, 0, 0, 0, 0, 0]
);
export var ProvisionedProductDetail = struct(
  n0,
  _PPD,
  0,
  [_N, _Ar, _T, _Id, _S, _SM, _CT, _IT, _LRI, _LPRI, _LSPRI, _PIr, _PAI, _LRA],
  [0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0]
);
export var ProvisioningParameter = struct(n0, _PPr, 0, [_K, _V], [0, 0]);
export var ProvisioningPreferences = struct(
  n0,
  _PPro,
  0,
  [_SSA, _SSR, _SSFTC, _SSFTP, _SSMCC, _SSMCP],
  [64 | 0, 64 | 0, 1, 1, 1, 1]
);
export var ProvisionProductInput = struct(
  n0,
  _PPIro,
  0,
  [_AL, _PIr, _PNr, _PAI, _PAN, _PIa, _PNa, _PPN, _PP, _PPro, _Ta, _NA, _PTro],
  [0, 0, 0, 0, 0, 0, 0, 0, () => ProvisioningParameters, () => ProvisioningPreferences, () => Tags, 64 | 0, [0, 4]]
);
export var ProvisionProductOutput = struct(n0, _PPO, 0, [_RD], [() => RecordDetail]);
export var RecordDetail = struct(
  n0,
  _RD,
  0,
  [_RIe, _PPN, _S, _CT, _UTp, _PPT, _RTe, _PPIr, _PIr, _PAI, _PIa, _RE, _RTec, _LRA],
  [0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, () => RecordErrors, () => RecordTags, 0]
);
export var RecordError = struct(n0, _REe, 0, [_C, _D], [0, 0]);
export var RecordTag = struct(n0, _RTeco, 0, [_K, _V], [0, 0]);
export var ScanProvisionedProductsInput = struct(
  n0,
  _SPPI,
  0,
  [_AL, _ALF, _PS, _PTa],
  [0, () => AccessLevelFilter, 1, 0]
);
export var ScanProvisionedProductsOutput = struct(n0, _SPPO, 0, [_PProv, _NPT], [() => ProvisionedProductDetails, 0]);
export var SearchProvisionedProductsInput = struct(
  n0,
  _SPPIe,
  0,
  [_AL, _ALF, _F, _SB, _SO, _PS, _PTa],
  [0, () => AccessLevelFilter, map(n0, _PPF, 0, 0, 64 | 0), 0, 0, 1, 0]
);
export var SearchProvisionedProductsOutput = struct(
  n0,
  _SPPOe,
  0,
  [_PProv, _TRC, _NPT],
  [() => ProvisionedProductAttributes, 1, 0]
);
export var TerminateProvisionedProductInput = struct(
  n0,
  _TPPI,
  0,
  [_PPN, _PPIr, _TT, _IE, _AL, _RPR],
  [0, 0, [0, 4], 2, 0, 2]
);
export var TerminateProvisionedProductOutput = struct(n0, _TPPO, 0, [_RD], [() => RecordDetail]);
export var UpdateProvisionedProductInput = struct(
  n0,
  _UPPI,
  0,
  [_AL, _PPN, _PPIr, _PIr, _PNr, _PAI, _PAN, _PIa, _PNa, _PP, _PPro, _Ta, _UTpd],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    () => UpdateProvisioningParameters,
    () => UpdateProvisioningPreferences,
    () => Tags,
    [0, 4],
  ]
);
export var UpdateProvisionedProductOutput = struct(n0, _UPPO, 0, [_RD], [() => RecordDetail]);
export var UpdateProvisioningPreferences = struct(
  n0,
  _UPPp,
  0,
  [_SSA, _SSR, _SSFTC, _SSFTP, _SSMCC, _SSMCP, _SSOT],
  [64 | 0, 64 | 0, 1, 1, 1, 1, 0]
);
export var CloudWatchDashboards = list(n0, _CWDl, 0, () => CloudWatchDashboard);
export var ProvisionedProductAttributes = list(n0, _PPAr, 0, () => ProvisionedProductAttribute);
export var ProvisionedProductDetails = list(n0, _PPDr, 0, () => ProvisionedProductDetail);
export var ProvisionedProductViewFilterValues = 64 | 0;

export var ProvisioningParameters = list(n0, _PP, 0, () => ProvisioningParameter);
export var RecordDetails = list(n0, _RDe, 0, () => RecordDetail);
export var RecordErrors = list(n0, _RE, 0, () => RecordError);
export var RecordTags = list(n0, _RTec, 0, () => RecordTag);
export var ProvisionedProductFilters = map(n0, _PPF, 0, 0, 64 | 0);
export var DescribeProvisionedProduct = op(
  n0,
  _DPP,
  0,
  () => DescribeProvisionedProductInput,
  () => DescribeProvisionedProductOutput
);
export var DescribeRecord = op(
  n0,
  _DR,
  0,
  () => DescribeRecordInput,
  () => DescribeRecordOutput
);
export var ListRecordHistory = op(
  n0,
  _LRH,
  0,
  () => ListRecordHistoryInput,
  () => ListRecordHistoryOutput
);
export var ProvisionProduct = op(
  n0,
  _PProvi,
  0,
  () => ProvisionProductInput,
  () => ProvisionProductOutput
);
export var ScanProvisionedProducts = op(
  n0,
  _SPP,
  0,
  () => ScanProvisionedProductsInput,
  () => ScanProvisionedProductsOutput
);
export var SearchProvisionedProducts = op(
  n0,
  _SPPe,
  0,
  () => SearchProvisionedProductsInput,
  () => SearchProvisionedProductsOutput
);
export var TerminateProvisionedProduct = op(
  n0,
  _TPP,
  0,
  () => TerminateProvisionedProductInput,
  () => TerminateProvisionedProductOutput
);
export var UpdateProvisionedProduct = op(
  n0,
  _UPPpda,
  0,
  () => UpdateProvisionedProductInput,
  () => UpdateProvisionedProductOutput
);
