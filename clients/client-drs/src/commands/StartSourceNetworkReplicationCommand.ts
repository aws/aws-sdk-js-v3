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

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import {
  StartSourceNetworkReplicationRequest,
  StartSourceNetworkReplicationResponse,
  StartSourceNetworkReplicationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_StartSourceNetworkReplicationCommand,
  se_StartSourceNetworkReplicationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartSourceNetworkReplicationCommand}.
 */
export interface StartSourceNetworkReplicationCommandInput extends StartSourceNetworkReplicationRequest {}
/**
 * @public
 *
 * The output of {@link StartSourceNetworkReplicationCommand}.
 */
export interface StartSourceNetworkReplicationCommandOutput
  extends StartSourceNetworkReplicationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Starts replication for a Source Network. This action would make the Source Network protected.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, StartSourceNetworkReplicationCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, StartSourceNetworkReplicationCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * const client = new DrsClient(config);
 * const input = { // StartSourceNetworkReplicationRequest
 *   sourceNetworkID: "STRING_VALUE", // required
 * };
 * const command = new StartSourceNetworkReplicationCommand(input);
 * const response = await client.send(command);
 * // { // StartSourceNetworkReplicationResponse
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
 * @param StartSourceNetworkReplicationCommandInput - {@link StartSourceNetworkReplicationCommandInput}
 * @returns {@link StartSourceNetworkReplicationCommandOutput}
 * @see {@link StartSourceNetworkReplicationCommandInput} for command's `input` shape.
 * @see {@link StartSourceNetworkReplicationCommandOutput} for command's `response` shape.
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
 * @throws {@link DrsServiceException}
 * <p>Base exception class for all service exceptions from Drs service.</p>
 *
 */
export class StartSourceNetworkReplicationCommand extends $Command<
  StartSourceNetworkReplicationCommandInput,
  StartSourceNetworkReplicationCommandOutput,
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
  constructor(readonly input: StartSourceNetworkReplicationCommandInput) {
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
  ): Handler<StartSourceNetworkReplicationCommandInput, StartSourceNetworkReplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartSourceNetworkReplicationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DrsClient";
    const commandName = "StartSourceNetworkReplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: StartSourceNetworkReplicationResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "ElasticDisasterRecoveryService",
        operation: "StartSourceNetworkReplication",
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
  private serialize(input: StartSourceNetworkReplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartSourceNetworkReplicationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartSourceNetworkReplicationCommandOutput> {
    return de_StartSourceNetworkReplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
