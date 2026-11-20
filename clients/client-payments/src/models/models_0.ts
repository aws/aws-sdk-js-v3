// smithy-typescript generated code
import type {
  BalanceType,
  BankAccountType,
  BatchErrorCode,
  CardBrand,
  CardType,
  DueStatus,
  FinancialRecordSortField,
  FinancialRecordStatus,
  FinancialRecordType,
  InvoiceFrequency,
  LineOfBusiness,
  PaymentInstrumentStatus,
  PaymentMethod,
  SettlementStatus,
  SortOrder,
} from "./enums";

/**
 * <p>A monetary amount expressed as a decimal string in the currency's standard unit.</p>
 * @public
 */
export interface CurrencyAmount {
  /**
   * <p>The amount, as a decimal string, such as <code>10.99</code>. The number of decimal places can differ between amounts, for example <code>0.0</code> and <code>1000.24</code>.</p>
   * @public
   */
  value: string | undefined;

  /**
   * <p>The ISO 4217 currency code for the amount (for example, <code>USD</code>).</p>
   * @public
   */
  currency: string | undefined;
}

/**
 * <p>An amount of the balance that <code>GetAccountBalance</code> returns: the total for one merchant of record in one currency.</p>
 * @public
 */
export interface AccountBalance {
  /**
   * <p>The amount, in the currency that the records making up this balance were issued in.</p>
   * @public
   */
  amount: CurrencyAmount | undefined;

  /**
   * <p>The merchant of record that issued the invoices or credit memos that make up this amount.</p>
   * @public
   */
  merchantOfRecord: string | undefined;
}

/**
 * <p>A way to identify a financial record. Specify exactly one member: the ID that Amazon Web Services Payments issued, in <code>identifier</code>, or the invoice ID that Amazon Web Services Invoicing issued, in <code>invoiceIdentifier</code>. If you specify both or neither, the request fails with <code>ValidationException</code>.</p>
 * @public
 */
export type FinancialRecordKey =
  | FinancialRecordKey.IdentifierMember
  | FinancialRecordKey.InvoiceIdentifierMember
  | FinancialRecordKey.$UnknownMember;

/**
 * @public
 */
export namespace FinancialRecordKey {
  /**
   * <p>The ID that Amazon Web Services Payments issued for the record.</p>
   * @public
   */
  export interface IdentifierMember {
    identifier: string;
    invoiceIdentifier?: never;
    $unknown?: never;
  }

  /**
   * <p>The invoice ID that Amazon Web Services Invoicing issued for an invoice or a credit memo.</p>
   * @public
   */
  export interface InvoiceIdentifierMember {
    identifier?: never;
    invoiceIdentifier: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    identifier?: never;
    invoiceIdentifier?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    identifier: (value: string) => T;
    invoiceIdentifier: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface BatchGetFinancialRecordRequest {
  /**
   * <p>The keys of the financial records to retrieve. Each key is either the record's ID or its invoice ID.</p>
   * @public
   */
  keys: FinancialRecordKey[] | undefined;
}

/**
 * <p>The reason that one of the records requested from <code>BatchGetFinancialRecord</code> couldn't be returned. The other records in the request are unaffected.</p>
 * @public
 */
export interface FinancialRecordError {
  /**
   * <p>The key of the record that couldn't be retrieved, as you requested it.</p>
   * @public
   */
  key: FinancialRecordKey | undefined;

  /**
   * <p>The error code that indicates why the retrieval failed. The following values are valid:</p> <ul> <li> <p> <code>NOT_FOUND</code> – No financial record on your account matches the key.</p> </li> <li> <p> <code>INTERNAL_ERROR</code> – An internal error occurred while processing this record. The other records in the request are unaffected. You can retry this record.</p> </li> </ul>
   * @public
   */
  code: BatchErrorCode | undefined;

  /**
   * <p>A description of why the operation couldn't retrieve this record. The wording can change at any time and isn't localized, so don't parse this value. To handle the error in your code, use <code>code</code> instead.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * <p>How much of the record's <code>amount</code> is outstanding, processing, settled, and canceled. The four balances add up to <code>amount</code>. Each balance is in the currency of <code>amount</code>, and a balance with nothing in it is 0.</p>
 * @public
 */
export interface Balances {
  /**
   * <p>The part of the amount that isn't settled and has no settlement in progress. For an invoice, this is what remains to pay. For a credit memo, this is the credit that isn't yet applied. This balance doesn't include <code>processing</code>.</p>
   * @public
   */
  outstanding: CurrencyAmount | undefined;

  /**
   * <p>The part of the amount with a settlement in progress, for example a payment that's submitted but not yet confirmed. It moves to <code>settled</code> when the settlement completes, and back to <code>outstanding</code> when the settlement fails. This balance is more than 0 only when the <code>status</code> is <code>PROCESSING</code>.</p>
   * @public
   */
  processing: CurrencyAmount | undefined;

  /**
   * <p>The part of the amount that is settled. For an invoice, this is the amount paid or covered by credit memos. For a credit memo, this is the amount applied to invoices. This balance is 0 when nothing is settled yet.</p>
   * @public
   */
  settled: CurrencyAmount | undefined;

  /**
   * <p>The part of the amount that was canceled and isn't settled, for example when an invoice is voided. When a partly settled record is canceled, it keeps its <code>settled</code> balance, and the rest of the amount moves to <code>canceled</code>. This balance is more than 0 only when the <code>status</code> is <code>CANCELED</code>.</p>
   * @public
   */
  canceled: CurrencyAmount | undefined;
}

/**
 * <p>The Amazon Web Services business unit that issued a financial record. A business unit has two parts: the merchant of record, which is the Amazon Web Services entity that issued the record, and the line of business within that entity.</p>
 * @public
 */
export interface BusinessUnit {
  /**
   * <p>The Amazon Web Services entity that issued the invoice and collects payment for it, such as <code>Amazon Web Services, Inc.</code> or <code>Amazon Web Services EMEA SARL</code>. This is the invoicing entity shown in the Amazon Web Services Billing and Cost Management console. For Amazon Web Services Marketplace purchases, it can differ from the seller of record.</p>
   * @public
   */
  merchantOfRecord: string | undefined;

  /**
   * <p>The line of business within the merchant of record that issued the record. This member is absent when the line of business isn't known for the record. The following values are valid:</p> <ul> <li> <p> <code>AWS_CLOUD_SERVICES</code> – Your usage of Amazon Web Services services.</p> </li> <li> <p> <code>PROSERVE_MARKETING_AND_TRAINING</code> – Amazon Web Services Professional Services, marketing, and training: consulting, events, and training that Amazon Web Services sells.</p> </li> <li> <p> <code>AWS_MARKETPLACE</code> – Products that you bought from sellers in Amazon Web Services Marketplace.</p> </li> </ul>
   * @public
   */
  lineOfBusiness?: LineOfBusiness | undefined;
}

/**
 * <p>A billing period, as a half-open date range: <code>startDate</code> is inclusive and <code>endDate</code> is exclusive. Both members are calendar dates, carried as the timestamp of 00:00:00 UTC on that day.</p>
 * @public
 */
export interface BillingPeriod {
  /**
   * <p>The first day of the billing period, inclusive, as the timestamp of 00:00:00 UTC on that day.</p>
   * @public
   */
  startDate: Date | undefined;

  /**
   * <p>The day after the last day of the billing period, exclusive, as the timestamp of 00:00:00 UTC on that day. A calendar month runs from the first of the month to the first of the next month.</p>
   * @public
   */
  endDate: Date | undefined;
}

/**
 * <p>The details of a credit memo: the invoice ID that Amazon Web Services Invoicing issued for it and the billing period that it applies to.</p>
 * @public
 */
export interface CreditMemoDetails {
  /**
   * <p>The invoice ID that Amazon Web Services Invoicing issued for the credit memo: the document number printed on it, shown in the Amazon Web Services Billing and Cost Management console and returned by the Amazon Web Services Invoicing API as <code>InvoiceId</code>. <code>GetFinancialRecord</code> and <code>BatchGetFinancialRecord</code> also accept it, as <code>invoiceIdentifier</code>.</p>
   * @public
   */
  invoiceId: string | undefined;

  /**
   * <p>The billing period the credit memo applies to: the period of the usage it credits.</p>
   * @public
   */
  billingPeriod: BillingPeriod | undefined;
}

/**
 * <p>The details of an invoice: the invoice ID that Amazon Web Services Invoicing issued, the billing period that the invoice covers, its due date and due status, its payment terms, and its frequency.</p>
 * @public
 */
export interface InvoiceDetails {
  /**
   * <p>The invoice ID that Amazon Web Services Invoicing issued for the invoice: the document number printed on it, shown in the Amazon Web Services Billing and Cost Management console and returned by the Amazon Web Services Invoicing API as <code>InvoiceId</code>. <code>GetFinancialRecord</code> and <code>BatchGetFinancialRecord</code> also accept it, as <code>invoiceIdentifier</code>.</p>
   * @public
   */
  invoiceId: string | undefined;

  /**
   * <p>Whether the invoice is due or past its due date. This member is present only while the invoice's <code>status</code> is <code>OUTSTANDING</code>. It's absent when the <code>status</code> is <code>PROCESSING</code>, <code>SETTLED</code>, or <code>CANCELED</code>. The following values are valid:</p> <ul> <li> <p> <code>DUE</code> – The due date hasn't passed.</p> </li> <li> <p> <code>PAST_DUE</code> – The due date has passed, and the invoice is still outstanding.</p> </li> </ul>
   * @public
   */
  dueStatus?: DueStatus | undefined;

  /**
   * <p>The billing period the invoice covers: the period of the usage it bills.</p>
   * @public
   */
  billingPeriod: BillingPeriod | undefined;

  /**
   * <p>The calendar date by which the invoice must be paid, as the timestamp of 00:00:00 UTC on that day. The invoice is past due from the following day.</p>
   * @public
   */
  dueDate: Date | undefined;

  /**
   * <p>The payment terms for the invoice, as Amazon Web Services Invoicing issued them, such as <code>Net30</code>. The due date follows from these terms. This member is absent when Amazon Web Services Invoicing didn't issue payment terms for the invoice.</p>
   * @public
   */
  paymentTerms?: string | undefined;

  /**
   * <p>Whether the invoice was issued once or as part of a billing cycle. The following values are valid:</p> <ul> <li> <p> <code>ONE_TIME</code> – A single invoice that isn't part of a billing cycle.</p> </li> <li> <p> <code>RECURRING</code> – One invoice of a billing cycle, such as your monthly invoice.</p> </li> </ul>
   * @public
   */
  invoiceFrequency: InvoiceFrequency | undefined;
}

/**
 * <p>The attributes that exist only for one type of financial record. The populated member matches the record's <code>type</code>.</p>
 * @public
 */
export type FinancialRecordDetails =
  | FinancialRecordDetails.CreditMemoDetailsMember
  | FinancialRecordDetails.InvoiceDetailsMember
  | FinancialRecordDetails.$UnknownMember;

/**
 * @public
 */
export namespace FinancialRecordDetails {
  /**
   * <p>The details of an invoice. Populated when <code>type</code> is <code>INVOICE</code>.</p>
   * @public
   */
  export interface InvoiceDetailsMember {
    invoiceDetails: InvoiceDetails;
    creditMemoDetails?: never;
    $unknown?: never;
  }

  /**
   * <p>The details of a credit memo. Populated when <code>type</code> is <code>CREDIT_MEMO</code>.</p>
   * @public
   */
  export interface CreditMemoDetailsMember {
    invoiceDetails?: never;
    creditMemoDetails: CreditMemoDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    invoiceDetails?: never;
    creditMemoDetails?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    invoiceDetails: (value: InvoiceDetails) => T;
    creditMemoDetails: (value: CreditMemoDetails) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>An invoice or a credit memo on your account, with the details that are specific to its type.</p>
 * @public
 */
export interface FinancialRecord {
  /**
   * <p>The ID that Amazon Web Services Payments issued for the record, such as <code>INV-5364-6253-7364-1342</code>. To retrieve the record again, pass this value to <code>GetFinancialRecord</code> or <code>BatchGetFinancialRecord</code> as <code>identifier</code>.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The type of the financial record. The populated member of <code>details</code> matches this type. The following values are valid:</p> <ul> <li> <p> <code>INVOICE</code> – An invoice: a bill from Amazon Web Services. Payments and credit memos applied to the invoice settle it.</p> </li> <li> <p> <code>CREDIT_MEMO</code> – A credit memo: a credit issued to your account, for example for a billing correction or a service credit. Applying it to one or more invoices settles it.</p> </li> </ul>
   * @public
   */
  type: FinancialRecordType | undefined;

  /**
   * <p>The Amazon Web Services business unit that issued the record: its merchant of record and its line of business.</p>
   * @public
   */
  businessUnit: BusinessUnit | undefined;

  /**
   * <p>The total amount of the financial record, in the currency that the record was issued in. The amount doesn't change as the record is settled. <code>balances</code> shows how much of it is in each settlement state.</p>
   * @public
   */
  amount: CurrencyAmount | undefined;

  /**
   * <p>How much of <code>amount</code> is outstanding, processing, settled, and canceled.</p>
   * @public
   */
  balances: Balances | undefined;

  /**
   * <p>Whether the record is open or closed. If you receive a <code>status</code> value that you don't recognize, use this member to tell open records from closed ones. The following values are valid:</p> <ul> <li> <p> <code>OPEN</code> – Part of the amount is outstanding or processing. The <code>status</code> is <code>OUTSTANDING</code> or <code>PROCESSING</code>.</p> </li> <li> <p> <code>CLOSED</code> – The whole amount is settled or canceled. The <code>status</code> is <code>SETTLED</code> or <code>CANCELED</code>.</p> </li> </ul> <p>A <code>CLOSED</code> record becomes <code>OPEN</code> again if a payment or credit applied to it is reversed. Its <code>closedAt</code> is then absent until the record closes again.</p>
   * @public
   */
  settlementStatus: SettlementStatus | undefined;

  /**
   * <p>The settlement stage of the record. The following values are valid:</p> <ul> <li> <p> <code>OUTSTANDING</code> – Part of the amount isn't settled, and no settlement is in progress on the record. For an invoice, <code>dueStatus</code> shows whether it's due or past due. The <code>settlementStatus</code> is <code>OPEN</code>.</p> </li> <li> <p> <code>PROCESSING</code> – A settlement of part or all of the amount is in progress, for example a payment that's submitted but not yet confirmed. <code>PROCESSING</code> takes precedence over <code>OUTSTANDING</code>: while any part of the amount is processing, the status is <code>PROCESSING</code>, even if another part is still outstanding. The <code>settlementStatus</code> is <code>OPEN</code>.</p> </li> <li> <p> <code>SETTLED</code> – The whole amount is settled. The <code>settlementStatus</code> is <code>CLOSED</code>.</p> </li> <li> <p> <code>CANCELED</code> – The record is canceled. The part of the amount that wasn't settled isn't collected or applied. The <code>settlementStatus</code> is <code>CLOSED</code>.</p> </li> </ul>
   * @public
   */
  status: FinancialRecordStatus | undefined;

  /**
   * <p>The date and time, in UTC, when this record was issued.</p>
   * @public
   */
  issuedAt: Date | undefined;

  /**
   * <p>The date and time, in UTC, when the record was last closed, that is, when its <code>status</code> last became <code>SETTLED</code> or <code>CANCELED</code>. This member is absent while the <code>settlementStatus</code> is <code>OPEN</code>, including after a closed record reopens.</p>
   * @public
   */
  closedAt?: Date | undefined;

  /**
   * <p>The attributes that exist only for the record's type. The populated member matches <code>type</code>: <code>invoiceDetails</code> for an <code>INVOICE</code>, <code>creditMemoDetails</code> for a <code>CREDIT_MEMO</code>.</p>
   * @public
   */
  details: FinancialRecordDetails | undefined;
}

/**
 * @public
 */
export interface BatchGetFinancialRecordResponse {
  /**
   * <p>The financial records that the operation retrieved, in no particular order. This list contains fewer records than you requested when <code>errors</code> names one or more keys.</p>
   * @public
   */
  financialRecords: FinancialRecord[] | undefined;

  /**
   * <p>The errors for the records that the operation couldn't retrieve, one for each record, with the key as you requested it and the reason. This list is empty when the operation retrieved every record.</p>
   * @public
   */
  errors: FinancialRecordError[] | undefined;
}

/**
 * <p>A request member that failed validation.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the request member that failed validation. For a member nested inside another member, the name is a path from the request root, with the segments separated by periods.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of why this member failed validation.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface GetAccountBalanceRequest {
  /**
   * <p>The balance to retrieve. You can specify only one balance type in a single request. Each balance adds up the <code>outstanding</code> balance of the records that have the status <code>OUTSTANDING</code>. A record that is <code>PROCESSING</code>, <code>SETTLED</code>, or <code>CANCELED</code> isn't included, even when part of its amount is outstanding. The following values are valid:</p> <ul> <li> <p> <code>INVOICES_DUE</code> – The outstanding balance of your <code>OUTSTANDING</code> invoices that aren't past their due date, where <code>dueStatus</code> is <code>DUE</code>.</p> </li> <li> <p> <code>INVOICES_PAST_DUE</code> – The outstanding balance of your <code>OUTSTANDING</code> invoices that are past their due date, where <code>dueStatus</code> is <code>PAST_DUE</code>.</p> </li> <li> <p> <code>OUTSTANDING_CREDIT_MEMOS</code> – The outstanding balance of your <code>OUTSTANDING</code> credit memos: the credit that isn't yet applied to an invoice.</p> </li> </ul>
   * @public
   */
  balanceType: BalanceType | undefined;

  /**
   * <p>The pagination token from the <code>nextToken</code> of the previous response. Omit it to get the first page. Tokens expire. If the token is malformed or expired, or doesn't match the original request, the request fails with <code>ValidationException</code> and the reason <code>INVALID_PAGINATION_TOKEN</code>. In that case, start again from the first page.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in one page. The default is 100. A page can contain fewer results even when more remain. Use <code>nextToken</code> to find out whether more results are available.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetAccountBalanceResponse {
  /**
   * <p>The balance, as one amount for each merchant of record and currency. This list is empty when your account has nothing in the requested balance.</p>
   * @public
   */
  accountBalances: AccountBalance[] | undefined;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve. This value is absent when there are no more results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetFinancialRecordRequest {
  /**
   * <p>The ID that Amazon Web Services Payments issued for the financial record, as returned in <code>id</code>.</p>
   * @public
   */
  identifier?: string | undefined;

  /**
   * <p>The invoice ID that Amazon Web Services Invoicing issued for an invoice or a credit memo. The operation returns the record that has this invoice ID.</p>
   * @public
   */
  invoiceIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface GetFinancialRecordResponse {
  /**
   * <p>The requested financial record.</p>
   * @public
   */
  financialRecord: FinancialRecord | undefined;
}

/**
 * @public
 */
export interface GetPaymentInstrumentRequest {
  /**
   * <p>The instrument to retrieve. Specify one of the following:</p> <ul> <li> <p>The Amazon Resource Name (ARN) of the instrument, as <code>ListPaymentInstruments</code> returns in <code>arn</code>. The ARN must be for an instrument on your account.</p> </li> <li> <p>The ID of the instrument, as <code>ListPaymentInstruments</code> returns in <code>id</code>.</p> </li> </ul>
   * @public
   */
  identifier: string | undefined;
}

/**
 * <p>The details of a card payment instrument.</p>
 * @public
 */
export interface Card {
  /**
   * <p>The network the card runs on.</p>
   * @public
   */
  brand?: CardBrand | undefined;

  /**
   * <p>The last four digits of the card number.</p>
   * @public
   */
  last4: string | undefined;

  /**
   * <p>The calendar month that the card expires in.</p>
   * @public
   */
  expirationMonth?: number | undefined;

  /**
   * <p>The calendar year that the card expires in.</p>
   * @public
   */
  expirationYear?: number | undefined;

  /**
   * <p>Whether the card is a credit card or a debit card.</p>
   * @public
   */
  cardType?: CardType | undefined;

  /**
   * <p>The bank that issued the card.</p>
   * @public
   */
  issuingBank?: string | undefined;

  /**
   * <p>The country of the bank that issued the card.</p>
   * @public
   */
  issuerCountry?: string | undefined;
}

/**
 * <p>The details of a China bank redirect instrument. A retail instrument is registered with one bank and carries that bank's code. A corporate instrument isn't registered with a bank.</p>
 * @public
 */
export interface CnBankRedirect {
  /**
   * <p>The code of the bank that the instrument is registered with. This member is present only for retail instruments.</p>
   * @public
   */
  bankCode?: string | undefined;
}

/**
 * <p>The details of an India net banking instrument. The instrument is registered with one bank.</p>
 * @public
 */
export interface InNetBanking {
  /**
   * <p>The code of the bank that the instrument is registered with.</p>
   * @public
   */
  bankCode: string | undefined;

  /**
   * <p>The name of the bank that the instrument is registered with.</p>
   * @public
   */
  bankName?: string | undefined;
}

/**
 * <p>The details of a bank account that is debited over Single Euro Payments Area (SEPA) Direct Debit.</p>
 * @public
 */
export interface SepaBankAccount {
  /**
   * <p>The last one to four characters of the account number. This member is absent until your bank provides the account details, for example before you complete authentication with your bank.</p>
   * @public
   */
  accountNumberTail?: string | undefined;

  /**
   * <p>The name on the account.</p>
   * @public
   */
  accountHolderName?: string | undefined;

  /**
   * <p>The bank holding the account.</p>
   * @public
   */
  bankName?: string | undefined;

  /**
   * <p>Whether the account is a checking account or a savings account.</p>
   * @public
   */
  accountType?: BankAccountType | undefined;
}

/**
 * <p>The details of a bank account that is debited over Bacs Direct Debit.</p>
 * @public
 */
export interface UkBacsBankAccount {
  /**
   * <p>The last one to four characters of the account number. This member is absent until your bank provides the account details, for example before you complete authentication with your bank.</p>
   * @public
   */
  accountNumberTail?: string | undefined;

  /**
   * <p>The name on the account.</p>
   * @public
   */
  accountHolderName?: string | undefined;

  /**
   * <p>The bank holding the account.</p>
   * @public
   */
  bankName?: string | undefined;

  /**
   * <p>Whether the account is a checking account or a savings account.</p>
   * @public
   */
  accountType?: BankAccountType | undefined;
}

/**
 * <p>The details of a Unified Payments Interface (UPI) instrument.</p>
 * @public
 */
export interface Upi {
  /**
   * <p>The name of the UPI app that the instrument is registered with.</p>
   * @public
   */
  appName?: string | undefined;
}

/**
 * <p>The details of a bank account that is debited over Automated Clearing House (ACH).</p>
 * @public
 */
export interface UsAchBankAccount {
  /**
   * <p>The last one to four characters of the account number. This member is absent until your bank provides the account details, for example before you complete authentication with your bank.</p>
   * @public
   */
  accountNumberTail?: string | undefined;

  /**
   * <p>The name on the account.</p>
   * @public
   */
  accountHolderName?: string | undefined;

  /**
   * <p>The bank holding the account.</p>
   * @public
   */
  bankName?: string | undefined;

  /**
   * <p>Whether the account is a checking account or a savings account.</p>
   * @public
   */
  accountType?: BankAccountType | undefined;
}

/**
 * <p>The details that are specific to a payment instrument's payment method.</p>
 * @public
 */
export type PaymentInstrumentDetails =
  | PaymentInstrumentDetails.CardMember
  | PaymentInstrumentDetails.CnBankRedirectMember
  | PaymentInstrumentDetails.InNetBankingMember
  | PaymentInstrumentDetails.SepaBankAccountMember
  | PaymentInstrumentDetails.UkBacsBankAccountMember
  | PaymentInstrumentDetails.UpiMember
  | PaymentInstrumentDetails.UsAchBankAccountMember
  | PaymentInstrumentDetails.$UnknownMember;

/**
 * @public
 */
export namespace PaymentInstrumentDetails {
  /**
   * <p>The details of a card payment instrument.</p>
   * @public
   */
  export interface CardMember {
    card: Card;
    usAchBankAccount?: never;
    sepaBankAccount?: never;
    ukBacsBankAccount?: never;
    inNetBanking?: never;
    cnBankRedirect?: never;
    upi?: never;
    $unknown?: never;
  }

  /**
   * <p>The details of a bank account that is debited over Automated Clearing House (ACH).</p>
   * @public
   */
  export interface UsAchBankAccountMember {
    card?: never;
    usAchBankAccount: UsAchBankAccount;
    sepaBankAccount?: never;
    ukBacsBankAccount?: never;
    inNetBanking?: never;
    cnBankRedirect?: never;
    upi?: never;
    $unknown?: never;
  }

  /**
   * <p>The details of a bank account that is debited over Single Euro Payments Area (SEPA) Direct Debit.</p>
   * @public
   */
  export interface SepaBankAccountMember {
    card?: never;
    usAchBankAccount?: never;
    sepaBankAccount: SepaBankAccount;
    ukBacsBankAccount?: never;
    inNetBanking?: never;
    cnBankRedirect?: never;
    upi?: never;
    $unknown?: never;
  }

  /**
   * <p>The details of a bank account that is debited over Bacs Direct Debit.</p>
   * @public
   */
  export interface UkBacsBankAccountMember {
    card?: never;
    usAchBankAccount?: never;
    sepaBankAccount?: never;
    ukBacsBankAccount: UkBacsBankAccount;
    inNetBanking?: never;
    cnBankRedirect?: never;
    upi?: never;
    $unknown?: never;
  }

  /**
   * <p>The details of an India net banking instrument.</p>
   * @public
   */
  export interface InNetBankingMember {
    card?: never;
    usAchBankAccount?: never;
    sepaBankAccount?: never;
    ukBacsBankAccount?: never;
    inNetBanking: InNetBanking;
    cnBankRedirect?: never;
    upi?: never;
    $unknown?: never;
  }

  /**
   * <p>The details of a China bank redirect instrument.</p>
   * @public
   */
  export interface CnBankRedirectMember {
    card?: never;
    usAchBankAccount?: never;
    sepaBankAccount?: never;
    ukBacsBankAccount?: never;
    inNetBanking?: never;
    cnBankRedirect: CnBankRedirect;
    upi?: never;
    $unknown?: never;
  }

  /**
   * <p>The details of a Unified Payments Interface (UPI) instrument.</p>
   * @public
   */
  export interface UpiMember {
    card?: never;
    usAchBankAccount?: never;
    sepaBankAccount?: never;
    ukBacsBankAccount?: never;
    inNetBanking?: never;
    cnBankRedirect?: never;
    upi: Upi;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    card?: never;
    usAchBankAccount?: never;
    sepaBankAccount?: never;
    ukBacsBankAccount?: never;
    inNetBanking?: never;
    cnBankRedirect?: never;
    upi?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    card: (value: Card) => T;
    usAchBankAccount: (value: UsAchBankAccount) => T;
    sepaBankAccount: (value: SepaBankAccount) => T;
    ukBacsBankAccount: (value: UkBacsBankAccount) => T;
    inNetBanking: (value: InNetBanking) => T;
    cnBankRedirect: (value: CnBankRedirect) => T;
    upi: (value: Upi) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>A payment instrument on your account, such as a card or a bank account.</p>
 * @public
 */
export interface PaymentInstrument {
  /**
   * <p>The Amazon Resource Name (ARN) of the instrument. To allow or deny <code>GetPaymentInstrument</code> for this instrument, use the ARN in the <code>Resource</code> element of an Amazon Web Services Identity and Access Management (IAM) policy.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The payment method of the instrument. The following values are valid:</p> <ul> <li> <p> <code>CARD</code> – A credit or debit card.</p> </li> <li> <p> <code>US_ACH_BANK_ACCOUNT</code> – A US bank account debited over Automated Clearing House (ACH).</p> </li> <li> <p> <code>SEPA_BANK_ACCOUNT</code> – A bank account debited over Single Euro Payments Area (SEPA) Direct Debit.</p> </li> <li> <p> <code>UK_BACS_BANK_ACCOUNT</code> – A UK bank account debited over Bacs Direct Debit.</p> </li> <li> <p> <code>IN_NET_BANKING</code> – India net banking. You authorize each payment on your bank's website.</p> </li> <li> <p> <code>CN_BANK_REDIRECT</code> – China bank redirect. You authorize each payment on your bank's website.</p> </li> <li> <p> <code>UPI</code> – Unified Payments Interface, the India real-time payment system.</p> </li> <li> <p> <code>PIX</code> – Pix, the Brazilian Central Bank instant payment system.</p> </li> <li> <p> <code>PAY_BY_INVOICE</code> – Pay by invoice. You pay each invoice yourself, for example by bank transfer, instead of Amazon Web Services collecting payment from a card or a bank account.</p> </li> </ul>
   * @public
   */
  paymentMethod: PaymentMethod | undefined;

  /**
   * <p>The current status of the instrument. The following values are valid:</p> <ul> <li> <p> <code>ACTIVE</code> – The instrument is set up, and Amazon Web Services can use it for payments. <code>ACTIVE</code> doesn't confirm that the instrument is verified or that a payment with it will succeed. You don't need to take action.</p> </li> <li> <p> <code>INVALID</code> – Amazon Web Services can't use the instrument for payments, for example because its Direct Debit or UPI mandate is no longer valid. This status is permanent. The instrument doesn't return to <code>ACTIVE</code>. To pay with this payment method again, add a new payment instrument.</p> </li> <li> <p> <code>PENDING_SETUP</code> – The instrument needs an action from you before Amazon Web Services can use it, such as resuming a paused UPI mandate in your UPI app. Amazon Web Services doesn't use the instrument for payments until you complete that action.</p> </li> <li> <p> <code>SETUP_IN_PROGRESS</code> – You completed the setup steps, and setup of the instrument is in progress, for example while a Direct Debit or UPI mandate waits for confirmation. Amazon Web Services doesn't use the instrument for payments until setup is complete. You don't need to take action.</p> </li> </ul>
   * @public
   */
  status: PaymentInstrumentStatus | undefined;

  /**
   * <p>The details that are specific to the instrument's payment method. This member is absent for a payment method that has no additional details.</p>
   * @public
   */
  details?: PaymentInstrumentDetails | undefined;

  /**
   * <p>The date and time, in UTC, when the instrument was registered.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time, in UTC, when the instrument was last changed.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetPaymentInstrumentResponse {
  /**
   * <p>The payment instrument, including the details that are specific to its payment method.</p>
   * @public
   */
  paymentInstrument: PaymentInstrument | undefined;
}

/**
 * @public
 */
export interface ListFinancialRecordsRequest {
  /**
   * <p>The financial record types to return. The following values are valid:</p> <ul> <li> <p> <code>INVOICE</code> – An invoice: a bill from Amazon Web Services. Payments and credit memos applied to the invoice settle it.</p> </li> <li> <p> <code>CREDIT_MEMO</code> – A credit memo: a credit issued to your account, for example for a billing correction or a service credit. Applying it to one or more invoices settles it.</p> </li> </ul>
   * @public
   */
  types: FinancialRecordType[] | undefined;

  /**
   * <p>The settlement statuses to filter by. <code>OPEN</code> returns records whose <code>status</code> is <code>OUTSTANDING</code> or <code>PROCESSING</code>. <code>CLOSED</code> returns records whose <code>status</code> is <code>SETTLED</code> or <code>CANCELED</code>. When you omit this member, the operation returns records with both settlement statuses.</p>
   * @public
   */
  settlementStatuses?: SettlementStatus[] | undefined;

  /**
   * <p>The earliest date and time to return records for, inclusive. The operation returns the records that were issued at or after this time.</p>
   * @public
   */
  issuedAfter?: Date | undefined;

  /**
   * <p>The latest date and time to return records for, exclusive. The operation returns the records that were issued before this time. When you specify both <code>issuedAfter</code> and <code>issuedBefore</code>, <code>issuedBefore</code> must be later than <code>issuedAfter</code>.</p>
   * @public
   */
  issuedBefore?: Date | undefined;

  /**
   * <p>The field to sort the results by. The default is <code>ISSUED_AT</code>, the date and time when the record was issued.</p>
   * @public
   */
  sortBy?: FinancialRecordSortField | undefined;

  /**
   * <p>The order to sort the results in. The default is <code>DESCENDING</code>, which returns the newest records first. <code>ASCENDING</code> returns the oldest records first.</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * <p>The pagination token from the <code>nextToken</code> of the previous response. Omit it to get the first page. Tokens expire. If the token is malformed or expired, or doesn't match the original request, the request fails with <code>ValidationException</code> and the reason <code>INVALID_PAGINATION_TOKEN</code>. In that case, start again from the first page.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in one page. The default is 100. A page can contain fewer results even when more remain. Use <code>nextToken</code> to find out whether more results are available.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>A financial record as <code>ListFinancialRecords</code> returns it, without the details that are specific to its type. To get the full record, use <code>GetFinancialRecord</code> or <code>BatchGetFinancialRecord</code>.</p>
 * @public
 */
export interface FinancialRecordSummary {
  /**
   * <p>The ID that Amazon Web Services Payments issued for the record. To retrieve the full record, pass this value to <code>GetFinancialRecord</code> or <code>BatchGetFinancialRecord</code> as <code>identifier</code>.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The type of the financial record. On the full record, the populated member of <code>details</code> matches this type. The following values are valid:</p> <ul> <li> <p> <code>INVOICE</code> – An invoice: a bill from Amazon Web Services. Payments and credit memos applied to the invoice settle it.</p> </li> <li> <p> <code>CREDIT_MEMO</code> – A credit memo: a credit issued to your account, for example for a billing correction or a service credit. Applying it to one or more invoices settles it.</p> </li> </ul>
   * @public
   */
  type: FinancialRecordType | undefined;

  /**
   * <p>The Amazon Web Services business unit that issued the record: its merchant of record and its line of business.</p>
   * @public
   */
  businessUnit: BusinessUnit | undefined;

  /**
   * <p>The total amount of the financial record, in the currency that the record was issued in. The amount doesn't change as the record is settled. <code>balances</code> shows how much of it is in each settlement state.</p>
   * @public
   */
  amount: CurrencyAmount | undefined;

  /**
   * <p>How much of <code>amount</code> is outstanding, processing, settled, and canceled.</p>
   * @public
   */
  balances: Balances | undefined;

  /**
   * <p>Whether the record is open or closed. If you receive a <code>status</code> value that you don't recognize, use this member to tell open records from closed ones. The following values are valid:</p> <ul> <li> <p> <code>OPEN</code> – Part of the amount is outstanding or processing. The <code>status</code> is <code>OUTSTANDING</code> or <code>PROCESSING</code>.</p> </li> <li> <p> <code>CLOSED</code> – The whole amount is settled or canceled. The <code>status</code> is <code>SETTLED</code> or <code>CANCELED</code>.</p> </li> </ul> <p>A <code>CLOSED</code> record becomes <code>OPEN</code> again if a payment or credit applied to it is reversed. Its <code>closedAt</code> is then absent until the record closes again.</p>
   * @public
   */
  settlementStatus: SettlementStatus | undefined;

  /**
   * <p>The settlement stage of the record. The following values are valid:</p> <ul> <li> <p> <code>OUTSTANDING</code> – Part of the amount isn't settled, and no settlement is in progress on the record. For an invoice, <code>dueStatus</code> shows whether it's due or past due. The <code>settlementStatus</code> is <code>OPEN</code>.</p> </li> <li> <p> <code>PROCESSING</code> – A settlement of part or all of the amount is in progress, for example a payment that's submitted but not yet confirmed. <code>PROCESSING</code> takes precedence over <code>OUTSTANDING</code>: while any part of the amount is processing, the status is <code>PROCESSING</code>, even if another part is still outstanding. The <code>settlementStatus</code> is <code>OPEN</code>.</p> </li> <li> <p> <code>SETTLED</code> – The whole amount is settled. The <code>settlementStatus</code> is <code>CLOSED</code>.</p> </li> <li> <p> <code>CANCELED</code> – The record is canceled. The part of the amount that wasn't settled isn't collected or applied. The <code>settlementStatus</code> is <code>CLOSED</code>.</p> </li> </ul>
   * @public
   */
  status: FinancialRecordStatus | undefined;

  /**
   * <p>The date and time, in UTC, when this record was issued.</p>
   * @public
   */
  issuedAt: Date | undefined;

  /**
   * <p>The date and time, in UTC, when the record was last closed, that is, when its <code>status</code> last became <code>SETTLED</code> or <code>CANCELED</code>. This member is absent while the <code>settlementStatus</code> is <code>OPEN</code>, including after a closed record reopens.</p>
   * @public
   */
  closedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListFinancialRecordsResponse {
  /**
   * <p>The financial record summaries that match your filters, in the requested order. This list is empty when no record matches.</p>
   * @public
   */
  financialRecordSummaries: FinancialRecordSummary[] | undefined;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve. This value is absent when there are no more results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPaymentInstrumentsRequest {
  /**
   * <p>The pagination token from the <code>nextToken</code> of the previous response. Omit it to get the first page. Tokens expire. If the token is malformed or expired, or doesn't match the original request, the request fails with <code>ValidationException</code> and the reason <code>INVALID_PAGINATION_TOKEN</code>. In that case, start again from the first page.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of payment instruments to return in one page. The default is 25. A page can contain fewer payment instruments even when more remain. Use <code>nextToken</code> to find out whether more payment instruments are available.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>A payment instrument as it appears in <code>ListPaymentInstruments</code>. Call <code>GetPaymentInstrument</code> for the full instrument, including the details specific to its payment method such as a card's last four digits and expiration.</p>
 * @public
 */
export interface PaymentInstrumentSummary {
  /**
   * <p>The ID of the instrument, unique within your account. It's the last segment of the instrument's ARN.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the instrument. To allow or deny <code>GetPaymentInstrument</code> for this instrument, use the ARN in the <code>Resource</code> element of an Amazon Web Services Identity and Access Management (IAM) policy.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The payment method of the instrument. The following values are valid:</p> <ul> <li> <p> <code>CARD</code> – A credit or debit card.</p> </li> <li> <p> <code>US_ACH_BANK_ACCOUNT</code> – A US bank account debited over Automated Clearing House (ACH).</p> </li> <li> <p> <code>SEPA_BANK_ACCOUNT</code> – A bank account debited over Single Euro Payments Area (SEPA) Direct Debit.</p> </li> <li> <p> <code>UK_BACS_BANK_ACCOUNT</code> – A UK bank account debited over Bacs Direct Debit.</p> </li> <li> <p> <code>IN_NET_BANKING</code> – India net banking. You authorize each payment on your bank's website.</p> </li> <li> <p> <code>CN_BANK_REDIRECT</code> – China bank redirect. You authorize each payment on your bank's website.</p> </li> <li> <p> <code>UPI</code> – Unified Payments Interface, the India real-time payment system.</p> </li> <li> <p> <code>PIX</code> – Pix, the Brazilian Central Bank instant payment system.</p> </li> <li> <p> <code>PAY_BY_INVOICE</code> – Pay by invoice. You pay each invoice yourself, for example by bank transfer, instead of Amazon Web Services collecting payment from a card or a bank account.</p> </li> </ul>
   * @public
   */
  paymentMethod: PaymentMethod | undefined;

  /**
   * <p>The current status of the instrument. The following values are valid:</p> <ul> <li> <p> <code>ACTIVE</code> – The instrument is set up, and Amazon Web Services can use it for payments. <code>ACTIVE</code> doesn't confirm that the instrument is verified or that a payment with it will succeed. You don't need to take action.</p> </li> <li> <p> <code>INVALID</code> – Amazon Web Services can't use the instrument for payments, for example because its Direct Debit or UPI mandate is no longer valid. This status is permanent. The instrument doesn't return to <code>ACTIVE</code>. To pay with this payment method again, add a new payment instrument.</p> </li> <li> <p> <code>PENDING_SETUP</code> – The instrument needs an action from you before Amazon Web Services can use it, such as resuming a paused UPI mandate in your UPI app. Amazon Web Services doesn't use the instrument for payments until you complete that action.</p> </li> <li> <p> <code>SETUP_IN_PROGRESS</code> – You completed the setup steps, and setup of the instrument is in progress, for example while a Direct Debit or UPI mandate waits for confirmation. Amazon Web Services doesn't use the instrument for payments until setup is complete. You don't need to take action.</p> </li> </ul>
   * @public
   */
  status: PaymentInstrumentStatus | undefined;

  /**
   * <p>The date and time, in UTC, when the instrument was registered.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time, in UTC, when the instrument was last changed.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListPaymentInstrumentsResponse {
  /**
   * <p>The payment instruments on your account, one summary for each instrument. This list is empty when your account has no payment instruments.</p>
   * @public
   */
  paymentInstrumentSummaries: PaymentInstrumentSummary[] | undefined;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve. This value is absent when there are no more results.</p>
   * @public
   */
  nextToken?: string | undefined;
}
