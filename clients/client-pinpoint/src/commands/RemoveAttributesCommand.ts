// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RemoveAttributesRequest, RemoveAttributesResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { de_RemoveAttributesCommand, se_RemoveAttributesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RemoveAttributesCommand}.
 */
export interface RemoveAttributesCommandInput extends RemoveAttributesRequest {}
/**
 * @public
 *
 * The output of {@link RemoveAttributesCommand}.
 */
export interface RemoveAttributesCommandOutput extends RemoveAttributesResponse, __MetadataBearer {}

/**
 * <p>Removes one or more custom attributes, of the same attribute type, from the application. Existing endpoints still have the attributes but Amazon Pinpoint will stop capturing new or changed values for these attributes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, RemoveAttributesCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, RemoveAttributesCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const input = { // RemoveAttributesRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   AttributeType: "STRING_VALUE", // required
 *   UpdateAttributesRequest: { // UpdateAttributesRequest
 *     Blacklist: [ // ListOf__string
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new RemoveAttributesCommand(input);
 * const response = await client.send(command);
 * // { // RemoveAttributesResponse
 * //   AttributesResource: { // AttributesResource
 * //     ApplicationId: "STRING_VALUE", // required
 * //     AttributeType: "STRING_VALUE", // required
 * //     Attributes: [ // ListOf__string
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param RemoveAttributesCommandInput - {@link RemoveAttributesCommandInput}
 * @returns {@link RemoveAttributesCommandOutput}
 * @see {@link RemoveAttributesCommandInput} for command's `input` shape.
 * @see {@link RemoveAttributesCommandOutput} for command's `response` shape.
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
 * @public
 */
export class RemoveAttributesCommand extends $Command
  .classBuilder<
    RemoveAttributesCommandInput,
    RemoveAttributesCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Pinpoint", "RemoveAttributes", {})
  .n("PinpointClient", "RemoveAttributesCommand")
  .f(void 0, void 0)
  .ser(se_RemoveAttributesCommand)
  .de(de_RemoveAttributesCommand)
  .build() {}
