// smithy-typescript generated code
import type {
  DukptDerivationType,
  DukptEncryptionMode,
  DukptKeyVariant,
  EmvEncryptionMode,
  EmvMajorKeyDerivationMode,
  EncryptionMode,
  KeyCheckValueAlgorithm,
  KeyDerivationFunction,
  KeyDerivationHashAlgorithm,
  MacAlgorithm,
  MajorKeyDerivationMode,
  PaddingType,
  PinBlockFormatForEmvPinChange,
  PinBlockFormatForPinData,
  PinBlockLengthPosition,
  PinBlockPaddingType,
  RandomKeyMaxLength,
  RandomKeySendVariantMask,
  SessionKeyDerivationMode,
  SymmetricKeyAlgorithm,
  WrappedKeyMaterialFormat,
} from "./enums";

/**
 * The parameter values of the current PIN to be changed on the EMV chip card.
 *
 * @public
 */
export interface CurrentPinAttributes {
  /**
   * The `keyArn` of the current PIN PEK.
   *
   * @public
   */
  CurrentPinPekIdentifier: string | undefined;

  /**
   * The encrypted pinblock of the current pin stored on the chip card.
   *
   * @public
   */
  CurrentEncryptedPinBlock: string | undefined;
}

/**
 * Parameters to derive the confidentiality and integrity keys for a payment card using Amex derivation method.
 *
 * @public
 */
export interface AmexAttributes {
  /**
   * The method to use when deriving the master key for a payment card using Amex derivation.
   *
   * @public
   */
  MajorKeyDerivationMode: MajorKeyDerivationMode | undefined;

  /**
   * The Primary Account Number (PAN) of the cardholder.
   *
   * @public
   */
  PrimaryAccountNumber: string | undefined;

  /**
   * A number that identifies and differentiates payment cards with the same Primary Account Number (PAN). Typically 00 is used, if no value is provided by the terminal.
   *
   * @public
   */
  PanSequenceNumber: string | undefined;

  /**
   * The transaction counter of the current transaction that is provided by the terminal during transaction processing.
   *
   * @public
   */
  ApplicationTransactionCounter: string | undefined;

  /**
   * The `keyArn` of the issuer master key for cryptogram (IMK-AC) for the payment card.
   *
   * @public
   */
  AuthorizationRequestKeyIdentifier: string | undefined;

  /**
   * The encrypted pinblock of the old pin stored on the chip card.
   *
   * @public
   */
  CurrentPinAttributes?: CurrentPinAttributes | undefined;
}

/**
 * Card data parameters that are required to generate a Card Security Code (CSC2) for an AMEX payment card.
 *
 * @public
 */
export interface AmexCardSecurityCodeVersion1 {
  /**
   * The expiry date of a payment card.
   *
   * @public
   */
  CardExpiryDate: string | undefined;
}

/**
 * Card data parameters that are required to generate a Card Security Code (CSC2) for an AMEX payment card.
 *
 * @public
 */
export interface AmexCardSecurityCodeVersion2 {
  /**
   * The expiry date of a payment card.
   *
   * @public
   */
  CardExpiryDate: string | undefined;

  /**
   * The service code of the AMEX payment card. This is different from the Card Security Code (CSC).
   *
   * @public
   */
  ServiceCode: string | undefined;
}

/**
 * Parameter information for generating a KEK validation request during node-to-node initialization.
 *
 * @public
 */
export interface KekValidationRequest {
  /**
   * The key derivation algorithm to use for generating a KEK validation request.
   *
   * @public
   */
  DeriveKeyAlgorithm: SymmetricKeyAlgorithm | undefined;

  /**
   * The maximum length of the random key to generate for a KEK validation request.
   *
   * @public
   */
  RandomKeyMaxLength?: RandomKeyMaxLength | undefined;
}

/**
 * Parameter information for generating a KEK validation response during node-to-node initialization.
 *
 * @public
 */
export interface KekValidationResponse {
  /**
   * The random key send value received from the initiating node to generate a KEK validation response.
   *
   * @public
   */
  RandomKeySend: string | undefined;
}

/**
 * Parameter information for generating a random key for KEK validation to perform node-to-node initialization.
 *
 * @public
 */
export type As2805KekValidationType =
  | As2805KekValidationType.KekValidationRequestMember
  | As2805KekValidationType.KekValidationResponseMember
  | As2805KekValidationType.$UnknownMember;

/**
 * @public
 */
export namespace As2805KekValidationType {
  /**
   * Parameter information for generating a KEK validation request during node-to-node initialization.
   *
   * @public
   */
  export interface KekValidationRequestMember {
    KekValidationRequest: KekValidationRequest;
    KekValidationResponse?: never;
    $unknown?: never;
  }

  /**
   * Parameter information for generating a KEK validation response during node-to-node initialization.
   *
   * @public
   */
  export interface KekValidationResponseMember {
    KekValidationRequest?: never;
    KekValidationResponse: KekValidationResponse;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    KekValidationRequest?: never;
    KekValidationResponse?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    KekValidationRequest: (value: KekValidationRequest) => T;
    KekValidationResponse: (value: KekValidationResponse) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Parameter information to use a PEK derived using AS2805.
 *
 * @public
 */
export interface As2805PekDerivationAttributes {
  /**
   * The system trace audit number for the transaction.
   *
   * @public
   */
  SystemTraceAuditNumber: string | undefined;

  /**
   * The transaction amount for the transaction.
   *
   * @public
   */
  TransactionAmount: string | undefined;
}

/**
 * Parameters for plaintext encryption using asymmetric keys.
 *
 * @public
 */
export interface AsymmetricEncryptionAttributes {
  /**
   * The padding to be included with the data.
   *
   * @public
   */
  PaddingType?: PaddingType | undefined;
}

/**
 * Card data parameters that are required to generate a cardholder verification value for the payment card.
 *
 * @public
 */
export interface CardHolderVerificationValue {
  /**
   * A random number generated by the issuer.
   *
   * @public
   */
  UnpredictableNumber: string | undefined;

  /**
   * A number that identifies and differentiates payment cards with the same Primary Account Number (PAN).
   *
   * @public
   */
  PanSequenceNumber: string | undefined;

  /**
   * The transaction counter value that comes from a point of sale terminal.
   *
   * @public
   */
  ApplicationTransactionCounter: string | undefined;
}

/**
 * Card data parameters that are required to verify CVV (Card Verification Value) for the payment card.
 *
 * @public
 */
export interface CardVerificationValue1 {
  /**
   * The expiry date of a payment card.
   *
   * @public
   */
  CardExpiryDate: string | undefined;

  /**
   * The service code of the payment card. This is different from Card Security Code (CSC).
   *
   * @public
   */
  ServiceCode: string | undefined;
}

/**
 * Card data parameters that are required to verify Card Verification Value (CVV2) for the payment card.
 *
 * @public
 */
export interface CardVerificationValue2 {
  /**
   * The expiry date of a payment card.
   *
   * @public
   */
  CardExpiryDate: string | undefined;
}

/**
 * Parameters that are required to generate or verify Dynamic Card Verification Value (dCVV).
 *
 * @public
 */
export interface DynamicCardVerificationCode {
  /**
   * A random number generated by the issuer.
   *
   * @public
   */
  UnpredictableNumber: string | undefined;

  /**
   * A number that identifies and differentiates payment cards with the same Primary Account Number (PAN).
   *
   * @public
   */
  PanSequenceNumber: string | undefined;

  /**
   * The transaction counter value that comes from the terminal.
   *
   * @public
   */
  ApplicationTransactionCounter: string | undefined;

  /**
   * The data on the two tracks of magnetic cards used for financial transactions. This includes the cardholder name, PAN, expiration date, bank ID (BIN) and several other numbers the issuing bank uses to validate the data received.
   *
   * @public
   */
  TrackData: string | undefined;
}

/**
 * Parameters that are required to generate or verify Dynamic Card Verification Value (dCVV).
 *
 * @public
 */
export interface DynamicCardVerificationValue {
  /**
   * A number that identifies and differentiates payment cards with the same Primary Account Number (PAN).
   *
   * @public
   */
  PanSequenceNumber: string | undefined;

  /**
   * The expiry date of a payment card.
   *
   * @public
   */
  CardExpiryDate: string | undefined;

  /**
   * The service code of the payment card. This is different from Card Security Code (CSC).
   *
   * @public
   */
  ServiceCode: string | undefined;

  /**
   * The transaction counter value that comes from the terminal.
   *
   * @public
   */
  ApplicationTransactionCounter: string | undefined;
}

/**
 * Card data parameters that are required to generate Card Verification Values (CVV/CVV2), Dynamic Card Verification Values (dCVV/dCVV2), or Card Security Codes (CSC).
 *
 * @public
 */
export type CardGenerationAttributes =
  | CardGenerationAttributes.AmexCardSecurityCodeVersion1Member
  | CardGenerationAttributes.AmexCardSecurityCodeVersion2Member
  | CardGenerationAttributes.CardHolderVerificationValueMember
  | CardGenerationAttributes.CardVerificationValue1Member
  | CardGenerationAttributes.CardVerificationValue2Member
  | CardGenerationAttributes.DynamicCardVerificationCodeMember
  | CardGenerationAttributes.DynamicCardVerificationValueMember
  | CardGenerationAttributes.$UnknownMember;

/**
 * @public
 */
export namespace CardGenerationAttributes {
  /**
   * Card data parameters that are required to generate a Card Security Code (CSC2) for an AMEX payment card.
   *
   * @public
   */
  export interface AmexCardSecurityCodeVersion1Member {
    AmexCardSecurityCodeVersion1: AmexCardSecurityCodeVersion1;
    AmexCardSecurityCodeVersion2?: never;
    CardVerificationValue1?: never;
    CardVerificationValue2?: never;
    CardHolderVerificationValue?: never;
    DynamicCardVerificationCode?: never;
    DynamicCardVerificationValue?: never;
    $unknown?: never;
  }

  /**
   * Card data parameters that are required to generate a Card Security Code (CSC2) for an AMEX payment card.
   *
   * @public
   */
  export interface AmexCardSecurityCodeVersion2Member {
    AmexCardSecurityCodeVersion1?: never;
    AmexCardSecurityCodeVersion2: AmexCardSecurityCodeVersion2;
    CardVerificationValue1?: never;
    CardVerificationValue2?: never;
    CardHolderVerificationValue?: never;
    DynamicCardVerificationCode?: never;
    DynamicCardVerificationValue?: never;
    $unknown?: never;
  }

  /**
   * Card data parameters that are required to generate Card Verification Value (CVV) for the payment card.
   *
   * @public
   */
  export interface CardVerificationValue1Member {
    AmexCardSecurityCodeVersion1?: never;
    AmexCardSecurityCodeVersion2?: never;
    CardVerificationValue1: CardVerificationValue1;
    CardVerificationValue2?: never;
    CardHolderVerificationValue?: never;
    DynamicCardVerificationCode?: never;
    DynamicCardVerificationValue?: never;
    $unknown?: never;
  }

  /**
   * Card data parameters that are required to generate Card Verification Value (CVV2) for the payment card.
   *
   * @public
   */
  export interface CardVerificationValue2Member {
    AmexCardSecurityCodeVersion1?: never;
    AmexCardSecurityCodeVersion2?: never;
    CardVerificationValue1?: never;
    CardVerificationValue2: CardVerificationValue2;
    CardHolderVerificationValue?: never;
    DynamicCardVerificationCode?: never;
    DynamicCardVerificationValue?: never;
    $unknown?: never;
  }

  /**
   * Card data parameters that are required to generate a cardholder verification value for the payment card.
   *
   * @public
   */
  export interface CardHolderVerificationValueMember {
    AmexCardSecurityCodeVersion1?: never;
    AmexCardSecurityCodeVersion2?: never;
    CardVerificationValue1?: never;
    CardVerificationValue2?: never;
    CardHolderVerificationValue: CardHolderVerificationValue;
    DynamicCardVerificationCode?: never;
    DynamicCardVerificationValue?: never;
    $unknown?: never;
  }

  /**
   * Card data parameters that are required to generate CDynamic Card Verification Code (dCVC) for the payment card.
   *
   * @public
   */
  export interface DynamicCardVerificationCodeMember {
    AmexCardSecurityCodeVersion1?: never;
    AmexCardSecurityCodeVersion2?: never;
    CardVerificationValue1?: never;
    CardVerificationValue2?: never;
    CardHolderVerificationValue?: never;
    DynamicCardVerificationCode: DynamicCardVerificationCode;
    DynamicCardVerificationValue?: never;
    $unknown?: never;
  }

  /**
   * Card data parameters that are required to generate CDynamic Card Verification Value (dCVV) for the payment card.
   *
   * @public
   */
  export interface DynamicCardVerificationValueMember {
    AmexCardSecurityCodeVersion1?: never;
    AmexCardSecurityCodeVersion2?: never;
    CardVerificationValue1?: never;
    CardVerificationValue2?: never;
    CardHolderVerificationValue?: never;
    DynamicCardVerificationCode?: never;
    DynamicCardVerificationValue: DynamicCardVerificationValue;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    AmexCardSecurityCodeVersion1?: never;
    AmexCardSecurityCodeVersion2?: never;
    CardVerificationValue1?: never;
    CardVerificationValue2?: never;
    CardHolderVerificationValue?: never;
    DynamicCardVerificationCode?: never;
    DynamicCardVerificationValue?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    AmexCardSecurityCodeVersion1: (value: AmexCardSecurityCodeVersion1) => T;
    AmexCardSecurityCodeVersion2: (value: AmexCardSecurityCodeVersion2) => T;
    CardVerificationValue1: (value: CardVerificationValue1) => T;
    CardVerificationValue2: (value: CardVerificationValue2) => T;
    CardHolderVerificationValue: (value: CardHolderVerificationValue) => T;
    DynamicCardVerificationCode: (value: DynamicCardVerificationCode) => T;
    DynamicCardVerificationValue: (value: DynamicCardVerificationValue) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Parameters that are required to generate or verify dCVC (Dynamic Card Verification Code).
 *
 * @public
 */
export interface DiscoverDynamicCardVerificationCode {
  /**
   * The expiry date of a payment card.
   *
   * @public
   */
  CardExpiryDate: string | undefined;

  /**
   * A random number that is generated by the issuer.
   *
   * @public
   */
  UnpredictableNumber: string | undefined;

  /**
   * The transaction counter value that comes from the terminal.
   *
   * @public
   */
  ApplicationTransactionCounter: string | undefined;
}

/**
 * Card data parameters that are requried to verify Card Verification Values (CVV/CVV2), Dynamic Card Verification Values (dCVV/dCVV2), or Card Security Codes (CSC).
 *
 * @public
 */
export type CardVerificationAttributes =
  | CardVerificationAttributes.AmexCardSecurityCodeVersion1Member
  | CardVerificationAttributes.AmexCardSecurityCodeVersion2Member
  | CardVerificationAttributes.CardHolderVerificationValueMember
  | CardVerificationAttributes.CardVerificationValue1Member
  | CardVerificationAttributes.CardVerificationValue2Member
  | CardVerificationAttributes.DiscoverDynamicCardVerificationCodeMember
  | CardVerificationAttributes.DynamicCardVerificationCodeMember
  | CardVerificationAttributes.DynamicCardVerificationValueMember
  | CardVerificationAttributes.$UnknownMember;

/**
 * @public
 */
export namespace CardVerificationAttributes {
  /**
   * Card data parameters that are required to generate a Card Security Code (CSC2) for an AMEX payment card.
   *
   * @public
   */
  export interface AmexCardSecurityCodeVersion1Member {
    AmexCardSecurityCodeVersion1: AmexCardSecurityCodeVersion1;
    AmexCardSecurityCodeVersion2?: never;
    CardVerificationValue1?: never;
    CardVerificationValue2?: never;
    CardHolderVerificationValue?: never;
    DynamicCardVerificationCode?: never;
    DynamicCardVerificationValue?: never;
    DiscoverDynamicCardVerificationCode?: never;
    $unknown?: never;
  }

  /**
   * Card data parameters that are required to verify a Card Security Code (CSC2) for an AMEX payment card.
   *
   * @public
   */
  export interface AmexCardSecurityCodeVersion2Member {
    AmexCardSecurityCodeVersion1?: never;
    AmexCardSecurityCodeVersion2: AmexCardSecurityCodeVersion2;
    CardVerificationValue1?: never;
    CardVerificationValue2?: never;
    CardHolderVerificationValue?: never;
    DynamicCardVerificationCode?: never;
    DynamicCardVerificationValue?: never;
    DiscoverDynamicCardVerificationCode?: never;
    $unknown?: never;
  }

  /**
   * Card data parameters that are required to verify Card Verification Value (CVV) for the payment card.
   *
   * @public
   */
  export interface CardVerificationValue1Member {
    AmexCardSecurityCodeVersion1?: never;
    AmexCardSecurityCodeVersion2?: never;
    CardVerificationValue1: CardVerificationValue1;
    CardVerificationValue2?: never;
    CardHolderVerificationValue?: never;
    DynamicCardVerificationCode?: never;
    DynamicCardVerificationValue?: never;
    DiscoverDynamicCardVerificationCode?: never;
    $unknown?: never;
  }

  /**
   * Card data parameters that are required to verify Card Verification Value (CVV2) for the payment card.
   *
   * @public
   */
  export interface CardVerificationValue2Member {
    AmexCardSecurityCodeVersion1?: never;
    AmexCardSecurityCodeVersion2?: never;
    CardVerificationValue1?: never;
    CardVerificationValue2: CardVerificationValue2;
    CardHolderVerificationValue?: never;
    DynamicCardVerificationCode?: never;
    DynamicCardVerificationValue?: never;
    DiscoverDynamicCardVerificationCode?: never;
    $unknown?: never;
  }

  /**
   * Card data parameters that are required to verify a cardholder verification value for the payment card.
   *
   * @public
   */
  export interface CardHolderVerificationValueMember {
    AmexCardSecurityCodeVersion1?: never;
    AmexCardSecurityCodeVersion2?: never;
    CardVerificationValue1?: never;
    CardVerificationValue2?: never;
    CardHolderVerificationValue: CardHolderVerificationValue;
    DynamicCardVerificationCode?: never;
    DynamicCardVerificationValue?: never;
    DiscoverDynamicCardVerificationCode?: never;
    $unknown?: never;
  }

  /**
   * Card data parameters that are required to verify CDynamic Card Verification Code (dCVC) for the payment card.
   *
   * @public
   */
  export interface DynamicCardVerificationCodeMember {
    AmexCardSecurityCodeVersion1?: never;
    AmexCardSecurityCodeVersion2?: never;
    CardVerificationValue1?: never;
    CardVerificationValue2?: never;
    CardHolderVerificationValue?: never;
    DynamicCardVerificationCode: DynamicCardVerificationCode;
    DynamicCardVerificationValue?: never;
    DiscoverDynamicCardVerificationCode?: never;
    $unknown?: never;
  }

  /**
   * Card data parameters that are required to verify CDynamic Card Verification Value (dCVV) for the payment card.
   *
   * @public
   */
  export interface DynamicCardVerificationValueMember {
    AmexCardSecurityCodeVersion1?: never;
    AmexCardSecurityCodeVersion2?: never;
    CardVerificationValue1?: never;
    CardVerificationValue2?: never;
    CardHolderVerificationValue?: never;
    DynamicCardVerificationCode?: never;
    DynamicCardVerificationValue: DynamicCardVerificationValue;
    DiscoverDynamicCardVerificationCode?: never;
    $unknown?: never;
  }

  /**
   * Card data parameters that are required to verify CDynamic Card Verification Code (dCVC) for the payment card.
   *
   * @public
   */
  export interface DiscoverDynamicCardVerificationCodeMember {
    AmexCardSecurityCodeVersion1?: never;
    AmexCardSecurityCodeVersion2?: never;
    CardVerificationValue1?: never;
    CardVerificationValue2?: never;
    CardHolderVerificationValue?: never;
    DynamicCardVerificationCode?: never;
    DynamicCardVerificationValue?: never;
    DiscoverDynamicCardVerificationCode: DiscoverDynamicCardVerificationCode;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    AmexCardSecurityCodeVersion1?: never;
    AmexCardSecurityCodeVersion2?: never;
    CardVerificationValue1?: never;
    CardVerificationValue2?: never;
    CardHolderVerificationValue?: never;
    DynamicCardVerificationCode?: never;
    DynamicCardVerificationValue?: never;
    DiscoverDynamicCardVerificationCode?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    AmexCardSecurityCodeVersion1: (value: AmexCardSecurityCodeVersion1) => T;
    AmexCardSecurityCodeVersion2: (value: AmexCardSecurityCodeVersion2) => T;
    CardVerificationValue1: (value: CardVerificationValue1) => T;
    CardVerificationValue2: (value: CardVerificationValue2) => T;
    CardHolderVerificationValue: (value: CardHolderVerificationValue) => T;
    DynamicCardVerificationCode: (value: DynamicCardVerificationCode) => T;
    DynamicCardVerificationValue: (value: DynamicCardVerificationValue) => T;
    DiscoverDynamicCardVerificationCode: (value: DiscoverDynamicCardVerificationCode) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Parameters that are required for ARPC response generation using method1 after ARQC verification is successful.
 *
 * @public
 */
export interface CryptogramVerificationArpcMethod1 {
  /**
   * The auth code used to calculate APRC after ARQC verification is successful. This is the same auth code used for ARQC generation outside of Amazon Web Services Payment Cryptography.
   *
   * @public
   */
  AuthResponseCode: string | undefined;
}

/**
 * Parameters that are required for ARPC response generation using method2 after ARQC verification is successful.
 *
 * @public
 */
export interface CryptogramVerificationArpcMethod2 {
  /**
   * The data indicating whether the issuer approves or declines an online transaction using an EMV chip card.
   *
   * @public
   */
  CardStatusUpdate: string | undefined;

  /**
   * The proprietary authentication data used by issuer for communication during online transaction using an EMV chip card.
   *
   * @public
   */
  ProprietaryAuthenticationData?: string | undefined;
}

/**
 * Parameters that are required for Authorization Response Cryptogram (ARPC) generation after Authorization Request Cryptogram (ARQC) verification is successful.
 *
 * @public
 */
export type CryptogramAuthResponse =
  | CryptogramAuthResponse.ArpcMethod1Member
  | CryptogramAuthResponse.ArpcMethod2Member
  | CryptogramAuthResponse.$UnknownMember;

/**
 * @public
 */
export namespace CryptogramAuthResponse {
  /**
   * Parameters that are required for ARPC response generation using method1 after ARQC verification is successful.
   *
   * @public
   */
  export interface ArpcMethod1Member {
    ArpcMethod1: CryptogramVerificationArpcMethod1;
    ArpcMethod2?: never;
    $unknown?: never;
  }

  /**
   * Parameters that are required for ARPC response generation using method2 after ARQC verification is successful.
   *
   * @public
   */
  export interface ArpcMethod2Member {
    ArpcMethod1?: never;
    ArpcMethod2: CryptogramVerificationArpcMethod2;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    ArpcMethod1?: never;
    ArpcMethod2?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    ArpcMethod1: (value: CryptogramVerificationArpcMethod1) => T;
    ArpcMethod2: (value: CryptogramVerificationArpcMethod2) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Parameters that are required to encrypt plaintext data using DUKPT.
 *
 * @public
 */
export interface DukptEncryptionAttributes {
  /**
   * The unique identifier known as Key Serial Number (KSN) that comes from an encrypting device using DUKPT encryption method. The KSN is derived from the encrypting device unique identifier and an internal transaction counter.
   *
   * @public
   */
  KeySerialNumber: string | undefined;

  /**
   * The block cipher method to use for encryption.
   *
   * The default is CBC.
   *
   * @public
   */
  Mode?: DukptEncryptionMode | undefined;

  /**
   * The key type encrypted using DUKPT from a Base Derivation Key (BDK) and Key Serial Number (KSN). This must be less than or equal to the strength of the BDK. For example, you can't use `AES_128` as a derivation type for a BDK of `AES_128` or `TDES_2KEY`
   *
   * @public
   */
  DukptKeyDerivationType?: DukptDerivationType | undefined;

  /**
   * The type of use of DUKPT, which can be incoming data decryption, outgoing data encryption, or both.
   *
   * @public
   */
  DukptKeyVariant?: DukptKeyVariant | undefined;

  /**
   * An input used to provide the intial state. If no value is provided, Amazon Web Services Payment Cryptography defaults it to zero.
   *
   * @public
   */
  InitializationVector?: string | undefined;
}

/**
 * Parameters for plaintext encryption using EMV keys.
 *
 * @public
 */
export interface EmvEncryptionAttributes {
  /**
   * The EMV derivation mode to use for ICC master key derivation as per EMV version 4.3 book 2.
   *
   * @public
   */
  MajorKeyDerivationMode: EmvMajorKeyDerivationMode | undefined;

  /**
   * The Primary Account Number (PAN), a unique identifier for a payment credit or debit card and associates the card to a specific account holder.
   *
   * @public
   */
  PrimaryAccountNumber: string | undefined;

  /**
   * A number that identifies and differentiates payment cards with the same Primary Account Number (PAN). Typically 00 is used, if no value is provided by the terminal.
   *
   * @public
   */
  PanSequenceNumber: string | undefined;

  /**
   * The derivation value used to derive the ICC session key. It is typically the application transaction counter value padded with zeros or previous ARQC value padded with zeros as per EMV version 4.3 book 2.
   *
   * @public
   */
  SessionDerivationData: string | undefined;

  /**
   * The block cipher method to use for encryption.
   *
   * @public
   */
  Mode?: EmvEncryptionMode | undefined;

  /**
   * An input used to provide the intial state. If no value is provided, Amazon Web Services Payment Cryptography defaults it to zero.
   *
   * @public
   */
  InitializationVector?: string | undefined;
}

/**
 * Parameters requried to encrypt plaintext data using symmetric keys.
 *
 * @public
 */
export interface SymmetricEncryptionAttributes {
  /**
   * The block cipher method to use for encryption.
   *
   * @public
   */
  Mode: EncryptionMode | undefined;

  /**
   * An input used to provide the intial state. If no value is provided, Amazon Web Services Payment Cryptography defaults it to zero.
   *
   * @public
   */
  InitializationVector?: string | undefined;

  /**
   * The padding to be included with the data.
   *
   * @public
   */
  PaddingType?: PaddingType | undefined;
}

/**
 * Parameters that are required to perform encryption and decryption operations.
 *
 * @public
 */
export type EncryptionDecryptionAttributes =
  | EncryptionDecryptionAttributes.AsymmetricMember
  | EncryptionDecryptionAttributes.DukptMember
  | EncryptionDecryptionAttributes.EmvMember
  | EncryptionDecryptionAttributes.SymmetricMember
  | EncryptionDecryptionAttributes.$UnknownMember;

/**
 * @public
 */
export namespace EncryptionDecryptionAttributes {
  /**
   * Parameters that are required to perform encryption and decryption using symmetric keys.
   *
   * @public
   */
  export interface SymmetricMember {
    Symmetric: SymmetricEncryptionAttributes;
    Asymmetric?: never;
    Dukpt?: never;
    Emv?: never;
    $unknown?: never;
  }

  /**
   * Parameters for plaintext encryption using asymmetric keys.
   *
   * @public
   */
  export interface AsymmetricMember {
    Symmetric?: never;
    Asymmetric: AsymmetricEncryptionAttributes;
    Dukpt?: never;
    Emv?: never;
    $unknown?: never;
  }

  /**
   * Parameters that are required to encrypt plaintext data using DUKPT.
   *
   * @public
   */
  export interface DukptMember {
    Symmetric?: never;
    Asymmetric?: never;
    Dukpt: DukptEncryptionAttributes;
    Emv?: never;
    $unknown?: never;
  }

  /**
   * Parameters for plaintext encryption using EMV keys.
   *
   * @public
   */
  export interface EmvMember {
    Symmetric?: never;
    Asymmetric?: never;
    Dukpt?: never;
    Emv: EmvEncryptionAttributes;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Symmetric?: never;
    Asymmetric?: never;
    Dukpt?: never;
    Emv?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Symmetric: (value: SymmetricEncryptionAttributes) => T;
    Asymmetric: (value: AsymmetricEncryptionAttributes) => T;
    Dukpt: (value: DukptEncryptionAttributes) => T;
    Emv: (value: EmvEncryptionAttributes) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Parameters required to establish ECDH based key exchange.
 *
 * @public
 */
export interface EcdhDerivationAttributes {
  /**
   * The `keyArn` of the certificate that signed the client's `PublicKeyCertificate`.
   *
   * @public
   */
  CertificateAuthorityPublicKeyIdentifier: string | undefined;

  /**
   * The client's public key certificate in PEM format (base64 encoded) to use for ECDH key derivation.
   *
   * @public
   */
  PublicKeyCertificate: string | undefined;

  /**
   * The key algorithm of the derived ECDH key.
   *
   * @public
   */
  KeyAlgorithm: SymmetricKeyAlgorithm | undefined;

  /**
   * The key derivation function to use for deriving a key using ECDH.
   *
   * @public
   */
  KeyDerivationFunction: KeyDerivationFunction | undefined;

  /**
   * The hash type to use for deriving a key using ECDH.
   *
   * @public
   */
  KeyDerivationHashAlgorithm: KeyDerivationHashAlgorithm | undefined;

  /**
   * A byte string containing information that binds the ECDH derived key to the two parties involved or to the context of the key.
   *
   * It may include details like identities of the two parties deriving the key, context of the operation, session IDs, and optionally a nonce. It must not contain zero bytes, and re-using shared information for multiple ECDH key derivations is not recommended.
   *
   * @public
   */
  SharedInformation: string | undefined;
}

/**
 * Parameter information of a WrappedKeyBlock for encryption key exchange.
 *
 * @public
 */
export type WrappedKeyMaterial =
  | WrappedKeyMaterial.DiffieHellmanSymmetricKeyMember
  | WrappedKeyMaterial.Tr31KeyBlockMember
  | WrappedKeyMaterial.$UnknownMember;

/**
 * @public
 */
export namespace WrappedKeyMaterial {
  /**
   * The TR-31 wrapped key block.
   *
   * @public
   */
  export interface Tr31KeyBlockMember {
    Tr31KeyBlock: string;
    DiffieHellmanSymmetricKey?: never;
    $unknown?: never;
  }

  /**
   * The parameter information for deriving a ECDH shared key.
   *
   * @public
   */
  export interface DiffieHellmanSymmetricKeyMember {
    Tr31KeyBlock?: never;
    DiffieHellmanSymmetricKey: EcdhDerivationAttributes;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Tr31KeyBlock?: never;
    DiffieHellmanSymmetricKey?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Tr31KeyBlock: (value: string) => T;
    DiffieHellmanSymmetricKey: (value: EcdhDerivationAttributes) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Parameter information of a WrappedKeyBlock for encryption key exchange.
 *
 * @public
 */
export interface WrappedKey {
  /**
   * Parameter information of a WrappedKeyBlock for encryption key exchange.
   *
   * @public
   */
  WrappedKeyMaterial: WrappedKeyMaterial | undefined;

  /**
   * The algorithm that Amazon Web Services Payment Cryptography uses to calculate the key check value (KCV). It is used to validate the key integrity.
   *
   * For TDES keys, the KCV is computed by encrypting 8 bytes, each with value of zero, with the key to be checked and retaining the 3 highest order bytes of the encrypted result. For AES keys, the KCV is computed using a CMAC algorithm where the input data is 16 bytes of zero and retaining the 3 highest order bytes of the encrypted result.
   *
   * @public
   */
  KeyCheckValueAlgorithm?: KeyCheckValueAlgorithm | undefined;
}

/**
 * @public
 */
export interface DecryptDataInput {
  /**
   * The `keyARN` of the encryption key that Amazon Web Services Payment Cryptography uses for ciphertext decryption.
   *
   * When a WrappedKeyBlock is provided, this value will be the identifier to the key wrapping key. Otherwise, it is the key identifier used to perform the operation.
   *
   * @public
   */
  KeyIdentifier: string | undefined;

  /**
   * The ciphertext to decrypt.
   *
   * @public
   */
  CipherText: string | undefined;

  /**
   * The encryption key type and attributes for ciphertext decryption.
   *
   * @public
   */
  DecryptionAttributes: EncryptionDecryptionAttributes | undefined;

  /**
   * The WrappedKeyBlock containing the encryption key for ciphertext decryption.
   *
   * @public
   */
  WrappedKey?: WrappedKey | undefined;
}

/**
 * @public
 */
export interface DecryptDataOutput {
  /**
   * The `keyARN` of the encryption key that Amazon Web Services Payment Cryptography uses for ciphertext decryption.
   *
   * @public
   */
  KeyArn: string | undefined;

  /**
   * The key check value (KCV) of the encryption key. The KCV is used to check if all parties holding a given key have the same key or to detect that a key has changed.
   *
   * Amazon Web Services Payment Cryptography computes the KCV according to the CMAC specification.
   *
   * @public
   */
  KeyCheckValue: string | undefined;

  /**
   * The decrypted plaintext data in hexBinary format.
   *
   * @public
   */
  PlainText: string | undefined;
}

/**
 * The request was denied due to an invalid request error.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The request was denied due to an invalid request error.
   *
   * @public
   */
  path: string | undefined;

  /**
   * The request was denied due to an invalid request error.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * Parameters to derive the confidentiality and integrity keys for a payment card using EMV2000 deruv.
 *
 * @public
 */
export interface Emv2000Attributes {
  /**
   * The method to use when deriving the master key for the payment card.
   *
   * @public
   */
  MajorKeyDerivationMode: MajorKeyDerivationMode | undefined;

  /**
   * The Primary Account Number (PAN) of the cardholder.
   *
   * @public
   */
  PrimaryAccountNumber: string | undefined;

  /**
   * A number that identifies and differentiates payment cards with the same Primary Account Number (PAN). Typically 00 is used, if no value is provided by the terminal.
   *
   * @public
   */
  PanSequenceNumber: string | undefined;

  /**
   * The transaction counter of the current transaction that is provided by the terminal during transaction processing.
   *
   * @public
   */
  ApplicationTransactionCounter: string | undefined;
}

/**
 * Parameters to derive the confidentiality and integrity keys for an Emv common payment card.
 *
 * @public
 */
export interface EmvCommonAttributes {
  /**
   * The method to use when deriving the master key for the payment card.
   *
   * @public
   */
  MajorKeyDerivationMode: MajorKeyDerivationMode | undefined;

  /**
   * The Primary Account Number (PAN) of the cardholder.
   *
   * @public
   */
  PrimaryAccountNumber: string | undefined;

  /**
   * A number that identifies and differentiates payment cards with the same Primary Account Number (PAN). Typically 00 is used, if no value is provided by the terminal.
   *
   * @public
   */
  PanSequenceNumber: string | undefined;

  /**
   * The application cryptogram for the current transaction that is provided by the terminal during transaction processing.
   *
   * @public
   */
  ApplicationCryptogram: string | undefined;

  /**
   * The block cipher method to use for encryption.
   *
   * @public
   */
  Mode: EmvEncryptionMode | undefined;

  /**
   * The padding to be added to the PIN block prior to encryption.
   *
   * Padding type should be `ISO_IEC_7816_4`, if `PinBlockLengthPosition` is set to `FRONT_OF_PIN_BLOCK`. No padding is required, if `PinBlockLengthPosition` is set to `NONE`.
   *
   * @public
   */
  PinBlockPaddingType: PinBlockPaddingType | undefined;

  /**
   * Specifies if PIN block length should be added to front of the pin block.
   *
   * If value is set to `FRONT_OF_PIN_BLOCK`, then PIN block padding type should be `ISO_IEC_7816_4`.
   *
   * @public
   */
  PinBlockLengthPosition: PinBlockLengthPosition | undefined;
}

/**
 * Parameters to derive the confidentiality and integrity keys for a Mastercard payment card.
 *
 * @public
 */
export interface MasterCardAttributes {
  /**
   * The method to use when deriving the master key for the payment card.
   *
   * @public
   */
  MajorKeyDerivationMode: MajorKeyDerivationMode | undefined;

  /**
   * The Primary Account Number (PAN) of the cardholder.
   *
   * @public
   */
  PrimaryAccountNumber: string | undefined;

  /**
   * A number that identifies and differentiates payment cards with the same Primary Account Number (PAN). Typically 00 is used, if no value is provided by the terminal.
   *
   * @public
   */
  PanSequenceNumber: string | undefined;

  /**
   * The application cryptogram for the current transaction that is provided by the terminal during transaction processing.
   *
   * @public
   */
  ApplicationCryptogram: string | undefined;
}

/**
 * Parameters to derive the confidentiality and integrity keys for a Visa payment card.
 *
 * @public
 */
export interface VisaAttributes {
  /**
   * The method to use when deriving the master key for the payment card.
   *
   * @public
   */
  MajorKeyDerivationMode: MajorKeyDerivationMode | undefined;

  /**
   * The Primary Account Number (PAN) of the cardholder.
   *
   * @public
   */
  PrimaryAccountNumber: string | undefined;

  /**
   * A number that identifies and differentiates payment cards with the same Primary Account Number (PAN). Typically 00 is used, if no value is provided by the terminal.
   *
   * @public
   */
  PanSequenceNumber: string | undefined;

  /**
   * The transaction counter of the current transaction that is provided by the terminal during transaction processing.
   *
   * @public
   */
  ApplicationTransactionCounter: string | undefined;

  /**
   * The `keyArn` of the issuer master key for cryptogram (IMK-AC) for the payment card.
   *
   * @public
   */
  AuthorizationRequestKeyIdentifier: string | undefined;

  /**
   * The encrypted pinblock of the old pin stored on the chip card.
   *
   * @public
   */
  CurrentPinAttributes?: CurrentPinAttributes | undefined;
}

/**
 * Parameters to derive the payment card specific confidentiality and integrity keys.
 *
 * @public
 */
export type DerivationMethodAttributes =
  | DerivationMethodAttributes.AmexMember
  | DerivationMethodAttributes.Emv2000Member
  | DerivationMethodAttributes.EmvCommonMember
  | DerivationMethodAttributes.MastercardMember
  | DerivationMethodAttributes.VisaMember
  | DerivationMethodAttributes.$UnknownMember;

/**
 * @public
 */
export namespace DerivationMethodAttributes {
  /**
   * Parameters to derive the confidentiality and integrity keys for a payment card using Emv common derivation method.
   *
   * @public
   */
  export interface EmvCommonMember {
    EmvCommon: EmvCommonAttributes;
    Amex?: never;
    Visa?: never;
    Emv2000?: never;
    Mastercard?: never;
    $unknown?: never;
  }

  /**
   * Parameters to derive the confidentiality and integrity keys for a payment card using Amex derivation method.
   *
   * @public
   */
  export interface AmexMember {
    EmvCommon?: never;
    Amex: AmexAttributes;
    Visa?: never;
    Emv2000?: never;
    Mastercard?: never;
    $unknown?: never;
  }

  /**
   * Parameters to derive the confidentiality and integrity keys for a a payment card using Visa derivation method.
   *
   * @public
   */
  export interface VisaMember {
    EmvCommon?: never;
    Amex?: never;
    Visa: VisaAttributes;
    Emv2000?: never;
    Mastercard?: never;
    $unknown?: never;
  }

  /**
   * Parameters to derive the confidentiality and integrity keys for a payment card using Emv2000 derivation method.
   *
   * @public
   */
  export interface Emv2000Member {
    EmvCommon?: never;
    Amex?: never;
    Visa?: never;
    Emv2000: Emv2000Attributes;
    Mastercard?: never;
    $unknown?: never;
  }

  /**
   * Parameters to derive the confidentiality and integrity keys for a payment card using Mastercard derivation method.
   *
   * @public
   */
  export interface MastercardMember {
    EmvCommon?: never;
    Amex?: never;
    Visa?: never;
    Emv2000?: never;
    Mastercard: MasterCardAttributes;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    EmvCommon?: never;
    Amex?: never;
    Visa?: never;
    Emv2000?: never;
    Mastercard?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    EmvCommon: (value: EmvCommonAttributes) => T;
    Amex: (value: AmexAttributes) => T;
    Visa: (value: VisaAttributes) => T;
    Emv2000: (value: Emv2000Attributes) => T;
    Mastercard: (value: MasterCardAttributes) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The shared information used when deriving a key using ECDH.
 *
 * @public
 */
export type DiffieHellmanDerivationData =
  | DiffieHellmanDerivationData.SharedInformationMember
  | DiffieHellmanDerivationData.$UnknownMember;

/**
 * @public
 */
export namespace DiffieHellmanDerivationData {
  /**
   * A string containing information that binds the ECDH derived key to the two parties involved or to the context of the key.
   *
   * It may include details like identities of the two parties deriving the key, context of the operation, session IDs, and optionally a nonce. It must not contain zero bytes. It is not recommended to reuse shared information for multiple ECDH key derivations, as it could result in derived key material being the same across different derivations.
   *
   * @public
   */
  export interface SharedInformationMember {
    SharedInformation: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    SharedInformation?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    SharedInformation: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Parameters that are used for Derived Unique Key Per Transaction (DUKPT) derivation algorithm.
 *
 * @public
 */
export interface DukptAttributes {
  /**
   * The unique identifier known as Key Serial Number (KSN) that comes from an encrypting device using DUKPT encryption method. The KSN is derived from the encrypting device unique identifier and an internal transaction counter.
   *
   * @public
   */
  KeySerialNumber: string | undefined;

  /**
   * The key type derived using DUKPT from a Base Derivation Key (BDK) and Key Serial Number (KSN). This must be less than or equal to the strength of the BDK. For example, you can't use `AES_128` as a derivation type for a BDK of `AES_128` or `TDES_2KEY`.
   *
   * @public
   */
  DukptDerivationType: DukptDerivationType | undefined;
}

/**
 * Parameters required for encryption or decryption of data using DUKPT.
 *
 * @public
 */
export interface DukptDerivationAttributes {
  /**
   * The unique identifier known as Key Serial Number (KSN) that comes from an encrypting device using DUKPT encryption method. The KSN is derived from the encrypting device unique identifier and an internal transaction counter.
   *
   * @public
   */
  KeySerialNumber: string | undefined;

  /**
   * The key type derived using DUKPT from a Base Derivation Key (BDK) and Key Serial Number (KSN). This must be less than or equal to the strength of the BDK. For example, you can't use `AES_128` as a derivation type for a BDK of `AES_128` or `TDES_2KEY`
   *
   * @public
   */
  DukptKeyDerivationType?: DukptDerivationType | undefined;

  /**
   * The type of use of DUKPT, which can be for incoming data decryption, outgoing data encryption, or both.
   *
   * @public
   */
  DukptKeyVariant?: DukptKeyVariant | undefined;
}

/**
 * @public
 */
export interface EncryptDataInput {
  /**
   * The `keyARN` of the encryption key that Amazon Web Services Payment Cryptography uses for plaintext encryption.
   *
   * When a WrappedKeyBlock is provided, this value will be the identifier to the key wrapping key. Otherwise, it is the key identifier used to perform the operation.
   *
   * @public
   */
  KeyIdentifier: string | undefined;

  /**
   * The plaintext to be encrypted.
   *
   * > **Note:** For encryption using asymmetric keys, plaintext data length is constrained by encryption key strength that you define in `KeyAlgorithm` and padding type that you define in `AsymmetricEncryptionAttributes`. For more information, see [Encrypt data](https://docs.aws.amazon.com/payment-cryptography/latest/userguide/encrypt-data.html) in the *Amazon Web Services Payment Cryptography User Guide*.
   *
   * @public
   */
  PlainText: string | undefined;

  /**
   * The encryption key type and attributes for plaintext encryption.
   *
   * @public
   */
  EncryptionAttributes: EncryptionDecryptionAttributes | undefined;

  /**
   * The WrappedKeyBlock containing the encryption key for plaintext encryption.
   *
   * @public
   */
  WrappedKey?: WrappedKey | undefined;
}

/**
 * @public
 */
export interface EncryptDataOutput {
  /**
   * The `keyARN` of the encryption key that Amazon Web Services Payment Cryptography uses for plaintext encryption.
   *
   * @public
   */
  KeyArn: string | undefined;

  /**
   * The key check value (KCV) of the encryption key. The KCV is used to check if all parties holding a given key have the same key or to detect that a key has changed.
   *
   * Amazon Web Services Payment Cryptography computes the KCV according to the CMAC specification.
   *
   * @public
   */
  KeyCheckValue?: string | undefined;

  /**
   * The encrypted ciphertext.
   *
   * @public
   */
  CipherText: string | undefined;
}

/**
 * @public
 */
export interface GenerateAs2805KekValidationInput {
  /**
   * The `keyARN` of sending KEK that Amazon Web Services Payment Cryptography uses for node-to-node initialization
   *
   * @public
   */
  KeyIdentifier: string | undefined;

  /**
   * Defines whether to generate a KEK validation request or KEK validation response for node-to-node initialization.
   *
   * @public
   */
  KekValidationType: As2805KekValidationType | undefined;

  /**
   * The key variant to use for generating a random key for KEK validation during node-to-node initialization.
   *
   * @public
   */
  RandomKeySendVariantMask: RandomKeySendVariantMask | undefined;
}

/**
 * @public
 */
export interface GenerateAs2805KekValidationOutput {
  /**
   * The `keyARN` of sending KEK that Amazon Web Services Payment Cryptography validates for node-to-node initialization
   *
   * @public
   */
  KeyArn: string | undefined;

  /**
   * The key check value (KCV) of the sending KEK that Amazon Web Services Payment Cryptography validates for node-to-node initialization.
   *
   * @public
   */
  KeyCheckValue: string | undefined;

  /**
   * The random key generated for sending KEK validation.
   *
   * @public
   */
  RandomKeySend: string | undefined;

  /**
   * The random key generated for receiving KEK validation. The initiating node sends this key to its partner node for validation.
   *
   * @public
   */
  RandomKeyReceive: string | undefined;
}

/**
 * Parameters to derive session key for an Amex payment card.
 *
 * @public
 */
export interface SessionKeyAmex {
  /**
   * The Primary Account Number (PAN) of the cardholder. A PAN is a unique identifier for a payment credit or debit card and associates the card to a specific account holder.
   *
   * @public
   */
  PrimaryAccountNumber: string | undefined;

  /**
   * A number that identifies and differentiates payment cards with the same Primary Account Number (PAN).
   *
   * @public
   */
  PanSequenceNumber: string | undefined;
}

/**
 * Parameters to derive session key for an Emv2000 payment card for ARQC verification.
 *
 * @public
 */
export interface SessionKeyEmv2000 {
  /**
   * The Primary Account Number (PAN) of the cardholder. A PAN is a unique identifier for a payment credit or debit card and associates the card to a specific account holder.
   *
   * @public
   */
  PrimaryAccountNumber: string | undefined;

  /**
   * A number that identifies and differentiates payment cards with the same Primary Account Number (PAN).
   *
   * @public
   */
  PanSequenceNumber: string | undefined;

  /**
   * The transaction counter that is provided by the terminal during transaction processing.
   *
   * @public
   */
  ApplicationTransactionCounter: string | undefined;
}

/**
 * Parameters to derive session key for an Emv common payment card for ARQC verification.
 *
 * @public
 */
export interface SessionKeyEmvCommon {
  /**
   * The Primary Account Number (PAN) of the cardholder. A PAN is a unique identifier for a payment credit or debit card and associates the card to a specific account holder.
   *
   * @public
   */
  PrimaryAccountNumber: string | undefined;

  /**
   * A number that identifies and differentiates payment cards with the same Primary Account Number (PAN).
   *
   * @public
   */
  PanSequenceNumber: string | undefined;

  /**
   * The transaction counter that is provided by the terminal during transaction processing.
   *
   * @public
   */
  ApplicationTransactionCounter: string | undefined;
}

/**
 * Parameters to derive session key for Mastercard payment card for ARQC verification.
 *
 * @public
 */
export interface SessionKeyMastercard {
  /**
   * The Primary Account Number (PAN) of the cardholder. A PAN is a unique identifier for a payment credit or debit card and associates the card to a specific account holder.
   *
   * @public
   */
  PrimaryAccountNumber: string | undefined;

  /**
   * A number that identifies and differentiates payment cards with the same Primary Account Number (PAN).
   *
   * @public
   */
  PanSequenceNumber: string | undefined;

  /**
   * The transaction counter that is provided by the terminal during transaction processing.
   *
   * @public
   */
  ApplicationTransactionCounter: string | undefined;

  /**
   * A random number generated by the issuer.
   *
   * @public
   */
  UnpredictableNumber: string | undefined;
}

/**
 * Parameters to derive session key for a UnionPay payment card for Authorization Request Cryptogram (ARQC) generation and verification.
 *
 * @public
 */
export interface SessionKeyUnionPay {
  /**
   * The Primary Account Number (PAN) of the cardholder. A PAN is a unique identifier for a payment credit or debit card and associates the card to a specific account holder.
   *
   * @public
   */
  PrimaryAccountNumber: string | undefined;

  /**
   * A number that identifies and differentiates payment cards with the same Primary Account Number (PAN). If not used, enter `00`.
   *
   * @public
   */
  PanSequenceNumber: string | undefined;

  /**
   * The transaction counter that the terminal provides during transaction processing. This value is in hexadecimal format. For example, enter a decimal counter of 109 as `006D`.
   *
   * @public
   */
  ApplicationTransactionCounter: string | undefined;
}

/**
 * Parameters to derive session key for Visa payment card for ARQC verification.
 *
 * @public
 */
export interface SessionKeyVisa {
  /**
   * The Primary Account Number (PAN) of the cardholder. A PAN is a unique identifier for a payment credit or debit card and associates the card to a specific account holder.
   *
   * @public
   */
  PrimaryAccountNumber: string | undefined;

  /**
   * A number that identifies and differentiates payment cards with the same Primary Account Number (PAN).
   *
   * @public
   */
  PanSequenceNumber: string | undefined;
}

/**
 * Parameters to derive a session key for Authorization Response Cryptogram (ARQC) verification.
 *
 * @public
 */
export type SessionKeyDerivation =
  | SessionKeyDerivation.AmexMember
  | SessionKeyDerivation.Emv2000Member
  | SessionKeyDerivation.EmvCommonMember
  | SessionKeyDerivation.MastercardMember
  | SessionKeyDerivation.UnionPayMember
  | SessionKeyDerivation.VisaMember
  | SessionKeyDerivation.$UnknownMember;

/**
 * @public
 */
export namespace SessionKeyDerivation {
  /**
   * Parameters to derive session key for an Emv common payment card for ARQC verification.
   *
   * @public
   */
  export interface EmvCommonMember {
    EmvCommon: SessionKeyEmvCommon;
    Mastercard?: never;
    Emv2000?: never;
    Amex?: never;
    Visa?: never;
    UnionPay?: never;
    $unknown?: never;
  }

  /**
   * Parameters to derive session key for a Mastercard payment card for ARQC verification.
   *
   * @public
   */
  export interface MastercardMember {
    EmvCommon?: never;
    Mastercard: SessionKeyMastercard;
    Emv2000?: never;
    Amex?: never;
    Visa?: never;
    UnionPay?: never;
    $unknown?: never;
  }

  /**
   * Parameters to derive session key for an Emv2000 payment card for ARQC verification.
   *
   * @public
   */
  export interface Emv2000Member {
    EmvCommon?: never;
    Mastercard?: never;
    Emv2000: SessionKeyEmv2000;
    Amex?: never;
    Visa?: never;
    UnionPay?: never;
    $unknown?: never;
  }

  /**
   * Parameters to derive session key for an Amex payment card for ARQC verification.
   *
   * @public
   */
  export interface AmexMember {
    EmvCommon?: never;
    Mastercard?: never;
    Emv2000?: never;
    Amex: SessionKeyAmex;
    Visa?: never;
    UnionPay?: never;
    $unknown?: never;
  }

  /**
   * Parameters to derive session key for a Visa payment cardfor ARQC verification.
   *
   * @public
   */
  export interface VisaMember {
    EmvCommon?: never;
    Mastercard?: never;
    Emv2000?: never;
    Amex?: never;
    Visa: SessionKeyVisa;
    UnionPay?: never;
    $unknown?: never;
  }

  /**
   * Parameters to derive session key for a UnionPay payment card for Authorization Request Cryptogram (ARQC) generation and verification.
   *
   * @public
   */
  export interface UnionPayMember {
    EmvCommon?: never;
    Mastercard?: never;
    Emv2000?: never;
    Amex?: never;
    Visa?: never;
    UnionPay: SessionKeyUnionPay;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    EmvCommon?: never;
    Mastercard?: never;
    Emv2000?: never;
    Amex?: never;
    Visa?: never;
    UnionPay?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    EmvCommon: (value: SessionKeyEmvCommon) => T;
    Mastercard: (value: SessionKeyMastercard) => T;
    Emv2000: (value: SessionKeyEmv2000) => T;
    Amex: (value: SessionKeyAmex) => T;
    Visa: (value: SessionKeyVisa) => T;
    UnionPay: (value: SessionKeyUnionPay) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface GenerateAuthRequestCryptogramInput {
  /**
   * The `keyARN` of the IMK-AC (TR31_E0_EMV_MKEY_APP_CRYPTOGRAMS) that Amazon Web Services Payment Cryptography uses to generate the ARQC.
   *
   * @public
   */
  KeyIdentifier: string | undefined;

  /**
   * The transaction data that Amazon Web Services Payment Cryptography uses for ARQC generation. The same transaction data is used for ARQC verification by the issuer using VerifyAuthRequestCryptogram.
   *
   * @public
   */
  TransactionData: string | undefined;

  /**
   * The method to use when deriving the major encryption key for ARQC generation within Amazon Web Services Payment Cryptography.
   *
   * @public
   */
  MajorKeyDerivationMode: MajorKeyDerivationMode | undefined;

  /**
   * The attributes and values to use for deriving a session key for ARQC generation within Amazon Web Services Payment Cryptography.
   *
   * @public
   */
  SessionKeyDerivationAttributes: SessionKeyDerivation | undefined;
}

/**
 * @public
 */
export interface GenerateAuthRequestCryptogramOutput {
  /**
   * The `keyARN` of the IMK-AC that Amazon Web Services Payment Cryptography uses for ARQC generation.
   *
   * @public
   */
  KeyArn: string | undefined;

  /**
   * The key check value (KCV) of the encryption key. The KCV is used to check if all parties holding a given key have the same key or to detect that a key has changed.
   *
   * Amazon Web Services Payment Cryptography computes the KCV according to the CMAC specification.
   *
   * @public
   */
  KeyCheckValue: string | undefined;

  /**
   * The Authorization Request Cryptogram (ARQC) generated by Amazon Web Services Payment Cryptography using the specified key and transaction data.
   *
   * @public
   */
  AuthRequestCryptogram: string | undefined;
}

/**
 * @public
 */
export interface GenerateCardValidationDataInput {
  /**
   * The `keyARN` of the CVK encryption key that Amazon Web Services Payment Cryptography uses to generate card data.
   *
   * @public
   */
  KeyIdentifier: string | undefined;

  /**
   * The Primary Account Number (PAN), a unique identifier for a payment credit or debit card that associates the card with a specific account holder.
   *
   * @public
   */
  PrimaryAccountNumber: string | undefined;

  /**
   * The algorithm for generating CVV or CSC values for the card within Amazon Web Services Payment Cryptography.
   *
   * @public
   */
  GenerationAttributes: CardGenerationAttributes | undefined;

  /**
   * The length of the CVV or CSC to be generated. The default value is 3.
   *
   * @public
   */
  ValidationDataLength?: number | undefined;
}

/**
 * @public
 */
export interface GenerateCardValidationDataOutput {
  /**
   * The `keyARN` of the CVK encryption key that Amazon Web Services Payment Cryptography uses to generate CVV or CSC.
   *
   * @public
   */
  KeyArn: string | undefined;

  /**
   * The key check value (KCV) of the encryption key. The KCV is used to check if all parties holding a given key have the same key or to detect that a key has changed.
   *
   * Amazon Web Services Payment Cryptography computes the KCV according to the CMAC specification.
   *
   * @public
   */
  KeyCheckValue: string | undefined;

  /**
   * The CVV or CSC value that Amazon Web Services Payment Cryptography generates for the card.
   *
   * @public
   */
  ValidationData: string | undefined;
}

/**
 * Parameters required for DUKPT MAC generation and verification.
 *
 * @public
 */
export interface MacAlgorithmDukpt {
  /**
   * The unique identifier known as Key Serial Number (KSN) that comes from an encrypting device using DUKPT encryption method. The KSN is derived from the encrypting device unique identifier and an internal transaction counter.
   *
   * @public
   */
  KeySerialNumber: string | undefined;

  /**
   * The type of use of DUKPT, which can be MAC generation, MAC verification, or both.
   *
   * @public
   */
  DukptKeyVariant: DukptKeyVariant | undefined;

  /**
   * The key type derived using DUKPT from a Base Derivation Key (BDK) and Key Serial Number (KSN). This must be less than or equal to the strength of the BDK. For example, you can't use `AES_128` as a derivation type for a BDK of `AES_128` or `TDES_2KEY`.
   *
   * @public
   */
  DukptDerivationType?: DukptDerivationType | undefined;
}

/**
 * Parameters to derive session key value using a MAC EMV algorithm.
 *
 * @public
 */
export type SessionKeyDerivationValue =
  | SessionKeyDerivationValue.ApplicationCryptogramMember
  | SessionKeyDerivationValue.ApplicationTransactionCounterMember
  | SessionKeyDerivationValue.$UnknownMember;

/**
 * @public
 */
export namespace SessionKeyDerivationValue {
  /**
   * The cryptogram provided by the terminal during transaction processing.
   *
   * @public
   */
  export interface ApplicationCryptogramMember {
    ApplicationCryptogram: string;
    ApplicationTransactionCounter?: never;
    $unknown?: never;
  }

  /**
   * The transaction counter that is provided by the terminal during transaction processing.
   *
   * @public
   */
  export interface ApplicationTransactionCounterMember {
    ApplicationCryptogram?: never;
    ApplicationTransactionCounter: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    ApplicationCryptogram?: never;
    ApplicationTransactionCounter?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    ApplicationCryptogram: (value: string) => T;
    ApplicationTransactionCounter: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Parameters that are required for EMV MAC generation and verification.
 *
 * @public
 */
export interface MacAlgorithmEmv {
  /**
   * The method to use when deriving the master key for EMV MAC generation or verification.
   *
   * @public
   */
  MajorKeyDerivationMode: MajorKeyDerivationMode | undefined;

  /**
   * The Primary Account Number (PAN), a unique identifier for a payment credit or debit card and associates the card to a specific account holder.
   *
   * @public
   */
  PrimaryAccountNumber: string | undefined;

  /**
   * A number that identifies and differentiates payment cards with the same Primary Account Number (PAN).
   *
   * @public
   */
  PanSequenceNumber: string | undefined;

  /**
   * The method of deriving a session key for EMV MAC generation or verification.
   *
   * @public
   */
  SessionKeyDerivationMode: SessionKeyDerivationMode | undefined;

  /**
   * Parameters that are required to generate session key for EMV generation and verification.
   *
   * @public
   */
  SessionKeyDerivationValue: SessionKeyDerivationValue | undefined;
}

/**
 * Parameters that are required for DUKPT, HMAC, or EMV MAC generation or verification.
 *
 * @public
 */
export type MacAttributes =
  | MacAttributes.AlgorithmMember
  | MacAttributes.DukptCmacMember
  | MacAttributes.DukptIso9797Algorithm1Member
  | MacAttributes.DukptIso9797Algorithm3Member
  | MacAttributes.EmvMacMember
  | MacAttributes.$UnknownMember;

/**
 * @public
 */
export namespace MacAttributes {
  /**
   * The encryption algorithm for MAC generation or verification.
   *
   * @public
   */
  export interface AlgorithmMember {
    Algorithm: MacAlgorithm;
    EmvMac?: never;
    DukptIso9797Algorithm1?: never;
    DukptIso9797Algorithm3?: never;
    DukptCmac?: never;
    $unknown?: never;
  }

  /**
   * Parameters that are required for MAC generation or verification using EMV MAC algorithm.
   *
   * @public
   */
  export interface EmvMacMember {
    Algorithm?: never;
    EmvMac: MacAlgorithmEmv;
    DukptIso9797Algorithm1?: never;
    DukptIso9797Algorithm3?: never;
    DukptCmac?: never;
    $unknown?: never;
  }

  /**
   * Parameters that are required for MAC generation or verification using DUKPT ISO 9797 algorithm1.
   *
   * @public
   */
  export interface DukptIso9797Algorithm1Member {
    Algorithm?: never;
    EmvMac?: never;
    DukptIso9797Algorithm1: MacAlgorithmDukpt;
    DukptIso9797Algorithm3?: never;
    DukptCmac?: never;
    $unknown?: never;
  }

  /**
   * Parameters that are required for MAC generation or verification using DUKPT ISO 9797 algorithm3.
   *
   * @public
   */
  export interface DukptIso9797Algorithm3Member {
    Algorithm?: never;
    EmvMac?: never;
    DukptIso9797Algorithm1?: never;
    DukptIso9797Algorithm3: MacAlgorithmDukpt;
    DukptCmac?: never;
    $unknown?: never;
  }

  /**
   * Parameters that are required for MAC generation or verification using DUKPT CMAC algorithm.
   *
   * @public
   */
  export interface DukptCmacMember {
    Algorithm?: never;
    EmvMac?: never;
    DukptIso9797Algorithm1?: never;
    DukptIso9797Algorithm3?: never;
    DukptCmac: MacAlgorithmDukpt;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Algorithm?: never;
    EmvMac?: never;
    DukptIso9797Algorithm1?: never;
    DukptIso9797Algorithm3?: never;
    DukptCmac?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Algorithm: (value: MacAlgorithm) => T;
    EmvMac: (value: MacAlgorithmEmv) => T;
    DukptIso9797Algorithm1: (value: MacAlgorithmDukpt) => T;
    DukptIso9797Algorithm3: (value: MacAlgorithmDukpt) => T;
    DukptCmac: (value: MacAlgorithmDukpt) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface GenerateMacInput {
  /**
   * The `keyARN` of the MAC generation encryption key.
   *
   * @public
   */
  KeyIdentifier: string | undefined;

  /**
   * The data for which a MAC is under generation. This value must be hexBinary.
   *
   * @public
   */
  MessageData: string | undefined;

  /**
   * The attributes and data values to use for MAC generation within Amazon Web Services Payment Cryptography.
   *
   * @public
   */
  GenerationAttributes: MacAttributes | undefined;

  /**
   * The length of a MAC under generation.
   *
   * @public
   */
  MacLength?: number | undefined;
}

/**
 * @public
 */
export interface GenerateMacOutput {
  /**
   * The `keyARN` of the encryption key that Amazon Web Services Payment Cryptography uses for MAC generation.
   *
   * @public
   */
  KeyArn: string | undefined;

  /**
   * The key check value (KCV) of the encryption key. The KCV is used to check if all parties holding a given key have the same key or to detect that a key has changed.
   *
   * Amazon Web Services Payment Cryptography computes the KCV according to the CMAC specification.
   *
   * @public
   */
  KeyCheckValue: string | undefined;

  /**
   * The MAC cryptogram generated within Amazon Web Services Payment Cryptography.
   *
   * @public
   */
  Mac: string | undefined;
}

/**
 * @public
 */
export interface GenerateMacEmvPinChangeInput {
  /**
   * The `keyARN` of the PEK protecting the incoming new encrypted PIN block.
   *
   * @public
   */
  NewPinPekIdentifier: string | undefined;

  /**
   * The incoming new encrypted PIN block data for offline pin change on an EMV card.
   *
   * @public
   */
  NewEncryptedPinBlock: string | undefined;

  /**
   * The PIN encoding format of the incoming new encrypted PIN block as specified in ISO 9564.
   *
   * @public
   */
  PinBlockFormat: PinBlockFormatForEmvPinChange | undefined;

  /**
   * The `keyARN` of the issuer master key (IMK-SMI) used to authenticate the issuer script response.
   *
   * @public
   */
  SecureMessagingIntegrityKeyIdentifier: string | undefined;

  /**
   * The `keyARN` of the issuer master key (IMK-SMC) used to protect the PIN block data in the issuer script response.
   *
   * @public
   */
  SecureMessagingConfidentialityKeyIdentifier: string | undefined;

  /**
   * The message data is the APDU command from the card reader or terminal. The target encrypted PIN block, after translation to ISO2 format, is appended to this message data to generate an issuer script response.
   *
   * @public
   */
  MessageData: string | undefined;

  /**
   * The attributes and data values to derive payment card specific confidentiality and integrity keys.
   *
   * @public
   */
  DerivationMethodAttributes: DerivationMethodAttributes | undefined;
}

/**
 * The attributes values used for Amex and Visa derivation methods.
 *
 * @public
 */
export interface VisaAmexDerivationOutputs {
  /**
   * The `keyArn` of the issuer master key for cryptogram (IMK-AC) used by the operation.
   *
   * @public
   */
  AuthorizationRequestKeyArn: string | undefined;

  /**
   * The key check value (KCV) of the issuer master key for cryptogram (IMK-AC) used by the operation.
   *
   * @public
   */
  AuthorizationRequestKeyCheckValue: string | undefined;

  /**
   * The `keyArn` of the current PIN PEK.
   *
   * @public
   */
  CurrentPinPekArn?: string | undefined;

  /**
   * The key check value (KCV) of the current PIN PEK.
   *
   * @public
   */
  CurrentPinPekKeyCheckValue?: string | undefined;
}

/**
 * @public
 */
export interface GenerateMacEmvPinChangeOutput {
  /**
   * Returns the `keyArn` of the PEK protecting the incoming new encrypted PIN block.
   *
   * @public
   */
  NewPinPekArn: string | undefined;

  /**
   * Returns the `keyArn` of the IMK-SMI used by the operation.
   *
   * @public
   */
  SecureMessagingIntegrityKeyArn: string | undefined;

  /**
   * Returns the `keyArn` of the IMK-SMC used by the operation.
   *
   * @public
   */
  SecureMessagingConfidentialityKeyArn: string | undefined;

  /**
   * Returns the mac of the issuer script containing message data and appended target encrypted pin block in ISO2 format.
   *
   * @public
   */
  Mac: string | undefined;

  /**
   * Returns the incoming new encrpted PIN block.
   *
   * @public
   */
  EncryptedPinBlock: string | undefined;

  /**
   * The key check value (KCV) of the PEK uprotecting the incoming new encrypted PIN block.
   *
   * @public
   */
  NewPinPekKeyCheckValue: string | undefined;

  /**
   * The key check value (KCV) of the SMI issuer master key used by the operation.
   *
   * @public
   */
  SecureMessagingIntegrityKeyCheckValue: string | undefined;

  /**
   * The key check value (KCV) of the SMC issuer master key used by the operation.
   *
   * @public
   */
  SecureMessagingConfidentialityKeyCheckValue: string | undefined;

  /**
   * The attribute values used for Amex and Visa derivation methods.
   *
   * @public
   */
  VisaAmexDerivationOutputs?: VisaAmexDerivationOutputs | undefined;
}

/**
 * Parameters that are required to generate or verify Ibm3624 natural PIN.
 *
 * @public
 */
export interface Ibm3624NaturalPin {
  /**
   * The decimalization table to use for IBM 3624 PIN algorithm. The table is used to convert the algorithm intermediate result from hexadecimal characters to decimal.
   *
   * @public
   */
  DecimalizationTable: string | undefined;

  /**
   * The padding character for validation data.
   *
   * @public
   */
  PinValidationDataPadCharacter: string | undefined;

  /**
   * The unique data for cardholder identification.
   *
   * @public
   */
  PinValidationData: string | undefined;
}

/**
 * Parameters that are required to generate or verify Ibm3624 PIN from offset PIN.
 *
 * @public
 */
export interface Ibm3624PinFromOffset {
  /**
   * The decimalization table to use for IBM 3624 PIN algorithm. The table is used to convert the algorithm intermediate result from hexadecimal characters to decimal.
   *
   * @public
   */
  DecimalizationTable: string | undefined;

  /**
   * The padding character for validation data.
   *
   * @public
   */
  PinValidationDataPadCharacter: string | undefined;

  /**
   * The unique data for cardholder identification.
   *
   * @public
   */
  PinValidationData: string | undefined;

  /**
   * The PIN offset value.
   *
   * @public
   */
  PinOffset: string | undefined;
}

/**
 * Pparameters that are required to generate or verify Ibm3624 PIN offset PIN.
 *
 * @public
 */
export interface Ibm3624PinOffset {
  /**
   * The encrypted PIN block data. According to ISO 9564 standard, a PIN Block is an encoded representation of a payment card Personal Account Number (PAN) and the cardholder Personal Identification Number (PIN).
   *
   * @public
   */
  EncryptedPinBlock: string | undefined;

  /**
   * The decimalization table to use for IBM 3624 PIN algorithm. The table is used to convert the algorithm intermediate result from hexadecimal characters to decimal.
   *
   * @public
   */
  DecimalizationTable: string | undefined;

  /**
   * The padding character for validation data.
   *
   * @public
   */
  PinValidationDataPadCharacter: string | undefined;

  /**
   * The unique data for cardholder identification.
   *
   * @public
   */
  PinValidationData: string | undefined;
}

/**
 * Parameters that are required to generate or verify Ibm3624 random PIN.
 *
 * @public
 */
export interface Ibm3624RandomPin {
  /**
   * The decimalization table to use for IBM 3624 PIN algorithm. The table is used to convert the algorithm intermediate result from hexadecimal characters to decimal.
   *
   * @public
   */
  DecimalizationTable: string | undefined;

  /**
   * The padding character for validation data.
   *
   * @public
   */
  PinValidationDataPadCharacter: string | undefined;

  /**
   * The unique data for cardholder identification.
   *
   * @public
   */
  PinValidationData: string | undefined;
}

/**
 * Parameters that are required to generate or verify Visa PIN.
 *
 * @public
 */
export interface VisaPin {
  /**
   * The value for PIN verification index. It is used in the Visa PIN algorithm to calculate the PVV (PIN Verification Value).
   *
   * @public
   */
  PinVerificationKeyIndex: number | undefined;
}

/**
 * Parameters that are required to generate or verify Visa PVV (PIN Verification Value).
 *
 * @public
 */
export interface VisaPinVerificationValue {
  /**
   * The encrypted PIN block data to verify.
   *
   * @public
   */
  EncryptedPinBlock: string | undefined;

  /**
   * The value for PIN verification index. It is used in the Visa PIN algorithm to calculate the PVV (PIN Verification Value).
   *
   * @public
   */
  PinVerificationKeyIndex: number | undefined;
}

/**
 * Parameters that are required for PIN data generation.
 *
 * @public
 */
export type PinGenerationAttributes =
  | PinGenerationAttributes.Ibm3624NaturalPinMember
  | PinGenerationAttributes.Ibm3624PinFromOffsetMember
  | PinGenerationAttributes.Ibm3624PinOffsetMember
  | PinGenerationAttributes.Ibm3624RandomPinMember
  | PinGenerationAttributes.VisaPinMember
  | PinGenerationAttributes.VisaPinVerificationValueMember
  | PinGenerationAttributes.$UnknownMember;

/**
 * @public
 */
export namespace PinGenerationAttributes {
  /**
   * Parameters that are required to generate or verify Visa PIN.
   *
   * @public
   */
  export interface VisaPinMember {
    VisaPin: VisaPin;
    VisaPinVerificationValue?: never;
    Ibm3624PinOffset?: never;
    Ibm3624NaturalPin?: never;
    Ibm3624RandomPin?: never;
    Ibm3624PinFromOffset?: never;
    $unknown?: never;
  }

  /**
   * Parameters that are required to generate or verify Visa PIN Verification Value (PVV).
   *
   * @public
   */
  export interface VisaPinVerificationValueMember {
    VisaPin?: never;
    VisaPinVerificationValue: VisaPinVerificationValue;
    Ibm3624PinOffset?: never;
    Ibm3624NaturalPin?: never;
    Ibm3624RandomPin?: never;
    Ibm3624PinFromOffset?: never;
    $unknown?: never;
  }

  /**
   * Parameters that are required to generate or verify Ibm3624 PIN offset PIN.
   *
   * @public
   */
  export interface Ibm3624PinOffsetMember {
    VisaPin?: never;
    VisaPinVerificationValue?: never;
    Ibm3624PinOffset: Ibm3624PinOffset;
    Ibm3624NaturalPin?: never;
    Ibm3624RandomPin?: never;
    Ibm3624PinFromOffset?: never;
    $unknown?: never;
  }

  /**
   * Parameters that are required to generate or verify Ibm3624 natural PIN.
   *
   * @public
   */
  export interface Ibm3624NaturalPinMember {
    VisaPin?: never;
    VisaPinVerificationValue?: never;
    Ibm3624PinOffset?: never;
    Ibm3624NaturalPin: Ibm3624NaturalPin;
    Ibm3624RandomPin?: never;
    Ibm3624PinFromOffset?: never;
    $unknown?: never;
  }

  /**
   * Parameters that are required to generate or verify Ibm3624 random PIN.
   *
   * @public
   */
  export interface Ibm3624RandomPinMember {
    VisaPin?: never;
    VisaPinVerificationValue?: never;
    Ibm3624PinOffset?: never;
    Ibm3624NaturalPin?: never;
    Ibm3624RandomPin: Ibm3624RandomPin;
    Ibm3624PinFromOffset?: never;
    $unknown?: never;
  }

  /**
   * Parameters that are required to generate or verify Ibm3624 PIN from offset PIN.
   *
   * @public
   */
  export interface Ibm3624PinFromOffsetMember {
    VisaPin?: never;
    VisaPinVerificationValue?: never;
    Ibm3624PinOffset?: never;
    Ibm3624NaturalPin?: never;
    Ibm3624RandomPin?: never;
    Ibm3624PinFromOffset: Ibm3624PinFromOffset;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    VisaPin?: never;
    VisaPinVerificationValue?: never;
    Ibm3624PinOffset?: never;
    Ibm3624NaturalPin?: never;
    Ibm3624RandomPin?: never;
    Ibm3624PinFromOffset?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    VisaPin: (value: VisaPin) => T;
    VisaPinVerificationValue: (value: VisaPinVerificationValue) => T;
    Ibm3624PinOffset: (value: Ibm3624PinOffset) => T;
    Ibm3624NaturalPin: (value: Ibm3624NaturalPin) => T;
    Ibm3624RandomPin: (value: Ibm3624RandomPin) => T;
    Ibm3624PinFromOffset: (value: Ibm3624PinFromOffset) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface GeneratePinDataInput {
  /**
   * The `keyARN` of the PEK that Amazon Web Services Payment Cryptography uses for pin data generation.
   *
   * @public
   */
  GenerationKeyIdentifier: string | undefined;

  /**
   * The `keyARN` of the PEK that Amazon Web Services Payment Cryptography uses to encrypt the PIN Block. For ECDH, it is the `keyARN` of the asymmetric ECC key.
   *
   * @public
   */
  EncryptionKeyIdentifier: string | undefined;

  /**
   * The attributes and values to use for PIN, PVV, or PIN Offset generation.
   *
   * @public
   */
  GenerationAttributes: PinGenerationAttributes | undefined;

  /**
   * The length of PIN under generation.
   *
   * @public
   */
  PinDataLength?: number | undefined;

  /**
   * The Primary Account Number (PAN), a unique identifier for a payment credit or debit card that associates the card with a specific account holder.
   *
   * @public
   */
  PrimaryAccountNumber?: string | undefined;

  /**
   * The PIN encoding format for pin data generation as specified in ISO 9564. Amazon Web Services Payment Cryptography supports `ISO_Format_0`, `ISO_Format_3` and `ISO_Format_4`.
   *
   * The `ISO_Format_0` PIN block format is equivalent to the ANSI X9.8, VISA-1, and ECI-1 PIN block formats. It is similar to a VISA-4 PIN block format. It supports a PIN from 4 to 12 digits in length.
   *
   * The `ISO_Format_3` PIN block format is the same as `ISO_Format_0` except that the fill digits are random values from 10 to 15.
   *
   * The `ISO_Format_4` PIN block format is the only one supporting AES encryption.
   *
   * @public
   */
  PinBlockFormat: PinBlockFormatForPinData | undefined;

  /**
   * Parameter information of a WrappedKeyBlock for encryption key exchange.
   *
   * @public
   */
  EncryptionWrappedKey?: WrappedKey | undefined;
}

/**
 * Parameters that are required to generate, translate, or verify PIN data.
 *
 * @public
 */
export type PinData =
  | PinData.PinOffsetMember
  | PinData.VerificationValueMember
  | PinData.$UnknownMember;

/**
 * @public
 */
export namespace PinData {
  /**
   * The PIN offset value.
   *
   * @public
   */
  export interface PinOffsetMember {
    PinOffset: string;
    VerificationValue?: never;
    $unknown?: never;
  }

  /**
   * The unique data to identify a cardholder. In most cases, this is the same as cardholder's Primary Account Number (PAN). If a value is not provided, it defaults to PAN.
   *
   * @public
   */
  export interface VerificationValueMember {
    PinOffset?: never;
    VerificationValue: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    PinOffset?: never;
    VerificationValue?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    PinOffset: (value: string) => T;
    VerificationValue: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface GeneratePinDataOutput {
  /**
   * The `keyARN` of the pin data generation key that Amazon Web Services Payment Cryptography uses for PIN, PVV or PIN Offset generation.
   *
   * @public
   */
  GenerationKeyArn: string | undefined;

  /**
   * The key check value (KCV) of the encryption key. The KCV is used to check if all parties holding a given key have the same key or to detect that a key has changed.
   *
   * Amazon Web Services Payment Cryptography computes the KCV according to the CMAC specification.
   *
   * @public
   */
  GenerationKeyCheckValue: string | undefined;

  /**
   * The `keyARN` of the PEK that Amazon Web Services Payment Cryptography uses for encrypted pin block generation. For ECDH, it is the `keyARN` of the asymmetric ECC key.
   *
   * @public
   */
  EncryptionKeyArn: string | undefined;

  /**
   * The key check value (KCV) of the encryption key. The KCV is used to check if all parties holding a given key have the same key or to detect that a key has changed.
   *
   * Amazon Web Services Payment Cryptography computes the KCV according to the CMAC specification.
   *
   * @public
   */
  EncryptionKeyCheckValue: string | undefined;

  /**
   * The PIN block encrypted under PEK from Amazon Web Services Payment Cryptography. The encrypted PIN block is a composite of PAN (Primary Account Number) and PIN (Personal Identification Number), generated in accordance with ISO 9564 standard.
   *
   * @public
   */
  EncryptedPinBlock: string | undefined;

  /**
   * The attributes and values Amazon Web Services Payment Cryptography uses for pin data generation.
   *
   * @public
   */
  PinData: PinData | undefined;
}

/**
 * Parameters that are required to generate or verify Ibm3624 PIN verification PIN.
 *
 * @public
 */
export interface Ibm3624PinVerification {
  /**
   * The decimalization table to use for IBM 3624 PIN algorithm. The table is used to convert the algorithm intermediate result from hexadecimal characters to decimal.
   *
   * @public
   */
  DecimalizationTable: string | undefined;

  /**
   * The padding character for validation data.
   *
   * @public
   */
  PinValidationDataPadCharacter: string | undefined;

  /**
   * The unique data for cardholder identification.
   *
   * @public
   */
  PinValidationData: string | undefined;

  /**
   * The PIN offset value.
   *
   * @public
   */
  PinOffset: string | undefined;
}

/**
 * Parameter information of a TR31KeyBlock wrapped using an ECDH derived key.
 *
 * @public
 */
export interface IncomingDiffieHellmanTr31KeyBlock {
  /**
   * The `keyARN` of the asymmetric ECC key pair.
   *
   * @public
   */
  PrivateKeyIdentifier: string | undefined;

  /**
   * The `keyArn` of the certificate that signed the client's `PublicKeyCertificate`.
   *
   * @public
   */
  CertificateAuthorityPublicKeyIdentifier: string | undefined;

  /**
   * The client's public key certificate in PEM format (base64 encoded) to use for ECDH key derivation.
   *
   * @public
   */
  PublicKeyCertificate: string | undefined;

  /**
   * The key algorithm of the derived ECDH key.
   *
   * @public
   */
  DeriveKeyAlgorithm: SymmetricKeyAlgorithm | undefined;

  /**
   * The key derivation function to use for deriving a key using ECDH.
   *
   * @public
   */
  KeyDerivationFunction: KeyDerivationFunction | undefined;

  /**
   * The hash type to use for deriving a key using ECDH.
   *
   * @public
   */
  KeyDerivationHashAlgorithm: KeyDerivationHashAlgorithm | undefined;

  /**
   * The shared information used when deriving a key using ECDH.
   *
   * @public
   */
  DerivationData: DiffieHellmanDerivationData | undefined;

  /**
   * The WrappedKeyBlock containing the transaction key wrapped using an ECDH dervied key.
   *
   * @public
   */
  WrappedKeyBlock: string | undefined;
}

/**
 * Parameter information of the incoming WrappedKeyBlock containing the transaction key.
 *
 * @public
 */
export type IncomingKeyMaterial =
  | IncomingKeyMaterial.DiffieHellmanTr31KeyBlockMember
  | IncomingKeyMaterial.$UnknownMember;

/**
 * @public
 */
export namespace IncomingKeyMaterial {
  /**
   * Parameter information of the TR31WrappedKeyBlock containing the transaction key wrapped using an ECDH dervied key.
   *
   * @public
   */
  export interface DiffieHellmanTr31KeyBlockMember {
    DiffieHellmanTr31KeyBlock: IncomingDiffieHellmanTr31KeyBlock;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    DiffieHellmanTr31KeyBlock?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    DiffieHellmanTr31KeyBlock: (value: IncomingDiffieHellmanTr31KeyBlock) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Parameter information of the TR31WrappedKeyBlock containing the transaction key wrapped using a KEK.
 *
 * @public
 */
export interface OutgoingTr31KeyBlock {
  /**
   * The `keyARN` of the KEK used to wrap the transaction key.
   *
   * @public
   */
  WrappingKeyIdentifier: string | undefined;
}

/**
 * Parameter information of the outgoing TR31WrappedKeyBlock containing the transaction key.
 *
 * @public
 */
export type OutgoingKeyMaterial =
  | OutgoingKeyMaterial.Tr31KeyBlockMember
  | OutgoingKeyMaterial.$UnknownMember;

/**
 * @public
 */
export namespace OutgoingKeyMaterial {
  /**
   * Parameter information of the TR31WrappedKeyBlock containing the transaction key wrapped using a KEK.
   *
   * @public
   */
  export interface Tr31KeyBlockMember {
    Tr31KeyBlock: OutgoingTr31KeyBlock;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Tr31KeyBlock?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Tr31KeyBlock: (value: OutgoingTr31KeyBlock) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Parameters that are required to perform reencryption operation.
 *
 * @public
 */
export type ReEncryptionAttributes =
  | ReEncryptionAttributes.AsymmetricMember
  | ReEncryptionAttributes.DukptMember
  | ReEncryptionAttributes.SymmetricMember
  | ReEncryptionAttributes.$UnknownMember;

/**
 * @public
 */
export namespace ReEncryptionAttributes {
  /**
   * Specifies the parameters required to encrypt data using symmetric keys.
   *
   * @public
   */
  export interface SymmetricMember {
    Symmetric: SymmetricEncryptionAttributes;
    Asymmetric?: never;
    Dukpt?: never;
    $unknown?: never;
  }

  /**
   * Specifies the parameters required to encrypt data using an asymmetric key pair. You must specify a `PaddingType`.
   *
   * @public
   */
  export interface AsymmetricMember {
    Symmetric?: never;
    Asymmetric: AsymmetricEncryptionAttributes;
    Dukpt?: never;
    $unknown?: never;
  }

  /**
   * Specifies the parameters required to encrypt data using DUKPT.
   *
   * @public
   */
  export interface DukptMember {
    Symmetric?: never;
    Asymmetric?: never;
    Dukpt: DukptEncryptionAttributes;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Symmetric?: never;
    Asymmetric?: never;
    Dukpt?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Symmetric: (value: SymmetricEncryptionAttributes) => T;
    Asymmetric: (value: AsymmetricEncryptionAttributes) => T;
    Dukpt: (value: DukptEncryptionAttributes) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface ReEncryptDataInput {
  /**
   * The `keyARN` of the encryption key of incoming ciphertext data.
   *
   * When a WrappedKeyBlock is provided, this value will be the identifier to the key wrapping key. Otherwise, it is the key identifier used to perform the operation.
   *
   * @public
   */
  IncomingKeyIdentifier: string | undefined;

  /**
   * The `keyARN` of the encryption key of outgoing ciphertext data after encryption by Amazon Web Services Payment Cryptography.
   *
   * @public
   */
  OutgoingKeyIdentifier: string | undefined;

  /**
   * Ciphertext to be encrypted. The minimum allowed length is 16 bytes and maximum allowed length is 4096 bytes.
   *
   * @public
   */
  CipherText: string | undefined;

  /**
   * The attributes and values for incoming ciphertext.
   *
   * @public
   */
  IncomingEncryptionAttributes: ReEncryptionAttributes | undefined;

  /**
   * The attributes and values for outgoing ciphertext data after encryption by Amazon Web Services Payment Cryptography.
   *
   * @public
   */
  OutgoingEncryptionAttributes: ReEncryptionAttributes | undefined;

  /**
   * The WrappedKeyBlock containing the encryption key of incoming ciphertext data.
   *
   * @public
   */
  IncomingWrappedKey?: WrappedKey | undefined;

  /**
   * The WrappedKeyBlock containing the encryption key of outgoing ciphertext data after encryption by Amazon Web Services Payment Cryptography.
   *
   * @public
   */
  OutgoingWrappedKey?: WrappedKey | undefined;
}

/**
 * @public
 */
export interface ReEncryptDataOutput {
  /**
   * The keyARN (Amazon Resource Name) of the encryption key that Amazon Web Services Payment Cryptography uses for plaintext encryption.
   *
   * @public
   */
  KeyArn: string | undefined;

  /**
   * The key check value (KCV) of the encryption key. The KCV is used to check if all parties holding a given key have the same key or to detect that a key has changed.
   *
   * Amazon Web Services Payment Cryptography computes the KCV according to the CMAC specification.
   *
   * @public
   */
  KeyCheckValue: string | undefined;

  /**
   * The encrypted ciphertext.
   *
   * @public
   */
  CipherText: string | undefined;
}

/**
 * @public
 */
export interface TranslateKeyMaterialInput {
  /**
   * Parameter information of the TR31WrappedKeyBlock containing the transaction key.
   *
   * @public
   */
  IncomingKeyMaterial: IncomingKeyMaterial | undefined;

  /**
   * Parameter information of the wrapping key used to wrap the transaction key in the outgoing TR31WrappedKeyBlock.
   *
   * @public
   */
  OutgoingKeyMaterial: OutgoingKeyMaterial | undefined;

  /**
   * The key check value (KCV) algorithm used for calculating the KCV of the derived key.
   *
   * @public
   */
  KeyCheckValueAlgorithm?: KeyCheckValueAlgorithm | undefined;
}

/**
 * The parameter information of the outgoing wrapped key block.
 *
 * @public
 */
export interface WrappedWorkingKey {
  /**
   * The wrapped key block of the outgoing transaction key.
   *
   * @public
   */
  WrappedKeyMaterial: string | undefined;

  /**
   * The key check value (KCV) of the key contained within the outgoing TR31WrappedKeyBlock.
   *
   * The KCV is used to check if all parties holding a given key have the same key or to detect that a key has changed. For more information on KCV, see [KCV](https://docs.aws.amazon.com/payment-cryptography/latest/userguide/terminology.html#terms.kcv) in the *Amazon Web Services Payment Cryptography User Guide*.
   *
   * @public
   */
  KeyCheckValue: string | undefined;

  /**
   * The key block format of the wrapped key.
   *
   * @public
   */
  WrappedKeyMaterialFormat: WrappedKeyMaterialFormat | undefined;
}

/**
 * @public
 */
export interface TranslateKeyMaterialOutput {
  /**
   * The outgoing KEK wrapped TR31WrappedKeyBlock.
   *
   * @public
   */
  WrappedKey: WrappedWorkingKey | undefined;
}

/**
 * Parameters that are required for translation between AS2805 PIN format 0 translation.
 *
 * @public
 */
export interface TranslationPinDataAs2805Format0 {
  /**
   * The Primary Account Number (PAN) of the cardholder. A PAN is a unique identifier for a payment credit or debit card and associates the card to a specific account holder.
   *
   * @public
   */
  PrimaryAccountNumber: string | undefined;
}

/**
 * Parameters that are required for translation between ISO9564 PIN format 0,3,4 translation.
 *
 * @public
 */
export interface TranslationPinDataIsoFormat034 {
  /**
   * The Primary Account Number (PAN) of the cardholder. A PAN is a unique identifier for a payment credit or debit card and associates the card to a specific account holder.
   *
   * @public
   */
  PrimaryAccountNumber: string | undefined;
}

/**
 * Parameters that are required for ISO9564 PIN format 1 translation.
 *
 * @public
 */
export interface TranslationPinDataIsoFormat1 {}

/**
 * Parameters that are required for translation between ISO9564 PIN block formats 0,1,3,4.
 *
 * @public
 */
export type TranslationIsoFormats =
  | TranslationIsoFormats.As2805Format0Member
  | TranslationIsoFormats.IsoFormat0Member
  | TranslationIsoFormats.IsoFormat1Member
  | TranslationIsoFormats.IsoFormat3Member
  | TranslationIsoFormats.IsoFormat4Member
  | TranslationIsoFormats.$UnknownMember;

/**
 * @public
 */
export namespace TranslationIsoFormats {
  /**
   * Parameters that are required for ISO9564 PIN format 0 translation.
   *
   * @public
   */
  export interface IsoFormat0Member {
    IsoFormat0: TranslationPinDataIsoFormat034;
    IsoFormat1?: never;
    IsoFormat3?: never;
    IsoFormat4?: never;
    As2805Format0?: never;
    $unknown?: never;
  }

  /**
   * Parameters that are required for ISO9564 PIN format 1 translation.
   *
   * @public
   */
  export interface IsoFormat1Member {
    IsoFormat0?: never;
    IsoFormat1: TranslationPinDataIsoFormat1;
    IsoFormat3?: never;
    IsoFormat4?: never;
    As2805Format0?: never;
    $unknown?: never;
  }

  /**
   * Parameters that are required for ISO9564 PIN format 3 translation.
   *
   * @public
   */
  export interface IsoFormat3Member {
    IsoFormat0?: never;
    IsoFormat1?: never;
    IsoFormat3: TranslationPinDataIsoFormat034;
    IsoFormat4?: never;
    As2805Format0?: never;
    $unknown?: never;
  }

  /**
   * Parameters that are required for ISO9564 PIN format 4 translation.
   *
   * @public
   */
  export interface IsoFormat4Member {
    IsoFormat0?: never;
    IsoFormat1?: never;
    IsoFormat3?: never;
    IsoFormat4: TranslationPinDataIsoFormat034;
    As2805Format0?: never;
    $unknown?: never;
  }

  /**
   * Parameters that are required for AS2805 PIN format 0 translation.
   *
   * @public
   */
  export interface As2805Format0Member {
    IsoFormat0?: never;
    IsoFormat1?: never;
    IsoFormat3?: never;
    IsoFormat4?: never;
    As2805Format0: TranslationPinDataAs2805Format0;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    IsoFormat0?: never;
    IsoFormat1?: never;
    IsoFormat3?: never;
    IsoFormat4?: never;
    As2805Format0?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    IsoFormat0: (value: TranslationPinDataIsoFormat034) => T;
    IsoFormat1: (value: TranslationPinDataIsoFormat1) => T;
    IsoFormat3: (value: TranslationPinDataIsoFormat034) => T;
    IsoFormat4: (value: TranslationPinDataIsoFormat034) => T;
    As2805Format0: (value: TranslationPinDataAs2805Format0) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface TranslatePinDataInput {
  /**
   * The `keyARN` of the encryption key under which incoming PIN block data is encrypted. This key type can be PEK or BDK.
   *
   * For dynamic keys, it is the `keyARN` of KEK of the TR-31 wrapped PEK. For ECDH, it is the `keyARN` of the asymmetric ECC key.
   *
   * @public
   */
  IncomingKeyIdentifier: string | undefined;

  /**
   * The `keyARN` of the encryption key for encrypting outgoing PIN block data. This key type can be PEK or BDK.
   *
   * For ECDH, it is the `keyARN` of the asymmetric ECC key.
   *
   * @public
   */
  OutgoingKeyIdentifier: string | undefined;

  /**
   * The format of the incoming PIN block data for translation within Amazon Web Services Payment Cryptography.
   *
   * @public
   */
  IncomingTranslationAttributes: TranslationIsoFormats | undefined;

  /**
   * The format of the outgoing PIN block data after translation by Amazon Web Services Payment Cryptography.
   *
   * @public
   */
  OutgoingTranslationAttributes: TranslationIsoFormats | undefined;

  /**
   * The encrypted PIN block data that Amazon Web Services Payment Cryptography translates.
   *
   * @public
   */
  EncryptedPinBlock: string | undefined;

  /**
   * The attributes and values to use for incoming DUKPT encryption key for PIN block translation.
   *
   * @public
   */
  IncomingDukptAttributes?: DukptDerivationAttributes | undefined;

  /**
   * The attributes and values to use for outgoing DUKPT encryption key after PIN block translation.
   *
   * @public
   */
  OutgoingDukptAttributes?: DukptDerivationAttributes | undefined;

  /**
   * The WrappedKeyBlock containing the encryption key under which incoming PIN block data is encrypted.
   *
   * @public
   */
  IncomingWrappedKey?: WrappedKey | undefined;

  /**
   * The WrappedKeyBlock containing the encryption key for encrypting outgoing PIN block data.
   *
   * @public
   */
  OutgoingWrappedKey?: WrappedKey | undefined;

  /**
   * The attributes and values to use for incoming AS2805 encryption key for PIN block translation.
   *
   * @public
   */
  IncomingAs2805Attributes?: As2805PekDerivationAttributes | undefined;
}

/**
 * @public
 */
export interface TranslatePinDataOutput {
  /**
   * The outgoing encrypted PIN block data after translation.
   *
   * @public
   */
  PinBlock: string | undefined;

  /**
   * The `keyARN` of the encryption key that Amazon Web Services Payment Cryptography uses to encrypt outgoing PIN block data after translation.
   *
   * @public
   */
  KeyArn: string | undefined;

  /**
   * The key check value (KCV) of the encryption key. The KCV is used to check if all parties holding a given key have the same key or to detect that a key has changed.
   *
   * Amazon Web Services Payment Cryptography computes the KCV according to the CMAC specification.
   *
   * @public
   */
  KeyCheckValue: string | undefined;
}

/**
 * @public
 */
export interface VerifyAuthRequestCryptogramInput {
  /**
   * The `keyARN` of the major encryption key that Amazon Web Services Payment Cryptography uses for ARQC verification.
   *
   * @public
   */
  KeyIdentifier: string | undefined;

  /**
   * The transaction data that Amazon Web Services Payment Cryptography uses for ARQC verification. The same transaction is used for ARQC generation outside of Amazon Web Services Payment Cryptography.
   *
   * @public
   */
  TransactionData: string | undefined;

  /**
   * The auth request cryptogram imported into Amazon Web Services Payment Cryptography for ARQC verification using a major encryption key and transaction data.
   *
   * @public
   */
  AuthRequestCryptogram: string | undefined;

  /**
   * The method to use when deriving the major encryption key for ARQC verification within Amazon Web Services Payment Cryptography. The same key derivation mode was used for ARQC generation outside of Amazon Web Services Payment Cryptography.
   *
   * @public
   */
  MajorKeyDerivationMode: MajorKeyDerivationMode | undefined;

  /**
   * The attributes and values to use for deriving a session key for ARQC verification within Amazon Web Services Payment Cryptography. The same attributes were used for ARQC generation outside of Amazon Web Services Payment Cryptography.
   *
   * @public
   */
  SessionKeyDerivationAttributes: SessionKeyDerivation | undefined;

  /**
   * The attributes and values for auth request cryptogram verification. These parameters are required in case using ARPC Method 1 or Method 2 for ARQC verification.
   *
   * @public
   */
  AuthResponseAttributes?: CryptogramAuthResponse | undefined;
}

/**
 * @public
 */
export interface VerifyAuthRequestCryptogramOutput {
  /**
   * The `keyARN` of the major encryption key that Amazon Web Services Payment Cryptography uses for ARQC verification.
   *
   * @public
   */
  KeyArn: string | undefined;

  /**
   * The key check value (KCV) of the encryption key. The KCV is used to check if all parties holding a given key have the same key or to detect that a key has changed.
   *
   * Amazon Web Services Payment Cryptography computes the KCV according to the CMAC specification.
   *
   * @public
   */
  KeyCheckValue: string | undefined;

  /**
   * The result for ARQC verification or ARPC generation within Amazon Web Services Payment Cryptography.
   *
   * @public
   */
  AuthResponseValue?: string | undefined;
}

/**
 * @public
 */
export interface VerifyCardValidationDataInput {
  /**
   * The `keyARN` of the CVK encryption key that Amazon Web Services Payment Cryptography uses to verify card data.
   *
   * @public
   */
  KeyIdentifier: string | undefined;

  /**
   * The Primary Account Number (PAN), a unique identifier for a payment credit or debit card that associates the card with a specific account holder.
   *
   * @public
   */
  PrimaryAccountNumber: string | undefined;

  /**
   * The algorithm to use for verification of card data within Amazon Web Services Payment Cryptography.
   *
   * @public
   */
  VerificationAttributes: CardVerificationAttributes | undefined;

  /**
   * The CVV or CSC value for use for card data verification within Amazon Web Services Payment Cryptography.
   *
   * @public
   */
  ValidationData: string | undefined;
}

/**
 * @public
 */
export interface VerifyCardValidationDataOutput {
  /**
   * The `keyARN` of the CVK encryption key that Amazon Web Services Payment Cryptography uses to verify CVV or CSC.
   *
   * @public
   */
  KeyArn: string | undefined;

  /**
   * The key check value (KCV) of the encryption key. The KCV is used to check if all parties holding a given key have the same key or to detect that a key has changed.
   *
   * Amazon Web Services Payment Cryptography computes the KCV according to the CMAC specification.
   *
   * @public
   */
  KeyCheckValue: string | undefined;
}

/**
 * @public
 */
export interface VerifyMacInput {
  /**
   * The `keyARN` of the encryption key that Amazon Web Services Payment Cryptography uses to verify MAC data.
   *
   * @public
   */
  KeyIdentifier: string | undefined;

  /**
   * The data on for which MAC is under verification. This value must be hexBinary.
   *
   * @public
   */
  MessageData: string | undefined;

  /**
   * The MAC being verified.
   *
   * @public
   */
  Mac: string | undefined;

  /**
   * The attributes and data values to use for MAC verification within Amazon Web Services Payment Cryptography.
   *
   * @public
   */
  VerificationAttributes: MacAttributes | undefined;

  /**
   * The length of the MAC.
   *
   * @public
   */
  MacLength?: number | undefined;
}

/**
 * @public
 */
export interface VerifyMacOutput {
  /**
   * The `keyARN` of the encryption key that Amazon Web Services Payment Cryptography uses for MAC verification.
   *
   * @public
   */
  KeyArn: string | undefined;

  /**
   * The key check value (KCV) of the encryption key. The KCV is used to check if all parties holding a given key have the same key or to detect that a key has changed.
   *
   * Amazon Web Services Payment Cryptography computes the KCV according to the CMAC specification.
   *
   * @public
   */
  KeyCheckValue: string | undefined;
}

/**
 * Parameters that are required to generate or verify Visa PIN.
 *
 * @public
 */
export interface VisaPinVerification {
  /**
   * The value for PIN verification index. It is used in the Visa PIN algorithm to calculate the PVV (PIN Verification Value).
   *
   * @public
   */
  PinVerificationKeyIndex: number | undefined;

  /**
   * Parameters that are required to generate or verify Visa PVV (PIN Verification Value).
   *
   * @public
   */
  VerificationValue: string | undefined;
}

/**
 * Parameters that are required for PIN data verification.
 *
 * @public
 */
export type PinVerificationAttributes =
  | PinVerificationAttributes.Ibm3624PinMember
  | PinVerificationAttributes.VisaPinMember
  | PinVerificationAttributes.$UnknownMember;

/**
 * @public
 */
export namespace PinVerificationAttributes {
  /**
   * Parameters that are required to generate or verify Visa PIN.
   *
   * @public
   */
  export interface VisaPinMember {
    VisaPin: VisaPinVerification;
    Ibm3624Pin?: never;
    $unknown?: never;
  }

  /**
   * Parameters that are required to generate or verify Ibm3624 PIN.
   *
   * @public
   */
  export interface Ibm3624PinMember {
    VisaPin?: never;
    Ibm3624Pin: Ibm3624PinVerification;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    VisaPin?: never;
    Ibm3624Pin?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    VisaPin: (value: VisaPinVerification) => T;
    Ibm3624Pin: (value: Ibm3624PinVerification) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface VerifyPinDataInput {
  /**
   * The `keyARN` of the PIN verification key.
   *
   * @public
   */
  VerificationKeyIdentifier: string | undefined;

  /**
   * The `keyARN` of the encryption key under which the PIN block data is encrypted. This key type can be PEK or BDK.
   *
   * @public
   */
  EncryptionKeyIdentifier: string | undefined;

  /**
   * The attributes and values for PIN data verification.
   *
   * @public
   */
  VerificationAttributes: PinVerificationAttributes | undefined;

  /**
   * The encrypted PIN block data that Amazon Web Services Payment Cryptography verifies.
   *
   * @public
   */
  EncryptedPinBlock: string | undefined;

  /**
   * The Primary Account Number (PAN), a unique identifier for a payment credit or debit card that associates the card with a specific account holder.
   *
   * @public
   */
  PrimaryAccountNumber?: string | undefined;

  /**
   * The PIN encoding format for pin data generation as specified in ISO 9564. Amazon Web Services Payment Cryptography supports `ISO_Format_0` and `ISO_Format_3`.
   *
   * The `ISO_Format_0` PIN block format is equivalent to the ANSI X9.8, VISA-1, and ECI-1 PIN block formats. It is similar to a VISA-4 PIN block format. It supports a PIN from 4 to 12 digits in length.
   *
   * The `ISO_Format_3` PIN block format is the same as `ISO_Format_0` except that the fill digits are random values from 10 to 15.
   *
   * @public
   */
  PinBlockFormat: PinBlockFormatForPinData | undefined;

  /**
   * The length of PIN being verified.
   *
   * @public
   */
  PinDataLength?: number | undefined;

  /**
   * The attributes and values for the DUKPT encrypted PIN block data.
   *
   * @public
   */
  DukptAttributes?: DukptAttributes | undefined;

  /**
   * Parameter information of a WrappedKeyBlock for encryption key exchange.
   *
   * @public
   */
  EncryptionWrappedKey?: WrappedKey | undefined;
}

/**
 * @public
 */
export interface VerifyPinDataOutput {
  /**
   * The `keyARN` of the PIN encryption key that Amazon Web Services Payment Cryptography uses for PIN or PIN Offset verification.
   *
   * @public
   */
  VerificationKeyArn: string | undefined;

  /**
   * The key check value (KCV) of the encryption key. The KCV is used to check if all parties holding a given key have the same key or to detect that a key has changed.
   *
   * Amazon Web Services Payment Cryptography computes the KCV according to the CMAC specification.
   *
   * @public
   */
  VerificationKeyCheckValue: string | undefined;

  /**
   * The `keyARN` of the PEK that Amazon Web Services Payment Cryptography uses for encrypted pin block generation.
   *
   * @public
   */
  EncryptionKeyArn: string | undefined;

  /**
   * The key check value (KCV) of the encryption key. The KCV is used to check if all parties holding a given key have the same key or to detect that a key has changed.
   *
   * Amazon Web Services Payment Cryptography computes the KCV according to the CMAC specification.
   *
   * @public
   */
  EncryptionKeyCheckValue: string | undefined;
}
