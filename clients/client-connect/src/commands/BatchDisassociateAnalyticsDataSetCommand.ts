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
import {
  BatchDisassociateAnalyticsDataSetRequest,
  BatchDisassociateAnalyticsDataSetResponse,
} from "../models/models_0";
import {
  de_BatchDisassociateAnalyticsDataSetCommand,
  se_BatchDisassociateAnalyticsDataSetCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchDisassociateAnalyticsDataSetCommand}.
 */
export interface BatchDisassociateAnalyticsDataSetCommandInput extends BatchDisassociateAnalyticsDataSetRequest {}
/**
 * @public
 *
 * The output of {@link BatchDisassociateAnalyticsDataSetCommand}.
 */
export interface BatchDisassociateAnalyticsDataSetCommandOutput
  extends BatchDisassociateAnalyticsDataSetResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Removes a list of analytics datasets associated with a given Amazon Connect instance.
 *    You can disassociate multiple datasets in a single call.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, BatchDisassociateAnalyticsDataSetCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, BatchDisassociateAnalyticsDataSetCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // BatchDisassociateAnalyticsDataSetRequest
 *   InstanceId: "STRING_VALUE", // required
 *   DataSetIds: [ // DataSetIds // required
 *     "STRING_VALUE",
 *   ],
 *   TargetAccountId: "STRING_VALUE",
 * };
 * const command = new BatchDisassociateAnalyticsDataSetCommand(input);
 * const response = await client.send(command);
 * // { // BatchDisassociateAnalyticsDataSetResponse
 * //   Deleted: [ // DataSetIds
 * //     "STRING_VALUE",
 * //   ],
 * //   Errors: [ // ErrorResults
 * //     { // ErrorResult
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDisassociateAnalyticsDataSetCommandInput - {@link BatchDisassociateAnalyticsDataSetCommandInput}
 * @returns {@link BatchDisassociateAnalyticsDataSetCommandOutput}
 * @see {@link BatchDisassociateAnalyticsDataSetCommandInput} for command's `input` shape.
 * @see {@link BatchDisassociateAnalyticsDataSetCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 */
export class BatchDisassociateAnalyticsDataSetCommand extends $Command<
  BatchDisassociateAnalyticsDataSetCommandInput,
  BatchDisassociateAnalyticsDataSetCommandOutput,
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
  constructor(readonly input: BatchDisassociateAnalyticsDataSetCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchDisassociateAnalyticsDataSetCommandInput, BatchDisassociateAnalyticsDataSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchDisassociateAnalyticsDataSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "BatchDisassociateAnalyticsDataSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectService",
        operation: "BatchDisassociateAnalyticsDataSet",
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
  private serialize(
    input: BatchDisassociateAnalyticsDataSetCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_BatchDisassociateAnalyticsDataSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchDisassociateAnalyticsDataSetCommandOutput> {
    return de_BatchDisassociateAnalyticsDataSetCommand(output, context);
  }
}
