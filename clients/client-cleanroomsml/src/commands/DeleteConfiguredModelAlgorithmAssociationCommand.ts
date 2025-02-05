// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteConfiguredModelAlgorithmAssociationRequest } from "../models/models_0";
import {
  de_DeleteConfiguredModelAlgorithmAssociationCommand,
  se_DeleteConfiguredModelAlgorithmAssociationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteConfiguredModelAlgorithmAssociationCommand}.
 */
export interface DeleteConfiguredModelAlgorithmAssociationCommandInput
  extends DeleteConfiguredModelAlgorithmAssociationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteConfiguredModelAlgorithmAssociationCommand}.
 */
export interface DeleteConfiguredModelAlgorithmAssociationCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a configured model algorithm association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, DeleteConfiguredModelAlgorithmAssociationCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, DeleteConfiguredModelAlgorithmAssociationCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CleanRoomsMLClient(config);
 * const input = { // DeleteConfiguredModelAlgorithmAssociationRequest
 *   configuredModelAlgorithmAssociationArn: "STRING_VALUE", // required
 *   membershipIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteConfiguredModelAlgorithmAssociationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConfiguredModelAlgorithmAssociationCommandInput - {@link DeleteConfiguredModelAlgorithmAssociationCommandInput}
 * @returns {@link DeleteConfiguredModelAlgorithmAssociationCommandOutput}
 * @see {@link DeleteConfiguredModelAlgorithmAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteConfiguredModelAlgorithmAssociationCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsMLClientResolvedConfig | config} for CleanRoomsMLClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You can't complete this action because another resource depends on this resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you are requesting does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters for this request are incorrect.</p>
 *
 * @throws {@link CleanRoomsMLServiceException}
 * <p>Base exception class for all service exceptions from CleanRoomsML service.</p>
 *
 * @public
 */
export class DeleteConfiguredModelAlgorithmAssociationCommand extends $Command
  .classBuilder<
    DeleteConfiguredModelAlgorithmAssociationCommandInput,
    DeleteConfiguredModelAlgorithmAssociationCommandOutput,
    CleanRoomsMLClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsMLClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSStarkControlService", "DeleteConfiguredModelAlgorithmAssociation", {})
  .n("CleanRoomsMLClient", "DeleteConfiguredModelAlgorithmAssociationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteConfiguredModelAlgorithmAssociationCommand)
  .de(de_DeleteConfiguredModelAlgorithmAssociationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConfiguredModelAlgorithmAssociationRequest;
      output: {};
    };
    sdk: {
      input: DeleteConfiguredModelAlgorithmAssociationCommandInput;
      output: DeleteConfiguredModelAlgorithmAssociationCommandOutput;
    };
  };
}
