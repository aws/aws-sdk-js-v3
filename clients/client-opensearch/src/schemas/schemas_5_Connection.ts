// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AIC,
  _AICR,
  _AICRc,
  _AWSDI,
  _C,
  _CA,
  _CCSCP,
  _CCSr,
  _CI,
  _CM,
  _Co,
  _COC,
  _COCR,
  _COCRr,
  _CPo,
  _CS,
  _DIC,
  _DICe,
  _DICes,
  _DICR,
  _DICRe,
  _DICRes,
  _DICResc,
  _DN,
  _DOC,
  _DOCe,
  _DOCR,
  _DOCRe,
  _DOCRes,
  _DOCResc,
  _En,
  _F,
  _Fi,
  _FL,
  _h,
  _ICn,
  _ICnb,
  _ICS,
  _LDI,
  _M,
  _MR,
  _N,
  _NT,
  _OC,
  _OCS,
  _OCu,
  _OI,
  _R,
  _RDI,
  _RIC,
  _RICR,
  _RICRe,
  _SC,
  _SU,
  _Va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AcceptInboundConnectionRequest = struct(n0, _AICR, 0, [_CI], [[0, 1]]);
export var AcceptInboundConnectionResponse = struct(n0, _AICRc, 0, [_C], [() => InboundConnection]);
export var AWSDomainInformation = struct(n0, _AWSDI, 0, [_OI, _DN, _R], [0, 0, 0]);
export var ConnectionProperties = struct(n0, _CPo, 0, [_En, _CCSr], [0, () => CrossClusterSearchConnectionProperties]);
export var CreateOutboundConnectionRequest = struct(
  n0,
  _COCR,
  0,
  [_LDI, _RDI, _CA, _CM, _CPo],
  [() => DomainInformationContainer, () => DomainInformationContainer, 0, 0, () => ConnectionProperties]
);
export var CreateOutboundConnectionResponse = struct(
  n0,
  _COCRr,
  0,
  [_LDI, _RDI, _CA, _CS, _CI, _CM, _CPo],
  [
    () => DomainInformationContainer,
    () => DomainInformationContainer,
    0,
    () => OutboundConnectionStatus,
    0,
    0,
    () => ConnectionProperties,
  ]
);
export var CrossClusterSearchConnectionProperties = struct(n0, _CCSCP, 0, [_SU], [0]);
export var DeleteInboundConnectionRequest = struct(n0, _DICR, 0, [_CI], [[0, 1]]);
export var DeleteInboundConnectionResponse = struct(n0, _DICRe, 0, [_C], [() => InboundConnection]);
export var DeleteOutboundConnectionRequest = struct(n0, _DOCR, 0, [_CI], [[0, 1]]);
export var DeleteOutboundConnectionResponse = struct(n0, _DOCRe, 0, [_C], [() => OutboundConnection]);
export var DescribeInboundConnectionsRequest = struct(n0, _DICRes, 0, [_F, _MR, _NT], [() => FilterList, 1, 0]);
export var DescribeInboundConnectionsResponse = struct(n0, _DICResc, 0, [_Co, _NT], [() => InboundConnections, 0]);
export var DescribeOutboundConnectionsRequest = struct(n0, _DOCRes, 0, [_F, _MR, _NT], [() => FilterList, 1, 0]);
export var DescribeOutboundConnectionsResponse = struct(n0, _DOCResc, 0, [_Co, _NT], [() => OutboundConnections, 0]);
export var DomainInformationContainer = struct(n0, _DIC, 0, [_AWSDI], [() => AWSDomainInformation]);
export var Filter = struct(n0, _Fi, 0, [_N, _Va], [0, 64 | 0]);
export var InboundConnection = struct(
  n0,
  _ICn,
  0,
  [_LDI, _RDI, _CI, _CS, _CM],
  [() => DomainInformationContainer, () => DomainInformationContainer, 0, () => InboundConnectionStatus, 0]
);
export var InboundConnectionStatus = struct(n0, _ICS, 0, [_SC, _M], [0, 0]);
export var OutboundConnection = struct(
  n0,
  _OC,
  0,
  [_LDI, _RDI, _CI, _CA, _CS, _CM, _CPo],
  [
    () => DomainInformationContainer,
    () => DomainInformationContainer,
    0,
    0,
    () => OutboundConnectionStatus,
    0,
    () => ConnectionProperties,
  ]
);
export var OutboundConnectionStatus = struct(n0, _OCS, 0, [_SC, _M], [0, 0]);
export var RejectInboundConnectionRequest = struct(n0, _RICR, 0, [_CI], [[0, 1]]);
export var RejectInboundConnectionResponse = struct(n0, _RICRe, 0, [_C], [() => InboundConnection]);
export var FilterList = list(n0, _FL, 0, () => Filter);
export var InboundConnections = list(n0, _ICnb, 0, () => InboundConnection);
export var OutboundConnections = list(n0, _OCu, 0, () => OutboundConnection);
export var ValueStringList = 64 | 0;

export var AcceptInboundConnection = op(
  n0,
  _AIC,
  {
    [_h]: ["PUT", "/2021-01-01/opensearch/cc/inboundConnection/{ConnectionId}/accept", 200],
  },
  () => AcceptInboundConnectionRequest,
  () => AcceptInboundConnectionResponse
);
export var CreateOutboundConnection = op(
  n0,
  _COC,
  {
    [_h]: ["POST", "/2021-01-01/opensearch/cc/outboundConnection", 200],
  },
  () => CreateOutboundConnectionRequest,
  () => CreateOutboundConnectionResponse
);
export var DeleteInboundConnection = op(
  n0,
  _DICe,
  {
    [_h]: ["DELETE", "/2021-01-01/opensearch/cc/inboundConnection/{ConnectionId}", 200],
  },
  () => DeleteInboundConnectionRequest,
  () => DeleteInboundConnectionResponse
);
export var DeleteOutboundConnection = op(
  n0,
  _DOC,
  {
    [_h]: ["DELETE", "/2021-01-01/opensearch/cc/outboundConnection/{ConnectionId}", 200],
  },
  () => DeleteOutboundConnectionRequest,
  () => DeleteOutboundConnectionResponse
);
export var DescribeInboundConnections = op(
  n0,
  _DICes,
  {
    [_h]: ["POST", "/2021-01-01/opensearch/cc/inboundConnection/search", 200],
  },
  () => DescribeInboundConnectionsRequest,
  () => DescribeInboundConnectionsResponse
);
export var DescribeOutboundConnections = op(
  n0,
  _DOCe,
  {
    [_h]: ["POST", "/2021-01-01/opensearch/cc/outboundConnection/search", 200],
  },
  () => DescribeOutboundConnectionsRequest,
  () => DescribeOutboundConnectionsResponse
);
export var RejectInboundConnection = op(
  n0,
  _RIC,
  {
    [_h]: ["PUT", "/2021-01-01/opensearch/cc/inboundConnection/{ConnectionId}/reject", 200],
  },
  () => RejectInboundConnectionRequest,
  () => RejectInboundConnectionResponse
);
