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
  StopSourceNetworkReplicationRequest,
  StopSourceNetworkReplicationResponse,
  StopSourceNetworkReplicationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_StopSourceNetworkReplicationCommand,
  se_StopSourceNetworkReplicationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StopSourceNetworkReplicationCommand}.
 */
export interface StopSourceNetworkReplicationCommandInput extends StopSourceNetworkReplicationRequest {}
/**
 * @public
 *
 * The output of {@link StopSourceNetworkReplicationCommand}.
 */
export interface StopSourceNetworkReplicationCommandOutput
  extends StopSourceNetworkReplicationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Stops replication for a Source Network. This action would make the Source Network unprotected.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, StopSourceNetworkReplicationCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, StopSourceNetworkReplicationCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * const client = new DrsClient(config);
 * const input = { // StopSourceNetworkReplicationRequest
 *   sourceNetworkID: "STRING_VALUE", // required
 * };
 * const command = new StopSourceNetworkReplicationCommand(input);
 * const response = await client.send(command);
 * // { // StopSourceNetworkReplicationResponse
 * //   sourceNetwork: { // SourceNetwork
 * //     sourceNetworkID: "STRING_VALUE",
 * //     sourceVpcID: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     tags: { // TagsMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     replicationStatus: "STRING_VALUE",
 * //     replicationStatusDetails: "STRING_VALUE",
 * //     cfnStackName: "STRING_VALUE",
 * //     sourceRegion: "STRING_VALUE",
 * //     sourceAccountID: "STRING_VALUE",
 * //     lastRecovery: { // RecoveryLifeCycle
 * //       apiCallDateTime: new Date("TIMESTAMP"),
 * //       jobID: "STRING_VALUE",
 * //       lastRecoveryResult: "STRING_VALUE",
 * //     },
 * //     launchedVpcID: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param StopSourceNetworkReplicationCommandInput - {@link StopSourceNetworkReplicationCommandInput}
 * @returns {@link StopSourceNetworkReplicationCommandOutput}
 * @see {@link StopSourceNetworkReplicationCommandInput} for command's `input` shape.
 * @see {@link StopSourceNetworkReplicationCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource for this operation was not found.</p>
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
export class StopSourceNetworkReplicationCommand extends $Command<
  StopSourceNetworkReplicationCommandInput,
  StopSourceNetworkReplicationCommandOutput,
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
  constructor(readonly input: StopSourceNetworkReplicationCommandInput) {
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
  ): Handler<StopSourceNetworkReplicationCommandInput, StopSourceNetworkReplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopSourceNetworkReplicationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DrsClient";
    const commandName = "StopSourceNetworkReplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: StopSourceNetworkReplicationResponseFilterSensitiveLog,
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
  private serialize(input: StopSourceNetworkReplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StopSourceNetworkReplicationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StopSourceNetworkReplicationCommandOutput> {
    return de_StopSourceNetworkReplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
