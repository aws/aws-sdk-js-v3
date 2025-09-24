// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListStudioLifecycleConfigsRequest, ListStudioLifecycleConfigsResponse } from "../models/models_4";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListStudioLifecycleConfigs } from "../schemas/schemas_101_Lifecycle";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListStudioLifecycleConfigsCommand}.
 */
export interface ListStudioLifecycleConfigsCommandInput extends ListStudioLifecycleConfigsRequest {}
/**
 * @public
 *
 * The output of {@link ListStudioLifecycleConfigsCommand}.
 */
export interface ListStudioLifecycleConfigsCommandOutput extends ListStudioLifecycleConfigsResponse, __MetadataBearer {}

/**
 * <p>Lists the Amazon SageMaker AI Studio Lifecycle Configurations in your Amazon Web Services Account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListStudioLifecycleConfigsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListStudioLifecycleConfigsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // ListStudioLifecycleConfigsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   NameContains: "STRING_VALUE",
 *   AppTypeEquals: "JupyterServer" || "KernelGateway" || "CodeEditor" || "JupyterLab",
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   ModifiedTimeBefore: new Date("TIMESTAMP"),
 *   ModifiedTimeAfter: new Date("TIMESTAMP"),
 *   SortBy: "CreationTime" || "LastModifiedTime" || "Name",
 *   SortOrder: "Ascending" || "Descending",
 * };
 * const command = new ListStudioLifecycleConfigsCommand(input);
 * const response = await client.send(command);
 * // { // ListStudioLifecycleConfigsResponse
 * //   NextToken: "STRING_VALUE",
 * //   StudioLifecycleConfigs: [ // StudioLifecycleConfigsList
 * //     { // StudioLifecycleConfigDetails
 * //       StudioLifecycleConfigArn: "STRING_VALUE",
 * //       StudioLifecycleConfigName: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       StudioLifecycleConfigAppType: "JupyterServer" || "KernelGateway" || "CodeEditor" || "JupyterLab",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListStudioLifecycleConfigsCommandInput - {@link ListStudioLifecycleConfigsCommandInput}
 * @returns {@link ListStudioLifecycleConfigsCommandOutput}
 * @see {@link ListStudioLifecycleConfigsCommandInput} for command's `input` shape.
 * @see {@link ListStudioLifecycleConfigsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceInUse} (client fault)
 *  <p>Resource being accessed is in use.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class ListStudioLifecycleConfigsCommand extends $Command
  .classBuilder<
    ListStudioLifecycleConfigsCommandInput,
    ListStudioLifecycleConfigsCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "ListStudioLifecycleConfigs", {})
  .n("SageMakerClient", "ListStudioLifecycleConfigsCommand")
  .sc(ListStudioLifecycleConfigs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListStudioLifecycleConfigsRequest;
      output: ListStudioLifecycleConfigsResponse;
    };
    sdk: {
      input: ListStudioLifecycleConfigsCommandInput;
      output: ListStudioLifecycleConfigsCommandOutput;
    };
  };
}
