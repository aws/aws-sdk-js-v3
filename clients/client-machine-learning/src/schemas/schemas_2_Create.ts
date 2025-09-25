// smithy-typescript generated code
import { error, op, sim, struct } from "@smithy/core/schema";

import { IdempotentParameterMismatchException as __IdempotentParameterMismatchException } from "../models/index";
import {
  _BPDSI,
  _BPI,
  _BPN,
  _c,
  _CBP,
  _CBPI,
  _CBPO,
  _CDSFR,
  _CDSFRDS,
  _CDSFRDSI,
  _CDSFRDSO,
  _CDSFRI,
  _CDSFRO,
  _CDSFS,
  _CDSFSI,
  _CDSFSO,
  _CE,
  _CEI,
  _CEO,
  _CMLM,
  _CMLMI,
  _CMLMO,
  _co,
  _CS,
  _DC,
  _DI,
  _DLS,
  _DR,
  _DS,
  _DSat,
  _DSI,
  _DSLS,
  _DSN,
  _DSU,
  _e,
  _EDSI,
  _EI,
  _EN,
  _hE,
  _IPME,
  _m,
  _MLMI,
  _MLMN,
  _MLMT,
  _OU,
  _P,
  _Pa,
  _R,
  _RARN,
  _RDC,
  _RDP,
  _RDS,
  _RDSD,
  _RDSDC,
  _RDSDP,
  _RDSDS,
  _RR,
  _RU,
  _SDS,
  _SGI,
  _SI,
  _SR,
  _SSL,
  _SSQ,
  _TDSI,
  _U,
  n0,
} from "./schemas_0";
import { RDSDatabase, RedshiftDatabase } from "./schemas_1_Data";

/* eslint no-var: 0 */

export var RDSDatabasePassword = sim(n0, _RDSDP, 0, 8);
export var RedshiftDatabasePassword = sim(n0, _RDP, 0, 8);
export var CreateBatchPredictionInput = struct(n0, _CBPI, 0, [_BPI, _BPN, _MLMI, _BPDSI, _OU], [0, 0, 0, 0, 0]);
export var CreateBatchPredictionOutput = struct(n0, _CBPO, 0, [_BPI], [0]);
export var CreateDataSourceFromRDSInput = struct(
  n0,
  _CDSFRDSI,
  0,
  [_DSI, _DSN, _RDSD, _RARN, _CS],
  [0, 0, [() => RDSDataSpec, 0], 0, 2]
);
export var CreateDataSourceFromRDSOutput = struct(n0, _CDSFRDSO, 0, [_DSI], [0]);
export var CreateDataSourceFromRedshiftInput = struct(
  n0,
  _CDSFRI,
  0,
  [_DSI, _DSN, _DS, _RARN, _CS],
  [0, 0, [() => RedshiftDataSpec, 0], 0, 2]
);
export var CreateDataSourceFromRedshiftOutput = struct(n0, _CDSFRO, 0, [_DSI], [0]);
export var CreateDataSourceFromS3Input = struct(n0, _CDSFSI, 0, [_DSI, _DSN, _DS, _CS], [0, 0, () => S3DataSpec, 2]);
export var CreateDataSourceFromS3Output = struct(n0, _CDSFSO, 0, [_DSI], [0]);
export var CreateEvaluationInput = struct(n0, _CEI, 0, [_EI, _EN, _MLMI, _EDSI], [0, 0, 0, 0]);
export var CreateEvaluationOutput = struct(n0, _CEO, 0, [_EI], [0]);
export var CreateMLModelInput = struct(
  n0,
  _CMLMI,
  0,
  [_MLMI, _MLMN, _MLMT, _P, _TDSI, _R, _RU],
  [0, 0, 0, 128 | 0, 0, 0, 0]
);
export var CreateMLModelOutput = struct(n0, _CMLMO, 0, [_MLMI], [0]);
export var IdempotentParameterMismatchException = error(
  n0,
  _IPME,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m, _co],
  [0, 1],

  __IdempotentParameterMismatchException
);
export var RDSDatabaseCredentials = struct(n0, _RDSDC, 0, [_U, _Pa], [0, [() => RDSDatabasePassword, 0]]);
export var RDSDataSpec = struct(
  n0,
  _RDSDS,
  0,
  [_DI, _SSQ, _DC, _SSL, _DR, _DSat, _DSU, _RR, _SR, _SI, _SGI],
  [() => RDSDatabase, 0, [() => RDSDatabaseCredentials, 0], 0, 0, 0, 0, 0, 0, 0, 64 | 0]
);
export var RedshiftDatabaseCredentials = struct(n0, _RDC, 0, [_U, _Pa], [0, [() => RedshiftDatabasePassword, 0]]);
export var RedshiftDataSpec = struct(
  n0,
  _RDS,
  0,
  [_DI, _SSQ, _DC, _SSL, _DR, _DSat, _DSU],
  [() => RedshiftDatabase, 0, [() => RedshiftDatabaseCredentials, 0], 0, 0, 0, 0]
);
export var S3DataSpec = struct(n0, _SDS, 0, [_DLS, _DR, _DSat, _DSLS], [0, 0, 0, 0]);
export var EDPSecurityGroupIds = 64 | 0;

export var CreateBatchPrediction = op(
  n0,
  _CBP,
  0,
  () => CreateBatchPredictionInput,
  () => CreateBatchPredictionOutput
);
export var CreateDataSourceFromRDS = op(
  n0,
  _CDSFRDS,
  0,
  () => CreateDataSourceFromRDSInput,
  () => CreateDataSourceFromRDSOutput
);
export var CreateDataSourceFromRedshift = op(
  n0,
  _CDSFR,
  0,
  () => CreateDataSourceFromRedshiftInput,
  () => CreateDataSourceFromRedshiftOutput
);
export var CreateDataSourceFromS3 = op(
  n0,
  _CDSFS,
  0,
  () => CreateDataSourceFromS3Input,
  () => CreateDataSourceFromS3Output
);
export var CreateEvaluation = op(
  n0,
  _CE,
  0,
  () => CreateEvaluationInput,
  () => CreateEvaluationOutput
);
export var CreateMLModel = op(
  n0,
  _CMLM,
  0,
  () => CreateMLModelInput,
  () => CreateMLModelOutput
);
