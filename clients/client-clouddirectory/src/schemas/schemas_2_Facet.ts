// smithy-typescript generated code
import { error, list, map, op, struct } from "@smithy/core/schema";

import {
  BatchWriteException as __BatchWriteException,
  CannotListParentOfRootException as __CannotListParentOfRootException,
  FacetAlreadyExistsException as __FacetAlreadyExistsException,
  IncompatibleSchemaException as __IncompatibleSchemaException,
  InvalidFacetUpdateException as __InvalidFacetUpdateException,
} from "../models/index";
import {
  _A,
  _Ac,
  _AD,
  _AFTO,
  _AKL,
  _AO,
  _AOI,
  _aOI,
  _AP,
  _AR,
  _At,
  _ATI,
  _ATL,
  _AU,
  _BAFTO,
  _BAFTOR,
  _BAO,
  _BAOR,
  _BAP,
  _BAPR,
  _BATI,
  _BATIR,
  _BATL,
  _BATLR,
  _BCI,
  _BCIR,
  _BCO,
  _BCOR,
  _BDFI,
  _BDFIR,
  _BDO,
  _BDOa,
  _BDOR,
  _BDORa,
  _BDP,
  _BDPR,
  _BDTL,
  _BDTLR,
  _BRFFO,
  _BRFFOR,
  _BRN,
  _BULA,
  _BULAR,
  _BUOA,
  _BUOAR,
  _BW,
  _BWE,
  _BWO,
  _BWOL,
  _BWOR,
  _BWORL,
  _BWR,
  _BWRa,
  _c,
  _CF,
  _CFR,
  _CFRr,
  _CI,
  _CIR,
  _CIRr,
  _CL,
  _CLPORE,
  _CO,
  _CR,
  _CTLF,
  _CTLFR,
  _CTLFRr,
  _DA,
  _DFI,
  _DO,
  _DOe,
  _DOI,
  _dOI,
  _DP,
  _DR,
  _DSA,
  _DTL,
  _DV,
  _e,
  _F,
  _FA,
  _FAD,
  _FAEE,
  _FAL,
  _FARa,
  _FAU,
  _FAUL,
  _FS,
  _h,
  _hE,
  _hH,
  _I,
  _IALTEP,
  _IAO,
  _IFUE,
  _II,
  _IR,
  _ISE,
  _IU,
  _LFA,
  _LFAR,
  _LFARi,
  _LN,
  _LOP,
  _LOPR,
  _LOPRi,
  _LTLFA,
  _LTLFAR,
  _LTLFARi,
  _M,
  _MR,
  _MV,
  _N,
  _NT,
  _O,
  _OAL,
  _OI,
  _OIAL,
  _OR,
  _OT,
  _P,
  _Par,
  _PL,
  _PR,
  _PRo,
  _PSA,
  _R,
  _RB,
  _RFFO,
  _RM,
  _Ru,
  _Rul,
  _SA,
  _SF,
  _SOR,
  _T,
  _TAN,
  _TFN,
  _TLAD,
  _TLADL,
  _TLF,
  _TLFAU,
  _TLFAUL,
  _TLS,
  _TOR,
  _TR,
  _UAS,
  _UASR,
  _UASRp,
  _UF,
  _UFR,
  _UFRp,
  _ULA,
  _UOA,
  _UPS,
  _UPSR,
  _UPSRp,
  _USA,
  _UTLF,
  _UTLFR,
  _UTLFRp,
  _xacl,
  _xadp,
  n0,
  ObjectReference,
  TypedAttributeValue,
} from "./schemas_0";
import { AttributeKeyAndValueList } from "./schemas_4_Object";
import {
  AttributeNameAndValueList,
  LinkAttributeUpdateList,
  TypedLinkSchemaAndFacetName,
  TypedLinkSpecifier,
} from "./schemas_8_Link";
import { ObjectIdentifierAndLinkNameList } from "./schemas_9_Object";
import { SchemaFacet, SchemaFacetList } from "./schemas_16_Object";
import { ObjectAttributeUpdateList } from "./schemas_26_Update";
import { AttributeKey } from "./schemas_31_Attributes";

/* eslint no-var: 0 */

export var BatchAddFacetToObject = struct(
  n0,
  _BAFTO,
  0,
  [_SF, _OAL, _OR],
  [() => SchemaFacet, () => AttributeKeyAndValueList, () => ObjectReference]
);
export var BatchAddFacetToObjectResponse = struct(n0, _BAFTOR, 0, [], []);
export var BatchAttachObject = struct(n0, _BAO, 0, [_PR, _CR, _LN], [() => ObjectReference, () => ObjectReference, 0]);
export var BatchAttachObjectResponse = struct(n0, _BAOR, 0, [_aOI], [0]);
export var BatchAttachPolicy = struct(n0, _BAP, 0, [_PRo, _OR], [() => ObjectReference, () => ObjectReference]);
export var BatchAttachPolicyResponse = struct(n0, _BAPR, 0, [], []);
export var BatchAttachToIndex = struct(n0, _BATI, 0, [_IR, _TR], [() => ObjectReference, () => ObjectReference]);
export var BatchAttachToIndexResponse = struct(n0, _BATIR, 0, [_AOI], [0]);
export var BatchAttachTypedLink = struct(
  n0,
  _BATL,
  0,
  [_SOR, _TOR, _TLF, _A],
  [() => ObjectReference, () => ObjectReference, () => TypedLinkSchemaAndFacetName, () => AttributeNameAndValueList]
);
export var BatchAttachTypedLinkResponse = struct(n0, _BATLR, 0, [_TLS], [() => TypedLinkSpecifier]);
export var BatchCreateIndex = struct(
  n0,
  _BCI,
  0,
  [_OIAL, _IU, _PR, _LN, _BRN],
  [() => AttributeKeyList, 2, () => ObjectReference, 0, 0]
);
export var BatchCreateIndexResponse = struct(n0, _BCIR, 0, [_OI], [0]);
export var BatchCreateObject = struct(
  n0,
  _BCO,
  0,
  [_SF, _OAL, _PR, _LN, _BRN],
  [() => SchemaFacetList, () => AttributeKeyAndValueList, () => ObjectReference, 0, 0]
);
export var BatchCreateObjectResponse = struct(n0, _BCOR, 0, [_OI], [0]);
export var BatchDeleteObject = struct(n0, _BDO, 0, [_OR], [() => ObjectReference]);
export var BatchDeleteObjectResponse = struct(n0, _BDOR, 0, [], []);
export var BatchDetachFromIndex = struct(n0, _BDFI, 0, [_IR, _TR], [() => ObjectReference, () => ObjectReference]);
export var BatchDetachFromIndexResponse = struct(n0, _BDFIR, 0, [_DOI], [0]);
export var BatchDetachObject = struct(n0, _BDOa, 0, [_PR, _LN, _BRN], [() => ObjectReference, 0, 0]);
export var BatchDetachObjectResponse = struct(n0, _BDORa, 0, [_dOI], [0]);
export var BatchDetachPolicy = struct(n0, _BDP, 0, [_PRo, _OR], [() => ObjectReference, () => ObjectReference]);
export var BatchDetachPolicyResponse = struct(n0, _BDPR, 0, [], []);
export var BatchDetachTypedLink = struct(n0, _BDTL, 0, [_TLS], [() => TypedLinkSpecifier]);
export var BatchDetachTypedLinkResponse = struct(n0, _BDTLR, 0, [], []);
export var BatchRemoveFacetFromObject = struct(n0, _BRFFO, 0, [_SF, _OR], [() => SchemaFacet, () => ObjectReference]);
export var BatchRemoveFacetFromObjectResponse = struct(n0, _BRFFOR, 0, [], []);
export var BatchUpdateLinkAttributes = struct(
  n0,
  _BULA,
  0,
  [_TLS, _AU],
  [() => TypedLinkSpecifier, () => LinkAttributeUpdateList]
);
export var BatchUpdateLinkAttributesResponse = struct(n0, _BULAR, 0, [], []);
export var BatchUpdateObjectAttributes = struct(
  n0,
  _BUOA,
  0,
  [_OR, _AU],
  [() => ObjectReference, () => ObjectAttributeUpdateList]
);
export var BatchUpdateObjectAttributesResponse = struct(n0, _BUOAR, 0, [_OI], [0]);
export var BatchWriteException = error(
  n0,
  _BWE,
  {
    [_e]: _c,
  },
  [_I, _T, _M],
  [1, 0, 0],

  __BatchWriteException
);
export var BatchWriteOperation = struct(
  n0,
  _BWO,
  0,
  [_CO, _AO, _DO, _UOA, _DOe, _AFTO, _RFFO, _AP, _DP, _CI, _ATI, _DFI, _ATL, _DTL, _ULA],
  [
    () => BatchCreateObject,
    () => BatchAttachObject,
    () => BatchDetachObject,
    () => BatchUpdateObjectAttributes,
    () => BatchDeleteObject,
    () => BatchAddFacetToObject,
    () => BatchRemoveFacetFromObject,
    () => BatchAttachPolicy,
    () => BatchDetachPolicy,
    () => BatchCreateIndex,
    () => BatchAttachToIndex,
    () => BatchDetachFromIndex,
    () => BatchAttachTypedLink,
    () => BatchDetachTypedLink,
    () => BatchUpdateLinkAttributes,
  ]
);
export var BatchWriteOperationResponse = struct(
  n0,
  _BWOR,
  0,
  [_CO, _AO, _DO, _UOA, _DOe, _AFTO, _RFFO, _AP, _DP, _CI, _ATI, _DFI, _ATL, _DTL, _ULA],
  [
    () => BatchCreateObjectResponse,
    () => BatchAttachObjectResponse,
    () => BatchDetachObjectResponse,
    () => BatchUpdateObjectAttributesResponse,
    () => BatchDeleteObjectResponse,
    () => BatchAddFacetToObjectResponse,
    () => BatchRemoveFacetFromObjectResponse,
    () => BatchAttachPolicyResponse,
    () => BatchDetachPolicyResponse,
    () => BatchCreateIndexResponse,
    () => BatchAttachToIndexResponse,
    () => BatchDetachFromIndexResponse,
    () => BatchAttachTypedLinkResponse,
    () => BatchDetachTypedLinkResponse,
    () => BatchUpdateLinkAttributesResponse,
  ]
);
export var BatchWriteRequest = struct(
  n0,
  _BWR,
  0,
  [_DA, _O],
  [
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
    () => BatchWriteOperationList,
  ]
);
export var BatchWriteResponse = struct(n0, _BWRa, 0, [_R], [() => BatchWriteOperationResponseList]);
export var CannotListParentOfRootException = error(
  n0,
  _CLPORE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __CannotListParentOfRootException
);
export var CreateFacetRequest = struct(
  n0,
  _CFR,
  0,
  [_SA, _N, _A, _OT, _FS],
  [
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
    0,
    () => FacetAttributeList,
    0,
    0,
  ]
);
export var CreateFacetResponse = struct(n0, _CFRr, 0, [], []);
export var CreateIndexRequest = struct(
  n0,
  _CIR,
  0,
  [_DA, _OIAL, _IU, _PR, _LN],
  [
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
    () => AttributeKeyList,
    2,
    () => ObjectReference,
    0,
  ]
);
export var CreateIndexResponse = struct(n0, _CIRr, 0, [_OI], [0]);
export var CreateTypedLinkFacetRequest = struct(
  n0,
  _CTLFR,
  0,
  [_SA, _F],
  [
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
    () => TypedLinkFacet,
  ]
);
export var CreateTypedLinkFacetResponse = struct(n0, _CTLFRr, 0, [], []);
export var FacetAlreadyExistsException = error(
  n0,
  _FAEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __FacetAlreadyExistsException
);
export var FacetAttribute = struct(
  n0,
  _FA,
  0,
  [_N, _AD, _AR, _RB],
  [0, () => FacetAttributeDefinition, () => FacetAttributeReference, 0]
);
export var FacetAttributeDefinition = struct(
  n0,
  _FAD,
  0,
  [_T, _DV, _II, _Ru],
  [0, () => TypedAttributeValue, 2, () => RuleMap]
);
export var FacetAttributeReference = struct(n0, _FARa, 0, [_TFN, _TAN], [0, 0]);
export var FacetAttributeUpdate = struct(n0, _FAU, 0, [_At, _Ac], [() => FacetAttribute, 0]);
export var IncompatibleSchemaException = error(
  n0,
  _ISE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __IncompatibleSchemaException
);
export var InvalidFacetUpdateException = error(
  n0,
  _IFUE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidFacetUpdateException
);
export var ListFacetAttributesRequest = struct(
  n0,
  _LFAR,
  0,
  [_SA, _N, _NT, _MR],
  [
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
    0,
    0,
    1,
  ]
);
export var ListFacetAttributesResponse = struct(n0, _LFARi, 0, [_A, _NT], [() => FacetAttributeList, 0]);
export var ListObjectParentsRequest = struct(
  n0,
  _LOPR,
  0,
  [_DA, _OR, _NT, _MR, _CL, _IALTEP],
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
    2,
  ]
);
export var ListObjectParentsResponse = struct(
  n0,
  _LOPRi,
  0,
  [_P, _NT, _PL],
  [128 | 0, 0, () => ObjectIdentifierAndLinkNameList]
);
export var ListTypedLinkFacetAttributesRequest = struct(
  n0,
  _LTLFAR,
  0,
  [_SA, _N, _NT, _MR],
  [
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
    0,
    0,
    1,
  ]
);
export var ListTypedLinkFacetAttributesResponse = struct(
  n0,
  _LTLFARi,
  0,
  [_A, _NT],
  [() => TypedLinkAttributeDefinitionList, 0]
);
export var Rule = struct(n0, _Rul, 0, [_T, _Par], [0, 128 | 0]);
export var TypedLinkAttributeDefinition = struct(
  n0,
  _TLAD,
  0,
  [_N, _T, _DV, _II, _Ru, _RB],
  [0, 0, () => TypedAttributeValue, 2, () => RuleMap, 0]
);
export var TypedLinkFacet = struct(n0, _TLF, 0, [_N, _A, _IAO], [0, () => TypedLinkAttributeDefinitionList, 64 | 0]);
export var TypedLinkFacetAttributeUpdate = struct(n0, _TLFAU, 0, [_At, _Ac], [() => TypedLinkAttributeDefinition, 0]);
export var UpdateFacetRequest = struct(
  n0,
  _UFR,
  0,
  [_SA, _N, _AU, _OT],
  [
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
    0,
    () => FacetAttributeUpdateList,
    0,
  ]
);
export var UpdateFacetResponse = struct(n0, _UFRp, 0, [], []);
export var UpdateTypedLinkFacetRequest = struct(
  n0,
  _UTLFR,
  0,
  [_SA, _N, _AU, _IAO],
  [
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
    0,
    () => TypedLinkFacetAttributeUpdateList,
    64 | 0,
  ]
);
export var UpdateTypedLinkFacetResponse = struct(n0, _UTLFRp, 0, [], []);
export var UpgradeAppliedSchemaRequest = struct(n0, _UASR, 0, [_PSA, _DA, _DR], [0, 0, 2]);
export var UpgradeAppliedSchemaResponse = struct(n0, _UASRp, 0, [_USA, _DA], [0, 0]);
export var UpgradePublishedSchemaRequest = struct(n0, _UPSR, 0, [_DSA, _PSA, _MV, _DR], [0, 0, 0, 2]);
export var UpgradePublishedSchemaResponse = struct(n0, _UPSRp, 0, [_USA], [0]);
export var AttributeKeyList = list(n0, _AKL, 0, () => AttributeKey);
export var BatchWriteOperationList = list(n0, _BWOL, 0, () => BatchWriteOperation);
export var BatchWriteOperationResponseList = list(n0, _BWORL, 0, () => BatchWriteOperationResponse);
export var FacetAttributeList = list(n0, _FAL, 0, () => FacetAttribute);
export var FacetAttributeUpdateList = list(n0, _FAUL, 0, () => FacetAttributeUpdate);
export var TypedLinkAttributeDefinitionList = list(n0, _TLADL, 0, () => TypedLinkAttributeDefinition);
export var TypedLinkFacetAttributeUpdateList = list(n0, _TLFAUL, 0, () => TypedLinkFacetAttributeUpdate);
export var ObjectIdentifierToLinkNameMap = 128 | 0;

export var RuleMap = map(n0, _RM, 0, 0, () => Rule);
export var RuleParameterMap = 128 | 0;

export var BatchWrite = op(
  n0,
  _BW,
  {
    [_h]: ["PUT", "/amazonclouddirectory/2017-01-11/batchwrite", 200],
  },
  () => BatchWriteRequest,
  () => BatchWriteResponse
);
export var CreateFacet = op(
  n0,
  _CF,
  {
    [_h]: ["PUT", "/amazonclouddirectory/2017-01-11/facet/create", 200],
  },
  () => CreateFacetRequest,
  () => CreateFacetResponse
);
export var CreateIndex = op(
  n0,
  _CI,
  {
    [_h]: ["PUT", "/amazonclouddirectory/2017-01-11/index", 200],
  },
  () => CreateIndexRequest,
  () => CreateIndexResponse
);
export var CreateTypedLinkFacet = op(
  n0,
  _CTLF,
  {
    [_h]: ["PUT", "/amazonclouddirectory/2017-01-11/typedlink/facet/create", 200],
  },
  () => CreateTypedLinkFacetRequest,
  () => CreateTypedLinkFacetResponse
);
export var ListFacetAttributes = op(
  n0,
  _LFA,
  {
    [_h]: ["POST", "/amazonclouddirectory/2017-01-11/facet/attributes", 200],
  },
  () => ListFacetAttributesRequest,
  () => ListFacetAttributesResponse
);
export var ListObjectParents = op(
  n0,
  _LOP,
  {
    [_h]: ["POST", "/amazonclouddirectory/2017-01-11/object/parent", 200],
  },
  () => ListObjectParentsRequest,
  () => ListObjectParentsResponse
);
export var ListTypedLinkFacetAttributes = op(
  n0,
  _LTLFA,
  {
    [_h]: ["POST", "/amazonclouddirectory/2017-01-11/typedlink/facet/attributes", 200],
  },
  () => ListTypedLinkFacetAttributesRequest,
  () => ListTypedLinkFacetAttributesResponse
);
export var UpdateFacet = op(
  n0,
  _UF,
  {
    [_h]: ["PUT", "/amazonclouddirectory/2017-01-11/facet", 200],
  },
  () => UpdateFacetRequest,
  () => UpdateFacetResponse
);
export var UpdateTypedLinkFacet = op(
  n0,
  _UTLF,
  {
    [_h]: ["PUT", "/amazonclouddirectory/2017-01-11/typedlink/facet", 200],
  },
  () => UpdateTypedLinkFacetRequest,
  () => UpdateTypedLinkFacetResponse
);
export var UpgradeAppliedSchema = op(
  n0,
  _UAS,
  {
    [_h]: ["PUT", "/amazonclouddirectory/2017-01-11/schema/upgradeapplied", 200],
  },
  () => UpgradeAppliedSchemaRequest,
  () => UpgradeAppliedSchemaResponse
);
export var UpgradePublishedSchema = op(
  n0,
  _UPS,
  {
    [_h]: ["PUT", "/amazonclouddirectory/2017-01-11/schema/upgradepublished", 200],
  },
  () => UpgradePublishedSchemaRequest,
  () => UpgradePublishedSchemaResponse
);
