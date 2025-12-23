const _AC = "AudioConfiguration";
const _ACL = "AudioConfigurationList";
const _ADE = "AccessDeniedException";
const _BE = "BatchError";
const _BEa = "BatchErrors";
const _BGC = "BatchGetChannel";
const _BGCR = "BatchGetChannelRequest";
const _BGCRa = "BatchGetChannelResponse";
const _BGSK = "BatchGetStreamKey";
const _BGSKR = "BatchGetStreamKeyRequest";
const _BGSKRa = "BatchGetStreamKeyResponse";
const _BSVSR = "BatchStartViewerSessionRevocation";
const _BSVSRE = "BatchStartViewerSessionRevocationError";
const _BSVSREa = "BatchStartViewerSessionRevocationErrors";
const _BSVSRR = "BatchStartViewerSessionRevocationRequest";
const _BSVSRRa = "BatchStartViewerSessionRevocationResponse";
const _BSVSRVS = "BatchStartViewerSessionRevocationViewerSession";
const _BSVSRVSL = "BatchStartViewerSessionRevocationViewerSessionList";
const _C = "Channel";
const _CC = "CreateChannel";
const _CCR = "CreateChannelRequest";
const _CCRr = "CreateChannelResponse";
const _CE = "ConflictException";
const _CL = "ChannelList";
const _CNB = "ChannelNotBroadcasting";
const _CPRP = "CreatePlaybackRestrictionPolicy";
const _CPRPR = "CreatePlaybackRestrictionPolicyRequest";
const _CPRPRr = "CreatePlaybackRestrictionPolicyResponse";
const _CRC = "CreateRecordingConfiguration";
const _CRCR = "CreateRecordingConfigurationRequest";
const _CRCRr = "CreateRecordingConfigurationResponse";
const _CS = "ChannelSummary";
const _CSK = "CreateStreamKey";
const _CSKR = "CreateStreamKeyRequest";
const _CSKRr = "CreateStreamKeyResponse";
const _Ch = "Channels";
const _DC = "DestinationConfiguration";
const _DCR = "DeleteChannelRequest";
const _DCe = "DeleteChannel";
const _DPKP = "DeletePlaybackKeyPair";
const _DPKPR = "DeletePlaybackKeyPairRequest";
const _DPKPRe = "DeletePlaybackKeyPairResponse";
const _DPRP = "DeletePlaybackRestrictionPolicy";
const _DPRPR = "DeletePlaybackRestrictionPolicyRequest";
const _DRC = "DeleteRecordingConfiguration";
const _DRCR = "DeleteRecordingConfigurationRequest";
const _DSK = "DeleteStreamKey";
const _DSKR = "DeleteStreamKeyRequest";
const _GC = "GetChannel";
const _GCR = "GetChannelRequest";
const _GCRe = "GetChannelResponse";
const _GPKP = "GetPlaybackKeyPair";
const _GPKPR = "GetPlaybackKeyPairRequest";
const _GPKPRe = "GetPlaybackKeyPairResponse";
const _GPRP = "GetPlaybackRestrictionPolicy";
const _GPRPR = "GetPlaybackRestrictionPolicyRequest";
const _GPRPRe = "GetPlaybackRestrictionPolicyResponse";
const _GRC = "GetRecordingConfiguration";
const _GRCR = "GetRecordingConfigurationRequest";
const _GRCRe = "GetRecordingConfigurationResponse";
const _GS = "GetStream";
const _GSK = "GetStreamKey";
const _GSKR = "GetStreamKeyRequest";
const _GSKRe = "GetStreamKeyResponse";
const _GSR = "GetStreamRequest";
const _GSRe = "GetStreamResponse";
const _GSS = "GetStreamSession";
const _GSSR = "GetStreamSessionRequest";
const _GSSRe = "GetStreamSessionResponse";
const _IC = "IngestConfiguration";
const _ICn = "IngestConfigurations";
const _IPKP = "ImportPlaybackKeyPair";
const _IPKPR = "ImportPlaybackKeyPairRequest";
const _IPKPRm = "ImportPlaybackKeyPairResponse";
const _ISE = "InternalServerException";
const _LC = "ListChannels";
const _LCR = "ListChannelsRequest";
const _LCRi = "ListChannelsResponse";
const _LPKP = "ListPlaybackKeyPairs";
const _LPKPR = "ListPlaybackKeyPairsRequest";
const _LPKPRi = "ListPlaybackKeyPairsResponse";
const _LPRP = "ListPlaybackRestrictionPolicies";
const _LPRPR = "ListPlaybackRestrictionPoliciesRequest";
const _LPRPRi = "ListPlaybackRestrictionPoliciesResponse";
const _LRC = "ListRecordingConfigurations";
const _LRCR = "ListRecordingConfigurationsRequest";
const _LRCRi = "ListRecordingConfigurationsResponse";
const _LS = "ListStreams";
const _LSK = "ListStreamKeys";
const _LSKR = "ListStreamKeysRequest";
const _LSKRi = "ListStreamKeysResponse";
const _LSR = "ListStreamsRequest";
const _LSRi = "ListStreamsResponse";
const _LSS = "ListStreamSessions";
const _LSSR = "ListStreamSessionsRequest";
const _LSSRi = "ListStreamSessionsResponse";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResponse";
const _MIC = "MultitrackInputConfiguration";
const _PKP = "PlaybackKeyPair";
const _PKPL = "PlaybackKeyPairList";
const _PKPS = "PlaybackKeyPairSummary";
const _PM = "PutMetadata";
const _PMR = "PutMetadataRequest";
const _PRP = "PlaybackRestrictionPolicy";
const _PRPL = "PlaybackRestrictionPolicyList";
const _PRPS = "PlaybackRestrictionPolicySummary";
const _PV = "PendingVerification";
const _RC = "RecordingConfiguration";
const _RCL = "RecordingConfigurationList";
const _RCS = "RecordingConfigurationSummary";
const _RCe = "RenditionConfiguration";
const _RNFE = "ResourceNotFoundException";
const _S = "Srt";
const _SDC = "S3DestinationConfiguration";
const _SE = "StreamEvent";
const _SEt = "StreamEvents";
const _SF = "StreamFilters";
const _SK = "StreamKey";
const _SKL = "StreamKeyList";
const _SKS = "StreamKeySummary";
const _SKV = "StreamKeyValue";
const _SKt = "StreamKeys";
const _SL = "StreamList";
const _SM = "StreamMetadata";
const _SP = "SrtPassphrase";
const _SQEE = "ServiceQuotaExceededException";
const _SS = "StreamSession";
const _SSL = "StreamSessionList";
const _SSR = "StopStreamRequest";
const _SSRt = "StopStreamResponse";
const _SSS = "StreamSessionSummary";
const _SSt = "StreamSummary";
const _SSto = "StopStream";
const _SU = "StreamUnavailable";
const _SVSR = "StartViewerSessionRevocation";
const _SVSRR = "StartViewerSessionRevocationRequest";
const _SVSRRt = "StartViewerSessionRevocationResponse";
const _St = "Stream";
const _TC = "ThumbnailConfiguration";
const _TE = "ThrottlingException";
const _TR = "TagResource";
const _TRR = "TagResourceRequest";
const _TRRa = "TagResourceResponse";
const _UC = "UpdateChannel";
const _UCR = "UpdateChannelRequest";
const _UCRp = "UpdateChannelResponse";
const _UPRP = "UpdatePlaybackRestrictionPolicy";
const _UPRPR = "UpdatePlaybackRestrictionPolicyRequest";
const _UPRPRp = "UpdatePlaybackRestrictionPolicyResponse";
const _UR = "UntagResource";
const _URR = "UntagResourceRequest";
const _URRn = "UntagResourceResponse";
const _VC = "VideoConfiguration";
const _VCL = "VideoConfigurationList";
const _VE = "ValidationException";
const _a = "arn";
const _aC = "allowedCountries";
const _aCu = "audioConfigurations";
const _aL = "avcLevel";
const _aO = "allowedOrigins";
const _aP = "avcProfile";
const _ar = "arns";
const _au = "authorized";
const _aud = "audio";
const _bN = "bucketName";
const _c = "client";
const _cA = "channelArn";
const _cF = "containerFormat";
const _ch = "channels";
const _cha = "channel";
const _co = "codec";
const _cod = "code";
const _dC = "destinationConfiguration";
const _e = "error";
const _eM = "exceptionMessage";
const _eSOE = "enableStrictOriginEnforcement";
const _eT = "eventTime";
const _eTn = "endTime";
const _en = "enabled";
const _enc = "encoder";
const _end = "endpoint";
const _er = "errors";
const _f = "fingerprint";
const _fB = "filterBy";
const _fBN = "filterByName";
const _fBPRPA = "filterByPlaybackRestrictionPolicyArn";
const _fBRCA = "filterByRecordingConfigurationArn";
const _h = "health";
const _hE = "httpError";
const _hEE = "hasErrorEvent";
const _hQ = "httpQuery";
const _ht = "http";
const _iC = "ingestConfiguration";
const _iCn = "ingestConfigurations";
const _iE = "ingestEndpoint";
const _iI = "insecureIngest";
const _kP = "keyPair";
const _kPe = "keyPairs";
const _l = "level";
const _lM = "latencyMode";
const _m = "message";
const _mIC = "multitrackInputConfiguration";
const _mR = "maxResults";
const _mRa = "maximumResolution";
const _me = "metadata";
const _n = "name";
const _nT = "nextToken";
const _p = "preset";
const _pKM = "publicKeyMaterial";
const _pRP = "playbackRestrictionPolicy";
const _pRPA = "playbackRestrictionPolicyArn";
const _pRPl = "playbackRestrictionPolicies";
const _pU = "playbackUrl";
const _pa = "passphrase";
const _po = "policy";
const _pr = "profile";
const _r = "renditions";
const _rA = "resourceArn";
const _rC = "renditionConfiguration";
const _rCA = "recordingConfigurationArn";
const _rCe = "recordingConfiguration";
const _rCec = "recordingConfigurations";
const _rM = "recordingMode";
const _rRWS = "recordingReconnectWindowSeconds";
const _rS = "renditionSelection";
const _re = "resolution";
const _s = "srt";
const _sI = "streamId";
const _sK = "streamKeys";
const _sKt = "streamKey";
const _sR = "sampleRate";
const _sS = "streamSession";
const _sSt = "streamSessions";
const _sT = "startTime";
const _s_ = "s3";
const _se = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.ivs";
const _st = "stream";
const _sta = "state";
const _sto = "storage";
const _str = "streams";
const _t = "track";
const _tB = "targetBitrate";
const _tC = "thumbnailConfiguration";
const _tE = "truncatedEvents";
const _tF = "targetFramerate";
const _tIS = "targetIntervalSeconds";
const _tK = "tagKeys";
const _ta = "tags";
const _ty = "type";
const _v = "video";
const _vC = "videoConfigurations";
const _vCi = "viewerCount";
const _vH = "videoHeight";
const _vI = "viewerId";
const _vS = "viewerSessions";
const _vSVLTOET = "viewerSessionVersionsLessThanOrEqualTo";
const _vW = "videoWidth";
const _va = "value";
const n0 = "com.amazonaws.ivs";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  AccessDeniedException,
  ChannelNotBroadcasting,
  ConflictException,
  InternalServerException,
  PendingVerification,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  StreamUnavailable,
  ThrottlingException,
  ValidationException,
} from "../models/errors";
import { IvsServiceException } from "../models/IvsServiceException";

/* eslint no-var: 0 */
var SrtPassphrase: StaticSimpleSchema = [0, n0, _SP, 8, 0];
var StreamKeyValue: StaticSimpleSchema = [0, n0, _SKV, 8, 0];
var StreamMetadata: StaticSimpleSchema = [0, n0, _SM, 8, 0];
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE,
  { [_e]: _c, [_hE]: 403 },
  [_eM],
  [0]
];
TypeRegistry.for(n0).registerError(AccessDeniedException$, AccessDeniedException);
export var AudioConfiguration$: StaticStructureSchema = [3, n0, _AC,
  0,
  [_co, _tB, _sR, _ch, _t],
  [0, 1, 1, 1, 0]
];
export var BatchError$: StaticStructureSchema = [3, n0, _BE,
  0,
  [_a, _cod, _m],
  [0, 0, 0]
];
export var BatchGetChannelRequest$: StaticStructureSchema = [3, n0, _BGCR,
  0,
  [_ar],
  [64 | 0]
];
export var BatchGetChannelResponse$: StaticStructureSchema = [3, n0, _BGCRa,
  0,
  [_ch, _er],
  [[() => Channels, 0], () => BatchErrors]
];
export var BatchGetStreamKeyRequest$: StaticStructureSchema = [3, n0, _BGSKR,
  0,
  [_ar],
  [64 | 0]
];
export var BatchGetStreamKeyResponse$: StaticStructureSchema = [3, n0, _BGSKRa,
  0,
  [_sK, _er],
  [[() => StreamKeys, 0], () => BatchErrors]
];
export var BatchStartViewerSessionRevocationError$: StaticStructureSchema = [3, n0, _BSVSRE,
  0,
  [_cA, _vI, _cod, _m],
  [0, 0, 0, 0]
];
export var BatchStartViewerSessionRevocationRequest$: StaticStructureSchema = [3, n0, _BSVSRR,
  0,
  [_vS],
  [() => BatchStartViewerSessionRevocationViewerSessionList]
];
export var BatchStartViewerSessionRevocationResponse$: StaticStructureSchema = [3, n0, _BSVSRRa,
  0,
  [_er],
  [() => BatchStartViewerSessionRevocationErrors]
];
export var BatchStartViewerSessionRevocationViewerSession$: StaticStructureSchema = [3, n0, _BSVSRVS,
  0,
  [_cA, _vI, _vSVLTOET],
  [0, 0, 1]
];
export var Channel$: StaticStructureSchema = [3, n0, _C,
  0,
  [_a, _n, _lM, _ty, _rCA, _iE, _pU, _au, _ta, _iI, _p, _s, _pRPA, _mIC, _cF],
  [0, 0, 0, 0, 0, 0, 0, 2, 128 | 0, 2, 0, [() => Srt$, 0], 0, () => MultitrackInputConfiguration$, 0]
];
export var ChannelNotBroadcasting$: StaticErrorSchema = [-3, n0, _CNB,
  { [_e]: _c, [_hE]: 404 },
  [_eM],
  [0]
];
TypeRegistry.for(n0).registerError(ChannelNotBroadcasting$, ChannelNotBroadcasting);
export var ChannelSummary$: StaticStructureSchema = [3, n0, _CS,
  0,
  [_a, _n, _lM, _au, _rCA, _ta, _iI, _ty, _p, _pRPA],
  [0, 0, 0, 2, 0, 128 | 0, 2, 0, 0, 0]
];
export var ConflictException$: StaticErrorSchema = [-3, n0, _CE,
  { [_e]: _c, [_hE]: 409 },
  [_eM],
  [0]
];
TypeRegistry.for(n0).registerError(ConflictException$, ConflictException);
export var CreateChannelRequest$: StaticStructureSchema = [3, n0, _CCR,
  0,
  [_n, _lM, _ty, _au, _rCA, _ta, _iI, _p, _pRPA, _mIC, _cF],
  [0, 0, 0, 2, 0, 128 | 0, 2, 0, 0, () => MultitrackInputConfiguration$, 0]
];
export var CreateChannelResponse$: StaticStructureSchema = [3, n0, _CCRr,
  0,
  [_cha, _sKt],
  [[() => Channel$, 0], [() => StreamKey$, 0]]
];
export var CreatePlaybackRestrictionPolicyRequest$: StaticStructureSchema = [3, n0, _CPRPR,
  0,
  [_aC, _aO, _eSOE, _n, _ta],
  [64 | 0, 64 | 0, 2, 0, 128 | 0]
];
export var CreatePlaybackRestrictionPolicyResponse$: StaticStructureSchema = [3, n0, _CPRPRr,
  0,
  [_pRP],
  [() => PlaybackRestrictionPolicy$]
];
export var CreateRecordingConfigurationRequest$: StaticStructureSchema = [3, n0, _CRCR,
  0,
  [_n, _dC, _ta, _tC, _rRWS, _rC],
  [0, () => DestinationConfiguration$, 128 | 0, () => ThumbnailConfiguration$, 1, () => RenditionConfiguration$]
];
export var CreateRecordingConfigurationResponse$: StaticStructureSchema = [3, n0, _CRCRr,
  0,
  [_rCe],
  [() => RecordingConfiguration$]
];
export var CreateStreamKeyRequest$: StaticStructureSchema = [3, n0, _CSKR,
  0,
  [_cA, _ta],
  [0, 128 | 0]
];
export var CreateStreamKeyResponse$: StaticStructureSchema = [3, n0, _CSKRr,
  0,
  [_sKt],
  [[() => StreamKey$, 0]]
];
export var DeleteChannelRequest$: StaticStructureSchema = [3, n0, _DCR,
  0,
  [_a],
  [0]
];
export var DeletePlaybackKeyPairRequest$: StaticStructureSchema = [3, n0, _DPKPR,
  0,
  [_a],
  [0]
];
export var DeletePlaybackKeyPairResponse$: StaticStructureSchema = [3, n0, _DPKPRe,
  0,
  [],
  []
];
export var DeletePlaybackRestrictionPolicyRequest$: StaticStructureSchema = [3, n0, _DPRPR,
  0,
  [_a],
  [0]
];
export var DeleteRecordingConfigurationRequest$: StaticStructureSchema = [3, n0, _DRCR,
  0,
  [_a],
  [0]
];
export var DeleteStreamKeyRequest$: StaticStructureSchema = [3, n0, _DSKR,
  0,
  [_a],
  [0]
];
export var DestinationConfiguration$: StaticStructureSchema = [3, n0, _DC,
  0,
  [_s_],
  [() => S3DestinationConfiguration$]
];
export var GetChannelRequest$: StaticStructureSchema = [3, n0, _GCR,
  0,
  [_a],
  [0]
];
export var GetChannelResponse$: StaticStructureSchema = [3, n0, _GCRe,
  0,
  [_cha],
  [[() => Channel$, 0]]
];
export var GetPlaybackKeyPairRequest$: StaticStructureSchema = [3, n0, _GPKPR,
  0,
  [_a],
  [0]
];
export var GetPlaybackKeyPairResponse$: StaticStructureSchema = [3, n0, _GPKPRe,
  0,
  [_kP],
  [() => PlaybackKeyPair$]
];
export var GetPlaybackRestrictionPolicyRequest$: StaticStructureSchema = [3, n0, _GPRPR,
  0,
  [_a],
  [0]
];
export var GetPlaybackRestrictionPolicyResponse$: StaticStructureSchema = [3, n0, _GPRPRe,
  0,
  [_pRP],
  [() => PlaybackRestrictionPolicy$]
];
export var GetRecordingConfigurationRequest$: StaticStructureSchema = [3, n0, _GRCR,
  0,
  [_a],
  [0]
];
export var GetRecordingConfigurationResponse$: StaticStructureSchema = [3, n0, _GRCRe,
  0,
  [_rCe],
  [() => RecordingConfiguration$]
];
export var GetStreamKeyRequest$: StaticStructureSchema = [3, n0, _GSKR,
  0,
  [_a],
  [0]
];
export var GetStreamKeyResponse$: StaticStructureSchema = [3, n0, _GSKRe,
  0,
  [_sKt],
  [[() => StreamKey$, 0]]
];
export var GetStreamRequest$: StaticStructureSchema = [3, n0, _GSR,
  0,
  [_cA],
  [0]
];
export var GetStreamResponse$: StaticStructureSchema = [3, n0, _GSRe,
  0,
  [_st],
  [() => _Stream$]
];
export var GetStreamSessionRequest$: StaticStructureSchema = [3, n0, _GSSR,
  0,
  [_cA, _sI],
  [0, 0]
];
export var GetStreamSessionResponse$: StaticStructureSchema = [3, n0, _GSSRe,
  0,
  [_sS],
  [[() => StreamSession$, 0]]
];
export var ImportPlaybackKeyPairRequest$: StaticStructureSchema = [3, n0, _IPKPR,
  0,
  [_pKM, _n, _ta],
  [0, 0, 128 | 0]
];
export var ImportPlaybackKeyPairResponse$: StaticStructureSchema = [3, n0, _IPKPRm,
  0,
  [_kP],
  [() => PlaybackKeyPair$]
];
export var IngestConfiguration$: StaticStructureSchema = [3, n0, _IC,
  0,
  [_v, _aud],
  [() => VideoConfiguration$, () => AudioConfiguration$]
];
export var IngestConfigurations$: StaticStructureSchema = [3, n0, _ICn,
  0,
  [_vC, _aCu],
  [() => VideoConfigurationList, () => AudioConfigurationList]
];
export var InternalServerException$: StaticErrorSchema = [-3, n0, _ISE,
  { [_e]: _se, [_hE]: 500 },
  [_eM],
  [0]
];
TypeRegistry.for(n0).registerError(InternalServerException$, InternalServerException);
export var ListChannelsRequest$: StaticStructureSchema = [3, n0, _LCR,
  0,
  [_fBN, _fBRCA, _fBPRPA, _nT, _mR],
  [0, 0, 0, 0, 1]
];
export var ListChannelsResponse$: StaticStructureSchema = [3, n0, _LCRi,
  0,
  [_ch, _nT],
  [() => ChannelList, 0]
];
export var ListPlaybackKeyPairsRequest$: StaticStructureSchema = [3, n0, _LPKPR,
  0,
  [_nT, _mR],
  [0, 1]
];
export var ListPlaybackKeyPairsResponse$: StaticStructureSchema = [3, n0, _LPKPRi,
  0,
  [_kPe, _nT],
  [() => PlaybackKeyPairList, 0]
];
export var ListPlaybackRestrictionPoliciesRequest$: StaticStructureSchema = [3, n0, _LPRPR,
  0,
  [_nT, _mR],
  [0, 1]
];
export var ListPlaybackRestrictionPoliciesResponse$: StaticStructureSchema = [3, n0, _LPRPRi,
  0,
  [_pRPl, _nT],
  [() => PlaybackRestrictionPolicyList, 0]
];
export var ListRecordingConfigurationsRequest$: StaticStructureSchema = [3, n0, _LRCR,
  0,
  [_nT, _mR],
  [0, 1]
];
export var ListRecordingConfigurationsResponse$: StaticStructureSchema = [3, n0, _LRCRi,
  0,
  [_rCec, _nT],
  [() => RecordingConfigurationList, 0]
];
export var ListStreamKeysRequest$: StaticStructureSchema = [3, n0, _LSKR,
  0,
  [_cA, _nT, _mR],
  [0, 0, 1]
];
export var ListStreamKeysResponse$: StaticStructureSchema = [3, n0, _LSKRi,
  0,
  [_sK, _nT],
  [() => StreamKeyList, 0]
];
export var ListStreamSessionsRequest$: StaticStructureSchema = [3, n0, _LSSR,
  0,
  [_cA, _nT, _mR],
  [0, 0, 1]
];
export var ListStreamSessionsResponse$: StaticStructureSchema = [3, n0, _LSSRi,
  0,
  [_sSt, _nT],
  [() => StreamSessionList, 0]
];
export var ListStreamsRequest$: StaticStructureSchema = [3, n0, _LSR,
  0,
  [_fB, _nT, _mR],
  [() => StreamFilters$, 0, 1]
];
export var ListStreamsResponse$: StaticStructureSchema = [3, n0, _LSRi,
  0,
  [_str, _nT],
  [() => StreamList, 0]
];
export var ListTagsForResourceRequest$: StaticStructureSchema = [3, n0, _LTFRR,
  0,
  [_rA],
  [[0, 1]]
];
export var ListTagsForResourceResponse$: StaticStructureSchema = [3, n0, _LTFRRi,
  0,
  [_ta],
  [128 | 0]
];
export var MultitrackInputConfiguration$: StaticStructureSchema = [3, n0, _MIC,
  0,
  [_en, _po, _mRa],
  [2, 0, 0]
];
export var PendingVerification$: StaticErrorSchema = [-3, n0, _PV,
  { [_e]: _c, [_hE]: 403 },
  [_eM],
  [0]
];
TypeRegistry.for(n0).registerError(PendingVerification$, PendingVerification);
export var PlaybackKeyPair$: StaticStructureSchema = [3, n0, _PKP,
  0,
  [_a, _n, _f, _ta],
  [0, 0, 0, 128 | 0]
];
export var PlaybackKeyPairSummary$: StaticStructureSchema = [3, n0, _PKPS,
  0,
  [_a, _n, _ta],
  [0, 0, 128 | 0]
];
export var PlaybackRestrictionPolicy$: StaticStructureSchema = [3, n0, _PRP,
  0,
  [_a, _aC, _aO, _eSOE, _n, _ta],
  [0, 64 | 0, 64 | 0, 2, 0, 128 | 0]
];
export var PlaybackRestrictionPolicySummary$: StaticStructureSchema = [3, n0, _PRPS,
  0,
  [_a, _aC, _aO, _eSOE, _n, _ta],
  [0, 64 | 0, 64 | 0, 2, 0, 128 | 0]
];
export var PutMetadataRequest$: StaticStructureSchema = [3, n0, _PMR,
  0,
  [_cA, _me],
  [0, [() => StreamMetadata, 0]]
];
export var RecordingConfiguration$: StaticStructureSchema = [3, n0, _RC,
  0,
  [_a, _n, _dC, _sta, _ta, _tC, _rRWS, _rC],
  [0, 0, () => DestinationConfiguration$, 0, 128 | 0, () => ThumbnailConfiguration$, 1, () => RenditionConfiguration$]
];
export var RecordingConfigurationSummary$: StaticStructureSchema = [3, n0, _RCS,
  0,
  [_a, _n, _dC, _sta, _ta],
  [0, 0, () => DestinationConfiguration$, 0, 128 | 0]
];
export var RenditionConfiguration$: StaticStructureSchema = [3, n0, _RCe,
  0,
  [_rS, _r],
  [0, 64 | 0]
];
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE,
  { [_e]: _c, [_hE]: 404 },
  [_eM],
  [0]
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var S3DestinationConfiguration$: StaticStructureSchema = [3, n0, _SDC,
  0,
  [_bN],
  [0]
];
export var ServiceQuotaExceededException$: StaticErrorSchema = [-3, n0, _SQEE,
  { [_e]: _c, [_hE]: 402 },
  [_eM],
  [0]
];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException$, ServiceQuotaExceededException);
export var Srt$: StaticStructureSchema = [3, n0, _S,
  0,
  [_end, _pa],
  [0, [() => SrtPassphrase, 0]]
];
export var StartViewerSessionRevocationRequest$: StaticStructureSchema = [3, n0, _SVSRR,
  0,
  [_cA, _vI, _vSVLTOET],
  [0, 0, 1]
];
export var StartViewerSessionRevocationResponse$: StaticStructureSchema = [3, n0, _SVSRRt,
  0,
  [],
  []
];
export var StopStreamRequest$: StaticStructureSchema = [3, n0, _SSR,
  0,
  [_cA],
  [0]
];
export var StopStreamResponse$: StaticStructureSchema = [3, n0, _SSRt,
  0,
  [],
  []
];
export var _Stream$: StaticStructureSchema = [3, n0, _St,
  0,
  [_cA, _sI, _pU, _sT, _sta, _h, _vCi],
  [0, 0, 0, 5, 0, 0, 1]
];
export var StreamEvent$: StaticStructureSchema = [3, n0, _SE,
  0,
  [_n, _ty, _eT, _cod],
  [0, 0, 5, 0]
];
export var StreamFilters$: StaticStructureSchema = [3, n0, _SF,
  0,
  [_h],
  [0]
];
export var StreamKey$: StaticStructureSchema = [3, n0, _SK,
  0,
  [_a, _va, _cA, _ta],
  [0, [() => StreamKeyValue, 0], 0, 128 | 0]
];
export var StreamKeySummary$: StaticStructureSchema = [3, n0, _SKS,
  0,
  [_a, _cA, _ta],
  [0, 0, 128 | 0]
];
export var StreamSession$: StaticStructureSchema = [3, n0, _SS,
  0,
  [_sI, _sT, _eTn, _cha, _iC, _iCn, _rCe, _tE],
  [0, 5, 5, [() => Channel$, 0], () => IngestConfiguration$, () => IngestConfigurations$, () => RecordingConfiguration$, () => StreamEvents]
];
export var StreamSessionSummary$: StaticStructureSchema = [3, n0, _SSS,
  0,
  [_sI, _sT, _eTn, _hEE],
  [0, 5, 5, 2]
];
export var StreamSummary$: StaticStructureSchema = [3, n0, _SSt,
  0,
  [_cA, _sI, _sta, _h, _vCi, _sT],
  [0, 0, 0, 0, 1, 5]
];
export var StreamUnavailable$: StaticErrorSchema = [-3, n0, _SU,
  { [_e]: _se, [_hE]: 503 },
  [_eM],
  [0]
];
TypeRegistry.for(n0).registerError(StreamUnavailable$, StreamUnavailable);
export var TagResourceRequest$: StaticStructureSchema = [3, n0, _TRR,
  0,
  [_rA, _ta],
  [[0, 1], 128 | 0]
];
export var TagResourceResponse$: StaticStructureSchema = [3, n0, _TRRa,
  0,
  [],
  []
];
export var ThrottlingException$: StaticErrorSchema = [-3, n0, _TE,
  { [_e]: _c, [_hE]: 429 },
  [_eM],
  [0]
];
TypeRegistry.for(n0).registerError(ThrottlingException$, ThrottlingException);
export var ThumbnailConfiguration$: StaticStructureSchema = [3, n0, _TC,
  0,
  [_rM, _tIS, _re, _sto],
  [0, 1, 0, 64 | 0]
];
export var UntagResourceRequest$: StaticStructureSchema = [3, n0, _URR,
  0,
  [_rA, _tK],
  [[0, 1], [64 | 0, { [_hQ]: _tK }]]
];
export var UntagResourceResponse$: StaticStructureSchema = [3, n0, _URRn,
  0,
  [],
  []
];
export var UpdateChannelRequest$: StaticStructureSchema = [3, n0, _UCR,
  0,
  [_a, _n, _lM, _ty, _au, _rCA, _iI, _p, _pRPA, _mIC, _cF],
  [0, 0, 0, 0, 2, 0, 2, 0, 0, () => MultitrackInputConfiguration$, 0]
];
export var UpdateChannelResponse$: StaticStructureSchema = [3, n0, _UCRp,
  0,
  [_cha],
  [[() => Channel$, 0]]
];
export var UpdatePlaybackRestrictionPolicyRequest$: StaticStructureSchema = [3, n0, _UPRPR,
  0,
  [_a, _aC, _aO, _eSOE, _n],
  [0, 64 | 0, 64 | 0, 2, 0]
];
export var UpdatePlaybackRestrictionPolicyResponse$: StaticStructureSchema = [3, n0, _UPRPRp,
  0,
  [_pRP],
  [() => PlaybackRestrictionPolicy$]
];
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE,
  { [_e]: _c, [_hE]: 400 },
  [_eM],
  [0]
];
TypeRegistry.for(n0).registerError(ValidationException$, ValidationException);
export var VideoConfiguration$: StaticStructureSchema = [3, n0, _VC,
  0,
  [_aP, _aL, _co, _enc, _tB, _tF, _vH, _vW, _l, _t, _pr],
  [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0]
];
var __Unit = "unit" as const;
export var IvsServiceException$: StaticErrorSchema = [-3, _sm, "IvsServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(IvsServiceException$, IvsServiceException);
var AudioConfigurationList: StaticListSchema = [1, n0, _ACL,
  0, () => AudioConfiguration$
];
var BatchErrors: StaticListSchema = [1, n0, _BEa,
  0, () => BatchError$
];
var BatchStartViewerSessionRevocationErrors: StaticListSchema = [1, n0, _BSVSREa,
  0, () => BatchStartViewerSessionRevocationError$
];
var BatchStartViewerSessionRevocationViewerSessionList: StaticListSchema = [1, n0, _BSVSRVSL,
  0, () => BatchStartViewerSessionRevocationViewerSession$
];
var ChannelArnList = 64 | 0;
var ChannelList: StaticListSchema = [1, n0, _CL,
  0, () => ChannelSummary$
];
var Channels: StaticListSchema = [1, n0, _Ch,
  0, [() => Channel$,
    0]
];
var PlaybackKeyPairList: StaticListSchema = [1, n0, _PKPL,
  0, () => PlaybackKeyPairSummary$
];
var PlaybackRestrictionPolicyAllowedCountryList = 64 | 0;
var PlaybackRestrictionPolicyAllowedOriginList = 64 | 0;
var PlaybackRestrictionPolicyList: StaticListSchema = [1, n0, _PRPL,
  0, () => PlaybackRestrictionPolicySummary$
];
var RecordingConfigurationList: StaticListSchema = [1, n0, _RCL,
  0, () => RecordingConfigurationSummary$
];
var RenditionConfigurationRenditionList = 64 | 0;
var StreamEvents: StaticListSchema = [1, n0, _SEt,
  0, () => StreamEvent$
];
var StreamKeyArnList = 64 | 0;
var StreamKeyList: StaticListSchema = [1, n0, _SKL,
  0, () => StreamKeySummary$
];
var StreamKeys: StaticListSchema = [1, n0, _SKt,
  0, [() => StreamKey$,
    0]
];
var StreamList: StaticListSchema = [1, n0, _SL,
  0, () => StreamSummary$
];
var StreamSessionList: StaticListSchema = [1, n0, _SSL,
  0, () => StreamSessionSummary$
];
var TagKeyList = 64 | 0;
var ThumbnailConfigurationStorageList = 64 | 0;
var VideoConfigurationList: StaticListSchema = [1, n0, _VCL,
  0, () => VideoConfiguration$
];
var Tags = 128 | 0;
export var BatchGetChannel$: StaticOperationSchema = [9, n0, _BGC,
  { [_ht]: ["POST", "/BatchGetChannel", 200] }, () => BatchGetChannelRequest$, () => BatchGetChannelResponse$
];
export var BatchGetStreamKey$: StaticOperationSchema = [9, n0, _BGSK,
  { [_ht]: ["POST", "/BatchGetStreamKey", 200] }, () => BatchGetStreamKeyRequest$, () => BatchGetStreamKeyResponse$
];
export var BatchStartViewerSessionRevocation$: StaticOperationSchema = [9, n0, _BSVSR,
  { [_ht]: ["POST", "/BatchStartViewerSessionRevocation", 200] }, () => BatchStartViewerSessionRevocationRequest$, () => BatchStartViewerSessionRevocationResponse$
];
export var CreateChannel$: StaticOperationSchema = [9, n0, _CC,
  { [_ht]: ["POST", "/CreateChannel", 200] }, () => CreateChannelRequest$, () => CreateChannelResponse$
];
export var CreatePlaybackRestrictionPolicy$: StaticOperationSchema = [9, n0, _CPRP,
  { [_ht]: ["POST", "/CreatePlaybackRestrictionPolicy", 200] }, () => CreatePlaybackRestrictionPolicyRequest$, () => CreatePlaybackRestrictionPolicyResponse$
];
export var CreateRecordingConfiguration$: StaticOperationSchema = [9, n0, _CRC,
  { [_ht]: ["POST", "/CreateRecordingConfiguration", 200] }, () => CreateRecordingConfigurationRequest$, () => CreateRecordingConfigurationResponse$
];
export var CreateStreamKey$: StaticOperationSchema = [9, n0, _CSK,
  { [_ht]: ["POST", "/CreateStreamKey", 200] }, () => CreateStreamKeyRequest$, () => CreateStreamKeyResponse$
];
export var DeleteChannel$: StaticOperationSchema = [9, n0, _DCe,
  { [_ht]: ["POST", "/DeleteChannel", 204] }, () => DeleteChannelRequest$, () => __Unit
];
export var DeletePlaybackKeyPair$: StaticOperationSchema = [9, n0, _DPKP,
  { [_ht]: ["POST", "/DeletePlaybackKeyPair", 200] }, () => DeletePlaybackKeyPairRequest$, () => DeletePlaybackKeyPairResponse$
];
export var DeletePlaybackRestrictionPolicy$: StaticOperationSchema = [9, n0, _DPRP,
  { [_ht]: ["POST", "/DeletePlaybackRestrictionPolicy", 204] }, () => DeletePlaybackRestrictionPolicyRequest$, () => __Unit
];
export var DeleteRecordingConfiguration$: StaticOperationSchema = [9, n0, _DRC,
  { [_ht]: ["POST", "/DeleteRecordingConfiguration", 204] }, () => DeleteRecordingConfigurationRequest$, () => __Unit
];
export var DeleteStreamKey$: StaticOperationSchema = [9, n0, _DSK,
  { [_ht]: ["POST", "/DeleteStreamKey", 204] }, () => DeleteStreamKeyRequest$, () => __Unit
];
export var GetChannel$: StaticOperationSchema = [9, n0, _GC,
  { [_ht]: ["POST", "/GetChannel", 200] }, () => GetChannelRequest$, () => GetChannelResponse$
];
export var GetPlaybackKeyPair$: StaticOperationSchema = [9, n0, _GPKP,
  { [_ht]: ["POST", "/GetPlaybackKeyPair", 200] }, () => GetPlaybackKeyPairRequest$, () => GetPlaybackKeyPairResponse$
];
export var GetPlaybackRestrictionPolicy$: StaticOperationSchema = [9, n0, _GPRP,
  { [_ht]: ["POST", "/GetPlaybackRestrictionPolicy", 200] }, () => GetPlaybackRestrictionPolicyRequest$, () => GetPlaybackRestrictionPolicyResponse$
];
export var GetRecordingConfiguration$: StaticOperationSchema = [9, n0, _GRC,
  { [_ht]: ["POST", "/GetRecordingConfiguration", 200] }, () => GetRecordingConfigurationRequest$, () => GetRecordingConfigurationResponse$
];
export var GetStream$: StaticOperationSchema = [9, n0, _GS,
  { [_ht]: ["POST", "/GetStream", 200] }, () => GetStreamRequest$, () => GetStreamResponse$
];
export var GetStreamKey$: StaticOperationSchema = [9, n0, _GSK,
  { [_ht]: ["POST", "/GetStreamKey", 200] }, () => GetStreamKeyRequest$, () => GetStreamKeyResponse$
];
export var GetStreamSession$: StaticOperationSchema = [9, n0, _GSS,
  { [_ht]: ["POST", "/GetStreamSession", 200] }, () => GetStreamSessionRequest$, () => GetStreamSessionResponse$
];
export var ImportPlaybackKeyPair$: StaticOperationSchema = [9, n0, _IPKP,
  { [_ht]: ["POST", "/ImportPlaybackKeyPair", 200] }, () => ImportPlaybackKeyPairRequest$, () => ImportPlaybackKeyPairResponse$
];
export var ListChannels$: StaticOperationSchema = [9, n0, _LC,
  { [_ht]: ["POST", "/ListChannels", 200] }, () => ListChannelsRequest$, () => ListChannelsResponse$
];
export var ListPlaybackKeyPairs$: StaticOperationSchema = [9, n0, _LPKP,
  { [_ht]: ["POST", "/ListPlaybackKeyPairs", 200] }, () => ListPlaybackKeyPairsRequest$, () => ListPlaybackKeyPairsResponse$
];
export var ListPlaybackRestrictionPolicies$: StaticOperationSchema = [9, n0, _LPRP,
  { [_ht]: ["POST", "/ListPlaybackRestrictionPolicies", 200] }, () => ListPlaybackRestrictionPoliciesRequest$, () => ListPlaybackRestrictionPoliciesResponse$
];
export var ListRecordingConfigurations$: StaticOperationSchema = [9, n0, _LRC,
  { [_ht]: ["POST", "/ListRecordingConfigurations", 200] }, () => ListRecordingConfigurationsRequest$, () => ListRecordingConfigurationsResponse$
];
export var ListStreamKeys$: StaticOperationSchema = [9, n0, _LSK,
  { [_ht]: ["POST", "/ListStreamKeys", 200] }, () => ListStreamKeysRequest$, () => ListStreamKeysResponse$
];
export var ListStreams$: StaticOperationSchema = [9, n0, _LS,
  { [_ht]: ["POST", "/ListStreams", 200] }, () => ListStreamsRequest$, () => ListStreamsResponse$
];
export var ListStreamSessions$: StaticOperationSchema = [9, n0, _LSS,
  { [_ht]: ["POST", "/ListStreamSessions", 200] }, () => ListStreamSessionsRequest$, () => ListStreamSessionsResponse$
];
export var ListTagsForResource$: StaticOperationSchema = [9, n0, _LTFR,
  { [_ht]: ["GET", "/tags/{resourceArn}", 200] }, () => ListTagsForResourceRequest$, () => ListTagsForResourceResponse$
];
export var PutMetadata$: StaticOperationSchema = [9, n0, _PM,
  { [_ht]: ["POST", "/PutMetadata", 204] }, () => PutMetadataRequest$, () => __Unit
];
export var StartViewerSessionRevocation$: StaticOperationSchema = [9, n0, _SVSR,
  { [_ht]: ["POST", "/StartViewerSessionRevocation", 200] }, () => StartViewerSessionRevocationRequest$, () => StartViewerSessionRevocationResponse$
];
export var StopStream$: StaticOperationSchema = [9, n0, _SSto,
  { [_ht]: ["POST", "/StopStream", 200] }, () => StopStreamRequest$, () => StopStreamResponse$
];
export var TagResource$: StaticOperationSchema = [9, n0, _TR,
  { [_ht]: ["POST", "/tags/{resourceArn}", 200] }, () => TagResourceRequest$, () => TagResourceResponse$
];
export var UntagResource$: StaticOperationSchema = [9, n0, _UR,
  { [_ht]: ["DELETE", "/tags/{resourceArn}", 200] }, () => UntagResourceRequest$, () => UntagResourceResponse$
];
export var UpdateChannel$: StaticOperationSchema = [9, n0, _UC,
  { [_ht]: ["POST", "/UpdateChannel", 200] }, () => UpdateChannelRequest$, () => UpdateChannelResponse$
];
export var UpdatePlaybackRestrictionPolicy$: StaticOperationSchema = [9, n0, _UPRP,
  { [_ht]: ["POST", "/UpdatePlaybackRestrictionPolicy", 200] }, () => UpdatePlaybackRestrictionPolicyRequest$, () => UpdatePlaybackRestrictionPolicyResponse$
];
