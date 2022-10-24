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
  DescribeAccountAssignmentCreationStatusRequest,
  DescribeAccountAssignmentCreationStatusRequestFilterSensitiveLog,
  DescribeAccountAssignmentCreationStatusResponse,
  DescribeAccountAssignmentCreationStatusResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeAccountAssignmentCreationStatusCommand,
  serializeAws_json1_1DescribeAccountAssignmentCreationStatusCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

export interface DescribeAccountAssignmentCreationStatusCommandInput
  extends DescribeAccountAssignmentCreationStatusRequest {}
export interface DescribeAccountAssignmentCreationStatusCommandOutput
  extends DescribeAccountAssignmentCreationStatusResponse,
    __MetadataBearer {}

/**
 * <p>Describes the status of the assignment creation request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DescribeAccountAssignmentCreationStatusCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DescribeAccountAssignmentCreationStatusCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new DescribeAccountAssignmentCreationStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAccountAssignmentCreationStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountAssignmentCreationStatusCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 */
export class DescribeAccountAssignmentCreationStatusCommand extends $Command<
  DescribeAccountAssignmentCreationStatusCommandInput,
  DescribeAccountAssignmentCreationStatusCommandOutput,
  SSOAdminClientResolvedConfig
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

  constructor(readonly input: DescribeAccountAssignmentCreationStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOAdminClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeAccountAssignmentCreationStatusCommandInput,
    DescribeAccountAssignmentCreationStatusCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeAccountAssignmentCreationStatusCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "DescribeAccountAssignmentCreationStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAccountAssignmentCreationStatusRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeAccountAssignmentCreationStatusResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeAccountAssignmentCreationStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeAccountAssignmentCreationStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAccountAssignmentCreationStatusCommandOutput> {
    return deserializeAws_json1_1DescribeAccountAssignmentCreationStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
