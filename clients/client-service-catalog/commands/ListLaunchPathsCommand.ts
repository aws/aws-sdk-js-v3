import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { ListLaunchPathsInput, ListLaunchPathsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ListLaunchPathsCommand,
  serializeAws_json1_1ListLaunchPathsCommand,
} from "../protocols/Aws_json1_1";
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

export type ListLaunchPathsCommandInput = ListLaunchPathsInput;
export type ListLaunchPathsCommandOutput = ListLaunchPathsOutput & __MetadataBearer;

/**
 * <p>Lists the paths to the specified product. A path is how the user
 *          has access to a specified product, and is necessary when provisioning a product. A path
 *          also determines the constraints put on the product.</p>
 */
export class ListLaunchPathsCommand extends $Command<
  ListLaunchPathsCommandInput,
  ListLaunchPathsCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListLaunchPathsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListLaunchPathsCommandInput, ListLaunchPathsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "ListLaunchPathsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListLaunchPathsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListLaunchPathsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListLaunchPathsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListLaunchPathsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListLaunchPathsCommandOutput> {
    return deserializeAws_json1_1ListLaunchPathsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
