const _ADE = "AccessDeniedException";
const _AT = "AccessType";
const _CB = "CidrBlock";
const _CE = "ConflictException";
const _CER = "CreateEndpointRequest";
const _CERr = "CreateEndpointResult";
const _CEr = "CreateEndpoint";
const _CIB = "CapacityInBytes";
const _COIP = "CustomerOwnedIpv4Pool";
const _CT = "CreationTime";
const _DE = "DeleteEndpoint";
const _DER = "DeleteEndpointRequest";
const _E = "Endpoint";
const _EA = "EndpointArn";
const _EC = "ErrorCode";
const _EI = "EndpointId";
const _En = "Endpoints";
const _FR = "FailedReason";
const _ISE = "InternalServerException";
const _LE = "ListEndpoints";
const _LER = "ListEndpointsRequest";
const _LERi = "ListEndpointsResult";
const _LOWS = "ListOutpostsWithS3";
const _LOWSR = "ListOutpostsWithS3Request";
const _LOWSRi = "ListOutpostsWithS3Result";
const _LSE = "ListSharedEndpoints";
const _LSER = "ListSharedEndpointsRequest";
const _LSERi = "ListSharedEndpointsResult";
const _M = "Message";
const _MR = "MaxResults";
const _NI = "NetworkInterfaces";
const _NII = "NetworkInterfaceId";
const _NIe = "NetworkInterface";
const _NT = "NextToken";
const _O = "Outposts";
const _OA = "OutpostArn";
const _OI = "OutpostId";
const _OIu = "OutpostsId";
const _OIw = "OwnerId";
const _OOE = "OutpostOfflineException";
const _Ou = "Outpost";
const _RNFE = "ResourceNotFoundException";
const _S = "Status";
const _SGI = "SecurityGroupId";
const _SI = "SubnetId";
const _SOA = "S3OutpostArn";
const _TE = "ThrottlingException";
const _VE = "ValidationException";
const _VI = "VpcId";
const _c = "client";
const _e = "error";
const _eI = "endpointId";
const _h = "http";
const _hE = "httpError";
const _hQ = "httpQuery";
const _mR = "maxResults";
const _nT = "nextToken";
const _oI = "outpostId";
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.s3outposts";
const n0 = "com.amazonaws.s3outposts";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import {
  AccessDeniedException as __AccessDeniedException,
  ConflictException as __ConflictException,
  InternalServerException as __InternalServerException,
  OutpostOfflineException as __OutpostOfflineException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/errors";
import { S3OutpostsServiceException as __S3OutpostsServiceException } from "../models/S3OutpostsServiceException";

/* eslint no-var: 0 */
export var AccessDeniedException: StaticErrorSchema = [-3, n0, _ADE, { [_e]: _c, [_hE]: 403 }, [_M], [0]];
TypeRegistry.for(n0).registerError(AccessDeniedException, __AccessDeniedException);
export var ConflictException: StaticErrorSchema = [-3, n0, _CE, { [_e]: _c, [_hE]: 409 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ConflictException, __ConflictException);
export var CreateEndpointRequest: StaticStructureSchema = [
  3,
  n0,
  _CER,
  0,
  [_OI, _SI, _SGI, _AT, _COIP],
  [0, 0, 0, 0, 0],
];
export var CreateEndpointResult: StaticStructureSchema = [3, n0, _CERr, 0, [_EA], [0]];
export var DeleteEndpointRequest: StaticStructureSchema = [
  3,
  n0,
  _DER,
  0,
  [_EI, _OI],
  [
    [0, { [_hQ]: _eI }],
    [0, { [_hQ]: _oI }],
  ],
];
export var Endpoint: StaticStructureSchema = [
  3,
  n0,
  _E,
  0,
  [_EA, _OIu, _CB, _S, _CT, _NI, _VI, _SI, _SGI, _AT, _COIP, _FR],
  [0, 0, 0, 0, 4, () => NetworkInterfaces, 0, 0, 0, 0, 0, () => FailedReason],
];
export var FailedReason: StaticStructureSchema = [3, n0, _FR, 0, [_EC, _M], [0, 0]];
export var InternalServerException: StaticErrorSchema = [-3, n0, _ISE, { [_e]: _s, [_hE]: 500 }, [_M], [0]];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);
export var ListEndpointsRequest: StaticStructureSchema = [
  3,
  n0,
  _LER,
  0,
  [_NT, _MR],
  [
    [0, { [_hQ]: _nT }],
    [1, { [_hQ]: _mR }],
  ],
];
export var ListEndpointsResult: StaticStructureSchema = [3, n0, _LERi, 0, [_En, _NT], [() => Endpoints, 0]];
export var ListOutpostsWithS3Request: StaticStructureSchema = [
  3,
  n0,
  _LOWSR,
  0,
  [_NT, _MR],
  [
    [0, { [_hQ]: _nT }],
    [1, { [_hQ]: _mR }],
  ],
];
export var ListOutpostsWithS3Result: StaticStructureSchema = [3, n0, _LOWSRi, 0, [_O, _NT], [() => Outposts, 0]];
export var ListSharedEndpointsRequest: StaticStructureSchema = [
  3,
  n0,
  _LSER,
  0,
  [_NT, _MR, _OI],
  [
    [0, { [_hQ]: _nT }],
    [1, { [_hQ]: _mR }],
    [0, { [_hQ]: _oI }],
  ],
];
export var ListSharedEndpointsResult: StaticStructureSchema = [3, n0, _LSERi, 0, [_En, _NT], [() => Endpoints, 0]];
export var NetworkInterface: StaticStructureSchema = [3, n0, _NIe, 0, [_NII], [0]];
export var Outpost: StaticStructureSchema = [3, n0, _Ou, 0, [_OA, _SOA, _OI, _OIw, _CIB], [0, 0, 0, 0, 1]];
export var OutpostOfflineException: StaticErrorSchema = [-3, n0, _OOE, { [_e]: _c, [_hE]: 400 }, [_M], [0]];
TypeRegistry.for(n0).registerError(OutpostOfflineException, __OutpostOfflineException);
export var ResourceNotFoundException: StaticErrorSchema = [-3, n0, _RNFE, { [_e]: _c, [_hE]: 404 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);
export var ThrottlingException: StaticErrorSchema = [-3, n0, _TE, { [_e]: _c, [_hE]: 429 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ThrottlingException, __ThrottlingException);
export var ValidationException: StaticErrorSchema = [-3, n0, _VE, { [_e]: _c, [_hE]: 400 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);
export var __Unit = "unit" as const;
export var S3OutpostsServiceException: StaticErrorSchema = [-3, _sm, "S3OutpostsServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(S3OutpostsServiceException, __S3OutpostsServiceException);
export var Endpoints: StaticListSchema = [1, n0, _En, 0, () => Endpoint];
export var NetworkInterfaces: StaticListSchema = [1, n0, _NI, 0, () => NetworkInterface];
export var Outposts: StaticListSchema = [1, n0, _O, 0, () => Outpost];
export var CreateEndpoint: StaticOperationSchema = [
  9,
  n0,
  _CEr,
  { [_h]: ["POST", "/S3Outposts/CreateEndpoint", 200] },
  () => CreateEndpointRequest,
  () => CreateEndpointResult,
];
export var DeleteEndpoint: StaticOperationSchema = [
  9,
  n0,
  _DE,
  { [_h]: ["DELETE", "/S3Outposts/DeleteEndpoint", 200] },
  () => DeleteEndpointRequest,
  () => __Unit,
];
export var ListEndpoints: StaticOperationSchema = [
  9,
  n0,
  _LE,
  { [_h]: ["GET", "/S3Outposts/ListEndpoints", 200] },
  () => ListEndpointsRequest,
  () => ListEndpointsResult,
];
export var ListOutpostsWithS3: StaticOperationSchema = [
  9,
  n0,
  _LOWS,
  { [_h]: ["GET", "/S3Outposts/ListOutpostsWithS3", 200] },
  () => ListOutpostsWithS3Request,
  () => ListOutpostsWithS3Result,
];
export var ListSharedEndpoints: StaticOperationSchema = [
  9,
  n0,
  _LSE,
  { [_h]: ["GET", "/S3Outposts/ListSharedEndpoints", 200] },
  () => ListSharedEndpointsRequest,
  () => ListSharedEndpointsResult,
];
