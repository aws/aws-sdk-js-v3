// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteRevisionRequest } from "../models/models_0";
import { DeleteRevision$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRevisionCommand}.
 */
export interface DeleteRevisionCommandInput extends DeleteRevisionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRevisionCommand}.
 */
export interface DeleteRevisionCommandOutput extends __MetadataBearer {}

/**
 * <p>This operation deletes a revision.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, DeleteRevisionCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, DeleteRevisionCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * // import type { DataExchangeClientConfig } from "@aws-sdk/client-dataexchange";
 * const config = {}; // type is DataExchangeClientConfig
 * const client = new DataExchangeClient(config);
 * const input = { // DeleteRevisionRequest
 *   DataSetId: "STRING_VALUE", // required
 *   RevisionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteRevisionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRevisionCommandInput - {@link DeleteRevisionCommandInput}
 * @returns {@link DeleteRevisionCommandOutput}
 * @see {@link DeleteRevisionCommandInput} for command's `input` shape.
 * @see {@link DeleteRevisionCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for DataExchangeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to the resource is denied.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request couldn't be completed because it conflicted with the current state of the
 *          resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception occurred with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource couldn't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was invalid.</p>
 *
 * @throws {@link DataExchangeServiceException}
 * <p>Base exception class for all service exceptions from DataExchange service.</p>
 *
 *
 * @public
 */
export class DeleteRevisionCommand extends $Command
  .classBuilder<
    DeleteRevisionCommandInput,
    DeleteRevisionCommandOutput,
    DataExchangeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataExchangeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataExchange", "DeleteRevision", {})
  .n("DataExchangeClient", "DeleteRevisionCommand")
  .sc(DeleteRevision$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRevisionRequest;
      output: {};
    };
    sdk: {
      input: DeleteRevisionCommandInput;
      output: DeleteRevisionCommandOutput;
    };
  };
}
