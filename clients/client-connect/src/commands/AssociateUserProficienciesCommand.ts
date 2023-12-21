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
import { AssociateUserProficienciesRequest } from "../models/models_0";
import { de_AssociateUserProficienciesCommand, se_AssociateUserProficienciesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociateUserProficienciesCommand}.
 */
export interface AssociateUserProficienciesCommandInput extends AssociateUserProficienciesRequest {}
/**
 * @public
 *
 * The output of {@link AssociateUserProficienciesCommand}.
 */
export interface AssociateUserProficienciesCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>>Associates a set of proficiencies with a user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, AssociateUserProficienciesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, AssociateUserProficienciesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // AssociateUserProficienciesRequest
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
 * const command = new AssociateUserProficienciesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateUserProficienciesCommandInput - {@link AssociateUserProficienciesCommandInput}
 * @returns {@link AssociateUserProficienciesCommandOutput}
 * @see {@link AssociateUserProficienciesCommandInput} for command's `input` shape.
 * @see {@link AssociateUserProficienciesCommandOutput} for command's `response` shape.
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
export class AssociateUserProficienciesCommand extends $Command<
  AssociateUserProficienciesCommandInput,
  AssociateUserProficienciesCommandOutput,
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
  constructor(readonly input: AssociateUserProficienciesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateUserProficienciesCommandInput, AssociateUserProficienciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateUserProficienciesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "AssociateUserProficienciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectService",
        operation: "AssociateUserProficiencies",
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
  private serialize(input: AssociateUserProficienciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AssociateUserProficienciesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateUserProficienciesCommandOutput> {
    return de_AssociateUserProficienciesCommand(output, context);
  }
}
