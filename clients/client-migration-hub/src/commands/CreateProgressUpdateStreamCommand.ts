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

import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import {
  CreateProgressUpdateStreamRequest,
  CreateProgressUpdateStreamRequestFilterSensitiveLog,
  CreateProgressUpdateStreamResult,
  CreateProgressUpdateStreamResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateProgressUpdateStreamCommand,
  serializeAws_json1_1CreateProgressUpdateStreamCommand,
} from "../protocols/Aws_json1_1";

export interface CreateProgressUpdateStreamCommandInput extends CreateProgressUpdateStreamRequest {}
export interface CreateProgressUpdateStreamCommandOutput extends CreateProgressUpdateStreamResult, __MetadataBearer {}

/**
 * <p>Creates a progress update stream which is an AWS resource used for access control as
 *          well as a namespace for migration task names that is implicitly linked to your AWS account.
 *          It must uniquely identify the migration tool as it is used for all updates made by the
 *          tool; however, it does not need to be unique for each AWS account because it is scoped to
 *          the AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, CreateProgressUpdateStreamCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, CreateProgressUpdateStreamCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * const client = new MigrationHubClient(config);
 * const command = new CreateProgressUpdateStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateProgressUpdateStreamCommandInput} for command's `input` shape.
 * @see {@link CreateProgressUpdateStreamCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for MigrationHubClient's `config` shape.
 *
 */
export class CreateProgressUpdateStreamCommand extends $Command<
  CreateProgressUpdateStreamCommandInput,
  CreateProgressUpdateStreamCommandOutput,
  MigrationHubClientResolvedConfig
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

  constructor(readonly input: CreateProgressUpdateStreamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MigrationHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateProgressUpdateStreamCommandInput, CreateProgressUpdateStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateProgressUpdateStreamCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubClient";
    const commandName = "CreateProgressUpdateStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateProgressUpdateStreamRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateProgressUpdateStreamResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateProgressUpdateStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateProgressUpdateStreamCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateProgressUpdateStreamCommandOutput> {
    return deserializeAws_json1_1CreateProgressUpdateStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
