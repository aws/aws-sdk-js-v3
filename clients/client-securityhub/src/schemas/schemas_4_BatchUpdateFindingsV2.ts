// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BUFV,
  _BUFVPF,
  _BUFVPFL,
  _BUFVR,
  _BUFVRa,
  _BUFVUF,
  _BUFVUFL,
  _CAU,
  _Com,
  _ECr,
  _EMr,
  _FIin,
  _FIind,
  _FIU,
  _h,
  _MPU,
  _MUe,
  _MUet,
  _OFI,
  _OFIL,
  _PFro,
  _SIe,
  _SIt,
  _UF,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchUpdateFindingsV2ProcessedFinding = struct(
  n0,
  _BUFVPF,
  0,
  [_FIind, _MUe],
  [() => OcsfFindingIdentifier, 0]
);
export var BatchUpdateFindingsV2Request = struct(
  n0,
  _BUFVR,
  0,
  [_MUet, _FIin, _Com, _SIe, _SIt],
  [64 | 0, () => OcsfFindingIdentifierList, 0, 1, 1]
);
export var BatchUpdateFindingsV2Response = struct(
  n0,
  _BUFVRa,
  0,
  [_PFro, _UF],
  [() => BatchUpdateFindingsV2ProcessedFindingsList, () => BatchUpdateFindingsV2UnprocessedFindingsList]
);
export var BatchUpdateFindingsV2UnprocessedFinding = struct(
  n0,
  _BUFVUF,
  0,
  [_FIind, _MUe, _ECr, _EMr],
  [() => OcsfFindingIdentifier, 0, 0, 0]
);
export var OcsfFindingIdentifier = struct(n0, _OFI, 0, [_CAU, _FIU, _MPU], [0, 0, 0]);
export var BatchUpdateFindingsV2ProcessedFindingsList = list(
  n0,
  _BUFVPFL,
  0,
  () => BatchUpdateFindingsV2ProcessedFinding
);
export var BatchUpdateFindingsV2UnprocessedFindingsList = list(
  n0,
  _BUFVUFL,
  0,
  () => BatchUpdateFindingsV2UnprocessedFinding
);
export var MetadataUidList = 64 | 0;

export var OcsfFindingIdentifierList = list(n0, _OFIL, 0, () => OcsfFindingIdentifier);
export var BatchUpdateFindingsV2 = op(
  n0,
  _BUFV,
  {
    [_h]: ["PATCH", "/findingsv2/batchupdatev2", 200],
  },
  () => BatchUpdateFindingsV2Request,
  () => BatchUpdateFindingsV2Response
);
