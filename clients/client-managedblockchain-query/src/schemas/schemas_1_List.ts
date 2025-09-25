// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";
import {
  _a,
  _aBI,
  _AC,
  _ACL,
  _ADE,
  _AIF,
  _aIF,
  _b,
  _BGTB,
  _BGTBE,
  _BGTBEI,
  _BGTBI,
  _BGTBII,
  _BGTBO,
  _BGTBOI,
  _BGTBOL,
  _bH,
  _BI,
  _bI,
  _bN,
  _c,
  _cA,
  _CF,
  _cF,
  _cGU,
  _CI,
  _cI,
  _CM,
  _co,
  _cS,
  _CSF,
  _cSF,
  _d,
  _dA,
  _e,
  _eC,
  _eGP,
  _eM,
  _er,
  _eS,
  _eT,
  _eTv,
  _ev,
  _f,
  _fBI,
  _fL,
  _GAC,
  _GACI,
  _GACO,
  _GT,
  _GTB,
  _GTBI,
  _gTBI,
  _GTBIL,
  _GTBO,
  _GTI,
  _GTO,
  _gU,
  _h,
  _hE,
  _hH,
  _i,
  _ISE,
  _LAC,
  _LACI,
  _LACO,
  _LFTE,
  _LFTEI,
  _LFTEO,
  _LFTES,
  _LT,
  _LTB,
  _LTBI,
  _LTBO,
  _LTE,
  _LTEI,
  _LTEO,
  _LTI,
  _LTO,
  _LTS,
  _lUT,
  _m,
  _me,
  _mR,
  _n,
  _na,
  _nOT,
  _nT,
  _OF,
  _oF,
  _OI,
  _oI,
  _qC,
  _r,
  _RA,
  _rAS,
  _rI,
  _RNFE,
  _rT,
  _s,
  _sB,
  _sC,
  _se,
  _sO,
  _so,
  _SQEE,
  _sR,
  _sS,
  _sV,
  _sVI,
  _sVTH,
  _sVTI,
  _T,
  _t,
  _TB,
  _tB,
  _tBI,
  _TBL,
  _TE,
  _TEL,
  _TEr,
  _tETA,
  _TF,
  _tF,
  _TFo,
  _tFo,
  _tFr,
  _tH,
  _TI,
  _tI,
  _tIo,
  _tIr,
  _tIra,
  _to,
  _TOI,
  _TOL,
  _tr,
  _tra,
  _tS,
  _tT,
  _v,
  _VE,
  _VEF,
  _VEFL,
  _VF,
  _vF,
  _vI,
  _vS,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],

  __AccessDeniedException
);
export var AddressIdentifierFilter = struct(n0, _AIF, 0, [_tETA], [64 | 0]);
export var AssetContract = struct(n0, _AC, 0, [_cI, _tS, _dA], [() => ContractIdentifier, 0, 0]);
export var BatchGetTokenBalanceErrorItem = struct(
  n0,
  _BGTBEI,
  0,
  [_tI, _oI, _aBI, _eC, _eM, _eT],
  [() => TokenIdentifier, () => OwnerIdentifier, () => BlockchainInstant, 0, 0, 0]
);
export var BatchGetTokenBalanceInput = struct(n0, _BGTBI, 0, [_gTBI], [() => GetTokenBalanceInputList]);
export var BatchGetTokenBalanceInputItem = struct(
  n0,
  _BGTBII,
  0,
  [_tI, _oI, _aBI],
  [() => TokenIdentifier, () => OwnerIdentifier, () => BlockchainInstant]
);
export var BatchGetTokenBalanceOutput = struct(
  n0,
  _BGTBO,
  0,
  [_tB, _er],
  [() => BatchGetTokenBalanceOutputList, () => BatchGetTokenBalanceErrors]
);
export var BatchGetTokenBalanceOutputItem = struct(
  n0,
  _BGTBOI,
  0,
  [_oI, _tI, _b, _aBI, _lUT],
  [() => OwnerIdentifier, () => TokenIdentifier, 0, () => BlockchainInstant, () => BlockchainInstant]
);
export var BlockchainInstant = struct(n0, _BI, 0, [_t], [4]);
export var ConfirmationStatusFilter = struct(n0, _CSF, 0, [_i], [64 | 0]);
export var ContractFilter = struct(n0, _CF, 0, [_n, _tS, _dA], [0, 0, 0]);
export var ContractIdentifier = struct(n0, _CI, 0, [_n, _cA], [0, 0]);
export var ContractMetadata = struct(n0, _CM, 0, [_na, _s, _d], [0, 0, 1]);
export var GetAssetContractInput = struct(n0, _GACI, 0, [_cI], [() => ContractIdentifier]);
export var GetAssetContractOutput = struct(
  n0,
  _GACO,
  0,
  [_cI, _tS, _dA, _me],
  [() => ContractIdentifier, 0, 0, () => ContractMetadata]
);
export var GetTokenBalanceInput = struct(
  n0,
  _GTBI,
  0,
  [_tI, _oI, _aBI],
  [() => TokenIdentifier, () => OwnerIdentifier, () => BlockchainInstant]
);
export var GetTokenBalanceOutput = struct(
  n0,
  _GTBO,
  0,
  [_oI, _tI, _b, _aBI, _lUT],
  [() => OwnerIdentifier, () => TokenIdentifier, 0, () => BlockchainInstant, () => BlockchainInstant]
);
export var GetTransactionInput = struct(n0, _GTI, 0, [_tH, _tIr, _n], [0, 0, 0]);
export var GetTransactionOutput = struct(n0, _GTO, 0, [_tr], [() => Transaction]);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_m, _rAS],
  [
    0,
    [
      1,
      {
        [_hH]: _RA,
      },
    ],
  ],

  __InternalServerException
);
export var ListAssetContractsInput = struct(n0, _LACI, 0, [_cF, _nT, _mR], [() => ContractFilter, 0, 1]);
export var ListAssetContractsOutput = struct(n0, _LACO, 0, [_co, _nT], [() => AssetContractList, 0]);
export var ListFilteredTransactionEventsInput = struct(
  n0,
  _LFTEI,
  0,
  [_n, _aIF, _tF, _vF, _cSF, _so, _nT, _mR],
  [
    0,
    () => AddressIdentifierFilter,
    () => TimeFilter,
    () => VoutFilter,
    () => ConfirmationStatusFilter,
    () => ListFilteredTransactionEventsSort,
    0,
    1,
  ]
);
export var ListFilteredTransactionEventsOutput = struct(n0, _LFTEO, 0, [_ev, _nT], [() => TransactionEventList, 0]);
export var ListFilteredTransactionEventsSort = struct(n0, _LFTES, 0, [_sB, _sO], [0, 0]);
export var ListTokenBalancesInput = struct(
  n0,
  _LTBI,
  0,
  [_oF, _tFo, _nT, _mR],
  [() => OwnerFilter, () => TokenFilter, 0, 1]
);
export var ListTokenBalancesOutput = struct(n0, _LTBO, 0, [_tB, _nT], [() => TokenBalanceList, 0]);
export var ListTransactionEventsInput = struct(n0, _LTEI, 0, [_tH, _tIr, _n, _nT, _mR], [0, 0, 0, 0, 1]);
export var ListTransactionEventsOutput = struct(n0, _LTEO, 0, [_ev, _nT], [() => TransactionEventList, 0]);
export var ListTransactionsInput = struct(
  n0,
  _LTI,
  0,
  [_a, _n, _fBI, _tBI, _so, _nT, _mR, _cSF],
  [
    0,
    0,
    () => BlockchainInstant,
    () => BlockchainInstant,
    () => ListTransactionsSort,
    0,
    1,
    () => ConfirmationStatusFilter,
  ]
);
export var ListTransactionsOutput = struct(n0, _LTO, 0, [_tra, _nT], [() => TransactionOutputList, 0]);
export var ListTransactionsSort = struct(n0, _LTS, 0, [_sB, _sO], [0, 0]);
export var OwnerFilter = struct(n0, _OF, 0, [_a], [0]);
export var OwnerIdentifier = struct(n0, _OI, 0, [_a], [0]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m, _rI, _rT],
  [0, 0, 0],

  __ResourceNotFoundException
);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m, _rI, _rT, _sC, _qC],
  [0, 0, 0, 0, 0],

  __ServiceQuotaExceededException
);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m, _sC, _qC, _rAS],
  [
    0,
    0,
    0,
    [
      1,
      {
        [_hH]: _RA,
      },
    ],
  ],

  __ThrottlingException
);
export var TimeFilter = struct(n0, _TF, 0, [_f, _to], [() => BlockchainInstant, () => BlockchainInstant]);
export var TokenBalance = struct(
  n0,
  _TB,
  0,
  [_oI, _tI, _b, _aBI, _lUT],
  [() => OwnerIdentifier, () => TokenIdentifier, 0, () => BlockchainInstant, () => BlockchainInstant]
);
export var TokenFilter = struct(n0, _TFo, 0, [_n, _cA, _tIo], [0, 0, 0]);
export var TokenIdentifier = struct(n0, _TI, 0, [_n, _cA, _tIo], [0, 0, 0]);
export var Transaction = struct(
  n0,
  _T,
  0,
  [_n, _bH, _tH, _bN, _tT, _tIra, _nOT, _to, _f, _cA, _gU, _cGU, _eGP, _sV, _sR, _sS, _tFr, _tIr, _cS, _eS],
  [0, 0, 0, 0, 4, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
);
export var TransactionEvent = struct(
  n0,
  _TEr,
  0,
  [_n, _tH, _eTv, _f, _to, _v, _cA, _tIo, _tIr, _vI, _vS, _sVTI, _sVTH, _sVI, _bI, _cS],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 1, () => BlockchainInstant, 0]
);
export var TransactionOutputItem = struct(n0, _TOI, 0, [_tH, _tIr, _n, _tT, _cS], [0, 0, 0, 4, 0]);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m, _r, _fL],
  [0, 0, () => ValidationExceptionFieldList],

  __ValidationException
);
export var ValidationExceptionField = struct(n0, _VEF, 0, [_na, _m], [0, 0]);
export var VoutFilter = struct(n0, _VF, 0, [_vS], [2]);
export var AssetContractList = list(n0, _ACL, 0, () => AssetContract);
export var BatchGetTokenBalanceErrors = list(n0, _BGTBE, 0, () => BatchGetTokenBalanceErrorItem);
export var BatchGetTokenBalanceOutputList = list(n0, _BGTBOL, 0, () => BatchGetTokenBalanceOutputItem);
export var ChainAddresses = 64 | 0;

export var ConfirmationStatusIncludeList = 64 | 0;

export var GetTokenBalanceInputList = list(n0, _GTBIL, 0, () => BatchGetTokenBalanceInputItem);
export var TokenBalanceList = list(n0, _TBL, 0, () => TokenBalance);
export var TransactionEventList = list(n0, _TEL, 0, () => TransactionEvent);
export var TransactionOutputList = list(n0, _TOL, 0, () => TransactionOutputItem);
export var ValidationExceptionFieldList = list(n0, _VEFL, 0, () => ValidationExceptionField);
export var BatchGetTokenBalance = op(
  n0,
  _BGTB,
  {
    [_h]: ["POST", "/batch-get-token-balance", 200],
  },
  () => BatchGetTokenBalanceInput,
  () => BatchGetTokenBalanceOutput
);
export var GetAssetContract = op(
  n0,
  _GAC,
  {
    [_h]: ["POST", "/get-asset-contract", 200],
  },
  () => GetAssetContractInput,
  () => GetAssetContractOutput
);
export var GetTokenBalance = op(
  n0,
  _GTB,
  {
    [_h]: ["POST", "/get-token-balance", 200],
  },
  () => GetTokenBalanceInput,
  () => GetTokenBalanceOutput
);
export var GetTransaction = op(
  n0,
  _GT,
  {
    [_h]: ["POST", "/get-transaction", 200],
  },
  () => GetTransactionInput,
  () => GetTransactionOutput
);
export var ListAssetContracts = op(
  n0,
  _LAC,
  {
    [_h]: ["POST", "/list-asset-contracts", 200],
  },
  () => ListAssetContractsInput,
  () => ListAssetContractsOutput
);
export var ListFilteredTransactionEvents = op(
  n0,
  _LFTE,
  {
    [_h]: ["POST", "/list-filtered-transaction-events", 200],
  },
  () => ListFilteredTransactionEventsInput,
  () => ListFilteredTransactionEventsOutput
);
export var ListTokenBalances = op(
  n0,
  _LTB,
  {
    [_h]: ["POST", "/list-token-balances", 200],
  },
  () => ListTokenBalancesInput,
  () => ListTokenBalancesOutput
);
export var ListTransactionEvents = op(
  n0,
  _LTE,
  {
    [_h]: ["POST", "/list-transaction-events", 200],
  },
  () => ListTransactionEventsInput,
  () => ListTransactionEventsOutput
);
export var ListTransactions = op(
  n0,
  _LT,
  {
    [_h]: ["POST", "/list-transactions", 200],
  },
  () => ListTransactionsInput,
  () => ListTransactionsOutput
);
