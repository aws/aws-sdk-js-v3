// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _aCu,
  _aDCC,
  _aT,
  _bA,
  _bC,
  _BCB,
  _BCD,
  _BDAC,
  _bDAC,
  _BEMC,
  _bEMC,
  _BFMC,
  _bFMC,
  _BFMCEC,
  _bOAI,
  _bPTr,
  _bS,
  _bV,
  _cA,
  _cAo,
  _CC,
  _cC,
  _CCC,
  _cCh,
  _cCon,
  _CCu,
  _CDI,
  _cDI,
  _CDS,
  _CDSC,
  _CDSR,
  _CDSRr,
  _CEC,
  _cEC,
  _CFC,
  _cIl,
  _CKB,
  _CKBR,
  _CKBRr,
  _cL,
  _cMF,
  _cNo,
  _col,
  _cont,
  _CQ,
  _cQ,
  _CQu,
  _cS,
  _cSA,
  _CSC,
  _CSL,
  _cSo,
  _cT,
  _CTC,
  _cTC,
  _cu,
  _D,
  _d,
  _dA,
  _da,
  _DC,
  _dD,
  _dDP,
  _dE,
  _DI,
  _dI,
  _di,
  _DIo,
  _DKBD,
  _DKBDR,
  _DKBDRe,
  _DM,
  _dN,
  _do,
  _dom,
  _DS,
  _dS,
  _DSC,
  _dSC,
  _dSI,
  _dST,
  _dU,
  _eDT,
  _eF,
  _eMA,
  _EMC,
  _eMC,
  _en,
  _ESC,
  _eSC,
  _eSN,
  _eTS,
  _f,
  _fC,
  _FL,
  _fMi,
  _FOT,
  _FP,
  _fR,
  _FSCC,
  _fSCC,
  _GA,
  _gA,
  _gCe,
  _GDS,
  _GDSR,
  _GDSRe,
  _GKB,
  _GKBD,
  _GKBDR,
  _GKBDRe,
  _GKBR,
  _GKBRe,
  _h,
  _HCC,
  _hCC,
  _HCLC,
  _HCLCi,
  _hT,
  _hU,
  _IA,
  _iA,
  _iAn,
  _iC,
  _ICnl,
  _id,
  _ide,
  _iF,
  _IKBD,
  _IKBDR,
  _IKBDRn,
  _IN,
  _iN,
  _inc,
  _iP,
  _IS,
  _iS,
  _K,
  _k,
  _KB,
  _kB,
  _kBA,
  _KBC,
  _kBC,
  _KBD,
  _KBDD,
  _KBDDn,
  _KBDn,
  _kBI,
  _kIA,
  _kKA,
  _KKBC,
  _kKBC,
  _lA,
  _lC,
  _LKBD,
  _LKBDR,
  _LKBDRi,
  _MA,
  _mA,
  _MAe,
  _MAV,
  _MDAC,
  _mDAC,
  _MDAFM,
  _met,
  _meta,
  _mF,
  _mP,
  _mR,
  _mT,
  _mTa,
  _n,
  _na,
  _NAC,
  _nAC,
  _NAFM,
  _nL,
  _nT,
  _NV,
  _nV,
  _oMCC,
  _oP,
  _oSC,
  _OSMCC,
  _OSMCFM,
  _OSMCIN,
  _OSSC,
  _OSSFM,
  _oTb,
  _oTv,
  _PC,
  _pCa,
  _PCi,
  _pCi,
  _pCro,
  _PFM,
  _pKF,
  _pM,
  _POF,
  _pOF,
  _POFC,
  _POFL,
  _PP,
  _pP,
  _pPT,
  _pSa,
  _qEC,
  _QGC,
  _qGC,
  _QGCu,
  _QGCue,
  _QGCuer,
  _QGT,
  _QGTu,
  _rAe,
  _rAo,
  _RC,
  _rCd,
  _RCe,
  _rCed,
  _RECC,
  _rECC,
  _RECFM,
  _RFM,
  _rL,
  _RPAC,
  _RPC,
  _RQEADCSC,
  _RQEC,
  _RQERSC,
  _RQESC,
  _RQESCe,
  _RSAC,
  _RSC,
  _s_,
  _SC,
  _sC,
  _sc,
  _sCa,
  _SCC,
  _sCC,
  _SCCe,
  _sCe,
  _sCo,
  _SCt,
  _sCt,
  _sCto,
  _SDSC,
  _sDSC,
  _SDSCa,
  _SDSCu,
  _SDSL,
  _SDSLu,
  _SKBC,
  _sKBC,
  _SL,
  _sL,
  _sLt,
  _SLV,
  _sLV,
  _SP,
  _sPC,
  _SPCC,
  _SPDSC,
  _SPr,
  _SPSC,
  _sq,
  _sR,
  _SSC,
  _SSEC,
  _sSEC,
  _sT,
  _st,
  _sTA,
  _SU,
  _sU,
  _SUe,
  _sUe,
  _SV,
  _sV,
  _SVC,
  _sVC,
  _T,
  _t,
  _ta,
  _tab,
  _TCD,
  _tCe,
  _TF,
  _tF,
  _tFr,
  _tIe,
  _tIN,
  _TLC,
  _tLC,
  _tN,
  _tNa,
  _Tr,
  _tr,
  _u,
  _UA,
  _uA,
  _UAH,
  _uAH,
  _uAs,
  _UC,
  _uC,
  _UDS,
  _UDSR,
  _UDSRp,
  _UKB,
  _UKBR,
  _UKBRp,
  _uPSA,
  _ur,
  _value,
  _VBA,
  _vBA,
  _vF,
  _VIC,
  _vIC,
  _vIN,
  _VKBC,
  _vKBC,
  _wA,
  _wC,
  _WCC,
  _WCL,
  _WDSC,
  _WSC,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ByteContentBlob = sim(n0, _BCB, 21, 8);
export var Data = sim(n0, _D, 0, 8);
export var FilteredObjectType = sim(n0, _FOT, 0, 8);
export var FilterPattern = sim(n0, _FP, 0, 8);
export var GraphArn = sim(n0, _GA, 0, 8);
export var IndexArn = sim(n0, _IA, 0, 8);
export var IndexName = sim(n0, _IN, 0, 8);
export var Key = sim(n0, _K, 0, 8);
export var NumberValue = sim(n0, _NV, 1, 8);
export var OpenSearchManagedClusterIndexName = sim(n0, _OSMCIN, 0, 8);
export var S3Prefix = sim(n0, _SP, 0, 8);
export var StringValue = sim(n0, _SV, 0, 8);
export var UserAgent = sim(n0, _UA, 0, 8);
export var UserAgentHeader = sim(n0, _UAH, 0, 8);
export var VectorBucketArn = sim(n0, _VBA, 0, 8);
export var BedrockDataAutomationConfiguration = struct(n0, _BDAC, 0, [_pM], [0]);
export var BedrockEmbeddingModelConfiguration = struct(n0, _BEMC, 0, [_di, _eDT], [1, 0]);
export var BedrockFoundationModelConfiguration = struct(n0, _BFMC, 0, [_mA, _pP, _pM], [0, () => ParsingPrompt, 0]);
export var BedrockFoundationModelContextEnrichmentConfiguration = struct(
  n0,
  _BFMCEC,
  0,
  [_eSC, _mA],
  [() => EnrichmentStrategyConfiguration, 0]
);
export var ByteContentDoc = struct(n0, _BCD, 0, [_mT, _da], [0, [() => ByteContentBlob, 0]]);
export var ChunkingConfiguration = struct(
  n0,
  _CC,
  0,
  [_cS, _fSCC, _hCC, _sCC],
  [
    0,
    () => FixedSizeChunkingConfiguration,
    () => HierarchicalChunkingConfiguration,
    () => SemanticChunkingConfiguration,
  ]
);
export var ConfluenceCrawlerConfiguration = struct(n0, _CCC, 0, [_fC], [[() => CrawlFilterConfiguration, 0]]);
export var ConfluenceDataSourceConfiguration = struct(
  n0,
  _CDSC,
  0,
  [_sC, _cC],
  [() => ConfluenceSourceConfiguration, [() => ConfluenceCrawlerConfiguration, 0]]
);
export var ConfluenceSourceConfiguration = struct(n0, _CSC, 0, [_hU, _hT, _aT, _cSA], [0, 0, 0, 0]);
export var ContextEnrichmentConfiguration = struct(
  n0,
  _CEC,
  0,
  [_t, _bFMC],
  [0, () => BedrockFoundationModelContextEnrichmentConfiguration]
);
export var CrawlFilterConfiguration = struct(n0, _CFC, 0, [_t, _pOF], [0, [() => PatternObjectFilterConfiguration, 0]]);
export var CreateDataSourceRequest = struct(
  n0,
  _CDSR,
  0,
  [_kBI, _cT, _n, _d, _dSC, _dDP, _sSEC, _vIC],
  [
    [0, 1],
    [0, 4],
    0,
    0,
    [() => DataSourceConfiguration, 0],
    0,
    () => ServerSideEncryptionConfiguration,
    () => VectorIngestionConfiguration,
  ]
);
export var CreateDataSourceResponse = struct(n0, _CDSRr, 0, [_dS], [[() => DataSource, 0]]);
export var CreateKnowledgeBaseRequest = struct(
  n0,
  _CKBR,
  0,
  [_cT, _n, _d, _rAo, _kBC, _sCt, _ta],
  [[0, 4], 0, 0, 0, [() => KnowledgeBaseConfiguration, 0], [() => StorageConfiguration, 0], 128 | 0]
);
export var CreateKnowledgeBaseResponse = struct(n0, _CKBRr, 0, [_kB], [[() => KnowledgeBase, 0]]);
export var CuratedQuery = struct(n0, _CQ, 0, [_nL, _sq], [0, 0]);
export var CustomContent = struct(
  n0,
  _CCu,
  0,
  [_cDI, _sT, _sL, _iC],
  [() => CustomDocumentIdentifier, 0, () => CustomS3Location, [() => InlineContent, 0]]
);
export var CustomDocumentIdentifier = struct(n0, _CDI, 0, [_id], [0]);
export var CustomS3Location = struct(n0, _CSL, 0, [_u, _bOAI], [0, 0]);
export var CustomTransformationConfiguration = struct(
  n0,
  _CTC,
  0,
  [_iS, _tr],
  [() => IntermediateStorage, () => Transformations]
);
export var DataSource = struct(
  n0,
  _DS,
  0,
  [_kBI, _dSI, _n, _st, _d, _dSC, _sSEC, _vIC, _dDP, _cA, _uA, _fR],
  [
    0,
    0,
    0,
    0,
    0,
    [() => DataSourceConfiguration, 0],
    () => ServerSideEncryptionConfiguration,
    () => VectorIngestionConfiguration,
    0,
    5,
    5,
    64 | 0,
  ]
);
export var DataSourceConfiguration = struct(
  n0,
  _DSC,
  0,
  [_t, _sCo, _wC, _cCon, _sCa, _sPC],
  [
    0,
    [() => S3DataSourceConfiguration, 0],
    [() => WebDataSourceConfiguration, 0],
    [() => ConfluenceDataSourceConfiguration, 0],
    [() => SalesforceDataSourceConfiguration, 0],
    [() => SharePointDataSourceConfiguration, 0],
  ]
);
export var DeleteKnowledgeBaseDocumentsRequest = struct(
  n0,
  _DKBDR,
  0,
  [_kBI, _dSI, _cT, _dI],
  [[0, 1], [0, 1], [0, 4], () => DocumentIdentifiers]
);
export var DeleteKnowledgeBaseDocumentsResponse = struct(n0, _DKBDRe, 0, [_dD], [() => KnowledgeBaseDocumentDetails]);
export var DocumentContent = struct(n0, _DC, 0, [_dST, _cu, _s_], [0, [() => CustomContent, 0], () => S3Content]);
export var DocumentIdentifier = struct(
  n0,
  _DI,
  0,
  [_dST, _s_, _cu],
  [0, () => S3Location, () => CustomDocumentIdentifier]
);
export var DocumentMetadata = struct(
  n0,
  _DM,
  0,
  [_t, _iA, _sL],
  [0, [() => MetadataAttributes, 0], () => CustomS3Location]
);
export var EmbeddingModelConfiguration = struct(n0, _EMC, 0, [_bEMC], [() => BedrockEmbeddingModelConfiguration]);
export var EnrichmentStrategyConfiguration = struct(n0, _ESC, 0, [_met], [0]);
export var FixedSizeChunkingConfiguration = struct(n0, _FSCC, 0, [_mTa, _oP], [1, 1]);
export var GetDataSourceRequest = struct(
  n0,
  _GDSR,
  0,
  [_kBI, _dSI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetDataSourceResponse = struct(n0, _GDSRe, 0, [_dS], [[() => DataSource, 0]]);
export var GetKnowledgeBaseDocumentsRequest = struct(
  n0,
  _GKBDR,
  0,
  [_kBI, _dSI, _dI],
  [[0, 1], [0, 1], () => DocumentIdentifiers]
);
export var GetKnowledgeBaseDocumentsResponse = struct(n0, _GKBDRe, 0, [_dD], [() => KnowledgeBaseDocumentDetails]);
export var GetKnowledgeBaseRequest = struct(n0, _GKBR, 0, [_kBI], [[0, 1]]);
export var GetKnowledgeBaseResponse = struct(n0, _GKBRe, 0, [_kB], [[() => KnowledgeBase, 0]]);
export var HierarchicalChunkingConfiguration = struct(
  n0,
  _HCC,
  0,
  [_lC, _oTv],
  [() => HierarchicalChunkingLevelConfigurations, 1]
);
export var HierarchicalChunkingLevelConfiguration = struct(n0, _HCLC, 0, [_mTa], [1]);
export var IngestKnowledgeBaseDocumentsRequest = struct(
  n0,
  _IKBDR,
  0,
  [_kBI, _dSI, _cT, _do],
  [
    [0, 1],
    [0, 1],
    [0, 4],
    [() => KnowledgeBaseDocuments, 0],
  ]
);
export var IngestKnowledgeBaseDocumentsResponse = struct(n0, _IKBDRn, 0, [_dD], [() => KnowledgeBaseDocumentDetails]);
export var InlineContent = struct(
  n0,
  _ICnl,
  0,
  [_t, _bC, _tCe],
  [0, [() => ByteContentDoc, 0], [() => TextContentDoc, 0]]
);
export var IntermediateStorage = struct(n0, _IS, 0, [_sL], [() => S3Location]);
export var KendraKnowledgeBaseConfiguration = struct(n0, _KKBC, 0, [_kIA], [0]);
export var KnowledgeBase = struct(
  n0,
  _KB,
  0,
  [_kBI, _n, _kBA, _d, _rAo, _kBC, _sCt, _st, _cA, _uA, _fR],
  [0, 0, 0, 0, 0, [() => KnowledgeBaseConfiguration, 0], [() => StorageConfiguration, 0], 0, 5, 5, 64 | 0]
);
export var KnowledgeBaseConfiguration = struct(
  n0,
  _KBC,
  0,
  [_t, _vKBC, _kKBC, _sKBC],
  [
    0,
    () => VectorKnowledgeBaseConfiguration,
    () => KendraKnowledgeBaseConfiguration,
    [() => SqlKnowledgeBaseConfiguration, 0],
  ]
);
export var KnowledgeBaseDocument = struct(
  n0,
  _KBD,
  0,
  [_meta, _cont],
  [
    [() => DocumentMetadata, 0],
    [() => DocumentContent, 0],
  ]
);
export var KnowledgeBaseDocumentDetail = struct(
  n0,
  _KBDD,
  0,
  [_kBI, _dSI, _st, _ide, _sR, _uA],
  [0, 0, 0, () => DocumentIdentifier, 0, 5]
);
export var ListKnowledgeBaseDocumentsRequest = struct(n0, _LKBDR, 0, [_kBI, _dSI, _mR, _nT], [[0, 1], [0, 1], 1, 0]);
export var ListKnowledgeBaseDocumentsResponse = struct(
  n0,
  _LKBDRi,
  0,
  [_dD, _nT],
  [() => KnowledgeBaseDocumentDetails, 0]
);
export var MetadataAttribute = struct(
  n0,
  _MA,
  0,
  [_k, _value],
  [
    [() => Key, 0],
    [() => MetadataAttributeValue, 0],
  ]
);
export var MetadataAttributeValue = struct(
  n0,
  _MAV,
  0,
  [_t, _nV, _bV, _sV, _sLV],
  [0, [() => NumberValue, 0], 2, [() => StringValue, 0], [() => StringListValue, 0]]
);
export var MongoDbAtlasConfiguration = struct(
  n0,
  _MDAC,
  0,
  [_en, _dN, _cNo, _vIN, _cSA, _fMi, _eSN, _tIN],
  [0, 0, 0, 0, 0, () => MongoDbAtlasFieldMapping, 0, 0]
);
export var MongoDbAtlasFieldMapping = struct(n0, _MDAFM, 0, [_vF, _tF, _mF], [0, 0, 0]);
export var NeptuneAnalyticsConfiguration = struct(
  n0,
  _NAC,
  0,
  [_gA, _fMi],
  [[() => GraphArn, 0], () => NeptuneAnalyticsFieldMapping]
);
export var NeptuneAnalyticsFieldMapping = struct(n0, _NAFM, 0, [_tF, _mF], [0, 0]);
export var OpenSearchManagedClusterConfiguration = struct(
  n0,
  _OSMCC,
  0,
  [_dE, _dA, _vIN, _fMi],
  [0, 0, [() => OpenSearchManagedClusterIndexName, 0], () => OpenSearchManagedClusterFieldMapping]
);
export var OpenSearchManagedClusterFieldMapping = struct(n0, _OSMCFM, 0, [_vF, _tF, _mF], [0, 0, 0]);
export var OpenSearchServerlessConfiguration = struct(
  n0,
  _OSSC,
  0,
  [_cAo, _vIN, _fMi],
  [0, 0, () => OpenSearchServerlessFieldMapping]
);
export var OpenSearchServerlessFieldMapping = struct(n0, _OSSFM, 0, [_vF, _tF, _mF], [0, 0, 0]);
export var ParsingConfiguration = struct(
  n0,
  _PC,
  0,
  [_pSa, _bFMC, _bDAC],
  [0, () => BedrockFoundationModelConfiguration, () => BedrockDataAutomationConfiguration]
);
export var ParsingPrompt = struct(n0, _PP, 0, [_pPT], [0]);
export var PatternObjectFilter = struct(
  n0,
  _POF,
  0,
  [_oTb, _iF, _eF],
  [
    [() => FilteredObjectType, 0],
    [() => FilterList, 0],
    [() => FilterList, 0],
  ]
);
export var PatternObjectFilterConfiguration = struct(n0, _POFC, 0, [_f], [[() => PatternObjectFilterList, 0]]);
export var PineconeConfiguration = struct(n0, _PCi, 0, [_cSo, _cSA, _na, _fMi], [0, 0, 0, () => PineconeFieldMapping]);
export var PineconeFieldMapping = struct(n0, _PFM, 0, [_tF, _mF], [0, 0]);
export var QueryGenerationColumn = struct(n0, _QGC, 0, [_n, _d, _inc], [0, 0, 0]);
export var QueryGenerationConfiguration = struct(n0, _QGCu, 0, [_eTS, _gCe], [1, [() => QueryGenerationContext, 0]]);
export var QueryGenerationContext = struct(
  n0,
  _QGCue,
  8,
  [_tab, _cQ],
  [() => QueryGenerationTables, () => CuratedQueries]
);
export var QueryGenerationTable = struct(n0, _QGT, 0, [_n, _d, _inc, _col], [0, 0, 0, () => QueryGenerationColumns]);
export var RdsConfiguration = struct(n0, _RC, 0, [_rAe, _cSA, _dN, _tN, _fMi], [0, 0, 0, 0, () => RdsFieldMapping]);
export var RdsFieldMapping = struct(n0, _RFM, 0, [_pKF, _vF, _tF, _mF, _cMF], [0, 0, 0, 0, 0]);
export var RedisEnterpriseCloudConfiguration = struct(
  n0,
  _RECC,
  0,
  [_en, _vIN, _cSA, _fMi],
  [0, 0, 0, () => RedisEnterpriseCloudFieldMapping]
);
export var RedisEnterpriseCloudFieldMapping = struct(n0, _RECFM, 0, [_vF, _tF, _mF], [0, 0, 0]);
export var RedshiftConfiguration = struct(
  n0,
  _RCe,
  0,
  [_sCto, _qEC, _qGC],
  [
    () => RedshiftQueryEngineStorageConfigurations,
    () => RedshiftQueryEngineConfiguration,
    [() => QueryGenerationConfiguration, 0],
  ]
);
export var RedshiftProvisionedAuthConfiguration = struct(n0, _RPAC, 0, [_t, _dU, _uPSA], [0, 0, 0]);
export var RedshiftProvisionedConfiguration = struct(
  n0,
  _RPC,
  0,
  [_cIl, _aCu],
  [0, () => RedshiftProvisionedAuthConfiguration]
);
export var RedshiftQueryEngineAwsDataCatalogStorageConfiguration = struct(n0, _RQEADCSC, 0, [_tNa], [64 | 0]);
export var RedshiftQueryEngineConfiguration = struct(
  n0,
  _RQEC,
  0,
  [_t, _sCe, _pCro],
  [0, () => RedshiftServerlessConfiguration, () => RedshiftProvisionedConfiguration]
);
export var RedshiftQueryEngineRedshiftStorageConfiguration = struct(n0, _RQERSC, 0, [_dN], [0]);
export var RedshiftQueryEngineStorageConfiguration = struct(
  n0,
  _RQESC,
  0,
  [_t, _aDCC, _rCed],
  [
    0,
    () => RedshiftQueryEngineAwsDataCatalogStorageConfiguration,
    () => RedshiftQueryEngineRedshiftStorageConfiguration,
  ]
);
export var RedshiftServerlessAuthConfiguration = struct(n0, _RSAC, 0, [_t, _uPSA], [0, 0]);
export var RedshiftServerlessConfiguration = struct(
  n0,
  _RSC,
  0,
  [_wA, _aCu],
  [0, () => RedshiftServerlessAuthConfiguration]
);
export var S3Content = struct(n0, _SC, 0, [_sL], [() => S3Location]);
export var S3DataSourceConfiguration = struct(n0, _SDSC, 0, [_bA, _iP, _bOAI], [0, [() => S3Prefixes, 0], 0]);
export var S3Location = struct(n0, _SL, 0, [_u], [0]);
export var S3VectorsConfiguration = struct(
  n0,
  _SVC,
  0,
  [_vBA, _iAn, _iN],
  [
    [() => VectorBucketArn, 0],
    [() => IndexArn, 0],
    [() => IndexName, 0],
  ]
);
export var SalesforceCrawlerConfiguration = struct(n0, _SCC, 0, [_fC], [[() => CrawlFilterConfiguration, 0]]);
export var SalesforceDataSourceConfiguration = struct(
  n0,
  _SDSCa,
  0,
  [_sC, _cC],
  [() => SalesforceSourceConfiguration, [() => SalesforceCrawlerConfiguration, 0]]
);
export var SalesforceSourceConfiguration = struct(n0, _SSC, 0, [_hU, _aT, _cSA], [0, 0, 0]);
export var SeedUrl = struct(n0, _SU, 0, [_ur], [0]);
export var SemanticChunkingConfiguration = struct(n0, _SCCe, 0, [_mTa, _bS, _bPTr], [1, 1, 1]);
export var ServerSideEncryptionConfiguration = struct(n0, _SSEC, 0, [_kKA], [0]);
export var SharePointCrawlerConfiguration = struct(n0, _SPCC, 0, [_fC], [[() => CrawlFilterConfiguration, 0]]);
export var SharePointDataSourceConfiguration = struct(
  n0,
  _SPDSC,
  0,
  [_sC, _cC],
  [() => SharePointSourceConfiguration, [() => SharePointCrawlerConfiguration, 0]]
);
export var SharePointSourceConfiguration = struct(
  n0,
  _SPSC,
  0,
  [_tIe, _dom, _sU, _hT, _aT, _cSA],
  [0, 0, 64 | 0, 0, 0, 0]
);
export var SqlKnowledgeBaseConfiguration = struct(n0, _SKBC, 0, [_t, _rCed], [0, [() => RedshiftConfiguration, 0]]);
export var StorageConfiguration = struct(
  n0,
  _SCt,
  0,
  [_t, _oSC, _oMCC, _pCi, _rECC, _rCd, _mDAC, _nAC, _sVC],
  [
    0,
    () => OpenSearchServerlessConfiguration,
    [() => OpenSearchManagedClusterConfiguration, 0],
    () => PineconeConfiguration,
    () => RedisEnterpriseCloudConfiguration,
    () => RdsConfiguration,
    () => MongoDbAtlasConfiguration,
    [() => NeptuneAnalyticsConfiguration, 0],
    [() => S3VectorsConfiguration, 0],
  ]
);
export var SupplementalDataStorageConfiguration = struct(
  n0,
  _SDSCu,
  0,
  [_sLt],
  [() => SupplementalDataStorageLocations]
);
export var SupplementalDataStorageLocation = struct(n0, _SDSL, 0, [_t, _sL], [0, () => S3Location]);
export var TextContentDoc = struct(n0, _TCD, 0, [_da], [[() => Data, 0]]);
export var Transformation = struct(n0, _T, 0, [_tFr, _sTA], [() => TransformationFunction, 0]);
export var TransformationFunction = struct(n0, _TF, 0, [_tLC], [() => TransformationLambdaConfiguration]);
export var TransformationLambdaConfiguration = struct(n0, _TLC, 0, [_lA], [0]);
export var UpdateDataSourceRequest = struct(
  n0,
  _UDSR,
  0,
  [_kBI, _dSI, _n, _d, _dSC, _dDP, _sSEC, _vIC],
  [
    [0, 1],
    [0, 1],
    0,
    0,
    [() => DataSourceConfiguration, 0],
    0,
    () => ServerSideEncryptionConfiguration,
    () => VectorIngestionConfiguration,
  ]
);
export var UpdateDataSourceResponse = struct(n0, _UDSRp, 0, [_dS], [[() => DataSource, 0]]);
export var UpdateKnowledgeBaseRequest = struct(
  n0,
  _UKBR,
  0,
  [_kBI, _n, _d, _rAo, _kBC, _sCt],
  [[0, 1], 0, 0, 0, [() => KnowledgeBaseConfiguration, 0], [() => StorageConfiguration, 0]]
);
export var UpdateKnowledgeBaseResponse = struct(n0, _UKBRp, 0, [_kB], [[() => KnowledgeBase, 0]]);
export var UrlConfiguration = struct(n0, _UC, 0, [_sUe], [() => SeedUrls]);
export var VectorIngestionConfiguration = struct(
  n0,
  _VIC,
  0,
  [_cCh, _cTC, _pCa, _cEC],
  [
    () => ChunkingConfiguration,
    () => CustomTransformationConfiguration,
    () => ParsingConfiguration,
    () => ContextEnrichmentConfiguration,
  ]
);
export var VectorKnowledgeBaseConfiguration = struct(
  n0,
  _VKBC,
  0,
  [_eMA, _eMC, _sDSC],
  [0, () => EmbeddingModelConfiguration, () => SupplementalDataStorageConfiguration]
);
export var WebCrawlerConfiguration = struct(
  n0,
  _WCC,
  0,
  [_cL, _iF, _eF, _sc, _uAs, _uAH],
  [
    () => WebCrawlerLimits,
    [() => FilterList, 0],
    [() => FilterList, 0],
    0,
    [() => UserAgent, 0],
    [() => UserAgentHeader, 0],
  ]
);
export var WebCrawlerLimits = struct(n0, _WCL, 0, [_rL, _mP], [1, 1]);
export var WebDataSourceConfiguration = struct(
  n0,
  _WDSC,
  0,
  [_sC, _cC],
  [() => WebSourceConfiguration, [() => WebCrawlerConfiguration, 0]]
);
export var WebSourceConfiguration = struct(n0, _WSC, 0, [_uC], [() => UrlConfiguration]);
export var AwsDataCatalogTableNames = 64 | 0;

export var CuratedQueries = list(n0, _CQu, 0, () => CuratedQuery);
export var DocumentIdentifiers = list(n0, _DIo, 0, () => DocumentIdentifier);
export var FilterList = list(n0, _FL, 8, [() => FilterPattern, 0]);
export var HierarchicalChunkingLevelConfigurations = list(n0, _HCLCi, 0, () => HierarchicalChunkingLevelConfiguration);
export var KnowledgeBaseDocumentDetails = list(n0, _KBDDn, 0, () => KnowledgeBaseDocumentDetail);
export var KnowledgeBaseDocuments = list(n0, _KBDn, 0, [() => KnowledgeBaseDocument, 0]);
export var MetadataAttributes = list(n0, _MAe, 0, [() => MetadataAttribute, 0]);
export var PatternObjectFilterList = list(n0, _POFL, 8, [() => PatternObjectFilter, 0]);
export var QueryGenerationColumns = list(n0, _QGCuer, 0, () => QueryGenerationColumn);
export var QueryGenerationTables = list(n0, _QGTu, 0, () => QueryGenerationTable);
export var RedshiftQueryEngineStorageConfigurations = list(
  n0,
  _RQESCe,
  0,
  () => RedshiftQueryEngineStorageConfiguration
);
export var S3Prefixes = list(n0, _SPr, 0, [() => S3Prefix, 0]);
export var SeedUrls = list(n0, _SUe, 0, () => SeedUrl);
export var SharePointSiteUrls = 64 | 0;

export var StringListValue = list(n0, _SLV, 0, [() => StringValue, 0]);
export var SupplementalDataStorageLocations = list(n0, _SDSLu, 0, () => SupplementalDataStorageLocation);
export var Transformations = list(n0, _Tr, 0, () => Transformation);
export var CreateDataSource = op(
  n0,
  _CDS,
  {
    [_h]: ["PUT", "/knowledgebases/{knowledgeBaseId}/datasources/", 200],
  },
  () => CreateDataSourceRequest,
  () => CreateDataSourceResponse
);
export var CreateKnowledgeBase = op(
  n0,
  _CKB,
  {
    [_h]: ["PUT", "/knowledgebases/", 202],
  },
  () => CreateKnowledgeBaseRequest,
  () => CreateKnowledgeBaseResponse
);
export var DeleteKnowledgeBaseDocuments = op(
  n0,
  _DKBD,
  {
    [_h]: ["POST", "/knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}/documents/deleteDocuments", 202],
  },
  () => DeleteKnowledgeBaseDocumentsRequest,
  () => DeleteKnowledgeBaseDocumentsResponse
);
export var GetDataSource = op(
  n0,
  _GDS,
  {
    [_h]: ["GET", "/knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}", 200],
  },
  () => GetDataSourceRequest,
  () => GetDataSourceResponse
);
export var GetKnowledgeBase = op(
  n0,
  _GKB,
  {
    [_h]: ["GET", "/knowledgebases/{knowledgeBaseId}", 200],
  },
  () => GetKnowledgeBaseRequest,
  () => GetKnowledgeBaseResponse
);
export var GetKnowledgeBaseDocuments = op(
  n0,
  _GKBD,
  {
    [_h]: ["POST", "/knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}/documents/getDocuments", 200],
  },
  () => GetKnowledgeBaseDocumentsRequest,
  () => GetKnowledgeBaseDocumentsResponse
);
export var IngestKnowledgeBaseDocuments = op(
  n0,
  _IKBD,
  {
    [_h]: ["PUT", "/knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}/documents", 202],
  },
  () => IngestKnowledgeBaseDocumentsRequest,
  () => IngestKnowledgeBaseDocumentsResponse
);
export var ListKnowledgeBaseDocuments = op(
  n0,
  _LKBD,
  {
    [_h]: ["POST", "/knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}/documents", 200],
  },
  () => ListKnowledgeBaseDocumentsRequest,
  () => ListKnowledgeBaseDocumentsResponse
);
export var UpdateDataSource = op(
  n0,
  _UDS,
  {
    [_h]: ["PUT", "/knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}", 200],
  },
  () => UpdateDataSourceRequest,
  () => UpdateDataSourceResponse
);
export var UpdateKnowledgeBase = op(
  n0,
  _UKB,
  {
    [_h]: ["PUT", "/knowledgebases/{knowledgeBaseId}", 202],
  },
  () => UpdateKnowledgeBaseRequest,
  () => UpdateKnowledgeBaseResponse
);
