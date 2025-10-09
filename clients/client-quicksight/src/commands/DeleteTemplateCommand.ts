// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTemplateRequest, DeleteTemplateResponse } from "../models/models_4";
import { de_DeleteTemplateCommand, se_DeleteTemplateCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTemplateCommand}.
 */
export interface DeleteTemplateCommandInput extends DeleteTemplateRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTemplateCommand}.
 */
export interface DeleteTemplateCommandOutput extends DeleteTemplateResponse, __MetadataBearer {}

/**
 * <p>Deletes a template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteTemplateCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteTemplateCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DeleteTemplateRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   TemplateId: "STRING_VALUE", // required
 *   VersionNumber: Number("long"),
 * };
 * const command = new DeleteTemplateCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTemplateResponse
 * //   RequestId: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   TemplateId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DeleteTemplateCommandInput - {@link DeleteTemplateCommandInput}
 * @returns {@link DeleteTemplateCommandOutput}
 * @see {@link DeleteTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteTemplateCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit is exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *  <p>This error indicates that you are calling an operation on an Amazon Quick Suite
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			Quick Suite currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class DeleteTemplateCommand extends $Command
  .classBuilder<
    DeleteTemplateCommandInput,
    DeleteTemplateCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSight_20180401", "DeleteTemplate", {})
  .n("QuickSightClient", "DeleteTemplateCommand")
  .f(void 0, void 0)
  .ser(se_DeleteTemplateCommand)
  .de(de_DeleteTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTemplateRequest;
      output: DeleteTemplateResponse;
    };
    sdk: {
      input: DeleteTemplateCommandInput;
      output: DeleteTemplateCommandOutput;
    };
  };
}
