// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EntityResolutionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EntityResolutionClient";
import { GetProviderServiceInput, GetProviderServiceOutput } from "../models/models_0";
import { de_GetProviderServiceCommand, se_GetProviderServiceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetProviderServiceCommand}.
 */
export interface GetProviderServiceCommandInput extends GetProviderServiceInput {}
/**
 * @public
 *
 * The output of {@link GetProviderServiceCommand}.
 */
export interface GetProviderServiceCommandOutput extends GetProviderServiceOutput, __MetadataBearer {}

/**
 * <p>Returns the <code>ProviderService</code> of a given name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, GetProviderServiceCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, GetProviderServiceCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * // import type { EntityResolutionClientConfig } from "@aws-sdk/client-entityresolution";
 * const config = {}; // type is EntityResolutionClientConfig
 * const client = new EntityResolutionClient(config);
 * const input = { // GetProviderServiceInput
 *   providerName: "STRING_VALUE", // required
 *   providerServiceName: "STRING_VALUE", // required
 * };
 * const command = new GetProviderServiceCommand(input);
 * const response = await client.send(command);
 * // { // GetProviderServiceOutput
 * //   providerName: "STRING_VALUE", // required
 * //   providerServiceName: "STRING_VALUE", // required
 * //   providerServiceDisplayName: "STRING_VALUE", // required
 * //   providerServiceType: "ASSIGNMENT" || "ID_MAPPING", // required
 * //   providerServiceArn: "STRING_VALUE", // required
 * //   providerConfigurationDefinition: "DOCUMENT_VALUE",
 * //   providerIdNameSpaceConfiguration: { // ProviderIdNameSpaceConfiguration
 * //     description: "STRING_VALUE",
 * //     providerTargetConfigurationDefinition: "DOCUMENT_VALUE",
 * //     providerSourceConfigurationDefinition: "DOCUMENT_VALUE",
 * //   },
 * //   providerJobConfiguration: "DOCUMENT_VALUE",
 * //   providerEndpointConfiguration: { // ProviderEndpointConfiguration Union: only one key present
 * //     marketplaceConfiguration: { // ProviderMarketplaceConfiguration
 * //       dataSetId: "STRING_VALUE", // required
 * //       revisionId: "STRING_VALUE", // required
 * //       assetId: "STRING_VALUE", // required
 * //       listingId: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   anonymizedOutput: true || false, // required
 * //   providerEntityOutputDefinition: "DOCUMENT_VALUE", // required
 * //   providerIntermediateDataAccessConfiguration: { // ProviderIntermediateDataAccessConfiguration
 * //     awsAccountIds: [ // AwsAccountIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     requiredBucketActions: [ // RequiredBucketActionsList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   providerComponentSchema: { // ProviderComponentSchema
 * //     schemas: [ // Schemas
 * //       [ // SchemaList
 * //         "STRING_VALUE",
 * //       ],
 * //     ],
 * //     providerSchemaAttributes: [ // ProviderSchemaAttributes
 * //       { // ProviderSchemaAttribute
 * //         fieldName: "STRING_VALUE", // required
 * //         type: "NAME" || "NAME_FIRST" || "NAME_MIDDLE" || "NAME_LAST" || "ADDRESS" || "ADDRESS_STREET1" || "ADDRESS_STREET2" || "ADDRESS_STREET3" || "ADDRESS_CITY" || "ADDRESS_STATE" || "ADDRESS_COUNTRY" || "ADDRESS_POSTALCODE" || "PHONE" || "PHONE_NUMBER" || "PHONE_COUNTRYCODE" || "EMAIL_ADDRESS" || "UNIQUE_ID" || "DATE" || "STRING" || "PROVIDER_ID" || "IPV4" || "IPV6" || "MAID", // required
 * //         subType: "STRING_VALUE",
 * //         hashing: true || false,
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetProviderServiceCommandInput - {@link GetProviderServiceCommandInput}
 * @returns {@link GetProviderServiceCommandOutput}
 * @see {@link GetProviderServiceCommandInput} for command's `input` shape.
 * @see {@link GetProviderServiceCommandOutput} for command's `response` shape.
 * @see {@link EntityResolutionClientResolvedConfig | config} for EntityResolutionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Entity Resolution service. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource couldn't be found. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by Entity Resolution. </p>
 *
 * @throws {@link EntityResolutionServiceException}
 * <p>Base exception class for all service exceptions from EntityResolution service.</p>
 *
 *
 * @public
 */
export class GetProviderServiceCommand extends $Command
  .classBuilder<
    GetProviderServiceCommandInput,
    GetProviderServiceCommandOutput,
    EntityResolutionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EntityResolutionClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSVeniceService", "GetProviderService", {})
  .n("EntityResolutionClient", "GetProviderServiceCommand")
  .f(void 0, void 0)
  .ser(se_GetProviderServiceCommand)
  .de(de_GetProviderServiceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetProviderServiceInput;
      output: GetProviderServiceOutput;
    };
    sdk: {
      input: GetProviderServiceCommandInput;
      output: GetProviderServiceCommandOutput;
    };
  };
}
