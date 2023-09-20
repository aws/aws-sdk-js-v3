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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { DescribePoolsRequest, DescribePoolsResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { de_DescribePoolsCommand, se_DescribePoolsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribePoolsCommand}.
 */
export interface DescribePoolsCommandInput extends DescribePoolsRequest {}
/**
 * @public
 *
 * The output of {@link DescribePoolsCommand}.
 */
export interface DescribePoolsCommandOutput extends DescribePoolsResult, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the specified pools or all pools associated with your Amazon Web Services
 *             account.</p>
 *         <p>If you specify pool IDs, the output includes information for only the specified pools.
 *             If you specify filters, the output includes information for only those pools that meet
 *             the filter criteria. If you don't specify pool IDs or filters, the output includes
 *             information for all pools.</p>
 *         <p>If you specify a pool ID that isn't valid, an Error is returned.</p>
 *         <p>A pool is a collection of phone numbers and SenderIds. A pool can include one or more
 *             phone numbers and SenderIds that are associated with your Amazon Web Services
 *             account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DescribePoolsCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DescribePoolsCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // DescribePoolsRequest
 *   PoolIds: [ // PoolIdList
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // PoolFilterList
 *     { // PoolFilter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribePoolsCommand(input);
 * const response = await client.send(command);
 * // { // DescribePoolsResult
 * //   Pools: [ // PoolInformationList
 * //     { // PoolInformation
 * //       PoolArn: "STRING_VALUE", // required
 * //       PoolId: "STRING_VALUE", // required
 * //       Status: "STRING_VALUE", // required
 * //       MessageType: "STRING_VALUE", // required
 * //       TwoWayEnabled: true || false, // required
 * //       TwoWayChannelArn: "STRING_VALUE",
 * //       SelfManagedOptOutsEnabled: true || false, // required
 * //       OptOutListName: "STRING_VALUE", // required
 * //       SharedRoutesEnabled: true || false, // required
 * //       DeletionProtectionEnabled: true || false, // required
 * //       CreatedTimestamp: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribePoolsCommandInput - {@link DescribePoolsCommandInput}
 * @returns {@link DescribePoolsCommandOutput}
 * @see {@link DescribePoolsCommandInput} for command's `input` shape.
 * @see {@link DescribePoolsCommandOutput} for command's `response` shape.
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
 * @throws {@link PinpointSMSVoiceV2ServiceException}
 * <p>Base exception class for all service exceptions from PinpointSMSVoiceV2 service.</p>
 *
 */
export class DescribePoolsCommand extends $Command<
  DescribePoolsCommandInput,
  DescribePoolsCommandOutput,
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
  constructor(readonly input: DescribePoolsCommandInput) {
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
  ): Handler<DescribePoolsCommandInput, DescribePoolsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribePoolsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointSMSVoiceV2Client";
    const commandName = "DescribePoolsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "PinpointSMSVoiceV2",
        operation: "DescribePools",
      },
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
  private serialize(input: DescribePoolsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribePoolsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribePoolsCommandOutput> {
    return de_DescribePoolsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
