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
import { AssociateAnalyticsDataSetRequest, AssociateAnalyticsDataSetResponse } from "../models/models_0";
import { de_AssociateAnalyticsDataSetCommand, se_AssociateAnalyticsDataSetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociateAnalyticsDataSetCommand}.
 */
export interface AssociateAnalyticsDataSetCommandInput extends AssociateAnalyticsDataSetRequest {}
/**
 * @public
 *
 * The output of {@link AssociateAnalyticsDataSetCommand}.
 */
export interface AssociateAnalyticsDataSetCommandOutput extends AssociateAnalyticsDataSetResponse, __MetadataBearer {}

/**
 * @public
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Associates the specified dataset for a Amazon Connect instance with the target account.
 *    You can associate only one dataset in a single call.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, AssociateAnalyticsDataSetCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, AssociateAnalyticsDataSetCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // AssociateAnalyticsDataSetRequest
 *   InstanceId: "STRING_VALUE", // required
 *   DataSetId: "STRING_VALUE", // required
 *   TargetAccountId: "STRING_VALUE",
 * };
 * const command = new AssociateAnalyticsDataSetCommand(input);
 * const response = await client.send(command);
 * // { // AssociateAnalyticsDataSetResponse
 * //   DataSetId: "STRING_VALUE",
 * //   TargetAccountId: "STRING_VALUE",
 * //   ResourceShareId: "STRING_VALUE",
 * //   ResourceShareArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateAnalyticsDataSetCommandInput - {@link AssociateAnalyticsDataSetCommandInput}
 * @returns {@link AssociateAnalyticsDataSetCommandOutput}
 * @see {@link AssociateAnalyticsDataSetCommandInput} for command's `input` shape.
 * @see {@link AssociateAnalyticsDataSetCommandOutput} for command's `response` shape.
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
export class AssociateAnalyticsDataSetCommand extends $Command<
  AssociateAnalyticsDataSetCommandInput,
  AssociateAnalyticsDataSetCommandOutput,
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
  constructor(readonly input: AssociateAnalyticsDataSetCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateAnalyticsDataSetCommandInput, AssociateAnalyticsDataSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateAnalyticsDataSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "AssociateAnalyticsDataSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectService",
        operation: "AssociateAnalyticsDataSet",
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
  private serialize(input: AssociateAnalyticsDataSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AssociateAnalyticsDataSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateAnalyticsDataSetCommandOutput> {
    return de_AssociateAnalyticsDataSetCommand(output, context);
  }
}
