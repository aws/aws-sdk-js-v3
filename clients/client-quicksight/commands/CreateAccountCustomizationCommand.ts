import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { CreateAccountCustomizationRequest, CreateAccountCustomizationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateAccountCustomizationCommand,
  serializeAws_restJson1CreateAccountCustomizationCommand,
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

export type CreateAccountCustomizationCommandInput = CreateAccountCustomizationRequest;
export type CreateAccountCustomizationCommandOutput = CreateAccountCustomizationResponse & __MetadataBearer;

/**
 * <p>Creates Amazon QuickSight customizations the current AWS Region. Currently, you can
 *             add a custom default theme by using the <code>CreateAccountCustomization</code> or
 *                 <code>UpdateAccountCustomization</code> API operation. To further customize
 *             QuickSight by removing QuickSight sample assets and videos for all new users, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/customizing-quicksight.html">Customizing QuickSight</a> in the <i>Amazon QuickSight User
 *                 Guide.</i>
 *          </p>
 *         <p>You can create customizations for your AWS account or, if you specify a namespace, for
 *             a QuickSight namespace instead. Customizations that apply to a namespace always override
 *             customizations that apply to an AWS account. To find out which customizations apply, use
 *             the <code>DescribeAccountCustomization</code> API operation.</p>
 *         <p>Before you use the <code>CreateAccountCustomization</code> API operation to add a theme
 *             as the namespace default, make sure that you first share the theme with the namespace.
 *             If you don't share it with the namespace, the theme isn't visible to your users
 *             even if you make it the default theme.
 *             To check if the theme is shared, view the current permissions by using the
 *             <code>
 *                <a>DescribeThemePermissions</a>
 *             </code> API operation.
 *             To share the theme, grant permissions by using the
 *             <code>
 *                <a>UpdateThemePermissions</a>
 *             </code> API operation. </p>
 */
export class CreateAccountCustomizationCommand extends $Command<
  CreateAccountCustomizationCommandInput,
  CreateAccountCustomizationCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateAccountCustomizationCommandInput) {
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
  ): Handler<CreateAccountCustomizationCommandInput, CreateAccountCustomizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "CreateAccountCustomizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAccountCustomizationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateAccountCustomizationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAccountCustomizationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateAccountCustomizationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateAccountCustomizationCommandOutput> {
    return deserializeAws_restJson1CreateAccountCustomizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
