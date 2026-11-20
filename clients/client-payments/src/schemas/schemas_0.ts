const _AB = "AccountBalance";
const _ABL = "AccountBalanceList";
const _ADE = "AccessDeniedException";
const _AHN = "AccountHolderName";
const _B = "Balances";
const _BANT = "BankAccountNumberTail";
const _BGFR = "BatchGetFinancialRecord";
const _BGFRR = "BatchGetFinancialRecordRequest";
const _BGFRRa = "BatchGetFinancialRecordResponse";
const _BP = "BillingPeriod";
const _BU = "BusinessUnit";
const _C = "Card";
const _CA = "CurrencyAmount";
const _CBR = "CnBankRedirect";
const _CMD = "CreditMemoDetails";
const _EM = "ExpirationMonth";
const _EY = "ExpirationYear";
const _FR = "FinancialRecord";
const _FRD = "FinancialRecordDetails";
const _FRE = "FinancialRecordError";
const _FREL = "FinancialRecordErrorList";
const _FRK = "FinancialRecordKey";
const _FRKL = "FinancialRecordKeyList";
const _FRL = "FinancialRecordList";
const _FRS = "FinancialRecordSummary";
const _FRSL = "FinancialRecordSummaryList";
const _GAB = "GetAccountBalance";
const _GABR = "GetAccountBalanceRequest";
const _GABRe = "GetAccountBalanceResponse";
const _GFR = "GetFinancialRecord";
const _GFRR = "GetFinancialRecordRequest";
const _GFRRe = "GetFinancialRecordResponse";
const _GPI = "GetPaymentInstrument";
const _GPIR = "GetPaymentInstrumentRequest";
const _GPIRe = "GetPaymentInstrumentResponse";
const _ID = "InvoiceDetails";
const _INB = "InNetBanking";
const _ISE = "InternalServerException";
const _L = "Last4";
const _LFR = "ListFinancialRecords";
const _LFRR = "ListFinancialRecordsRequest";
const _LFRRi = "ListFinancialRecordsResponse";
const _LPI = "ListPaymentInstruments";
const _LPIR = "ListPaymentInstrumentsRequest";
const _LPIRi = "ListPaymentInstrumentsResponse";
const _PI = "PaymentInstrument";
const _PID = "PaymentInstrumentDetails";
const _PIS = "PaymentInstrumentSummary";
const _PISL = "PaymentInstrumentSummaryList";
const _RNFE = "ResourceNotFoundException";
const _SBA = "SepaBankAccount";
const _TE = "ThrottlingException";
const _U = "Upi";
const _UABA = "UsAchBankAccount";
const _UBBA = "UkBacsBankAccount";
const _VE = "ValidationException";
const _VEF = "ValidationExceptionField";
const _VEFL = "ValidationExceptionFieldList";
const _a = "amount";
const _aB = "accountBalances";
const _aHN = "accountHolderName";
const _aN = "appName";
const _aNT = "accountNumberTail";
const _aT = "accountType";
const _ar = "arn";
const _b = "brand";
const _bC = "bankCode";
const _bN = "bankName";
const _bP = "billingPeriod";
const _bT = "balanceType";
const _bU = "businessUnit";
const _ba = "balances";
const _c = "client";
const _cA = "closedAt";
const _cAr = "createdAt";
const _cBR = "cnBankRedirect";
const _cMD = "creditMemoDetails";
const _cT = "cardType";
const _ca = "canceled";
const _car = "card";
const _co = "code";
const _cu = "currency";
const _d = "details";
const _dD = "dueDate";
const _dS = "dueStatus";
const _e = "error";
const _eD = "endDate";
const _eM = "expirationMonth";
const _eY = "expirationYear";
const _er = "errors";
const _fL = "fieldList";
const _fR = "financialRecords";
const _fRS = "financialRecordSummaries";
const _fRi = "financialRecord";
const _hE = "httpError";
const _i = "id";
const _iA = "issuedAt";
const _iAs = "issuedAfter";
const _iB = "issuingBank";
const _iBs = "issuedBefore";
const _iC = "issuerCountry";
const _iD = "invoiceDetails";
const _iF = "invoiceFrequency";
const _iI = "invoiceId";
const _iIn = "invoiceIdentifier";
const _iNB = "inNetBanking";
const _id = "identifier";
const _k = "keys";
const _ke = "key";
const _l = "last4";
const _lOB = "lineOfBusiness";
const _m = "message";
const _mOR = "merchantOfRecord";
const _mR = "maxResults";
const _n = "name";
const _nT = "nextToken";
const _o = "outstanding";
const _p = "processing";
const _pI = "paymentInstrument";
const _pIS = "paymentInstrumentSummaries";
const _pM = "paymentMethod";
const _pT = "paymentTerms";
const _r = "reason";
const _rAS = "retryAfterSeconds";
const _rI = "resourceId";
const _rT = "resourceType";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.payments";
const _sB = "sortBy";
const _sBA = "sepaBankAccount";
const _sD = "startDate";
const _sO = "sortOrder";
const _sS = "settlementStatus";
const _sSe = "settlementStatuses";
const _se = "server";
const _set = "settled";
const _st = "status";
const _t = "type";
const _ty = "types";
const _u = "upi";
const _uA = "updatedAt";
const _uABA = "usAchBankAccount";
const _uBBA = "ukBacsBankAccount";
const _v = "value";
const n0 = "com.amazonaws.payments";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
  StaticUnionSchema,
} from "@smithy/types";

import {
  AccessDeniedException,
  InternalServerException,
  ResourceNotFoundException,
  ThrottlingException,
  ValidationException,
} from "../models/errors";
import { PaymentsServiceException } from "../models/PaymentsServiceException";

/* eslint no-var: 0 */
const _s_registry = new TypeRegistry(_s);
export var PaymentsServiceException$: StaticErrorSchema = [-3, _s, "PaymentsServiceException", 0, [], []];
_s_registry.registerError(PaymentsServiceException$, PaymentsServiceException);
const n0_registry = new TypeRegistry(n0);
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE,
  { [_e]: _c, [_hE]: 403 },
  [_m, _r],
  [0, 0], 1
];
n0_registry.registerError(AccessDeniedException$, AccessDeniedException);
export var InternalServerException$: StaticErrorSchema = [-3, n0, _ISE,
  { [_e]: _se, [_hE]: 500 },
  [_m, _rAS],
  [0, 1], 1
];
n0_registry.registerError(InternalServerException$, InternalServerException);
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE,
  { [_e]: _c, [_hE]: 404 },
  [_m, _rI, _rT],
  [0, 0, 0], 1
];
n0_registry.registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var ThrottlingException$: StaticErrorSchema = [-3, n0, _TE,
  { [_e]: _c, [_hE]: 429 },
  [_m, _rAS],
  [0, 1], 1
];
n0_registry.registerError(ThrottlingException$, ThrottlingException);
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE,
  { [_e]: _c, [_hE]: 400 },
  [_m, _r, _fL],
  [0, 0, () => ValidationExceptionFieldList], 2
];
n0_registry.registerError(ValidationException$, ValidationException);
/**
 * TypeRegistry instances containing modeled errors.
 * @internal
 *
 */
export const errorTypeRegistries = [
  _s_registry,
  n0_registry,
]
var AccountHolderName: StaticSimpleSchema = [0, n0, _AHN, 8, 0];
var BankAccountNumberTail: StaticSimpleSchema = [0, n0, _BANT, 8, 0];
var ExpirationMonth: StaticSimpleSchema = [0, n0, _EM, 8, 1];
var ExpirationYear: StaticSimpleSchema = [0, n0, _EY, 8, 1];
var Last4: StaticSimpleSchema = [0, n0, _L, 8, 0];
export var AccountBalance$: StaticStructureSchema = [3, n0, _AB,
  0,
  [_a, _mOR],
  [() => CurrencyAmount$, 0], 2
];
export var Balances$: StaticStructureSchema = [3, n0, _B,
  0,
  [_o, _p, _set, _ca],
  [() => CurrencyAmount$, () => CurrencyAmount$, () => CurrencyAmount$, () => CurrencyAmount$], 4
];
export var BatchGetFinancialRecordRequest$: StaticStructureSchema = [3, n0, _BGFRR,
  0,
  [_k],
  [() => FinancialRecordKeyList], 1
];
export var BatchGetFinancialRecordResponse$: StaticStructureSchema = [3, n0, _BGFRRa,
  0,
  [_fR, _er],
  [() => FinancialRecordList, () => FinancialRecordErrorList], 2
];
export var BillingPeriod$: StaticStructureSchema = [3, n0, _BP,
  0,
  [_sD, _eD],
  [4, 4], 2
];
export var BusinessUnit$: StaticStructureSchema = [3, n0, _BU,
  0,
  [_mOR, _lOB],
  [0, 0], 1
];
export var Card$: StaticStructureSchema = [3, n0, _C,
  0,
  [_l, _b, _eM, _eY, _cT, _iB, _iC],
  [[() => Last4, 0], 0, [() => ExpirationMonth, 0], [() => ExpirationYear, 0], 0, 0, 0], 1
];
export var CnBankRedirect$: StaticStructureSchema = [3, n0, _CBR,
  0,
  [_bC],
  [0]
];
export var CreditMemoDetails$: StaticStructureSchema = [3, n0, _CMD,
  0,
  [_iI, _bP],
  [0, () => BillingPeriod$], 2
];
export var CurrencyAmount$: StaticStructureSchema = [3, n0, _CA,
  0,
  [_v, _cu],
  [0, 0], 2
];
export var FinancialRecord$: StaticStructureSchema = [3, n0, _FR,
  0,
  [_i, _t, _bU, _a, _ba, _sS, _st, _iA, _d, _cA],
  [0, 0, () => BusinessUnit$, () => CurrencyAmount$, () => Balances$, 0, 0, 4, () => FinancialRecordDetails$, 4], 9
];
export var FinancialRecordError$: StaticStructureSchema = [3, n0, _FRE,
  0,
  [_ke, _co, _m],
  [() => FinancialRecordKey$, 0, 0], 3
];
export var FinancialRecordSummary$: StaticStructureSchema = [3, n0, _FRS,
  0,
  [_i, _t, _bU, _a, _ba, _sS, _st, _iA, _cA],
  [0, 0, () => BusinessUnit$, () => CurrencyAmount$, () => Balances$, 0, 0, 4, 4], 8
];
export var GetAccountBalanceRequest$: StaticStructureSchema = [3, n0, _GABR,
  0,
  [_bT, _nT, _mR],
  [0, 0, 1], 1
];
export var GetAccountBalanceResponse$: StaticStructureSchema = [3, n0, _GABRe,
  0,
  [_aB, _nT],
  [() => AccountBalanceList, 0], 1
];
export var GetFinancialRecordRequest$: StaticStructureSchema = [3, n0, _GFRR,
  0,
  [_id, _iIn],
  [0, 0]
];
export var GetFinancialRecordResponse$: StaticStructureSchema = [3, n0, _GFRRe,
  0,
  [_fRi],
  [() => FinancialRecord$], 1
];
export var GetPaymentInstrumentRequest$: StaticStructureSchema = [3, n0, _GPIR,
  0,
  [_id],
  [0], 1
];
export var GetPaymentInstrumentResponse$: StaticStructureSchema = [3, n0, _GPIRe,
  0,
  [_pI],
  [[() => PaymentInstrument$, 0]], 1
];
export var InNetBanking$: StaticStructureSchema = [3, n0, _INB,
  0,
  [_bC, _bN],
  [0, 0], 1
];
export var InvoiceDetails$: StaticStructureSchema = [3, n0, _ID,
  0,
  [_iI, _bP, _dD, _iF, _dS, _pT],
  [0, () => BillingPeriod$, 4, 0, 0, 0], 4
];
export var ListFinancialRecordsRequest$: StaticStructureSchema = [3, n0, _LFRR,
  0,
  [_ty, _sSe, _iAs, _iBs, _sB, _sO, _nT, _mR],
  [64 | 0, 64 | 0, 4, 4, 0, 0, 0, 1], 1
];
export var ListFinancialRecordsResponse$: StaticStructureSchema = [3, n0, _LFRRi,
  0,
  [_fRS, _nT],
  [() => FinancialRecordSummaryList, 0], 1
];
export var ListPaymentInstrumentsRequest$: StaticStructureSchema = [3, n0, _LPIR,
  0,
  [_nT, _mR],
  [0, 1]
];
export var ListPaymentInstrumentsResponse$: StaticStructureSchema = [3, n0, _LPIRi,
  0,
  [_pIS, _nT],
  [() => PaymentInstrumentSummaryList, 0], 1
];
export var PaymentInstrument$: StaticStructureSchema = [3, n0, _PI,
  0,
  [_ar, _pM, _st, _d, _cAr, _uA],
  [0, 0, 0, [() => PaymentInstrumentDetails$, 0], 4, 4], 3
];
export var PaymentInstrumentSummary$: StaticStructureSchema = [3, n0, _PIS,
  0,
  [_i, _ar, _pM, _st, _cAr, _uA],
  [0, 0, 0, 0, 4, 4], 4
];
export var SepaBankAccount$: StaticStructureSchema = [3, n0, _SBA,
  0,
  [_aNT, _aHN, _bN, _aT],
  [[() => BankAccountNumberTail, 0], [() => AccountHolderName, 0], 0, 0]
];
export var UkBacsBankAccount$: StaticStructureSchema = [3, n0, _UBBA,
  0,
  [_aNT, _aHN, _bN, _aT],
  [[() => BankAccountNumberTail, 0], [() => AccountHolderName, 0], 0, 0]
];
export var Upi$: StaticStructureSchema = [3, n0, _U,
  0,
  [_aN],
  [0]
];
export var UsAchBankAccount$: StaticStructureSchema = [3, n0, _UABA,
  0,
  [_aNT, _aHN, _bN, _aT],
  [[() => BankAccountNumberTail, 0], [() => AccountHolderName, 0], 0, 0]
];
export var ValidationExceptionField$: StaticStructureSchema = [3, n0, _VEF,
  0,
  [_n, _m],
  [0, 0], 2
];
var AccountBalanceList: StaticListSchema = [1, n0, _ABL,
  0, () => AccountBalance$
];
var FinancialRecordErrorList: StaticListSchema = [1, n0, _FREL,
  0, () => FinancialRecordError$
];
var FinancialRecordKeyList: StaticListSchema = [1, n0, _FRKL,
  0, () => FinancialRecordKey$
];
var FinancialRecordList: StaticListSchema = [1, n0, _FRL,
  0, () => FinancialRecord$
];
var FinancialRecordSummaryList: StaticListSchema = [1, n0, _FRSL,
  0, () => FinancialRecordSummary$
];
var FinancialRecordTypeList = 64 | 0;
var PaymentInstrumentSummaryList: StaticListSchema = [1, n0, _PISL,
  0, () => PaymentInstrumentSummary$
];
var SettlementStatusList = 64 | 0;
var ValidationExceptionFieldList: StaticListSchema = [1, n0, _VEFL,
  0, () => ValidationExceptionField$
];
export var FinancialRecordDetails$: StaticUnionSchema = [4, n0, _FRD,
  0,
  [_iD, _cMD],
  [() => InvoiceDetails$, () => CreditMemoDetails$]
];
export var FinancialRecordKey$: StaticUnionSchema = [4, n0, _FRK,
  0,
  [_id, _iIn],
  [0, 0]
];
export var PaymentInstrumentDetails$: StaticUnionSchema = [4, n0, _PID,
  0,
  [_car, _uABA, _sBA, _uBBA, _iNB, _cBR, _u],
  [[() => Card$, 0], [() => UsAchBankAccount$, 0], [() => SepaBankAccount$, 0], [() => UkBacsBankAccount$, 0], () => InNetBanking$, () => CnBankRedirect$, () => Upi$]
];
export var BatchGetFinancialRecord$: StaticOperationSchema = [9, n0, _BGFR,
  0, () => BatchGetFinancialRecordRequest$, () => BatchGetFinancialRecordResponse$
];
export var GetAccountBalance$: StaticOperationSchema = [9, n0, _GAB,
  0, () => GetAccountBalanceRequest$, () => GetAccountBalanceResponse$
];
export var GetFinancialRecord$: StaticOperationSchema = [9, n0, _GFR,
  0, () => GetFinancialRecordRequest$, () => GetFinancialRecordResponse$
];
export var GetPaymentInstrument$: StaticOperationSchema = [9, n0, _GPI,
  0, () => GetPaymentInstrumentRequest$, () => GetPaymentInstrumentResponse$
];
export var ListFinancialRecords$: StaticOperationSchema = [9, n0, _LFR,
  0, () => ListFinancialRecordsRequest$, () => ListFinancialRecordsResponse$
];
export var ListPaymentInstruments$: StaticOperationSchema = [9, n0, _LPI,
  0, () => ListPaymentInstrumentsRequest$, () => ListPaymentInstrumentsResponse$
];
