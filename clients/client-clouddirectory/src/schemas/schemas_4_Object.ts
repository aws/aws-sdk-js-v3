// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AFTO,
  _AFTOR,
  _AFTORd,
  _AK,
  _AKAV,
  _AKAVL,
  _ANt,
  _API,
  _BGLA,
  _BGLAR,
  _BGOA,
  _BGOAR,
  _BGOI,
  _BGOIR,
  _BLAI,
  _BLAIR,
  _BLI,
  _BLIR,
  _BLITL,
  _BLITLR,
  _BLOA,
  _BLOAR,
  _BLOC,
  _BLOCR,
  _BLOP,
  _BLOPa,
  _BLOPP,
  _BLOPPR,
  _BLOPR,
  _BLOPRa,
  _BLOTL,
  _BLOTLR,
  _BLP,
  _BLPA,
  _BLPAR,
  _BLPR,
  _BR,
  _BRE,
  _BRO,
  _BROL,
  _BROR,
  _BRORL,
  _BRR,
  _BRRa,
  _BRSR,
  _C,
  _CL,
  _CO,
  _COR,
  _CORr,
  _DA,
  _ER,
  _FAR,
  _FF,
  _FTL,
  _GLA,
  _GLAR,
  _GLARe,
  _GOA,
  _GOAR,
  _GOARe,
  _GOI,
  _h,
  _hH,
  _IA,
  _IAL,
  _IAn,
  _IAnd,
  _IR,
  _K,
  _LAI,
  _LAIR,
  _LAIRi,
  _LI,
  _LIR,
  _LIRi,
  _LITL,
  _LN,
  _LOA,
  _LOAR,
  _LOARi,
  _LOC,
  _LOP,
  _LOPi,
  _LOPP,
  _LOTL,
  _LP,
  _LPA,
  _LS,
  _M,
  _MR,
  _NT,
  _O,
  _OAL,
  _OAR,
  _OARL,
  _OI,
  _OIb,
  _OR,
  _PL,
  _PR,
  _PRo,
  _PTOIL,
  _PTPL,
  _R,
  _Ra,
  _ROIV,
  _SF,
  _SFc,
  _SR,
  _T,
  _TLS,
  _TLSy,
  _TR,
  _V,
  _xacl,
  _xadp,
  n0,
  ObjectReference,
  TypedAttributeValue,
} from "./schemas_0";
import {
  TypedLinkAttributeRangeList,
  TypedLinkSchemaAndFacetName,
  TypedLinkSpecifier,
  TypedLinkSpecifierList,
} from "./schemas_8_Link";
import { ObjectIdentifierAndLinkNameList } from "./schemas_9_Object";
import { PathToObjectIdentifiersList } from "./schemas_14_List";
import { SchemaFacet, SchemaFacetList } from "./schemas_16_Object";
import { PolicyToPathList } from "./schemas_19_";
import { TypedAttributeValueRange } from "./schemas_29_List";
import { AttributeKey } from "./schemas_31_Attributes";

/* eslint no-var: 0 */

export var AddFacetToObjectRequest = struct(
  n0,
  _AFTOR,
  0,
  [_DA, _SF, _OAL, _OR],
  [
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
    () => SchemaFacet,
    () => AttributeKeyAndValueList,
    () => ObjectReference,
  ]
);
export var AddFacetToObjectResponse = struct(n0, _AFTORd, 0, [], []);
export var AttributeKeyAndValue = struct(n0, _AKAV, 0, [_K, _V], [() => AttributeKey, () => TypedAttributeValue]);
export var BatchGetLinkAttributes = struct(n0, _BGLA, 0, [_TLS, _ANt], [() => TypedLinkSpecifier, 64 | 0]);
export var BatchGetLinkAttributesResponse = struct(n0, _BGLAR, 0, [_A], [() => AttributeKeyAndValueList]);
export var BatchGetObjectAttributes = struct(
  n0,
  _BGOA,
  0,
  [_OR, _SF, _ANt],
  [() => ObjectReference, () => SchemaFacet, 64 | 0]
);
export var BatchGetObjectAttributesResponse = struct(n0, _BGOAR, 0, [_A], [() => AttributeKeyAndValueList]);
export var BatchGetObjectInformation = struct(n0, _BGOI, 0, [_OR], [() => ObjectReference]);
export var BatchGetObjectInformationResponse = struct(n0, _BGOIR, 0, [_SFc, _OI], [() => SchemaFacetList, 0]);
export var BatchListAttachedIndices = struct(n0, _BLAI, 0, [_TR, _NT, _MR], [() => ObjectReference, 0, 1]);
export var BatchListAttachedIndicesResponse = struct(n0, _BLAIR, 0, [_IA, _NT], [() => IndexAttachmentList, 0]);
export var BatchListIncomingTypedLinks = struct(
  n0,
  _BLITL,
  0,
  [_OR, _FAR, _FTL, _NT, _MR],
  [() => ObjectReference, () => TypedLinkAttributeRangeList, () => TypedLinkSchemaAndFacetName, 0, 1]
);
export var BatchListIncomingTypedLinksResponse = struct(n0, _BLITLR, 0, [_LS, _NT], [() => TypedLinkSpecifierList, 0]);
export var BatchListIndex = struct(
  n0,
  _BLI,
  0,
  [_ROIV, _IR, _MR, _NT],
  [() => ObjectAttributeRangeList, () => ObjectReference, 1, 0]
);
export var BatchListIndexResponse = struct(n0, _BLIR, 0, [_IA, _NT], [() => IndexAttachmentList, 0]);
export var BatchListObjectAttributes = struct(
  n0,
  _BLOA,
  0,
  [_OR, _NT, _MR, _FF],
  [() => ObjectReference, 0, 1, () => SchemaFacet]
);
export var BatchListObjectAttributesResponse = struct(n0, _BLOAR, 0, [_A, _NT], [() => AttributeKeyAndValueList, 0]);
export var BatchListObjectChildren = struct(n0, _BLOC, 0, [_OR, _NT, _MR], [() => ObjectReference, 0, 1]);
export var BatchListObjectChildrenResponse = struct(n0, _BLOCR, 0, [_C, _NT], [128 | 0, 0]);
export var BatchListObjectParentPaths = struct(n0, _BLOPP, 0, [_OR, _NT, _MR], [() => ObjectReference, 0, 1]);
export var BatchListObjectParentPathsResponse = struct(
  n0,
  _BLOPPR,
  0,
  [_PTOIL, _NT],
  [() => PathToObjectIdentifiersList, 0]
);
export var BatchListObjectParents = struct(n0, _BLOP, 0, [_OR, _NT, _MR], [() => ObjectReference, 0, 1]);
export var BatchListObjectParentsResponse = struct(
  n0,
  _BLOPR,
  0,
  [_PL, _NT],
  [() => ObjectIdentifierAndLinkNameList, 0]
);
export var BatchListObjectPolicies = struct(n0, _BLOPa, 0, [_OR, _NT, _MR], [() => ObjectReference, 0, 1]);
export var BatchListObjectPoliciesResponse = struct(n0, _BLOPRa, 0, [_API, _NT], [64 | 0, 0]);
export var BatchListOutgoingTypedLinks = struct(
  n0,
  _BLOTL,
  0,
  [_OR, _FAR, _FTL, _NT, _MR],
  [() => ObjectReference, () => TypedLinkAttributeRangeList, () => TypedLinkSchemaAndFacetName, 0, 1]
);
export var BatchListOutgoingTypedLinksResponse = struct(
  n0,
  _BLOTLR,
  0,
  [_TLSy, _NT],
  [() => TypedLinkSpecifierList, 0]
);
export var BatchListPolicyAttachments = struct(n0, _BLPA, 0, [_PRo, _NT, _MR], [() => ObjectReference, 0, 1]);
export var BatchListPolicyAttachmentsResponse = struct(n0, _BLPAR, 0, [_OIb, _NT], [64 | 0, 0]);
export var BatchLookupPolicy = struct(n0, _BLP, 0, [_OR, _NT, _MR], [() => ObjectReference, 0, 1]);
export var BatchLookupPolicyResponse = struct(n0, _BLPR, 0, [_PTPL, _NT], [() => PolicyToPathList, 0]);
export var BatchReadException = struct(n0, _BRE, 0, [_T, _M], [0, 0]);
export var BatchReadOperation = struct(
  n0,
  _BRO,
  0,
  [_LOA, _LOC, _LAI, _LOPP, _GOI, _GOA, _LOP, _LOPi, _LPA, _LP, _LI, _LOTL, _LITL, _GLA],
  [
    () => BatchListObjectAttributes,
    () => BatchListObjectChildren,
    () => BatchListAttachedIndices,
    () => BatchListObjectParentPaths,
    () => BatchGetObjectInformation,
    () => BatchGetObjectAttributes,
    () => BatchListObjectParents,
    () => BatchListObjectPolicies,
    () => BatchListPolicyAttachments,
    () => BatchLookupPolicy,
    () => BatchListIndex,
    () => BatchListOutgoingTypedLinks,
    () => BatchListIncomingTypedLinks,
    () => BatchGetLinkAttributes,
  ]
);
export var BatchReadOperationResponse = struct(
  n0,
  _BROR,
  0,
  [_SR, _ER],
  [() => BatchReadSuccessfulResponse, () => BatchReadException]
);
export var BatchReadRequest = struct(
  n0,
  _BRR,
  0,
  [_DA, _O, _CL],
  [
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
    () => BatchReadOperationList,
    [
      0,
      {
        [_hH]: _xacl,
      },
    ],
  ]
);
export var BatchReadResponse = struct(n0, _BRRa, 0, [_R], [() => BatchReadOperationResponseList]);
export var BatchReadSuccessfulResponse = struct(
  n0,
  _BRSR,
  0,
  [_LOA, _LOC, _GOI, _GOA, _LAI, _LOPP, _LOPi, _LPA, _LP, _LI, _LOTL, _LITL, _GLA, _LOP],
  [
    () => BatchListObjectAttributesResponse,
    () => BatchListObjectChildrenResponse,
    () => BatchGetObjectInformationResponse,
    () => BatchGetObjectAttributesResponse,
    () => BatchListAttachedIndicesResponse,
    () => BatchListObjectParentPathsResponse,
    () => BatchListObjectPoliciesResponse,
    () => BatchListPolicyAttachmentsResponse,
    () => BatchLookupPolicyResponse,
    () => BatchListIndexResponse,
    () => BatchListOutgoingTypedLinksResponse,
    () => BatchListIncomingTypedLinksResponse,
    () => BatchGetLinkAttributesResponse,
    () => BatchListObjectParentsResponse,
  ]
);
export var CreateObjectRequest = struct(
  n0,
  _COR,
  0,
  [_DA, _SFc, _OAL, _PR, _LN],
  [
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
    () => SchemaFacetList,
    () => AttributeKeyAndValueList,
    () => ObjectReference,
    0,
  ]
);
export var CreateObjectResponse = struct(n0, _CORr, 0, [_OI], [0]);
export var GetLinkAttributesRequest = struct(
  n0,
  _GLAR,
  0,
  [_DA, _TLS, _ANt, _CL],
  [
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
    () => TypedLinkSpecifier,
    64 | 0,
    0,
  ]
);
export var GetLinkAttributesResponse = struct(n0, _GLARe, 0, [_A], [() => AttributeKeyAndValueList]);
export var GetObjectAttributesRequest = struct(
  n0,
  _GOAR,
  0,
  [_DA, _OR, _CL, _SF, _ANt],
  [
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
    () => ObjectReference,
    [
      0,
      {
        [_hH]: _xacl,
      },
    ],
    () => SchemaFacet,
    64 | 0,
  ]
);
export var GetObjectAttributesResponse = struct(n0, _GOARe, 0, [_A], [() => AttributeKeyAndValueList]);
export var IndexAttachment = struct(n0, _IAn, 0, [_IAnd, _OI], [() => AttributeKeyAndValueList, 0]);
export var ListAttachedIndicesRequest = struct(
  n0,
  _LAIR,
  0,
  [_DA, _TR, _NT, _MR, _CL],
  [
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
    () => ObjectReference,
    0,
    1,
    [
      0,
      {
        [_hH]: _xacl,
      },
    ],
  ]
);
export var ListAttachedIndicesResponse = struct(n0, _LAIRi, 0, [_IA, _NT], [() => IndexAttachmentList, 0]);
export var ListIndexRequest = struct(
  n0,
  _LIR,
  0,
  [_DA, _ROIV, _IR, _MR, _NT, _CL],
  [
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
    () => ObjectAttributeRangeList,
    () => ObjectReference,
    1,
    0,
    [
      0,
      {
        [_hH]: _xacl,
      },
    ],
  ]
);
export var ListIndexResponse = struct(n0, _LIRi, 0, [_IA, _NT], [() => IndexAttachmentList, 0]);
export var ListObjectAttributesRequest = struct(
  n0,
  _LOAR,
  0,
  [_DA, _OR, _NT, _MR, _CL, _FF],
  [
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
    () => ObjectReference,
    0,
    1,
    [
      0,
      {
        [_hH]: _xacl,
      },
    ],
    () => SchemaFacet,
  ]
);
export var ListObjectAttributesResponse = struct(n0, _LOARi, 0, [_A, _NT], [() => AttributeKeyAndValueList, 0]);
export var ObjectAttributeRange = struct(n0, _OAR, 0, [_AK, _Ra], [() => AttributeKey, () => TypedAttributeValueRange]);
export var AttributeKeyAndValueList = list(n0, _AKAVL, 0, () => AttributeKeyAndValue);
export var BatchReadOperationList = list(n0, _BROL, 0, () => BatchReadOperation);
export var BatchReadOperationResponseList = list(n0, _BRORL, 0, () => BatchReadOperationResponse);
export var IndexAttachmentList = list(n0, _IAL, 0, () => IndexAttachment);
export var ObjectAttributeRangeList = list(n0, _OARL, 0, () => ObjectAttributeRange);
export var AddFacetToObject = op(
  n0,
  _AFTO,
  {
    [_h]: ["PUT", "/amazonclouddirectory/2017-01-11/object/facets", 200],
  },
  () => AddFacetToObjectRequest,
  () => AddFacetToObjectResponse
);
export var BatchRead = op(
  n0,
  _BR,
  {
    [_h]: ["POST", "/amazonclouddirectory/2017-01-11/batchread", 200],
  },
  () => BatchReadRequest,
  () => BatchReadResponse
);
export var CreateObject = op(
  n0,
  _CO,
  {
    [_h]: ["PUT", "/amazonclouddirectory/2017-01-11/object", 200],
  },
  () => CreateObjectRequest,
  () => CreateObjectResponse
);
export var GetLinkAttributes = op(
  n0,
  _GLA,
  {
    [_h]: ["POST", "/amazonclouddirectory/2017-01-11/typedlink/attributes/get", 200],
  },
  () => GetLinkAttributesRequest,
  () => GetLinkAttributesResponse
);
export var GetObjectAttributes = op(
  n0,
  _GOA,
  {
    [_h]: ["POST", "/amazonclouddirectory/2017-01-11/object/attributes/get", 200],
  },
  () => GetObjectAttributesRequest,
  () => GetObjectAttributesResponse
);
export var ListAttachedIndices = op(
  n0,
  _LAI,
  {
    [_h]: ["POST", "/amazonclouddirectory/2017-01-11/object/indices", 200],
  },
  () => ListAttachedIndicesRequest,
  () => ListAttachedIndicesResponse
);
export var ListIndex = op(
  n0,
  _LI,
  {
    [_h]: ["POST", "/amazonclouddirectory/2017-01-11/index/targets", 200],
  },
  () => ListIndexRequest,
  () => ListIndexResponse
);
export var ListObjectAttributes = op(
  n0,
  _LOA,
  {
    [_h]: ["POST", "/amazonclouddirectory/2017-01-11/object/attributes", 200],
  },
  () => ListObjectAttributesRequest,
  () => ListObjectAttributesResponse
);
