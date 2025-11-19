const _A = "Arn";
const _AAI = "AzureApplicationId";
const _ADE = "AccessDeniedException";
const _Au = "Audience";
const _BRE = "BadRequestException";
const _C = "Challenge";
const _CA = "ConnectorArn";
const _CAA = "CertificateAuthorityArn";
const _CAh = "ChallengeArn";
const _CAr = "CreatedAt";
const _CC = "CreateChallenge";
const _CCR = "CreateChallengeRequest";
const _CCRr = "CreateChallengeResponse";
const _CCRre = "CreateConnectorRequest";
const _CCRrea = "CreateConnectorResponse";
const _CCr = "CreateConnector";
const _CE = "ConflictException";
const _CL = "ConnectorList";
const _CM = "ChallengeMetadata";
const _CML = "ChallengeMetadataList";
const _CMS = "ChallengeMetadataSummary";
const _CS = "ConnectorSummary";
const _CT = "ClientToken";
const _Ch = "Challenges";
const _Co = "Connector";
const _Con = "Connectors";
const _D = "Domain";
const _DC = "DeleteChallenge";
const _DCR = "DeleteChallengeRequest";
const _DCRe = "DeleteConnectorRequest";
const _DCe = "DeleteConnector";
const _E = "Endpoint";
const _GC = "GetConnector";
const _GCM = "GetChallengeMetadata";
const _GCMR = "GetChallengeMetadataRequest";
const _GCMRe = "GetChallengeMetadataResponse";
const _GCP = "GetChallengePassword";
const _GCPR = "GetChallengePasswordRequest";
const _GCPRe = "GetChallengePasswordResponse";
const _GCR = "GetConnectorRequest";
const _GCRe = "GetConnectorResponse";
const _I = "Issuer";
const _IC = "IntuneConfiguration";
const _ISE = "InternalServerException";
const _In = "Intune";
const _LC = "ListConnectors";
const _LCM = "ListChallengeMetadata";
const _LCMR = "ListChallengeMetadataRequest";
const _LCMRi = "ListChallengeMetadataResponse";
const _LCR = "ListConnectorsRequest";
const _LCRi = "ListConnectorsResponse";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResponse";
const _M = "Message";
const _MDM = "MobileDeviceManagement";
const _MR = "MaxResults";
const _NT = "NextToken";
const _OIC = "OpenIdConfiguration";
const _P = "Password";
const _QC = "QuotaCode";
const _R = "Reason";
const _RA = "ResourceArn";
const _RI = "ResourceId";
const _RNFE = "ResourceNotFoundException";
const _RT = "ResourceType";
const _S = "Status";
const _SC = "ServiceCode";
const _SQEE = "ServiceQuotaExceededException";
const _SR = "StatusReason";
const _SS = "SensitiveString";
const _Su = "Subject";
const _T = "Type";
const _TE = "ThrottlingException";
const _TK = "TagKeys";
const _TR = "TagResource";
const _TRR = "TagResourceRequest";
const _Ta = "Tags";
const _UA = "UpdatedAt";
const _UR = "UntagResource";
const _URR = "UntagResourceRequest";
const _VE = "ValidationException";
const _c = "client";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _hQ = "httpQuery";
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.pcaconnectorscep";
const _tK = "tagKeys";
const n0 = "com.amazonaws.pcaconnectorscep";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  AccessDeniedException as __AccessDeniedException,
  BadRequestException as __BadRequestException,
  ConflictException as __ConflictException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/errors";
import { PcaConnectorScepServiceException as __PcaConnectorScepServiceException } from "../models/PcaConnectorScepServiceException";

/* eslint no-var: 0 */

export var SensitiveString: StaticSimpleSchema = [0, n0, _SS, 8, 0];
export var AccessDeniedException: StaticErrorSchema = [
  -3,
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_M],
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
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(BadRequestException, __BadRequestException);

export var Challenge: StaticStructureSchema = [
  3,
  n0,
  _C,
  0,
  [_A, _CA, _CAr, _UA, _P],
  [0, 0, 4, 4, [() => SensitiveString, 0]],
];
export var ChallengeMetadata: StaticStructureSchema = [3, n0, _CM, 0, [_A, _CA, _CAr, _UA], [0, 0, 4, 4]];
export var ChallengeMetadataSummary: StaticStructureSchema = [3, n0, _CMS, 0, [_A, _CA, _CAr, _UA], [0, 0, 4, 4]];
export var ConflictException: StaticErrorSchema = [
  -3,
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M, _RI, _RT],
  [0, 0, 0],
];
TypeRegistry.for(n0).registerError(ConflictException, __ConflictException);

export var Connector: StaticStructureSchema = [
  3,
  n0,
  _Co,
  0,
  [_A, _CAA, _T, _MDM, _OIC, _S, _SR, _E, _CAr, _UA],
  [0, 0, 0, () => MobileDeviceManagement, () => OpenIdConfiguration, 0, 0, 0, 4, 4],
];
export var ConnectorSummary: StaticStructureSchema = [
  3,
  n0,
  _CS,
  0,
  [_A, _CAA, _T, _MDM, _OIC, _S, _SR, _E, _CAr, _UA],
  [0, 0, 0, () => MobileDeviceManagement, () => OpenIdConfiguration, 0, 0, 0, 4, 4],
];
export var CreateChallengeRequest: StaticStructureSchema = [3, n0, _CCR, 0, [_CA, _CT, _Ta], [0, [0, 4], 128 | 0]];
export var CreateChallengeResponse: StaticStructureSchema = [3, n0, _CCRr, 0, [_C], [[() => Challenge, 0]]];
export var CreateConnectorRequest: StaticStructureSchema = [
  3,
  n0,
  _CCRre,
  0,
  [_CAA, _MDM, _CT, _Ta],
  [0, () => MobileDeviceManagement, [0, 4], 128 | 0],
];
export var CreateConnectorResponse: StaticStructureSchema = [3, n0, _CCRrea, 0, [_CA], [0]];
export var DeleteChallengeRequest: StaticStructureSchema = [3, n0, _DCR, 0, [_CAh], [[0, 1]]];
export var DeleteConnectorRequest: StaticStructureSchema = [3, n0, _DCRe, 0, [_CA], [[0, 1]]];
export var GetChallengeMetadataRequest: StaticStructureSchema = [3, n0, _GCMR, 0, [_CAh], [[0, 1]]];
export var GetChallengeMetadataResponse: StaticStructureSchema = [3, n0, _GCMRe, 0, [_CM], [() => ChallengeMetadata]];
export var GetChallengePasswordRequest: StaticStructureSchema = [3, n0, _GCPR, 0, [_CAh], [[0, 1]]];
export var GetChallengePasswordResponse: StaticStructureSchema = [3, n0, _GCPRe, 0, [_P], [[() => SensitiveString, 0]]];
export var GetConnectorRequest: StaticStructureSchema = [3, n0, _GCR, 0, [_CA], [[0, 1]]];
export var GetConnectorResponse: StaticStructureSchema = [3, n0, _GCRe, 0, [_Co], [() => Connector]];
export var InternalServerException: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);

export var IntuneConfiguration: StaticStructureSchema = [3, n0, _IC, 0, [_AAI, _D], [0, 0]];
export var ListChallengeMetadataRequest: StaticStructureSchema = [
  3,
  n0,
  _LCMR,
  0,
  [_MR, _NT, _CA],
  [
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      0,
      {
        [_hQ]: _CA,
      },
    ],
  ],
];
export var ListChallengeMetadataResponse: StaticStructureSchema = [
  3,
  n0,
  _LCMRi,
  0,
  [_Ch, _NT],
  [() => ChallengeMetadataList, 0],
];
export var ListConnectorsRequest: StaticStructureSchema = [
  3,
  n0,
  _LCR,
  0,
  [_MR, _NT],
  [
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
  ],
];
export var ListConnectorsResponse: StaticStructureSchema = [3, n0, _LCRi, 0, [_Con, _NT], [() => ConnectorList, 0]];
export var ListTagsForResourceRequest: StaticStructureSchema = [3, n0, _LTFRR, 0, [_RA], [[0, 1]]];
export var ListTagsForResourceResponse: StaticStructureSchema = [3, n0, _LTFRRi, 0, [_Ta], [128 | 0]];
export var OpenIdConfiguration: StaticStructureSchema = [3, n0, _OIC, 0, [_I, _Su, _Au], [0, 0, 0]];
export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M, _RI, _RT],
  [0, 0, 0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);

export var ServiceQuotaExceededException: StaticErrorSchema = [
  -3,
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_M, _RT, _SC, _QC],
  [0, 0, 0, 0],
];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException, __ServiceQuotaExceededException);

export var TagResourceRequest: StaticStructureSchema = [3, n0, _TRR, 0, [_RA, _Ta], [[0, 1], 128 | 0]];
export var ThrottlingException: StaticErrorSchema = [
  -3,
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ThrottlingException, __ThrottlingException);

export var UntagResourceRequest: StaticStructureSchema = [
  3,
  n0,
  _URR,
  0,
  [_RA, _TK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ],
];
export var ValidationException: StaticErrorSchema = [
  -3,
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M, _R],
  [0, 0],
];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);

export var __Unit = "unit" as const;

export var PcaConnectorScepServiceException: StaticErrorSchema = [
  -3,
  _sm,
  "PcaConnectorScepServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(PcaConnectorScepServiceException, __PcaConnectorScepServiceException);

export var ChallengeMetadataList: StaticListSchema = [1, n0, _CML, 0, () => ChallengeMetadataSummary];
export var ConnectorList: StaticListSchema = [1, n0, _CL, 0, () => ConnectorSummary];
export var TagKeyList = 64 | 0;

export var Tags = 128 | 0;

export var MobileDeviceManagement: StaticStructureSchema = [3, n0, _MDM, 0, [_In], [() => IntuneConfiguration]];
export var CreateChallenge: StaticOperationSchema = [
  9,
  n0,
  _CC,
  {
    [_h]: ["POST", "/challenges", 202],
  },
  () => CreateChallengeRequest,
  () => CreateChallengeResponse,
];
export var CreateConnector: StaticOperationSchema = [
  9,
  n0,
  _CCr,
  {
    [_h]: ["POST", "/connectors", 202],
  },
  () => CreateConnectorRequest,
  () => CreateConnectorResponse,
];
export var DeleteChallenge: StaticOperationSchema = [
  9,
  n0,
  _DC,
  {
    [_h]: ["DELETE", "/challenges/{ChallengeArn}", 202],
  },
  () => DeleteChallengeRequest,
  () => __Unit,
];
export var DeleteConnector: StaticOperationSchema = [
  9,
  n0,
  _DCe,
  {
    [_h]: ["DELETE", "/connectors/{ConnectorArn}", 202],
  },
  () => DeleteConnectorRequest,
  () => __Unit,
];
export var GetChallengeMetadata: StaticOperationSchema = [
  9,
  n0,
  _GCM,
  {
    [_h]: ["GET", "/challengeMetadata/{ChallengeArn}", 200],
  },
  () => GetChallengeMetadataRequest,
  () => GetChallengeMetadataResponse,
];
export var GetChallengePassword: StaticOperationSchema = [
  9,
  n0,
  _GCP,
  {
    [_h]: ["GET", "/challengePasswords/{ChallengeArn}", 200],
  },
  () => GetChallengePasswordRequest,
  () => GetChallengePasswordResponse,
];
export var GetConnector: StaticOperationSchema = [
  9,
  n0,
  _GC,
  {
    [_h]: ["GET", "/connectors/{ConnectorArn}", 200],
  },
  () => GetConnectorRequest,
  () => GetConnectorResponse,
];
export var ListChallengeMetadata: StaticOperationSchema = [
  9,
  n0,
  _LCM,
  {
    [_h]: ["GET", "/challengeMetadata", 200],
  },
  () => ListChallengeMetadataRequest,
  () => ListChallengeMetadataResponse,
];
export var ListConnectors: StaticOperationSchema = [
  9,
  n0,
  _LC,
  {
    [_h]: ["GET", "/connectors", 200],
  },
  () => ListConnectorsRequest,
  () => ListConnectorsResponse,
];
export var ListTagsForResource: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{ResourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse,
];
export var TagResource: StaticOperationSchema = [
  9,
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{ResourceArn}", 204],
  },
  () => TagResourceRequest,
  () => __Unit,
];
export var UntagResource: StaticOperationSchema = [
  9,
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{ResourceArn}", 204],
  },
  () => UntagResourceRequest,
  () => __Unit,
];
