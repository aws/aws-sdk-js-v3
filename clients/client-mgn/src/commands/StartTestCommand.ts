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

import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import {
  StartTestRequest,
  StartTestRequestFilterSensitiveLog,
  StartTestResponse,
  StartTestResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_StartTestCommand, se_StartTestCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartTestCommand}.
 */
export interface StartTestCommandInput extends StartTestRequest {}
/**
 * @public
 *
 * The output of {@link StartTestCommand}.
 */
export interface StartTestCommandOutput extends StartTestResponse, __MetadataBearer {}

/**
 * @public
 * <p>Launches a Test Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartTest and changes the SourceServer.lifeCycle.state property to TESTING.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, StartTestCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, StartTestCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const input = { // StartTestRequest
 *   sourceServerIDs: [ // StartTestRequestSourceServerIDs // required
 *     "STRING_VALUE",
 *   ],
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   accountID: "STRING_VALUE",
 * };
 * const command = new StartTestCommand(input);
 * const response = await client.send(command);
 * // { // StartTestResponse
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
 * //         sourceServerID: "STRING_VALUE", // required
 * //         launchStatus: "STRING_VALUE",
 * //         launchedEc2InstanceID: "STRING_VALUE",
 * //         postLaunchActionsStatus: { // PostLaunchActionsStatus
 * //           ssmAgentDiscoveryDatetime: "STRING_VALUE",
 * //           postLaunchActionsLaunchStatusList: [ // PostLaunchActionsLaunchStatusList
 * //             { // JobPostLaunchActionsLaunchStatus
 * //               ssmDocument: { // SsmDocument
 * //                 actionName: "STRING_VALUE", // required
 * //                 ssmDocumentName: "STRING_VALUE", // required
 * //                 timeoutSeconds: Number("int"),
 * //                 mustSucceedForCutover: true || false,
 * //                 parameters: { // SsmDocumentParameters
 * //                   "<keys>": [ // SsmParameterStoreParameters
 * //                     { // SsmParameterStoreParameter
 * //                       parameterType: "STRING_VALUE", // required
 * //                       parameterName: "STRING_VALUE", // required
 * //                     },
 * //                   ],
 * //                 },
 * //                 externalParameters: { // SsmDocumentExternalParameters
 * //                   "<keys>": { // SsmExternalParameter Union: only one key present
 * //                     dynamicPath: "STRING_VALUE",
 * //                   },
 * //                 },
 * //               },
 * //               ssmDocumentType: "STRING_VALUE",
 * //               executionID: "STRING_VALUE",
 * //               executionStatus: "STRING_VALUE",
 * //               failureReason: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     ],
 * //     tags: { // TagsMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param StartTestCommandInput - {@link StartTestCommandInput}
 * @returns {@link StartTestCommandOutput}
 * @see {@link StartTestCommandInput} for command's `input` shape.
 * @see {@link StartTestCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 */
export class StartTestCommand extends $Command<StartTestCommandInput, StartTestCommandOutput, MgnClientResolvedConfig> {
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
  constructor(readonly input: StartTestCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MgnClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartTestCommandInput, StartTestCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, StartTestCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MgnClient";
    const commandName = "StartTestCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartTestRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartTestResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "ApplicationMigrationService",
        operation: "StartTest",
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
  private serialize(input: StartTestCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartTestCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartTestCommandOutput> {
    return de_StartTestCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
