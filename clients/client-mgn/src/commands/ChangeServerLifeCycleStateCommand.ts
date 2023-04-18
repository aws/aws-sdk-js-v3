// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { ChangeServerLifeCycleStateRequest, SourceServer, SourceServerFilterSensitiveLog } from "../models/models_0";
import { de_ChangeServerLifeCycleStateCommand, se_ChangeServerLifeCycleStateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link ChangeServerLifeCycleStateCommand}.
 */
export interface ChangeServerLifeCycleStateCommandInput extends ChangeServerLifeCycleStateRequest {}
/**
 * @public
 *
 * The output of {@link ChangeServerLifeCycleStateCommand}.
 */
export interface ChangeServerLifeCycleStateCommandOutput extends SourceServer, __MetadataBearer {}

/**
 * @public
 * <p>Allows the user to set the SourceServer.LifeCycle.state property for specific Source Server IDs to one of the following: READY_FOR_TEST or READY_FOR_CUTOVER. This command only works if the Source Server is already launchable (dataReplicationInfo.lagDuration is not null.)</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, ChangeServerLifeCycleStateCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, ChangeServerLifeCycleStateCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const input = { // ChangeServerLifeCycleStateRequest
 *   sourceServerID: "STRING_VALUE", // required
 *   lifeCycle: { // ChangeServerLifeCycleStateSourceServerLifecycle
 *     state: "STRING_VALUE", // required
 *   },
 * };
 * const command = new ChangeServerLifeCycleStateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ChangeServerLifeCycleStateCommandInput - {@link ChangeServerLifeCycleStateCommandInput}
 * @returns {@link ChangeServerLifeCycleStateCommandOutput}
 * @see {@link ChangeServerLifeCycleStateCommandInput} for command's `input` shape.
 * @see {@link ChangeServerLifeCycleStateCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 *
 */
export class ChangeServerLifeCycleStateCommand extends $Command<
  ChangeServerLifeCycleStateCommandInput,
  ChangeServerLifeCycleStateCommandOutput,
  MgnClientResolvedConfig
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
  constructor(readonly input: ChangeServerLifeCycleStateCommandInput) {
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
  ): Handler<ChangeServerLifeCycleStateCommandInput, ChangeServerLifeCycleStateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ChangeServerLifeCycleStateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MgnClient";
    const commandName = "ChangeServerLifeCycleStateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: SourceServerFilterSensitiveLog,
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
  private serialize(input: ChangeServerLifeCycleStateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ChangeServerLifeCycleStateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ChangeServerLifeCycleStateCommandOutput> {
    return de_ChangeServerLifeCycleStateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
