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

import { DescribeAccountSubscriptionRequest, DescribeAccountSubscriptionResponse } from "../models/models_3";
import {
  de_DescribeAccountSubscriptionCommand,
  se_DescribeAccountSubscriptionCommand,
} from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAccountSubscriptionCommand}.
 */
export interface DescribeAccountSubscriptionCommandInput extends DescribeAccountSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAccountSubscriptionCommand}.
 */
export interface DescribeAccountSubscriptionCommandOutput
  extends DescribeAccountSubscriptionResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Use the DescribeAccountSubscription operation to receive a description of an Amazon QuickSight account's subscription. A successful API call returns an <code>AccountInfo</code> object that includes an account's name, subscription status, authentication type, edition, and notification email address.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeAccountSubscriptionCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeAccountSubscriptionCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // DescribeAccountSubscriptionRequest
 *   AwsAccountId: "STRING_VALUE", // required
 * };
 * const command = new DescribeAccountSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAccountSubscriptionResponse
 * //   AccountInfo: { // AccountInfo
 * //     AccountName: "STRING_VALUE",
 * //     Edition: "STANDARD" || "ENTERPRISE" || "ENTERPRISE_AND_Q",
 * //     NotificationEmail: "STRING_VALUE",
 * //     AuthenticationType: "STRING_VALUE",
 * //     AccountSubscriptionStatus: "STRING_VALUE",
 * //     IAMIdentityCenterInstanceArn: "STRING_VALUE",
 * //   },
 * //   Status: Number("int"),
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAccountSubscriptionCommandInput - {@link DescribeAccountSubscriptionCommandInput}
 * @returns {@link DescribeAccountSubscriptionCommandOutput}
 * @see {@link DescribeAccountSubscriptionCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountSubscriptionCommandOutput} for command's `response` shape.
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
export class DescribeAccountSubscriptionCommand extends $Command<
  DescribeAccountSubscriptionCommandInput,
  DescribeAccountSubscriptionCommandOutput,
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
  constructor(readonly input: DescribeAccountSubscriptionCommandInput) {
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
  ): Handler<DescribeAccountSubscriptionCommandInput, DescribeAccountSubscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAccountSubscriptionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "DescribeAccountSubscriptionCommand";
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
  private serialize(input: DescribeAccountSubscriptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAccountSubscriptionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAccountSubscriptionCommandOutput> {
    return de_DescribeAccountSubscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
