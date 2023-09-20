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
import {
  PutDialRequestBatchRequest,
  PutDialRequestBatchRequestFilterSensitiveLog,
  PutDialRequestBatchResponse,
} from "../models/models_0";
import { de_PutDialRequestBatchCommand, se_PutDialRequestBatchCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutDialRequestBatchCommand}.
 */
export interface PutDialRequestBatchCommandInput extends PutDialRequestBatchRequest {}
/**
 * @public
 *
 * The output of {@link PutDialRequestBatchCommand}.
 */
export interface PutDialRequestBatchCommandOutput extends PutDialRequestBatchResponse, __MetadataBearer {}

/**
 * @public
 * Creates dials requests for the specified campaign Amazon Connect account. This API is idempotent.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCampaignsClient, PutDialRequestBatchCommand } from "@aws-sdk/client-connectcampaigns"; // ES Modules import
 * // const { ConnectCampaignsClient, PutDialRequestBatchCommand } = require("@aws-sdk/client-connectcampaigns"); // CommonJS import
 * const client = new ConnectCampaignsClient(config);
 * const input = { // PutDialRequestBatchRequest
 *   id: "STRING_VALUE", // required
 *   dialRequests: [ // DialRequestList // required
 *     { // DialRequest
 *       clientToken: "STRING_VALUE", // required
 *       phoneNumber: "STRING_VALUE", // required
 *       expirationTime: new Date("TIMESTAMP"), // required
 *       attributes: { // Attributes // required
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 * };
 * const command = new PutDialRequestBatchCommand(input);
 * const response = await client.send(command);
 * // { // PutDialRequestBatchResponse
 * //   successfulRequests: [ // SuccessfulRequestList
 * //     { // SuccessfulRequest
 * //       clientToken: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //     },
 * //   ],
 * //   failedRequests: [ // FailedRequestList
 * //     { // FailedRequest
 * //       clientToken: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       failureCode: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PutDialRequestBatchCommandInput - {@link PutDialRequestBatchCommandInput}
 * @returns {@link PutDialRequestBatchCommandOutput}
 * @see {@link PutDialRequestBatchCommandInput} for command's `input` shape.
 * @see {@link PutDialRequestBatchCommandOutput} for command's `response` shape.
 * @see {@link ConnectCampaignsClientResolvedConfig | config} for ConnectCampaignsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *  The request could not be processed because of conflict in the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *  Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidCampaignStateException} (client fault)
 *  The request could not be processed because of conflict in the current state of the campaign.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The specified resource was not found.
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
export class PutDialRequestBatchCommand extends $Command<
  PutDialRequestBatchCommandInput,
  PutDialRequestBatchCommandOutput,
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
  constructor(readonly input: PutDialRequestBatchCommandInput) {
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
  ): Handler<PutDialRequestBatchCommandInput, PutDialRequestBatchCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutDialRequestBatchCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectCampaignsClient";
    const commandName = "PutDialRequestBatchCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutDialRequestBatchRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectCampaignService",
        operation: "PutDialRequestBatch",
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
  private serialize(input: PutDialRequestBatchCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutDialRequestBatchCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutDialRequestBatchCommandOutput> {
    return de_PutDialRequestBatchCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
