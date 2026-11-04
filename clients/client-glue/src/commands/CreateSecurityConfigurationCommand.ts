// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateSecurityConfigurationRequest, CreateSecurityConfigurationResponse } from "../models/models_1";
import { CreateSecurityConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateSecurityConfigurationCommand}.
 */
export interface CreateSecurityConfigurationCommandInput extends CreateSecurityConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateSecurityConfigurationCommand}.
 */
export interface CreateSecurityConfigurationCommandOutput extends CreateSecurityConfigurationResponse, __MetadataBearer {}

/**
 * Creates a new security configuration. A security configuration is a set of security properties that can be used by Glue. You can use a security configuration to encrypt data at rest. For information about using security configurations in Glue, see [Encrypting Data Written by Crawlers, Jobs, and Development Endpoints](https://docs.aws.amazon.com/glue/latest/dg/encryption-security-configuration.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateSecurityConfigurationCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateSecurityConfigurationCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // CreateSecurityConfigurationRequest
 *   Name: "STRING_VALUE", // required
 *   EncryptionConfiguration: { // EncryptionConfiguration
 *     S3Encryption: [ // S3EncryptionList
 *       { // S3Encryption
 *         S3EncryptionMode: "DISABLED" || "SSE-KMS" || "SSE-S3",
 *         KmsKeyArn: "STRING_VALUE",
 *       },
 *     ],
 *     CloudWatchEncryption: { // CloudWatchEncryption
 *       CloudWatchEncryptionMode: "DISABLED" || "SSE-KMS",
 *       KmsKeyArn: "STRING_VALUE",
 *     },
 *     JobBookmarksEncryption: { // JobBookmarksEncryption
 *       JobBookmarksEncryptionMode: "DISABLED" || "CSE-KMS",
 *       KmsKeyArn: "STRING_VALUE",
 *     },
 *     DataQualityEncryption: { // DataQualityEncryption
 *       DataQualityEncryptionMode: "DISABLED" || "SSE-KMS",
 *       KmsKeyArn: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new CreateSecurityConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateSecurityConfigurationResponse
 * //   Name: "STRING_VALUE",
 * //   CreatedTimestamp: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateSecurityConfigurationCommandInput - {@link CreateSecurityConfigurationCommandInput}
 * @returns {@link CreateSecurityConfigurationCommandOutput}
 * @see {@link CreateSecurityConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateSecurityConfigurationCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *
 * A resource to be created or added already exists.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *
 * A resource numerical limit was exceeded.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class CreateSecurityConfigurationCommand extends command<CreateSecurityConfigurationCommandInput, CreateSecurityConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "CreateSecurityConfiguration",
  CreateSecurityConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSecurityConfigurationRequest;
      output: CreateSecurityConfigurationResponse;
    };
    sdk: {
      input: CreateSecurityConfigurationCommandInput;
      output: CreateSecurityConfigurationCommandOutput;
    };
  };
}
