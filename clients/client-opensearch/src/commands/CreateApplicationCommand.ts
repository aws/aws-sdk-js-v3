// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateApplicationRequest, CreateApplicationResponse } from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { de_CreateApplicationCommand, se_CreateApplicationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateApplicationCommand}.
 */
export interface CreateApplicationCommandInput extends CreateApplicationRequest {}
/**
 * @public
 *
 * The output of {@link CreateApplicationCommand}.
 */
export interface CreateApplicationCommandOutput extends CreateApplicationResponse, __MetadataBearer {}

/**
 * <p>Creates an OpenSearch UI application. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/application.html">Using the OpenSearch user
 *     interface in Amazon OpenSearch Service</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, CreateApplicationCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, CreateApplicationCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const input = { // CreateApplicationRequest
 *   clientToken: "STRING_VALUE",
 *   name: "STRING_VALUE", // required
 *   dataSources: [ // DataSources
 *     { // DataSource
 *       dataSourceArn: "STRING_VALUE",
 *       dataSourceDescription: "STRING_VALUE",
 *     },
 *   ],
 *   iamIdentityCenterOptions: { // IamIdentityCenterOptionsInput
 *     enabled: true || false,
 *     iamIdentityCenterInstanceArn: "STRING_VALUE",
 *     iamRoleForIdentityCenterApplicationArn: "STRING_VALUE",
 *   },
 *   appConfigs: [ // AppConfigs
 *     { // AppConfig
 *       key: "opensearchDashboards.dashboardAdmin.users" || "opensearchDashboards.dashboardAdmin.groups",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 *   tagList: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateApplicationCommand(input);
 * const response = await client.send(command);
 * // { // CreateApplicationResponse
 * //   id: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   dataSources: [ // DataSources
 * //     { // DataSource
 * //       dataSourceArn: "STRING_VALUE",
 * //       dataSourceDescription: "STRING_VALUE",
 * //     },
 * //   ],
 * //   iamIdentityCenterOptions: { // IamIdentityCenterOptions
 * //     enabled: true || false,
 * //     iamIdentityCenterInstanceArn: "STRING_VALUE",
 * //     iamRoleForIdentityCenterApplicationArn: "STRING_VALUE",
 * //     iamIdentityCenterApplicationArn: "STRING_VALUE",
 * //   },
 * //   appConfigs: [ // AppConfigs
 * //     { // AppConfig
 * //       key: "opensearchDashboards.dashboardAdmin.users" || "opensearchDashboards.dashboardAdmin.groups",
 * //       value: "STRING_VALUE",
 * //     },
 * //   ],
 * //   tagList: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   createdAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateApplicationCommandInput - {@link CreateApplicationCommandInput}
 * @returns {@link CreateApplicationCommandOutput}
 * @see {@link CreateApplicationCommandInput} for command's `input` shape.
 * @see {@link CreateApplicationCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An error occurred because you don't have permissions to access the resource.</p>
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>An error occurred because the client attempts to remove a resource that is currently in use.</p>
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access an unsupported operation.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 *
 * @public
 */
export class CreateApplicationCommand extends $Command
  .classBuilder<
    CreateApplicationCommandInput,
    CreateApplicationCommandOutput,
    OpenSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonOpenSearchService", "CreateApplication", {})
  .n("OpenSearchClient", "CreateApplicationCommand")
  .f(void 0, void 0)
  .ser(se_CreateApplicationCommand)
  .de(de_CreateApplicationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateApplicationRequest;
      output: CreateApplicationResponse;
    };
    sdk: {
      input: CreateApplicationCommandInput;
      output: CreateApplicationCommandOutput;
    };
  };
}
