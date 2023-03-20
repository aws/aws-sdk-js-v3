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

import { LookoutVisionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutVisionClient";
import { DescribeModelRequest, DescribeModelResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeModelCommand,
  serializeAws_restJson1DescribeModelCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DescribeModelCommand}.
 */
export interface DescribeModelCommandInput extends DescribeModelRequest {}
/**
 * @public
 *
 * The output of {@link DescribeModelCommand}.
 */
export interface DescribeModelCommandOutput extends DescribeModelResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes a version of an Amazon Lookout for Vision model.</p>
 *          <p>This operation requires permissions to perform the
 *          <code>lookoutvision:DescribeModel</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutVisionClient, DescribeModelCommand } from "@aws-sdk/client-lookoutvision"; // ES Modules import
 * // const { LookoutVisionClient, DescribeModelCommand } = require("@aws-sdk/client-lookoutvision"); // CommonJS import
 * const client = new LookoutVisionClient(config);
 * const command = new DescribeModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeModelCommandInput - {@link DescribeModelCommandInput}
 * @returns {@link DescribeModelCommandOutput}
 * @see {@link DescribeModelCommandInput} for command's `input` shape.
 * @see {@link DescribeModelCommandOutput} for command's `response` shape.
 * @see {@link LookoutVisionClientResolvedConfig | config} for LookoutVisionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The update or deletion of a resource caused an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Amazon Lookout for Vision experienced a service issue. Try your call again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Amazon Lookout for Vision is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An input validation error occured. For example, invalid characters in a project name,
 *       or if a pagination token is invalid.</p>
 *
 *
 */
export class DescribeModelCommand extends $Command<
  DescribeModelCommandInput,
  DescribeModelCommandOutput,
  LookoutVisionClientResolvedConfig
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
  constructor(readonly input: DescribeModelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutVisionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeModelCommandInput, DescribeModelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeModelCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutVisionClient";
    const commandName = "DescribeModelCommand";
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
  private serialize(input: DescribeModelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeModelCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeModelCommandOutput> {
    return deserializeAws_restJson1DescribeModelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
