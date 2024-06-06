// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetIndexOutput, GetIndexOutputFilterSensitiveLog } from "../models/models_0";
import { de_GetIndexCommand, se_GetIndexCommand } from "../protocols/Aws_restJson1";
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
 * The input for {@link GetIndexCommand}.
 */
export interface GetIndexCommandInput {}
/**
 * @public
 *
 * The output of {@link GetIndexCommand}.
 */
export interface GetIndexCommandOutput extends GetIndexOutput, __MetadataBearer {}

/**
 * <p>Retrieves details about the Amazon Web Services Resource Explorer index in the Amazon Web Services Region in which you invoked
 *             the operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceExplorer2Client, GetIndexCommand } from "@aws-sdk/client-resource-explorer-2"; // ES Modules import
 * // const { ResourceExplorer2Client, GetIndexCommand } = require("@aws-sdk/client-resource-explorer-2"); // CommonJS import
 * const client = new ResourceExplorer2Client(config);
 * const input = {};
 * const command = new GetIndexCommand(input);
 * const response = await client.send(command);
 * // { // GetIndexOutput
 * //   Arn: "STRING_VALUE",
 * //   Type: "STRING_VALUE",
 * //   State: "STRING_VALUE",
 * //   ReplicatingFrom: [ // RegionList
 * //     "STRING_VALUE",
 * //   ],
 * //   ReplicatingTo: [
 * //     "STRING_VALUE",
 * //   ],
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   LastUpdatedAt: new Date("TIMESTAMP"),
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetIndexCommandInput - {@link GetIndexCommandInput}
 * @returns {@link GetIndexCommandOutput}
 * @see {@link GetIndexCommandInput} for command's `input` shape.
 * @see {@link GetIndexCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetIndexCommand extends $Command
  .classBuilder<
    GetIndexCommandInput,
    GetIndexCommandOutput,
    ResourceExplorer2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ResourceExplorer2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ResourceExplorer", "GetIndex", {})
  .n("ResourceExplorer2Client", "GetIndexCommand")
  .f(void 0, GetIndexOutputFilterSensitiveLog)
  .ser(se_GetIndexCommand)
  .de(de_GetIndexCommand)
  .build() {}
