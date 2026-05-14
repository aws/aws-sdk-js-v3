// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DSQLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DSQLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteStreamInput, DeleteStreamOutput } from "../models/models_0";
import { DeleteStream$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteStreamCommand}.
 */
export interface DeleteStreamCommandInput extends DeleteStreamInput {}
/**
 * @public
 *
 * The output of {@link DeleteStreamCommand}.
 */
export interface DeleteStreamCommandOutput extends DeleteStreamOutput, __MetadataBearer {}

/**
 * <p>Deletes a stream from a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DSQLClient, DeleteStreamCommand } from "@aws-sdk/client-dsql"; // ES Modules import
 * // const { DSQLClient, DeleteStreamCommand } = require("@aws-sdk/client-dsql"); // CommonJS import
 * // import type { DSQLClientConfig } from "@aws-sdk/client-dsql";
 * const config = {}; // type is DSQLClientConfig
 * const client = new DSQLClient(config);
 * const input = { // DeleteStreamInput
 *   clusterIdentifier: "STRING_VALUE", // required
 *   streamIdentifier: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeleteStreamCommand(input);
 * const response = await client.send(command);
 * // { // DeleteStreamOutput
 * //   clusterIdentifier: "STRING_VALUE", // required
 * //   streamIdentifier: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   status: "CREATING" || "ACTIVE" || "DELETING" || "DELETED" || "FAILED" || "IMPAIRED", // required
 * //   creationTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param DeleteStreamCommandInput - {@link DeleteStreamCommandInput}
 * @returns {@link DeleteStreamCommandOutput}
 * @see {@link DeleteStreamCommandInput} for command's `input` shape.
 * @see {@link DeleteStreamCommandOutput} for command's `response` shape.
 * @see {@link DSQLClientResolvedConfig | config} for DSQLClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The submitted action has conflicts.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link DSQLServiceException}
 * <p>Base exception class for all service exceptions from DSQL service.</p>
 *
 *
 * @public
 */
export class DeleteStreamCommand extends $Command
  .classBuilder<
    DeleteStreamCommandInput,
    DeleteStreamCommandOutput,
    DSQLClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DSQLClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DSQL", "DeleteStream", {})
  .n("DSQLClient", "DeleteStreamCommand")
  .sc(DeleteStream$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteStreamInput;
      output: DeleteStreamOutput;
    };
    sdk: {
      input: DeleteStreamCommandInput;
      output: DeleteStreamCommandOutput;
    };
  };
}
