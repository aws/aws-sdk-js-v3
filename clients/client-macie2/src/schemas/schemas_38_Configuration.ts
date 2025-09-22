// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _bN,
  _CEC,
  _con,
  _GCEC,
  _GCECR,
  _GCECRe,
  _h,
  _jN,
  _kKA,
  _kP,
  _PCEC,
  _PCECR,
  _PCECRu,
  _SD,
  _sD,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ClassificationExportConfiguration = struct(
  n0,
  _CEC,
  0,
  [_sD],
  [
    [
      () => S3Destination,
      {
        [_jN]: _sD,
      },
    ],
  ]
);
export var GetClassificationExportConfigurationRequest = struct(n0, _GCECR, 0, [], []);
export var GetClassificationExportConfigurationResponse = struct(
  n0,
  _GCECRe,
  0,
  [_con],
  [
    [
      () => ClassificationExportConfiguration,
      {
        [_jN]: _con,
      },
    ],
  ]
);
export var PutClassificationExportConfigurationRequest = struct(
  n0,
  _PCECR,
  0,
  [_con],
  [
    [
      () => ClassificationExportConfiguration,
      {
        [_jN]: _con,
      },
    ],
  ]
);
export var PutClassificationExportConfigurationResponse = struct(
  n0,
  _PCECRu,
  0,
  [_con],
  [
    [
      () => ClassificationExportConfiguration,
      {
        [_jN]: _con,
      },
    ],
  ]
);
export var S3Destination = struct(
  n0,
  _SD,
  0,
  [_bN, _kP, _kKA],
  [
    [
      0,
      {
        [_jN]: _bN,
      },
    ],
    [
      0,
      {
        [_jN]: _kP,
      },
    ],
    [
      0,
      {
        [_jN]: _kKA,
      },
    ],
  ]
);
export var GetClassificationExportConfiguration = op(
  n0,
  _GCEC,
  {
    [_h]: ["GET", "/classification-export-configuration", 200],
  },
  () => GetClassificationExportConfigurationRequest,
  () => GetClassificationExportConfigurationResponse
);
export var PutClassificationExportConfiguration = op(
  n0,
  _PCEC,
  {
    [_h]: ["PUT", "/classification-export-configuration", 200],
  },
  () => PutClassificationExportConfigurationRequest,
  () => PutClassificationExportConfigurationResponse
);
