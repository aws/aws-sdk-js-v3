// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ci,
  _ci,
  _CSCR,
  _CSCRR,
  _CSCRRr,
  _De,
  _de,
  _DR,
  _DSCR,
  _dSCR,
  _DSCRe,
  _DSCRR,
  _DSCRRe,
  _eQN,
  _Fi,
  _Fil,
  _GSCR,
  _GSCRR,
  _GSCRRe,
  _it,
  _MR,
  _NTe,
  _nTe,
  _OI,
  _oI,
  _RT,
  _rT,
  _sCRI,
  _SCRIu,
  _SCRL,
  _SCRu,
  _sCRu,
  _SICR,
  _sICRS,
  _sICRSu,
  _SICRu,
  _SIu,
  _sIu,
  _T,
  _TS,
  _tS,
  _TSa,
  _xN,
  FilterList,
  n0,
  TagList,
  TagSpecificationList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateSubnetCidrReservationRequest = struct(
  n0,
  _CSCRR,
  0,
  [_SIu, _Ci, _RT, _De, _DR, _TS],
  [
    0,
    0,
    0,
    0,
    2,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
  ]
);
export var CreateSubnetCidrReservationResult = struct(
  n0,
  _CSCRRr,
  0,
  [_SCRu],
  [
    [
      () => SubnetCidrReservation,
      {
        [_eQN]: `SubnetCidrReservation`,
        [_xN]: _sCRu,
      },
    ],
  ]
);
export var DeleteSubnetCidrReservationRequest = struct(n0, _DSCRR, 0, [_SCRIu, _DR], [0, 2]);
export var DeleteSubnetCidrReservationResult = struct(
  n0,
  _DSCRRe,
  0,
  [_DSCR],
  [
    [
      () => SubnetCidrReservation,
      {
        [_eQN]: `DeletedSubnetCidrReservation`,
        [_xN]: _dSCR,
      },
    ],
  ]
);
export var GetSubnetCidrReservationsRequest = struct(
  n0,
  _GSCRR,
  0,
  [_Fi, _SIu, _DR, _NTe, _MR],
  [
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    0,
    2,
    0,
    1,
  ]
);
export var GetSubnetCidrReservationsResult = struct(
  n0,
  _GSCRRe,
  0,
  [_SICR, _SICRu, _NTe],
  [
    [
      () => SubnetCidrReservationList,
      {
        [_eQN]: `SubnetIpv4CidrReservationSet`,
        [_xN]: _sICRS,
      },
    ],
    [
      () => SubnetCidrReservationList,
      {
        [_eQN]: `SubnetIpv6CidrReservationSet`,
        [_xN]: _sICRSu,
      },
    ],
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
  ]
);
export var SubnetCidrReservation = struct(
  n0,
  _SCRu,
  0,
  [_SCRIu, _SIu, _Ci, _RT, _OI, _De, _T],
  [
    [
      0,
      {
        [_eQN]: `SubnetCidrReservationId`,
        [_xN]: _sCRI,
      },
    ],
    [
      0,
      {
        [_eQN]: `SubnetId`,
        [_xN]: _sIu,
      },
    ],
    [
      0,
      {
        [_eQN]: `Cidr`,
        [_xN]: _ci,
      },
    ],
    [
      0,
      {
        [_eQN]: `ReservationType`,
        [_xN]: _rT,
      },
    ],
    [
      0,
      {
        [_eQN]: `OwnerId`,
        [_xN]: _oI,
      },
    ],
    [
      0,
      {
        [_eQN]: `Description`,
        [_xN]: _de,
      },
    ],
    [
      () => TagList,
      {
        [_eQN]: `TagSet`,
        [_xN]: _tS,
      },
    ],
  ]
);
export var SubnetCidrReservationList = list(n0, _SCRL, 0, [
  () => SubnetCidrReservation,
  {
    [_xN]: _it,
  },
]);
export var CreateSubnetCidrReservation = op(
  n0,
  _CSCR,
  0,
  () => CreateSubnetCidrReservationRequest,
  () => CreateSubnetCidrReservationResult
);
export var DeleteSubnetCidrReservation = op(
  n0,
  _DSCRe,
  0,
  () => DeleteSubnetCidrReservationRequest,
  () => DeleteSubnetCidrReservationResult
);
export var GetSubnetCidrReservations = op(
  n0,
  _GSCR,
  0,
  () => GetSubnetCidrReservationsRequest,
  () => GetSubnetCidrReservationsResult
);
