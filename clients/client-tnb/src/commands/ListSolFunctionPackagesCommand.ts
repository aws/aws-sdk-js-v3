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

import { ListSolFunctionPackagesInput, ListSolFunctionPackagesOutput } from "../models/models_0";
import {
  deserializeAws_restJson1ListSolFunctionPackagesCommand,
  serializeAws_restJson1ListSolFunctionPackagesCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

/**
 * @public
 *
 * The input for {@link ListSolFunctionPackagesCommand}.
 */
export interface ListSolFunctionPackagesCommandInput extends ListSolFunctionPackagesInput {}
/**
 * @public
 *
 * The output of {@link ListSolFunctionPackagesCommand}.
 */
export interface ListSolFunctionPackagesCommandOutput extends ListSolFunctionPackagesOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists information about function packages.</p>
 *          <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, ListSolFunctionPackagesCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, ListSolFunctionPackagesCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * const client = new TnbClient(config);
 * const command = new ListSolFunctionPackagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListSolFunctionPackagesCommandInput - {@link ListSolFunctionPackagesCommandInput}
 * @returns {@link ListSolFunctionPackagesCommandOutput}
 * @see {@link ListSolFunctionPackagesCommandInput} for command's `input` shape.
 * @see {@link ListSolFunctionPackagesCommandOutput} for command's `response` shape.
 * @see {@link TnbClientResolvedConfig | config} for TnbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Insufficient permissions to make request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred. Problem on the server.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Exception caused by throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Unable to process the request because the client provided input failed to satisfy request constraints.</p>
 *
 *
 */
export class ListSolFunctionPackagesCommand extends $Command<
  ListSolFunctionPackagesCommandInput,
  ListSolFunctionPackagesCommandOutput,
  TnbClientResolvedConfig
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
  constructor(readonly input: ListSolFunctionPackagesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TnbClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSolFunctionPackagesCommandInput, ListSolFunctionPackagesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSolFunctionPackagesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TnbClient";
    const commandName = "ListSolFunctionPackagesCommand";
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
  private serialize(input: ListSolFunctionPackagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListSolFunctionPackagesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSolFunctionPackagesCommandOutput> {
    return deserializeAws_restJson1ListSolFunctionPackagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
