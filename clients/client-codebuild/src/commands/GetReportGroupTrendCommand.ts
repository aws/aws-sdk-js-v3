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
  GetReportGroupTrendInput,
  GetReportGroupTrendInputFilterSensitiveLog,
  GetReportGroupTrendOutput,
  GetReportGroupTrendOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetReportGroupTrendCommand,
  serializeAws_json1_1GetReportGroupTrendCommand,
} from "../protocols/Aws_json1_1";

export interface GetReportGroupTrendCommandInput extends GetReportGroupTrendInput {}
export interface GetReportGroupTrendCommandOutput extends GetReportGroupTrendOutput, __MetadataBearer {}

/**
 * <p>Analyzes and accumulates test report values for the specified test reports.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, GetReportGroupTrendCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, GetReportGroupTrendCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new GetReportGroupTrendCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetReportGroupTrendCommandInput} for command's `input` shape.
 * @see {@link GetReportGroupTrendCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 */
export class GetReportGroupTrendCommand extends $Command<
  GetReportGroupTrendCommandInput,
  GetReportGroupTrendCommandOutput,
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

  constructor(readonly input: GetReportGroupTrendCommandInput) {
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
  ): Handler<GetReportGroupTrendCommandInput, GetReportGroupTrendCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetReportGroupTrendCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeBuildClient";
    const commandName = "GetReportGroupTrendCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetReportGroupTrendInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetReportGroupTrendOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetReportGroupTrendCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetReportGroupTrendCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetReportGroupTrendCommandOutput> {
    return deserializeAws_json1_1GetReportGroupTrendCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
