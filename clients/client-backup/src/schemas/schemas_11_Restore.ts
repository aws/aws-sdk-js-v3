// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AI,
  _BSIB,
  _CB,
  _CD,
  _CDo,
  _CRA,
  _DRJe,
  _DRJIe,
  _DRJOe,
  _DSe,
  _DSM,
  _ECTM,
  _GRJM,
  _GRJMI,
  _GRJMO,
  _h,
  _IRA,
  _Me,
  _PD,
  _PRVR,
  _PRVRI,
  _RJIe,
  _RPA,
  _RPCD,
  _RT,
  _SM,
  _St,
  _VSa,
  _VSM,
  n0,
  Unit,
} from "./schemas_0";
import { Metadata } from "./schemas_12_Restore";
import { RestoreJobCreator } from "./schemas_32_Restore";

/* eslint no-var: 0 */

export var DescribeRestoreJobInput = struct(n0, _DRJIe, 0, [_RJIe], [[0, 1]]);
export var DescribeRestoreJobOutput = struct(
  n0,
  _DRJOe,
  0,
  [_AI, _RJIe, _RPA, _CD, _CDo, _St, _SM, _PD, _BSIB, _IRA, _ECTM, _CRA, _RT, _RPCD, _CB, _VSa, _VSM, _DSe, _DSM],
  [0, 0, 0, 4, 4, 0, 0, 0, 1, 0, 1, 0, 0, 4, () => RestoreJobCreator, 0, 0, 0, 0]
);
export var GetRestoreJobMetadataInput = struct(n0, _GRJMI, 0, [_RJIe], [[0, 1]]);
export var GetRestoreJobMetadataOutput = struct(n0, _GRJMO, 0, [_RJIe, _Me], [0, [() => Metadata, 0]]);
export var PutRestoreValidationResultInput = struct(n0, _PRVRI, 0, [_RJIe, _VSa, _VSM], [[0, 1], 0, 0]);
export var DescribeRestoreJob = op(
  n0,
  _DRJe,
  {
    [_h]: ["GET", "/restore-jobs/{RestoreJobId}", 200],
  },
  () => DescribeRestoreJobInput,
  () => DescribeRestoreJobOutput
);
export var GetRestoreJobMetadata = op(
  n0,
  _GRJM,
  {
    [_h]: ["GET", "/restore-jobs/{RestoreJobId}/metadata", 200],
  },
  () => GetRestoreJobMetadataInput,
  () => GetRestoreJobMetadataOutput
);
export var PutRestoreValidationResult = op(
  n0,
  _PRVR,
  {
    [_h]: ["PUT", "/restore-jobs/{RestoreJobId}/validations", 204],
  },
  () => PutRestoreValidationResultInput,
  () => Unit
);
