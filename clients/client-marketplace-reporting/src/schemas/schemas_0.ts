const _ADE = "AccessDeniedException";
const _BRE = "BadRequestException";
const _GBD = "GetBuyerDashboard";
const _GBDI = "GetBuyerDashboardInput";
const _GBDO = "GetBuyerDashboardOutput";
const _ISE = "InternalServerException";
const _UE = "UnauthorizedException";
const _c = "client";
const _dI = "dashboardIdentifier";
const _e = "error";
const _eD = "embeddingDomains";
const _eU = "embedUrl";
const _h = "http";
const _hE = "httpError";
const _m = "message";
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.marketplacereporting";
const n0 = "com.amazonaws.marketplacereporting";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import {
  AccessDeniedException as __AccessDeniedException,
  BadRequestException as __BadRequestException,
  InternalServerException as __InternalServerException,
  UnauthorizedException as __UnauthorizedException,
} from "../models/errors";
import { MarketplaceReportingServiceException as __MarketplaceReportingServiceException } from "../models/MarketplaceReportingServiceException";

/* eslint no-var: 0 */

export var AccessDeniedException: StaticErrorSchema = [
  -3,
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(AccessDeniedException, __AccessDeniedException);

export var BadRequestException: StaticErrorSchema = [
  -3,
  n0,
  _BRE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(BadRequestException, __BadRequestException);

export var GetBuyerDashboardInput: StaticStructureSchema = [3, n0, _GBDI, 0, [_dI, _eD], [0, 64 | 0]];
export var GetBuyerDashboardOutput: StaticStructureSchema = [3, n0, _GBDO, 0, [_eU, _dI, _eD], [0, 0, 64 | 0]];
export var InternalServerException: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);

export var UnauthorizedException: StaticErrorSchema = [
  -3,
  n0,
  _UE,
  {
    [_e]: _c,
    [_hE]: 401,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(UnauthorizedException, __UnauthorizedException);

export var MarketplaceReportingServiceException: StaticErrorSchema = [
  -3,
  _sm,
  "MarketplaceReportingServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(MarketplaceReportingServiceException, __MarketplaceReportingServiceException);

export var EmbeddingDomains = 64 | 0;

export var GetBuyerDashboard: StaticOperationSchema = [
  9,
  n0,
  _GBD,
  {
    [_h]: ["POST", "/getBuyerDashboard", 200],
  },
  () => GetBuyerDashboardInput,
  () => GetBuyerDashboardOutput,
];
