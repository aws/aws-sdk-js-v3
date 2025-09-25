// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AA,
  _AAT,
  _AK,
  _AN,
  _ANAV,
  _ANAVL,
  _ATL,
  _ATLR,
  _ATLRt,
  _AU,
  _AUV,
  _CL,
  _DA,
  _DTL,
  _DTLR,
  _FAR,
  _FTL,
  _h,
  _hH,
  _IAV,
  _LAA,
  _LAU,
  _LAUL,
  _LITL,
  _LITLR,
  _LITLRi,
  _LOTL,
  _LOTLR,
  _LOTLRi,
  _LS,
  _MR,
  _NT,
  _OR,
  _Ra,
  _SA,
  _SOR,
  _TLAR,
  _TLARL,
  _TLF,
  _TLN,
  _TLS,
  _TLSAFN,
  _TLSL,
  _TLSy,
  _TOR,
  _ULA,
  _ULAR,
  _ULARp,
  _V,
  _xadp,
  n0,
  ObjectReference,
  TypedAttributeValue,
  Unit,
} from "./schemas_0";
import { TypedAttributeValueRange } from "./schemas_29_List";
import { AttributeKey } from "./schemas_31_Attributes";

/* eslint no-var: 0 */

export var AttachTypedLinkRequest = struct(
  n0,
  _ATLR,
  0,
  [_DA, _SOR, _TOR, _TLF, _A],
  [
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
    () => ObjectReference,
    () => ObjectReference,
    () => TypedLinkSchemaAndFacetName,
    () => AttributeNameAndValueList,
  ]
);
export var AttachTypedLinkResponse = struct(n0, _ATLRt, 0, [_TLS], [() => TypedLinkSpecifier]);
export var AttributeNameAndValue = struct(n0, _ANAV, 0, [_AN, _V], [0, () => TypedAttributeValue]);
export var DetachTypedLinkRequest = struct(
  n0,
  _DTLR,
  0,
  [_DA, _TLS],
  [
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
    () => TypedLinkSpecifier,
  ]
);
export var LinkAttributeAction = struct(n0, _LAA, 0, [_AAT, _AUV], [0, () => TypedAttributeValue]);
export var LinkAttributeUpdate = struct(n0, _LAU, 0, [_AK, _AA], [() => AttributeKey, () => LinkAttributeAction]);
export var ListIncomingTypedLinksRequest = struct(
  n0,
  _LITLR,
  0,
  [_DA, _OR, _FAR, _FTL, _NT, _MR, _CL],
  [
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
    () => ObjectReference,
    () => TypedLinkAttributeRangeList,
    () => TypedLinkSchemaAndFacetName,
    0,
    1,
    0,
  ]
);
export var ListIncomingTypedLinksResponse = struct(n0, _LITLRi, 0, [_LS, _NT], [() => TypedLinkSpecifierList, 0]);
export var ListOutgoingTypedLinksRequest = struct(
  n0,
  _LOTLR,
  0,
  [_DA, _OR, _FAR, _FTL, _NT, _MR, _CL],
  [
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
    () => ObjectReference,
    () => TypedLinkAttributeRangeList,
    () => TypedLinkSchemaAndFacetName,
    0,
    1,
    0,
  ]
);
export var ListOutgoingTypedLinksResponse = struct(n0, _LOTLRi, 0, [_TLSy, _NT], [() => TypedLinkSpecifierList, 0]);
export var TypedLinkAttributeRange = struct(n0, _TLAR, 0, [_AN, _Ra], [0, () => TypedAttributeValueRange]);
export var TypedLinkSchemaAndFacetName = struct(n0, _TLSAFN, 0, [_SA, _TLN], [0, 0]);
export var TypedLinkSpecifier = struct(
  n0,
  _TLS,
  0,
  [_TLF, _SOR, _TOR, _IAV],
  [() => TypedLinkSchemaAndFacetName, () => ObjectReference, () => ObjectReference, () => AttributeNameAndValueList]
);
export var UpdateLinkAttributesRequest = struct(
  n0,
  _ULAR,
  0,
  [_DA, _TLS, _AU],
  [
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
    () => TypedLinkSpecifier,
    () => LinkAttributeUpdateList,
  ]
);
export var UpdateLinkAttributesResponse = struct(n0, _ULARp, 0, [], []);
export var AttributeNameAndValueList = list(n0, _ANAVL, 0, () => AttributeNameAndValue);
export var LinkAttributeUpdateList = list(n0, _LAUL, 0, () => LinkAttributeUpdate);
export var TypedLinkAttributeRangeList = list(n0, _TLARL, 0, () => TypedLinkAttributeRange);
export var TypedLinkSpecifierList = list(n0, _TLSL, 0, () => TypedLinkSpecifier);
export var AttachTypedLink = op(
  n0,
  _ATL,
  {
    [_h]: ["PUT", "/amazonclouddirectory/2017-01-11/typedlink/attach", 200],
  },
  () => AttachTypedLinkRequest,
  () => AttachTypedLinkResponse
);
export var DetachTypedLink = op(
  n0,
  _DTL,
  {
    [_h]: ["PUT", "/amazonclouddirectory/2017-01-11/typedlink/detach", 200],
  },
  () => DetachTypedLinkRequest,
  () => Unit
);
export var ListIncomingTypedLinks = op(
  n0,
  _LITL,
  {
    [_h]: ["POST", "/amazonclouddirectory/2017-01-11/typedlink/incoming", 200],
  },
  () => ListIncomingTypedLinksRequest,
  () => ListIncomingTypedLinksResponse
);
export var ListOutgoingTypedLinks = op(
  n0,
  _LOTL,
  {
    [_h]: ["POST", "/amazonclouddirectory/2017-01-11/typedlink/outgoing", 200],
  },
  () => ListOutgoingTypedLinksRequest,
  () => ListOutgoingTypedLinksResponse
);
export var UpdateLinkAttributes = op(
  n0,
  _ULA,
  {
    [_h]: ["POST", "/amazonclouddirectory/2017-01-11/typedlink/attributes/update", 200],
  },
  () => UpdateLinkAttributesRequest,
  () => UpdateLinkAttributesResponse
);
