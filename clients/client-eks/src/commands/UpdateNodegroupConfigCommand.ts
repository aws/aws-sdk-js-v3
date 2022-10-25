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

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import {
  UpdateNodegroupConfigRequest,
  UpdateNodegroupConfigRequestFilterSensitiveLog,
  UpdateNodegroupConfigResponse,
  UpdateNodegroupConfigResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateNodegroupConfigCommand,
  serializeAws_restJson1UpdateNodegroupConfigCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateNodegroupConfigCommandInput extends UpdateNodegroupConfigRequest {}
export interface UpdateNodegroupConfigCommandOutput extends UpdateNodegroupConfigResponse, __MetadataBearer {}

/**
 * <p>Updates an Amazon EKS managed node group configuration. Your node group
 *             continues to function during the update. The response output includes an update ID that
 *             you can use to track the status of your node group update with the <a>DescribeUpdate</a> API operation. Currently you can update the Kubernetes
 *             labels for a node group or the scaling configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, UpdateNodegroupConfigCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, UpdateNodegroupConfigCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new UpdateNodegroupConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateNodegroupConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateNodegroupConfigCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 */
export class UpdateNodegroupConfigCommand extends $Command<
  UpdateNodegroupConfigCommandInput,
  UpdateNodegroupConfigCommandOutput,
  EKSClientResolvedConfig
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

  constructor(readonly input: UpdateNodegroupConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EKSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateNodegroupConfigCommandInput, UpdateNodegroupConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateNodegroupConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "UpdateNodegroupConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateNodegroupConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateNodegroupConfigResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateNodegroupConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateNodegroupConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateNodegroupConfigCommandOutput> {
    return deserializeAws_restJson1UpdateNodegroupConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
