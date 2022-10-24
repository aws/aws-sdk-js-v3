// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import {
  ListSharedReportGroupsInput,
  ListSharedReportGroupsInputFilterSensitiveLog,
  ListSharedReportGroupsOutput,
  ListSharedReportGroupsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListSharedReportGroupsCommand,
  serializeAws_json1_1ListSharedReportGroupsCommand,
} from "../protocols/Aws_json1_1";

export interface ListSharedReportGroupsCommandInput extends ListSharedReportGroupsInput {}
export interface ListSharedReportGroupsCommandOutput extends ListSharedReportGroupsOutput, __MetadataBearer {}

/**
 * <p> Gets a list of report groups that are shared with other Amazon Web Services accounts or users.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, ListSharedReportGroupsCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, ListSharedReportGroupsCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new ListSharedReportGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSharedReportGroupsCommandInput} for command's `input` shape.
 * @see {@link ListSharedReportGroupsCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 */
export class ListSharedReportGroupsCommand extends $Command<
  ListSharedReportGroupsCommandInput,
  ListSharedReportGroupsCommandOutput,
  CodeBuildClientResolvedConfig
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

  constructor(readonly input: ListSharedReportGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeBuildClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSharedReportGroupsCommandInput, ListSharedReportGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSharedReportGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeBuildClient";
    const commandName = "ListSharedReportGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSharedReportGroupsInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListSharedReportGroupsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSharedReportGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListSharedReportGroupsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSharedReportGroupsCommandOutput> {
    return deserializeAws_json1_1ListSharedReportGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
