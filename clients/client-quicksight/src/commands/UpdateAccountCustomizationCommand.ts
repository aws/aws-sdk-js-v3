// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { UpdateAccountCustomizationRequest, UpdateAccountCustomizationResponse } from "../models/models_3";
import { de_UpdateAccountCustomizationCommand, se_UpdateAccountCustomizationCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateAccountCustomizationCommand}.
 */
export interface UpdateAccountCustomizationCommandInput extends UpdateAccountCustomizationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAccountCustomizationCommand}.
 */
export interface UpdateAccountCustomizationCommandOutput extends UpdateAccountCustomizationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates Amazon QuickSight customizations for the current Amazon Web Services Region. Currently, the only customization that you can use is a theme.</p>
 *          <p>You can use customizations for your Amazon Web Services account or, if you specify a namespace, for a
 *             Amazon QuickSight namespace instead. Customizations that apply to a namespace override
 *             customizations that apply to an Amazon Web Services account. To find out which customizations apply, use
 *             the <code>DescribeAccountCustomization</code> API operation. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateAccountCustomizationCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateAccountCustomizationCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // UpdateAccountCustomizationRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   Namespace: "STRING_VALUE",
 *   AccountCustomization: { // AccountCustomization
 *     DefaultTheme: "STRING_VALUE",
 *     DefaultEmailCustomizationTemplate: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateAccountCustomizationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAccountCustomizationResponse
 * //   Arn: "STRING_VALUE",
 * //   AwsAccountId: "STRING_VALUE",
 * //   Namespace: "STRING_VALUE",
 * //   AccountCustomization: { // AccountCustomization
 * //     DefaultTheme: "STRING_VALUE",
 * //     DefaultEmailCustomizationTemplate: "STRING_VALUE",
 * //   },
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param UpdateAccountCustomizationCommandInput - {@link UpdateAccountCustomizationCommandInput}
 * @returns {@link UpdateAccountCustomizationCommandOutput}
 * @see {@link UpdateAccountCustomizationCommandInput} for command's `input` shape.
 * @see {@link UpdateAccountCustomizationCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ResourceUnavailableException} (server fault)
 *  <p>This resource is currently unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 */
export class UpdateAccountCustomizationCommand extends $Command<
  UpdateAccountCustomizationCommandInput,
  UpdateAccountCustomizationCommandOutput,
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

  /**
   * @public
   */
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateAccountCustomizationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "UpdateAccountCustomizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: UpdateAccountCustomizationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateAccountCustomizationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateAccountCustomizationCommandOutput> {
    return de_UpdateAccountCustomizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
