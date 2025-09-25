// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aIt,
  _AItt,
  _APIAss,
  _ASI,
  _ASIs,
  _at,
  _Att,
  _CTS,
  _CTSR,
  _De,
  _de,
  _DEQC,
  _DOT,
  _dOT,
  _DR,
  _dR,
  _EPI,
  _EQC,
  _eQN,
  _ESS,
  _G,
  _MNIA,
  _MNIAR,
  _NIAC,
  _NII,
  _nII,
  _SDC,
  _sDC,
  _SGI,
  _SGISL,
  _SIL,
  _TET,
  _UST,
  _UTd,
  _xN,
  n0,
  Unit,
} from "./schemas_0";
import { EnaSrdSpecification } from "./schemas_70_Network";
import { AttributeValue } from "./schemas_102_Attribute";
import { AttributeBooleanValue } from "./schemas_261_Attribute";

/* eslint no-var: 0 */

export var ConnectionTrackingSpecificationRequest = struct(n0, _CTSR, 0, [_TET, _UST, _UTd], [1, 1, 1]);
export var ModifyNetworkInterfaceAttributeRequest = struct(
  n0,
  _MNIAR,
  0,
  [_ESS, _EPI, _CTS, _APIAss, _ASI, _DR, _NII, _De, _SDC, _G, _Att],
  [
    () => EnaSrdSpecification,
    2,
    () => ConnectionTrackingSpecificationRequest,
    2,
    [
      () => SubnetIdList,
      {
        [_xN]: _ASIs,
      },
    ],
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      0,
      {
        [_eQN]: `NetworkInterfaceId`,
        [_xN]: _nII,
      },
    ],
    [
      () => AttributeValue,
      {
        [_eQN]: `Description`,
        [_xN]: _de,
      },
    ],
    [
      () => AttributeBooleanValue,
      {
        [_eQN]: `SourceDestCheck`,
        [_xN]: _sDC,
      },
    ],
    [
      () => SecurityGroupIdStringList,
      {
        [_xN]: _SGI,
      },
    ],
    [
      () => NetworkInterfaceAttachmentChanges,
      {
        [_eQN]: `Attachment`,
        [_xN]: _at,
      },
    ],
  ]
);
export var NetworkInterfaceAttachmentChanges = struct(
  n0,
  _NIAC,
  0,
  [_DEQC, _EQC, _AItt, _DOT],
  [
    2,
    1,
    [
      0,
      {
        [_eQN]: `AttachmentId`,
        [_xN]: _aIt,
      },
    ],
    [
      2,
      {
        [_eQN]: `DeleteOnTermination`,
        [_xN]: _dOT,
      },
    ],
  ]
);
export var SecurityGroupIdStringList = list(n0, _SGISL, 0, [
  0,
  {
    [_xN]: _SGI,
  },
]);
export var SubnetIdList = list(n0, _SIL, 0, [
  0,
  {
    [_xN]: _ASIs,
  },
]);
export var ModifyNetworkInterfaceAttribute = op(
  n0,
  _MNIA,
  0,
  () => ModifyNetworkInterfaceAttributeRequest,
  () => Unit
);
