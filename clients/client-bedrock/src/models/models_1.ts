// smithy-typescript generated code
import type {
  ApplicationType,
  AuthorizationStatus,
  CommitmentDuration,
  CustomizationType,
  EntitlementAvailability,
  EvaluationJobStatus,
  EvaluationJobType,
  FineTuningJobStatus,
  FoundationModelLifecycleStatus,
  GuardrailContentFilterAction,
  GuardrailContentFiltersTierName,
  GuardrailContentFilterType,
  GuardrailContextualGroundingAction,
  GuardrailContextualGroundingFilterType,
  GuardrailContextualGroundingTierName,
  GuardrailFilterStrength,
  GuardrailManagedWordsType,
  GuardrailModality,
  GuardrailPiiEntityType,
  GuardrailSensitiveInformationAction,
  GuardrailStatus,
  GuardrailTopicAction,
  GuardrailTopicsTierName,
  GuardrailTopicType,
  GuardrailWordAction,
  InferenceProfileStatus,
  InferenceProfileType,
  InferenceType,
  JobStatusDetails,
  ModelCopyJobStatus,
  ModelCustomization,
  ModelCustomizationJobStatus,
  ModelImportJobStatus,
  ModelInvocationJobStatus,
  ModelInvocationType,
  ModelModality,
  OfferType,
  PromptRouterStatus,
  PromptRouterType,
  ProvisionedModelStatus,
  RegionAvailability,
  RetrieveAndGenerateType,
  S3InputFormat,
  SearchType,
  SortByProvisionedModels,
  SortJobsBy,
  SortModelsBy,
  SortOrder,
} from "./enums";
import type {
  AgreementAvailability,
  CustomizationConfig,
  EvaluationConfig,
  EvaluationModelConfig,
  EvaluationOutputDataConfig,
  EvaluationPrecomputedRagSourceConfig,
  ExternalSourcesRetrieveAndGenerateConfiguration,
  FilterAttribute,
  GenerationConfiguration,
  GuardrailAutomatedReasoningPolicyConfig,
  GuardrailContentPolicyConfig,
  GuardrailContextualGroundingPolicyConfig,
  GuardrailCrossRegionConfig,
  ImplicitFilterConfiguration,
  ModelDataSource,
  OrchestrationConfiguration,
  OutputDataConfig,
  Tag,
  TrainingDataConfig,
  TrainingMetrics,
  ValidationDataConfig,
  ValidatorMetric,
  VectorSearchRerankingConfiguration,
  VpcConfig,
} from "./models_0";

/**
 * The PII entity to configure for the guardrail.
 *
 * @public
 */
export interface GuardrailPiiEntityConfig {
  /**
   * Configure guardrail type when the PII entity is detected.
   *
   * The following PIIs are used to block or mask sensitive information:
   *
   * - **General**
   *
   *   - **ADDRESS**
   *
   *     A physical address, such as "100 Main Street, Anytown, USA" or "Suite #12, Building 123". An address can include information such as the street, building, location, city, state, country, county, zip code, precinct, and neighborhood.
   *   - **AGE**
   *
   *     An individual's age, including the quantity and unit of time. For example, in the phrase "I am 40 years old," Guardrails recognizes "40 years" as an age.
   *   - **NAME**
   *
   *     An individual's name. This entity type does not include titles, such as Dr., Mr., Mrs., or Miss. guardrails doesn't apply this entity type to names that are part of organizations or addresses. For example, guardrails recognizes the "John Doe Organization" as an organization, and it recognizes "Jane Doe Street" as an address.
   *   - **EMAIL**
   *
   *     An email address, such as *marymajor@email.com*.
   *   - **PHONE**
   *
   *     A phone number. This entity type also includes fax and pager numbers.
   *   - **USERNAME**
   *
   *     A user name that identifies an account, such as a login name, screen name, nick name, or handle.
   *   - **PASSWORD**
   *
   *     An alphanumeric string that is used as a password, such as "**very20special#pass**".
   *   - **DRIVER_ID**
   *
   *     The number assigned to a driver's license, which is an official document permitting an individual to operate one or more motorized vehicles on a public road. A driver's license number consists of alphanumeric characters.
   *   - **LICENSE_PLATE**
   *
   *     A license plate for a vehicle is issued by the state or country where the vehicle is registered. The format for passenger vehicles is typically five to eight digits, consisting of upper-case letters and numbers. The format varies depending on the location of the issuing state or country.
   *   - **VEHICLE_IDENTIFICATION_NUMBER**
   *
   *     A Vehicle Identification Number (VIN) uniquely identifies a vehicle. VIN content and format are defined in the *ISO 3779* specification. Each country has specific codes and formats for VINs.
   * - **Finance**
   *
   *   - **CREDIT_DEBIT_CARD_CVV**
   *
   *     A three-digit card verification code (CVV) that is present on VISA, MasterCard, and Discover credit and debit cards. For American Express credit or debit cards, the CVV is a four-digit numeric code.
   *   - **CREDIT_DEBIT_CARD_EXPIRY**
   *
   *     The expiration date for a credit or debit card. This number is usually four digits long and is often formatted as *month/year* or *MM/YY*. Guardrails recognizes expiration dates such as *01/21*, *01/2021*, and *Jan 2021*.
   *   - **CREDIT_DEBIT_CARD_NUMBER**
   *
   *     The number for a credit or debit card. These numbers can vary from 13 to 16 digits in length. However, Amazon Comprehend also recognizes credit or debit card numbers when only the last four digits are present.
   *   - **PIN**
   *
   *     A four-digit personal identification number (PIN) with which you can access your bank account.
   *   - **INTERNATIONAL_BANK_ACCOUNT_NUMBER**
   *
   *     An International Bank Account Number has specific formats in each country. For more information, see [www.iban.com/structure](https://www.iban.com/structure).
   *   - **SWIFT_CODE**
   *
   *     A SWIFT code is a standard format of Bank Identifier Code (BIC) used to specify a particular bank or branch. Banks use these codes for money transfers such as international wire transfers.
   *
   *     SWIFT codes consist of eight or 11 characters. The 11-digit codes refer to specific branches, while eight-digit codes (or 11-digit codes ending in 'XXX') refer to the head or primary office.
   * - **IT**
   *
   *   - **IP_ADDRESS**
   *
   *     An IPv4 address, such as *198.51.100.0*.
   *   - **MAC_ADDRESS**
   *
   *     A *media access control* (MAC) address is a unique identifier assigned to a network interface controller (NIC).
   *   - **URL**
   *
   *     A web address, such as *www.example.com*.
   *   - **AWS_ACCESS_KEY**
   *
   *     A unique identifier that's associated with a secret access key; you use the access key ID and secret access key to sign programmatic Amazon Web Services requests cryptographically.
   *   - **AWS_SECRET_KEY**
   *
   *     A unique identifier that's associated with an access key. You use the access key ID and secret access key to sign programmatic Amazon Web Services requests cryptographically.
   * - **USA specific**
   *
   *   - **US_BANK_ACCOUNT_NUMBER**
   *
   *     A US bank account number, which is typically 10 to 12 digits long.
   *   - **US_BANK_ROUTING_NUMBER**
   *
   *     A US bank account routing number. These are typically nine digits long,
   *   - **US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER**
   *
   *     A US Individual Taxpayer Identification Number (ITIN) is a nine-digit number that starts with a "9" and contain a "7" or "8" as the fourth digit. An ITIN can be formatted with a space or a dash after the third and forth digits.
   *   - **US_PASSPORT_NUMBER**
   *
   *     A US passport number. Passport numbers range from six to nine alphanumeric characters.
   *   - **US_SOCIAL_SECURITY_NUMBER**
   *
   *     A US Social Security Number (SSN) is a nine-digit number that is issued to US citizens, permanent residents, and temporary working residents.
   * - **Canada specific**
   *
   *   - **CA_HEALTH_NUMBER**
   *
   *     A Canadian Health Service Number is a 10-digit unique identifier, required for individuals to access healthcare benefits.
   *   - **CA_SOCIAL_INSURANCE_NUMBER**
   *
   *     A Canadian Social Insurance Number (SIN) is a nine-digit unique identifier, required for individuals to access government programs and benefits.
   *
   *     The SIN is formatted as three groups of three digits, such as *123-456-789*. A SIN can be validated through a simple check-digit process called the [Luhn algorithm](https://www.wikipedia.org/wiki/Luhn_algorithm).
   * - **UK Specific**
   *
   *   - **UK_NATIONAL_HEALTH_SERVICE_NUMBER**
   *
   *     A UK National Health Service Number is a 10-17 digit number, such as *485 777 3456*. The current system formats the 10-digit number with spaces after the third and sixth digits. The final digit is an error-detecting checksum.
   *   - **UK_NATIONAL_INSURANCE_NUMBER**
   *
   *     A UK National Insurance Number (NINO) provides individuals with access to National Insurance (social security) benefits. It is also used for some purposes in the UK tax system.
   *
   *     The number is nine digits long and starts with two letters, followed by six numbers and one letter. A NINO can be formatted with a space or a dash after the two letters and after the second, forth, and sixth digits.
   *   - **UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER**
   *
   *     A UK Unique Taxpayer Reference (UTR) is a 10-digit number that identifies a taxpayer or a business.
   * - **Custom**
   *
   *   - **Regex filter** - You can use a regular expressions to define patterns for a guardrail to recognize and act upon such as serial number, booking ID etc..
   *
   * @public
   */
  type: GuardrailPiiEntityType | undefined;

  /**
   * Configure guardrail action when the PII entity is detected.
   *
   * @public
   */
  action: GuardrailSensitiveInformationAction | undefined;

  /**
   * Specifies the action to take when harmful content is detected in the input. Supported values include:
   *
   * - `BLOCK` – Block the content and replace it with blocked messaging.
   * - `ANONYMIZE` – Mask the content and replace it with identifier tags.
   * - `NONE` – Take no action but return detection information in the trace response.
   *
   * @public
   */
  inputAction?: GuardrailSensitiveInformationAction | undefined;

  /**
   * Specifies the action to take when harmful content is detected in the output. Supported values include:
   *
   * - `BLOCK` – Block the content and replace it with blocked messaging.
   * - `ANONYMIZE` – Mask the content and replace it with identifier tags.
   * - `NONE` – Take no action but return detection information in the trace response.
   *
   * @public
   */
  outputAction?: GuardrailSensitiveInformationAction | undefined;

  /**
   * Specifies whether to enable guardrail evaluation on the input. When disabled, you aren't charged for the evaluation. The evaluation doesn't appear in the response.
   *
   * @public
   */
  inputEnabled?: boolean | undefined;

  /**
   * Specifies whether to enable guardrail evaluation on the output. When disabled, you aren't charged for the evaluation. The evaluation doesn't appear in the response.
   *
   * @public
   */
  outputEnabled?: boolean | undefined;
}

/**
 * The regular expression to configure for the guardrail.
 *
 * @public
 */
export interface GuardrailRegexConfig {
  /**
   * The name of the regular expression to configure for the guardrail.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the regular expression to configure for the guardrail.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The regular expression pattern to configure for the guardrail.
   *
   * @public
   */
  pattern: string | undefined;

  /**
   * The guardrail action to configure when matching regular expression is detected.
   *
   * @public
   */
  action: GuardrailSensitiveInformationAction | undefined;

  /**
   * Specifies the action to take when harmful content is detected in the input. Supported values include:
   *
   * - `BLOCK` – Block the content and replace it with blocked messaging.
   * - `NONE` – Take no action but return detection information in the trace response.
   *
   * @public
   */
  inputAction?: GuardrailSensitiveInformationAction | undefined;

  /**
   * Specifies the action to take when harmful content is detected in the output. Supported values include:
   *
   * - `BLOCK` – Block the content and replace it with blocked messaging.
   * - `NONE` – Take no action but return detection information in the trace response.
   *
   * @public
   */
  outputAction?: GuardrailSensitiveInformationAction | undefined;

  /**
   * Specifies whether to enable guardrail evaluation on the input. When disabled, you aren't charged for the evaluation. The evaluation doesn't appear in the response.
   *
   * @public
   */
  inputEnabled?: boolean | undefined;

  /**
   * Specifies whether to enable guardrail evaluation on the output. When disabled, you aren't charged for the evaluation. The evaluation doesn't appear in the response.
   *
   * @public
   */
  outputEnabled?: boolean | undefined;
}

/**
 * Contains details about PII entities and regular expressions to configure for the guardrail.
 *
 * @public
 */
export interface GuardrailSensitiveInformationPolicyConfig {
  /**
   * A list of PII entities to configure to the guardrail.
   *
   * @public
   */
  piiEntitiesConfig?: GuardrailPiiEntityConfig[] | undefined;

  /**
   * A list of regular expressions to configure to the guardrail.
   *
   * @public
   */
  regexesConfig?: GuardrailRegexConfig[] | undefined;
}

/**
 * The tier that your guardrail uses for denied topic filters. Consider using a tier that balances performance, accuracy, and compatibility with your existing generative AI workflows.
 *
 * @public
 */
export interface GuardrailTopicsTierConfig {
  /**
   * The tier that your guardrail uses for denied topic filters. Valid values include:
   *
   * - `CLASSIC` tier – Provides established guardrails functionality supporting English, French, and Spanish languages.
   * - `STANDARD` tier – Provides a more robust solution than the `CLASSIC` tier and has more comprehensive language support. This tier requires that your guardrail use [cross-Region inference](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-cross-region.html).
   *
   * @public
   */
  tierName: GuardrailTopicsTierName | undefined;
}

/**
 * Details about topics for the guardrail to identify and deny.
 *
 * @public
 */
export interface GuardrailTopicConfig {
  /**
   * The name of the topic to deny.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A definition of the topic to deny.
   *
   * @public
   */
  definition: string | undefined;

  /**
   * A list of prompts, each of which is an example of a prompt that can be categorized as belonging to the topic.
   *
   * @public
   */
  examples?: string[] | undefined;

  /**
   * Specifies to deny the topic.
   *
   * @public
   */
  type: GuardrailTopicType | undefined;

  /**
   * Specifies the action to take when harmful content is detected in the input. Supported values include:
   *
   * - `BLOCK` – Block the content and replace it with blocked messaging.
   * - `NONE` – Take no action but return detection information in the trace response.
   *
   * @public
   */
  inputAction?: GuardrailTopicAction | undefined;

  /**
   * Specifies the action to take when harmful content is detected in the output. Supported values include:
   *
   * - `BLOCK` – Block the content and replace it with blocked messaging.
   * - `NONE` – Take no action but return detection information in the trace response.
   *
   * @public
   */
  outputAction?: GuardrailTopicAction | undefined;

  /**
   * Specifies whether to enable guardrail evaluation on the input. When disabled, you aren't charged for the evaluation. The evaluation doesn't appear in the response.
   *
   * @public
   */
  inputEnabled?: boolean | undefined;

  /**
   * Specifies whether to enable guardrail evaluation on the output. When disabled, you aren't charged for the evaluation. The evaluation doesn't appear in the response.
   *
   * @public
   */
  outputEnabled?: boolean | undefined;
}

/**
 * Contains details about topics that the guardrail should identify and deny.
 *
 * @public
 */
export interface GuardrailTopicPolicyConfig {
  /**
   * A list of policies related to topics that the guardrail should deny.
   *
   * @public
   */
  topicsConfig: GuardrailTopicConfig[] | undefined;

  /**
   * The tier that your guardrail uses for denied topic filters.
   *
   * @public
   */
  tierConfig?: GuardrailTopicsTierConfig | undefined;
}

/**
 * The managed word list to configure for the guardrail.
 *
 * @public
 */
export interface GuardrailManagedWordsConfig {
  /**
   * The managed word type to configure for the guardrail.
   *
   * @public
   */
  type: GuardrailManagedWordsType | undefined;

  /**
   * Specifies the action to take when harmful content is detected in the input. Supported values include:
   *
   * - `BLOCK` – Block the content and replace it with blocked messaging.
   * - `NONE` – Take no action but return detection information in the trace response.
   *
   * @public
   */
  inputAction?: GuardrailWordAction | undefined;

  /**
   * Specifies the action to take when harmful content is detected in the output. Supported values include:
   *
   * - `BLOCK` – Block the content and replace it with blocked messaging.
   * - `NONE` – Take no action but return detection information in the trace response.
   *
   * @public
   */
  outputAction?: GuardrailWordAction | undefined;

  /**
   * Specifies whether to enable guardrail evaluation on the input. When disabled, you aren't charged for the evaluation. The evaluation doesn't appear in the response.
   *
   * @public
   */
  inputEnabled?: boolean | undefined;

  /**
   * Specifies whether to enable guardrail evaluation on the output. When disabled, you aren't charged for the evaluation. The evaluation doesn't appear in the response.
   *
   * @public
   */
  outputEnabled?: boolean | undefined;
}

/**
 * A word to configure for the guardrail.
 *
 * @public
 */
export interface GuardrailWordConfig {
  /**
   * Text of the word configured for the guardrail to block.
   *
   * @public
   */
  text: string | undefined;

  /**
   * Specifies the action to take when harmful content is detected in the input. Supported values include:
   *
   * - `BLOCK` – Block the content and replace it with blocked messaging.
   * - `NONE` – Take no action but return detection information in the trace response.
   *
   * @public
   */
  inputAction?: GuardrailWordAction | undefined;

  /**
   * Specifies the action to take when harmful content is detected in the output. Supported values include:
   *
   * - `BLOCK` – Block the content and replace it with blocked messaging.
   * - `NONE` – Take no action but return detection information in the trace response.
   *
   * @public
   */
  outputAction?: GuardrailWordAction | undefined;

  /**
   * Specifies whether to enable guardrail evaluation on the intput. When disabled, you aren't charged for the evaluation. The evaluation doesn't appear in the response.
   *
   * @public
   */
  inputEnabled?: boolean | undefined;

  /**
   * Specifies whether to enable guardrail evaluation on the output. When disabled, you aren't charged for the evaluation. The evaluation doesn't appear in the response.
   *
   * @public
   */
  outputEnabled?: boolean | undefined;
}

/**
 * Contains details about the word policy to configured for the guardrail.
 *
 * @public
 */
export interface GuardrailWordPolicyConfig {
  /**
   * A list of words to configure for the guardrail.
   *
   * @public
   */
  wordsConfig?: GuardrailWordConfig[] | undefined;

  /**
   * A list of managed words to configure for the guardrail.
   *
   * @public
   */
  managedWordListsConfig?: GuardrailManagedWordsConfig[] | undefined;
}

/**
 * @public
 */
export interface CreateGuardrailRequest {
  /**
   * The name to give the guardrail.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the guardrail.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The topic policies to configure for the guardrail.
   *
   * @public
   */
  topicPolicyConfig?: GuardrailTopicPolicyConfig | undefined;

  /**
   * The content filter policies to configure for the guardrail.
   *
   * @public
   */
  contentPolicyConfig?: GuardrailContentPolicyConfig | undefined;

  /**
   * The word policy you configure for the guardrail.
   *
   * @public
   */
  wordPolicyConfig?: GuardrailWordPolicyConfig | undefined;

  /**
   * The sensitive information policy to configure for the guardrail.
   *
   * @public
   */
  sensitiveInformationPolicyConfig?: GuardrailSensitiveInformationPolicyConfig | undefined;

  /**
   * The contextual grounding policy configuration used to create a guardrail.
   *
   * @public
   */
  contextualGroundingPolicyConfig?: GuardrailContextualGroundingPolicyConfig | undefined;

  /**
   * Optional configuration for integrating Automated Reasoning policies with the new guardrail.
   *
   * @public
   */
  automatedReasoningPolicyConfig?: GuardrailAutomatedReasoningPolicyConfig | undefined;

  /**
   * The system-defined guardrail profile that you're using with your guardrail. Guardrail profiles define the destination Amazon Web Services Regions where guardrail inference requests can be automatically routed.
   *
   * For more information, see the [Amazon Bedrock User Guide](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-cross-region.html).
   *
   * @public
   */
  crossRegionConfig?: GuardrailCrossRegionConfig | undefined;

  /**
   * The message to return when the guardrail blocks a prompt.
   *
   * @public
   */
  blockedInputMessaging: string | undefined;

  /**
   * The message to return when the guardrail blocks a model response.
   *
   * @public
   */
  blockedOutputsMessaging: string | undefined;

  /**
   * The ARN of the KMS key that you use to encrypt the guardrail.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * The tags that you want to attach to the guardrail.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than once. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  clientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateGuardrailResponse {
  /**
   * The unique identifier of the guardrail that was created.
   *
   * @public
   */
  guardrailId: string | undefined;

  /**
   * The ARN of the guardrail.
   *
   * @public
   */
  guardrailArn: string | undefined;

  /**
   * The version of the guardrail that was created. This value will always be `DRAFT`.
   *
   * @public
   */
  version: string | undefined;

  /**
   * The time at which the guardrail was created.
   *
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface CreateGuardrailVersionRequest {
  /**
   * The unique identifier of the guardrail. This can be an ID or the ARN.
   *
   * @public
   */
  guardrailIdentifier: string | undefined;

  /**
   * A description of the guardrail version.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than once. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  clientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateGuardrailVersionResponse {
  /**
   * The unique identifier of the guardrail.
   *
   * @public
   */
  guardrailId: string | undefined;

  /**
   * The number of the version of the guardrail.
   *
   * @public
   */
  version: string | undefined;
}

/**
 * @public
 */
export interface DeleteGuardrailRequest {
  /**
   * The unique identifier of the guardrail. This can be an ID or the ARN.
   *
   * @public
   */
  guardrailIdentifier: string | undefined;

  /**
   * The version of the guardrail.
   *
   * @public
   */
  guardrailVersion?: string | undefined;
}

/**
 * @public
 */
export interface DeleteGuardrailResponse {}

/**
 * @public
 */
export interface GetGuardrailRequest {
  /**
   * The unique identifier of the guardrail for which to get details. This can be an ID or the ARN.
   *
   * @public
   */
  guardrailIdentifier: string | undefined;

  /**
   * The version of the guardrail for which to get details. If you don't specify a version, the response returns details for the `DRAFT` version.
   *
   * @public
   */
  guardrailVersion?: string | undefined;
}

/**
 * Represents the configuration of Automated Reasoning policies within a Amazon Bedrock Guardrail, including the policies to apply and confidence thresholds.
 *
 * @public
 */
export interface GuardrailAutomatedReasoningPolicy {
  /**
   * The list of Automated Reasoning policy ARNs that should be applied as part of this guardrail configuration.
   *
   * @public
   */
  policies: string[] | undefined;

  /**
   * The minimum confidence level required for Automated Reasoning policy violations to trigger guardrail actions. Values range from 0.0 to 1.0.
   *
   * @public
   */
  confidenceThreshold?: number | undefined;
}

/**
 * Contains filter strengths for harmful content. Guardrails support the following content filters to detect and filter harmful user inputs and FM-generated outputs.
 *
 * - **Hate** – Describes language or a statement that discriminates, criticizes, insults, denounces, or dehumanizes a person or group on the basis of an identity (such as race, ethnicity, gender, religion, sexual orientation, ability, and national origin).
 * - **Insults** – Describes language or a statement that includes demeaning, humiliating, mocking, insulting, or belittling language. This type of language is also labeled as bullying.
 * - **Sexual** – Describes language or a statement that indicates sexual interest, activity, or arousal using direct or indirect references to body parts, physical traits, or sex.
 * - **Violence** – Describes language or a statement that includes glorification of or threats to inflict physical pain, hurt, or injury toward a person, group or thing.
 *
 * Content filtering depends on the confidence classification of user inputs and FM responses across each of the four harmful categories. All input and output statements are classified into one of four confidence levels (NONE, LOW, MEDIUM, HIGH) for each harmful category. For example, if a statement is classified as *Hate* with HIGH confidence, the likelihood of the statement representing hateful content is high. A single statement can be classified across multiple categories with varying confidence levels. For example, a single statement can be classified as *Hate* with HIGH confidence, *Insults* with LOW confidence, *Sexual* with NONE confidence, and *Violence* with MEDIUM confidence.
 *
 * For more information, see [Guardrails content filters](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-filters.html).
 *
 * This data type is used in the following API operations:
 *
 * - [GetGuardrail response body](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GetGuardrail.html#API_GetGuardrail_ResponseSyntax)
 *
 * @public
 */
export interface GuardrailContentFilter {
  /**
   * The harmful category that the content filter is applied to.
   *
   * @public
   */
  type: GuardrailContentFilterType | undefined;

  /**
   * The strength of the content filter to apply to prompts. As you increase the filter strength, the likelihood of filtering harmful content increases and the probability of seeing harmful content in your application reduces.
   *
   * @public
   */
  inputStrength: GuardrailFilterStrength | undefined;

  /**
   * The strength of the content filter to apply to model responses. As you increase the filter strength, the likelihood of filtering harmful content increases and the probability of seeing harmful content in your application reduces.
   *
   * @public
   */
  outputStrength: GuardrailFilterStrength | undefined;

  /**
   * The input modalities selected for the guardrail content filter.
   *
   * @public
   */
  inputModalities?: GuardrailModality[] | undefined;

  /**
   * The output modalities selected for the guardrail content filter.
   *
   * @public
   */
  outputModalities?: GuardrailModality[] | undefined;

  /**
   * The action to take when harmful content is detected in the input. Supported values include:
   *
   * - `BLOCK` – Block the content and replace it with blocked messaging.
   * - `NONE` – Take no action but return detection information in the trace response.
   *
   * @public
   */
  inputAction?: GuardrailContentFilterAction | undefined;

  /**
   * The action to take when harmful content is detected in the output. Supported values include:
   *
   * - `BLOCK` – Block the content and replace it with blocked messaging.
   * - `NONE` – Take no action but return detection information in the trace response.
   *
   * @public
   */
  outputAction?: GuardrailContentFilterAction | undefined;

  /**
   * Indicates whether guardrail evaluation is enabled on the input. When disabled, you aren't charged for the evaluation. The evaluation doesn't appear in the response.
   *
   * @public
   */
  inputEnabled?: boolean | undefined;

  /**
   * Indicates whether guardrail evaluation is enabled on the output. When disabled, you aren't charged for the evaluation. The evaluation doesn't appear in the response.
   *
   * @public
   */
  outputEnabled?: boolean | undefined;
}

/**
 * The tier that your guardrail uses for content filters.
 *
 * @public
 */
export interface GuardrailContentFiltersTier {
  /**
   * The tier that your guardrail uses for content filters. Valid values include:
   *
   * - `CLASSIC` tier – Provides established guardrails functionality supporting English, French, and Spanish languages.
   * - `STANDARD` tier – Provides a more robust solution than the `CLASSIC` tier and has more comprehensive language support. This tier requires that your guardrail use [cross-Region inference](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-cross-region.html).
   *
   * @public
   */
  tierName: GuardrailContentFiltersTierName | undefined;
}

/**
 * Contains details about how to handle harmful content.
 *
 * This data type is used in the following API operations:
 *
 * - [GetGuardrail response body](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GetGuardrail.html#API_GetGuardrail_ResponseSyntax)
 *
 * @public
 */
export interface GuardrailContentPolicy {
  /**
   * Contains the type of the content filter and how strongly it should apply to prompts and model responses.
   *
   * @public
   */
  filters?: GuardrailContentFilter[] | undefined;

  /**
   * The tier that your guardrail uses for content filters.
   *
   * @public
   */
  tier?: GuardrailContentFiltersTier | undefined;
}

/**
 * The details for the guardrails contextual grounding filter.
 *
 * @public
 */
export interface GuardrailContextualGroundingFilter {
  /**
   * The filter type details for the guardrails contextual grounding filter.
   *
   * @public
   */
  type: GuardrailContextualGroundingFilterType | undefined;

  /**
   * The threshold details for the guardrails contextual grounding filter.
   *
   * @public
   */
  threshold: number | undefined;

  /**
   * The action to take when content fails the contextual grounding evaluation. Supported values include:
   *
   * - `BLOCK` – Block the content and replace it with blocked messaging.
   * - `NONE` – Take no action but return detection information in the trace response.
   *
   * @public
   */
  action?: GuardrailContextualGroundingAction | undefined;

  /**
   * Indicates whether contextual grounding is enabled for evaluation. When disabled, you aren't charged for the evaluation. The evaluation doesn't appear in the response.
   *
   * @public
   */
  enabled?: boolean | undefined;
}

/**
 * Specifies the tier that your guardrail uses for contextual grounding checks.
 *
 * @public
 */
export interface GuardrailContextualGroundingTier {
  /**
   * The tier that your guardrail uses for contextual grounding. Valid values include:
   *
   * - `CLASSIC` tier – Provides established contextual grounding functionality supporting English, French, and Spanish languages.
   * - `STANDARD` tier – Provides a more robust solution than the `CLASSIC` tier, with support for reasoning, conversational content and more comprehensive language support. This tier requires that your guardrail use [cross-Region inference](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-cross-region.html).
   *
   * @public
   */
  tierName: GuardrailContextualGroundingTierName | undefined;
}

/**
 * The details for the guardrails contextual grounding policy.
 *
 * @public
 */
export interface GuardrailContextualGroundingPolicy {
  /**
   * The filter details for the guardrails contextual grounding policy.
   *
   * @public
   */
  filters: GuardrailContextualGroundingFilter[] | undefined;

  /**
   * The tier that your guardrail uses for contextual grounding.
   *
   * @public
   */
  tier?: GuardrailContextualGroundingTier | undefined;
}

/**
 * Contains details about the system-defined guardrail profile that you're using with your guardrail for cross-Region inference.
 *
 * For more information, see the [Amazon Bedrock User Guide](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-cross-region.html).
 *
 * @public
 */
export interface GuardrailCrossRegionDetails {
  /**
   * The ID of the guardrail profile that your guardrail is using. Profile availability depends on your current Amazon Web Services Region. For more information, see the [Amazon Bedrock User Guide](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-cross-region-support.html).
   *
   * @public
   */
  guardrailProfileId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the guardrail profile that you're using with your guardrail.
   *
   * @public
   */
  guardrailProfileArn?: string | undefined;
}

/**
 * The PII entity configured for the guardrail.
 *
 * @public
 */
export interface GuardrailPiiEntity {
  /**
   * The type of PII entity. For example, Social Security Number.
   *
   * @public
   */
  type: GuardrailPiiEntityType | undefined;

  /**
   * The configured guardrail action when PII entity is detected.
   *
   * @public
   */
  action: GuardrailSensitiveInformationAction | undefined;

  /**
   * The action to take when harmful content is detected in the input. Supported values include:
   *
   * - `BLOCK` – Block the content and replace it with blocked messaging.
   * - `ANONYMIZE` – Mask the content and replace it with identifier tags.
   * - `NONE` – Take no action but return detection information in the trace response.
   *
   * @public
   */
  inputAction?: GuardrailSensitiveInformationAction | undefined;

  /**
   * The action to take when harmful content is detected in the output. Supported values include:
   *
   * - `BLOCK` – Block the content and replace it with blocked messaging.
   * - `ANONYMIZE` – Mask the content and replace it with identifier tags.
   * - `NONE` – Take no action but return detection information in the trace response.
   *
   * @public
   */
  outputAction?: GuardrailSensitiveInformationAction | undefined;

  /**
   * Indicates whether guardrail evaluation is enabled on the input. When disabled, you aren't charged for the evaluation. The evaluation doesn't appear in the response.
   *
   * @public
   */
  inputEnabled?: boolean | undefined;

  /**
   * Indicates whether guardrail evaluation is enabled on the output. When disabled, you aren't charged for the evaluation. The evaluation doesn't appear in the response.
   *
   * @public
   */
  outputEnabled?: boolean | undefined;
}

/**
 * The regular expression configured for the guardrail.
 *
 * @public
 */
export interface GuardrailRegex {
  /**
   * The name of the regular expression for the guardrail.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the regular expression for the guardrail.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The pattern of the regular expression configured for the guardrail.
   *
   * @public
   */
  pattern: string | undefined;

  /**
   * The action taken when a match to the regular expression is detected.
   *
   * @public
   */
  action: GuardrailSensitiveInformationAction | undefined;

  /**
   * The action to take when harmful content is detected in the input. Supported values include:
   *
   * - `BLOCK` – Block the content and replace it with blocked messaging.
   * - `NONE` – Take no action but return detection information in the trace response.
   *
   * @public
   */
  inputAction?: GuardrailSensitiveInformationAction | undefined;

  /**
   * The action to take when harmful content is detected in the output. Supported values include:
   *
   * - `BLOCK` – Block the content and replace it with blocked messaging.
   * - `NONE` – Take no action but return detection information in the trace response.
   *
   * @public
   */
  outputAction?: GuardrailSensitiveInformationAction | undefined;

  /**
   * Indicates whether guardrail evaluation is enabled on the input. When disabled, you aren't charged for the evaluation. The evaluation doesn't appear in the response.
   *
   * @public
   */
  inputEnabled?: boolean | undefined;

  /**
   * Indicates whether guardrail evaluation is enabled on the output. When disabled, you aren't charged for the evaluation. The evaluation doesn't appear in the response.
   *
   * @public
   */
  outputEnabled?: boolean | undefined;
}

/**
 * Contains details about PII entities and regular expressions configured for the guardrail.
 *
 * @public
 */
export interface GuardrailSensitiveInformationPolicy {
  /**
   * The list of PII entities configured for the guardrail.
   *
   * @public
   */
  piiEntities?: GuardrailPiiEntity[] | undefined;

  /**
   * The list of regular expressions configured for the guardrail.
   *
   * @public
   */
  regexes?: GuardrailRegex[] | undefined;
}

/**
 * The tier that your guardrail uses for denied topic filters.
 *
 * @public
 */
export interface GuardrailTopicsTier {
  /**
   * The tier that your guardrail uses for denied topic filters. Valid values include:
   *
   * - `CLASSIC` tier – Provides established guardrails functionality supporting English, French, and Spanish languages.
   * - `STANDARD` tier – Provides a more robust solution than the `CLASSIC` tier and has more comprehensive language support. This tier requires that your guardrail use [cross-Region inference](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-cross-region.html).
   *
   * @public
   */
  tierName: GuardrailTopicsTierName | undefined;
}

/**
 * Details about topics for the guardrail to identify and deny.
 *
 * This data type is used in the following API operations:
 *
 * - [GetGuardrail response body](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GetGuardrail.html#API_GetGuardrail_ResponseSyntax)
 *
 * @public
 */
export interface GuardrailTopic {
  /**
   * The name of the topic to deny.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A definition of the topic to deny.
   *
   * @public
   */
  definition: string | undefined;

  /**
   * A list of prompts, each of which is an example of a prompt that can be categorized as belonging to the topic.
   *
   * @public
   */
  examples?: string[] | undefined;

  /**
   * Specifies to deny the topic.
   *
   * @public
   */
  type?: GuardrailTopicType | undefined;

  /**
   * The action to take when harmful content is detected in the input. Supported values include:
   *
   * - `BLOCK` – Block the content and replace it with blocked messaging.
   * - `NONE` – Take no action but return detection information in the trace response.
   *
   * @public
   */
  inputAction?: GuardrailTopicAction | undefined;

  /**
   * The action to take when harmful content is detected in the output. Supported values include:
   *
   * - `BLOCK` – Block the content and replace it with blocked messaging.
   * - `NONE` – Take no action but return detection information in the trace response.
   *
   * @public
   */
  outputAction?: GuardrailTopicAction | undefined;

  /**
   * Indicates whether guardrail evaluation is enabled on the input. When disabled, you aren't charged for the evaluation. The evaluation doesn't appear in the response.
   *
   * @public
   */
  inputEnabled?: boolean | undefined;

  /**
   * Indicates whether guardrail evaluation is enabled on the output. When disabled, you aren't charged for the evaluation. The evaluation doesn't appear in the response.
   *
   * @public
   */
  outputEnabled?: boolean | undefined;
}

/**
 * Contains details about topics that the guardrail should identify and deny.
 *
 * This data type is used in the following API operations:
 *
 * - [GetGuardrail response body](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GetGuardrail.html#API_GetGuardrail_ResponseSyntax)
 *
 * @public
 */
export interface GuardrailTopicPolicy {
  /**
   * A list of policies related to topics that the guardrail should deny.
   *
   * @public
   */
  topics: GuardrailTopic[] | undefined;

  /**
   * The tier that your guardrail uses for denied topic filters.
   *
   * @public
   */
  tier?: GuardrailTopicsTier | undefined;
}

/**
 * The managed word list that was configured for the guardrail. (This is a list of words that are pre-defined and managed by guardrails only.)
 *
 * @public
 */
export interface GuardrailManagedWords {
  /**
   * ManagedWords$type The managed word type that was configured for the guardrail. (For now, we only offer profanity word list)
   *
   * @public
   */
  type: GuardrailManagedWordsType | undefined;

  /**
   * The action to take when harmful content is detected in the input. Supported values include:
   *
   * - `BLOCK` – Block the content and replace it with blocked messaging.
   * - `NONE` – Take no action but return detection information in the trace response.
   *
   * @public
   */
  inputAction?: GuardrailWordAction | undefined;

  /**
   * The action to take when harmful content is detected in the output. Supported values include:
   *
   * - `BLOCK` – Block the content and replace it with blocked messaging.
   * - `NONE` – Take no action but return detection information in the trace response.
   *
   * @public
   */
  outputAction?: GuardrailWordAction | undefined;

  /**
   * Indicates whether guardrail evaluation is enabled on the input. When disabled, you aren't charged for the evaluation. The evaluation doesn't appear in the response.
   *
   * @public
   */
  inputEnabled?: boolean | undefined;

  /**
   * Indicates whether guardrail evaluation is enabled on the output. When disabled, you aren't charged for the evaluation. The evaluation doesn't appear in the response.
   *
   * @public
   */
  outputEnabled?: boolean | undefined;
}

/**
 * A word configured for the guardrail.
 *
 * @public
 */
export interface GuardrailWord {
  /**
   * Text of the word configured for the guardrail to block.
   *
   * @public
   */
  text: string | undefined;

  /**
   * The action to take when harmful content is detected in the input. Supported values include:
   *
   * - `BLOCK` – Block the content and replace it with blocked messaging.
   * - `NONE` – Take no action but return detection information in the trace response.
   *
   * @public
   */
  inputAction?: GuardrailWordAction | undefined;

  /**
   * The action to take when harmful content is detected in the output. Supported values include:
   *
   * - `BLOCK` – Block the content and replace it with blocked messaging.
   * - `NONE` – Take no action but return detection information in the trace response.
   *
   * @public
   */
  outputAction?: GuardrailWordAction | undefined;

  /**
   * Indicates whether guardrail evaluation is enabled on the input. When disabled, you aren't charged for the evaluation. The evaluation doesn't appear in the response.
   *
   * @public
   */
  inputEnabled?: boolean | undefined;

  /**
   * Indicates whether guardrail evaluation is enabled on the output. When disabled, you aren't charged for the evaluation. The evaluation doesn't appear in the response.
   *
   * @public
   */
  outputEnabled?: boolean | undefined;
}

/**
 * Contains details about the word policy configured for the guardrail.
 *
 * @public
 */
export interface GuardrailWordPolicy {
  /**
   * A list of words configured for the guardrail.
   *
   * @public
   */
  words?: GuardrailWord[] | undefined;

  /**
   * A list of managed words configured for the guardrail.
   *
   * @public
   */
  managedWordLists?: GuardrailManagedWords[] | undefined;
}

/**
 * @public
 */
export interface GetGuardrailResponse {
  /**
   * The name of the guardrail.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the guardrail.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The unique identifier of the guardrail.
   *
   * @public
   */
  guardrailId: string | undefined;

  /**
   * The ARN of the guardrail.
   *
   * @public
   */
  guardrailArn: string | undefined;

  /**
   * The version of the guardrail.
   *
   * @public
   */
  version: string | undefined;

  /**
   * The status of the guardrail.
   *
   * @public
   */
  status: GuardrailStatus | undefined;

  /**
   * The topic policy that was configured for the guardrail.
   *
   * @public
   */
  topicPolicy?: GuardrailTopicPolicy | undefined;

  /**
   * The content policy that was configured for the guardrail.
   *
   * @public
   */
  contentPolicy?: GuardrailContentPolicy | undefined;

  /**
   * The word policy that was configured for the guardrail.
   *
   * @public
   */
  wordPolicy?: GuardrailWordPolicy | undefined;

  /**
   * The sensitive information policy that was configured for the guardrail.
   *
   * @public
   */
  sensitiveInformationPolicy?: GuardrailSensitiveInformationPolicy | undefined;

  /**
   * The contextual grounding policy used in the guardrail.
   *
   * @public
   */
  contextualGroundingPolicy?: GuardrailContextualGroundingPolicy | undefined;

  /**
   * The current Automated Reasoning policy configuration for the guardrail, if any is configured.
   *
   * @public
   */
  automatedReasoningPolicy?: GuardrailAutomatedReasoningPolicy | undefined;

  /**
   * Details about the system-defined guardrail profile that you're using with your guardrail, including the guardrail profile ID and Amazon Resource Name (ARN).
   *
   * @public
   */
  crossRegionDetails?: GuardrailCrossRegionDetails | undefined;

  /**
   * The date and time at which the guardrail was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time at which the guardrail was updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * Appears if the `status` is `FAILED`. A list of reasons for why the guardrail failed to be created, updated, versioned, or deleted.
   *
   * @public
   */
  statusReasons?: string[] | undefined;

  /**
   * Appears if the `status` of the guardrail is `FAILED`. A list of recommendations to carry out before retrying the request.
   *
   * @public
   */
  failureRecommendations?: string[] | undefined;

  /**
   * The message that the guardrail returns when it blocks a prompt.
   *
   * @public
   */
  blockedInputMessaging: string | undefined;

  /**
   * The message that the guardrail returns when it blocks a model response.
   *
   * @public
   */
  blockedOutputsMessaging: string | undefined;

  /**
   * The ARN of the KMS key that encrypts the guardrail.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface ListGuardrailsRequest {
  /**
   * The unique identifier of the guardrail. This can be an ID or the ARN.
   *
   * @public
   */
  guardrailIdentifier?: string | undefined;

  /**
   * The maximum number of results to return in the response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If there are more results than were returned in the response, the response returns a `nextToken` that you can send in another `ListGuardrails` request to see the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains details about a guardrail.
 *
 * This data type is used in the following API operations:
 *
 * - [ListGuardrails response body](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_ListGuardrails.html#API_ListGuardrails_ResponseSyntax)
 *
 * @public
 */
export interface GuardrailSummary {
  /**
   * The unique identifier of the guardrail.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The ARN of the guardrail.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The status of the guardrail.
   *
   * @public
   */
  status: GuardrailStatus | undefined;

  /**
   * The name of the guardrail.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the guardrail.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The version of the guardrail.
   *
   * @public
   */
  version: string | undefined;

  /**
   * The date and time at which the guardrail was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time at which the guardrail was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * Details about the system-defined guardrail profile that you're using with your guardrail, including the guardrail profile ID and Amazon Resource Name (ARN).
   *
   * @public
   */
  crossRegionDetails?: GuardrailCrossRegionDetails | undefined;
}

/**
 * @public
 */
export interface ListGuardrailsResponse {
  /**
   * A list of objects, each of which contains details about a guardrail.
   *
   * @public
   */
  guardrails: GuardrailSummary[] | undefined;

  /**
   * If there are more results than were returned in the response, the response returns a `nextToken` that you can send in another `ListGuardrails` request to see the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateGuardrailRequest {
  /**
   * The unique identifier of the guardrail. This can be an ID or the ARN.
   *
   * @public
   */
  guardrailIdentifier: string | undefined;

  /**
   * A name for the guardrail.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the guardrail.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The topic policy to configure for the guardrail.
   *
   * @public
   */
  topicPolicyConfig?: GuardrailTopicPolicyConfig | undefined;

  /**
   * The content policy to configure for the guardrail.
   *
   * @public
   */
  contentPolicyConfig?: GuardrailContentPolicyConfig | undefined;

  /**
   * The word policy to configure for the guardrail.
   *
   * @public
   */
  wordPolicyConfig?: GuardrailWordPolicyConfig | undefined;

  /**
   * The sensitive information policy to configure for the guardrail.
   *
   * @public
   */
  sensitiveInformationPolicyConfig?: GuardrailSensitiveInformationPolicyConfig | undefined;

  /**
   * The contextual grounding policy configuration used to update a guardrail.
   *
   * @public
   */
  contextualGroundingPolicyConfig?: GuardrailContextualGroundingPolicyConfig | undefined;

  /**
   * Updated configuration for Automated Reasoning policies associated with the guardrail.
   *
   * @public
   */
  automatedReasoningPolicyConfig?: GuardrailAutomatedReasoningPolicyConfig | undefined;

  /**
   * The system-defined guardrail profile that you're using with your guardrail. Guardrail profiles define the destination Amazon Web Services Regions where guardrail inference requests can be automatically routed.
   *
   * For more information, see the [Amazon Bedrock User Guide](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-cross-region.html).
   *
   * @public
   */
  crossRegionConfig?: GuardrailCrossRegionConfig | undefined;

  /**
   * The message to return when the guardrail blocks a prompt.
   *
   * @public
   */
  blockedInputMessaging: string | undefined;

  /**
   * The message to return when the guardrail blocks a model response.
   *
   * @public
   */
  blockedOutputsMessaging: string | undefined;

  /**
   * The ARN of the KMS key with which to encrypt the guardrail.
   *
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateGuardrailResponse {
  /**
   * The unique identifier of the guardrail
   *
   * @public
   */
  guardrailId: string | undefined;

  /**
   * The ARN of the guardrail.
   *
   * @public
   */
  guardrailArn: string | undefined;

  /**
   * The version of the guardrail.
   *
   * @public
   */
  version: string | undefined;

  /**
   * The date and time at which the guardrail was updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * Contains information about the model or system-defined inference profile that is the source for an inference profile..
 *
 * @public
 */
export type InferenceProfileModelSource =
  | InferenceProfileModelSource.CopyFromMember
  | InferenceProfileModelSource.$UnknownMember;

/**
 * @public
 */
export namespace InferenceProfileModelSource {
  /**
   * The ARN of the model or system-defined inference profile that is the source for the inference profile.
   *
   * @public
   */
  export interface CopyFromMember {
    copyFrom: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    copyFrom?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    copyFrom: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateInferenceProfileRequest {
  /**
   * A name for the inference profile.
   *
   * @public
   */
  inferenceProfileName: string | undefined;

  /**
   * A description for the inference profile.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * The foundation model or system-defined inference profile that the inference profile will track metrics and costs for.
   *
   * @public
   */
  modelSource: InferenceProfileModelSource | undefined;

  /**
   * An array of objects, each of which contains a tag and its value. For more information, see [Tagging resources](https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-service.html) in the [Amazon Bedrock User Guide](https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-service.html).
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateInferenceProfileResponse {
  /**
   * The ARN of the inference profile that you created.
   *
   * @public
   */
  inferenceProfileArn: string | undefined;

  /**
   * The status of the inference profile. `ACTIVE` means that the inference profile is ready to be used.
   *
   * @public
   */
  status?: InferenceProfileStatus | undefined;
}

/**
 * @public
 */
export interface DeleteInferenceProfileRequest {
  /**
   * The Amazon Resource Name (ARN) or ID of the application inference profile to delete.
   *
   * @public
   */
  inferenceProfileIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteInferenceProfileResponse {}

/**
 * @public
 */
export interface GetInferenceProfileRequest {
  /**
   * The ID or Amazon Resource Name (ARN) of the inference profile.
   *
   * @public
   */
  inferenceProfileIdentifier: string | undefined;
}

/**
 * Contains information about a model.
 *
 * @public
 */
export interface InferenceProfileModel {
  /**
   * The Amazon Resource Name (ARN) of the model.
   *
   * @public
   */
  modelArn?: string | undefined;
}

/**
 * @public
 */
export interface GetInferenceProfileResponse {
  /**
   * The name of the inference profile.
   *
   * @public
   */
  inferenceProfileName: string | undefined;

  /**
   * The description of the inference profile.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The time at which the inference profile was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The time at which the inference profile was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the inference profile.
   *
   * @public
   */
  inferenceProfileArn: string | undefined;

  /**
   * A list of information about each model in the inference profile.
   *
   * @public
   */
  models: InferenceProfileModel[] | undefined;

  /**
   * The unique identifier of the inference profile.
   *
   * @public
   */
  inferenceProfileId: string | undefined;

  /**
   * The status of the inference profile. `ACTIVE` means that the inference profile is ready to be used.
   *
   * @public
   */
  status: InferenceProfileStatus | undefined;

  /**
   * The type of the inference profile. The following types are possible:
   *
   * - `SYSTEM_DEFINED` – The inference profile is defined by Amazon Bedrock. You can route inference requests across regions with these inference profiles.
   * - `APPLICATION` – The inference profile was created by a user. This type of inference profile can track metrics and costs when invoking the model in it. The inference profile may route requests to one or multiple regions.
   *
   * @public
   */
  type: InferenceProfileType | undefined;
}

/**
 * @public
 */
export interface ListInferenceProfilesRequest {
  /**
   * The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the `nextToken` field when making another request to return the next batch of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, enter the token returned in the `nextToken` field in the response in this field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Filters for inference profiles that match the type you specify.
   *
   * - `SYSTEM_DEFINED` – The inference profile is defined by Amazon Bedrock. You can route inference requests across regions with these inference profiles.
   * - `APPLICATION` – The inference profile was created by a user. This type of inference profile can track metrics and costs when invoking the model in it. The inference profile may route requests to one or multiple regions.
   *
   * @public
   */
  typeEquals?: InferenceProfileType | undefined;
}

/**
 * Contains information about an inference profile.
 *
 * @public
 */
export interface InferenceProfileSummary {
  /**
   * The name of the inference profile.
   *
   * @public
   */
  inferenceProfileName: string | undefined;

  /**
   * The description of the inference profile.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The time at which the inference profile was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The time at which the inference profile was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the inference profile.
   *
   * @public
   */
  inferenceProfileArn: string | undefined;

  /**
   * A list of information about each model in the inference profile.
   *
   * @public
   */
  models: InferenceProfileModel[] | undefined;

  /**
   * The unique identifier of the inference profile.
   *
   * @public
   */
  inferenceProfileId: string | undefined;

  /**
   * The status of the inference profile. `ACTIVE` means that the inference profile is ready to be used.
   *
   * @public
   */
  status: InferenceProfileStatus | undefined;

  /**
   * The type of the inference profile. The following types are possible:
   *
   * - `SYSTEM_DEFINED` – The inference profile is defined by Amazon Bedrock. You can route inference requests across regions with these inference profiles.
   * - `APPLICATION` – The inference profile was created by a user. This type of inference profile can track metrics and costs when invoking the model in it. The inference profile may route requests to one or multiple regions.
   *
   * @public
   */
  type: InferenceProfileType | undefined;
}

/**
 * @public
 */
export interface ListInferenceProfilesResponse {
  /**
   * A list of information about each inference profile that you can use.
   *
   * @public
   */
  inferenceProfileSummaries?: InferenceProfileSummary[] | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, use this token when making another request in the `nextToken` field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteModelInvocationLoggingConfigurationRequest {}

/**
 * @public
 */
export interface DeleteModelInvocationLoggingConfigurationResponse {}

/**
 * @public
 */
export interface GetModelInvocationLoggingConfigurationRequest {}

/**
 * S3 configuration for storing log data.
 *
 * @public
 */
export interface S3Config {
  /**
   * S3 bucket name.
   *
   * @public
   */
  bucketName: string | undefined;

  /**
   * S3 prefix.
   *
   * @public
   */
  keyPrefix?: string | undefined;
}

/**
 * CloudWatch logging configuration.
 *
 * @public
 */
export interface CloudWatchConfig {
  /**
   * The log group name.
   *
   * @public
   */
  logGroupName: string | undefined;

  /**
   * The role Amazon Resource Name (ARN).
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * S3 configuration for delivering a large amount of data.
   *
   * @public
   */
  largeDataDeliveryS3Config?: S3Config | undefined;
}

/**
 * Configuration fields for invocation logging.
 *
 * @public
 */
export interface LoggingConfig {
  /**
   * CloudWatch logging configuration.
   *
   * @public
   */
  cloudWatchConfig?: CloudWatchConfig | undefined;

  /**
   * S3 configuration for storing log data.
   *
   * @public
   */
  s3Config?: S3Config | undefined;

  /**
   * Set to include text data in the log delivery.
   *
   * @public
   */
  textDataDeliveryEnabled?: boolean | undefined;

  /**
   * Set to include image data in the log delivery.
   *
   * @public
   */
  imageDataDeliveryEnabled?: boolean | undefined;

  /**
   * Set to include embeddings data in the log delivery.
   *
   * @public
   */
  embeddingDataDeliveryEnabled?: boolean | undefined;

  /**
   * Set to include video data in the log delivery.
   *
   * @public
   */
  videoDataDeliveryEnabled?: boolean | undefined;

  /**
   * Set to include audio data in the log delivery.
   *
   * @public
   */
  audioDataDeliveryEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface GetModelInvocationLoggingConfigurationResponse {
  /**
   * The current configuration values.
   *
   * @public
   */
  loggingConfig?: LoggingConfig | undefined;
}

/**
 * @public
 */
export interface PutModelInvocationLoggingConfigurationRequest {
  /**
   * The logging configuration values to set.
   *
   * @public
   */
  loggingConfig: LoggingConfig | undefined;
}

/**
 * @public
 */
export interface PutModelInvocationLoggingConfigurationResponse {}

/**
 * @public
 */
export interface CreateModelCopyJobRequest {
  /**
   * The Amazon Resource Name (ARN) of the model to be copied.
   *
   * @public
   */
  sourceModelArn: string | undefined;

  /**
   * A name for the copied model.
   *
   * @public
   */
  targetModelName: string | undefined;

  /**
   * The ARN of the KMS key that you use to encrypt the model copy.
   *
   * @public
   */
  modelKmsKeyId?: string | undefined;

  /**
   * Tags to associate with the target model. For more information, see [Tag resources](https://docs.aws.amazon.com/bedrock/latest/userguide/tagging.html) in the [Amazon Bedrock User Guide](https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-service.html).
   *
   * @public
   */
  targetModelTags?: Tag[] | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateModelCopyJobResponse {
  /**
   * The Amazon Resource Name (ARN) of the model copy job.
   *
   * @public
   */
  jobArn: string | undefined;
}

/**
 * @public
 */
export interface GetModelCopyJobRequest {
  /**
   * The Amazon Resource Name (ARN) of the model copy job.
   *
   * @public
   */
  jobArn: string | undefined;
}

/**
 * @public
 */
export interface GetModelCopyJobResponse {
  /**
   * The Amazon Resource Name (ARN) of the model copy job.
   *
   * @public
   */
  jobArn: string | undefined;

  /**
   * The status of the model copy job.
   *
   * @public
   */
  status: ModelCopyJobStatus | undefined;

  /**
   * The time at which the model copy job was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the copied model.
   *
   * @public
   */
  targetModelArn: string | undefined;

  /**
   * The name of the copied model.
   *
   * @public
   */
  targetModelName?: string | undefined;

  /**
   * The unique identifier of the account that the model being copied originated from.
   *
   * @public
   */
  sourceAccountId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the original model being copied.
   *
   * @public
   */
  sourceModelArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key encrypting the copied model.
   *
   * @public
   */
  targetModelKmsKeyArn?: string | undefined;

  /**
   * The tags associated with the copied model.
   *
   * @public
   */
  targetModelTags?: Tag[] | undefined;

  /**
   * An error message for why the model copy job failed.
   *
   * @public
   */
  failureMessage?: string | undefined;

  /**
   * The name of the original model being copied.
   *
   * @public
   */
  sourceModelName?: string | undefined;
}

/**
 * @public
 */
export interface ListModelCopyJobsRequest {
  /**
   * Filters for model copy jobs created after the specified time.
   *
   * @public
   */
  creationTimeAfter?: Date | undefined;

  /**
   * Filters for model copy jobs created before the specified time.
   *
   * @public
   */
  creationTimeBefore?: Date | undefined;

  /**
   * Filters for model copy jobs whose status matches the value that you specify.
   *
   * @public
   */
  statusEquals?: ModelCopyJobStatus | undefined;

  /**
   * Filters for model copy jobs in which the account that the source model belongs to is equal to the value that you specify.
   *
   * @public
   */
  sourceAccountEquals?: string | undefined;

  /**
   * Filters for model copy jobs in which the Amazon Resource Name (ARN) of the source model to is equal to the value that you specify.
   *
   * @public
   */
  sourceModelArnEquals?: string | undefined;

  /**
   * Filters for model copy jobs in which the name of the copied model contains the string that you specify.
   *
   * @public
   */
  targetModelNameContains?: string | undefined;

  /**
   * The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the `nextToken` field when making another request to return the next batch of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, enter the token returned in the `nextToken` field in the response in this field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The field to sort by in the returned list of model copy jobs.
   *
   * @public
   */
  sortBy?: SortJobsBy | undefined;

  /**
   * Specifies whether to sort the results in ascending or descending order.
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;
}

/**
 * Contains details about each model copy job.
 *
 * This data type is used in the following API operations:
 *
 * - [ListModelCopyJobs response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_ListModelCopyJobs.html#API_ListModelCopyJobs_ResponseSyntax)
 *
 * @public
 */
export interface ModelCopyJobSummary {
  /**
   * The Amazon Resoource Name (ARN) of the model copy job.
   *
   * @public
   */
  jobArn: string | undefined;

  /**
   * The status of the model copy job.
   *
   * @public
   */
  status: ModelCopyJobStatus | undefined;

  /**
   * The time that the model copy job was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the copied model.
   *
   * @public
   */
  targetModelArn: string | undefined;

  /**
   * The name of the copied model.
   *
   * @public
   */
  targetModelName?: string | undefined;

  /**
   * The unique identifier of the account that the model being copied originated from.
   *
   * @public
   */
  sourceAccountId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the original model being copied.
   *
   * @public
   */
  sourceModelArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key used to encrypt the copied model.
   *
   * @public
   */
  targetModelKmsKeyArn?: string | undefined;

  /**
   * Tags associated with the copied model.
   *
   * @public
   */
  targetModelTags?: Tag[] | undefined;

  /**
   * If a model fails to be copied, a message describing why the job failed is included here.
   *
   * @public
   */
  failureMessage?: string | undefined;

  /**
   * The name of the original model being copied.
   *
   * @public
   */
  sourceModelName?: string | undefined;
}

/**
 * @public
 */
export interface ListModelCopyJobsResponse {
  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, use this token when making another request in the `nextToken` field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of information about each model copy job.
   *
   * @public
   */
  modelCopyJobSummaries?: ModelCopyJobSummary[] | undefined;
}

/**
 * @public
 */
export interface CreateModelImportJobRequest {
  /**
   * The name of the import job.
   *
   * @public
   */
  jobName: string | undefined;

  /**
   * The name of the imported model.
   *
   * @public
   */
  importedModelName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the model import job.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The data source for the imported model.
   *
   * @public
   */
  modelDataSource: ModelDataSource | undefined;

  /**
   * Tags to attach to this import job.
   *
   * @public
   */
  jobTags?: Tag[] | undefined;

  /**
   * Tags to attach to the imported model.
   *
   * @public
   */
  importedModelTags?: Tag[] | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * VPC configuration parameters for the private Virtual Private Cloud (VPC) that contains the resources you are using for the import job.
   *
   * @public
   */
  vpcConfig?: VpcConfig | undefined;

  /**
   * The imported model is encrypted at rest using this key.
   *
   * @public
   */
  importedModelKmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface CreateModelImportJobResponse {
  /**
   * The Amazon Resource Name (ARN) of the model import job.
   *
   * @public
   */
  jobArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteImportedModelRequest {
  /**
   * Name of the imported model to delete.
   *
   * @public
   */
  modelIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteImportedModelResponse {}

/**
 * @public
 */
export interface GetImportedModelRequest {
  /**
   * Name or Amazon Resource Name (ARN) of the imported model.
   *
   * @public
   */
  modelIdentifier: string | undefined;
}

/**
 * A `CustomModelUnit` (CMU) is an abstract view of the hardware utilization that Amazon Bedrock needs to host a single copy of your custom model. A model copy represents a single instance of your imported model that is ready to serve inference requests. Amazon Bedrock determines the number of custom model units that a model copy needs when you import the custom model.
 *
 * You can use `CustomModelUnits` to estimate the cost of running your custom model. For more information, see Calculate the cost of running a custom model in the Amazon Bedrock user guide.
 *
 * @public
 */
export interface CustomModelUnits {
  /**
   * The number of custom model units used to host a model copy.
   *
   * @public
   */
  customModelUnitsPerModelCopy?: number | undefined;

  /**
   * The version of the custom model unit. Use to determine the billing rate for the custom model unit.
   *
   * @public
   */
  customModelUnitsVersion?: string | undefined;
}

/**
 * @public
 */
export interface GetImportedModelResponse {
  /**
   * The Amazon Resource Name (ARN) associated with this imported model.
   *
   * @public
   */
  modelArn?: string | undefined;

  /**
   * The name of the imported model.
   *
   * @public
   */
  modelName?: string | undefined;

  /**
   * Job name associated with the imported model.
   *
   * @public
   */
  jobName?: string | undefined;

  /**
   * Job Amazon Resource Name (ARN) associated with the imported model.
   *
   * @public
   */
  jobArn?: string | undefined;

  /**
   * The data source for this imported model.
   *
   * @public
   */
  modelDataSource?: ModelDataSource | undefined;

  /**
   * Creation time of the imported model.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The architecture of the imported model.
   *
   * @public
   */
  modelArchitecture?: string | undefined;

  /**
   * The imported model is encrypted at rest using this key.
   *
   * @public
   */
  modelKmsKeyArn?: string | undefined;

  /**
   * Specifies if the imported model supports converse.
   *
   * @public
   */
  instructSupported?: boolean | undefined;

  /**
   * Information about the hardware utilization for a single copy of the model.
   *
   * @public
   */
  customModelUnits?: CustomModelUnits | undefined;
}

/**
 * @public
 */
export interface GetModelImportJobRequest {
  /**
   * The identifier of the import job.
   *
   * @public
   */
  jobIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetModelImportJobResponse {
  /**
   * The Amazon Resource Name (ARN) of the import job.
   *
   * @public
   */
  jobArn?: string | undefined;

  /**
   * The name of the import job.
   *
   * @public
   */
  jobName?: string | undefined;

  /**
   * The name of the imported model.
   *
   * @public
   */
  importedModelName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the imported model.
   *
   * @public
   */
  importedModelArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role associated with this job.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The data source for the imported model.
   *
   * @public
   */
  modelDataSource?: ModelDataSource | undefined;

  /**
   * The status of the job. A successful job transitions from in-progress to completed when the imported model is ready to use. If the job failed, the failure message contains information about why the job failed.
   *
   * @public
   */
  status?: ModelImportJobStatus | undefined;

  /**
   * Information about why the import job failed.
   *
   * @public
   */
  failureMessage?: string | undefined;

  /**
   * The time the resource was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * Time the resource was last modified.
   *
   * @public
   */
  lastModifiedTime?: Date | undefined;

  /**
   * Time that the resource transitioned to terminal state.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * The Virtual Private Cloud (VPC) configuration of the import model job.
   *
   * @public
   */
  vpcConfig?: VpcConfig | undefined;

  /**
   * The imported model is encrypted at rest using this key.
   *
   * @public
   */
  importedModelKmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface ListImportedModelsRequest {
  /**
   * Return imported models that created before the specified time.
   *
   * @public
   */
  creationTimeBefore?: Date | undefined;

  /**
   * Return imported models that were created after the specified time.
   *
   * @public
   */
  creationTimeAfter?: Date | undefined;

  /**
   * Return imported models only if the model name contains these characters.
   *
   * @public
   */
  nameContains?: string | undefined;

  /**
   * The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the `nextToken` field when making another request to return the next batch of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, enter the token returned in the `nextToken` field in the response in this field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The field to sort by in the returned list of imported models.
   *
   * @public
   */
  sortBy?: SortModelsBy | undefined;

  /**
   * Specifies whetehr to sort the results in ascending or descending order.
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;
}

/**
 * Information about the imported model.
 *
 * @public
 */
export interface ImportedModelSummary {
  /**
   * The Amazon Resource Name (ARN) of the imported model.
   *
   * @public
   */
  modelArn: string | undefined;

  /**
   * Name of the imported model.
   *
   * @public
   */
  modelName: string | undefined;

  /**
   * Creation time of the imported model.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * Specifies if the imported model supports converse.
   *
   * @public
   */
  instructSupported?: boolean | undefined;

  /**
   * The architecture of the imported model.
   *
   * @public
   */
  modelArchitecture?: string | undefined;
}

/**
 * @public
 */
export interface ListImportedModelsResponse {
  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, use this token when making another request in the `nextToken` field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Model summaries.
   *
   * @public
   */
  modelSummaries?: ImportedModelSummary[] | undefined;
}

/**
 * @public
 */
export interface ListModelImportJobsRequest {
  /**
   * Return import jobs that were created after the specified time.
   *
   * @public
   */
  creationTimeAfter?: Date | undefined;

  /**
   * Return import jobs that were created before the specified time.
   *
   * @public
   */
  creationTimeBefore?: Date | undefined;

  /**
   * Return imported jobs with the specified status.
   *
   * @public
   */
  statusEquals?: ModelImportJobStatus | undefined;

  /**
   * Return imported jobs only if the job name contains these characters.
   *
   * @public
   */
  nameContains?: string | undefined;

  /**
   * The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the `nextToken` field when making another request to return the next batch of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, enter the token returned in the `nextToken` field in the response in this field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The field to sort by in the returned list of imported jobs.
   *
   * @public
   */
  sortBy?: SortJobsBy | undefined;

  /**
   * Specifies whether to sort the results in ascending or descending order.
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;
}

/**
 * Information about the import job.
 *
 * @public
 */
export interface ModelImportJobSummary {
  /**
   * The Amazon Resource Name (ARN) of the import job.
   *
   * @public
   */
  jobArn: string | undefined;

  /**
   * The name of the import job.
   *
   * @public
   */
  jobName: string | undefined;

  /**
   * The status of the imported job.
   *
   * @public
   */
  status: ModelImportJobStatus | undefined;

  /**
   * The time when the import job was last modified.
   *
   * @public
   */
  lastModifiedTime?: Date | undefined;

  /**
   * The time import job was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * The time when import job ended.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * The Amazon resource Name (ARN) of the imported model.
   *
   * @public
   */
  importedModelArn?: string | undefined;

  /**
   * The name of the imported model.
   *
   * @public
   */
  importedModelName?: string | undefined;
}

/**
 * @public
 */
export interface ListModelImportJobsResponse {
  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, enter the token returned in the `nextToken` field in the response in this field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Import job summaries.
   *
   * @public
   */
  modelImportJobSummaries?: ModelImportJobSummary[] | undefined;
}

/**
 * Contains the configuration of the S3 location of the input data.
 *
 * @public
 */
export interface ModelInvocationJobS3InputDataConfig {
  /**
   * The format of the input data.
   *
   * @public
   */
  s3InputFormat?: S3InputFormat | undefined;

  /**
   * The S3 location of the input data.
   *
   * @public
   */
  s3Uri: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the S3 bucket containing the input data.
   *
   * @public
   */
  s3BucketOwner?: string | undefined;
}

/**
 * Details about the location of the input to the batch inference job.
 *
 * @public
 */
export type ModelInvocationJobInputDataConfig =
  | ModelInvocationJobInputDataConfig.S3InputDataConfigMember
  | ModelInvocationJobInputDataConfig.$UnknownMember;

/**
 * @public
 */
export namespace ModelInvocationJobInputDataConfig {
  /**
   * Contains the configuration of the S3 location of the input data.
   *
   * @public
   */
  export interface S3InputDataConfigMember {
    s3InputDataConfig: ModelInvocationJobS3InputDataConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3InputDataConfig?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    s3InputDataConfig: (value: ModelInvocationJobS3InputDataConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains the configuration of the S3 location of the output data.
 *
 * @public
 */
export interface ModelInvocationJobS3OutputDataConfig {
  /**
   * The S3 location of the output data.
   *
   * @public
   */
  s3Uri: string | undefined;

  /**
   * The unique identifier of the key that encrypts the S3 location of the output data.
   *
   * @public
   */
  s3EncryptionKeyId?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the S3 bucket containing the output data.
   *
   * @public
   */
  s3BucketOwner?: string | undefined;
}

/**
 * Contains the configuration of the S3 location of the output data.
 *
 * @public
 */
export type ModelInvocationJobOutputDataConfig =
  | ModelInvocationJobOutputDataConfig.S3OutputDataConfigMember
  | ModelInvocationJobOutputDataConfig.$UnknownMember;

/**
 * @public
 */
export namespace ModelInvocationJobOutputDataConfig {
  /**
   * Contains the configuration of the S3 location of the output data.
   *
   * @public
   */
  export interface S3OutputDataConfigMember {
    s3OutputDataConfig: ModelInvocationJobS3OutputDataConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3OutputDataConfig?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    s3OutputDataConfig: (value: ModelInvocationJobS3OutputDataConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateModelInvocationJobRequest {
  /**
   * A name to give the batch inference job.
   *
   * @public
   */
  jobName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service role with permissions to carry out and manage batch inference. You can use the console to create a default service role or follow the steps at [Create a service role for batch inference](https://docs.aws.amazon.com/bedrock/latest/userguide/batch-iam-sr.html).
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * The unique identifier of the foundation model to use for the batch inference job.
   *
   * @public
   */
  modelId: string | undefined;

  /**
   * Details about the location of the input to the batch inference job.
   *
   * @public
   */
  inputDataConfig: ModelInvocationJobInputDataConfig | undefined;

  /**
   * Details about the location of the output of the batch inference job.
   *
   * @public
   */
  outputDataConfig: ModelInvocationJobOutputDataConfig | undefined;

  /**
   * The configuration of the Virtual Private Cloud (VPC) for the data in the batch inference job. For more information, see [Protect batch inference jobs using a VPC](https://docs.aws.amazon.com/bedrock/latest/userguide/batch-vpc).
   *
   * @public
   */
  vpcConfig?: VpcConfig | undefined;

  /**
   * The number of hours after which to force the batch inference job to time out.
   *
   * @public
   */
  timeoutDurationInHours?: number | undefined;

  /**
   * Any tags to associate with the batch inference job. For more information, see [Tagging Amazon Bedrock resources](https://docs.aws.amazon.com/bedrock/latest/userguide/tagging.html).
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The invocation endpoint for ModelInvocationJob
   *
   * @public
   */
  modelInvocationType?: ModelInvocationType | undefined;
}

/**
 * @public
 */
export interface CreateModelInvocationJobResponse {
  /**
   * The Amazon Resource Name (ARN) of the batch inference job.
   *
   * @public
   */
  jobArn: string | undefined;
}

/**
 * @public
 */
export interface GetModelInvocationJobRequest {
  /**
   * The Amazon Resource Name (ARN) of the batch inference job.
   *
   * @public
   */
  jobIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetModelInvocationJobResponse {
  /**
   * The Amazon Resource Name (ARN) of the batch inference job.
   *
   * @public
   */
  jobArn: string | undefined;

  /**
   * The name of the batch inference job.
   *
   * @public
   */
  jobName?: string | undefined;

  /**
   * The unique identifier of the foundation model used for model inference.
   *
   * @public
   */
  modelId: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service role with permissions to carry out and manage batch inference. You can use the console to create a default service role or follow the steps at [Create a service role for batch inference](https://docs.aws.amazon.com/bedrock/latest/userguide/batch-iam-sr.html).
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The status of the batch inference job.
   *
   * The following statuses are possible:
   *
   * - Submitted – This job has been submitted to a queue for validation.
   * - Validating – This job is being validated for the requirements described in [Format and upload your batch inference data](https://docs.aws.amazon.com/bedrock/latest/userguide/batch-inference-data.html). The criteria include the following:
   *
   *   - Your IAM service role has access to the Amazon S3 buckets containing your files.
   *   - Your files are .jsonl files and each individual record is a JSON object in the correct format. Note that validation doesn't check if the `modelInput` value matches the request body for the model.
   *   - Your files fulfill the requirements for file size and number of records. For more information, see [Quotas for Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/quotas.html).
   * - Scheduled – This job has been validated and is now in a queue. The job will automatically start when it reaches its turn.
   * - Expired – This job timed out because it was scheduled but didn't begin before the set timeout duration. Submit a new job request.
   * - InProgress – This job has begun. You can start viewing the results in the output S3 location.
   * - Completed – This job has successfully completed. View the output files in the output S3 location.
   * - PartiallyCompleted – This job has partially completed. Not all of your records could be processed in time. View the output files in the output S3 location.
   * - Failed – This job has failed. Check the failure message for any further details. For further assistance, reach out to the [Amazon Web Services Support Center](https://console.aws.amazon.com/support/home/).
   * - Stopped – This job was stopped by a user.
   * - Stopping – This job is being stopped by a user.
   *
   * @public
   */
  status?: ModelInvocationJobStatus | undefined;

  /**
   * If the batch inference job failed, this field contains a message describing why the job failed.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * The time at which the batch inference job was submitted.
   *
   * @public
   */
  submitTime: Date | undefined;

  /**
   * The time at which the batch inference job was last modified.
   *
   * @public
   */
  lastModifiedTime?: Date | undefined;

  /**
   * The time at which the batch inference job ended.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * Details about the location of the input to the batch inference job.
   *
   * @public
   */
  inputDataConfig: ModelInvocationJobInputDataConfig | undefined;

  /**
   * Details about the location of the output of the batch inference job.
   *
   * @public
   */
  outputDataConfig: ModelInvocationJobOutputDataConfig | undefined;

  /**
   * The configuration of the Virtual Private Cloud (VPC) for the data in the batch inference job. For more information, see [Protect batch inference jobs using a VPC](https://docs.aws.amazon.com/bedrock/latest/userguide/batch-vpc).
   *
   * @public
   */
  vpcConfig?: VpcConfig | undefined;

  /**
   * The number of hours after which batch inference job was set to time out.
   *
   * @public
   */
  timeoutDurationInHours?: number | undefined;

  /**
   * The time at which the batch inference job times or timed out.
   *
   * @public
   */
  jobExpirationTime?: Date | undefined;

  /**
   * The invocation endpoint for ModelInvocationJob
   *
   * @public
   */
  modelInvocationType?: ModelInvocationType | undefined;

  /**
   * The total number of records in the batch inference job.
   *
   * @public
   */
  totalRecordCount?: number | undefined;

  /**
   * The number of records that have been processed in the batch inference job.
   *
   * @public
   */
  processedRecordCount?: number | undefined;

  /**
   * The number of records that were successfully processed in the batch inference job.
   *
   * @public
   */
  successRecordCount?: number | undefined;

  /**
   * The number of records that failed to process in the batch inference job.
   *
   * @public
   */
  errorRecordCount?: number | undefined;
}

/**
 * @public
 */
export interface ListModelInvocationJobsRequest {
  /**
   * Specify a time to filter for batch inference jobs that were submitted after the time you specify.
   *
   * @public
   */
  submitTimeAfter?: Date | undefined;

  /**
   * Specify a time to filter for batch inference jobs that were submitted before the time you specify.
   *
   * @public
   */
  submitTimeBefore?: Date | undefined;

  /**
   * Specify a status to filter for batch inference jobs whose statuses match the string you specify.
   *
   * The following statuses are possible:
   *
   * - Submitted – This job has been submitted to a queue for validation.
   * - Validating – This job is being validated for the requirements described in [Format and upload your batch inference data](https://docs.aws.amazon.com/bedrock/latest/userguide/batch-inference-data.html). The criteria include the following:
   *
   *   - Your IAM service role has access to the Amazon S3 buckets containing your files.
   *   - Your files are .jsonl files and each individual record is a JSON object in the correct format. Note that validation doesn't check if the `modelInput` value matches the request body for the model.
   *   - Your files fulfill the requirements for file size and number of records. For more information, see [Quotas for Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/quotas.html).
   * - Scheduled – This job has been validated and is now in a queue. The job will automatically start when it reaches its turn.
   * - Expired – This job timed out because it was scheduled but didn't begin before the set timeout duration. Submit a new job request.
   * - InProgress – This job has begun. You can start viewing the results in the output S3 location.
   * - Completed – This job has successfully completed. View the output files in the output S3 location.
   * - PartiallyCompleted – This job has partially completed. Not all of your records could be processed in time. View the output files in the output S3 location.
   * - Failed – This job has failed. Check the failure message for any further details. For further assistance, reach out to the [Amazon Web Services Support Center](https://console.aws.amazon.com/support/home/).
   * - Stopped – This job was stopped by a user.
   * - Stopping – This job is being stopped by a user.
   *
   * @public
   */
  statusEquals?: ModelInvocationJobStatus | undefined;

  /**
   * Specify a string to filter for batch inference jobs whose names contain the string.
   *
   * @public
   */
  nameContains?: string | undefined;

  /**
   * The maximum number of results to return. If there are more results than the number that you specify, a `nextToken` value is returned. Use the `nextToken` in a request to return the next batch of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If there were more results than the value you specified in the `maxResults` field in a previous `ListModelInvocationJobs` request, the response would have returned a `nextToken` value. To see the next batch of results, send the `nextToken` value in another request.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An attribute by which to sort the results.
   *
   * @public
   */
  sortBy?: SortJobsBy | undefined;

  /**
   * Specifies whether to sort the results by ascending or descending order.
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;
}

/**
 * A summary of a batch inference job.
 *
 * @public
 */
export interface ModelInvocationJobSummary {
  /**
   * The Amazon Resource Name (ARN) of the batch inference job.
   *
   * @public
   */
  jobArn: string | undefined;

  /**
   * The name of the batch inference job.
   *
   * @public
   */
  jobName: string | undefined;

  /**
   * The unique identifier of the foundation model used for model inference.
   *
   * @public
   */
  modelId: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service role with permissions to carry out and manage batch inference. You can use the console to create a default service role or follow the steps at [Create a service role for batch inference](https://docs.aws.amazon.com/bedrock/latest/userguide/batch-iam-sr.html).
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The status of the batch inference job.
   *
   * The following statuses are possible:
   *
   * - Submitted – This job has been submitted to a queue for validation.
   * - Validating – This job is being validated for the requirements described in [Format and upload your batch inference data](https://docs.aws.amazon.com/bedrock/latest/userguide/batch-inference-data.html). The criteria include the following:
   *
   *   - Your IAM service role has access to the Amazon S3 buckets containing your files.
   *   - Your files are .jsonl files and each individual record is a JSON object in the correct format. Note that validation doesn't check if the `modelInput` value matches the request body for the model.
   *   - Your files fulfill the requirements for file size and number of records. For more information, see [Quotas for Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/quotas.html).
   * - Scheduled – This job has been validated and is now in a queue. The job will automatically start when it reaches its turn.
   * - Expired – This job timed out because it was scheduled but didn't begin before the set timeout duration. Submit a new job request.
   * - InProgress – This job has begun. You can start viewing the results in the output S3 location.
   * - Completed – This job has successfully completed. View the output files in the output S3 location.
   * - PartiallyCompleted – This job has partially completed. Not all of your records could be processed in time. View the output files in the output S3 location.
   * - Failed – This job has failed. Check the failure message for any further details. For further assistance, reach out to the [Amazon Web Services Support Center](https://console.aws.amazon.com/support/home/).
   * - Stopped – This job was stopped by a user.
   * - Stopping – This job is being stopped by a user.
   *
   * @public
   */
  status?: ModelInvocationJobStatus | undefined;

  /**
   * If the batch inference job failed, this field contains a message describing why the job failed.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * The time at which the batch inference job was submitted.
   *
   * @public
   */
  submitTime: Date | undefined;

  /**
   * The time at which the batch inference job was last modified.
   *
   * @public
   */
  lastModifiedTime?: Date | undefined;

  /**
   * The time at which the batch inference job ended.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * Details about the location of the input to the batch inference job.
   *
   * @public
   */
  inputDataConfig: ModelInvocationJobInputDataConfig | undefined;

  /**
   * Details about the location of the output of the batch inference job.
   *
   * @public
   */
  outputDataConfig: ModelInvocationJobOutputDataConfig | undefined;

  /**
   * The configuration of the Virtual Private Cloud (VPC) for the data in the batch inference job. For more information, see [Protect batch inference jobs using a VPC](https://docs.aws.amazon.com/bedrock/latest/userguide/batch-vpc).
   *
   * @public
   */
  vpcConfig?: VpcConfig | undefined;

  /**
   * The number of hours after which the batch inference job was set to time out.
   *
   * @public
   */
  timeoutDurationInHours?: number | undefined;

  /**
   * The time at which the batch inference job times or timed out.
   *
   * @public
   */
  jobExpirationTime?: Date | undefined;

  /**
   * The invocation endpoint for ModelInvocationJob
   *
   * @public
   */
  modelInvocationType?: ModelInvocationType | undefined;

  /**
   * The total number of records in the batch inference job.
   *
   * @public
   */
  totalRecordCount?: number | undefined;

  /**
   * The number of records that have been processed in the batch inference job.
   *
   * @public
   */
  processedRecordCount?: number | undefined;

  /**
   * The number of records that were successfully processed in the batch inference job.
   *
   * @public
   */
  successRecordCount?: number | undefined;

  /**
   * The number of records that failed to process in the batch inference job.
   *
   * @public
   */
  errorRecordCount?: number | undefined;
}

/**
 * @public
 */
export interface ListModelInvocationJobsResponse {
  /**
   * If there are more results than can fit in the response, a `nextToken` is returned. Use the `nextToken` in a request to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of items, each of which contains a summary about a batch inference job.
   *
   * @public
   */
  invocationJobSummaries?: ModelInvocationJobSummary[] | undefined;
}

/**
 * @public
 */
export interface StopModelInvocationJobRequest {
  /**
   * The Amazon Resource Name (ARN) of the batch inference job to stop.
   *
   * @public
   */
  jobIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StopModelInvocationJobResponse {}

/**
 * @public
 */
export interface GetFoundationModelRequest {
  /**
   * The model identifier.
   *
   * @public
   */
  modelIdentifier: string | undefined;
}

/**
 * Details about whether a model version is available or deprecated.
 *
 * @public
 */
export interface FoundationModelLifecycle {
  /**
   * Specifies whether a model version is available (`ACTIVE`) or deprecated (`LEGACY`.
   *
   * @public
   */
  status: FoundationModelLifecycleStatus | undefined;

  /**
   * Launch time when the model first becomes available
   *
   * @public
   */
  startOfLifeTime?: Date | undefined;

  /**
   * Time when the model is no longer available for use
   *
   * @public
   */
  endOfLifeTime?: Date | undefined;

  /**
   * Time when the model enters legacy state. Models in legacy state can still be used, but users should plan to transition to an Active model before the end of life time
   *
   * @public
   */
  legacyTime?: Date | undefined;

  /**
   * Public extended access portion of the legacy period, when users should expect higher pricing
   *
   * @public
   */
  publicExtendedAccessTime?: Date | undefined;
}

/**
 * Information about a foundation model.
 *
 * @public
 */
export interface FoundationModelDetails {
  /**
   * The model Amazon Resource Name (ARN).
   *
   * @public
   */
  modelArn: string | undefined;

  /**
   * The model identifier.
   *
   * @public
   */
  modelId: string | undefined;

  /**
   * The model name.
   *
   * @public
   */
  modelName?: string | undefined;

  /**
   * The model's provider name.
   *
   * @public
   */
  providerName?: string | undefined;

  /**
   * The input modalities that the model supports.
   *
   * @public
   */
  inputModalities?: ModelModality[] | undefined;

  /**
   * The output modalities that the model supports.
   *
   * @public
   */
  outputModalities?: ModelModality[] | undefined;

  /**
   * Indicates whether the model supports streaming.
   *
   * @public
   */
  responseStreamingSupported?: boolean | undefined;

  /**
   * The customization that the model supports.
   *
   * @public
   */
  customizationsSupported?: ModelCustomization[] | undefined;

  /**
   * The inference types that the model supports.
   *
   * @public
   */
  inferenceTypesSupported?: InferenceType[] | undefined;

  /**
   * Contains details about whether a model version is available or deprecated
   *
   * @public
   */
  modelLifecycle?: FoundationModelLifecycle | undefined;
}

/**
 * @public
 */
export interface GetFoundationModelResponse {
  /**
   * Information about the foundation model.
   *
   * @public
   */
  modelDetails?: FoundationModelDetails | undefined;
}

/**
 * @public
 */
export interface ListFoundationModelsRequest {
  /**
   * Return models belonging to the model provider that you specify.
   *
   * @public
   */
  byProvider?: string | undefined;

  /**
   * Return models that support the customization type that you specify. For more information, see [Custom models](https://docs.aws.amazon.com/bedrock/latest/userguide/custom-models.html) in the [Amazon Bedrock User Guide](https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-service.html).
   *
   * @public
   */
  byCustomizationType?: ModelCustomization | undefined;

  /**
   * Return models that support the output modality that you specify.
   *
   * @public
   */
  byOutputModality?: ModelModality | undefined;

  /**
   * Return models that support the inference type that you specify. For more information, see [Provisioned Throughput](https://docs.aws.amazon.com/bedrock/latest/userguide/prov-throughput.html) in the [Amazon Bedrock User Guide](https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-service.html).
   *
   * @public
   */
  byInferenceType?: InferenceType | undefined;
}

/**
 * Summary information for a foundation model.
 *
 * @public
 */
export interface FoundationModelSummary {
  /**
   * The Amazon Resource Name (ARN) of the foundation model.
   *
   * @public
   */
  modelArn: string | undefined;

  /**
   * The model ID of the foundation model.
   *
   * @public
   */
  modelId: string | undefined;

  /**
   * The name of the model.
   *
   * @public
   */
  modelName?: string | undefined;

  /**
   * The model's provider name.
   *
   * @public
   */
  providerName?: string | undefined;

  /**
   * The input modalities that the model supports.
   *
   * @public
   */
  inputModalities?: ModelModality[] | undefined;

  /**
   * The output modalities that the model supports.
   *
   * @public
   */
  outputModalities?: ModelModality[] | undefined;

  /**
   * Indicates whether the model supports streaming.
   *
   * @public
   */
  responseStreamingSupported?: boolean | undefined;

  /**
   * Whether the model supports fine-tuning or continual pre-training.
   *
   * @public
   */
  customizationsSupported?: ModelCustomization[] | undefined;

  /**
   * The inference types that the model supports.
   *
   * @public
   */
  inferenceTypesSupported?: InferenceType[] | undefined;

  /**
   * Contains details about whether a model version is available or deprecated.
   *
   * @public
   */
  modelLifecycle?: FoundationModelLifecycle | undefined;
}

/**
 * @public
 */
export interface ListFoundationModelsResponse {
  /**
   * A list of Amazon Bedrock foundation models.
   *
   * @public
   */
  modelSummaries?: FoundationModelSummary[] | undefined;
}

/**
 * The target model for a prompt router.
 *
 * @public
 */
export interface PromptRouterTargetModel {
  /**
   * The target model's ARN.
   *
   * @public
   */
  modelArn: string | undefined;
}

/**
 * Routing criteria for a prompt router.
 *
 * @public
 */
export interface RoutingCriteria {
  /**
   * The criteria's response quality difference.
   *
   * @public
   */
  responseQualityDifference: number | undefined;
}

/**
 * @public
 */
export interface CreatePromptRouterRequest {
  /**
   * A unique, case-sensitive identifier that you provide to ensure idempotency of your requests. If not specified, the Amazon Web Services SDK automatically generates one for you.
   *
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * The name of the prompt router. The name must be unique within your Amazon Web Services account in the current region.
   *
   * @public
   */
  promptRouterName: string | undefined;

  /**
   * A list of foundation models that the prompt router can route requests to. At least one model must be specified.
   *
   * @public
   */
  models: PromptRouterTargetModel[] | undefined;

  /**
   * An optional description of the prompt router to help identify its purpose.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The criteria, which is the response quality difference, used to determine how incoming requests are routed to different models.
   *
   * @public
   */
  routingCriteria: RoutingCriteria | undefined;

  /**
   * The default model to use when the routing criteria is not met.
   *
   * @public
   */
  fallbackModel: PromptRouterTargetModel | undefined;

  /**
   * An array of key-value pairs to apply to this resource as tags. You can use tags to categorize and manage your Amazon Web Services resources.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreatePromptRouterResponse {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the prompt router.
   *
   * @public
   */
  promptRouterArn?: string | undefined;
}

/**
 * @public
 */
export interface DeletePromptRouterRequest {
  /**
   * The Amazon Resource Name (ARN) of the prompt router to delete.
   *
   * @public
   */
  promptRouterArn: string | undefined;
}

/**
 * @public
 */
export interface DeletePromptRouterResponse {}

/**
 * @public
 */
export interface GetPromptRouterRequest {
  /**
   * The prompt router's ARN
   *
   * @public
   */
  promptRouterArn: string | undefined;
}

/**
 * @public
 */
export interface GetPromptRouterResponse {
  /**
   * The router's name.
   *
   * @public
   */
  promptRouterName: string | undefined;

  /**
   * The router's routing criteria.
   *
   * @public
   */
  routingCriteria: RoutingCriteria | undefined;

  /**
   * The router's description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * When the router was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * When the router was updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The prompt router's ARN
   *
   * @public
   */
  promptRouterArn: string | undefined;

  /**
   * The router's models.
   *
   * @public
   */
  models: PromptRouterTargetModel[] | undefined;

  /**
   * The router's fallback model.
   *
   * @public
   */
  fallbackModel: PromptRouterTargetModel | undefined;

  /**
   * The router's status.
   *
   * @public
   */
  status: PromptRouterStatus | undefined;

  /**
   * The router's type.
   *
   * @public
   */
  type: PromptRouterType | undefined;
}

/**
 * @public
 */
export interface ListPromptRoutersRequest {
  /**
   * The maximum number of prompt routers to return in one page of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Specify the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The type of the prompt routers, such as whether it's default or custom.
   *
   * @public
   */
  type?: PromptRouterType | undefined;
}

/**
 * Details about a prompt router.
 *
 * @public
 */
export interface PromptRouterSummary {
  /**
   * The router's name.
   *
   * @public
   */
  promptRouterName: string | undefined;

  /**
   * The router's routing criteria.
   *
   * @public
   */
  routingCriteria: RoutingCriteria | undefined;

  /**
   * The router's description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * When the router was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * When the router was updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The router's ARN.
   *
   * @public
   */
  promptRouterArn: string | undefined;

  /**
   * The router's models.
   *
   * @public
   */
  models: PromptRouterTargetModel[] | undefined;

  /**
   * The router's fallback model.
   *
   * @public
   */
  fallbackModel: PromptRouterTargetModel | undefined;

  /**
   * The router's status.
   *
   * @public
   */
  status: PromptRouterStatus | undefined;

  /**
   * The summary's type.
   *
   * @public
   */
  type: PromptRouterType | undefined;
}

/**
 * @public
 */
export interface ListPromptRoutersResponse {
  /**
   * A list of prompt router summaries.
   *
   * @public
   */
  promptRouterSummaries?: PromptRouterSummary[] | undefined;

  /**
   * Specify the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateProvisionedModelThroughputRequest {
  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html) in the Amazon S3 User Guide.
   *
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * Number of model units to allocate. A model unit delivers a specific throughput level for the specified model. The throughput level of a model unit specifies the total number of input and output tokens that it can process and generate within a span of one minute. By default, your account has no model units for purchasing Provisioned Throughputs with commitment. You must first visit the [Amazon Web Services support center](https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase) to request MUs.
   *
   * For model unit quotas, see [Provisioned Throughput quotas](https://docs.aws.amazon.com/bedrock/latest/userguide/quotas.html#prov-thru-quotas) in the [Amazon Bedrock User Guide](https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-service.html).
   *
   * For more information about what an MU specifies, contact your Amazon Web Services account manager.
   *
   * @public
   */
  modelUnits: number | undefined;

  /**
   * The name for this Provisioned Throughput.
   *
   * @public
   */
  provisionedModelName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) or name of the model to associate with this Provisioned Throughput. For a list of models for which you can purchase Provisioned Throughput, see [Amazon Bedrock model IDs for purchasing Provisioned Throughput](https://docs.aws.amazon.com/bedrock/latest/userguide/model-ids.html#prov-throughput-models) in the [Amazon Bedrock User Guide](https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-service.html).
   *
   * @public
   */
  modelId: string | undefined;

  /**
   * The commitment duration requested for the Provisioned Throughput. Billing occurs hourly and is discounted for longer commitment terms. To request a no-commit Provisioned Throughput, omit this field.
   *
   * Custom models support all levels of commitment. To see which base models support no commitment, see [Supported regions and models for Provisioned Throughput](https://docs.aws.amazon.com/bedrock/latest/userguide/pt-supported.html) in the [Amazon Bedrock User Guide](https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-service.html)
   *
   * @public
   */
  commitmentDuration?: CommitmentDuration | undefined;

  /**
   * Tags to associate with this Provisioned Throughput.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateProvisionedModelThroughputResponse {
  /**
   * The Amazon Resource Name (ARN) for this Provisioned Throughput.
   *
   * @public
   */
  provisionedModelArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteProvisionedModelThroughputRequest {
  /**
   * The Amazon Resource Name (ARN) or name of the Provisioned Throughput.
   *
   * @public
   */
  provisionedModelId: string | undefined;
}

/**
 * @public
 */
export interface DeleteProvisionedModelThroughputResponse {}

/**
 * @public
 */
export interface GetProvisionedModelThroughputRequest {
  /**
   * The Amazon Resource Name (ARN) or name of the Provisioned Throughput.
   *
   * @public
   */
  provisionedModelId: string | undefined;
}

/**
 * @public
 */
export interface GetProvisionedModelThroughputResponse {
  /**
   * The number of model units allocated to this Provisioned Throughput.
   *
   * @public
   */
  modelUnits: number | undefined;

  /**
   * The number of model units that was requested for this Provisioned Throughput.
   *
   * @public
   */
  desiredModelUnits: number | undefined;

  /**
   * The name of the Provisioned Throughput.
   *
   * @public
   */
  provisionedModelName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Provisioned Throughput.
   *
   * @public
   */
  provisionedModelArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the model associated with this Provisioned Throughput.
   *
   * @public
   */
  modelArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the model requested to be associated to this Provisioned Throughput. This value differs from the `modelArn` if updating hasn't completed.
   *
   * @public
   */
  desiredModelArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the base model for which the Provisioned Throughput was created, or of the base model that the custom model for which the Provisioned Throughput was created was customized.
   *
   * @public
   */
  foundationModelArn: string | undefined;

  /**
   * The status of the Provisioned Throughput.
   *
   * @public
   */
  status: ProvisionedModelStatus | undefined;

  /**
   * The timestamp of the creation time for this Provisioned Throughput.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * The timestamp of the last time that this Provisioned Throughput was modified.
   *
   * @public
   */
  lastModifiedTime: Date | undefined;

  /**
   * A failure message for any issues that occurred during creation, updating, or deletion of the Provisioned Throughput.
   *
   * @public
   */
  failureMessage?: string | undefined;

  /**
   * Commitment duration of the Provisioned Throughput.
   *
   * @public
   */
  commitmentDuration?: CommitmentDuration | undefined;

  /**
   * The timestamp for when the commitment term for the Provisioned Throughput expires.
   *
   * @public
   */
  commitmentExpirationTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListProvisionedModelThroughputsRequest {
  /**
   * A filter that returns Provisioned Throughputs created after the specified time.
   *
   * @public
   */
  creationTimeAfter?: Date | undefined;

  /**
   * A filter that returns Provisioned Throughputs created before the specified time.
   *
   * @public
   */
  creationTimeBefore?: Date | undefined;

  /**
   * A filter that returns Provisioned Throughputs if their statuses matches the value that you specify.
   *
   * @public
   */
  statusEquals?: ProvisionedModelStatus | undefined;

  /**
   * A filter that returns Provisioned Throughputs whose model Amazon Resource Name (ARN) is equal to the value that you specify.
   *
   * @public
   */
  modelArnEquals?: string | undefined;

  /**
   * A filter that returns Provisioned Throughputs if their name contains the expression that you specify.
   *
   * @public
   */
  nameContains?: string | undefined;

  /**
   * THe maximum number of results to return in the response. If there are more results than the number you specified, the response returns a `nextToken` value. To see the next batch of results, send the `nextToken` value in another list request.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If there are more results than the number you specified in the `maxResults` field, the response returns a `nextToken` value. To see the next batch of results, specify the `nextToken` value in this field.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The field by which to sort the returned list of Provisioned Throughputs.
   *
   * @public
   */
  sortBy?: SortByProvisionedModels | undefined;

  /**
   * The sort order of the results.
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;
}

/**
 * A summary of information about a Provisioned Throughput.
 *
 * This data type is used in the following API operations:
 *
 * - [ListProvisionedThroughputs response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_ListProvisionedModelThroughputs.html#API_ListProvisionedModelThroughputs_ResponseSyntax)
 *
 * @public
 */
export interface ProvisionedModelSummary {
  /**
   * The name of the Provisioned Throughput.
   *
   * @public
   */
  provisionedModelName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Provisioned Throughput.
   *
   * @public
   */
  provisionedModelArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the model associated with the Provisioned Throughput.
   *
   * @public
   */
  modelArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the model requested to be associated to this Provisioned Throughput. This value differs from the `modelArn` if updating hasn't completed.
   *
   * @public
   */
  desiredModelArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the base model for which the Provisioned Throughput was created, or of the base model that the custom model for which the Provisioned Throughput was created was customized.
   *
   * @public
   */
  foundationModelArn: string | undefined;

  /**
   * The number of model units allocated to the Provisioned Throughput.
   *
   * @public
   */
  modelUnits: number | undefined;

  /**
   * The number of model units that was requested to be allocated to the Provisioned Throughput.
   *
   * @public
   */
  desiredModelUnits: number | undefined;

  /**
   * The status of the Provisioned Throughput.
   *
   * @public
   */
  status: ProvisionedModelStatus | undefined;

  /**
   * The duration for which the Provisioned Throughput was committed.
   *
   * @public
   */
  commitmentDuration?: CommitmentDuration | undefined;

  /**
   * The timestamp for when the commitment term of the Provisioned Throughput expires.
   *
   * @public
   */
  commitmentExpirationTime?: Date | undefined;

  /**
   * The time that the Provisioned Throughput was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * The time that the Provisioned Throughput was last modified.
   *
   * @public
   */
  lastModifiedTime: Date | undefined;
}

/**
 * @public
 */
export interface ListProvisionedModelThroughputsResponse {
  /**
   * If there are more results than the number you specified in the `maxResults` field, this value is returned. To see the next batch of results, include this value in the `nextToken` field in another list request.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of summaries, one for each Provisioned Throughput in the response.
   *
   * @public
   */
  provisionedModelSummaries?: ProvisionedModelSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateProvisionedModelThroughputRequest {
  /**
   * The Amazon Resource Name (ARN) or name of the Provisioned Throughput to update.
   *
   * @public
   */
  provisionedModelId: string | undefined;

  /**
   * The new name for this Provisioned Throughput.
   *
   * @public
   */
  desiredProvisionedModelName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the new model to associate with this Provisioned Throughput. You can't specify this field if this Provisioned Throughput is associated with a base model.
   *
   * If this Provisioned Throughput is associated with a custom model, you can specify one of the following options:
   *
   * - The base model from which the custom model was customized.
   * - Another custom model that was customized from the same base model as the custom model.
   *
   * @public
   */
  desiredModelId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateProvisionedModelThroughputResponse {}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * The ARN of the Bedrock resource to which this resource policy applies.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyResponse {}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * The ARN of the Bedrock resource to which this resource policy applies.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * The JSON string representing the Bedrock resource policy.
   *
   * @public
   */
  resourcePolicy?: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * The ARN of the Bedrock resource to which this resource policy applies.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The JSON string representing the Bedrock resource policy.
   *
   * @public
   */
  resourcePolicy: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {
  /**
   * The ARN of the Bedrock resource to which this resource policy applies.
   *
   * @public
   */
  resourceArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateFoundationModelAgreementRequest {
  /**
   * An offer token encapsulates the information for an offer.
   *
   * @public
   */
  offerToken: string | undefined;

  /**
   * Model Id of the model for the access request.
   *
   * @public
   */
  modelId: string | undefined;
}

/**
 * @public
 */
export interface CreateFoundationModelAgreementResponse {
  /**
   * Model Id of the model for the access request.
   *
   * @public
   */
  modelId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFoundationModelAgreementRequest {
  /**
   * Model Id of the model access to delete.
   *
   * @public
   */
  modelId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFoundationModelAgreementResponse {}

/**
 * @public
 */
export interface GetFoundationModelAvailabilityRequest {
  /**
   * The model Id of the foundation model.
   *
   * @public
   */
  modelId: string | undefined;
}

/**
 * @public
 */
export interface GetFoundationModelAvailabilityResponse {
  /**
   * The model Id of the foundation model.
   *
   * @public
   */
  modelId: string | undefined;

  /**
   * Agreement availability.
   *
   * @public
   */
  agreementAvailability: AgreementAvailability | undefined;

  /**
   * Authorization status.
   *
   * @public
   */
  authorizationStatus: AuthorizationStatus | undefined;

  /**
   * Entitlement availability.
   *
   * @public
   */
  entitlementAvailability: EntitlementAvailability | undefined;

  /**
   * Region availability.
   *
   * @public
   */
  regionAvailability: RegionAvailability | undefined;
}

/**
 * @public
 */
export interface ListFoundationModelAgreementOffersRequest {
  /**
   * Model Id of the foundation model.
   *
   * @public
   */
  modelId: string | undefined;

  /**
   * Type of offer associated with the model.
   *
   * @public
   */
  offerType?: OfferType | undefined;
}

/**
 * The legal term of the agreement.
 *
 * @public
 */
export interface LegalTerm {
  /**
   * URL to the legal term document.
   *
   * @public
   */
  url?: string | undefined;
}

/**
 * Describes a support term.
 *
 * @public
 */
export interface SupportTerm {
  /**
   * Describes the refund policy.
   *
   * @public
   */
  refundPolicyDescription?: string | undefined;
}

/**
 * Dimensional price rate.
 *
 * @public
 */
export interface DimensionalPriceRate {
  /**
   * Dimension for the price rate.
   *
   * @public
   */
  dimension?: string | undefined;

  /**
   * Single-dimensional rate information.
   *
   * @public
   */
  price?: string | undefined;

  /**
   * Description of the price rate.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Unit associated with the price.
   *
   * @public
   */
  unit?: string | undefined;
}

/**
 * Describes the usage-based pricing term.
 *
 * @public
 */
export interface PricingTerm {
  /**
   * Describes a usage price for each dimension.
   *
   * @public
   */
  rateCard: DimensionalPriceRate[] | undefined;
}

/**
 * Describes the validity terms.
 *
 * @public
 */
export interface ValidityTerm {
  /**
   * Describes the agreement duration.
   *
   * @public
   */
  agreementDuration?: string | undefined;
}

/**
 * Describes the usage terms of an offer.
 *
 * @public
 */
export interface TermDetails {
  /**
   * Describes the usage-based pricing term.
   *
   * @public
   */
  usageBasedPricingTerm: PricingTerm | undefined;

  /**
   * Describes the legal terms.
   *
   * @public
   */
  legalTerm: LegalTerm | undefined;

  /**
   * Describes the support terms.
   *
   * @public
   */
  supportTerm: SupportTerm | undefined;

  /**
   * Describes the validity terms.
   *
   * @public
   */
  validityTerm?: ValidityTerm | undefined;
}

/**
 * An offer dictates usage terms for the model.
 *
 * @public
 */
export interface Offer {
  /**
   * Offer Id for a model offer.
   *
   * @public
   */
  offerId?: string | undefined;

  /**
   * Offer token.
   *
   * @public
   */
  offerToken: string | undefined;

  /**
   * Details about the terms of the offer.
   *
   * @public
   */
  termDetails: TermDetails | undefined;
}

/**
 * @public
 */
export interface ListFoundationModelAgreementOffersResponse {
  /**
   * Model Id of the foundation model.
   *
   * @public
   */
  modelId: string | undefined;

  /**
   * List of the offers associated with the specified model.
   *
   * @public
   */
  offers: Offer[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * An array of the tags associated with this resource.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource to tag.
   *
   * @public
   */
  resourceARN: string | undefined;

  /**
   * Tags to associate with the resource.
   *
   * @public
   */
  tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource to untag.
   *
   * @public
   */
  resourceARN: string | undefined;

  /**
   * Tag keys of the tags to remove from the resource.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface CreateModelCustomizationJobRequest {
  /**
   * A name for the fine-tuning job.
   *
   * @public
   */
  jobName: string | undefined;

  /**
   * A name for the resulting custom model.
   *
   * @public
   */
  customModelName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM service role that Amazon Bedrock can assume to perform tasks on your behalf. For example, during model training, Amazon Bedrock needs your permission to read input data from an S3 bucket, write model artifacts to an S3 bucket. To pass this role to Amazon Bedrock, the caller of this API must have the `iam:PassRole` permission.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * Name of the base model.
   *
   * @public
   */
  baseModelIdentifier: string | undefined;

  /**
   * The customization type.
   *
   * @public
   */
  customizationType?: CustomizationType | undefined;

  /**
   * The custom model is encrypted at rest using this key.
   *
   * @public
   */
  customModelKmsKeyId?: string | undefined;

  /**
   * Tags to attach to the job.
   *
   * @public
   */
  jobTags?: Tag[] | undefined;

  /**
   * Tags to attach to the resulting custom model.
   *
   * @public
   */
  customModelTags?: Tag[] | undefined;

  /**
   * Information about the training dataset.
   *
   * @public
   */
  trainingDataConfig: TrainingDataConfig | undefined;

  /**
   * Information about the validation dataset.
   *
   * @public
   */
  validationDataConfig?: ValidationDataConfig | undefined;

  /**
   * S3 location for the output data.
   *
   * @public
   */
  outputDataConfig: OutputDataConfig | undefined;

  /**
   * Parameters related to tuning the model. For details on the format for different models, see [Custom model hyperparameters](https://docs.aws.amazon.com/bedrock/latest/userguide/custom-models-hp.html).
   *
   * @public
   */
  hyperParameters?: Record<string, string> | undefined;

  /**
   * The configuration of the Virtual Private Cloud (VPC) that contains the resources that you're using for this job. For more information, see [Protect your model customization jobs using a VPC](https://docs.aws.amazon.com/bedrock/latest/userguide/vpc-model-customization.html).
   *
   * @public
   */
  vpcConfig?: VpcConfig | undefined;

  /**
   * The customization configuration for the model customization job.
   *
   * @public
   */
  customizationConfig?: CustomizationConfig | undefined;
}

/**
 * @public
 */
export interface CreateModelCustomizationJobResponse {
  /**
   * Amazon Resource Name (ARN) of the fine tuning job
   *
   * @public
   */
  jobArn: string | undefined;
}

/**
 * @public
 */
export interface GetModelCustomizationJobRequest {
  /**
   * Identifier for the customization job.
   *
   * @public
   */
  jobIdentifier: string | undefined;
}

/**
 * For a Distillation job, the status details for the data processing sub-task of the job.
 *
 * @public
 */
export interface DataProcessingDetails {
  /**
   * The status of the data processing sub-task of the job.
   *
   * @public
   */
  status?: JobStatusDetails | undefined;

  /**
   * The start time of the data processing sub-task of the job.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The latest update to the data processing sub-task of the job.
   *
   * @public
   */
  lastModifiedTime?: Date | undefined;
}

/**
 * For a Distillation job, the status details for the training sub-task of the job.
 *
 * @public
 */
export interface TrainingDetails {
  /**
   * The status of the training sub-task of the job.
   *
   * @public
   */
  status?: JobStatusDetails | undefined;

  /**
   * The start time of the training sub-task of the job.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The latest update to the training sub-task of the job.
   *
   * @public
   */
  lastModifiedTime?: Date | undefined;
}

/**
 * For a Distillation job, the status details for the validation sub-task of the job.
 *
 * @public
 */
export interface ValidationDetails {
  /**
   * The status of the validation sub-task of the job.
   *
   * @public
   */
  status?: JobStatusDetails | undefined;

  /**
   * The start time of the validation sub-task of the job.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The latest update to the validation sub-task of the job.
   *
   * @public
   */
  lastModifiedTime?: Date | undefined;
}

/**
 * For a Distillation job, the status details for sub-tasks of the job. Possible statuses for each sub-task include the following:
 *
 * - NotStarted
 * - InProgress
 * - Completed
 * - Stopping
 * - Stopped
 * - Failed
 *
 * @public
 */
export interface StatusDetails {
  /**
   * The status details for the validation sub-task of the job.
   *
   * @public
   */
  validationDetails?: ValidationDetails | undefined;

  /**
   * The status details for the data processing sub-task of the job.
   *
   * @public
   */
  dataProcessingDetails?: DataProcessingDetails | undefined;

  /**
   * The status details for the training sub-task of the job.
   *
   * @public
   */
  trainingDetails?: TrainingDetails | undefined;
}

/**
 * @public
 */
export interface GetModelCustomizationJobResponse {
  /**
   * The Amazon Resource Name (ARN) of the customization job.
   *
   * @public
   */
  jobArn: string | undefined;

  /**
   * The name of the customization job.
   *
   * @public
   */
  jobName: string | undefined;

  /**
   * The name of the output model.
   *
   * @public
   */
  outputModelName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the output model.
   *
   * @public
   */
  outputModelArn?: string | undefined;

  /**
   * The token that you specified in the `CreateCustomizationJob` request.
   *
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The status of the job. A successful job transitions from in-progress to completed when the output model is ready to use. If the job failed, the failure message contains information about why the job failed.
   *
   * @public
   */
  status?: ModelCustomizationJobStatus | undefined;

  /**
   * For a Distillation job, the details about the statuses of the sub-tasks of the customization job.
   *
   * @public
   */
  statusDetails?: StatusDetails | undefined;

  /**
   * Information about why the job failed.
   *
   * @public
   */
  failureMessage?: string | undefined;

  /**
   * Time that the resource was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * Time that the resource was last modified.
   *
   * @public
   */
  lastModifiedTime?: Date | undefined;

  /**
   * Time that the resource transitioned to terminal state.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * Amazon Resource Name (ARN) of the base model.
   *
   * @public
   */
  baseModelArn: string | undefined;

  /**
   * The hyperparameter values for the job. For details on the format for different models, see [Custom model hyperparameters](https://docs.aws.amazon.com/bedrock/latest/userguide/custom-models-hp.html).
   *
   * @public
   */
  hyperParameters?: Record<string, string> | undefined;

  /**
   * Contains information about the training dataset.
   *
   * @public
   */
  trainingDataConfig: TrainingDataConfig | undefined;

  /**
   * Contains information about the validation dataset.
   *
   * @public
   */
  validationDataConfig: ValidationDataConfig | undefined;

  /**
   * Output data configuration
   *
   * @public
   */
  outputDataConfig: OutputDataConfig | undefined;

  /**
   * The type of model customization.
   *
   * @public
   */
  customizationType?: CustomizationType | undefined;

  /**
   * The custom model is encrypted at rest using this key.
   *
   * @public
   */
  outputModelKmsKeyArn?: string | undefined;

  /**
   * Contains training metrics from the job creation.
   *
   * @public
   */
  trainingMetrics?: TrainingMetrics | undefined;

  /**
   * The loss metric for each validator that you provided in the createjob request.
   *
   * @public
   */
  validationMetrics?: ValidatorMetric[] | undefined;

  /**
   * VPC configuration for the custom model job.
   *
   * @public
   */
  vpcConfig?: VpcConfig | undefined;

  /**
   * The customization configuration for the model customization job.
   *
   * @public
   */
  customizationConfig?: CustomizationConfig | undefined;
}

/**
 * @public
 */
export interface ListModelCustomizationJobsRequest {
  /**
   * Return customization jobs created after the specified time.
   *
   * @public
   */
  creationTimeAfter?: Date | undefined;

  /**
   * Return customization jobs created before the specified time.
   *
   * @public
   */
  creationTimeBefore?: Date | undefined;

  /**
   * Return customization jobs with the specified status.
   *
   * @public
   */
  statusEquals?: FineTuningJobStatus | undefined;

  /**
   * Return customization jobs only if the job name contains these characters.
   *
   * @public
   */
  nameContains?: string | undefined;

  /**
   * The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the `nextToken` field when making another request to return the next batch of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, enter the token returned in the `nextToken` field in the response in this field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The field to sort by in the returned list of jobs.
   *
   * @public
   */
  sortBy?: SortJobsBy | undefined;

  /**
   * The sort order of the results.
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;
}

/**
 * Information about one customization job
 *
 * @public
 */
export interface ModelCustomizationJobSummary {
  /**
   * Amazon Resource Name (ARN) of the customization job.
   *
   * @public
   */
  jobArn: string | undefined;

  /**
   * Amazon Resource Name (ARN) of the base model.
   *
   * @public
   */
  baseModelArn: string | undefined;

  /**
   * Name of the customization job.
   *
   * @public
   */
  jobName: string | undefined;

  /**
   * Status of the customization job.
   *
   * @public
   */
  status: ModelCustomizationJobStatus | undefined;

  /**
   * Details about the status of the data processing sub-task of the job.
   *
   * @public
   */
  statusDetails?: StatusDetails | undefined;

  /**
   * Time that the customization job was last modified.
   *
   * @public
   */
  lastModifiedTime?: Date | undefined;

  /**
   * Creation time of the custom model.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * Time that the customization job ended.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * Amazon Resource Name (ARN) of the custom model.
   *
   * @public
   */
  customModelArn?: string | undefined;

  /**
   * Name of the custom model.
   *
   * @public
   */
  customModelName?: string | undefined;

  /**
   * Specifies whether to carry out continued pre-training of a model or whether to fine-tune it. For more information, see [Custom models](https://docs.aws.amazon.com/bedrock/latest/userguide/custom-models.html).
   *
   * @public
   */
  customizationType?: CustomizationType | undefined;
}

/**
 * @public
 */
export interface ListModelCustomizationJobsResponse {
  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, use this token when making another request in the `nextToken` field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Job summaries.
   *
   * @public
   */
  modelCustomizationJobSummaries?: ModelCustomizationJobSummary[] | undefined;
}

/**
 * @public
 */
export interface StopModelCustomizationJobRequest {
  /**
   * Job identifier of the job to stop.
   *
   * @public
   */
  jobIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StopModelCustomizationJobResponse {}

/**
 * Specifies the filters to use on the metadata attributes/fields in the knowledge base data sources before returning results.
 *
 * @public
 */
export type RetrievalFilter =
  | RetrievalFilter.AndAllMember
  | RetrievalFilter.EqualsMember
  | RetrievalFilter.GreaterThanMember
  | RetrievalFilter.GreaterThanOrEqualsMember
  | RetrievalFilter.InMember
  | RetrievalFilter.LessThanMember
  | RetrievalFilter.LessThanOrEqualsMember
  | RetrievalFilter.ListContainsMember
  | RetrievalFilter.NotEqualsMember
  | RetrievalFilter.NotInMember
  | RetrievalFilter.OrAllMember
  | RetrievalFilter.StartsWithMember
  | RetrievalFilter.StringContainsMember
  | RetrievalFilter.$UnknownMember;

/**
 * @public
 */
export namespace RetrievalFilter {
  /**
   * Knowledge base data sources are returned if they contain a metadata attribute whose name matches the key and whose value matches the value in this object.
   *
   * The following example would return data sources with an animal attribute whose value is 'cat': `"equals": \{ "key": "animal", "value": "cat" \}`
   *
   * @public
   */
  export interface EqualsMember {
    equals: FilterAttribute;
    notEquals?: never;
    greaterThan?: never;
    greaterThanOrEquals?: never;
    lessThan?: never;
    lessThanOrEquals?: never;
    in?: never;
    notIn?: never;
    startsWith?: never;
    listContains?: never;
    stringContains?: never;
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * Knowledge base data sources that contain a metadata attribute whose name matches the key and whose value doesn't match the value in this object are returned.
   *
   * The following example would return data sources that don't contain an animal attribute whose value is 'cat': `"notEquals": \{ "key": "animal", "value": "cat" \}`
   *
   * @public
   */
  export interface NotEqualsMember {
    equals?: never;
    notEquals: FilterAttribute;
    greaterThan?: never;
    greaterThanOrEquals?: never;
    lessThan?: never;
    lessThanOrEquals?: never;
    in?: never;
    notIn?: never;
    startsWith?: never;
    listContains?: never;
    stringContains?: never;
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * Knowledge base data sources are returned if they contain a metadata attribute whose name matches the key and whose value is greater than the value in this object.
   *
   * The following example would return data sources with an year attribute whose value is greater than '1989': `"greaterThan": \{ "key": "year", "value": 1989 \}`
   *
   * @public
   */
  export interface GreaterThanMember {
    equals?: never;
    notEquals?: never;
    greaterThan: FilterAttribute;
    greaterThanOrEquals?: never;
    lessThan?: never;
    lessThanOrEquals?: never;
    in?: never;
    notIn?: never;
    startsWith?: never;
    listContains?: never;
    stringContains?: never;
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * Knowledge base data sources are returned if they contain a metadata attribute whose name matches the key and whose value is greater than or equal to the value in this object.
   *
   * The following example would return data sources with an year attribute whose value is greater than or equal to '1989': `"greaterThanOrEquals": \{ "key": "year", "value": 1989 \}`
   *
   * @public
   */
  export interface GreaterThanOrEqualsMember {
    equals?: never;
    notEquals?: never;
    greaterThan?: never;
    greaterThanOrEquals: FilterAttribute;
    lessThan?: never;
    lessThanOrEquals?: never;
    in?: never;
    notIn?: never;
    startsWith?: never;
    listContains?: never;
    stringContains?: never;
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * Knowledge base data sources are returned if they contain a metadata attribute whose name matches the key and whose value is less than the value in this object.
   *
   * The following example would return data sources with an year attribute whose value is less than to '1989': `"lessThan": \{ "key": "year", "value": 1989 \}`
   *
   * @public
   */
  export interface LessThanMember {
    equals?: never;
    notEquals?: never;
    greaterThan?: never;
    greaterThanOrEquals?: never;
    lessThan: FilterAttribute;
    lessThanOrEquals?: never;
    in?: never;
    notIn?: never;
    startsWith?: never;
    listContains?: never;
    stringContains?: never;
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * Knowledge base data sources are returned if they contain a metadata attribute whose name matches the key and whose value is less than or equal to the value in this object.
   *
   * The following example would return data sources with an year attribute whose value is less than or equal to '1989': `"lessThanOrEquals": \{ "key": "year", "value": 1989 \}`
   *
   * @public
   */
  export interface LessThanOrEqualsMember {
    equals?: never;
    notEquals?: never;
    greaterThan?: never;
    greaterThanOrEquals?: never;
    lessThan?: never;
    lessThanOrEquals: FilterAttribute;
    in?: never;
    notIn?: never;
    startsWith?: never;
    listContains?: never;
    stringContains?: never;
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * Knowledge base data sources are returned if they contain a metadata attribute whose name matches the key and whose value is in the list specified in the value in this object.
   *
   * The following example would return data sources with an animal attribute that is either 'cat' or 'dog': `"in": \{ "key": "animal", "value": ["cat", "dog"] \}`
   *
   * @public
   */
  export interface InMember {
    equals?: never;
    notEquals?: never;
    greaterThan?: never;
    greaterThanOrEquals?: never;
    lessThan?: never;
    lessThanOrEquals?: never;
    in: FilterAttribute;
    notIn?: never;
    startsWith?: never;
    listContains?: never;
    stringContains?: never;
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * Knowledge base data sources are returned if they contain a metadata attribute whose name matches the key and whose value isn't in the list specified in the value in this object.
   *
   * The following example would return data sources whose animal attribute is neither 'cat' nor 'dog': `"notIn": \{ "key": "animal", "value": ["cat", "dog"] \}`
   *
   * @public
   */
  export interface NotInMember {
    equals?: never;
    notEquals?: never;
    greaterThan?: never;
    greaterThanOrEquals?: never;
    lessThan?: never;
    lessThanOrEquals?: never;
    in?: never;
    notIn: FilterAttribute;
    startsWith?: never;
    listContains?: never;
    stringContains?: never;
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * Knowledge base data sources are returned if they contain a metadata attribute whose name matches the key and whose value starts with the value in this object. This filter is currently only supported for Amazon OpenSearch Serverless vector stores.
   *
   * The following example would return data sources with an animal attribute starts with 'ca' (for example, 'cat' or 'camel'). `"startsWith": \{ "key": "animal", "value": "ca" \}`
   *
   * @public
   */
  export interface StartsWithMember {
    equals?: never;
    notEquals?: never;
    greaterThan?: never;
    greaterThanOrEquals?: never;
    lessThan?: never;
    lessThanOrEquals?: never;
    in?: never;
    notIn?: never;
    startsWith: FilterAttribute;
    listContains?: never;
    stringContains?: never;
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * Knowledge base data sources are returned if they contain a metadata attribute whose name matches the key and whose value is a list that contains the value as one of its members.
   *
   * The following example would return data sources with an animals attribute that is a list containing a cat member (for example, `["dog", "cat"]`): `"listContains": \{ "key": "animals", "value": "cat" \}`
   *
   * @public
   */
  export interface ListContainsMember {
    equals?: never;
    notEquals?: never;
    greaterThan?: never;
    greaterThanOrEquals?: never;
    lessThan?: never;
    lessThanOrEquals?: never;
    in?: never;
    notIn?: never;
    startsWith?: never;
    listContains: FilterAttribute;
    stringContains?: never;
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * Knowledge base data sources are returned if they contain a metadata attribute whose name matches the key and whose value is one of the following:
   *
   * A string that contains the value as a substring. The following example would return data sources with an animal attribute that contains the substring at (for example, 'cat'): `"stringContains": \{ "key": "animal", "value": "at" \}`
   *
   * A list with a member that contains the value as a substring. The following example would return data sources with an animals attribute that is a list containing a member that contains the substring at (for example, `["dog", "cat"]`): `"stringContains": \{ "key": "animals", "value": "at" \}`
   *
   * @public
   */
  export interface StringContainsMember {
    equals?: never;
    notEquals?: never;
    greaterThan?: never;
    greaterThanOrEquals?: never;
    lessThan?: never;
    lessThanOrEquals?: never;
    in?: never;
    notIn?: never;
    startsWith?: never;
    listContains?: never;
    stringContains: FilterAttribute;
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * Knowledge base data sources are returned if their metadata attributes fulfill all the filter conditions inside this list.
   *
   * @public
   */
  export interface AndAllMember {
    equals?: never;
    notEquals?: never;
    greaterThan?: never;
    greaterThanOrEquals?: never;
    lessThan?: never;
    lessThanOrEquals?: never;
    in?: never;
    notIn?: never;
    startsWith?: never;
    listContains?: never;
    stringContains?: never;
    andAll: RetrievalFilter[];
    orAll?: never;
    $unknown?: never;
  }

  /**
   * Knowledge base data sources are returned if their metadata attributes fulfill at least one of the filter conditions inside this list.
   *
   * @public
   */
  export interface OrAllMember {
    equals?: never;
    notEquals?: never;
    greaterThan?: never;
    greaterThanOrEquals?: never;
    lessThan?: never;
    lessThanOrEquals?: never;
    in?: never;
    notIn?: never;
    startsWith?: never;
    listContains?: never;
    stringContains?: never;
    andAll?: never;
    orAll: RetrievalFilter[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    equals?: never;
    notEquals?: never;
    greaterThan?: never;
    greaterThanOrEquals?: never;
    lessThan?: never;
    lessThanOrEquals?: never;
    in?: never;
    notIn?: never;
    startsWith?: never;
    listContains?: never;
    stringContains?: never;
    andAll?: never;
    orAll?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    equals: (value: FilterAttribute) => T;
    notEquals: (value: FilterAttribute) => T;
    greaterThan: (value: FilterAttribute) => T;
    greaterThanOrEquals: (value: FilterAttribute) => T;
    lessThan: (value: FilterAttribute) => T;
    lessThanOrEquals: (value: FilterAttribute) => T;
    in: (value: FilterAttribute) => T;
    notIn: (value: FilterAttribute) => T;
    startsWith: (value: FilterAttribute) => T;
    listContains: (value: FilterAttribute) => T;
    stringContains: (value: FilterAttribute) => T;
    andAll: (value: RetrievalFilter[]) => T;
    orAll: (value: RetrievalFilter[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The configuration details for returning the results from the knowledge base vector search.
 *
 * @public
 */
export interface KnowledgeBaseVectorSearchConfiguration {
  /**
   * The number of text chunks to retrieve; the number of results to return.
   *
   * @public
   */
  numberOfResults?: number | undefined;

  /**
   * By default, Amazon Bedrock decides a search strategy for you. If you're using an Amazon OpenSearch Serverless vector store that contains a filterable text field, you can specify whether to query the knowledge base with a `HYBRID` search using both vector embeddings and raw text, or `SEMANTIC` search using only vector embeddings. For other vector store configurations, only `SEMANTIC` search is available.
   *
   * @public
   */
  overrideSearchType?: SearchType | undefined;

  /**
   * Specifies the filters to use on the metadata fields in the knowledge base data sources before returning results.
   *
   * @public
   */
  filter?: RetrievalFilter | undefined;

  /**
   * Configuration for implicit filtering in Knowledge Base vector searches. This allows the system to automatically apply filters based on the query context without requiring explicit filter expressions.
   *
   * @public
   */
  implicitFilterConfiguration?: ImplicitFilterConfiguration | undefined;

  /**
   * Configuration for reranking search results in Knowledge Base vector searches. Reranking improves search relevance by reordering initial vector search results using more sophisticated relevance models.
   *
   * @public
   */
  rerankingConfiguration?: VectorSearchRerankingConfiguration | undefined;
}

/**
 * Contains configuration details for retrieving information from a knowledge base.
 *
 * @public
 */
export interface KnowledgeBaseRetrievalConfiguration {
  /**
   * Contains configuration details for returning the results from the vector search.
   *
   * @public
   */
  vectorSearchConfiguration: KnowledgeBaseVectorSearchConfiguration | undefined;
}

/**
 * Contains configuration details for retrieving information from a knowledge base and generating responses.
 *
 * @public
 */
export interface KnowledgeBaseRetrieveAndGenerateConfiguration {
  /**
   * The unique identifier of the knowledge base.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the foundation model or [inference profile](https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html) used to generate responses.
   *
   * @public
   */
  modelArn: string | undefined;

  /**
   * Contains configuration details for retrieving text chunks.
   *
   * @public
   */
  retrievalConfiguration?: KnowledgeBaseRetrievalConfiguration | undefined;

  /**
   * Contains configurations details for response generation based on retrieved text chunks.
   *
   * @public
   */
  generationConfiguration?: GenerationConfiguration | undefined;

  /**
   * Contains configuration details for the model to process the prompt prior to retrieval and response generation.
   *
   * @public
   */
  orchestrationConfiguration?: OrchestrationConfiguration | undefined;
}

/**
 * The configuration details for retrieving information from a knowledge base.
 *
 * @public
 */
export interface RetrieveConfig {
  /**
   * The unique identifier of the knowledge base.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * Contains configuration details for knowledge base retrieval.
   *
   * @public
   */
  knowledgeBaseRetrievalConfiguration: KnowledgeBaseRetrievalConfiguration | undefined;
}

/**
 * Contains configuration details for a knowledge base retrieval and response generation.
 *
 * @public
 */
export interface RetrieveAndGenerateConfiguration {
  /**
   * The type of resource that contains your data for retrieving information and generating responses.
   *
   * If you choose to use `EXTERNAL_SOURCES`, then currently only Claude 3 Sonnet models for knowledge bases are supported.
   *
   * @public
   */
  type: RetrieveAndGenerateType | undefined;

  /**
   * Contains configuration details for the knowledge base retrieval and response generation.
   *
   * @public
   */
  knowledgeBaseConfiguration?: KnowledgeBaseRetrieveAndGenerateConfiguration | undefined;

  /**
   * The configuration for the external source wrapper object in the `retrieveAndGenerate` function.
   *
   * @public
   */
  externalSourcesConfiguration?: ExternalSourcesRetrieveAndGenerateConfiguration | undefined;
}

/**
 * The configuration details for retrieving information from a knowledge base and generating responses.
 *
 * @public
 */
export type KnowledgeBaseConfig =
  | KnowledgeBaseConfig.RetrieveAndGenerateConfigMember
  | KnowledgeBaseConfig.RetrieveConfigMember
  | KnowledgeBaseConfig.$UnknownMember;

/**
 * @public
 */
export namespace KnowledgeBaseConfig {
  /**
   * Contains configuration details for retrieving information from a knowledge base.
   *
   * @public
   */
  export interface RetrieveConfigMember {
    retrieveConfig: RetrieveConfig;
    retrieveAndGenerateConfig?: never;
    $unknown?: never;
  }

  /**
   * Contains configuration details for retrieving information from a knowledge base and generating responses.
   *
   * @public
   */
  export interface RetrieveAndGenerateConfigMember {
    retrieveConfig?: never;
    retrieveAndGenerateConfig: RetrieveAndGenerateConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    retrieveConfig?: never;
    retrieveAndGenerateConfig?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    retrieveConfig: (value: RetrieveConfig) => T;
    retrieveAndGenerateConfig: (value: RetrieveAndGenerateConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains configuration details for retrieval of information and response generation.
 *
 * @public
 */
export type RAGConfig =
  | RAGConfig.KnowledgeBaseConfigMember
  | RAGConfig.PrecomputedRagSourceConfigMember
  | RAGConfig.$UnknownMember;

/**
 * @public
 */
export namespace RAGConfig {
  /**
   * Contains configuration details for knowledge base retrieval and response generation.
   *
   * @public
   */
  export interface KnowledgeBaseConfigMember {
    knowledgeBaseConfig: KnowledgeBaseConfig;
    precomputedRagSourceConfig?: never;
    $unknown?: never;
  }

  /**
   * Contains configuration details about the RAG source used to generate inference response data for a Knowledge Base evaluation job.
   *
   * @public
   */
  export interface PrecomputedRagSourceConfigMember {
    knowledgeBaseConfig?: never;
    precomputedRagSourceConfig: EvaluationPrecomputedRagSourceConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    knowledgeBaseConfig?: never;
    precomputedRagSourceConfig?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    knowledgeBaseConfig: (value: KnowledgeBaseConfig) => T;
    precomputedRagSourceConfig: (value: EvaluationPrecomputedRagSourceConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The configuration details of the inference model for an evaluation job.
 *
 * For automated model evaluation jobs, only a single model is supported.
 *
 * For human-based model evaluation jobs, your annotator can compare the responses for up to two different models.
 *
 * @public
 */
export type EvaluationInferenceConfig =
  | EvaluationInferenceConfig.ModelsMember
  | EvaluationInferenceConfig.RagConfigsMember
  | EvaluationInferenceConfig.$UnknownMember;

/**
 * @public
 */
export namespace EvaluationInferenceConfig {
  /**
   * Specifies the inference models.
   *
   * @public
   */
  export interface ModelsMember {
    models: EvaluationModelConfig[];
    ragConfigs?: never;
    $unknown?: never;
  }

  /**
   * Contains the configuration details of the inference for a knowledge base evaluation job, including either the retrieval only configuration or the retrieval with response generation configuration.
   *
   * @public
   */
  export interface RagConfigsMember {
    models?: never;
    ragConfigs: RAGConfig[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    models?: never;
    ragConfigs?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    models: (value: EvaluationModelConfig[]) => T;
    ragConfigs: (value: RAGConfig[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateEvaluationJobRequest {
  /**
   * A name for the evaluation job. Names must unique with your Amazon Web Services account, and your account's Amazon Web Services region.
   *
   * @public
   */
  jobName: string | undefined;

  /**
   * A description of the evaluation job.
   *
   * @public
   */
  jobDescription?: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM service role that Amazon Bedrock can assume to perform tasks on your behalf. To learn more about the required permissions, see [Required permissions for model evaluations](https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation-security.html).
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * Specify your customer managed encryption key Amazon Resource Name (ARN) that will be used to encrypt your evaluation job.
   *
   * @public
   */
  customerEncryptionKeyId?: string | undefined;

  /**
   * Tags to attach to the model evaluation job.
   *
   * @public
   */
  jobTags?: Tag[] | undefined;

  /**
   * Specifies whether the evaluation job is for evaluating a model or evaluating a knowledge base (retrieval and response generation).
   *
   * @public
   */
  applicationType?: ApplicationType | undefined;

  /**
   * Contains the configuration details of either an automated or human-based evaluation job.
   *
   * @public
   */
  evaluationConfig: EvaluationConfig | undefined;

  /**
   * Contains the configuration details of the inference model for the evaluation job.
   *
   * For model evaluation jobs, automated jobs support a single model or [inference profile](https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html), and jobs that use human workers support two models or inference profiles.
   *
   * @public
   */
  inferenceConfig: EvaluationInferenceConfig | undefined;

  /**
   * Contains the configuration details of the Amazon S3 bucket for storing the results of the evaluation job.
   *
   * @public
   */
  outputDataConfig: EvaluationOutputDataConfig | undefined;
}

/**
 * @public
 */
export interface GetEvaluationJobResponse {
  /**
   * The name for the evaluation job.
   *
   * @public
   */
  jobName: string | undefined;

  /**
   * The current status of the evaluation job.
   *
   * @public
   */
  status: EvaluationJobStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the evaluation job.
   *
   * @public
   */
  jobArn: string | undefined;

  /**
   * The description of the evaluation job.
   *
   * @public
   */
  jobDescription?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM service role used in the evaluation job.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the customer managed encryption key specified when the evaluation job was created.
   *
   * @public
   */
  customerEncryptionKeyId?: string | undefined;

  /**
   * Specifies whether the evaluation job is automated or human-based.
   *
   * @public
   */
  jobType: EvaluationJobType | undefined;

  /**
   * Specifies whether the evaluation job is for evaluating a model or evaluating a knowledge base (retrieval and response generation).
   *
   * @public
   */
  applicationType?: ApplicationType | undefined;

  /**
   * Contains the configuration details of either an automated or human-based evaluation job.
   *
   * @public
   */
  evaluationConfig: EvaluationConfig | undefined;

  /**
   * Contains the configuration details of the inference model used for the evaluation job.
   *
   * @public
   */
  inferenceConfig: EvaluationInferenceConfig | undefined;

  /**
   * Contains the configuration details of the Amazon S3 bucket for storing the results of the evaluation job.
   *
   * @public
   */
  outputDataConfig: EvaluationOutputDataConfig | undefined;

  /**
   * The time the evaluation job was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * The time the evaluation job was last modified.
   *
   * @public
   */
  lastModifiedTime?: Date | undefined;

  /**
   * A list of strings that specify why the evaluation job failed to create.
   *
   * @public
   */
  failureMessages?: string[] | undefined;
}
