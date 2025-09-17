// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutVisionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutVisionClient";
import { ListModelPackagingJobsRequest, ListModelPackagingJobsResponse } from "../models/models_0";
import { de_ListModelPackagingJobsCommand, se_ListModelPackagingJobsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListModelPackagingJobsCommand}.
 */
export interface ListModelPackagingJobsCommandInput extends ListModelPackagingJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListModelPackagingJobsCommand}.
 */
export interface ListModelPackagingJobsCommandOutput extends ListModelPackagingJobsResponse, __MetadataBearer {}

/**
 * <p>
 * Lists the model packaging jobs created for an Amazon Lookout for Vision project.
 * </p>
 *          <p>This operation requires permissions to perform the
 *     <code>lookoutvision:ListModelPackagingJobs</code> operation.
 * </p>
 *          <p>For more information, see
 *       <i>Using your Amazon Lookout for Vision model on an edge device</i> in the  Amazon Lookout for Vision Developer Guide. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutVisionClient, ListModelPackagingJobsCommand } from "@aws-sdk/client-lookoutvision"; // ES Modules import
 * // const { LookoutVisionClient, ListModelPackagingJobsCommand } = require("@aws-sdk/client-lookoutvision"); // CommonJS import
 * // import type { LookoutVisionClientConfig } from "@aws-sdk/client-lookoutvision";
 * const config = {}; // type is LookoutVisionClientConfig
 * const client = new LookoutVisionClient(config);
 * const input = { // ListModelPackagingJobsRequest
 *   ProjectName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListModelPackagingJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListModelPackagingJobsResponse
 * //   ModelPackagingJobs: [ // ModelPackagingJobsList
 * //     { // ModelPackagingJobMetadata
 * //       JobName: "STRING_VALUE",
 * //       ProjectName: "STRING_VALUE",
 * //       ModelVersion: "STRING_VALUE",
 * //       ModelPackagingJobDescription: "STRING_VALUE",
 * //       ModelPackagingMethod: "STRING_VALUE",
 * //       Status: "CREATED" || "RUNNING" || "SUCCEEDED" || "FAILED",
 * //       StatusMessage: "STRING_VALUE",
 * //       CreationTimestamp: new Date("TIMESTAMP"),
 * //       LastUpdatedTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListModelPackagingJobsCommandInput - {@link ListModelPackagingJobsCommandInput}
 * @returns {@link ListModelPackagingJobsCommandOutput}
 * @see {@link ListModelPackagingJobsCommandInput} for command's `input` shape.
 * @see {@link ListModelPackagingJobsCommandOutput} for command's `response` shape.
 * @see {@link LookoutVisionClientResolvedConfig | config} for LookoutVisionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Amazon Lookout for Vision experienced a service issue. Try your call again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Amazon Lookout for Vision is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An input validation error occured. For example, invalid characters in a project name,
 *       or if a pagination token is invalid.</p>
 *
 * @throws {@link LookoutVisionServiceException}
 * <p>Base exception class for all service exceptions from LookoutVision service.</p>
 *
 *
 * @public
 */
export class ListModelPackagingJobsCommand extends $Command
  .classBuilder<
    ListModelPackagingJobsCommandInput,
    ListModelPackagingJobsCommandOutput,
    LookoutVisionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LookoutVisionClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LookoutVisionService", "ListModelPackagingJobs", {})
  .n("LookoutVisionClient", "ListModelPackagingJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListModelPackagingJobsCommand)
  .de(de_ListModelPackagingJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListModelPackagingJobsRequest;
      output: ListModelPackagingJobsResponse;
    };
    sdk: {
      input: ListModelPackagingJobsCommandInput;
      output: ListModelPackagingJobsCommandOutput;
    };
  };
}
