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

import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import {
  DescribeOrganizationOverviewRequest,
  DescribeOrganizationOverviewRequestFilterSensitiveLog,
  DescribeOrganizationOverviewResponse,
  DescribeOrganizationOverviewResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeOrganizationOverviewCommand,
  serializeAws_restJson1DescribeOrganizationOverviewCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeOrganizationOverviewCommandInput extends DescribeOrganizationOverviewRequest {}
export interface DescribeOrganizationOverviewCommandOutput
  extends DescribeOrganizationOverviewResponse,
    __MetadataBearer {}

/**
 * <p>Returns an overview of your organization's history based on the specified time range.
 * 			The overview includes the total reactive and proactive insights.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, DescribeOrganizationOverviewCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, DescribeOrganizationOverviewCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new DescribeOrganizationOverviewCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeOrganizationOverviewCommandInput} for command's `input` shape.
 * @see {@link DescribeOrganizationOverviewCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for DevOpsGuruClient's `config` shape.
 *
 */
export class DescribeOrganizationOverviewCommand extends $Command<
  DescribeOrganizationOverviewCommandInput,
  DescribeOrganizationOverviewCommandOutput,
  DevOpsGuruClientResolvedConfig
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

  constructor(readonly input: DescribeOrganizationOverviewCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DevOpsGuruClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeOrganizationOverviewCommandInput, DescribeOrganizationOverviewCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeOrganizationOverviewCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DevOpsGuruClient";
    const commandName = "DescribeOrganizationOverviewCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeOrganizationOverviewRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeOrganizationOverviewResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeOrganizationOverviewCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeOrganizationOverviewCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeOrganizationOverviewCommandOutput> {
    return deserializeAws_restJson1DescribeOrganizationOverviewCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
