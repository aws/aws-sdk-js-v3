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

import { DescribeAccountLimitsRequest, DescribeAccountLimitsResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { de_DescribeAccountLimitsCommand, se_DescribeAccountLimitsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAccountLimitsCommand}.
 */
export interface DescribeAccountLimitsCommandInput extends DescribeAccountLimitsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAccountLimitsCommand}.
 */
export interface DescribeAccountLimitsCommandOutput extends DescribeAccountLimitsResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes the current Amazon Pinpoint SMS Voice V2 resource quotas for your
 *             account. The description for a quota includes the quota name, current usage toward that
 *             quota, and the quota's maximum value.</p>
 *         <p>When you establish an Amazon Web Services account, the account has initial quotas on
 *             the maximum number of configuration sets, opt-out lists, phone numbers, and pools that
 *             you can create in a given Region. For more information see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/quotas.html">
 *                 Amazon Pinpoint quotas </a> in the <i>Amazon Pinpoint Developer
 *                 Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DescribeAccountLimitsCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DescribeAccountLimitsCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // DescribeAccountLimitsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeAccountLimitsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAccountLimitsResult
 * //   AccountLimits: [ // AccountLimitList
 * //     { // AccountLimit
 * //       Name: "STRING_VALUE", // required
 * //       Used: Number("long"), // required
 * //       Max: Number("long"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAccountLimitsCommandInput - {@link DescribeAccountLimitsCommandInput}
 * @returns {@link DescribeAccountLimitsCommandOutput}
 * @see {@link DescribeAccountLimitsCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountLimitsCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient permissions to access the
 *             resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The API encountered an unexpected error and couldn't complete the request. You might
 *             be able to successfully issue the request again in the future.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An error that occurred because too many requests were sent during a certain amount of
 *             time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A validation exception for a field.</p>
 *
 * @throws {@link PinpointSMSVoiceV2ServiceException}
 * <p>Base exception class for all service exceptions from PinpointSMSVoiceV2 service.</p>
 *
 */
export class DescribeAccountLimitsCommand extends $Command<
  DescribeAccountLimitsCommandInput,
  DescribeAccountLimitsCommandOutput,
  PinpointSMSVoiceV2ClientResolvedConfig
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
  constructor(readonly input: DescribeAccountLimitsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointSMSVoiceV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAccountLimitsCommandInput, DescribeAccountLimitsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAccountLimitsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointSMSVoiceV2Client";
    const commandName = "DescribeAccountLimitsCommand";
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
  private serialize(input: DescribeAccountLimitsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAccountLimitsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAccountLimitsCommandOutput> {
    return de_DescribeAccountLimitsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
