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
  StartSourceNetworkRecoveryRequest,
  StartSourceNetworkRecoveryRequestFilterSensitiveLog,
  StartSourceNetworkRecoveryResponse,
  StartSourceNetworkRecoveryResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_StartSourceNetworkRecoveryCommand, se_StartSourceNetworkRecoveryCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartSourceNetworkRecoveryCommand}.
 */
export interface StartSourceNetworkRecoveryCommandInput extends StartSourceNetworkRecoveryRequest {}
/**
 * @public
 *
 * The output of {@link StartSourceNetworkRecoveryCommand}.
 */
export interface StartSourceNetworkRecoveryCommandOutput extends StartSourceNetworkRecoveryResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deploy VPC for the specified Source Network and modify launch templates to use this network. The VPC will be deployed using a dedicated CloudFormation stack.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, StartSourceNetworkRecoveryCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, StartSourceNetworkRecoveryCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * const client = new DrsClient(config);
 * const input = { // StartSourceNetworkRecoveryRequest
 *   sourceNetworks: [ // StartSourceNetworkRecoveryRequestNetworkEntries // required
 *     { // StartSourceNetworkRecoveryRequestNetworkEntry
 *       sourceNetworkID: "STRING_VALUE", // required
 *       cfnStackName: "STRING_VALUE",
 *     },
 *   ],
 *   deployAsNew: true || false,
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new StartSourceNetworkRecoveryCommand(input);
 * const response = await client.send(command);
 * // { // StartSourceNetworkRecoveryResponse
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
 * @param StartSourceNetworkRecoveryCommandInput - {@link StartSourceNetworkRecoveryCommandInput}
 * @returns {@link StartSourceNetworkRecoveryCommandOutput}
 * @see {@link StartSourceNetworkRecoveryCommandInput} for command's `input` shape.
 * @see {@link StartSourceNetworkRecoveryCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the AWS service.</p>
 *
 * @throws {@link DrsServiceException}
 * <p>Base exception class for all service exceptions from Drs service.</p>
 *
 */
export class StartSourceNetworkRecoveryCommand extends $Command<
  StartSourceNetworkRecoveryCommandInput,
  StartSourceNetworkRecoveryCommandOutput,
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
  constructor(readonly input: StartSourceNetworkRecoveryCommandInput) {
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
  ): Handler<StartSourceNetworkRecoveryCommandInput, StartSourceNetworkRecoveryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartSourceNetworkRecoveryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DrsClient";
    const commandName = "StartSourceNetworkRecoveryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartSourceNetworkRecoveryRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartSourceNetworkRecoveryResponseFilterSensitiveLog,
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
  private serialize(input: StartSourceNetworkRecoveryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartSourceNetworkRecoveryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartSourceNetworkRecoveryCommandOutput> {
    return de_StartSourceNetworkRecoveryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
