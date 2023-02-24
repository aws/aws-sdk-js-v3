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
  GetSolFunctionPackageInput,
  GetSolFunctionPackageInputFilterSensitiveLog,
  GetSolFunctionPackageOutput,
  GetSolFunctionPackageOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetSolFunctionPackageCommand,
  serializeAws_restJson1GetSolFunctionPackageCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

export interface GetSolFunctionPackageCommandInput extends GetSolFunctionPackageInput {}
export interface GetSolFunctionPackageCommandOutput extends GetSolFunctionPackageOutput, __MetadataBearer {}

/**
 * <p>Gets the details of an individual function package, such as the operational state and whether the package is in use.</p>
 *          <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network..</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, GetSolFunctionPackageCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, GetSolFunctionPackageCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * const client = new TnbClient(config);
 * const command = new GetSolFunctionPackageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSolFunctionPackageCommandInput} for command's `input` shape.
 * @see {@link GetSolFunctionPackageCommandOutput} for command's `response` shape.
 * @see {@link TnbClientResolvedConfig | config} for TnbClient's `config` shape.
 *
 */
export class GetSolFunctionPackageCommand extends $Command<
  GetSolFunctionPackageCommandInput,
  GetSolFunctionPackageCommandOutput,
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

  constructor(readonly input: GetSolFunctionPackageCommandInput) {
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
  ): Handler<GetSolFunctionPackageCommandInput, GetSolFunctionPackageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSolFunctionPackageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TnbClient";
    const commandName = "GetSolFunctionPackageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSolFunctionPackageInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetSolFunctionPackageOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSolFunctionPackageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetSolFunctionPackageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSolFunctionPackageCommandOutput> {
    return deserializeAws_restJson1GetSolFunctionPackageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
