// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { DeregisterResourceRequest, DeregisterResourceResponse } from "../models/models_0";
import { de_DeregisterResourceCommand, se_DeregisterResourceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeregisterResourceCommand}.
 */
export interface DeregisterResourceCommandInput extends DeregisterResourceRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterResourceCommand}.
 */
export interface DeregisterResourceCommandOutput extends DeregisterResourceResponse, __MetadataBearer {}

/**
 * <p>Deregisters the resource as managed by the Data Catalog.</p>
 *          <p>When you deregister a path, Lake Formation removes the path from the inline policy attached to your service-linked role.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, DeregisterResourceCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, DeregisterResourceCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const input = { // DeregisterResourceRequest
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new DeregisterResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeregisterResourceCommandInput - {@link DeregisterResourceCommandInput}
 * @returns {@link DeregisterResourceCommandOutput}
 * @see {@link DeregisterResourceCommandInput} for command's `input` shape.
 * @see {@link DeregisterResourceCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 * @public
 */
export class DeregisterResourceCommand extends $Command
  .classBuilder<
    DeregisterResourceCommandInput,
    DeregisterResourceCommandOutput,
    LakeFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: LakeFormationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSLakeFormation", "DeregisterResource", {})
  .n("LakeFormationClient", "DeregisterResourceCommand")
  .f(void 0, void 0)
  .ser(se_DeregisterResourceCommand)
  .de(de_DeregisterResourceCommand)
  .build() {}
