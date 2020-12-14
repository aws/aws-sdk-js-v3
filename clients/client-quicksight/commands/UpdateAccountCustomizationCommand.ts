import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { UpdateAccountCustomizationRequest, UpdateAccountCustomizationResponse } from "../models/models_1";
import {
  deserializeAws_restJson1UpdateAccountCustomizationCommand,
  serializeAws_restJson1UpdateAccountCustomizationCommand,
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

export type UpdateAccountCustomizationCommandInput = UpdateAccountCustomizationRequest;
export type UpdateAccountCustomizationCommandOutput = UpdateAccountCustomizationResponse & __MetadataBearer;

/**
 * <p>Updates Amazon QuickSight customizations the current AWS Region. Currently, the only
 *             customization you can use is a theme.</p>
 *         <p>You can use customizations for your AWS account or, if you specify a namespace, for a
 *             QuickSight namespace instead. Customizations that apply to a namespace override
 *             customizations that apply to an AWS account. To find out which customizations apply, use
 *             the <code>DescribeAccountCustomization</code> API operation. </p>
 */
export class UpdateAccountCustomizationCommand extends $Command<
  UpdateAccountCustomizationCommandInput,
  UpdateAccountCustomizationCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateAccountCustomizationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateAccountCustomizationCommandInput, UpdateAccountCustomizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "UpdateAccountCustomizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateAccountCustomizationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateAccountCustomizationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateAccountCustomizationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateAccountCustomizationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateAccountCustomizationCommandOutput> {
    return deserializeAws_restJson1UpdateAccountCustomizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
