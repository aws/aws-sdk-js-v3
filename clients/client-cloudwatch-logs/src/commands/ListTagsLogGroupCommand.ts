// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { ListTagsLogGroupRequest, ListTagsLogGroupResponse } from "../models/models_0";
import { de_ListTagsLogGroupCommand, se_ListTagsLogGroupCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTagsLogGroupCommand}.
 */
export interface ListTagsLogGroupCommandInput extends ListTagsLogGroupRequest {}
/**
 * @public
 *
 * The output of {@link ListTagsLogGroupCommand}.
 */
export interface ListTagsLogGroupCommandOutput extends ListTagsLogGroupResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <important>
 *             <p>The ListTagsLogGroup operation is on the path to deprecation. We recommend that you use
 *       <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsForResource.html">ListTagsForResource</a> instead.</p>
 *          </important>
 *          <p>Lists the tags for the specified log group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, ListTagsLogGroupCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, ListTagsLogGroupCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // ListTagsLogGroupRequest
 *   logGroupName: "STRING_VALUE", // required
 * };
 * const command = new ListTagsLogGroupCommand(input);
 * const response = await client.send(command);
 * // { // ListTagsLogGroupResponse
 * //   tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ListTagsLogGroupCommandInput - {@link ListTagsLogGroupCommandInput}
 * @returns {@link ListTagsLogGroupCommandOutput}
 * @see {@link ListTagsLogGroupCommandInput} for command's `input` shape.
 * @see {@link ListTagsLogGroupCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 */
export class ListTagsLogGroupCommand extends $Command<
  ListTagsLogGroupCommandInput,
  ListTagsLogGroupCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: ListTagsLogGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTagsLogGroupCommandInput, ListTagsLogGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTagsLogGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchLogsClient";
    const commandName = "ListTagsLogGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ListTagsLogGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListTagsLogGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTagsLogGroupCommandOutput> {
    return de_ListTagsLogGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
