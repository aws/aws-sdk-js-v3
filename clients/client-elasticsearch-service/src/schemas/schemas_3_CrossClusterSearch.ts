// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { InvalidPaginationTokenException as __InvalidPaginationTokenException } from "../models/index";
import {
  _c,
  _CA,
  _CCSC,
  _CCSCI,
  _CCSCr,
  _CS,
  _DDI,
  _DICCSC,
  _DICCSCe,
  _DICCSCR,
  _DICCSCRe,
  _DICCSCRes,
  _DICCSCResc,
  _DIo,
  _DN,
  _DOCCSC,
  _DOCCSCe,
  _DOCCSCR,
  _DOCCSCRe,
  _DOCCSCRes,
  _DOCCSCResc,
  _e,
  _F,
  _Fi,
  _FL,
  _h,
  _hE,
  _ICCSC,
  _ICCSCn,
  _ICCSCS,
  _IPTE,
  _M,
  _m,
  _MR,
  _N,
  _NT,
  _OCCSC,
  _OCCSCS,
  _OCCSCu,
  _OI,
  _R,
  _RICCSC,
  _RICCSCR,
  _RICCSCRe,
  _SC,
  _SDI,
  _Va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteInboundCrossClusterSearchConnectionRequest = struct(n0, _DICCSCR, 0, [_CCSCI], [[0, 1]]);
export var DeleteInboundCrossClusterSearchConnectionResponse = struct(
  n0,
  _DICCSCRe,
  0,
  [_CCSC],
  [() => InboundCrossClusterSearchConnection]
);
export var DeleteOutboundCrossClusterSearchConnectionRequest = struct(n0, _DOCCSCR, 0, [_CCSCI], [[0, 1]]);
export var DeleteOutboundCrossClusterSearchConnectionResponse = struct(
  n0,
  _DOCCSCRe,
  0,
  [_CCSC],
  [() => OutboundCrossClusterSearchConnection]
);
export var DescribeInboundCrossClusterSearchConnectionsRequest = struct(
  n0,
  _DICCSCRes,
  0,
  [_F, _MR, _NT],
  [() => FilterList, 1, 0]
);
export var DescribeInboundCrossClusterSearchConnectionsResponse = struct(
  n0,
  _DICCSCResc,
  0,
  [_CCSCr, _NT],
  [() => InboundCrossClusterSearchConnections, 0]
);
export var DescribeOutboundCrossClusterSearchConnectionsRequest = struct(
  n0,
  _DOCCSCRes,
  0,
  [_F, _MR, _NT],
  [() => FilterList, 1, 0]
);
export var DescribeOutboundCrossClusterSearchConnectionsResponse = struct(
  n0,
  _DOCCSCResc,
  0,
  [_CCSCr, _NT],
  [() => OutboundCrossClusterSearchConnections, 0]
);
export var DomainInformation = struct(n0, _DIo, 0, [_OI, _DN, _R], [0, 0, 0]);
export var Filter = struct(n0, _Fi, 0, [_N, _Va], [0, 64 | 0]);
export var InboundCrossClusterSearchConnection = struct(
  n0,
  _ICCSC,
  0,
  [_SDI, _DDI, _CCSCI, _CS],
  [() => DomainInformation, () => DomainInformation, 0, () => InboundCrossClusterSearchConnectionStatus]
);
export var InboundCrossClusterSearchConnectionStatus = struct(n0, _ICCSCS, 0, [_SC, _M], [0, 0]);
export var InvalidPaginationTokenException = error(
  n0,
  _IPTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __InvalidPaginationTokenException
);
export var OutboundCrossClusterSearchConnection = struct(
  n0,
  _OCCSC,
  0,
  [_SDI, _DDI, _CCSCI, _CA, _CS],
  [() => DomainInformation, () => DomainInformation, 0, 0, () => OutboundCrossClusterSearchConnectionStatus]
);
export var OutboundCrossClusterSearchConnectionStatus = struct(n0, _OCCSCS, 0, [_SC, _M], [0, 0]);
export var RejectInboundCrossClusterSearchConnectionRequest = struct(n0, _RICCSCR, 0, [_CCSCI], [[0, 1]]);
export var RejectInboundCrossClusterSearchConnectionResponse = struct(
  n0,
  _RICCSCRe,
  0,
  [_CCSC],
  [() => InboundCrossClusterSearchConnection]
);
export var FilterList = list(n0, _FL, 0, () => Filter);
export var InboundCrossClusterSearchConnections = list(n0, _ICCSCn, 0, () => InboundCrossClusterSearchConnection);
export var OutboundCrossClusterSearchConnections = list(n0, _OCCSCu, 0, () => OutboundCrossClusterSearchConnection);
export var ValueStringList = 64 | 0;

export var DeleteInboundCrossClusterSearchConnection = op(
  n0,
  _DICCSC,
  {
    [_h]: ["DELETE", "/2015-01-01/es/ccs/inboundConnection/{CrossClusterSearchConnectionId}", 200],
  },
  () => DeleteInboundCrossClusterSearchConnectionRequest,
  () => DeleteInboundCrossClusterSearchConnectionResponse
);
export var DeleteOutboundCrossClusterSearchConnection = op(
  n0,
  _DOCCSC,
  {
    [_h]: ["DELETE", "/2015-01-01/es/ccs/outboundConnection/{CrossClusterSearchConnectionId}", 200],
  },
  () => DeleteOutboundCrossClusterSearchConnectionRequest,
  () => DeleteOutboundCrossClusterSearchConnectionResponse
);
export var DescribeInboundCrossClusterSearchConnections = op(
  n0,
  _DICCSCe,
  {
    [_h]: ["POST", "/2015-01-01/es/ccs/inboundConnection/search", 200],
  },
  () => DescribeInboundCrossClusterSearchConnectionsRequest,
  () => DescribeInboundCrossClusterSearchConnectionsResponse
);
export var DescribeOutboundCrossClusterSearchConnections = op(
  n0,
  _DOCCSCe,
  {
    [_h]: ["POST", "/2015-01-01/es/ccs/outboundConnection/search", 200],
  },
  () => DescribeOutboundCrossClusterSearchConnectionsRequest,
  () => DescribeOutboundCrossClusterSearchConnectionsResponse
);
export var RejectInboundCrossClusterSearchConnection = op(
  n0,
  _RICCSC,
  {
    [_h]: ["PUT", "/2015-01-01/es/ccs/inboundConnection/{CrossClusterSearchConnectionId}/reject", 200],
  },
  () => RejectInboundCrossClusterSearchConnectionRequest,
  () => RejectInboundCrossClusterSearchConnectionResponse
);
