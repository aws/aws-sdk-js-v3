const _AC = "AssetContract";
const _ACL = "AssetContractList";
const _ADE = "AccessDeniedException";
const _AIF = "AddressIdentifierFilter";
const _BGTB = "BatchGetTokenBalance";
const _BGTBE = "BatchGetTokenBalanceErrors";
const _BGTBEI = "BatchGetTokenBalanceErrorItem";
const _BGTBI = "BatchGetTokenBalanceInput";
const _BGTBII = "BatchGetTokenBalanceInputItem";
const _BGTBO = "BatchGetTokenBalanceOutput";
const _BGTBOI = "BatchGetTokenBalanceOutputItem";
const _BGTBOL = "BatchGetTokenBalanceOutputList";
const _BI = "BlockchainInstant";
const _CF = "ContractFilter";
const _CI = "ContractIdentifier";
const _CM = "ContractMetadata";
const _CSF = "ConfirmationStatusFilter";
const _GAC = "GetAssetContract";
const _GACI = "GetAssetContractInput";
const _GACO = "GetAssetContractOutput";
const _GT = "GetTransaction";
const _GTB = "GetTokenBalance";
const _GTBI = "GetTokenBalanceInput";
const _GTBIL = "GetTokenBalanceInputList";
const _GTBO = "GetTokenBalanceOutput";
const _GTI = "GetTransactionInput";
const _GTO = "GetTransactionOutput";
const _ISE = "InternalServerException";
const _LAC = "ListAssetContracts";
const _LACI = "ListAssetContractsInput";
const _LACO = "ListAssetContractsOutput";
const _LFTE = "ListFilteredTransactionEvents";
const _LFTEI = "ListFilteredTransactionEventsInput";
const _LFTEO = "ListFilteredTransactionEventsOutput";
const _LFTES = "ListFilteredTransactionEventsSort";
const _LT = "ListTransactions";
const _LTB = "ListTokenBalances";
const _LTBI = "ListTokenBalancesInput";
const _LTBO = "ListTokenBalancesOutput";
const _LTE = "ListTransactionEvents";
const _LTEI = "ListTransactionEventsInput";
const _LTEO = "ListTransactionEventsOutput";
const _LTI = "ListTransactionsInput";
const _LTO = "ListTransactionsOutput";
const _LTS = "ListTransactionsSort";
const _OF = "OwnerFilter";
const _OI = "OwnerIdentifier";
const _RA = "Retry-After";
const _RNFE = "ResourceNotFoundException";
const _SQEE = "ServiceQuotaExceededException";
const _T = "Transaction";
const _TB = "TokenBalance";
const _TBL = "TokenBalanceList";
const _TE = "ThrottlingException";
const _TEL = "TransactionEventList";
const _TEr = "TransactionEvent";
const _TF = "TimeFilter";
const _TFo = "TokenFilter";
const _TI = "TokenIdentifier";
const _TOI = "TransactionOutputItem";
const _TOL = "TransactionOutputList";
const _VE = "ValidationException";
const _VEF = "ValidationExceptionField";
const _VEFL = "ValidationExceptionFieldList";
const _VF = "VoutFilter";
const _a = "address";
const _aBI = "atBlockchainInstant";
const _aIF = "addressIdentifierFilter";
const _b = "balance";
const _bH = "blockHash";
const _bI = "blockchainInstant";
const _bN = "blockNumber";
const _c = "client";
const _cA = "contractAddress";
const _cF = "contractFilter";
const _cGU = "cumulativeGasUsed";
const _cI = "contractIdentifier";
const _cS = "confirmationStatus";
const _cSF = "confirmationStatusFilter";
const _co = "contracts";
const _d = "decimals";
const _dA = "deployerAddress";
const _e = "error";
const _eC = "errorCode";
const _eGP = "effectiveGasPrice";
const _eM = "errorMessage";
const _eS = "executionStatus";
const _eT = "errorType";
const _eTv = "eventType";
const _er = "errors";
const _ev = "events";
const _f = "from";
const _fBI = "fromBlockchainInstant";
const _fL = "fieldList";
const _gTBI = "getTokenBalanceInputs";
const _gU = "gasUsed";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _i = "include";
const _lUT = "lastUpdatedTime";
const _m = "message";
const _mR = "maxResults";
const _me = "metadata";
const _n = "network";
const _nOT = "numberOfTransactions";
const _nT = "nextToken";
const _na = "name";
const _oF = "ownerFilter";
const _oI = "ownerIdentifier";
const _qC = "quotaCode";
const _r = "reason";
const _rAS = "retryAfterSeconds";
const _rI = "resourceId";
const _rT = "resourceType";
const _s = "symbol";
const _sB = "sortBy";
const _sC = "serviceCode";
const _sO = "sortOrder";
const _sR = "signatureR";
const _sS = "signatureS";
const _sV = "signatureV";
const _sVI = "spentVoutIndex";
const _sVTH = "spentVoutTransactionHash";
const _sVTI = "spentVoutTransactionId";
const _se = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.managedblockchainquery";
const _so = "sort";
const _t = "time";
const _tB = "tokenBalances";
const _tBI = "toBlockchainInstant";
const _tETA = "transactionEventToAddress";
const _tF = "timeFilter";
const _tFo = "tokenFilter";
const _tFr = "transactionFee";
const _tH = "transactionHash";
const _tI = "tokenIdentifier";
const _tIo = "tokenId";
const _tIr = "transactionId";
const _tIra = "transactionIndex";
const _tS = "tokenStandard";
const _tT = "transactionTimestamp";
const _to = "to";
const _tr = "transaction";
const _tra = "transactions";
const _v = "value";
const _vF = "voutFilter";
const _vI = "voutIndex";
const _vS = "voutSpent";
const n0 = "com.amazonaws.managedblockchainquery";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import {
  AccessDeniedException,
  InternalServerException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ThrottlingException,
  ValidationException,
} from "../models/errors";
import { ManagedBlockchainQueryServiceException } from "../models/ManagedBlockchainQueryServiceException";

/* eslint no-var: 0 */
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE,
  { [_e]: _c, [_hE]: 403 },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(AccessDeniedException$, AccessDeniedException);
export var AddressIdentifierFilter$: StaticStructureSchema = [3, n0, _AIF,
  0,
  [_tETA],
  [64 | 0]
];
export var AssetContract$: StaticStructureSchema = [3, n0, _AC,
  0,
  [_cI, _tS, _dA],
  [() => ContractIdentifier$, 0, 0]
];
export var BatchGetTokenBalanceErrorItem$: StaticStructureSchema = [3, n0, _BGTBEI,
  0,
  [_tI, _oI, _aBI, _eC, _eM, _eT],
  [() => TokenIdentifier$, () => OwnerIdentifier$, () => BlockchainInstant$, 0, 0, 0]
];
export var BatchGetTokenBalanceInput$: StaticStructureSchema = [3, n0, _BGTBI,
  0,
  [_gTBI],
  [() => GetTokenBalanceInputList]
];
export var BatchGetTokenBalanceInputItem$: StaticStructureSchema = [3, n0, _BGTBII,
  0,
  [_tI, _oI, _aBI],
  [() => TokenIdentifier$, () => OwnerIdentifier$, () => BlockchainInstant$]
];
export var BatchGetTokenBalanceOutput$: StaticStructureSchema = [3, n0, _BGTBO,
  0,
  [_tB, _er],
  [() => BatchGetTokenBalanceOutputList, () => BatchGetTokenBalanceErrors]
];
export var BatchGetTokenBalanceOutputItem$: StaticStructureSchema = [3, n0, _BGTBOI,
  0,
  [_oI, _tI, _b, _aBI, _lUT],
  [() => OwnerIdentifier$, () => TokenIdentifier$, 0, () => BlockchainInstant$, () => BlockchainInstant$]
];
export var BlockchainInstant$: StaticStructureSchema = [3, n0, _BI,
  0,
  [_t],
  [4]
];
export var ConfirmationStatusFilter$: StaticStructureSchema = [3, n0, _CSF,
  0,
  [_i],
  [64 | 0]
];
export var ContractFilter$: StaticStructureSchema = [3, n0, _CF,
  0,
  [_n, _tS, _dA],
  [0, 0, 0]
];
export var ContractIdentifier$: StaticStructureSchema = [3, n0, _CI,
  0,
  [_n, _cA],
  [0, 0]
];
export var ContractMetadata$: StaticStructureSchema = [3, n0, _CM,
  0,
  [_na, _s, _d],
  [0, 0, 1]
];
export var GetAssetContractInput$: StaticStructureSchema = [3, n0, _GACI,
  0,
  [_cI],
  [() => ContractIdentifier$]
];
export var GetAssetContractOutput$: StaticStructureSchema = [3, n0, _GACO,
  0,
  [_cI, _tS, _dA, _me],
  [() => ContractIdentifier$, 0, 0, () => ContractMetadata$]
];
export var GetTokenBalanceInput$: StaticStructureSchema = [3, n0, _GTBI,
  0,
  [_tI, _oI, _aBI],
  [() => TokenIdentifier$, () => OwnerIdentifier$, () => BlockchainInstant$]
];
export var GetTokenBalanceOutput$: StaticStructureSchema = [3, n0, _GTBO,
  0,
  [_oI, _tI, _b, _aBI, _lUT],
  [() => OwnerIdentifier$, () => TokenIdentifier$, 0, () => BlockchainInstant$, () => BlockchainInstant$]
];
export var GetTransactionInput$: StaticStructureSchema = [3, n0, _GTI,
  0,
  [_tH, _tIr, _n],
  [0, 0, 0]
];
export var GetTransactionOutput$: StaticStructureSchema = [3, n0, _GTO,
  0,
  [_tr],
  [() => Transaction$]
];
export var InternalServerException$: StaticErrorSchema = [-3, n0, _ISE,
  { [_e]: _se, [_hE]: 500 },
  [_m, _rAS],
  [0, [1, { [_hH]: _RA }]]
];
TypeRegistry.for(n0).registerError(InternalServerException$, InternalServerException);
export var ListAssetContractsInput$: StaticStructureSchema = [3, n0, _LACI,
  0,
  [_cF, _nT, _mR],
  [() => ContractFilter$, 0, 1]
];
export var ListAssetContractsOutput$: StaticStructureSchema = [3, n0, _LACO,
  0,
  [_co, _nT],
  [() => AssetContractList, 0]
];
export var ListFilteredTransactionEventsInput$: StaticStructureSchema = [3, n0, _LFTEI,
  0,
  [_n, _aIF, _tF, _vF, _cSF, _so, _nT, _mR],
  [0, () => AddressIdentifierFilter$, () => TimeFilter$, () => VoutFilter$, () => ConfirmationStatusFilter$, () => ListFilteredTransactionEventsSort$, 0, 1]
];
export var ListFilteredTransactionEventsOutput$: StaticStructureSchema = [3, n0, _LFTEO,
  0,
  [_ev, _nT],
  [() => TransactionEventList, 0]
];
export var ListFilteredTransactionEventsSort$: StaticStructureSchema = [3, n0, _LFTES,
  0,
  [_sB, _sO],
  [0, 0]
];
export var ListTokenBalancesInput$: StaticStructureSchema = [3, n0, _LTBI,
  0,
  [_oF, _tFo, _nT, _mR],
  [() => OwnerFilter$, () => TokenFilter$, 0, 1]
];
export var ListTokenBalancesOutput$: StaticStructureSchema = [3, n0, _LTBO,
  0,
  [_tB, _nT],
  [() => TokenBalanceList, 0]
];
export var ListTransactionEventsInput$: StaticStructureSchema = [3, n0, _LTEI,
  0,
  [_tH, _tIr, _n, _nT, _mR],
  [0, 0, 0, 0, 1]
];
export var ListTransactionEventsOutput$: StaticStructureSchema = [3, n0, _LTEO,
  0,
  [_ev, _nT],
  [() => TransactionEventList, 0]
];
export var ListTransactionsInput$: StaticStructureSchema = [3, n0, _LTI,
  0,
  [_a, _n, _fBI, _tBI, _so, _nT, _mR, _cSF],
  [0, 0, () => BlockchainInstant$, () => BlockchainInstant$, () => ListTransactionsSort$, 0, 1, () => ConfirmationStatusFilter$]
];
export var ListTransactionsOutput$: StaticStructureSchema = [3, n0, _LTO,
  0,
  [_tra, _nT],
  [() => TransactionOutputList, 0]
];
export var ListTransactionsSort$: StaticStructureSchema = [3, n0, _LTS,
  0,
  [_sB, _sO],
  [0, 0]
];
export var OwnerFilter$: StaticStructureSchema = [3, n0, _OF,
  0,
  [_a],
  [0]
];
export var OwnerIdentifier$: StaticStructureSchema = [3, n0, _OI,
  0,
  [_a],
  [0]
];
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE,
  { [_e]: _c, [_hE]: 404 },
  [_m, _rI, _rT],
  [0, 0, 0]
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var ServiceQuotaExceededException$: StaticErrorSchema = [-3, n0, _SQEE,
  { [_e]: _c, [_hE]: 402 },
  [_m, _rI, _rT, _sC, _qC],
  [0, 0, 0, 0, 0]
];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException$, ServiceQuotaExceededException);
export var ThrottlingException$: StaticErrorSchema = [-3, n0, _TE,
  { [_e]: _c, [_hE]: 429 },
  [_m, _sC, _qC, _rAS],
  [0, 0, 0, [1, { [_hH]: _RA }]]
];
TypeRegistry.for(n0).registerError(ThrottlingException$, ThrottlingException);
export var TimeFilter$: StaticStructureSchema = [3, n0, _TF,
  0,
  [_f, _to],
  [() => BlockchainInstant$, () => BlockchainInstant$]
];
export var TokenBalance$: StaticStructureSchema = [3, n0, _TB,
  0,
  [_oI, _tI, _b, _aBI, _lUT],
  [() => OwnerIdentifier$, () => TokenIdentifier$, 0, () => BlockchainInstant$, () => BlockchainInstant$]
];
export var TokenFilter$: StaticStructureSchema = [3, n0, _TFo,
  0,
  [_n, _cA, _tIo],
  [0, 0, 0]
];
export var TokenIdentifier$: StaticStructureSchema = [3, n0, _TI,
  0,
  [_n, _cA, _tIo],
  [0, 0, 0]
];
export var Transaction$: StaticStructureSchema = [3, n0, _T,
  0,
  [_n, _bH, _tH, _bN, _tT, _tIra, _nOT, _to, _f, _cA, _gU, _cGU, _eGP, _sV, _sR, _sS, _tFr, _tIr, _cS, _eS],
  [0, 0, 0, 0, 4, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
];
export var TransactionEvent$: StaticStructureSchema = [3, n0, _TEr,
  0,
  [_n, _tH, _eTv, _f, _to, _v, _cA, _tIo, _tIr, _vI, _vS, _sVTI, _sVTH, _sVI, _bI, _cS],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 1, () => BlockchainInstant$, 0]
];
export var TransactionOutputItem$: StaticStructureSchema = [3, n0, _TOI,
  0,
  [_tH, _tIr, _n, _tT, _cS],
  [0, 0, 0, 4, 0]
];
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE,
  { [_e]: _c, [_hE]: 400 },
  [_m, _r, _fL],
  [0, 0, () => ValidationExceptionFieldList]
];
TypeRegistry.for(n0).registerError(ValidationException$, ValidationException);
export var ValidationExceptionField$: StaticStructureSchema = [3, n0, _VEF,
  0,
  [_na, _m],
  [0, 0]
];
export var VoutFilter$: StaticStructureSchema = [3, n0, _VF,
  0,
  [_vS],
  [2]
];
export var ManagedBlockchainQueryServiceException$: StaticErrorSchema = [-3, _sm, "ManagedBlockchainQueryServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(ManagedBlockchainQueryServiceException$, ManagedBlockchainQueryServiceException);
var AssetContractList: StaticListSchema = [1, n0, _ACL,
  0, () => AssetContract$
];
var BatchGetTokenBalanceErrors: StaticListSchema = [1, n0, _BGTBE,
  0, () => BatchGetTokenBalanceErrorItem$
];
var BatchGetTokenBalanceOutputList: StaticListSchema = [1, n0, _BGTBOL,
  0, () => BatchGetTokenBalanceOutputItem$
];
var ChainAddresses = 64 | 0;
var ConfirmationStatusIncludeList = 64 | 0;
var GetTokenBalanceInputList: StaticListSchema = [1, n0, _GTBIL,
  0, () => BatchGetTokenBalanceInputItem$
];
var TokenBalanceList: StaticListSchema = [1, n0, _TBL,
  0, () => TokenBalance$
];
var TransactionEventList: StaticListSchema = [1, n0, _TEL,
  0, () => TransactionEvent$
];
var TransactionOutputList: StaticListSchema = [1, n0, _TOL,
  0, () => TransactionOutputItem$
];
var ValidationExceptionFieldList: StaticListSchema = [1, n0, _VEFL,
  0, () => ValidationExceptionField$
];
export var BatchGetTokenBalance$: StaticOperationSchema = [9, n0, _BGTB,
  { [_h]: ["POST", "/batch-get-token-balance", 200] }, () => BatchGetTokenBalanceInput$, () => BatchGetTokenBalanceOutput$
];
export var GetAssetContract$: StaticOperationSchema = [9, n0, _GAC,
  { [_h]: ["POST", "/get-asset-contract", 200] }, () => GetAssetContractInput$, () => GetAssetContractOutput$
];
export var GetTokenBalance$: StaticOperationSchema = [9, n0, _GTB,
  { [_h]: ["POST", "/get-token-balance", 200] }, () => GetTokenBalanceInput$, () => GetTokenBalanceOutput$
];
export var GetTransaction$: StaticOperationSchema = [9, n0, _GT,
  { [_h]: ["POST", "/get-transaction", 200] }, () => GetTransactionInput$, () => GetTransactionOutput$
];
export var ListAssetContracts$: StaticOperationSchema = [9, n0, _LAC,
  { [_h]: ["POST", "/list-asset-contracts", 200] }, () => ListAssetContractsInput$, () => ListAssetContractsOutput$
];
export var ListFilteredTransactionEvents$: StaticOperationSchema = [9, n0, _LFTE,
  { [_h]: ["POST", "/list-filtered-transaction-events", 200] }, () => ListFilteredTransactionEventsInput$, () => ListFilteredTransactionEventsOutput$
];
export var ListTokenBalances$: StaticOperationSchema = [9, n0, _LTB,
  { [_h]: ["POST", "/list-token-balances", 200] }, () => ListTokenBalancesInput$, () => ListTokenBalancesOutput$
];
export var ListTransactionEvents$: StaticOperationSchema = [9, n0, _LTE,
  { [_h]: ["POST", "/list-transaction-events", 200] }, () => ListTransactionEventsInput$, () => ListTransactionEventsOutput$
];
export var ListTransactions$: StaticOperationSchema = [9, n0, _LT,
  { [_h]: ["POST", "/list-transactions", 200] }, () => ListTransactionsInput$, () => ListTransactionsOutput$
];
