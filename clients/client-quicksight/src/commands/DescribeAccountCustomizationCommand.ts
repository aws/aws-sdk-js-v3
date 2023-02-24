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
  DescribeAccountCustomizationRequest,
  DescribeAccountCustomizationRequestFilterSensitiveLog,
  DescribeAccountCustomizationResponse,
  DescribeAccountCustomizationResponseFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_restJson1DescribeAccountCustomizationCommand,
  serializeAws_restJson1DescribeAccountCustomizationCommand,
} from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

export interface DescribeAccountCustomizationCommandInput extends DescribeAccountCustomizationRequest {}
export interface DescribeAccountCustomizationCommandOutput
  extends DescribeAccountCustomizationResponse,
    __MetadataBearer {}

/**
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
 * const command = new DescribeAccountCustomizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAccountCustomizationCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountCustomizationCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
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
      inputFilterSensitiveLog: DescribeAccountCustomizationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeAccountCustomizationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAccountCustomizationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeAccountCustomizationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAccountCustomizationCommandOutput> {
    return deserializeAws_restJson1DescribeAccountCustomizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
