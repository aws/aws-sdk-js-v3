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
  CreateAccountCustomizationRequest,
  CreateAccountCustomizationRequestFilterSensitiveLog,
  CreateAccountCustomizationResponse,
  CreateAccountCustomizationResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1CreateAccountCustomizationCommand,
  serializeAws_restJson1CreateAccountCustomizationCommand,
} from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

export interface CreateAccountCustomizationCommandInput extends CreateAccountCustomizationRequest {}
export interface CreateAccountCustomizationCommandOutput extends CreateAccountCustomizationResponse, __MetadataBearer {}

/**
 * <p>Creates Amazon QuickSight customizations for the current Amazon Web Services Region. Currently, you can add a custom default theme by using the
 *                 <code>CreateAccountCustomization</code> or <code>UpdateAccountCustomization</code>
 *             API operation. To further customize Amazon QuickSight by removing Amazon QuickSight
 *             sample assets and videos for all new users, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/customizing-quicksight.html">Customizing Amazon QuickSight</a> in the <i>Amazon QuickSight User Guide.</i>
 *          </p>
 *          <p>You can create customizations for your Amazon Web Services account or, if you specify a namespace, for
 *             a QuickSight namespace instead. Customizations that apply to a namespace always override
 *             customizations that apply to an Amazon Web Services account. To find out which customizations apply, use
 *             the <code>DescribeAccountCustomization</code> API operation.</p>
 *          <p>Before you use the <code>CreateAccountCustomization</code> API operation to add a theme
 *             as the namespace default, make sure that you first share the theme with the namespace.
 *             If you don't share it with the namespace, the theme isn't visible to your users
 *             even if you make it the default theme.
 *             To check if the theme is shared, view the current permissions by using the
 *             <code>
 *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeThemePermissions.html">DescribeThemePermissions</a>
 *             </code>
 *             API operation.
 *             To share the theme, grant permissions by using the
 *             <code>
 *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateThemePermissions.html">UpdateThemePermissions</a>
 *             </code>
 *             API operation. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateAccountCustomizationCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateAccountCustomizationCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new CreateAccountCustomizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAccountCustomizationCommandInput} for command's `input` shape.
 * @see {@link CreateAccountCustomizationCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 */
export class CreateAccountCustomizationCommand extends $Command<
  CreateAccountCustomizationCommandInput,
  CreateAccountCustomizationCommandOutput,
  QuickSightClientResolvedConfig
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAccountCustomizationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "CreateAccountCustomizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAccountCustomizationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateAccountCustomizationResponseFilterSensitiveLog,
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
