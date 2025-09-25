// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { InvalidDataShareFault as __InvalidDataShareFault } from "../models/index";
import {
  _ADS,
  _ADSC,
  _ADSCM,
  _ADSM,
  _AEA,
  _APAC,
  _aQE,
  _AW,
  _c,
  _CA,
  _CAW,
  _CD,
  _CI,
  _CR,
  _DDS,
  _DDSC,
  _DDSCM,
  _DDSe,
  _DDSFC,
  _DDSFCM,
  _DDSFCR,
  _DDSFP,
  _DDSFPM,
  _DDSFPR,
  _DDSM,
  _DDSMe,
  _DDSR,
  _DEA,
  _DS,
  _DSA,
  _DSa,
  _DSAa,
  _DSAat,
  _DSAL,
  _DSL,
  _DST,
  _e,
  _hE,
  _IDSF,
  _M,
  _m,
  _MB,
  _MR,
  _PAr,
  _PAW,
  _RDS,
  _RDSM,
  _SCD,
  _St,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateDataShareConsumerMessage = struct(n0, _ADSCM, 0, [_DSA, _AEA, _CA, _CR, _AW], [0, 2, 0, 0, 2]);
export var AuthorizeDataShareMessage = struct(n0, _ADSM, 0, [_DSA, _CI, _AW], [0, 0, 2]);
export var DataShare = struct(
  n0,
  _DS,
  0,
  [_DSA, _PAr, _APAC, _DSAa, _MB, _DST],
  [0, 0, 2, () => DataShareAssociationList, 0, 0]
);
export var DataShareAssociation = struct(n0, _DSAat, 0, [_CI, _St, _CR, _CD, _SCD, _PAW, _CAW], [0, 0, 0, 4, 4, 2, 2]);
export var DeauthorizeDataShareMessage = struct(n0, _DDSM, 0, [_DSA, _CI], [0, 0]);
export var DescribeDataSharesForConsumerMessage = struct(n0, _DDSFCM, 0, [_CA, _St, _MR, _M], [0, 0, 1, 0]);
export var DescribeDataSharesForConsumerResult = struct(n0, _DDSFCR, 0, [_DSa, _M], [() => DataShareList, 0]);
export var DescribeDataSharesForProducerMessage = struct(n0, _DDSFPM, 0, [_PAr, _St, _MR, _M], [0, 0, 1, 0]);
export var DescribeDataSharesForProducerResult = struct(n0, _DDSFPR, 0, [_DSa, _M], [() => DataShareList, 0]);
export var DescribeDataSharesMessage = struct(n0, _DDSMe, 0, [_DSA, _MR, _M], [0, 1, 0]);
export var DescribeDataSharesResult = struct(n0, _DDSR, 0, [_DSa, _M], [() => DataShareList, 0]);
export var DisassociateDataShareConsumerMessage = struct(n0, _DDSCM, 0, [_DSA, _DEA, _CA, _CR], [0, 2, 0, 0]);
export var InvalidDataShareFault = error(
  n0,
  _IDSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidDataShareFault`, 400],
  },
  [_m],
  [0],

  __InvalidDataShareFault
);
export var RejectDataShareMessage = struct(n0, _RDSM, 0, [_DSA], [0]);
export var DataShareAssociationList = list(n0, _DSAL, 0, () => DataShareAssociation);
export var DataShareList = list(n0, _DSL, 0, () => DataShare);
export var AssociateDataShareConsumer = op(
  n0,
  _ADSC,
  0,
  () => AssociateDataShareConsumerMessage,
  () => DataShare
);
export var AuthorizeDataShare = op(
  n0,
  _ADS,
  0,
  () => AuthorizeDataShareMessage,
  () => DataShare
);
export var DeauthorizeDataShare = op(
  n0,
  _DDS,
  0,
  () => DeauthorizeDataShareMessage,
  () => DataShare
);
export var DescribeDataShares = op(
  n0,
  _DDSe,
  0,
  () => DescribeDataSharesMessage,
  () => DescribeDataSharesResult
);
export var DescribeDataSharesForConsumer = op(
  n0,
  _DDSFC,
  0,
  () => DescribeDataSharesForConsumerMessage,
  () => DescribeDataSharesForConsumerResult
);
export var DescribeDataSharesForProducer = op(
  n0,
  _DDSFP,
  0,
  () => DescribeDataSharesForProducerMessage,
  () => DescribeDataSharesForProducerResult
);
export var DisassociateDataShareConsumer = op(
  n0,
  _DDSC,
  0,
  () => DisassociateDataShareConsumerMessage,
  () => DataShare
);
export var RejectDataShare = op(
  n0,
  _RDS,
  0,
  () => RejectDataShareMessage,
  () => DataShare
);
