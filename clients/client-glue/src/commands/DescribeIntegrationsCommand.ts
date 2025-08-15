// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DescribeIntegrationsRequest, DescribeIntegrationsResponse } from "../models/models_1";
import { de_DescribeIntegrationsCommand, se_DescribeIntegrationsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeIntegrationsCommand}.
 */
export interface DescribeIntegrationsCommandInput extends DescribeIntegrationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeIntegrationsCommand}.
 */
export interface DescribeIntegrationsCommandOutput extends DescribeIntegrationsResponse, __MetadataBearer {}

/**
 * <p>The API is used to retrieve a list of integrations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DescribeIntegrationsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DescribeIntegrationsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // DescribeIntegrationsRequest
 *   IntegrationIdentifier: "STRING_VALUE",
 *   Marker: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Filters: [ // IntegrationFilterList
 *     { // IntegrationFilter
 *       Name: "STRING_VALUE",
 *       Values: [ // IntegrationFilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new DescribeIntegrationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeIntegrationsResponse
 * //   Integrations: [ // IntegrationsList
 * //     { // Integration
 * //       SourceArn: "STRING_VALUE", // required
 * //       TargetArn: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE",
 * //       IntegrationName: "STRING_VALUE", // required
 * //       IntegrationArn: "STRING_VALUE", // required
 * //       KmsKeyId: "STRING_VALUE",
 * //       AdditionalEncryptionContext: { // IntegrationAdditionalEncryptionContextMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       Tags: [ // IntegrationTagsList
 * //         { // Tag
 * //           key: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Status: "CREATING" || "ACTIVE" || "MODIFYING" || "FAILED" || "DELETING" || "SYNCING" || "NEEDS_ATTENTION", // required
 * //       CreateTime: new Date("TIMESTAMP"), // required
 * //       IntegrationConfig: { // IntegrationConfig
 * //         RefreshInterval: "STRING_VALUE",
 * //         SourceProperties: { // IntegrationSourcePropertiesMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         ContinuousSync: true || false,
 * //       },
 * //       Errors: [ // IntegrationErrorList
 * //         { // IntegrationError
 * //           ErrorCode: "STRING_VALUE",
 * //           ErrorMessage: "STRING_VALUE",
 * //         },
 * //       ],
 * //       DataFilter: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeIntegrationsCommandInput - {@link DescribeIntegrationsCommandInput}
 * @returns {@link DescribeIntegrationsCommandOutput}
 * @see {@link DescribeIntegrationsCommandInput} for command's `input` shape.
 * @see {@link DescribeIntegrationsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link IntegrationNotFoundFault} (client fault)
 *  <p>The specified integration could not be found.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A value could not be validated.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class DescribeIntegrationsCommand extends $Command
  .classBuilder<
    DescribeIntegrationsCommandInput,
    DescribeIntegrationsCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "DescribeIntegrations", {})
  .n("GlueClient", "DescribeIntegrationsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeIntegrationsCommand)
  .de(de_DescribeIntegrationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeIntegrationsRequest;
      output: DescribeIntegrationsResponse;
    };
    sdk: {
      input: DescribeIntegrationsCommandInput;
      output: DescribeIntegrationsCommandOutput;
    };
  };
}
