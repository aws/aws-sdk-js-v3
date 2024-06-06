// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EntityResolutionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EntityResolutionClient";
import { ListIdNamespacesInput, ListIdNamespacesOutput } from "../models/models_0";
import { de_ListIdNamespacesCommand, se_ListIdNamespacesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListIdNamespacesCommand}.
 */
export interface ListIdNamespacesCommandInput extends ListIdNamespacesInput {}
/**
 * @public
 *
 * The output of {@link ListIdNamespacesCommand}.
 */
export interface ListIdNamespacesCommandOutput extends ListIdNamespacesOutput, __MetadataBearer {}

/**
 * <p>Returns a list of all ID namespaces.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, ListIdNamespacesCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, ListIdNamespacesCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * const client = new EntityResolutionClient(config);
 * const input = { // ListIdNamespacesInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListIdNamespacesCommand(input);
 * const response = await client.send(command);
 * // { // ListIdNamespacesOutput
 * //   idNamespaceSummaries: [ // IdNamespaceList
 * //     { // IdNamespaceSummary
 * //       idNamespaceName: "STRING_VALUE", // required
 * //       idNamespaceArn: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       type: "SOURCE" || "TARGET", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIdNamespacesCommandInput - {@link ListIdNamespacesCommandInput}
 * @returns {@link ListIdNamespacesCommandOutput}
 * @see {@link ListIdNamespacesCommandInput} for command's `input` shape.
 * @see {@link ListIdNamespacesCommandOutput} for command's `response` shape.
 * @see {@link EntityResolutionClientResolvedConfig | config} for EntityResolutionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. <code>HTTP Status Code:
 *             403</code>
 *          </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Entity Resolution
 *          service. <code>HTTP Status Code: 500</code>
 *          </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. <code>HTTP Status Code:
 *          429</code>
 *          </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by Entity Resolution. <code>HTTP
 *             Status Code: 400</code>
 *          </p>
 *
 * @throws {@link EntityResolutionServiceException}
 * <p>Base exception class for all service exceptions from EntityResolution service.</p>
 *
 * @public
 */
export class ListIdNamespacesCommand extends $Command
  .classBuilder<
    ListIdNamespacesCommandInput,
    ListIdNamespacesCommandOutput,
    EntityResolutionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EntityResolutionClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSVeniceService", "ListIdNamespaces", {})
  .n("EntityResolutionClient", "ListIdNamespacesCommand")
  .f(void 0, void 0)
  .ser(se_ListIdNamespacesCommand)
  .de(de_ListIdNamespacesCommand)
  .build() {}
