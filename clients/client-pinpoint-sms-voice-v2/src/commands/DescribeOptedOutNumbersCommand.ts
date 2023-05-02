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

import { DescribeOptedOutNumbersRequest, DescribeOptedOutNumbersResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { de_DescribeOptedOutNumbersCommand, se_DescribeOptedOutNumbersCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 *
 * The input for {@link DescribeOptedOutNumbersCommand}.
 */
export interface DescribeOptedOutNumbersCommandInput extends DescribeOptedOutNumbersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeOptedOutNumbersCommand}.
 */
export interface DescribeOptedOutNumbersCommandOutput extends DescribeOptedOutNumbersResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified opted out destination numbers or all opted out destination
 *             numbers in an opt-out list.</p>
 *         <p>If you specify opted out numbers, the output includes information for only the
 *             specified opted out numbers. If you specify filters, the output includes information for
 *             only those opted out numbers that meet the filter criteria. If you don't specify opted
 *             out numbers or filters, the output includes information for all opted out destination
 *             numbers in your opt-out list.</p>
 *         <p>If you specify an opted out number that isn't valid, an Error is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DescribeOptedOutNumbersCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DescribeOptedOutNumbersCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // DescribeOptedOutNumbersRequest
 *   OptOutListName: "STRING_VALUE", // required
 *   OptedOutNumbers: [ // OptedOutNumberList
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // OptedOutFilterList
 *     { // OptedOutFilter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeOptedOutNumbersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeOptedOutNumbersCommandInput - {@link DescribeOptedOutNumbersCommandInput}
 * @returns {@link DescribeOptedOutNumbersCommandOutput}
 * @see {@link DescribeOptedOutNumbersCommandInput} for command's `input` shape.
 * @see {@link DescribeOptedOutNumbersCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource couldn't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An error that occurred because too many requests were sent during a certain amount of
 *             time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A validation exception for a field.</p>
 *
 *
 */
export class DescribeOptedOutNumbersCommand extends $Command<
  DescribeOptedOutNumbersCommandInput,
  DescribeOptedOutNumbersCommandOutput,
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
  constructor(readonly input: DescribeOptedOutNumbersCommandInput) {
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
  ): Handler<DescribeOptedOutNumbersCommandInput, DescribeOptedOutNumbersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeOptedOutNumbersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointSMSVoiceV2Client";
    const commandName = "DescribeOptedOutNumbersCommand";
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
  private serialize(input: DescribeOptedOutNumbersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeOptedOutNumbersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeOptedOutNumbersCommandOutput> {
    return de_DescribeOptedOutNumbersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
