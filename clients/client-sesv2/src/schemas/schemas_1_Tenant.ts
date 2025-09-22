// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AT,
  _BA,
  _BEC,
  _BEE,
  _BEEL,
  _BEER,
  _BEERL,
  _BEERu,
  _BEEu,
  _CA,
  _CLN,
  _Con,
  _CSN,
  _CTR,
  _CTr,
  _CTRA,
  _CTRAR,
  _CTRARr,
  _CTre,
  _CTRr,
  _DCe,
  _Des,
  _DET,
  _DTe,
  _DTR,
  _DTRA,
  _DTRAR,
  _DTRARe,
  _DTRe,
  _EIn,
  _Er,
  _ET,
  _F,
  _FEA,
  _FEAIA,
  _FFEA,
  _FFEAIA,
  _GT,
  _GTR,
  _GTRe,
  _h,
  _LMO,
  _LRT,
  _LRTR,
  _LRTRi,
  _LTi,
  _LTR,
  _LTRi,
  _LTRis,
  _LTRR,
  _LTRRi,
  _MI,
  _NT,
  _PS,
  _RA,
  _REC,
  _RH,
  _RT,
  _RTA,
  _RTD,
  _RTe,
  _RTep,
  _RTes,
  _RTM,
  _RTML,
  _S,
  _SBE,
  _SBER,
  _SBERe,
  _SEen,
  _SER,
  _SERe,
  _SS,
  _TA,
  _Ta,
  _TAo,
  _Te,
  _Ten,
  _Tena,
  _TI,
  _TIe,
  _TIL,
  _TNe,
  _TNo,
  _TR,
  _TRe,
  _TRL,
  n0,
  TagList,
} from "./schemas_0";
import { MessageTagList } from "./schemas_5_Email";
import { EmailContent, MessageHeaderList, Template } from "./schemas_7_Email";

/* eslint no-var: 0 */

export var BulkEmailContent = struct(n0, _BEC, 0, [_Te], [() => Template]);
export var BulkEmailEntry = struct(
  n0,
  _BEE,
  0,
  [_Des, _RT, _REC, _RH],
  [() => Destination, () => MessageTagList, () => ReplacementEmailContent, () => MessageHeaderList]
);
export var BulkEmailEntryResult = struct(n0, _BEER, 0, [_S, _Er, _MI], [0, 0, 0]);
export var CreateTenantRequest = struct(n0, _CTR, 0, [_TNe, _Ta], [0, () => TagList]);
export var CreateTenantResourceAssociationRequest = struct(n0, _CTRAR, 0, [_TNe, _RA], [0, 0]);
export var CreateTenantResourceAssociationResponse = struct(n0, _CTRARr, 0, [], []);
export var CreateTenantResponse = struct(
  n0,
  _CTRr,
  0,
  [_TNe, _TI, _TA, _CTr, _Ta, _SS],
  [0, 0, 0, 4, () => TagList, 0]
);
export var DeleteTenantRequest = struct(n0, _DTR, 0, [_TNe], [0]);
export var DeleteTenantResourceAssociationRequest = struct(n0, _DTRAR, 0, [_TNe, _RA], [0, 0]);
export var DeleteTenantResourceAssociationResponse = struct(n0, _DTRARe, 0, [], []);
export var DeleteTenantResponse = struct(n0, _DTRe, 0, [], []);
export var Destination = struct(n0, _Des, 0, [_TAo, _CA, _BA], [64 | 0, 64 | 0, 64 | 0]);
export var GetTenantRequest = struct(n0, _GTR, 0, [_TNe], [0]);
export var GetTenantResponse = struct(n0, _GTRe, 0, [_Ten], [() => Tenant]);
export var ListManagementOptions = struct(n0, _LMO, 0, [_CLN, _TNo], [0, 0]);
export var ListResourceTenantsRequest = struct(n0, _LRTR, 0, [_RA, _PS, _NT], [0, 1, 0]);
export var ListResourceTenantsResponse = struct(n0, _LRTRi, 0, [_RTe, _NT], [() => ResourceTenantMetadataList, 0]);
export var ListTenantResourcesRequest = struct(n0, _LTRR, 0, [_TNe, _F, _PS, _NT], [0, 128 | 0, 1, 0]);
export var ListTenantResourcesResponse = struct(n0, _LTRRi, 0, [_TR, _NT], [() => TenantResourceList, 0]);
export var ListTenantsRequest = struct(n0, _LTR, 0, [_NT, _PS], [0, 1]);
export var ListTenantsResponse = struct(n0, _LTRi, 0, [_Tena, _NT], [() => TenantInfoList, 0]);
export var ReplacementEmailContent = struct(n0, _REC, 0, [_RTep], [() => ReplacementTemplate]);
export var ReplacementTemplate = struct(n0, _RTep, 0, [_RTD], [0]);
export var ResourceTenantMetadata = struct(n0, _RTM, 0, [_TNe, _TI, _RA, _AT], [0, 0, 0, 4]);
export var SendBulkEmailRequest = struct(
  n0,
  _SBER,
  0,
  [_FEA, _FEAIA, _RTA, _FFEA, _FFEAIA, _DET, _DCe, _BEEu, _CSN, _EIn, _TNe],
  [0, 0, 64 | 0, 0, 0, () => MessageTagList, () => BulkEmailContent, () => BulkEmailEntryList, 0, 0, 0]
);
export var SendBulkEmailResponse = struct(n0, _SBERe, 0, [_BEERu], [() => BulkEmailEntryResultList]);
export var SendEmailRequest = struct(
  n0,
  _SER,
  0,
  [_FEA, _FEAIA, _Des, _RTA, _FFEA, _FFEAIA, _Con, _ET, _CSN, _EIn, _TNe, _LMO],
  [
    0,
    0,
    () => Destination,
    64 | 0,
    0,
    0,
    () => EmailContent,
    () => MessageTagList,
    0,
    0,
    0,
    () => ListManagementOptions,
  ]
);
export var SendEmailResponse = struct(n0, _SERe, 0, [_MI], [0]);
export var Tenant = struct(n0, _Ten, 0, [_TNe, _TI, _TA, _CTr, _Ta, _SS], [0, 0, 0, 4, () => TagList, 0]);
export var TenantInfo = struct(n0, _TIe, 0, [_TNe, _TI, _TA, _CTr], [0, 0, 0, 4]);
export var TenantResource = struct(n0, _TRe, 0, [_RTes, _RA], [0, 0]);
export var BulkEmailEntryList = list(n0, _BEEL, 0, () => BulkEmailEntry);
export var BulkEmailEntryResultList = list(n0, _BEERL, 0, () => BulkEmailEntryResult);
export var EmailAddressList = 64 | 0;

export var ResourceTenantMetadataList = list(n0, _RTML, 0, () => ResourceTenantMetadata);
export var TenantInfoList = list(n0, _TIL, 0, () => TenantInfo);
export var TenantResourceList = list(n0, _TRL, 0, () => TenantResource);
export var ListTenantResourcesFilter = 128 | 0;

export var CreateTenant = op(
  n0,
  _CTre,
  {
    [_h]: ["POST", "/v2/email/tenants", 200],
  },
  () => CreateTenantRequest,
  () => CreateTenantResponse
);
export var CreateTenantResourceAssociation = op(
  n0,
  _CTRA,
  {
    [_h]: ["POST", "/v2/email/tenants/resources", 200],
  },
  () => CreateTenantResourceAssociationRequest,
  () => CreateTenantResourceAssociationResponse
);
export var DeleteTenant = op(
  n0,
  _DTe,
  {
    [_h]: ["POST", "/v2/email/tenants/delete", 200],
  },
  () => DeleteTenantRequest,
  () => DeleteTenantResponse
);
export var DeleteTenantResourceAssociation = op(
  n0,
  _DTRA,
  {
    [_h]: ["POST", "/v2/email/tenants/resources/delete", 200],
  },
  () => DeleteTenantResourceAssociationRequest,
  () => DeleteTenantResourceAssociationResponse
);
export var GetTenant = op(
  n0,
  _GT,
  {
    [_h]: ["POST", "/v2/email/tenants/get", 200],
  },
  () => GetTenantRequest,
  () => GetTenantResponse
);
export var ListResourceTenants = op(
  n0,
  _LRT,
  {
    [_h]: ["POST", "/v2/email/resources/tenants/list", 200],
  },
  () => ListResourceTenantsRequest,
  () => ListResourceTenantsResponse
);
export var ListTenantResources = op(
  n0,
  _LTRis,
  {
    [_h]: ["POST", "/v2/email/tenants/resources/list", 200],
  },
  () => ListTenantResourcesRequest,
  () => ListTenantResourcesResponse
);
export var ListTenants = op(
  n0,
  _LTi,
  {
    [_h]: ["POST", "/v2/email/tenants/list", 200],
  },
  () => ListTenantsRequest,
  () => ListTenantsResponse
);
export var SendBulkEmail = op(
  n0,
  _SBE,
  {
    [_h]: ["POST", "/v2/email/outbound-bulk-emails", 200],
  },
  () => SendBulkEmailRequest,
  () => SendBulkEmailResponse
);
export var SendEmail = op(
  n0,
  _SEen,
  {
    [_h]: ["POST", "/v2/email/outbound-emails", 200],
  },
  () => SendEmailRequest,
  () => SendEmailResponse
);
