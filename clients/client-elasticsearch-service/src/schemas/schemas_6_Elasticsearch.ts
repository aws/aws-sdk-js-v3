// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  InvalidTypeException as __InvalidTypeException,
  LimitExceededException as __LimitExceededException,
} from "../models/index";
import {
  _A,
  _AICCSC,
  _AICCSCR,
  _AICCSCRc,
  _AP,
  _ARN,
  _ATd,
  _ATR,
  _AVEA,
  _AVEAR,
  _AVEARu,
  _c,
  _CA,
  _CCSC,
  _CCSCI,
  _CM,
  _COCCSC,
  _COCCSCR,
  _COCCSCRr,
  _CPR,
  _CPr,
  _CPRr,
  _CS,
  _DDI,
  _DN,
  _e,
  _h,
  _hE,
  _IC,
  _ITE,
  _LEE,
  _m,
  _PDa,
  _PDac,
  _PID,
  _PNa,
  _PREIO,
  _PREIOR,
  _PREIORu,
  _PS,
  _PTa,
  _REII,
  _REIOI,
  _RN,
  _SBN,
  _SDI,
  _SK,
  _TL,
  _UPp,
  _UPR,
  _UPRp,
  n0,
  Unit,
} from "./schemas_0";
import { TagList } from "./schemas_1_Elasticsearch";
import {
  DomainInformation,
  InboundCrossClusterSearchConnection,
  OutboundCrossClusterSearchConnectionStatus,
} from "./schemas_3_CrossClusterSearch";
import { PackageDetails } from "./schemas_5_Package";
import { AuthorizedPrincipal } from "./schemas_9_VpcEndpoint";

/* eslint no-var: 0 */

export var AcceptInboundCrossClusterSearchConnectionRequest = struct(n0, _AICCSCR, 0, [_CCSCI], [[0, 1]]);
export var AcceptInboundCrossClusterSearchConnectionResponse = struct(
  n0,
  _AICCSCRc,
  0,
  [_CCSC],
  [() => InboundCrossClusterSearchConnection]
);
export var AddTagsRequest = struct(n0, _ATR, 0, [_ARN, _TL], [0, () => TagList]);
export var AuthorizeVpcEndpointAccessRequest = struct(n0, _AVEAR, 0, [_DN, _A], [[0, 1], 0]);
export var AuthorizeVpcEndpointAccessResponse = struct(n0, _AVEARu, 0, [_AP], [() => AuthorizedPrincipal]);
export var CreateOutboundCrossClusterSearchConnectionRequest = struct(
  n0,
  _COCCSCR,
  0,
  [_SDI, _DDI, _CA],
  [() => DomainInformation, () => DomainInformation, 0]
);
export var CreateOutboundCrossClusterSearchConnectionResponse = struct(
  n0,
  _COCCSCRr,
  0,
  [_SDI, _DDI, _CA, _CS, _CCSCI],
  [() => DomainInformation, () => DomainInformation, 0, () => OutboundCrossClusterSearchConnectionStatus, 0]
);
export var CreatePackageRequest = struct(n0, _CPR, 0, [_PNa, _PTa, _PDa, _PS], [0, 0, 0, () => PackageSource]);
export var CreatePackageResponse = struct(n0, _CPRr, 0, [_PDac], [() => PackageDetails]);
export var InvalidTypeException = error(
  n0,
  _ITE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],

  __InvalidTypeException
);
export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],

  __LimitExceededException
);
export var PackageSource = struct(n0, _PS, 0, [_SBN, _SK], [0, 0]);
export var PurchaseReservedElasticsearchInstanceOfferingRequest = struct(n0, _PREIOR, 0, [_REIOI, _RN, _IC], [0, 0, 1]);
export var PurchaseReservedElasticsearchInstanceOfferingResponse = struct(n0, _PREIORu, 0, [_REII, _RN], [0, 0]);
export var UpdatePackageRequest = struct(n0, _UPR, 0, [_PID, _PS, _PDa, _CM], [0, () => PackageSource, 0, 0]);
export var UpdatePackageResponse = struct(n0, _UPRp, 0, [_PDac], [() => PackageDetails]);
export var AcceptInboundCrossClusterSearchConnection = op(
  n0,
  _AICCSC,
  {
    [_h]: ["PUT", "/2015-01-01/es/ccs/inboundConnection/{CrossClusterSearchConnectionId}/accept", 200],
  },
  () => AcceptInboundCrossClusterSearchConnectionRequest,
  () => AcceptInboundCrossClusterSearchConnectionResponse
);
export var AddTags = op(
  n0,
  _ATd,
  {
    [_h]: ["POST", "/2015-01-01/tags", 200],
  },
  () => AddTagsRequest,
  () => Unit
);
export var AuthorizeVpcEndpointAccess = op(
  n0,
  _AVEA,
  {
    [_h]: ["POST", "/2015-01-01/es/domain/{DomainName}/authorizeVpcEndpointAccess", 200],
  },
  () => AuthorizeVpcEndpointAccessRequest,
  () => AuthorizeVpcEndpointAccessResponse
);
export var CreateOutboundCrossClusterSearchConnection = op(
  n0,
  _COCCSC,
  {
    [_h]: ["POST", "/2015-01-01/es/ccs/outboundConnection", 200],
  },
  () => CreateOutboundCrossClusterSearchConnectionRequest,
  () => CreateOutboundCrossClusterSearchConnectionResponse
);
export var CreatePackage = op(
  n0,
  _CPr,
  {
    [_h]: ["POST", "/2015-01-01/packages", 200],
  },
  () => CreatePackageRequest,
  () => CreatePackageResponse
);
export var PurchaseReservedElasticsearchInstanceOffering = op(
  n0,
  _PREIO,
  {
    [_h]: ["POST", "/2015-01-01/es/purchaseReservedInstanceOffering", 200],
  },
  () => PurchaseReservedElasticsearchInstanceOfferingRequest,
  () => PurchaseReservedElasticsearchInstanceOfferingResponse
);
export var UpdatePackage = op(
  n0,
  _UPp,
  {
    [_h]: ["POST", "/2015-01-01/packages/update", 200],
  },
  () => UpdatePackageRequest,
  () => UpdatePackageResponse
);
