// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetDefaultViewOutput } from "../models/models_0";
import { de_GetDefaultViewCommand, se_GetDefaultViewCommand } from "../protocols/Aws_restJson1";
import {
  ResourceExplorer2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ResourceExplorer2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDefaultViewCommand}.
 */
export interface GetDefaultViewCommandInput {}
/**
 * @public
 *
 * The output of {@link GetDefaultViewCommand}.
 */
export interface GetDefaultViewCommandOutput extends GetDefaultViewOutput, __MetadataBearer {}

/**
 * <p>Retrieves the Amazon Resource Name (ARN) of the view that is the default for the
 *             Amazon Web Services Region in which you call this operation. You can then call <a>GetView</a> to retrieve the details of that view.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceExplorer2Client, GetDefaultViewCommand } from "@aws-sdk/client-resource-explorer-2"; // ES Modules import
 * // const { ResourceExplorer2Client, GetDefaultViewCommand } = require("@aws-sdk/client-resource-explorer-2"); // CommonJS import
 * // import type { ResourceExplorer2ClientConfig } from "@aws-sdk/client-resource-explorer-2";
 * const config = {}; // type is ResourceExplorer2ClientConfig
 * const client = new ResourceExplorer2Client(config);
 * const input = {};
 * const command = new GetDefaultViewCommand(input);
 * const response = await client.send(command);
 * // { // GetDefaultViewOutput
 * //   ViewArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDefaultViewCommandInput - {@link GetDefaultViewCommandInput}
 * @returns {@link GetDefaultViewCommandOutput}
 * @see {@link GetDefaultViewCommandInput} for command's `input` shape.
 * @see {@link GetDefaultViewCommandOutput} for command's `response` shape.
 * @see {@link ResourceExplorer2ClientResolvedConfig | config} for ResourceExplorer2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The credentials that you used to call this operation don't have the minimum required
 *             permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed because of internal service error. Try your request again
 *             later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>You specified a resource that doesn't exist. Check the ID or ARN that you used to
 *             identity the resource, and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request failed because you exceeded a rate limit for this operation. For more
 *             information, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/quotas.html">Quotas for
 *             Resource Explorer</a>.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>You provided an invalid value for one of the operation's parameters. Check the syntax
 *             for the operation, and try again.</p>
 *
 * @throws {@link ResourceExplorer2ServiceException}
 * <p>Base exception class for all service exceptions from ResourceExplorer2 service.</p>
 *
 *
 * @public
 */
export class GetDefaultViewCommand extends $Command
  .classBuilder<
    GetDefaultViewCommandInput,
    GetDefaultViewCommandOutput,
    ResourceExplorer2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResourceExplorer2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ResourceExplorer", "GetDefaultView", {})
  .n("ResourceExplorer2Client", "GetDefaultViewCommand")
  .f(void 0, void 0)
  .ser(se_GetDefaultViewCommand)
  .de(de_GetDefaultViewCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetDefaultViewOutput;
    };
    sdk: {
      input: GetDefaultViewCommandInput;
      output: GetDefaultViewCommandOutput;
    };
  };
}
