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
  MigrationHubStrategyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubStrategyClient";
import {
  GetLatestAssessmentIdRequest,
  GetLatestAssessmentIdRequestFilterSensitiveLog,
  GetLatestAssessmentIdResponse,
  GetLatestAssessmentIdResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetLatestAssessmentIdCommand,
  serializeAws_restJson1GetLatestAssessmentIdCommand,
} from "../protocols/Aws_restJson1";

export interface GetLatestAssessmentIdCommandInput extends GetLatestAssessmentIdRequest {}
export interface GetLatestAssessmentIdCommandOutput extends GetLatestAssessmentIdResponse, __MetadataBearer {}

/**
 * <p>Retrieve the latest ID of a specific assessment task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubStrategyClient, GetLatestAssessmentIdCommand } from "@aws-sdk/client-migrationhubstrategy"; // ES Modules import
 * // const { MigrationHubStrategyClient, GetLatestAssessmentIdCommand } = require("@aws-sdk/client-migrationhubstrategy"); // CommonJS import
 * const client = new MigrationHubStrategyClient(config);
 * const command = new GetLatestAssessmentIdCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLatestAssessmentIdCommandInput} for command's `input` shape.
 * @see {@link GetLatestAssessmentIdCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubStrategyClientResolvedConfig | config} for MigrationHubStrategyClient's `config` shape.
 *
 */
export class GetLatestAssessmentIdCommand extends $Command<
  GetLatestAssessmentIdCommandInput,
  GetLatestAssessmentIdCommandOutput,
  MigrationHubStrategyClientResolvedConfig
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

  constructor(readonly input: GetLatestAssessmentIdCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MigrationHubStrategyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetLatestAssessmentIdCommandInput, GetLatestAssessmentIdCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetLatestAssessmentIdCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubStrategyClient";
    const commandName = "GetLatestAssessmentIdCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetLatestAssessmentIdRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetLatestAssessmentIdResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetLatestAssessmentIdCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetLatestAssessmentIdCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetLatestAssessmentIdCommandOutput> {
    return deserializeAws_restJson1GetLatestAssessmentIdCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
