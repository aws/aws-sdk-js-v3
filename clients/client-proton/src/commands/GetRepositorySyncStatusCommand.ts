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
  GetRepositorySyncStatusInput,
  GetRepositorySyncStatusInputFilterSensitiveLog,
  GetRepositorySyncStatusOutput,
  GetRepositorySyncStatusOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0GetRepositorySyncStatusCommand,
  serializeAws_json1_0GetRepositorySyncStatusCommand,
} from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

export interface GetRepositorySyncStatusCommandInput extends GetRepositorySyncStatusInput {}
export interface GetRepositorySyncStatusCommandOutput extends GetRepositorySyncStatusOutput, __MetadataBearer {}

/**
 * <p>Get the sync status of a repository used for Proton template sync. For more information about template sync, see .</p>
 *          <note>
 *             <p>A repository sync status isn't tied to the Proton Repository resource (or any other Proton resource). Therefore, tags on an Proton Repository resource
 *         have no effect on this action. Specifically, you can't use these tags to control access to this action using Attribute-based access control
 *         (ABAC).</p>
 *             <p>For more information about ABAC, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags">ABAC</a> in the <i>Proton User
 *           Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, GetRepositorySyncStatusCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, GetRepositorySyncStatusCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const command = new GetRepositorySyncStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRepositorySyncStatusCommandInput} for command's `input` shape.
 * @see {@link GetRepositorySyncStatusCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 */
export class GetRepositorySyncStatusCommand extends $Command<
  GetRepositorySyncStatusCommandInput,
  GetRepositorySyncStatusCommandOutput,
  ProtonClientResolvedConfig
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

  constructor(readonly input: GetRepositorySyncStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ProtonClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRepositorySyncStatusCommandInput, GetRepositorySyncStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetRepositorySyncStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "GetRepositorySyncStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRepositorySyncStatusInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetRepositorySyncStatusOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetRepositorySyncStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0GetRepositorySyncStatusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRepositorySyncStatusCommandOutput> {
    return deserializeAws_json1_0GetRepositorySyncStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
