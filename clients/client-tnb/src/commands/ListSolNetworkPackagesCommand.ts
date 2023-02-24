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
  ListSolNetworkPackagesInput,
  ListSolNetworkPackagesInputFilterSensitiveLog,
  ListSolNetworkPackagesOutput,
  ListSolNetworkPackagesOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListSolNetworkPackagesCommand,
  serializeAws_restJson1ListSolNetworkPackagesCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

export interface ListSolNetworkPackagesCommandInput extends ListSolNetworkPackagesInput {}
export interface ListSolNetworkPackagesCommandOutput extends ListSolNetworkPackagesOutput, __MetadataBearer {}

/**
 * <p>Lists network packages.</p>
 *          <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, ListSolNetworkPackagesCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, ListSolNetworkPackagesCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * const client = new TnbClient(config);
 * const command = new ListSolNetworkPackagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSolNetworkPackagesCommandInput} for command's `input` shape.
 * @see {@link ListSolNetworkPackagesCommandOutput} for command's `response` shape.
 * @see {@link TnbClientResolvedConfig | config} for TnbClient's `config` shape.
 *
 */
export class ListSolNetworkPackagesCommand extends $Command<
  ListSolNetworkPackagesCommandInput,
  ListSolNetworkPackagesCommandOutput,
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

  constructor(readonly input: ListSolNetworkPackagesCommandInput) {
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
  ): Handler<ListSolNetworkPackagesCommandInput, ListSolNetworkPackagesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSolNetworkPackagesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TnbClient";
    const commandName = "ListSolNetworkPackagesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSolNetworkPackagesInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListSolNetworkPackagesOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSolNetworkPackagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListSolNetworkPackagesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSolNetworkPackagesCommandOutput> {
    return deserializeAws_restJson1ListSolNetworkPackagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
