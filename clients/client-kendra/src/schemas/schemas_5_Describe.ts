// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AA,
  _AC,
  _ACCI,
  _ACL,
  _ACl,
  _ACLC,
  _ACt,
  _ACu,
  _AF,
  _AFM,
  _AGCN,
  _ARA,
  _ARAL,
  _ARAV,
  _AT,
  _B,
  _BA,
  _BAC,
  _BACL,
  _BC,
  _BCl,
  _BFM,
  _BN,
  _BO,
  _BPD,
  _BPDR,
  _BPDRa,
  _BPDRFD,
  _BPDRFDa,
  _C,
  _CAC,
  _CAFML,
  _CAr,
  _CAre,
  _CAS,
  _CATIFM,
  _CBC,
  _CBFML,
  _CBM,
  _CBTIFM,
  _CC,
  _CCo,
  _CCol,
  _CCon,
  _CConn,
  _CCR,
  _CD,
  _CDAK,
  _CDC,
  _CDEC,
  _CDS,
  _CDSR,
  _CDSRr,
  _Ce,
  _CFC,
  _CFCh,
  _CFM,
  _CIC,
  _CICA,
  _CIr,
  _CKATC,
  _CL,
  _Co,
  _Cod,
  _Con,
  _Cond,
  _Cor,
  _Cou,
  _COV,
  _CPC,
  _CPFML,
  _CPR,
  _CPRC,
  _CPRCA,
  _CPS,
  _CPTIFM,
  _CRD,
  _CRDr,
  _CSC,
  _CSF,
  _CSFML,
  _CSTIFM,
  _CT,
  _CTli,
  _CTo,
  _CTon,
  _CU,
  _CUC,
  _CWL,
  _D,
  _DA,
  _DAC,
  _DAK,
  _DAoc,
  _DAT,
  _DAV,
  _DAVCP,
  _DAVCPL,
  _DAVCPo,
  _DAVT,
  _DC,
  _DCD,
  _DDCN,
  _DDFN,
  _DDSe,
  _DDSRe,
  _DDSRes,
  _DE,
  _De,
  _DET,
  _DFF,
  _DH,
  _DI,
  _Di,
  _DICN,
  _DIes,
  _DIRe,
  _DIRes,
  _DL,
  _DLFM,
  _DLG,
  _DMC,
  _DMCL,
  _DMCo,
  _DMCoc,
  _DMCU,
  _DN,
  _Do,
  _Dom,
  _DP,
  _DROC,
  _DSC,
  _DSFN,
  _DSI,
  _DSTIFM,
  _DSTIFML,
  _DSVC,
  _DT,
  _DTCN,
  _DTFN,
  _DURI,
  _EA,
  _EAFP,
  _EC,
  _ECx,
  _Ed,
  _EF,
  _EFNP,
  _EFNPx,
  _EFTP,
  _EI,
  _EM,
  _EMT,
  _EO,
  _EP,
  _ER,
  _ERI,
  _ERL,
  _ES,
  _ESD,
  _EUA,
  _Ex,
  _F,
  _Fa,
  _Fac,
  _FC,
  _FD,
  _FFM,
  _FIo,
  _FL,
  _FM,
  _Fo,
  _FQ,
  _FR,
  _FRa,
  _FRI,
  _FRIe,
  _FRIL,
  _FRL,
  _FS,
  _FSI,
  _FST,
  _FT,
  _GDC,
  _GHC,
  _GHCCFM,
  _GHDCP,
  _GHIACFM,
  _GHICCFM,
  _GHIDCFM,
  _GHPRCCFM,
  _GHPRDACFM,
  _GHPRDCFM,
  _GHRCFM,
  _H,
  _HACL,
  _HC,
  _He,
  _Hi,
  _Hig,
  _High,
  _HL,
  _HU,
  _I,
  _IAFP,
  _IC,
  _ICDEC,
  _ICDECL,
  _ICn,
  _IFM,
  _IFN,
  _IFNP,
  _IFNPn,
  _IFT,
  _IFTP,
  _II,
  _IP,
  _IPn,
  _IQAC,
  _IQSCS,
  _IS,
  _ISEF,
  _ISn,
  _ISnc,
  _IT,
  _ITB,
  _ITDC,
  _JAU,
  _JC,
  _K,
  _KAC,
  _KP,
  _LA,
  _LBP,
  _LC,
  _M,
  _MAKS,
  _MCSPPIMB,
  _MERPI,
  _MFM,
  _MLPP,
  _MR,
  _MRITE,
  _MUPMCR,
  _N,
  _O,
  _ODC,
  _ODU,
  _ODUL,
  _ODUSP,
  _OIr,
  _ON,
  _OPC,
  _PC,
  _PCF,
  _PCFu,
  _PCr,
  _PEHC,
  _PEHCo,
  _PFM,
  _PFMr,
  _PN,
  _Po,
  _Pr,
  _PSa,
  _Q,
  _QC,
  _QCU,
  _QI,
  _QIEO,
  _QR,
  _QRI,
  _QRIL,
  _QRTF,
  _QRu,
  _QT,
  _R,
  _RA,
  _RDA,
  _RF,
  _RIe,
  _Ro,
  _S,
  _SA,
  _SAc,
  _SB,
  _SC,
  _SCa,
  _SCC,
  _SCCe,
  _SCD,
  _SCFC,
  _SCKATC,
  _SCKATCL,
  _SCl,
  _SCLo,
  _SCo,
  _SCor,
  _SCp,
  _SCQ,
  _SCq,
  _SCQL,
  _SCQp,
  _SCSP,
  _SCU,
  _SDSC,
  _Se,
  _Sea,
  _SEL,
  _SFM,
  _SGI,
  _SI,
  _SIu,
  _SKAC,
  _SKATC,
  _SM,
  _SMC,
  _SNBV,
  _SNC,
  _SNKAC,
  _SNSCC,
  _SO,
  _So,
  _SOAC,
  _SOC,
  _SP,
  _SPC,
  _SPr,
  _SPV,
  _SQT,
  _SSC,
  _SSEC,
  _SSKATC,
  _SSOAC,
  _SSOC,
  _SSOCL,
  _St,
  _SU,
  _SUC,
  _SUe,
  _SUee,
  _T,
  _TA,
  _Ta,
  _Tar,
  _TC,
  _TCa,
  _TCL,
  _TD,
  _TDAK,
  _TDAV,
  _TDAVD,
  _TDS,
  _TE,
  _Te,
  _Tem,
  _TFM,
  _TFMh,
  _TI,
  _Ti,
  _TN,
  _TNOR,
  _TNORo,
  _TR,
  _TRL,
  _TWH,
  _TWHV,
  _Ty,
  _U,
  _UA,
  _UC,
  _UCL,
  _UCP,
  _UDS,
  _UDSR,
  _UEP,
  _UGRC,
  _UIP,
  _UIp,
  _UIR,
  _UTC,
  _V,
  _VC,
  _Ve,
  _VI,
  _VT,
  _W,
  _Wa,
  _WCC,
  _WCM,
  _WDC,
  _WFM,
  _WL,
  _WLFM,
  _WLFMo,
  n0,
  S3Path,
  Unit,
} from "./schemas_0";
import { HierarchicalPrincipalList, PrincipalList } from "./schemas_3_Control";
import {
  AttributeFilter,
  DocumentAttribute,
  DocumentAttributeList,
  DocumentAttributeValue,
  DocumentRelevanceOverrideConfigurationList,
  ScoreAttributes,
  UserContext,
} from "./schemas_6_Query";
import { TagList } from "./schemas_10_Create";
import {
  Relevance,
  ServerSideEncryptionConfiguration,
  UserGroupResolutionConfiguration,
  UserTokenConfigurationList,
} from "./schemas_14_Describe";

/* eslint no-var: 0 */

export var AccessControlListConfiguration = struct(n0, _ACLC, 0, [_KP], [0]);
export var AclConfiguration = struct(n0, _AC, 0, [_AGCN], [0]);
export var AdditionalResultAttribute = struct(n0, _ARA, 0, [_K, _VT, _V], [0, 0, () => AdditionalResultAttributeValue]);
export var AdditionalResultAttributeValue = struct(n0, _ARAV, 0, [_TWHV], [() => TextWithHighlights]);
export var AlfrescoConfiguration = struct(
  n0,
  _ACl,
  0,
  [_SU, _SI, _SA, _SCSP, _CSF, _CC, _EF, _DLFM, _BFM, _WFM, _IP, _EP, _VC],
  [
    0,
    0,
    0,
    () => S3Path,
    2,
    2,
    64 | 0,
    () => DataSourceToIndexFieldMappingList,
    () => DataSourceToIndexFieldMappingList,
    () => DataSourceToIndexFieldMappingList,
    64 | 0,
    64 | 0,
    () => DataSourceVpcConfiguration,
  ]
);
export var AuthenticationConfiguration = struct(n0, _ACu, 0, [_BA], [() => BasicAuthenticationConfigurationList]);
export var BasicAuthenticationConfiguration = struct(n0, _BAC, 0, [_H, _Po, _C], [0, 1, 0]);
export var BatchPutDocumentRequest = struct(
  n0,
  _BPDR,
  0,
  [_II, _RA, _D, _CDEC],
  [0, 0, () => DocumentList, () => CustomDocumentEnrichmentConfiguration]
);
export var BatchPutDocumentResponse = struct(n0, _BPDRa, 0, [_FD], [() => BatchPutDocumentResponseFailedDocuments]);
export var BatchPutDocumentResponseFailedDocument = struct(n0, _BPDRFD, 0, [_I, _DSI, _EC, _EM], [0, 0, 0, 0]);
export var BoxConfiguration = struct(
  n0,
  _BC,
  0,
  [_EI, _SA, _UCL, _CC, _CT, _CWL, _FFM, _TFM, _CFM, _WLFM, _IP, _EP, _VC],
  [
    0,
    0,
    2,
    2,
    2,
    2,
    () => DataSourceToIndexFieldMappingList,
    () => DataSourceToIndexFieldMappingList,
    () => DataSourceToIndexFieldMappingList,
    () => DataSourceToIndexFieldMappingList,
    64 | 0,
    64 | 0,
    () => DataSourceVpcConfiguration,
  ]
);
export var CapacityUnitsConfiguration = struct(n0, _CUC, 0, [_SCU, _QCU], [1, 1]);
export var CollapseConfiguration = struct(
  n0,
  _CCo,
  0,
  [_DAK, _SC, _MAKS, _Ex, _ECx],
  [0, () => SortingConfigurationList, 0, 2, () => ExpandConfiguration]
);
export var CollapsedResultDetail = struct(n0, _CRD, 0, [_DA, _ER], [() => DocumentAttribute, () => ExpandedResultList]);
export var ColumnConfiguration = struct(
  n0,
  _CCol,
  0,
  [_DICN, _DDCN, _DTCN, _FM, _CDC],
  [0, 0, 0, () => DataSourceToIndexFieldMappingList, 64 | 0]
);
export var ConfluenceAttachmentConfiguration = struct(
  n0,
  _CAC,
  0,
  [_CAr, _AFM],
  [2, () => ConfluenceAttachmentFieldMappingsList]
);
export var ConfluenceAttachmentToIndexFieldMapping = struct(n0, _CATIFM, 0, [_DSFN, _DFF, _IFN], [0, 0, 0]);
export var ConfluenceBlogConfiguration = struct(n0, _CBC, 0, [_BFM], [() => ConfluenceBlogFieldMappingsList]);
export var ConfluenceBlogToIndexFieldMapping = struct(n0, _CBTIFM, 0, [_DSFN, _DFF, _IFN], [0, 0, 0]);
export var ConfluenceConfiguration = struct(
  n0,
  _CCon,
  0,
  [_SUe, _SA, _Ve, _SCp, _PC, _BCl, _ACt, _VC, _IP, _EP, _PCr, _AT],
  [
    0,
    0,
    0,
    () => ConfluenceSpaceConfiguration,
    () => ConfluencePageConfiguration,
    () => ConfluenceBlogConfiguration,
    () => ConfluenceAttachmentConfiguration,
    () => DataSourceVpcConfiguration,
    64 | 0,
    64 | 0,
    () => ProxyConfiguration,
    0,
  ]
);
export var ConfluencePageConfiguration = struct(n0, _CPC, 0, [_PFM], [() => ConfluencePageFieldMappingsList]);
export var ConfluencePageToIndexFieldMapping = struct(n0, _CPTIFM, 0, [_DSFN, _DFF, _IFN], [0, 0, 0]);
export var ConfluenceSpaceConfiguration = struct(
  n0,
  _CSC,
  0,
  [_CPS, _CAS, _IS, _ES, _SFM],
  [2, 2, 64 | 0, 64 | 0, () => ConfluenceSpaceFieldMappingsList]
);
export var ConfluenceSpaceToIndexFieldMapping = struct(n0, _CSTIFM, 0, [_DSFN, _DFF, _IFN], [0, 0, 0]);
export var ConnectionConfiguration = struct(n0, _CConn, 0, [_DH, _DP, _DN, _TN, _SA], [0, 1, 0, 0, 0]);
export var Correction = struct(n0, _Co, 0, [_BO, _EO, _T, _CTo], [1, 1, 0, 0]);
export var CreateDataSourceRequest = struct(
  n0,
  _CDSR,
  0,
  [_N, _II, _Ty, _Con, _VC, _De, _S, _RA, _Ta, _CTli, _LC, _CDEC],
  [
    0,
    0,
    0,
    () => DataSourceConfiguration,
    () => DataSourceVpcConfiguration,
    0,
    0,
    0,
    () => TagList,
    [0, 4],
    0,
    () => CustomDocumentEnrichmentConfiguration,
  ]
);
export var CreateDataSourceResponse = struct(n0, _CDSRr, 0, [_I], [0]);
export var CustomDocumentEnrichmentConfiguration = struct(
  n0,
  _CDEC,
  0,
  [_IC, _PEHC, _PEHCo, _RA],
  [() => InlineCustomDocumentEnrichmentConfigurationList, () => HookConfiguration, () => HookConfiguration, 0]
);
export var DatabaseConfiguration = struct(
  n0,
  _DC,
  0,
  [_DET, _CConn, _VC, _CCol, _AC, _SCq],
  [
    0,
    () => ConnectionConfiguration,
    () => DataSourceVpcConfiguration,
    () => ColumnConfiguration,
    () => AclConfiguration,
    () => SqlConfiguration,
  ]
);
export var DataSourceConfiguration = struct(
  n0,
  _DSC,
  0,
  [_SCo, _SPC, _DC, _SCa, _ODC, _SNC, _CCon, _GDC, _WCC, _WDC, _FC, _SCl, _BC, _QC, _JC, _GHC, _ACl, _TC],
  [
    () => S3DataSourceConfiguration,
    () => SharePointConfiguration,
    () => DatabaseConfiguration,
    () => SalesforceConfiguration,
    () => OneDriveConfiguration,
    () => ServiceNowConfiguration,
    () => ConfluenceConfiguration,
    () => GoogleDriveConfiguration,
    () => WebCrawlerConfiguration,
    () => WorkDocsConfiguration,
    () => FsxConfiguration,
    () => SlackConfiguration,
    () => BoxConfiguration,
    () => QuipConfiguration,
    () => JiraConfiguration,
    () => GitHubConfiguration,
    () => AlfrescoConfiguration,
    () => TemplateConfiguration,
  ]
);
export var DataSourceToIndexFieldMapping = struct(n0, _DSTIFM, 0, [_DSFN, _DFF, _IFN], [0, 0, 0]);
export var DataSourceVpcConfiguration = struct(n0, _DSVC, 0, [_SIu, _SGI], [64 | 0, 64 | 0]);
export var DescribeDataSourceRequest = struct(n0, _DDSRe, 0, [_I, _II], [0, 0]);
export var DescribeDataSourceResponse = struct(
  n0,
  _DDSRes,
  0,
  [_I, _II, _N, _Ty, _Con, _VC, _CAre, _UA, _De, _St, _S, _RA, _EM, _LC, _CDEC],
  [
    0,
    0,
    0,
    0,
    () => DataSourceConfiguration,
    () => DataSourceVpcConfiguration,
    4,
    4,
    0,
    0,
    0,
    0,
    0,
    0,
    () => CustomDocumentEnrichmentConfiguration,
  ]
);
export var DescribeIndexRequest = struct(n0, _DIRe, 0, [_I], [0]);
export var DescribeIndexResponse = struct(
  n0,
  _DIRes,
  0,
  [_N, _I, _Ed, _RA, _SSEC, _St, _De, _CAre, _UA, _DMC, _ISn, _EM, _CU, _UTC, _UCP, _UGRC],
  [
    0,
    0,
    0,
    0,
    [() => ServerSideEncryptionConfiguration, 0],
    0,
    0,
    4,
    4,
    () => DocumentMetadataConfigurationList,
    () => IndexStatistics,
    0,
    () => CapacityUnitsConfiguration,
    () => UserTokenConfigurationList,
    0,
    () => UserGroupResolutionConfiguration,
  ]
);
export var Document = struct(
  n0,
  _Do,
  0,
  [_I, _Ti, _B, _SP, _A, _ACL, _HACL, _CTon, _ACCI],
  [0, 0, 21, () => S3Path, () => DocumentAttributeList, () => PrincipalList, () => HierarchicalPrincipalList, 0, 0]
);
export var DocumentAttributeCondition = struct(n0, _DAC, 0, [_CDAK, _O, _COV], [0, 0, () => DocumentAttributeValue]);
export var DocumentAttributeTarget = struct(n0, _DAT, 0, [_TDAK, _TDAVD, _TDAV], [0, 2, () => DocumentAttributeValue]);
export var DocumentAttributeValueCountPair = struct(
  n0,
  _DAVCP,
  0,
  [_DAV, _Cou, _FR],
  [() => DocumentAttributeValue, 1, () => FacetResultList]
);
export var DocumentMetadataConfiguration = struct(
  n0,
  _DMCo,
  0,
  [_N, _Ty, _R, _Se],
  [0, 0, () => Relevance, () => Search]
);
export var DocumentsMetadataConfiguration = struct(n0, _DMCoc, 0, [_SPr], [0]);
export var ExpandConfiguration = struct(n0, _ECx, 0, [_MRITE, _MERPI], [1, 1]);
export var ExpandedResultItem = struct(
  n0,
  _ERI,
  0,
  [_I, _DI, _DT, _DE, _DURI, _DAoc],
  [0, 0, () => TextWithHighlights, () => TextWithHighlights, 0, () => DocumentAttributeList]
);
export var Facet = struct(n0, _F, 0, [_DAK, _Fa, _MR], [0, () => FacetList, 1]);
export var FacetResult = struct(n0, _FRa, 0, [_DAK, _DAVT, _DAVCPo], [0, 0, () => DocumentAttributeValueCountPairList]);
export var FaqStatistics = struct(n0, _FS, 0, [_IQAC], [1]);
export var FeaturedResultsItem = struct(
  n0,
  _FRI,
  0,
  [_I, _Ty, _AA, _DI, _DT, _DE, _DURI, _DAoc, _FT],
  [
    0,
    0,
    () => AdditionalResultAttributeList,
    0,
    () => TextWithHighlights,
    () => TextWithHighlights,
    0,
    () => DocumentAttributeList,
    0,
  ]
);
export var FsxConfiguration = struct(
  n0,
  _FC,
  0,
  [_FSI, _FST, _VC, _SA, _IP, _EP, _FM],
  [0, 0, () => DataSourceVpcConfiguration, 0, 64 | 0, 64 | 0, () => DataSourceToIndexFieldMappingList]
);
export var GitHubConfiguration = struct(
  n0,
  _GHC,
  0,
  [
    _SSC,
    _OPC,
    _Ty,
    _SA,
    _UCL,
    _GHDCP,
    _RF,
    _IFNP,
    _IFTP,
    _IFNPn,
    _EFNP,
    _EFTP,
    _EFNPx,
    _VC,
    _GHRCFM,
    _GHCCFM,
    _GHIDCFM,
    _GHICCFM,
    _GHIACFM,
    _GHPRCCFM,
    _GHPRDCFM,
    _GHPRDACFM,
  ],
  [
    () => SaaSConfiguration,
    () => OnPremiseConfiguration,
    0,
    0,
    2,
    () => GitHubDocumentCrawlProperties,
    64 | 0,
    64 | 0,
    64 | 0,
    64 | 0,
    64 | 0,
    64 | 0,
    64 | 0,
    () => DataSourceVpcConfiguration,
    () => DataSourceToIndexFieldMappingList,
    () => DataSourceToIndexFieldMappingList,
    () => DataSourceToIndexFieldMappingList,
    () => DataSourceToIndexFieldMappingList,
    () => DataSourceToIndexFieldMappingList,
    () => DataSourceToIndexFieldMappingList,
    () => DataSourceToIndexFieldMappingList,
    () => DataSourceToIndexFieldMappingList,
  ]
);
export var GitHubDocumentCrawlProperties = struct(
  n0,
  _GHDCP,
  0,
  [_CRDr, _CIr, _CIC, _CICA, _CPR, _CPRC, _CPRCA],
  [2, 2, 2, 2, 2, 2, 2]
);
export var GoogleDriveConfiguration = struct(
  n0,
  _GDC,
  0,
  [_SA, _IP, _EP, _FM, _EMT, _EUA, _ESD],
  [0, 64 | 0, 64 | 0, () => DataSourceToIndexFieldMappingList, 64 | 0, 64 | 0, 64 | 0]
);
export var Highlight = struct(n0, _Hi, 0, [_BO, _EO, _TA, _Ty], [1, 1, 2, 0]);
export var HookConfiguration = struct(n0, _HC, 0, [_ICn, _LA, _SB], [() => DocumentAttributeCondition, 0, 0]);
export var IndexStatistics = struct(n0, _ISn, 0, [_FS, _TDS], [() => FaqStatistics, () => TextDocumentStatistics]);
export var InlineCustomDocumentEnrichmentConfiguration = struct(
  n0,
  _ICDEC,
  0,
  [_Cond, _Tar, _DCD],
  [() => DocumentAttributeCondition, () => DocumentAttributeTarget, 2]
);
export var JiraConfiguration = struct(
  n0,
  _JC,
  0,
  [_JAU, _SA, _UCL, _Pr, _IT, _St, _ISEF, _AFM, _CFM, _IFM, _PFMr, _WLFMo, _IP, _EP, _VC],
  [
    0,
    0,
    2,
    64 | 0,
    64 | 0,
    64 | 0,
    64 | 0,
    () => DataSourceToIndexFieldMappingList,
    () => DataSourceToIndexFieldMappingList,
    () => DataSourceToIndexFieldMappingList,
    () => DataSourceToIndexFieldMappingList,
    () => DataSourceToIndexFieldMappingList,
    64 | 0,
    64 | 0,
    () => DataSourceVpcConfiguration,
  ]
);
export var OneDriveConfiguration = struct(
  n0,
  _ODC,
  0,
  [_TD, _SA, _ODU, _IP, _EP, _FM, _DLG],
  [0, 0, () => OneDriveUsers, 64 | 0, 64 | 0, () => DataSourceToIndexFieldMappingList, 2]
);
export var OneDriveUsers = struct(n0, _ODU, 0, [_ODUL, _ODUSP], [64 | 0, () => S3Path]);
export var OnPremiseConfiguration = struct(n0, _OPC, 0, [_HU, _ON, _SCSP], [0, 0, () => S3Path]);
export var ProxyConfiguration = struct(n0, _PCr, 0, [_H, _Po, _C], [0, 1, 0]);
export var QueryRequest = struct(
  n0,
  _QR,
  0,
  [_II, _QT, _AF, _Fa, _RDA, _QRTF, _DROC, _PN, _PSa, _SCor, _SC, _UC, _VI, _SCC, _CCo],
  [
    0,
    0,
    () => AttributeFilter,
    () => FacetList,
    64 | 0,
    0,
    () => DocumentRelevanceOverrideConfigurationList,
    1,
    1,
    () => SortingConfiguration,
    () => SortingConfigurationList,
    () => UserContext,
    0,
    () => SpellCorrectionConfiguration,
    () => CollapseConfiguration,
  ]
);
export var QueryResult = struct(
  n0,
  _QRu,
  0,
  [_QI, _RIe, _FR, _TNOR, _W, _SCQ, _FRIe],
  [
    0,
    () => QueryResultItemList,
    () => FacetResultList,
    1,
    () => WarningList,
    () => SpellCorrectedQueryList,
    () => FeaturedResultsItemList,
  ]
);
export var QueryResultItem = struct(
  n0,
  _QRI,
  0,
  [_I, _Ty, _Fo, _AA, _DI, _DT, _DE, _DURI, _DAoc, _SAc, _FT, _TE, _CRD],
  [
    0,
    0,
    0,
    () => AdditionalResultAttributeList,
    0,
    () => TextWithHighlights,
    () => TextWithHighlights,
    0,
    () => DocumentAttributeList,
    () => ScoreAttributes,
    0,
    () => TableExcerpt,
    () => CollapsedResultDetail,
  ]
);
export var QuipConfiguration = struct(
  n0,
  _QC,
  0,
  [_Dom, _SA, _CFC, _CCR, _CAr, _FIo, _TFMh, _MFM, _AFM, _IP, _EP, _VC],
  [
    0,
    0,
    2,
    2,
    2,
    64 | 0,
    () => DataSourceToIndexFieldMappingList,
    () => DataSourceToIndexFieldMappingList,
    () => DataSourceToIndexFieldMappingList,
    64 | 0,
    64 | 0,
    () => DataSourceVpcConfiguration,
  ]
);
export var S3DataSourceConfiguration = struct(
  n0,
  _SDSC,
  0,
  [_BN, _IPn, _IP, _EP, _DMCoc, _ACLC],
  [0, 64 | 0, 64 | 0, 64 | 0, () => DocumentsMetadataConfiguration, () => AccessControlListConfiguration]
);
export var SaaSConfiguration = struct(n0, _SSC, 0, [_ON, _HU], [0, 0]);
export var SalesforceChatterFeedConfiguration = struct(
  n0,
  _SCFC,
  0,
  [_DDFN, _DTFN, _FM, _IFT],
  [0, 0, () => DataSourceToIndexFieldMappingList, 64 | 0]
);
export var SalesforceConfiguration = struct(
  n0,
  _SCa,
  0,
  [_SUe, _SA, _SOC, _KAC, _CFCh, _CAr, _SOAC, _IAFP, _EAFP],
  [
    0,
    0,
    () => SalesforceStandardObjectConfigurationList,
    () => SalesforceKnowledgeArticleConfiguration,
    () => SalesforceChatterFeedConfiguration,
    2,
    () => SalesforceStandardObjectAttachmentConfiguration,
    64 | 0,
    64 | 0,
  ]
);
export var SalesforceCustomKnowledgeArticleTypeConfiguration = struct(
  n0,
  _SCKATC,
  0,
  [_N, _DDFN, _DTFN, _FM],
  [0, 0, 0, () => DataSourceToIndexFieldMappingList]
);
export var SalesforceKnowledgeArticleConfiguration = struct(
  n0,
  _SKAC,
  0,
  [_ISnc, _SKATC, _CKATC],
  [
    64 | 0,
    () => SalesforceStandardKnowledgeArticleTypeConfiguration,
    () => SalesforceCustomKnowledgeArticleTypeConfigurationList,
  ]
);
export var SalesforceStandardKnowledgeArticleTypeConfiguration = struct(
  n0,
  _SSKATC,
  0,
  [_DDFN, _DTFN, _FM],
  [0, 0, () => DataSourceToIndexFieldMappingList]
);
export var SalesforceStandardObjectAttachmentConfiguration = struct(
  n0,
  _SSOAC,
  0,
  [_DTFN, _FM],
  [0, () => DataSourceToIndexFieldMappingList]
);
export var SalesforceStandardObjectConfiguration = struct(
  n0,
  _SSOC,
  0,
  [_N, _DDFN, _DTFN, _FM],
  [0, 0, 0, () => DataSourceToIndexFieldMappingList]
);
export var Search = struct(n0, _Se, 0, [_Fac, _Sea, _Di, _So], [2, 2, 2, 2]);
export var SeedUrlConfiguration = struct(n0, _SUC, 0, [_SUee, _WCM], [64 | 0, 0]);
export var ServiceNowConfiguration = struct(
  n0,
  _SNC,
  0,
  [_HU, _SA, _SNBV, _KAC, _SCCe, _AT],
  [0, 0, 0, () => ServiceNowKnowledgeArticleConfiguration, () => ServiceNowServiceCatalogConfiguration, 0]
);
export var ServiceNowKnowledgeArticleConfiguration = struct(
  n0,
  _SNKAC,
  0,
  [_CAr, _IAFP, _EAFP, _DDFN, _DTFN, _FM, _FQ],
  [2, 64 | 0, 64 | 0, 0, 0, () => DataSourceToIndexFieldMappingList, 0]
);
export var ServiceNowServiceCatalogConfiguration = struct(
  n0,
  _SNSCC,
  0,
  [_CAr, _IAFP, _EAFP, _DDFN, _DTFN, _FM],
  [2, 64 | 0, 64 | 0, 0, 0, () => DataSourceToIndexFieldMappingList]
);
export var SharePointConfiguration = struct(
  n0,
  _SPC,
  0,
  [_SPV, _U, _SA, _CAr, _UCL, _IP, _EP, _VC, _FM, _DTFN, _DLG, _SCSP, _AT, _PCr],
  [
    0,
    64 | 0,
    0,
    2,
    2,
    64 | 0,
    64 | 0,
    () => DataSourceVpcConfiguration,
    () => DataSourceToIndexFieldMappingList,
    0,
    2,
    () => S3Path,
    0,
    () => ProxyConfiguration,
  ]
);
export var SiteMapsConfiguration = struct(n0, _SMC, 0, [_SM], [64 | 0]);
export var SlackConfiguration = struct(
  n0,
  _SCl,
  0,
  [_TI, _SA, _VC, _SEL, _UCL, _CBM, _EA, _SCD, _LBP, _PCF, _PCFu, _IP, _EP, _FM],
  [
    0,
    0,
    () => DataSourceVpcConfiguration,
    64 | 0,
    2,
    2,
    2,
    0,
    1,
    64 | 0,
    64 | 0,
    64 | 0,
    64 | 0,
    () => DataSourceToIndexFieldMappingList,
  ]
);
export var SortingConfiguration = struct(n0, _SCor, 0, [_DAK, _SO], [0, 0]);
export var SpellCorrectedQuery = struct(n0, _SCQp, 0, [_SQT, _Cor], [0, () => CorrectionList]);
export var SpellCorrectionConfiguration = struct(n0, _SCC, 0, [_IQSCS], [2]);
export var SqlConfiguration = struct(n0, _SCq, 0, [_QIEO], [0]);
export var TableCell = struct(n0, _TCa, 0, [_V, _TA, _High, _He], [0, 2, 2, 2]);
export var TableExcerpt = struct(n0, _TE, 0, [_Ro, _TNORo], [() => TableRowList, 1]);
export var TableRow = struct(n0, _TR, 0, [_Ce], [() => TableCellList]);
export var TemplateConfiguration = struct(n0, _TC, 0, [_Tem], [15]);
export var TextDocumentStatistics = struct(n0, _TDS, 0, [_ITDC, _ITB], [1, 1]);
export var TextWithHighlights = struct(n0, _TWH, 0, [_Te, _Hig], [0, () => HighlightList]);
export var UpdateDataSourceRequest = struct(
  n0,
  _UDSR,
  0,
  [_I, _N, _II, _Con, _VC, _De, _S, _RA, _LC, _CDEC],
  [
    0,
    0,
    0,
    () => DataSourceConfiguration,
    () => DataSourceVpcConfiguration,
    0,
    0,
    0,
    0,
    () => CustomDocumentEnrichmentConfiguration,
  ]
);
export var UpdateIndexRequest = struct(
  n0,
  _UIR,
  0,
  [_I, _N, _RA, _De, _DMCU, _CU, _UTC, _UCP, _UGRC],
  [
    0,
    0,
    0,
    0,
    () => DocumentMetadataConfigurationList,
    () => CapacityUnitsConfiguration,
    () => UserTokenConfigurationList,
    0,
    () => UserGroupResolutionConfiguration,
  ]
);
export var Urls = struct(n0, _U, 0, [_SUC, _SMC], [() => SeedUrlConfiguration, () => SiteMapsConfiguration]);
export var Warning = struct(n0, _Wa, 0, [_M, _Cod], [0, 0]);
export var WebCrawlerConfiguration = struct(
  n0,
  _WCC,
  0,
  [_U, _CD, _MLPP, _MCSPPIMB, _MUPMCR, _UIP, _UEP, _PCr, _ACu],
  [() => Urls, 1, 1, 1, 1, 64 | 0, 64 | 0, () => ProxyConfiguration, () => AuthenticationConfiguration]
);
export var WorkDocsConfiguration = struct(
  n0,
  _WDC,
  0,
  [_OIr, _CC, _UCL, _IP, _EP, _FM],
  [0, 2, 2, 64 | 0, 64 | 0, () => DataSourceToIndexFieldMappingList]
);
export var AdditionalResultAttributeList = list(n0, _ARAL, 0, () => AdditionalResultAttribute);
export var BasicAuthenticationConfigurationList = list(n0, _BACL, 0, () => BasicAuthenticationConfiguration);
export var BatchPutDocumentResponseFailedDocuments = list(
  n0,
  _BPDRFDa,
  0,
  () => BatchPutDocumentResponseFailedDocument
);
export var ChangeDetectingColumns = 64 | 0;

export var ConfluenceAttachmentFieldMappingsList = list(n0, _CAFML, 0, () => ConfluenceAttachmentToIndexFieldMapping);
export var ConfluenceBlogFieldMappingsList = list(n0, _CBFML, 0, () => ConfluenceBlogToIndexFieldMapping);
export var ConfluencePageFieldMappingsList = list(n0, _CPFML, 0, () => ConfluencePageToIndexFieldMapping);
export var ConfluenceSpaceFieldMappingsList = list(n0, _CSFML, 0, () => ConfluenceSpaceToIndexFieldMapping);
export var ConfluenceSpaceList = 64 | 0;

export var CorrectionList = list(n0, _CL, 0, () => Correction);
export var DataSourceInclusionsExclusionsStrings = 64 | 0;

export var DataSourceToIndexFieldMappingList = list(n0, _DSTIFML, 0, () => DataSourceToIndexFieldMapping);
export var DocumentAttributeValueCountPairList = list(n0, _DAVCPL, 0, () => DocumentAttributeValueCountPair);
export var DocumentList = list(n0, _DL, 0, () => Document);
export var DocumentMetadataConfigurationList = list(n0, _DMCL, 0, () => DocumentMetadataConfiguration);
export var EntityFilter = 64 | 0;

export var ExcludeMimeTypesList = 64 | 0;

export var ExcludeSharedDrivesList = 64 | 0;

export var ExcludeUserAccountsList = 64 | 0;

export var ExpandedResultList = list(n0, _ERL, 0, () => ExpandedResultItem);
export var FacetList = list(n0, _FL, 0, () => Facet);
export var FacetResultList = list(n0, _FRL, 0, () => FacetResult);
export var FeaturedResultsItemList = list(n0, _FRIL, 0, () => FeaturedResultsItem);
export var FolderIdList = 64 | 0;

export var HighlightList = list(n0, _HL, 0, () => Highlight);
export var InlineCustomDocumentEnrichmentConfigurationList = list(
  n0,
  _ICDECL,
  0,
  () => InlineCustomDocumentEnrichmentConfiguration
);
export var IssueSubEntityFilter = 64 | 0;

export var IssueType = 64 | 0;

export var JiraStatus = 64 | 0;

export var OneDriveUserList = 64 | 0;

export var PrivateChannelFilter = 64 | 0;

export var Project = 64 | 0;

export var PublicChannelFilter = 64 | 0;

export var QueryResultItemList = list(n0, _QRIL, 0, () => QueryResultItem);
export var RepositoryNames = 64 | 0;

export var SalesforceChatterFeedIncludeFilterTypes = 64 | 0;

export var SalesforceCustomKnowledgeArticleTypeConfigurationList = list(
  n0,
  _SCKATCL,
  0,
  () => SalesforceCustomKnowledgeArticleTypeConfiguration
);
export var SalesforceKnowledgeArticleStateList = 64 | 0;

export var SalesforceStandardObjectConfigurationList = list(n0, _SSOCL, 0, () => SalesforceStandardObjectConfiguration);
export var SecurityGroupIdList = 64 | 0;

export var SeedUrlList = 64 | 0;

export var SharePointUrlList = 64 | 0;

export var SiteMapsList = 64 | 0;

export var SlackEntityList = 64 | 0;

export var SortingConfigurationList = list(n0, _SCLo, 0, () => SortingConfiguration);
export var SpellCorrectedQueryList = list(n0, _SCQL, 0, () => SpellCorrectedQuery);
export var StringList = 64 | 0;

export var SubnetIdList = 64 | 0;

export var TableCellList = list(n0, _TCL, 0, () => TableCell);
export var TableRowList = list(n0, _TRL, 0, () => TableRow);
export var WarningList = list(n0, _WL, 0, () => Warning);
export var BatchPutDocument = op(
  n0,
  _BPD,
  0,
  () => BatchPutDocumentRequest,
  () => BatchPutDocumentResponse
);
export var CreateDataSource = op(
  n0,
  _CDS,
  0,
  () => CreateDataSourceRequest,
  () => CreateDataSourceResponse
);
export var DescribeDataSource = op(
  n0,
  _DDSe,
  0,
  () => DescribeDataSourceRequest,
  () => DescribeDataSourceResponse
);
export var DescribeIndex = op(
  n0,
  _DIes,
  0,
  () => DescribeIndexRequest,
  () => DescribeIndexResponse
);
export var Query = op(
  n0,
  _Q,
  0,
  () => QueryRequest,
  () => QueryResult
);
export var UpdateDataSource = op(
  n0,
  _UDS,
  0,
  () => UpdateDataSourceRequest,
  () => Unit
);
export var UpdateIndex = op(
  n0,
  _UIp,
  0,
  () => UpdateIndexRequest,
  () => Unit
);
