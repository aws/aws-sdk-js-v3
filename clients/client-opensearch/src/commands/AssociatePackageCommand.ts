import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { AssociatePackageRequest, AssociatePackageResponse } from "../models/models_0";
import {
  deserializeAws_restJson1AssociatePackageCommand,
  serializeAws_restJson1AssociatePackageCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface AssociatePackageCommandInput extends AssociatePackageRequest {}
export interface AssociatePackageCommandOutput extends AssociatePackageResponse, __MetadataBearer {}

/**
 * <p>Associates a package with an Amazon OpenSearch Service domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, AssociatePackageCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, AssociatePackageCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const command = new AssociatePackageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociatePackageCommandInput} for command's `input` shape.
 * @see {@link AssociatePackageCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AssociatePackageCommand extends $Command<
  AssociatePackageCommandInput,
  AssociatePackageCommandOutput,
  OpenSearchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociatePackageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpenSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociatePackageCommandInput, AssociatePackageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchClient";
    const commandName = "AssociatePackageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociatePackageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociatePackageResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociatePackageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AssociatePackageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociatePackageCommandOutput> {
    return deserializeAws_restJson1AssociatePackageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
