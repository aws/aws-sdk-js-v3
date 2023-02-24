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
  DeleteFargateProfileRequest,
  DeleteFargateProfileRequestFilterSensitiveLog,
  DeleteFargateProfileResponse,
  DeleteFargateProfileResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteFargateProfileCommand,
  serializeAws_restJson1DeleteFargateProfileCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteFargateProfileCommandInput extends DeleteFargateProfileRequest {}
export interface DeleteFargateProfileCommandOutput extends DeleteFargateProfileResponse, __MetadataBearer {}

/**
 * <p>Deletes an Fargate profile.</p>
 *          <p>When you delete a Fargate profile, any pods running on Fargate that were created with the profile are deleted. If those pods match
 *             another Fargate profile, then they are scheduled on Fargate with that profile. If they no longer match any Fargate profiles, then
 *             they are not scheduled on Fargate and they may remain in a pending
 *             state.</p>
 *          <p>Only one Fargate profile in a cluster can be in the
 *                 <code>DELETING</code> status at a time. You must wait for a Fargate
 *             profile to finish deleting before you can delete any other profiles in that
 *             cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DeleteFargateProfileCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DeleteFargateProfileCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new DeleteFargateProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFargateProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteFargateProfileCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 */
export class DeleteFargateProfileCommand extends $Command<
  DeleteFargateProfileCommandInput,
  DeleteFargateProfileCommandOutput,
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

  constructor(readonly input: DeleteFargateProfileCommandInput) {
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
  ): Handler<DeleteFargateProfileCommandInput, DeleteFargateProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteFargateProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "DeleteFargateProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteFargateProfileRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteFargateProfileResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteFargateProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteFargateProfileCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteFargateProfileCommandOutput> {
    return deserializeAws_restJson1DeleteFargateProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
