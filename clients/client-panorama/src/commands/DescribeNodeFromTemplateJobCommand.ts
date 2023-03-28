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

import {
  DescribeNodeFromTemplateJobRequest,
  DescribeNodeFromTemplateJobResponse,
  DescribeNodeFromTemplateJobResponseFilterSensitiveLog,
} from "../models/models_0";
import { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import {
  deserializeAws_restJson1DescribeNodeFromTemplateJobCommand,
  serializeAws_restJson1DescribeNodeFromTemplateJobCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DescribeNodeFromTemplateJobCommand}.
 */
export interface DescribeNodeFromTemplateJobCommandInput extends DescribeNodeFromTemplateJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeNodeFromTemplateJobCommand}.
 */
export interface DescribeNodeFromTemplateJobCommandOutput
  extends DescribeNodeFromTemplateJobResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns information about a job to create a camera stream node.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, DescribeNodeFromTemplateJobCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, DescribeNodeFromTemplateJobCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * const client = new PanoramaClient(config);
 * const input = { // DescribeNodeFromTemplateJobRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new DescribeNodeFromTemplateJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeNodeFromTemplateJobCommandInput - {@link DescribeNodeFromTemplateJobCommandInput}
 * @returns {@link DescribeNodeFromTemplateJobCommandOutput}
 * @see {@link DescribeNodeFromTemplateJobCommandInput} for command's `input` shape.
 * @see {@link DescribeNodeFromTemplateJobCommandOutput} for command's `response` shape.
 * @see {@link PanoramaClientResolvedConfig | config} for PanoramaClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The requestor does not have permission to access the target action or resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The target resource is in use.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request contains an invalid parameter value.</p>
 *
 *
 */
export class DescribeNodeFromTemplateJobCommand extends $Command<
  DescribeNodeFromTemplateJobCommandInput,
  DescribeNodeFromTemplateJobCommandOutput,
  PanoramaClientResolvedConfig
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
  constructor(readonly input: DescribeNodeFromTemplateJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PanoramaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeNodeFromTemplateJobCommandInput, DescribeNodeFromTemplateJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeNodeFromTemplateJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PanoramaClient";
    const commandName = "DescribeNodeFromTemplateJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeNodeFromTemplateJobResponseFilterSensitiveLog,
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
  private serialize(input: DescribeNodeFromTemplateJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeNodeFromTemplateJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeNodeFromTemplateJobCommandOutput> {
    return deserializeAws_restJson1DescribeNodeFromTemplateJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
