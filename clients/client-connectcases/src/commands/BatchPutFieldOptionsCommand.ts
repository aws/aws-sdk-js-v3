// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectCasesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCasesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { BatchPutFieldOptionsRequest, BatchPutFieldOptionsResponse } from "../models/models_0";
import { de_BatchPutFieldOptionsCommand, se_BatchPutFieldOptionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchPutFieldOptionsCommand}.
 */
export interface BatchPutFieldOptionsCommandInput extends BatchPutFieldOptionsRequest {}
/**
 * @public
 *
 * The output of {@link BatchPutFieldOptionsCommand}.
 */
export interface BatchPutFieldOptionsCommandOutput extends BatchPutFieldOptionsResponse, __MetadataBearer {}

/**
 * <p>Creates and updates a set of field options for a single select field in a Cases
 *       domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, BatchPutFieldOptionsCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, BatchPutFieldOptionsCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ConnectCasesClient(config);
 * const input = { // BatchPutFieldOptionsRequest
 *   domainId: "STRING_VALUE", // required
 *   fieldId: "STRING_VALUE", // required
 *   options: [ // FieldOptionsList // required
 *     { // FieldOption
 *       name: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *       active: true || false, // required
 *     },
 *   ],
 * };
 * const command = new BatchPutFieldOptionsCommand(input);
 * const response = await client.send(command);
 * // { // BatchPutFieldOptionsResponse
 * //   errors: [ // FieldOptionErrorList
 * //     { // FieldOptionError
 * //       message: "STRING_VALUE", // required
 * //       errorCode: "STRING_VALUE", // required
 * //       value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchPutFieldOptionsCommandInput - {@link BatchPutFieldOptionsCommandInput}
 * @returns {@link BatchPutFieldOptionsCommandOutput}
 * @see {@link BatchPutFieldOptionsCommandInput} for command's `input` shape.
 * @see {@link BatchPutFieldOptionsCommandOutput} for command's `response` shape.
 * @see {@link ConnectCasesClientResolvedConfig | config} for ConnectCasesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>We couldn't process your request because of an issue with the server. Try again
 *       later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We couldn't find the requested resource. Check that your resources exists and were created
 *       in the same Amazon Web Services Region as your request, and try your request again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded. For a list of service quotas, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html">Amazon Connect Service Quotas</a> in the <i>Amazon Connect
 *         Administrator Guide</i>.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate has been exceeded for this API. Please try again after a few minutes.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. Check the syntax and try again.</p>
 *
 * @throws {@link ConnectCasesServiceException}
 * <p>Base exception class for all service exceptions from ConnectCases service.</p>
 *
 * @public
 */
export class BatchPutFieldOptionsCommand extends $Command
  .classBuilder<
    BatchPutFieldOptionsCommandInput,
    BatchPutFieldOptionsCommandOutput,
    ConnectCasesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectCasesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectCases", "BatchPutFieldOptions", {})
  .n("ConnectCasesClient", "BatchPutFieldOptionsCommand")
  .f(void 0, void 0)
  .ser(se_BatchPutFieldOptionsCommand)
  .de(de_BatchPutFieldOptionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchPutFieldOptionsRequest;
      output: BatchPutFieldOptionsResponse;
    };
    sdk: {
      input: BatchPutFieldOptionsCommandInput;
      output: BatchPutFieldOptionsCommandOutput;
    };
  };
}
