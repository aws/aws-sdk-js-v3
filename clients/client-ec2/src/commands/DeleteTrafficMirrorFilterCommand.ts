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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteTrafficMirrorFilterRequest, DeleteTrafficMirrorFilterResult } from "../models/models_3";
import { de_DeleteTrafficMirrorFilterCommand, se_DeleteTrafficMirrorFilterCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteTrafficMirrorFilterCommand}.
 */
export interface DeleteTrafficMirrorFilterCommandInput extends DeleteTrafficMirrorFilterRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTrafficMirrorFilterCommand}.
 */
export interface DeleteTrafficMirrorFilterCommandOutput extends DeleteTrafficMirrorFilterResult, __MetadataBearer {}

/**
 * @public
 * <p>Deletes the specified Traffic Mirror filter.</p>
 *          <p>You cannot delete a Traffic Mirror filter that is in use by a Traffic Mirror session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTrafficMirrorFilterCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTrafficMirrorFilterCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteTrafficMirrorFilterRequest
 *   TrafficMirrorFilterId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteTrafficMirrorFilterCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTrafficMirrorFilterResult
 * //   TrafficMirrorFilterId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteTrafficMirrorFilterCommandInput - {@link DeleteTrafficMirrorFilterCommandInput}
 * @returns {@link DeleteTrafficMirrorFilterCommandOutput}
 * @see {@link DeleteTrafficMirrorFilterCommandInput} for command's `input` shape.
 * @see {@link DeleteTrafficMirrorFilterCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DeleteTrafficMirrorFilterCommand extends $Command<
  DeleteTrafficMirrorFilterCommandInput,
  DeleteTrafficMirrorFilterCommandOutput,
  EC2ClientResolvedConfig
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
  constructor(readonly input: DeleteTrafficMirrorFilterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteTrafficMirrorFilterCommandInput, DeleteTrafficMirrorFilterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteTrafficMirrorFilterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteTrafficMirrorFilterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DeleteTrafficMirrorFilter",
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
  private serialize(input: DeleteTrafficMirrorFilterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteTrafficMirrorFilterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteTrafficMirrorFilterCommandOutput> {
    return de_DeleteTrafficMirrorFilterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
