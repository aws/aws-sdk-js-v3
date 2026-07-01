// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteLoggingConfigurationRequest, DeleteLoggingConfigurationResponse } from "../models/models_0";
import { DeleteLoggingConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteLoggingConfigurationCommand}.
 */
export interface DeleteLoggingConfigurationCommandInput extends DeleteLoggingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLoggingConfigurationCommand}.
 */
export interface DeleteLoggingConfigurationCommandOutput extends DeleteLoggingConfigurationResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 *          <p>Permanently deletes the <a>LoggingConfiguration</a> from the specified web
 *          ACL.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, DeleteLoggingConfigurationCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, DeleteLoggingConfigurationCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * // import type { WAFRegionalClientConfig } from "@aws-sdk/client-waf-regional";
 * const config = {}; // type is WAFRegionalClientConfig
 * const client = new WAFRegionalClient(config);
 * const input = { // DeleteLoggingConfigurationRequest
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteLoggingConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLoggingConfigurationCommandInput - {@link DeleteLoggingConfigurationCommandInput}
 * @returns {@link DeleteLoggingConfigurationCommandOutput}
 * @see {@link DeleteLoggingConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteLoggingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for WAFRegionalClient's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *  <p>The operation failed because the referenced object doesn't exist.</p>
 *
 * @throws {@link WAFStaleDataException} (client fault)
 *  <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
 *
 * @throws {@link WAFRegionalServiceException}
 * <p>Base exception class for all service exceptions from WAFRegional service.</p>
 *
 *
 * @public
 */
export class DeleteLoggingConfigurationCommand extends command<DeleteLoggingConfigurationCommandInput, DeleteLoggingConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteLoggingConfiguration",
  DeleteLoggingConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLoggingConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteLoggingConfigurationCommandInput;
      output: DeleteLoggingConfigurationCommandOutput;
    };
  };
}
