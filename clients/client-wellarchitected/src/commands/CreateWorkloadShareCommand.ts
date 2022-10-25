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

import {
  CreateWorkloadShareInput,
  CreateWorkloadShareInputFilterSensitiveLog,
  CreateWorkloadShareOutput,
  CreateWorkloadShareOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateWorkloadShareCommand,
  serializeAws_restJson1CreateWorkloadShareCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

export interface CreateWorkloadShareCommandInput extends CreateWorkloadShareInput {}
export interface CreateWorkloadShareCommandOutput extends CreateWorkloadShareOutput, __MetadataBearer {}

/**
 * <p>Create a workload share.</p>
 *         <p>The owner of a workload can share it with other Amazon Web Services accounts and IAM users in the same
 *             Amazon Web Services Region. Shared access to a workload is not removed until the workload invitation is
 *             deleted.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/workloads-sharing.html">Sharing a Workload</a> in the
 *                 <i>Well-Architected Tool User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, CreateWorkloadShareCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, CreateWorkloadShareCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new CreateWorkloadShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateWorkloadShareCommandInput} for command's `input` shape.
 * @see {@link CreateWorkloadShareCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 */
export class CreateWorkloadShareCommand extends $Command<
  CreateWorkloadShareCommandInput,
  CreateWorkloadShareCommandOutput,
  WellArchitectedClientResolvedConfig
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

  constructor(readonly input: CreateWorkloadShareCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WellArchitectedClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateWorkloadShareCommandInput, CreateWorkloadShareCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateWorkloadShareCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WellArchitectedClient";
    const commandName = "CreateWorkloadShareCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateWorkloadShareInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateWorkloadShareOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateWorkloadShareCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateWorkloadShareCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateWorkloadShareCommandOutput> {
    return deserializeAws_restJson1CreateWorkloadShareCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
