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

import { DescribeAuditStreamConfigurationRequest, DescribeAuditStreamConfigurationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeAuditStreamConfigurationCommand,
  serializeAws_restJson1DescribeAuditStreamConfigurationCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";

/**
 * @public
 *
 * The input for {@link DescribeAuditStreamConfigurationCommand}.
 */
export interface DescribeAuditStreamConfigurationCommandInput extends DescribeAuditStreamConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAuditStreamConfigurationCommand}.
 */
export interface DescribeAuditStreamConfigurationCommandOutput
  extends DescribeAuditStreamConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Describes the configuration for delivering audit streams to the customer account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, DescribeAuditStreamConfigurationCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, DescribeAuditStreamConfigurationCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new DescribeAuditStreamConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeAuditStreamConfigurationCommandInput - {@link DescribeAuditStreamConfigurationCommandInput}
 * @returns {@link DescribeAuditStreamConfigurationCommandOutput}
 * @see {@link DescribeAuditStreamConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeAuditStreamConfigurationCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for WorkLinkClient's `config` shape.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The number of requests exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this action.</p>
 *
 *
 */
export class DescribeAuditStreamConfigurationCommand extends $Command<
  DescribeAuditStreamConfigurationCommandInput,
  DescribeAuditStreamConfigurationCommandOutput,
  WorkLinkClientResolvedConfig
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
  constructor(readonly input: DescribeAuditStreamConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkLinkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAuditStreamConfigurationCommandInput, DescribeAuditStreamConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAuditStreamConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkLinkClient";
    const commandName = "DescribeAuditStreamConfigurationCommand";
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
  private serialize(
    input: DescribeAuditStreamConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeAuditStreamConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAuditStreamConfigurationCommandOutput> {
    return deserializeAws_restJson1DescribeAuditStreamConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
