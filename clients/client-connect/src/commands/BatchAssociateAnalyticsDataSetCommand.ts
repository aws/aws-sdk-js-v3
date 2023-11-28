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
import { BatchAssociateAnalyticsDataSetRequest, BatchAssociateAnalyticsDataSetResponse } from "../models/models_0";
import {
  de_BatchAssociateAnalyticsDataSetCommand,
  se_BatchAssociateAnalyticsDataSetCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchAssociateAnalyticsDataSetCommand}.
 */
export interface BatchAssociateAnalyticsDataSetCommandInput extends BatchAssociateAnalyticsDataSetRequest {}
/**
 * @public
 *
 * The output of {@link BatchAssociateAnalyticsDataSetCommand}.
 */
export interface BatchAssociateAnalyticsDataSetCommandOutput
  extends BatchAssociateAnalyticsDataSetResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Associates a list of analytics datasets for a given Amazon Connect instance to a target account. You can
 *    associate multiple datasets in a single call.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, BatchAssociateAnalyticsDataSetCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, BatchAssociateAnalyticsDataSetCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // BatchAssociateAnalyticsDataSetRequest
 *   InstanceId: "STRING_VALUE", // required
 *   DataSetIds: [ // DataSetIds // required
 *     "STRING_VALUE",
 *   ],
 *   TargetAccountId: "STRING_VALUE",
 * };
 * const command = new BatchAssociateAnalyticsDataSetCommand(input);
 * const response = await client.send(command);
 * // { // BatchAssociateAnalyticsDataSetResponse
 * //   Created: [ // AnalyticsDataAssociationResults
 * //     { // AnalyticsDataAssociationResult
 * //       DataSetId: "STRING_VALUE",
 * //       TargetAccountId: "STRING_VALUE",
 * //       ResourceShareId: "STRING_VALUE",
 * //       ResourceShareArn: "STRING_VALUE",
 * //     },
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
 * @param BatchAssociateAnalyticsDataSetCommandInput - {@link BatchAssociateAnalyticsDataSetCommandInput}
 * @returns {@link BatchAssociateAnalyticsDataSetCommandOutput}
 * @see {@link BatchAssociateAnalyticsDataSetCommandInput} for command's `input` shape.
 * @see {@link BatchAssociateAnalyticsDataSetCommandOutput} for command's `response` shape.
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
export class BatchAssociateAnalyticsDataSetCommand extends $Command<
  BatchAssociateAnalyticsDataSetCommandInput,
  BatchAssociateAnalyticsDataSetCommandOutput,
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
  constructor(readonly input: BatchAssociateAnalyticsDataSetCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchAssociateAnalyticsDataSetCommandInput, BatchAssociateAnalyticsDataSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchAssociateAnalyticsDataSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "BatchAssociateAnalyticsDataSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectService",
        operation: "BatchAssociateAnalyticsDataSet",
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
    input: BatchAssociateAnalyticsDataSetCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_BatchAssociateAnalyticsDataSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchAssociateAnalyticsDataSetCommandOutput> {
    return de_BatchAssociateAnalyticsDataSetCommand(output, context);
  }
}
