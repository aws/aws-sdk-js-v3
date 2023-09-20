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

import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DeleteFleetLocationsInput, DeleteFleetLocationsOutput } from "../models/models_0";
import { de_DeleteFleetLocationsCommand, se_DeleteFleetLocationsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteFleetLocationsCommand}.
 */
export interface DeleteFleetLocationsCommandInput extends DeleteFleetLocationsInput {}
/**
 * @public
 *
 * The output of {@link DeleteFleetLocationsCommand}.
 */
export interface DeleteFleetLocationsCommandOutput extends DeleteFleetLocationsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Removes locations from a multi-location fleet. When deleting a location, all game
 *             server process and all instances that are still active in the location are shut down. </p>
 *          <p>To delete fleet locations, identify the fleet ID and provide a list of the locations
 *             to be deleted. </p>
 *          <p>If successful, GameLift sets the location status to <code>DELETING</code>, and begins
 *             to shut down existing server processes and terminate instances in each location being
 *             deleted. When completed, the location status changes to <code>TERMINATED</code>.</p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift
 *                 fleets</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DeleteFleetLocationsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DeleteFleetLocationsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // DeleteFleetLocationsInput
 *   FleetId: "STRING_VALUE", // required
 *   Locations: [ // LocationList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeleteFleetLocationsCommand(input);
 * const response = await client.send(command);
 * // { // DeleteFleetLocationsOutput
 * //   FleetId: "STRING_VALUE",
 * //   FleetArn: "STRING_VALUE",
 * //   LocationStates: [ // LocationStateList
 * //     { // LocationState
 * //       Location: "STRING_VALUE",
 * //       Status: "NEW" || "DOWNLOADING" || "VALIDATING" || "BUILDING" || "ACTIVATING" || "ACTIVE" || "DELETING" || "ERROR" || "TERMINATED" || "NOT_FOUND",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DeleteFleetLocationsCommandInput - {@link DeleteFleetLocationsCommandInput}
 * @returns {@link DeleteFleetLocationsCommandOutput}
 * @see {@link DeleteFleetLocationsCommandInput} for command's `input` shape.
 * @see {@link DeleteFleetLocationsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The service encountered an unrecoverable internal failure while processing the
 *             request. Clients can retry such requests immediately or after a waiting period.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more parameter values in the request are invalid. Correct the invalid parameter
 *             values before retrying.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>THe requested resources was not found. The resource was either not created yet or deleted.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client failed authentication. Clients should not retry such requests.</p>
 *
 * @throws {@link UnsupportedRegionException} (client fault)
 *  <p>The requested operation is not supported in the Region specified.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 */
export class DeleteFleetLocationsCommand extends $Command<
  DeleteFleetLocationsCommandInput,
  DeleteFleetLocationsCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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
  constructor(readonly input: DeleteFleetLocationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GameLiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteFleetLocationsCommandInput, DeleteFleetLocationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteFleetLocationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DeleteFleetLocationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GameLift",
        operation: "DeleteFleetLocations",
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
  private serialize(input: DeleteFleetLocationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteFleetLocationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteFleetLocationsCommandOutput> {
    return de_DeleteFleetLocationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
