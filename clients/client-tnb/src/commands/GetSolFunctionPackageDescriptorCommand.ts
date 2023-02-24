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
  GetSolFunctionPackageDescriptorInput,
  GetSolFunctionPackageDescriptorInputFilterSensitiveLog,
  GetSolFunctionPackageDescriptorOutput,
  GetSolFunctionPackageDescriptorOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetSolFunctionPackageDescriptorCommand,
  serializeAws_restJson1GetSolFunctionPackageDescriptorCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

export interface GetSolFunctionPackageDescriptorCommandInput extends GetSolFunctionPackageDescriptorInput {}
export interface GetSolFunctionPackageDescriptorCommandOutput
  extends GetSolFunctionPackageDescriptorOutput,
    __MetadataBearer {}

/**
 * <p>Gets a function package descriptor in a function package.</p>
 *          <p>A function package descriptor is a .yaml file in a function package that uses the TOSCA standard to describe how the network function in the function package should run on your network.</p>
 *          <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, GetSolFunctionPackageDescriptorCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, GetSolFunctionPackageDescriptorCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * const client = new TnbClient(config);
 * const command = new GetSolFunctionPackageDescriptorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSolFunctionPackageDescriptorCommandInput} for command's `input` shape.
 * @see {@link GetSolFunctionPackageDescriptorCommandOutput} for command's `response` shape.
 * @see {@link TnbClientResolvedConfig | config} for TnbClient's `config` shape.
 *
 */
export class GetSolFunctionPackageDescriptorCommand extends $Command<
  GetSolFunctionPackageDescriptorCommandInput,
  GetSolFunctionPackageDescriptorCommandOutput,
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

  constructor(readonly input: GetSolFunctionPackageDescriptorCommandInput) {
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
  ): Handler<GetSolFunctionPackageDescriptorCommandInput, GetSolFunctionPackageDescriptorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSolFunctionPackageDescriptorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TnbClient";
    const commandName = "GetSolFunctionPackageDescriptorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSolFunctionPackageDescriptorInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetSolFunctionPackageDescriptorOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetSolFunctionPackageDescriptorCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetSolFunctionPackageDescriptorCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetSolFunctionPackageDescriptorCommandOutput> {
    return deserializeAws_restJson1GetSolFunctionPackageDescriptorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
