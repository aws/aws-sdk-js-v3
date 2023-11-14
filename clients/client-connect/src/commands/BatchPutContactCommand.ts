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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { BatchPutContactRequest, BatchPutContactResponse } from "../models/models_0";
import { de_BatchPutContactCommand, se_BatchPutContactCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchPutContactCommand}.
 */
export interface BatchPutContactCommandInput extends BatchPutContactRequest {}
/**
 * @public
 *
 * The output of {@link BatchPutContactCommand}.
 */
export interface BatchPutContactCommandOutput extends BatchPutContactResponse, __MetadataBearer {}

/**
 * @public
 * <note>
 *             <p>Only the Amazon Connect outbound campaigns service principal is allowed to assume a
 *     role in your account and call this API.</p>
 *          </note>
 *          <p>Allows you to create a batch of contacts in Amazon Connect. The outbound campaigns
 *    capability ingests dial requests via the <a href="https://docs.aws.amazon.com/connect-outbound/latest/APIReference/API_PutDialRequestBatch.html">PutDialRequestBatch</a>
 *    API. It then uses BatchPutContact to create contacts corresponding to those
 *    dial requests. If agents are available, the dial requests are dialed out, which results in a
 *    voice call. The resulting voice call uses the same contactId that was created by BatchPutContact.
 *   </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, BatchPutContactCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, BatchPutContactCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // BatchPutContactRequest
 *   ClientToken: "STRING_VALUE",
 *   InstanceId: "STRING_VALUE", // required
 *   ContactDataRequestList: [ // ContactDataRequestList // required
 *     { // ContactDataRequest
 *       SystemEndpoint: { // Endpoint
 *         Type: "TELEPHONE_NUMBER" || "VOIP" || "CONTACT_FLOW",
 *         Address: "STRING_VALUE",
 *       },
 *       CustomerEndpoint: {
 *         Type: "TELEPHONE_NUMBER" || "VOIP" || "CONTACT_FLOW",
 *         Address: "STRING_VALUE",
 *       },
 *       RequestIdentifier: "STRING_VALUE",
 *       QueueId: "STRING_VALUE",
 *       Attributes: { // Attributes
 *         "<keys>": "STRING_VALUE",
 *       },
 *       Campaign: { // Campaign
 *         CampaignId: "STRING_VALUE",
 *       },
 *     },
 *   ],
 * };
 * const command = new BatchPutContactCommand(input);
 * const response = await client.send(command);
 * // { // BatchPutContactResponse
 * //   SuccessfulRequestList: [ // SuccessfulRequestList
 * //     { // SuccessfulRequest
 * //       RequestIdentifier: "STRING_VALUE",
 * //       ContactId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   FailedRequestList: [ // FailedRequestList
 * //     { // FailedRequest
 * //       RequestIdentifier: "STRING_VALUE",
 * //       FailureReasonCode: "INVALID_ATTRIBUTE_KEY" || "INVALID_CUSTOMER_ENDPOINT" || "INVALID_SYSTEM_ENDPOINT" || "INVALID_QUEUE" || "MISSING_CAMPAIGN" || "MISSING_CUSTOMER_ENDPOINT" || "MISSING_QUEUE_ID_AND_SYSTEM_ENDPOINT" || "REQUEST_THROTTLED" || "IDEMPOTENCY_EXCEPTION" || "INTERNAL_ERROR",
 * //       FailureReasonMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchPutContactCommandInput - {@link BatchPutContactCommandInput}
 * @returns {@link BatchPutContactCommandOutput}
 * @see {@link BatchPutContactCommandInput} for command's `input` shape.
 * @see {@link BatchPutContactCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link IdempotencyException} (client fault)
 *  <p>An entity with the same name already exists.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The allowed limit for the resource has been exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 */
export class BatchPutContactCommand extends $Command<
  BatchPutContactCommandInput,
  BatchPutContactCommandOutput,
  ConnectClientResolvedConfig
> {
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
  constructor(readonly input: BatchPutContactCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchPutContactCommandInput, BatchPutContactCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchPutContactCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "BatchPutContactCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectService",
        operation: "BatchPutContact",
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
  private serialize(input: BatchPutContactCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchPutContactCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchPutContactCommandOutput> {
    return de_BatchPutContactCommand(output, context);
  }
}
