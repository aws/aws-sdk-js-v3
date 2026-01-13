// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteAppRequest, DeleteAppResponse } from "../models/models_0";
import type { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { DeleteApp$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAppCommand}.
 */
export interface DeleteAppCommandInput extends DeleteAppRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAppCommand}.
 */
export interface DeleteAppCommandOutput extends DeleteAppResponse, __MetadataBearer {}

/**
 * <p>Deletes an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteAppCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteAppCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // DeleteAppRequest
 *   ApplicationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAppCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAppResponse
 * //   ApplicationResponse: { // ApplicationResponse
 * //     Arn: "STRING_VALUE", // required
 * //     Id: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE", // required
 * //     tags: { // MapOf__string
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     CreationDate: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteAppCommandInput - {@link DeleteAppCommandInput}
 * @returns {@link DeleteAppCommandOutput}
 * @see {@link DeleteAppCommandInput} for command's `input` shape.
 * @see {@link DeleteAppCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PinpointServiceException}
 * <p>Base exception class for all service exceptions from Pinpoint service.</p>
 *
 *
 * @public
 */
export class DeleteAppCommand extends $Command
  .classBuilder<
    DeleteAppCommandInput,
    DeleteAppCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Pinpoint", "DeleteApp", {})
  .n("PinpointClient", "DeleteAppCommand")
  .sc(DeleteApp$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAppRequest;
      output: DeleteAppResponse;
    };
    sdk: {
      input: DeleteAppCommandInput;
      output: DeleteAppCommandOutput;
    };
  };
}
