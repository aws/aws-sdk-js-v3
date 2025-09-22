// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _aENA,
  _ALSC,
  _ALSCL,
  _ALSRL,
  _CALS,
  _CALSR,
  _CALSRr,
  _CDLOC,
  _CDLOCR,
  _CDLOCRr,
  _DALS,
  _DALSR,
  _DALSRe,
  _DDL,
  _DDLOC,
  _DDLOCR,
  _DDLOCRe,
  _DDLR,
  _DDLRe,
  _DLAENAC,
  _DLAENACL,
  _DLE,
  _DLEL,
  _ex,
  _exc,
  _f,
  _GDLOC,
  _GDLOCR,
  _GDLOCRe,
  _h,
  _LDLE,
  _LDLER,
  _LDLERi,
  _mR,
  _nT,
  _r,
  _re,
  _rem,
  _s,
  _sN,
  _sV,
  _ti,
  n0,
} from "./schemas_0";
import { AwsLogSourceResource } from "./schemas_4_Subscriber";

/* eslint no-var: 0 */

export var AwsLogSourceConfiguration = struct(n0, _ALSC, 0, [_a, _r, _sN, _sV], [64 | 0, 64 | 0, 0, 0]);
export var CreateAwsLogSourceRequest = struct(n0, _CALSR, 0, [_s], [() => AwsLogSourceConfigurationList]);
export var CreateAwsLogSourceResponse = struct(n0, _CALSRr, 0, [_f], [64 | 0]);
export var CreateDataLakeOrganizationConfigurationRequest = struct(
  n0,
  _CDLOCR,
  0,
  [_aENA],
  [() => DataLakeAutoEnableNewAccountConfigurationList]
);
export var CreateDataLakeOrganizationConfigurationResponse = struct(n0, _CDLOCRr, 0, [], []);
export var DataLakeAutoEnableNewAccountConfiguration = struct(
  n0,
  _DLAENAC,
  0,
  [_re, _s],
  [0, () => AwsLogSourceResourceList]
);
export var DataLakeException = struct(n0, _DLE, 0, [_re, _ex, _rem, _ti], [0, 0, 0, 5]);
export var DeleteAwsLogSourceRequest = struct(n0, _DALSR, 0, [_s], [() => AwsLogSourceConfigurationList]);
export var DeleteAwsLogSourceResponse = struct(n0, _DALSRe, 0, [_f], [64 | 0]);
export var DeleteDataLakeOrganizationConfigurationRequest = struct(
  n0,
  _DDLOCR,
  0,
  [_aENA],
  [() => DataLakeAutoEnableNewAccountConfigurationList]
);
export var DeleteDataLakeOrganizationConfigurationResponse = struct(n0, _DDLOCRe, 0, [], []);
export var DeleteDataLakeRequest = struct(n0, _DDLR, 0, [_r], [64 | 0]);
export var DeleteDataLakeResponse = struct(n0, _DDLRe, 0, [], []);
export var GetDataLakeOrganizationConfigurationRequest = struct(n0, _GDLOCR, 0, [], []);
export var GetDataLakeOrganizationConfigurationResponse = struct(
  n0,
  _GDLOCRe,
  0,
  [_aENA],
  [() => DataLakeAutoEnableNewAccountConfigurationList]
);
export var ListDataLakeExceptionsRequest = struct(n0, _LDLER, 0, [_r, _mR, _nT], [64 | 0, 1, 0]);
export var ListDataLakeExceptionsResponse = struct(n0, _LDLERi, 0, [_exc, _nT], [() => DataLakeExceptionList, 0]);
export var AwsLogSourceConfigurationList = list(n0, _ALSCL, 0, () => AwsLogSourceConfiguration);
export var AwsLogSourceResourceList = list(n0, _ALSRL, 0, () => AwsLogSourceResource);
export var DataLakeAutoEnableNewAccountConfigurationList = list(
  n0,
  _DLAENACL,
  0,
  () => DataLakeAutoEnableNewAccountConfiguration
);
export var DataLakeExceptionList = list(n0, _DLEL, 0, () => DataLakeException);
export var RegionList = 64 | 0;

export var CreateAwsLogSource = op(
  n0,
  _CALS,
  {
    [_h]: ["POST", "/v1/datalake/logsources/aws", 200],
  },
  () => CreateAwsLogSourceRequest,
  () => CreateAwsLogSourceResponse
);
export var CreateDataLakeOrganizationConfiguration = op(
  n0,
  _CDLOC,
  {
    [_h]: ["POST", "/v1/datalake/organization/configuration", 200],
  },
  () => CreateDataLakeOrganizationConfigurationRequest,
  () => CreateDataLakeOrganizationConfigurationResponse
);
export var DeleteAwsLogSource = op(
  n0,
  _DALS,
  {
    [_h]: ["POST", "/v1/datalake/logsources/aws/delete", 200],
  },
  () => DeleteAwsLogSourceRequest,
  () => DeleteAwsLogSourceResponse
);
export var DeleteDataLake = op(
  n0,
  _DDL,
  {
    [_h]: ["POST", "/v1/datalake/delete", 200],
  },
  () => DeleteDataLakeRequest,
  () => DeleteDataLakeResponse
);
export var DeleteDataLakeOrganizationConfiguration = op(
  n0,
  _DDLOC,
  {
    [_h]: ["POST", "/v1/datalake/organization/configuration/delete", 200],
  },
  () => DeleteDataLakeOrganizationConfigurationRequest,
  () => DeleteDataLakeOrganizationConfigurationResponse
);
export var GetDataLakeOrganizationConfiguration = op(
  n0,
  _GDLOC,
  {
    [_h]: ["GET", "/v1/datalake/organization/configuration", 200],
  },
  () => GetDataLakeOrganizationConfigurationRequest,
  () => GetDataLakeOrganizationConfigurationResponse
);
export var ListDataLakeExceptions = op(
  n0,
  _LDLE,
  {
    [_h]: ["POST", "/v1/datalake/exceptions", 200],
  },
  () => ListDataLakeExceptionsRequest,
  () => ListDataLakeExceptionsResponse
);
