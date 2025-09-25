// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _ACT,
  _An,
  _B,
  _CA,
  _CM,
  _CMD,
  _Des,
  _DMR,
  _EBO,
  _EC,
  _EOR,
  _ETv,
  _F,
  _GBR,
  _GBRO,
  _GBRR,
  _h,
  _hH,
  _hP,
  _ID,
  _Me,
  _Mi,
  _O,
  _P,
  _PBR,
  _PBRR,
  _Pri,
  _R,
  _RCe,
  _RKKID,
  _RM,
  _Ro,
  _RRAO,
  _RRe,
  _RRep,
  _RRF,
  _RT,
  _RTV,
  _Ru,
  _S,
  _SC,
  _SKEO,
  _SSC,
  _T,
  _Ta,
  _Tim,
  _To,
  _xabolt,
  _xaebo,
  _xasca,
  _xF,
  _xN,
  n0,
  Tag,
  TagSet,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessControlTranslation = struct(n0, _ACT, 0, [_O], [0]);
export var DeleteMarkerReplication = struct(n0, _DMR, 0, [_S], [0]);
export var Destination = struct(
  n0,
  _Des,
  0,
  [_B, _A, _SC, _ACT, _EC, _RT, _Me],
  [0, 0, 0, () => AccessControlTranslation, () => EncryptionConfiguration, () => ReplicationTime, () => Metrics]
);
export var EncryptionConfiguration = struct(n0, _EC, 0, [_RKKID], [0]);
export var ExistingObjectReplication = struct(n0, _EOR, 0, [_S], [0]);
export var GetBucketReplicationOutput = struct(n0, _GBRO, 0, [_RCe], [[() => ReplicationConfiguration, 16]]);
export var GetBucketReplicationRequest = struct(
  n0,
  _GBRR,
  0,
  [_B, _EBO],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
  ]
);
export var Metrics = struct(n0, _Me, 0, [_S, _ETv], [0, () => ReplicationTimeValue]);
export var PutBucketReplicationRequest = struct(
  n0,
  _PBRR,
  0,
  [_B, _CMD, _CA, _RCe, _To, _EBO],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _CM,
      },
    ],
    [
      0,
      {
        [_hH]: _xasca,
      },
    ],
    [
      () => ReplicationConfiguration,
      {
        [_xN]: _RCe,
        [_hP]: 1,
      },
    ],
    [
      0,
      {
        [_hH]: _xabolt,
      },
    ],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
  ]
);
export var ReplicaModifications = struct(n0, _RM, 0, [_S], [0]);
export var ReplicationConfiguration = struct(
  n0,
  _RCe,
  0,
  [_Ro, _R],
  [
    0,
    [
      () => ReplicationRules,
      {
        [_xN]: _Ru,
        [_xF]: 1,
      },
    ],
  ]
);
export var ReplicationRule = struct(
  n0,
  _RRe,
  0,
  [_ID, _Pri, _P, _F, _S, _SSC, _EOR, _Des, _DMR],
  [
    0,
    1,
    0,
    [() => ReplicationRuleFilter, 0],
    0,
    () => SourceSelectionCriteria,
    () => ExistingObjectReplication,
    () => Destination,
    () => DeleteMarkerReplication,
  ]
);
export var ReplicationRuleAndOperator = struct(
  n0,
  _RRAO,
  0,
  [_P, _T],
  [
    0,
    [
      () => TagSet,
      {
        [_xN]: _Ta,
        [_xF]: 1,
      },
    ],
  ]
);
export var ReplicationRuleFilter = struct(
  n0,
  _RRF,
  0,
  [_P, _Ta, _An],
  [0, () => Tag, [() => ReplicationRuleAndOperator, 0]]
);
export var ReplicationTime = struct(n0, _RT, 0, [_S, _Tim], [0, () => ReplicationTimeValue]);
export var ReplicationTimeValue = struct(n0, _RTV, 0, [_Mi], [1]);
export var SourceSelectionCriteria = struct(
  n0,
  _SSC,
  0,
  [_SKEO, _RM],
  [() => SseKmsEncryptedObjects, () => ReplicaModifications]
);
export var SseKmsEncryptedObjects = struct(n0, _SKEO, 0, [_S], [0]);
export var ReplicationRules = list(n0, _RRep, 0, [() => ReplicationRule, 0]);
export var GetBucketReplication = op(
  n0,
  _GBR,
  {
    [_h]: ["GET", "/?replication", 200],
  },
  () => GetBucketReplicationRequest,
  () => GetBucketReplicationOutput
);
export var PutBucketReplication = op(
  n0,
  _PBR,
  {
    [_h]: ["PUT", "/?replication", 200],
  },
  () => PutBucketReplicationRequest,
  () => Unit
);
