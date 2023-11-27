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

import { ControlTowerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ControlTowerClient";
import { DeleteLandingZoneInput, DeleteLandingZoneOutput } from "../models/models_0";
import { de_DeleteLandingZoneCommand, se_DeleteLandingZoneCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteLandingZoneCommand}.
 */
export interface DeleteLandingZoneCommandInput extends DeleteLandingZoneInput {}
/**
 * @public
 *
 * The output of {@link DeleteLandingZoneCommand}.
 */
export interface DeleteLandingZoneCommandOutput extends DeleteLandingZoneOutput, __MetadataBearer {}

/**
 * @public
 * <p>This decommissions a landing zone. This starts an asynchronous operation that deletes Amazon Web Services Control Tower
 *          resources deployed in Amazon Web Services Control Tower managed accounts. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ControlTowerClient, DeleteLandingZoneCommand } from "@aws-sdk/client-controltower"; // ES Modules import
 * // const { ControlTowerClient, DeleteLandingZoneCommand } = require("@aws-sdk/client-controltower"); // CommonJS import
 * const client = new ControlTowerClient(config);
 * const input = { // DeleteLandingZoneInput
 *   landingZoneIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteLandingZoneCommand(input);
 * const response = await client.send(command);
 * // { // DeleteLandingZoneOutput
 * //   operationIdentifier: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteLandingZoneCommandInput - {@link DeleteLandingZoneCommandInput}
 * @returns {@link DeleteLandingZoneCommandOutput}
 * @see {@link DeleteLandingZoneCommandInput} for command's `input` shape.
 * @see {@link DeleteLandingZoneCommandOutput} for command's `response` shape.
 * @see {@link ControlTowerClientResolvedConfig | config} for ControlTowerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link ControlTowerServiceException}
 * <p>Base exception class for all service exceptions from ControlTower service.</p>
 *
 */
export class DeleteLandingZoneCommand extends $Command<
  DeleteLandingZoneCommandInput,
  DeleteLandingZoneCommandOutput,
  ControlTowerClientResolvedConfig
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
  constructor(readonly input: DeleteLandingZoneCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ControlTowerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteLandingZoneCommandInput, DeleteLandingZoneCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteLandingZoneCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ControlTowerClient";
    const commandName = "DeleteLandingZoneCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSControlTowerApis",
        operation: "DeleteLandingZone",
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
  private serialize(input: DeleteLandingZoneCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteLandingZoneCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteLandingZoneCommandOutput> {
    return de_DeleteLandingZoneCommand(output, context);
  }
}
