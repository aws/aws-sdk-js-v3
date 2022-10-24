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

import { IdentitystoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IdentitystoreClient";
import {
  DescribeGroupMembershipRequest,
  DescribeGroupMembershipRequestFilterSensitiveLog,
  DescribeGroupMembershipResponse,
  DescribeGroupMembershipResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeGroupMembershipCommand,
  serializeAws_json1_1DescribeGroupMembershipCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeGroupMembershipCommandInput extends DescribeGroupMembershipRequest {}
export interface DescribeGroupMembershipCommandOutput extends DescribeGroupMembershipResponse, __MetadataBearer {}

/**
 * <p>Retrieves membership metadata and attributes from <code>MembershipId</code> in an identity store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentitystoreClient, DescribeGroupMembershipCommand } from "@aws-sdk/client-identitystore"; // ES Modules import
 * // const { IdentitystoreClient, DescribeGroupMembershipCommand } = require("@aws-sdk/client-identitystore"); // CommonJS import
 * const client = new IdentitystoreClient(config);
 * const command = new DescribeGroupMembershipCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeGroupMembershipCommandInput} for command's `input` shape.
 * @see {@link DescribeGroupMembershipCommandOutput} for command's `response` shape.
 * @see {@link IdentitystoreClientResolvedConfig | config} for IdentitystoreClient's `config` shape.
 *
 */
export class DescribeGroupMembershipCommand extends $Command<
  DescribeGroupMembershipCommandInput,
  DescribeGroupMembershipCommandOutput,
  IdentitystoreClientResolvedConfig
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

  constructor(readonly input: DescribeGroupMembershipCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IdentitystoreClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeGroupMembershipCommandInput, DescribeGroupMembershipCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeGroupMembershipCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IdentitystoreClient";
    const commandName = "DescribeGroupMembershipCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeGroupMembershipRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeGroupMembershipResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeGroupMembershipCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeGroupMembershipCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeGroupMembershipCommandOutput> {
    return deserializeAws_json1_1DescribeGroupMembershipCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
