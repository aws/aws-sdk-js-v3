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
import { UpdatePredefinedAttributeRequest } from "../models/models_2";
import { de_UpdatePredefinedAttributeCommand, se_UpdatePredefinedAttributeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdatePredefinedAttributeCommand}.
 */
export interface UpdatePredefinedAttributeCommandInput extends UpdatePredefinedAttributeRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePredefinedAttributeCommand}.
 */
export interface UpdatePredefinedAttributeCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Updates a predefined attribute for the specified Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdatePredefinedAttributeCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdatePredefinedAttributeCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // UpdatePredefinedAttributeRequest
 *   InstanceId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Values: { // PredefinedAttributeValues Union: only one key present
 *     StringList: [ // PredefinedAttributeStringValuesList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new UpdatePredefinedAttributeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdatePredefinedAttributeCommandInput - {@link UpdatePredefinedAttributeCommandInput}
 * @returns {@link UpdatePredefinedAttributeCommandOutput}
 * @see {@link UpdatePredefinedAttributeCommandInput} for command's `input` shape.
 * @see {@link UpdatePredefinedAttributeCommandOutput} for command's `response` shape.
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
export class UpdatePredefinedAttributeCommand extends $Command<
  UpdatePredefinedAttributeCommandInput,
  UpdatePredefinedAttributeCommandOutput,
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
  constructor(readonly input: UpdatePredefinedAttributeCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdatePredefinedAttributeCommandInput, UpdatePredefinedAttributeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdatePredefinedAttributeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "UpdatePredefinedAttributeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectService",
        operation: "UpdatePredefinedAttribute",
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
  private serialize(input: UpdatePredefinedAttributeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdatePredefinedAttributeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdatePredefinedAttributeCommandOutput> {
    return de_UpdatePredefinedAttributeCommand(output, context);
  }
}
