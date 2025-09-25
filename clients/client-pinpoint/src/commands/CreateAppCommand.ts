// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAppRequest, CreateAppResponse } from "../models/models_0";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { CreateApp } from "../schemas/schemas_10_App";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAppCommand}.
 */
export interface CreateAppCommandInput extends CreateAppRequest {}
/**
 * @public
 *
 * The output of {@link CreateAppCommand}.
 */
export interface CreateAppCommandOutput extends CreateAppResponse, __MetadataBearer {}

/**
 * <p>Creates an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, CreateAppCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, CreateAppCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // CreateAppRequest
 *   CreateApplicationRequest: { // CreateApplicationRequest
 *     Name: "STRING_VALUE", // required
 *     tags: { // MapOf__string
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new CreateAppCommand(input);
 * const response = await client.send(command);
 * // { // CreateAppResponse
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
 * @param CreateAppCommandInput - {@link CreateAppCommandInput}
 * @returns {@link CreateAppCommandOutput}
 * @see {@link CreateAppCommandInput} for command's `input` shape.
 * @see {@link CreateAppCommandOutput} for command's `response` shape.
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
export class CreateAppCommand extends $Command
  .classBuilder<
    CreateAppCommandInput,
    CreateAppCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Pinpoint", "CreateApp", {})
  .n("PinpointClient", "CreateAppCommand")
  .sc(CreateApp)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAppRequest;
      output: CreateAppResponse;
    };
    sdk: {
      input: CreateAppCommandInput;
      output: CreateAppCommandOutput;
    };
  };
}
