import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DescribeProductAsAdminInput, DescribeProductAsAdminOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeProductAsAdminCommand,
  serializeAws_json1_1DescribeProductAsAdminCommand,
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

export interface DescribeProductAsAdminCommandInput extends DescribeProductAsAdminInput {}
export interface DescribeProductAsAdminCommandOutput extends DescribeProductAsAdminOutput, __MetadataBearer {}

/**
 * <p>Gets information about the specified product. This operation is run with administrator access.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribeProductAsAdminCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribeProductAsAdminCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DescribeProductAsAdminCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeProductAsAdminCommandInput} for command's `input` shape.
 * @see {@link DescribeProductAsAdminCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeProductAsAdminCommand extends $Command<
  DescribeProductAsAdminCommandInput,
  DescribeProductAsAdminCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeProductAsAdminCommandInput) {
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
  ): Handler<DescribeProductAsAdminCommandInput, DescribeProductAsAdminCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "DescribeProductAsAdminCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeProductAsAdminInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeProductAsAdminOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeProductAsAdminCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeProductAsAdminCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeProductAsAdminCommandOutput> {
    return deserializeAws_json1_1DescribeProductAsAdminCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
