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
  DescribeServiceIntegrationRequest,
  DescribeServiceIntegrationRequestFilterSensitiveLog,
  DescribeServiceIntegrationResponse,
  DescribeServiceIntegrationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeServiceIntegrationCommand,
  serializeAws_restJson1DescribeServiceIntegrationCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeServiceIntegrationCommandInput extends DescribeServiceIntegrationRequest {}
export interface DescribeServiceIntegrationCommandOutput extends DescribeServiceIntegrationResponse, __MetadataBearer {}

/**
 * <p> Returns the integration status of services that are integrated with DevOps Guru.
 * 			The one service that can be integrated with DevOps Guru
 *       	is Amazon Web Services Systems Manager, which can be used to create an OpsItem for each generated insight. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, DescribeServiceIntegrationCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, DescribeServiceIntegrationCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new DescribeServiceIntegrationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeServiceIntegrationCommandInput} for command's `input` shape.
 * @see {@link DescribeServiceIntegrationCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for DevOpsGuruClient's `config` shape.
 *
 */
export class DescribeServiceIntegrationCommand extends $Command<
  DescribeServiceIntegrationCommandInput,
  DescribeServiceIntegrationCommandOutput,
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

  constructor(readonly input: DescribeServiceIntegrationCommandInput) {
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
  ): Handler<DescribeServiceIntegrationCommandInput, DescribeServiceIntegrationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeServiceIntegrationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DevOpsGuruClient";
    const commandName = "DescribeServiceIntegrationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeServiceIntegrationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeServiceIntegrationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeServiceIntegrationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeServiceIntegrationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeServiceIntegrationCommandOutput> {
    return deserializeAws_restJson1DescribeServiceIntegrationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
