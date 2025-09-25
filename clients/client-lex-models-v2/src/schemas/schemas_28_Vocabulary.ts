// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _bI, _bV, _cDT, _cVS, _DCV, _DCVM, _DCVMR, _DCVMRe, _DCVR, _DCVRe, _h, _lI, _lUDT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteCustomVocabularyRequest = struct(
  n0,
  _DCVR,
  0,
  [_bI, _bV, _lI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteCustomVocabularyResponse = struct(n0, _DCVRe, 0, [_bI, _bV, _lI, _cVS], [0, 0, 0, 0]);
export var DescribeCustomVocabularyMetadataRequest = struct(
  n0,
  _DCVMR,
  0,
  [_bI, _bV, _lI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DescribeCustomVocabularyMetadataResponse = struct(
  n0,
  _DCVMRe,
  0,
  [_bI, _bV, _lI, _cVS, _cDT, _lUDT],
  [0, 0, 0, 0, 4, 4]
);
export var DeleteCustomVocabulary = op(
  n0,
  _DCV,
  {
    [_h]: ["DELETE", "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary", 202],
  },
  () => DeleteCustomVocabularyRequest,
  () => DeleteCustomVocabularyResponse
);
export var DescribeCustomVocabularyMetadata = op(
  n0,
  _DCVM,
  {
    [_h]: [
      "GET",
      "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/metadata",
      200,
    ],
  },
  () => DescribeCustomVocabularyMetadataRequest,
  () => DescribeCustomVocabularyMetadataResponse
);
