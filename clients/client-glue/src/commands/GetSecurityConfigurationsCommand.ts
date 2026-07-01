// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSecurityConfigurationsRequest, GetSecurityConfigurationsResponse } from "../models/models_2";
import { GetSecurityConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSecurityConfigurationsCommand}.
 */
export interface GetSecurityConfigurationsCommandInput extends GetSecurityConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link GetSecurityConfigurationsCommand}.
 */
export interface GetSecurityConfigurationsCommandOutput extends GetSecurityConfigurationsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of all security configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetSecurityConfigurationsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetSecurityConfigurationsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // GetSecurityConfigurationsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetSecurityConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // GetSecurityConfigurationsResponse
 * //   SecurityConfigurations: [ // SecurityConfigurationList
 * //     { // SecurityConfiguration
 * //       Name: "STRING_VALUE",
 * //       CreatedTimeStamp: new Date("TIMESTAMP"),
 * //       EncryptionConfiguration: { // EncryptionConfiguration
 * //         S3Encryption: [ // S3EncryptionList
 * //           { // S3Encryption
 * //             S3EncryptionMode: "DISABLED" || "SSE-KMS" || "SSE-S3",
 * //             KmsKeyArn: "STRING_VALUE",
 * //           },
 * //         ],
 * //         CloudWatchEncryption: { // CloudWatchEncryption
 * //           CloudWatchEncryptionMode: "DISABLED" || "SSE-KMS",
 * //           KmsKeyArn: "STRING_VALUE",
 * //         },
 * //         JobBookmarksEncryption: { // JobBookmarksEncryption
 * //           JobBookmarksEncryptionMode: "DISABLED" || "CSE-KMS",
 * //           KmsKeyArn: "STRING_VALUE",
 * //         },
 * //         DataQualityEncryption: { // DataQualityEncryption
 * //           DataQualityEncryptionMode: "DISABLED" || "SSE-KMS",
 * //           KmsKeyArn: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSecurityConfigurationsCommandInput - {@link GetSecurityConfigurationsCommandInput}
 * @returns {@link GetSecurityConfigurationsCommandOutput}
 * @see {@link GetSecurityConfigurationsCommandInput} for command's `input` shape.
 * @see {@link GetSecurityConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class GetSecurityConfigurationsCommand extends command<GetSecurityConfigurationsCommandInput, GetSecurityConfigurationsCommandOutput>(
  _ep0,
  _mw0,
  "GetSecurityConfigurations",
  GetSecurityConfigurations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSecurityConfigurationsRequest;
      output: GetSecurityConfigurationsResponse;
    };
    sdk: {
      input: GetSecurityConfigurationsCommandInput;
      output: GetSecurityConfigurationsCommandOutput;
    };
  };
}
