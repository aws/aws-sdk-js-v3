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

import { DBParameterGroupDetails, DescribeDBParametersMessage } from "../models/models_0";
import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import {
  deserializeAws_queryDescribeDBParametersCommand,
  serializeAws_queryDescribeDBParametersCommand,
} from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link DescribeDBParametersCommand}.
 */
export interface DescribeDBParametersCommandInput extends DescribeDBParametersMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDBParametersCommand}.
 */
export interface DescribeDBParametersCommandOutput extends DBParameterGroupDetails, __MetadataBearer {}

/**
 * @public
 * <p>Returns the detailed parameter list for a particular DB parameter group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DescribeDBParametersCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DescribeDBParametersCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new DescribeDBParametersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeDBParametersCommandInput - {@link DescribeDBParametersCommandInput}
 * @returns {@link DescribeDBParametersCommandOutput}
 * @see {@link DescribeDBParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeDBParametersCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link DBParameterGroupNotFoundFault} (client fault)
 *  <p>
 *             <i>DBParameterGroupName</i> does not refer to an
 *       existing DB parameter group.</p>
 *
 *
 */
export class DescribeDBParametersCommand extends $Command<
  DescribeDBParametersCommandInput,
  DescribeDBParametersCommandOutput,
  NeptuneClientResolvedConfig
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
  constructor(readonly input: DescribeDBParametersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NeptuneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDBParametersCommandInput, DescribeDBParametersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDBParametersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneClient";
    const commandName = "DescribeDBParametersCommand";
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
  private serialize(input: DescribeDBParametersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeDBParametersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDBParametersCommandOutput> {
    return deserializeAws_queryDescribeDBParametersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
