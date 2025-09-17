// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeEventTopicsRequest, DescribeEventTopicsResult } from "../models/models_0";
import { de_DescribeEventTopicsCommand, se_DescribeEventTopicsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEventTopicsCommand}.
 */
export interface DescribeEventTopicsCommandInput extends DescribeEventTopicsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEventTopicsCommand}.
 */
export interface DescribeEventTopicsCommandOutput extends DescribeEventTopicsResult, __MetadataBearer {}

/**
 * <p>Obtains information about which Amazon SNS topics receive status messages from the specified
 *       directory.</p>
 *          <p>If no input parameters are provided, such as DirectoryId or TopicName, this request
 *       describes all of the associations in the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DescribeEventTopicsCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DescribeEventTopicsCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // DescribeEventTopicsRequest
 *   DirectoryId: "STRING_VALUE",
 *   TopicNames: [ // TopicNames
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeEventTopicsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEventTopicsResult
 * //   EventTopics: [ // EventTopics
 * //     { // EventTopic
 * //       DirectoryId: "STRING_VALUE",
 * //       TopicName: "STRING_VALUE",
 * //       TopicArn: "STRING_VALUE",
 * //       CreatedDateTime: new Date("TIMESTAMP"),
 * //       Status: "Registered" || "Topic not found" || "Failed" || "Deleted",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeEventTopicsCommandInput - {@link DescribeEventTopicsCommandInput}
 * @returns {@link DescribeEventTopicsCommandOutput}
 * @see {@link DescribeEventTopicsCommandInput} for command's `input` shape.
 * @see {@link DescribeEventTopicsCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *  <p>The specified entity could not be found.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 *
 * @example To describe event topics
 * ```javascript
 * // The following example obtains information about which SNS topics receive status messages from the specified directory.
 * const input = {
 *   DirectoryId: "d-92654abfed",
 *   TopicNames: [
 *     "snstopicexample"
 *   ]
 * };
 * const command = new DescribeEventTopicsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   EventTopics: [
 *     {
 *       DirectoryId: "d-92654abfed",
 *       Status: "Registered",
 *       TopicArn: "arn:aws:sns:us-east-2:123456789012:snstopicexample",
 *       TopicName: "snstopicexample"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeEventTopicsCommand extends $Command
  .classBuilder<
    DescribeEventTopicsCommandInput,
    DescribeEventTopicsCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DirectoryService_20150416", "DescribeEventTopics", {})
  .n("DirectoryServiceClient", "DescribeEventTopicsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeEventTopicsCommand)
  .de(de_DescribeEventTopicsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEventTopicsRequest;
      output: DescribeEventTopicsResult;
    };
    sdk: {
      input: DescribeEventTopicsCommandInput;
      output: DescribeEventTopicsCommandOutput;
    };
  };
}
