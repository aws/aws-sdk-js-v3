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
  ListLabelingJobsForWorkteamRequest,
  ListLabelingJobsForWorkteamRequestFilterSensitiveLog,
  ListLabelingJobsForWorkteamResponse,
  ListLabelingJobsForWorkteamResponseFilterSensitiveLog,
} from "../models/models_3";
import {
  deserializeAws_json1_1ListLabelingJobsForWorkteamCommand,
  serializeAws_json1_1ListLabelingJobsForWorkteamCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

export interface ListLabelingJobsForWorkteamCommandInput extends ListLabelingJobsForWorkteamRequest {}
export interface ListLabelingJobsForWorkteamCommandOutput
  extends ListLabelingJobsForWorkteamResponse,
    __MetadataBearer {}

/**
 * <p>Gets a list of labeling jobs assigned to a specified work team.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListLabelingJobsForWorkteamCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListLabelingJobsForWorkteamCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListLabelingJobsForWorkteamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLabelingJobsForWorkteamCommandInput} for command's `input` shape.
 * @see {@link ListLabelingJobsForWorkteamCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 */
export class ListLabelingJobsForWorkteamCommand extends $Command<
  ListLabelingJobsForWorkteamCommandInput,
  ListLabelingJobsForWorkteamCommandOutput,
  SageMakerClientResolvedConfig
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

  constructor(readonly input: ListLabelingJobsForWorkteamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListLabelingJobsForWorkteamCommandInput, ListLabelingJobsForWorkteamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListLabelingJobsForWorkteamCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListLabelingJobsForWorkteamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListLabelingJobsForWorkteamRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListLabelingJobsForWorkteamResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListLabelingJobsForWorkteamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListLabelingJobsForWorkteamCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListLabelingJobsForWorkteamCommandOutput> {
    return deserializeAws_json1_1ListLabelingJobsForWorkteamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
