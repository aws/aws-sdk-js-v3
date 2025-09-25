// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ImportConflictException as __ImportConflictException,
  ImportNotFoundException as __ImportNotFoundException,
} from "../models/index";
import {
  _AD,
  _ADt,
  _AN,
  _AT,
  _BM,
  _c,
  _COs,
  _Cs,
  _CT,
  _CWLGA,
  _D,
  _DIe,
  _DIIe,
  _DIOe,
  _e,
  _EC,
  _Ena,
  _ET,
  _FC,
  _FM,
  _GSI,
  _GSIL,
  _GSIl,
  _HL,
  _IA,
  _ICE,
  _ICT,
  _IF,
  _IFO,
  _IIC,
  _IN,
  _INFE,
  _ISmp,
  _IT,
  _ITD,
  _ITI,
  _ITO,
  _KMSMKI,
  _KS,
  _m,
  _ODT,
  _PIC,
  _Pr,
  _PSB,
  _PT,
  _RUPS,
  _SBS,
  _SSES,
  _SSET,
  _ST,
  _TA,
  _TCP,
  _TI,
  _TN,
  _WT,
  _WUPS,
  n0,
} from "./schemas_0";
import { KeySchema, OnDemandThroughput, Projection, ProvisionedThroughput } from "./schemas_1_Table";
import { S3BucketSource } from "./schemas_4_Import";

/* eslint no-var: 0 */

export var AttributeDefinition = struct(n0, _AD, 0, [_AN, _AT], [0, 0]);
export var CsvOptions = struct(n0, _COs, 0, [_D, _HL], [0, 64 | 0]);
export var DescribeImportInput = struct(n0, _DIIe, 0, [_IA], [0]);
export var DescribeImportOutput = struct(n0, _DIOe, 0, [_ITD], [() => ImportTableDescription]);
export var GlobalSecondaryIndex = struct(
  n0,
  _GSIl,
  0,
  [_IN, _KS, _Pr, _PT, _ODT, _WT],
  [0, () => KeySchema, () => Projection, () => ProvisionedThroughput, () => OnDemandThroughput, () => WarmThroughput]
);
export var ImportConflictException = error(
  n0,
  _ICE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ImportConflictException
);
export var ImportNotFoundException = error(
  n0,
  _INFE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ImportNotFoundException
);
export var ImportTableDescription = struct(
  n0,
  _ITD,
  0,
  [_IA, _ISmp, _TA, _TI, _CT, _SBS, _EC, _CWLGA, _IF, _IFO, _ICT, _TCP, _ST, _ET, _PSB, _PIC, _IIC, _FC, _FM],
  [
    0,
    0,
    0,
    0,
    0,
    () => S3BucketSource,
    1,
    0,
    0,
    () => InputFormatOptions,
    0,
    () => TableCreationParameters,
    4,
    4,
    1,
    1,
    1,
    0,
    0,
  ]
);
export var ImportTableInput = struct(
  n0,
  _ITI,
  0,
  [_CT, _SBS, _IF, _IFO, _ICT, _TCP],
  [[0, 4], () => S3BucketSource, 0, () => InputFormatOptions, 0, () => TableCreationParameters]
);
export var ImportTableOutput = struct(n0, _ITO, 0, [_ITD], [() => ImportTableDescription]);
export var InputFormatOptions = struct(n0, _IFO, 0, [_Cs], [() => CsvOptions]);
export var SSESpecification = struct(n0, _SSES, 0, [_Ena, _SSET, _KMSMKI], [2, 0, 0]);
export var TableCreationParameters = struct(
  n0,
  _TCP,
  0,
  [_TN, _ADt, _KS, _BM, _PT, _ODT, _SSES, _GSI],
  [
    0,
    () => AttributeDefinitions,
    () => KeySchema,
    0,
    () => ProvisionedThroughput,
    () => OnDemandThroughput,
    () => SSESpecification,
    () => GlobalSecondaryIndexList,
  ]
);
export var WarmThroughput = struct(n0, _WT, 0, [_RUPS, _WUPS], [1, 1]);
export var AttributeDefinitions = list(n0, _ADt, 0, () => AttributeDefinition);
export var CsvHeaderList = 64 | 0;

export var GlobalSecondaryIndexList = list(n0, _GSIL, 0, () => GlobalSecondaryIndex);
export var DescribeImport = op(
  n0,
  _DIe,
  0,
  () => DescribeImportInput,
  () => DescribeImportOutput
);
export var ImportTable = op(
  n0,
  _IT,
  0,
  () => ImportTableInput,
  () => ImportTableOutput
);
