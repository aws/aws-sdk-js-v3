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

import { DescribeAppInput, DescribeAppOutput } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeAppCommand,
  serializeAws_restJson1DescribeAppCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SimSpaceWeaverClientResolvedConfig } from "../SimSpaceWeaverClient";

/**
 * @public
 *
 * The input for {@link DescribeAppCommand}.
 */
export interface DescribeAppCommandInput extends DescribeAppInput {}
/**
 * @public
 *
 * The output of {@link DescribeAppCommand}.
 */
export interface DescribeAppCommandOutput extends DescribeAppOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns the state of the given custom app.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SimSpaceWeaverClient, DescribeAppCommand } from "@aws-sdk/client-simspaceweaver"; // ES Modules import
 * // const { SimSpaceWeaverClient, DescribeAppCommand } = require("@aws-sdk/client-simspaceweaver"); // CommonJS import
 * const client = new SimSpaceWeaverClient(config);
 * const command = new DescribeAppCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeAppCommandInput - {@link DescribeAppCommandInput}
 * @returns {@link DescribeAppCommandOutput}
 * @see {@link DescribeAppCommandInput} for command's `input` shape.
 * @see {@link DescribeAppCommandOutput} for command's `response` shape.
 * @see {@link SimSpaceWeaverClientResolvedConfig | config} for SimSpaceWeaverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 *
 */
export class DescribeAppCommand extends $Command<
  DescribeAppCommandInput,
  DescribeAppCommandOutput,
  SimSpaceWeaverClientResolvedConfig
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
  constructor(readonly input: DescribeAppCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SimSpaceWeaverClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAppCommandInput, DescribeAppCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeAppCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SimSpaceWeaverClient";
    const commandName = "DescribeAppCommand";
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
  private serialize(input: DescribeAppCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeAppCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAppCommandOutput> {
    return deserializeAws_restJson1DescribeAppCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
