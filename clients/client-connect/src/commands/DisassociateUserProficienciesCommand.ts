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
import { DisassociateUserProficienciesRequest } from "../models/models_1";
import {
  de_DisassociateUserProficienciesCommand,
  se_DisassociateUserProficienciesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisassociateUserProficienciesCommand}.
 */
export interface DisassociateUserProficienciesCommandInput extends DisassociateUserProficienciesRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateUserProficienciesCommand}.
 */
export interface DisassociateUserProficienciesCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Disassociates a set of proficiencies from a user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DisassociateUserProficienciesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DisassociateUserProficienciesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // DisassociateUserProficienciesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE", // required
 *   UserProficiencies: [ // UserProficiencyDisassociateList // required
 *     { // UserProficiencyDisassociate
 *       AttributeName: "STRING_VALUE", // required
 *       AttributeValue: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new DisassociateUserProficienciesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateUserProficienciesCommandInput - {@link DisassociateUserProficienciesCommandInput}
 * @returns {@link DisassociateUserProficienciesCommandOutput}
 * @see {@link DisassociateUserProficienciesCommandInput} for command's `input` shape.
 * @see {@link DisassociateUserProficienciesCommandOutput} for command's `response` shape.
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
export class DisassociateUserProficienciesCommand extends $Command<
  DisassociateUserProficienciesCommandInput,
  DisassociateUserProficienciesCommandOutput,
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
  constructor(readonly input: DisassociateUserProficienciesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateUserProficienciesCommandInput, DisassociateUserProficienciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateUserProficienciesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "DisassociateUserProficienciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectService",
        operation: "DisassociateUserProficiencies",
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
  private serialize(input: DisassociateUserProficienciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DisassociateUserProficienciesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateUserProficienciesCommandOutput> {
    return de_DisassociateUserProficienciesCommand(output, context);
  }
}
