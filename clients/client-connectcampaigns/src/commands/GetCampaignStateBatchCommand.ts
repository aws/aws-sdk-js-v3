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

import { ConnectCampaignsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCampaignsClient";
import { GetCampaignStateBatchRequest, GetCampaignStateBatchResponse } from "../models/models_0";
import { de_GetCampaignStateBatchCommand, se_GetCampaignStateBatchCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetCampaignStateBatchCommand}.
 */
export interface GetCampaignStateBatchCommandInput extends GetCampaignStateBatchRequest {}
/**
 * @public
 *
 * The output of {@link GetCampaignStateBatchCommand}.
 */
export interface GetCampaignStateBatchCommandOutput extends GetCampaignStateBatchResponse, __MetadataBearer {}

/**
 * @public
 * Get state of campaigns for the specified Amazon Connect account.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCampaignsClient, GetCampaignStateBatchCommand } from "@aws-sdk/client-connectcampaigns"; // ES Modules import
 * // const { ConnectCampaignsClient, GetCampaignStateBatchCommand } = require("@aws-sdk/client-connectcampaigns"); // CommonJS import
 * const client = new ConnectCampaignsClient(config);
 * const input = { // GetCampaignStateBatchRequest
 *   campaignIds: [ // CampaignIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetCampaignStateBatchCommand(input);
 * const response = await client.send(command);
 * // { // GetCampaignStateBatchResponse
 * //   successfulRequests: [ // SuccessfulCampaignStateResponseList
 * //     { // SuccessfulCampaignStateResponse
 * //       campaignId: "STRING_VALUE",
 * //       state: "STRING_VALUE",
 * //     },
 * //   ],
 * //   failedRequests: [ // FailedCampaignStateResponseList
 * //     { // FailedCampaignStateResponse
 * //       campaignId: "STRING_VALUE",
 * //       failureCode: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetCampaignStateBatchCommandInput - {@link GetCampaignStateBatchCommandInput}
 * @returns {@link GetCampaignStateBatchCommandOutput}
 * @see {@link GetCampaignStateBatchCommandInput} for command's `input` shape.
 * @see {@link GetCampaignStateBatchCommandOutput} for command's `response` shape.
 * @see {@link ConnectCampaignsClientResolvedConfig | config} for ConnectCampaignsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  Request processing failed because of an error or failure with the service.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *  The input fails to satisfy the constraints specified by an AWS service.
 *
 * @throws {@link ConnectCampaignsServiceException}
 * <p>Base exception class for all service exceptions from ConnectCampaigns service.</p>
 *
 */
export class GetCampaignStateBatchCommand extends $Command<
  GetCampaignStateBatchCommandInput,
  GetCampaignStateBatchCommandOutput,
  ConnectCampaignsClientResolvedConfig
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
  constructor(readonly input: GetCampaignStateBatchCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectCampaignsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCampaignStateBatchCommandInput, GetCampaignStateBatchCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCampaignStateBatchCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectCampaignsClient";
    const commandName = "GetCampaignStateBatchCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectCampaignService",
        operation: "GetCampaignStateBatch",
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
  private serialize(input: GetCampaignStateBatchCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetCampaignStateBatchCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCampaignStateBatchCommandOutput> {
    return de_GetCampaignStateBatchCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
