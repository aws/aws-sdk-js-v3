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
import { UpdateUserProficienciesRequest } from "../models/models_2";
import { de_UpdateUserProficienciesCommand, se_UpdateUserProficienciesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateUserProficienciesCommand}.
 */
export interface UpdateUserProficienciesCommandInput extends UpdateUserProficienciesRequest {}
/**
 * @public
 *
 * The output of {@link UpdateUserProficienciesCommand}.
 */
export interface UpdateUserProficienciesCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Updates the properties associated with the proficiencies of a user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateUserProficienciesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateUserProficienciesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // UpdateUserProficienciesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE", // required
 *   UserProficiencies: [ // UserProficiencyList // required
 *     { // UserProficiency
 *       AttributeName: "STRING_VALUE", // required
 *       AttributeValue: "STRING_VALUE", // required
 *       Level: Number("float"), // required
 *     },
 *   ],
 * };
 * const command = new UpdateUserProficienciesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateUserProficienciesCommandInput - {@link UpdateUserProficienciesCommandInput}
 * @returns {@link UpdateUserProficienciesCommandOutput}
 * @see {@link UpdateUserProficienciesCommandInput} for command's `input` shape.
 * @see {@link UpdateUserProficienciesCommandOutput} for command's `response` shape.
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
export class UpdateUserProficienciesCommand extends $Command<
  UpdateUserProficienciesCommandInput,
  UpdateUserProficienciesCommandOutput,
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
  constructor(readonly input: UpdateUserProficienciesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateUserProficienciesCommandInput, UpdateUserProficienciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateUserProficienciesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "UpdateUserProficienciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectService",
        operation: "UpdateUserProficiencies",
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
  private serialize(input: UpdateUserProficienciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateUserProficienciesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateUserProficienciesCommandOutput> {
    return de_UpdateUserProficienciesCommand(output, context);
  }
}
