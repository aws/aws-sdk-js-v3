import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";
import { ListCompatibleImagesRequest, ListCompatibleImagesResult } from "../models/models_0";
import {
  deserializeAws_json1_1ListCompatibleImagesCommand,
  serializeAws_json1_1ListCompatibleImagesCommand,
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

export interface ListCompatibleImagesCommandInput extends ListCompatibleImagesRequest {}
export interface ListCompatibleImagesCommandOutput extends ListCompatibleImagesResult, __MetadataBearer {}

/**
 * <p>This action returns a list of the different Amazon EC2 Amazon Machine Images (AMIs)
 *       that are owned by your AWS account that would be supported for use on a Snow device.
 *       Currently, supported AMIs are based on the CentOS 7 (x86_64) - with Updates HVM, Ubuntu Server
 *       14.04 LTS (HVM), and Ubuntu 16.04 LTS - Xenial (HVM) images, available on the AWS
 *       Marketplace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, ListCompatibleImagesCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, ListCompatibleImagesCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new ListCompatibleImagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCompatibleImagesCommandInput} for command's `input` shape.
 * @see {@link ListCompatibleImagesCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListCompatibleImagesCommand extends $Command<
  ListCompatibleImagesCommandInput,
  ListCompatibleImagesCommandOutput,
  SnowballClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListCompatibleImagesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SnowballClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCompatibleImagesCommandInput, ListCompatibleImagesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SnowballClient";
    const commandName = "ListCompatibleImagesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCompatibleImagesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListCompatibleImagesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListCompatibleImagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListCompatibleImagesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCompatibleImagesCommandOutput> {
    return deserializeAws_json1_1ListCompatibleImagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
