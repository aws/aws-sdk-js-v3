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

import { DescribeAccountCustomizationRequest, DescribeAccountCustomizationResponse } from "../models/models_3";
import {
  de_DescribeAccountCustomizationCommand,
  se_DescribeAccountCustomizationCommand,
} from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAccountCustomizationCommand}.
 */
export interface DescribeAccountCustomizationCommandInput extends DescribeAccountCustomizationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAccountCustomizationCommand}.
 */
export interface DescribeAccountCustomizationCommandOutput
  extends DescribeAccountCustomizationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the customizations associated with the provided Amazon Web Services account and Amazon
 *             Amazon QuickSight namespace in an Amazon Web Services Region. The Amazon QuickSight console evaluates which
 *             customizations to apply by running this API operation with the <code>Resolved</code> flag
 *             included. </p>
 *          <p>To determine what customizations display when you run this command, it can help to
 *             visualize the relationship of the entities involved. </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>Amazon Web Services account</code> - The Amazon Web Services account exists at the top of the hierarchy.
 *                     It has the potential to use all of the Amazon Web Services Regions and Amazon Web Services Services. When you
 *                     subscribe to Amazon QuickSight, you choose one Amazon Web Services Region to use as your home Region.
 *                     That's where your free SPICE capacity is located. You can use Amazon QuickSight in any
 *                     supported Amazon Web Services Region. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Amazon Web Services Region</code> - In each Amazon Web Services Region where you sign in to Amazon QuickSight
 *                     at least once, Amazon QuickSight acts as a separate instance of the same service. If
 *                     you have a user directory, it resides in us-east-1, which is the US East (N.
 *                     Virginia). Generally speaking, these users have access to Amazon QuickSight in any
 *                     Amazon Web Services Region, unless they are constrained to a namespace. </p>
 *                <p>To run the command in a different Amazon Web Services Region, you change your Region settings.
 *                     If you're using the CLI, you can use one of the following options:</p>
 *                <ul>
 *                   <li>
 *                      <p>Use <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-options.html">command line options</a>. </p>
 *                   </li>
 *                   <li>
 *                      <p>Use <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html">named profiles</a>. </p>
 *                   </li>
 *                   <li>
 *                      <p>Run <code>aws configure</code> to change your default Amazon Web Services Region. Use
 *                             Enter to key the same settings for your keys. For more information, see
 *                             <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html">Configuring the CLI</a>.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Namespace</code> - A QuickSight namespace is a partition that contains
 *                     users and assets (data sources, datasets, dashboards, and so on). To access
 *                     assets that are in a specific namespace, users and groups must also be part of
 *                     the same namespace. People who share a namespace are completely isolated from
 *                     users and assets in other namespaces, even if they are in the same Amazon Web Services account
 *                     and Amazon Web Services Region.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Applied customizations</code> -  Within an Amazon Web Services Region, a set of
 *                     Amazon QuickSight customizations can apply to an Amazon Web Services account or to a namespace.
 *                     Settings that you apply to a namespace override settings that you apply to an
 *                     Amazon Web Services account. All settings are isolated to a single Amazon Web Services Region. To apply them in
 *                     other Amazon Web Services Regions, run the <code>CreateAccountCustomization</code> command in
 *                     each Amazon Web Services Region where you want to apply the same customizations. </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeAccountCustomizationCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeAccountCustomizationCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // DescribeAccountCustomizationRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   Namespace: "STRING_VALUE",
 *   Resolved: true || false,
 * };
 * const command = new DescribeAccountCustomizationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAccountCustomizationResponse
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
 * @param DescribeAccountCustomizationCommandInput - {@link DescribeAccountCustomizationCommandInput}
 * @returns {@link DescribeAccountCustomizationCommandOutput}
 * @see {@link DescribeAccountCustomizationCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountCustomizationCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
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
export class DescribeAccountCustomizationCommand extends $Command<
  DescribeAccountCustomizationCommandInput,
  DescribeAccountCustomizationCommandOutput,
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
  constructor(readonly input: DescribeAccountCustomizationCommandInput) {
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
  ): Handler<DescribeAccountCustomizationCommandInput, DescribeAccountCustomizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAccountCustomizationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "DescribeAccountCustomizationCommand";
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
  private serialize(input: DescribeAccountCustomizationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAccountCustomizationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAccountCustomizationCommandOutput> {
    return de_DescribeAccountCustomizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
