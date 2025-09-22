// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ConflictException as __ConflictException,
  IntegrationConflictOperationFault as __IntegrationConflictOperationFault,
  IntegrationQuotaExceededFault as __IntegrationQuotaExceededFault,
  InvalidIntegrationStateFault as __InvalidIntegrationStateFault,
  KMSKeyNotAccessibleFault as __KMSKeyNotAccessibleFault,
} from "../models/index";
import {
  _ACuth,
  _AEC,
  _BE,
  _BEa,
  _BEPL,
  _c,
  _CEonf,
  _CI,
  _CIR,
  _CIre,
  _CIRP,
  _CIRPR,
  _CIRPRr,
  _CIRr,
  _CNo,
  _Cod,
  _CPo,
  _CTo,
  _CTr,
  _D,
  _DFa,
  _DIel,
  _DIR,
  _DIRe,
  _DN,
  _DPI,
  _DPIR,
  _DPIRe,
  _E,
  _e,
  _GPI,
  _GPIR,
  _GPIRe,
  _hE,
  _IAnt,
  _ICn,
  _ICOF,
  _II,
  _IISF,
  _IN,
  _INn,
  _IQEF,
  _ISn,
  _Ke,
  _KKI,
  _KMSKNAF,
  _KSE,
  _KSEL,
  _M,
  _MIo,
  _MIR,
  _MIRo,
  _N,
  _NTe,
  _Pa,
  _PID,
  _PIDL,
  _RAe,
  _SAo,
  _SPP,
  _St,
  _TA,
  _Tag,
  _TCe,
  _TCI,
  _TCR,
  _TCRe,
  _TN,
  _TPP,
  _Ty,
  n0,
} from "./schemas_0";
import { AuthenticationConfigurationInput } from "./schemas_13_Connection";
import {
  IntegrationConfig,
  IntegrationErrorList,
  IntegrationTagsList,
  SourceProcessingProperties,
  TargetProcessingProperties,
} from "./schemas_26_Integration";
import { PartitionValueList } from "./schemas_110_Partition";

/* eslint no-var: 0 */

export var BackfillError = struct(n0, _BE, 0, [_Cod, _Pa], [0, () => BackfillErroredPartitionsList]);
export var ConflictException = error(
  n0,
  _CEonf,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __ConflictException
);
export var CreateIntegrationRequest = struct(
  n0,
  _CIR,
  0,
  [_IN, _SAo, _TA, _D, _DFa, _KKI, _AEC, _Tag, _ICn],
  [0, 0, 0, 0, 0, 0, 128 | 0, () => IntegrationTagsList, () => IntegrationConfig]
);
export var CreateIntegrationResourcePropertyRequest = struct(
  n0,
  _CIRPR,
  0,
  [_RAe, _SPP, _TPP],
  [0, () => SourceProcessingProperties, () => TargetProcessingProperties]
);
export var CreateIntegrationResourcePropertyResponse = struct(
  n0,
  _CIRPRr,
  0,
  [_RAe, _SPP, _TPP],
  [0, () => SourceProcessingProperties, () => TargetProcessingProperties]
);
export var CreateIntegrationResponse = struct(
  n0,
  _CIRr,
  0,
  [_SAo, _TA, _IN, _D, _IAnt, _KKI, _AEC, _Tag, _St, _CTr, _E, _DFa, _ICn],
  [0, 0, 0, 0, 0, 0, 128 | 0, () => IntegrationTagsList, 0, 4, () => IntegrationErrorList, 0, () => IntegrationConfig]
);
export var DeleteIntegrationRequest = struct(n0, _DIR, 0, [_II], [0]);
export var DeleteIntegrationResponse = struct(
  n0,
  _DIRe,
  0,
  [_SAo, _TA, _IN, _D, _IAnt, _KKI, _AEC, _Tag, _St, _CTr, _E, _DFa],
  [0, 0, 0, 0, 0, 0, 128 | 0, () => IntegrationTagsList, 0, 4, () => IntegrationErrorList, 0]
);
export var DeletePartitionIndexRequest = struct(n0, _DPIR, 0, [_CI, _DN, _TN, _INn], [0, 0, 0, 0]);
export var DeletePartitionIndexResponse = struct(n0, _DPIRe, 0, [], []);
export var GetPartitionIndexesRequest = struct(n0, _GPIR, 0, [_CI, _DN, _TN, _NTe], [0, 0, 0, 0]);
export var GetPartitionIndexesResponse = struct(n0, _GPIRe, 0, [_PIDL, _NTe], [() => PartitionIndexDescriptorList, 0]);
export var IntegrationConflictOperationFault = error(
  n0,
  _ICOF,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __IntegrationConflictOperationFault
);
export var IntegrationQuotaExceededFault = error(
  n0,
  _IQEF,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_M],
  [0],

  __IntegrationQuotaExceededFault
);
export var InvalidIntegrationStateFault = error(
  n0,
  _IISF,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidIntegrationStateFault
);
export var KeySchemaElement = struct(n0, _KSE, 0, [_N, _Ty], [0, 0]);
export var KMSKeyNotAccessibleFault = error(
  n0,
  _KMSKNAF,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __KMSKeyNotAccessibleFault
);
export var ModifyIntegrationRequest = struct(
  n0,
  _MIR,
  0,
  [_II, _D, _DFa, _ICn, _IN],
  [0, 0, 0, () => IntegrationConfig, 0]
);
export var ModifyIntegrationResponse = struct(
  n0,
  _MIRo,
  0,
  [_SAo, _TA, _IN, _D, _IAnt, _KKI, _AEC, _Tag, _St, _CTr, _E, _DFa, _ICn],
  [0, 0, 0, 0, 0, 0, 128 | 0, () => IntegrationTagsList, 0, 4, () => IntegrationErrorList, 0, () => IntegrationConfig]
);
export var PartitionIndexDescriptor = struct(
  n0,
  _PID,
  0,
  [_INn, _Ke, _ISn, _BEa],
  [0, () => KeySchemaElementList, 0, () => BackfillErrors]
);
export var TestConnectionInput = struct(
  n0,
  _TCI,
  0,
  [_CTo, _CPo, _ACuth],
  [0, 128 | 0, [() => AuthenticationConfigurationInput, 0]]
);
export var TestConnectionRequest = struct(n0, _TCR, 0, [_CNo, _CI, _TCI], [0, 0, [() => TestConnectionInput, 0]]);
export var TestConnectionResponse = struct(n0, _TCRe, 0, [], []);
export var BackfillErroredPartitionsList = list(n0, _BEPL, 0, () => PartitionValueList);
export var BackfillErrors = list(n0, _BEa, 0, () => BackfillError);
export var KeySchemaElementList = list(n0, _KSEL, 0, () => KeySchemaElement);
export var PartitionIndexDescriptorList = list(n0, _PIDL, 0, () => PartitionIndexDescriptor);
export var CreateIntegration = op(
  n0,
  _CIre,
  0,
  () => CreateIntegrationRequest,
  () => CreateIntegrationResponse
);
export var CreateIntegrationResourceProperty = op(
  n0,
  _CIRP,
  0,
  () => CreateIntegrationResourcePropertyRequest,
  () => CreateIntegrationResourcePropertyResponse
);
export var DeleteIntegration = op(
  n0,
  _DIel,
  0,
  () => DeleteIntegrationRequest,
  () => DeleteIntegrationResponse
);
export var DeletePartitionIndex = op(
  n0,
  _DPI,
  0,
  () => DeletePartitionIndexRequest,
  () => DeletePartitionIndexResponse
);
export var GetPartitionIndexes = op(
  n0,
  _GPI,
  0,
  () => GetPartitionIndexesRequest,
  () => GetPartitionIndexesResponse
);
export var ModifyIntegration = op(
  n0,
  _MIo,
  0,
  () => ModifyIntegrationRequest,
  () => ModifyIntegrationResponse
);
export var TestConnection = op(
  n0,
  _TCe,
  0,
  () => TestConnectionRequest,
  () => TestConnectionResponse
);
