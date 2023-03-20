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
  SignalApplicationInstanceNodeInstancesRequest,
  SignalApplicationInstanceNodeInstancesResponse,
} from "../models/models_0";
import { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import {
  deserializeAws_restJson1SignalApplicationInstanceNodeInstancesCommand,
  serializeAws_restJson1SignalApplicationInstanceNodeInstancesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link SignalApplicationInstanceNodeInstancesCommand}.
 */
export interface SignalApplicationInstanceNodeInstancesCommandInput
  extends SignalApplicationInstanceNodeInstancesRequest {}
/**
 * @public
 *
 * The output of {@link SignalApplicationInstanceNodeInstancesCommand}.
 */
export interface SignalApplicationInstanceNodeInstancesCommandOutput
  extends SignalApplicationInstanceNodeInstancesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Signal camera nodes to stop or resume.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, SignalApplicationInstanceNodeInstancesCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, SignalApplicationInstanceNodeInstancesCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * const client = new PanoramaClient(config);
 * const command = new SignalApplicationInstanceNodeInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param SignalApplicationInstanceNodeInstancesCommandInput - {@link SignalApplicationInstanceNodeInstancesCommandInput}
 * @returns {@link SignalApplicationInstanceNodeInstancesCommandOutput}
 * @see {@link SignalApplicationInstanceNodeInstancesCommandInput} for command's `input` shape.
 * @see {@link SignalApplicationInstanceNodeInstancesCommandOutput} for command's `response` shape.
 * @see {@link PanoramaClientResolvedConfig | config} for PanoramaClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The requestor does not have permission to access the target action or resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a limit to be exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request contains an invalid parameter value.</p>
 *
 *
 */
export class SignalApplicationInstanceNodeInstancesCommand extends $Command<
  SignalApplicationInstanceNodeInstancesCommandInput,
  SignalApplicationInstanceNodeInstancesCommandOutput,
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
  constructor(readonly input: SignalApplicationInstanceNodeInstancesCommandInput) {
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
  ): Handler<SignalApplicationInstanceNodeInstancesCommandInput, SignalApplicationInstanceNodeInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SignalApplicationInstanceNodeInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PanoramaClient";
    const commandName = "SignalApplicationInstanceNodeInstancesCommand";
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
    input: SignalApplicationInstanceNodeInstancesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1SignalApplicationInstanceNodeInstancesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SignalApplicationInstanceNodeInstancesCommandOutput> {
    return deserializeAws_restJson1SignalApplicationInstanceNodeInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
