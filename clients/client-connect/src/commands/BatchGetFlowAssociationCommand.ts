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
import { BatchGetFlowAssociationRequest, BatchGetFlowAssociationResponse } from "../models/models_0";
import { de_BatchGetFlowAssociationCommand, se_BatchGetFlowAssociationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchGetFlowAssociationCommand}.
 */
export interface BatchGetFlowAssociationCommandInput extends BatchGetFlowAssociationRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetFlowAssociationCommand}.
 */
export interface BatchGetFlowAssociationCommandOutput extends BatchGetFlowAssociationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieve the flow associations for the given resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, BatchGetFlowAssociationCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, BatchGetFlowAssociationCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // BatchGetFlowAssociationRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ResourceIds: [ // resourceArnListMaxLimit100 // required
 *     "STRING_VALUE",
 *   ],
 *   ResourceType: "VOICE_PHONE_NUMBER",
 * };
 * const command = new BatchGetFlowAssociationCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetFlowAssociationResponse
 * //   FlowAssociationSummaryList: [ // FlowAssociationSummaryList
 * //     { // FlowAssociationSummary
 * //       ResourceId: "STRING_VALUE",
 * //       FlowId: "STRING_VALUE",
 * //       ResourceType: "VOICE_PHONE_NUMBER",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetFlowAssociationCommandInput - {@link BatchGetFlowAssociationCommandInput}
 * @returns {@link BatchGetFlowAssociationCommandOutput}
 * @see {@link BatchGetFlowAssociationCommandInput} for command's `input` shape.
 * @see {@link BatchGetFlowAssociationCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
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
export class BatchGetFlowAssociationCommand extends $Command<
  BatchGetFlowAssociationCommandInput,
  BatchGetFlowAssociationCommandOutput,
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
  constructor(readonly input: BatchGetFlowAssociationCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetFlowAssociationCommandInput, BatchGetFlowAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetFlowAssociationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "BatchGetFlowAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectService",
        operation: "BatchGetFlowAssociation",
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
  private serialize(input: BatchGetFlowAssociationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchGetFlowAssociationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetFlowAssociationCommandOutput> {
    return de_BatchGetFlowAssociationCommand(output, context);
  }
}
