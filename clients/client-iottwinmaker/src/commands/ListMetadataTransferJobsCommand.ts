// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTTwinMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTTwinMakerClient";
import { ListMetadataTransferJobsRequest, ListMetadataTransferJobsResponse } from "../models/models_0";
import { de_ListMetadataTransferJobsCommand, se_ListMetadataTransferJobsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMetadataTransferJobsCommand}.
 */
export interface ListMetadataTransferJobsCommandInput extends ListMetadataTransferJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListMetadataTransferJobsCommand}.
 */
export interface ListMetadataTransferJobsCommandOutput extends ListMetadataTransferJobsResponse, __MetadataBearer {}

/**
 * <p>Lists the metadata transfer jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, ListMetadataTransferJobsCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, ListMetadataTransferJobsCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * const client = new IoTTwinMakerClient(config);
 * const input = { // ListMetadataTransferJobsRequest
 *   sourceType: "STRING_VALUE", // required
 *   destinationType: "STRING_VALUE", // required
 *   filters: [ // ListMetadataTransferJobsFilters
 *     { // ListMetadataTransferJobsFilter Union: only one key present
 *       workspaceId: "STRING_VALUE",
 *       state: "STRING_VALUE",
 *     },
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListMetadataTransferJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListMetadataTransferJobsResponse
 * //   metadataTransferJobSummaries: [ // MetadataTransferJobSummaries // required
 * //     { // MetadataTransferJobSummary
 * //       metadataTransferJobId: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       creationDateTime: new Date("TIMESTAMP"), // required
 * //       updateDateTime: new Date("TIMESTAMP"), // required
 * //       status: { // MetadataTransferJobStatus
 * //         state: "STRING_VALUE",
 * //         error: { // ErrorDetails
 * //           code: "STRING_VALUE",
 * //           message: "STRING_VALUE",
 * //         },
 * //         queuedPosition: Number("int"),
 * //       },
 * //       progress: { // MetadataTransferJobProgress
 * //         totalCount: Number("int"),
 * //         succeededCount: Number("int"),
 * //         skippedCount: Number("int"),
 * //         failedCount: Number("int"),
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMetadataTransferJobsCommandInput - {@link ListMetadataTransferJobsCommandInput}
 * @returns {@link ListMetadataTransferJobsCommandOutput}
 * @see {@link ListMetadataTransferJobsCommandInput} for command's `input` shape.
 * @see {@link ListMetadataTransferJobsCommandOutput} for command's `response` shape.
 * @see {@link IoTTwinMakerClientResolvedConfig | config} for IoTTwinMakerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Failed</p>
 *
 * @throws {@link IoTTwinMakerServiceException}
 * <p>Base exception class for all service exceptions from IoTTwinMaker service.</p>
 *
 *
 * @public
 */
export class ListMetadataTransferJobsCommand extends $Command
  .classBuilder<
    ListMetadataTransferJobsCommandInput,
    ListMetadataTransferJobsCommandOutput,
    IoTTwinMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTTwinMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIoTTwinMaker", "ListMetadataTransferJobs", {})
  .n("IoTTwinMakerClient", "ListMetadataTransferJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListMetadataTransferJobsCommand)
  .de(de_ListMetadataTransferJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMetadataTransferJobsRequest;
      output: ListMetadataTransferJobsResponse;
    };
    sdk: {
      input: ListMetadataTransferJobsCommandInput;
      output: ListMetadataTransferJobsCommandOutput;
    };
  };
}
