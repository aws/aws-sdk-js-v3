// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EntityResolutionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EntityResolutionClient";
import { BatchDeleteUniqueIdInput, BatchDeleteUniqueIdOutput } from "../models/models_0";
import { de_BatchDeleteUniqueIdCommand, se_BatchDeleteUniqueIdCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDeleteUniqueIdCommand}.
 */
export interface BatchDeleteUniqueIdCommandInput extends BatchDeleteUniqueIdInput {}
/**
 * @public
 *
 * The output of {@link BatchDeleteUniqueIdCommand}.
 */
export interface BatchDeleteUniqueIdCommandOutput extends BatchDeleteUniqueIdOutput, __MetadataBearer {}

/**
 * <p>Deletes multiple unique IDs in a matching workflow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, BatchDeleteUniqueIdCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, BatchDeleteUniqueIdCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EntityResolutionClient(config);
 * const input = { // BatchDeleteUniqueIdInput
 *   workflowName: "STRING_VALUE", // required
 *   inputSource: "STRING_VALUE",
 *   uniqueIds: [ // UniqueIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchDeleteUniqueIdCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteUniqueIdOutput
 * //   status: "COMPLETED" || "ACCEPTED", // required
 * //   errors: [ // DeleteUniqueIdErrorsList // required
 * //     { // DeleteUniqueIdError
 * //       uniqueId: "STRING_VALUE", // required
 * //       errorType: "SERVICE_ERROR" || "VALIDATION_ERROR", // required
 * //     },
 * //   ],
 * //   deleted: [ // DeletedUniqueIdList // required
 * //     { // DeletedUniqueId
 * //       uniqueId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   disconnectedUniqueIds: [ // DisconnectedUniqueIdsList // required
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDeleteUniqueIdCommandInput - {@link BatchDeleteUniqueIdCommandInput}
 * @returns {@link BatchDeleteUniqueIdCommandOutput}
 * @see {@link BatchDeleteUniqueIdCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteUniqueIdCommandOutput} for command's `response` shape.
 * @see {@link EntityResolutionClientResolvedConfig | config} for EntityResolutionClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Entity Resolution
 *          service. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by Entity Resolution. </p>
 *
 * @throws {@link EntityResolutionServiceException}
 * <p>Base exception class for all service exceptions from EntityResolution service.</p>
 *
 * @public
 */
export class BatchDeleteUniqueIdCommand extends $Command
  .classBuilder<
    BatchDeleteUniqueIdCommandInput,
    BatchDeleteUniqueIdCommandOutput,
    EntityResolutionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EntityResolutionClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSVeniceService", "BatchDeleteUniqueId", {})
  .n("EntityResolutionClient", "BatchDeleteUniqueIdCommand")
  .f(void 0, void 0)
  .ser(se_BatchDeleteUniqueIdCommand)
  .de(de_BatchDeleteUniqueIdCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDeleteUniqueIdInput;
      output: BatchDeleteUniqueIdOutput;
    };
    sdk: {
      input: BatchDeleteUniqueIdCommandInput;
      output: BatchDeleteUniqueIdCommandOutput;
    };
  };
}
