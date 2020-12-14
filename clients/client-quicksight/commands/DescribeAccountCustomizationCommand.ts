import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DescribeAccountCustomizationRequest, DescribeAccountCustomizationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeAccountCustomizationCommand,
  serializeAws_restJson1DescribeAccountCustomizationCommand,
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

export type DescribeAccountCustomizationCommandInput = DescribeAccountCustomizationRequest;
export type DescribeAccountCustomizationCommandOutput = DescribeAccountCustomizationResponse & __MetadataBearer;

/**
 * <p>Describes the customizations associated with the provided AWS account and Amazon
 *             QuickSight namespace in an AWS Region. The QuickSight console evaluates which
 *             customizations to apply by running this API operation with the <code>Resolved</code> flag
 *             included. </p>
 *         <p>To determine what customizations display when you run this command, it can help to
 *             visualize the relationship of the entities involved. </p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <code>AWS Account</code> - The AWS account exists at the top of the hierarchy.
 *                     It has the potential to use all of the AWS Regions and AWS Services. When you
 *                     subscribe to QuickSight, you choose one AWS Region to use as your home Region.
 *                     That's where your free SPICE capacity is located. You can use QuickSight in any
 *                     supported AWS Region. </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>AWS Region</code> - In each AWS Region where you sign in to QuickSight
 *                     at least once, QuickSight acts as a separate instance of the same service. If
 *                     you have a user directory, it resides in us-east-1, which is the US East (N.
 *                     Virginia). Generally speaking, these users have access to QuickSight in any AWS
 *                     Region, unless they are constrained to a namespace. </p>
 *                 <p>To run the command in a different AWS Region, you change your Region settings.
 *                     If you're using the AWS CLI, you can use one of the following options:</p>
 *                 <ul>
 *                   <li>
 *                         <p>Use <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-options.html">command line options</a>. </p>
 *                     </li>
 *                   <li>
 *                         <p>Use <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html">named profiles</a>. </p>
 *                     </li>
 *                   <li>
 *                         <p>Run <code>aws configure</code> to change your default AWS Region. Use
 *                             Enter to key the same settings for your keys. For more information, see
 *                             <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html">Configuring the AWS CLI</a>.</p>
 *                     </li>
 *                </ul>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>Namespace</code> - A QuickSight namespace is a partition that contains
 *                     users and assets (data sources, datasets, dashboards, and so on). To access
 *                     assets that are in a specific namespace, users and groups must also be part of
 *                     the same namespace. People who share a namespace are completely isolated from
 *                     users and assets in other namespaces, even if they are in the same AWS account
 *                     and AWS Region.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>Applied customizations</code> -  Within an AWS Region, a set of
 *                     QuickSight customizations can apply to an AWS account or to a namespace.
 *                     Settings that you apply to a namespace override settings that you apply to an
 *                     AWS account. All settings are isolated to a single AWS Region. To apply them in
 *                     other AWS Regions, run the <code>CreateAccountCustomization</code> command in
 *                     each AWS Region where you want to apply the same customizations. </p>
 *             </li>
 *          </ul>
 */
export class DescribeAccountCustomizationCommand extends $Command<
  DescribeAccountCustomizationCommandInput,
  DescribeAccountCustomizationCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "DescribeAccountCustomizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAccountCustomizationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAccountCustomizationResponse.filterSensitiveLog,
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
