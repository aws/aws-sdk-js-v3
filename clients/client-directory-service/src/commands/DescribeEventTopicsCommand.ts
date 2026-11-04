// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeEventTopicsRequest, DescribeEventTopicsResult } from "../models/models_0";
import { DescribeEventTopics$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Obtains information about which Amazon SNS topics receive status messages from the specified directory.
 *
 * If no input parameters are provided, such as DirectoryId or TopicName, this request describes all of the associations in the account.
 *
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
 *
 * A client exception has occurred.
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *
 * The specified entity could not be found.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters are not valid.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * An exception has occurred in Directory Service.
 *
 * @throws {@link DirectoryServiceServiceException}
 *
 * Base exception class for all service exceptions from DirectoryService service.
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
export class DescribeEventTopicsCommand extends command<DescribeEventTopicsCommandInput, DescribeEventTopicsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeEventTopics",
  DescribeEventTopics$
) {
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
