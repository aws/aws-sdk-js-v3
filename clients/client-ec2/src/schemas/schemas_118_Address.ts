// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _A,
  _AAT,
  _AATR,
  _AATRc,
  _aI,
  _AIl,
  _AT,
  _aT,
  _ATS,
  _aTS,
  _DR,
  _eQN,
  _PI,
  _pI,
  _TAI,
  _tAI,
  _TOAT,
  _tOAT,
  _TOET,
  _tOET,
  _TS,
  _TSa,
  _xN,
  n0,
  TagSpecificationList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AcceptAddressTransferRequest = struct(
  n0,
  _AATR,
  0,
  [_A, _TS, _DR],
  [
    0,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    2,
  ]
);
export var AcceptAddressTransferResult = struct(
  n0,
  _AATRc,
  0,
  [_AT],
  [
    [
      () => AddressTransfer,
      {
        [_eQN]: `AddressTransfer`,
        [_xN]: _aT,
      },
    ],
  ]
);
export var AddressTransfer = struct(
  n0,
  _AT,
  0,
  [_PI, _AIl, _TAI, _TOET, _TOAT, _ATS],
  [
    [
      0,
      {
        [_eQN]: `PublicIp`,
        [_xN]: _pI,
      },
    ],
    [
      0,
      {
        [_eQN]: `AllocationId`,
        [_xN]: _aI,
      },
    ],
    [
      0,
      {
        [_eQN]: `TransferAccountId`,
        [_xN]: _tAI,
      },
    ],
    [
      4,
      {
        [_eQN]: `TransferOfferExpirationTimestamp`,
        [_xN]: _tOET,
      },
    ],
    [
      4,
      {
        [_eQN]: `TransferOfferAcceptedTimestamp`,
        [_xN]: _tOAT,
      },
    ],
    [
      0,
      {
        [_eQN]: `AddressTransferStatus`,
        [_xN]: _aTS,
      },
    ],
  ]
);
export var AcceptAddressTransfer = op(
  n0,
  _AAT,
  0,
  () => AcceptAddressTransferRequest,
  () => AcceptAddressTransferResult
);
