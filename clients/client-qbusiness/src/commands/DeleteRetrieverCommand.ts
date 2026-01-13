// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteRetrieverRequest, DeleteRetrieverResponse } from "../models/models_0";
import type { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";
import { DeleteRetriever$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRetrieverCommand}.
 */
export interface DeleteRetrieverCommandInput extends DeleteRetrieverRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRetrieverCommand}.
 */
export interface DeleteRetrieverCommandOutput extends DeleteRetrieverResponse, __MetadataBearer {}

/**
 * <p>Deletes the retriever used by an Amazon Q Business application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, DeleteRetrieverCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, DeleteRetrieverCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * // import type { QBusinessClientConfig } from "@aws-sdk/client-qbusiness";
 * const config = {}; // type is QBusinessClientConfig
 * const client = new QBusinessClient(config);
 * const input = { // DeleteRetrieverRequest
 *   applicationId: "STRING_VALUE", // required
 *   retrieverId: "STRING_VALUE", // required
 * };
 * const command = new DeleteRetrieverCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRetrieverCommandInput - {@link DeleteRetrieverCommandInput}
 * @returns {@link DeleteRetrieverCommandOutput}
 * @see {@link DeleteRetrieverCommandInput} for command's `input` shape.
 * @see {@link DeleteRetrieverCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required permission policies and user accounts and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You are trying to perform an action that conflicts with the current status of your resource. Fix any inconsistencies with your resources and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q Business service. Wait some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The application or plugin resource you want to use doesn’t exist. Make sure you have provided the correct resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling. Reduce the number of requests and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't meet the constraints set by the Amazon Q Business service. Provide the correct input and try again.</p>
 *
 * @throws {@link QBusinessServiceException}
 * <p>Base exception class for all service exceptions from QBusiness service.</p>
 *
 *
 * @public
 */
export class DeleteRetrieverCommand extends $Command
  .classBuilder<
    DeleteRetrieverCommandInput,
    DeleteRetrieverCommandOutput,
    QBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QBusinessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ExpertQ", "DeleteRetriever", {})
  .n("QBusinessClient", "DeleteRetrieverCommand")
  .sc(DeleteRetriever$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRetrieverRequest;
      output: {};
    };
    sdk: {
      input: DeleteRetrieverCommandInput;
      output: DeleteRetrieverCommandOutput;
    };
  };
}
