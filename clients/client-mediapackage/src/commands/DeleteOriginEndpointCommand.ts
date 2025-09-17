// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaPackageClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageClient";
import { DeleteOriginEndpointRequest, DeleteOriginEndpointResponse } from "../models/models_0";
import { de_DeleteOriginEndpointCommand, se_DeleteOriginEndpointCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteOriginEndpointCommand}.
 */
export interface DeleteOriginEndpointCommandInput extends DeleteOriginEndpointRequest {}
/**
 * @public
 *
 * The output of {@link DeleteOriginEndpointCommand}.
 */
export interface DeleteOriginEndpointCommandOutput extends DeleteOriginEndpointResponse, __MetadataBearer {}

/**
 * Deletes an existing OriginEndpoint.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageClient, DeleteOriginEndpointCommand } from "@aws-sdk/client-mediapackage"; // ES Modules import
 * // const { MediaPackageClient, DeleteOriginEndpointCommand } = require("@aws-sdk/client-mediapackage"); // CommonJS import
 * // import type { MediaPackageClientConfig } from "@aws-sdk/client-mediapackage";
 * const config = {}; // type is MediaPackageClientConfig
 * const client = new MediaPackageClient(config);
 * const input = { // DeleteOriginEndpointRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DeleteOriginEndpointCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteOriginEndpointCommandInput - {@link DeleteOriginEndpointCommandInput}
 * @returns {@link DeleteOriginEndpointCommandOutput}
 * @see {@link DeleteOriginEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteOriginEndpointCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageClientResolvedConfig | config} for MediaPackageClient's `config` shape.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  The client is not authorized to access the requested resource.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  An unexpected error occurred.
 *
 * @throws {@link NotFoundException} (client fault)
 *  The requested resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  An unexpected error occurred.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  The client has exceeded their resource or throttling limits.
 *
 * @throws {@link UnprocessableEntityException} (client fault)
 *  The parameters sent in the request are not valid.
 *
 * @throws {@link MediaPackageServiceException}
 * <p>Base exception class for all service exceptions from MediaPackage service.</p>
 *
 *
 * @public
 */
export class DeleteOriginEndpointCommand extends $Command
  .classBuilder<
    DeleteOriginEndpointCommandInput,
    DeleteOriginEndpointCommandOutput,
    MediaPackageClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaPackageClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaPackage", "DeleteOriginEndpoint", {})
  .n("MediaPackageClient", "DeleteOriginEndpointCommand")
  .f(void 0, void 0)
  .ser(se_DeleteOriginEndpointCommand)
  .de(de_DeleteOriginEndpointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteOriginEndpointRequest;
      output: {};
    };
    sdk: {
      input: DeleteOriginEndpointCommandInput;
      output: DeleteOriginEndpointCommandOutput;
    };
  };
}
