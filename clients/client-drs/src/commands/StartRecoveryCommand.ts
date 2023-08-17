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
} from "@smithy/types";

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import {
  StartRecoveryRequest,
  StartRecoveryRequestFilterSensitiveLog,
  StartRecoveryResponse,
  StartRecoveryResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_StartRecoveryCommand, se_StartRecoveryCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartRecoveryCommand}.
 */
export interface StartRecoveryCommandInput extends StartRecoveryRequest {}
/**
 * @public
 *
 * The output of {@link StartRecoveryCommand}.
 */
export interface StartRecoveryCommandOutput extends StartRecoveryResponse, __MetadataBearer {}

/**
 * @public
 * <p>Launches Recovery Instances for the specified Source Servers. For each Source Server you may choose a point in time snapshot to launch from, or use an on demand snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, StartRecoveryCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, StartRecoveryCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * const client = new DrsClient(config);
 * const input = { // StartRecoveryRequest
 *   sourceServers: [ // StartRecoveryRequestSourceServers // required
 *     { // StartRecoveryRequestSourceServer
 *       sourceServerID: "STRING_VALUE", // required
 *       recoverySnapshotID: "STRING_VALUE",
 *     },
 *   ],
 *   isDrill: true || false,
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new StartRecoveryCommand(input);
 * const response = await client.send(command);
 * // { // StartRecoveryResponse
 * //   job: { // Job
 * //     jobID: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE",
 * //     type: "STRING_VALUE",
 * //     initiatedBy: "STRING_VALUE",
 * //     creationDateTime: "STRING_VALUE",
 * //     endDateTime: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //     participatingServers: [ // ParticipatingServers
 * //       { // ParticipatingServer
 * //         sourceServerID: "STRING_VALUE",
 * //         recoveryInstanceID: "STRING_VALUE",
 * //         launchStatus: "STRING_VALUE",
 * //       },
 * //     ],
 * //     tags: { // TagsMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     participatingResources: [ // ParticipatingResources
 * //       { // ParticipatingResource
 * //         participatingResourceID: { // ParticipatingResourceID Union: only one key present
 * //           sourceNetworkID: "STRING_VALUE",
 * //         },
 * //         launchStatus: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param StartRecoveryCommandInput - {@link StartRecoveryCommandInput}
 * @returns {@link StartRecoveryCommandOutput}
 * @see {@link StartRecoveryCommandInput} for command's `input` shape.
 * @see {@link StartRecoveryCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request could not be completed because its exceeded the service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>The account performing the request has not been initialized.</p>
 *
 * @throws {@link DrsServiceException}
 * <p>Base exception class for all service exceptions from Drs service.</p>
 *
 */
export class StartRecoveryCommand extends $Command<
  StartRecoveryCommandInput,
  StartRecoveryCommandOutput,
  DrsClientResolvedConfig
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
  constructor(readonly input: StartRecoveryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DrsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartRecoveryCommandInput, StartRecoveryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, StartRecoveryCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DrsClient";
    const commandName = "StartRecoveryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartRecoveryRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartRecoveryResponseFilterSensitiveLog,
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
  private serialize(input: StartRecoveryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartRecoveryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartRecoveryCommandOutput> {
    return de_StartRecoveryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
