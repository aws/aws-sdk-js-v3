// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EntityResolutionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EntityResolutionClient";
import { GetMatchIdInput, GetMatchIdInputFilterSensitiveLog, GetMatchIdOutput } from "../models/models_0";
import { de_GetMatchIdCommand, se_GetMatchIdCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMatchIdCommand}.
 */
export interface GetMatchIdCommandInput extends GetMatchIdInput {}
/**
 * @public
 *
 * The output of {@link GetMatchIdCommand}.
 */
export interface GetMatchIdCommandOutput extends GetMatchIdOutput, __MetadataBearer {}

/**
 * <p>Returns the corresponding Match ID of a customer record if the record has been
 *          processed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, GetMatchIdCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, GetMatchIdCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * const client = new EntityResolutionClient(config);
 * const input = { // GetMatchIdInput
 *   workflowName: "STRING_VALUE", // required
 *   record: { // RecordAttributeMap // required
 *     "<keys>": "STRING_VALUE",
 *   },
 *   applyNormalization: true || false,
 * };
 * const command = new GetMatchIdCommand(input);
 * const response = await client.send(command);
 * // { // GetMatchIdOutput
 * //   matchId: "STRING_VALUE",
 * //   matchRule: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetMatchIdCommandInput - {@link GetMatchIdCommandInput}
 * @returns {@link GetMatchIdCommandOutput}
 * @see {@link GetMatchIdCommandInput} for command's `input` shape.
 * @see {@link GetMatchIdCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found. <code>HTTP Status Code: 404</code>
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
export class GetMatchIdCommand extends $Command
  .classBuilder<
    GetMatchIdCommandInput,
    GetMatchIdCommandOutput,
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
  .s("AWSVeniceService", "GetMatchId", {})
  .n("EntityResolutionClient", "GetMatchIdCommand")
  .f(GetMatchIdInputFilterSensitiveLog, void 0)
  .ser(se_GetMatchIdCommand)
  .de(de_GetMatchIdCommand)
  .build() {}
