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
import { ReverseReplicationRequest, ReverseReplicationResponse } from "../models/models_0";
import { de_ReverseReplicationCommand, se_ReverseReplicationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ReverseReplicationCommand}.
 */
export interface ReverseReplicationCommandInput extends ReverseReplicationRequest {}
/**
 * @public
 *
 * The output of {@link ReverseReplicationCommand}.
 */
export interface ReverseReplicationCommandOutput extends ReverseReplicationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Start replication to origin / target region - applies only to protected instances that originated in EC2.
 *             For recovery instances on target region - starts replication back to origin region.
 *             For failback instances on origin region - starts replication to target region to re-protect them.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, ReverseReplicationCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, ReverseReplicationCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * const client = new DrsClient(config);
 * const input = { // ReverseReplicationRequest
 *   recoveryInstanceID: "STRING_VALUE", // required
 * };
 * const command = new ReverseReplicationCommand(input);
 * const response = await client.send(command);
 * // { // ReverseReplicationResponse
 * //   reversedDirectionSourceServerArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ReverseReplicationCommandInput - {@link ReverseReplicationCommandInput}
 * @returns {@link ReverseReplicationCommandOutput}
 * @see {@link ReverseReplicationCommandInput} for command's `input` shape.
 * @see {@link ReverseReplicationCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
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
export class ReverseReplicationCommand extends $Command<
  ReverseReplicationCommandInput,
  ReverseReplicationCommandOutput,
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
  constructor(readonly input: ReverseReplicationCommandInput) {
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
  ): Handler<ReverseReplicationCommandInput, ReverseReplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ReverseReplicationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DrsClient";
    const commandName = "ReverseReplicationCommand";
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
  private serialize(input: ReverseReplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ReverseReplicationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ReverseReplicationCommandOutput> {
    return de_ReverseReplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
