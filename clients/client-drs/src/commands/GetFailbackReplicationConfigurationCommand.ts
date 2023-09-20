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
  GetFailbackReplicationConfigurationRequest,
  GetFailbackReplicationConfigurationResponse,
} from "../models/models_0";
import {
  de_GetFailbackReplicationConfigurationCommand,
  se_GetFailbackReplicationConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetFailbackReplicationConfigurationCommand}.
 */
export interface GetFailbackReplicationConfigurationCommandInput extends GetFailbackReplicationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetFailbackReplicationConfigurationCommand}.
 */
export interface GetFailbackReplicationConfigurationCommandOutput
  extends GetFailbackReplicationConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists all Failback ReplicationConfigurations, filtered by Recovery Instance ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, GetFailbackReplicationConfigurationCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, GetFailbackReplicationConfigurationCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * const client = new DrsClient(config);
 * const input = { // GetFailbackReplicationConfigurationRequest
 *   recoveryInstanceID: "STRING_VALUE", // required
 * };
 * const command = new GetFailbackReplicationConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetFailbackReplicationConfigurationResponse
 * //   recoveryInstanceID: "STRING_VALUE", // required
 * //   name: "STRING_VALUE",
 * //   bandwidthThrottling: Number("long"),
 * //   usePrivateIP: true || false,
 * // };
 *
 * ```
 *
 * @param GetFailbackReplicationConfigurationCommandInput - {@link GetFailbackReplicationConfigurationCommandInput}
 * @returns {@link GetFailbackReplicationConfigurationCommandOutput}
 * @see {@link GetFailbackReplicationConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetFailbackReplicationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
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
export class GetFailbackReplicationConfigurationCommand extends $Command<
  GetFailbackReplicationConfigurationCommandInput,
  GetFailbackReplicationConfigurationCommandOutput,
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
  constructor(readonly input: GetFailbackReplicationConfigurationCommandInput) {
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
  ): Handler<GetFailbackReplicationConfigurationCommandInput, GetFailbackReplicationConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetFailbackReplicationConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DrsClient";
    const commandName = "GetFailbackReplicationConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ElasticDisasterRecoveryService",
        operation: "GetFailbackReplicationConfiguration",
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
  private serialize(
    input: GetFailbackReplicationConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetFailbackReplicationConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetFailbackReplicationConfigurationCommandOutput> {
    return de_GetFailbackReplicationConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
