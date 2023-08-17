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

import { StartOnDemandReplicationRunRequest, StartOnDemandReplicationRunResponse } from "../models/models_0";
import { de_StartOnDemandReplicationRunCommand, se_StartOnDemandReplicationRunCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SMSClientResolvedConfig } from "../SMSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartOnDemandReplicationRunCommand}.
 */
export interface StartOnDemandReplicationRunCommandInput extends StartOnDemandReplicationRunRequest {}
/**
 * @public
 *
 * The output of {@link StartOnDemandReplicationRunCommand}.
 */
export interface StartOnDemandReplicationRunCommandOutput
  extends StartOnDemandReplicationRunResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Starts an on-demand replication run for the specified replication job. This
 *             replication run starts immediately. This replication run is in addition to the ones
 *             already scheduled.</p>
 *          <p>There is a limit on the number of on-demand replications runs that you can request
 *             in a 24-hour period.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, StartOnDemandReplicationRunCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, StartOnDemandReplicationRunCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const input = { // StartOnDemandReplicationRunRequest
 *   replicationJobId: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 * };
 * const command = new StartOnDemandReplicationRunCommand(input);
 * const response = await client.send(command);
 * // { // StartOnDemandReplicationRunResponse
 * //   replicationRunId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartOnDemandReplicationRunCommandInput - {@link StartOnDemandReplicationRunCommandInput}
 * @returns {@link StartOnDemandReplicationRunCommandOutput}
 * @see {@link StartOnDemandReplicationRunCommandInput} for command's `input` shape.
 * @see {@link StartOnDemandReplicationRunCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for SMSClient's `config` shape.
 *
 * @throws {@link DryRunOperationException} (client fault)
 *  <p>The user has the required permissions, so the request would have succeeded,
 *             but a dry run was performed.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A specified parameter is not valid.</p>
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>A required parameter is missing.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This operation is not allowed.</p>
 *
 * @throws {@link ReplicationRunLimitExceededException} (client fault)
 *  <p>You have exceeded the number of on-demand replication runs you can request in a
 *             24-hour period.</p>
 *
 * @throws {@link UnauthorizedOperationException} (client fault)
 *  <p>You lack permissions needed to perform this operation. Check your IAM policies,
 *             and ensure that you are using the correct access keys.</p>
 *
 * @throws {@link SMSServiceException}
 * <p>Base exception class for all service exceptions from SMS service.</p>
 *
 */
export class StartOnDemandReplicationRunCommand extends $Command<
  StartOnDemandReplicationRunCommandInput,
  StartOnDemandReplicationRunCommandOutput,
  SMSClientResolvedConfig
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
  constructor(readonly input: StartOnDemandReplicationRunCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartOnDemandReplicationRunCommandInput, StartOnDemandReplicationRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartOnDemandReplicationRunCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SMSClient";
    const commandName = "StartOnDemandReplicationRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: StartOnDemandReplicationRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartOnDemandReplicationRunCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartOnDemandReplicationRunCommandOutput> {
    return de_StartOnDemandReplicationRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
