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

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import {
  GetExportSnapshotRecordsRequest,
  GetExportSnapshotRecordsRequestFilterSensitiveLog,
  GetExportSnapshotRecordsResult,
  GetExportSnapshotRecordsResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1GetExportSnapshotRecordsCommand,
  serializeAws_json1_1GetExportSnapshotRecordsCommand,
} from "../protocols/Aws_json1_1";

export interface GetExportSnapshotRecordsCommandInput extends GetExportSnapshotRecordsRequest {}
export interface GetExportSnapshotRecordsCommandOutput extends GetExportSnapshotRecordsResult, __MetadataBearer {}

/**
 * <p>Returns all export snapshot records created as a result of the <code>export
 *         snapshot</code> operation.</p>
 *          <p>An export snapshot record can be used to create a new Amazon EC2 instance and its related
 *       resources with the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateCloudFormationStack.html">CreateCloudFormationStack</a>
 *       action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetExportSnapshotRecordsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetExportSnapshotRecordsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetExportSnapshotRecordsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetExportSnapshotRecordsCommandInput} for command's `input` shape.
 * @see {@link GetExportSnapshotRecordsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class GetExportSnapshotRecordsCommand extends $Command<
  GetExportSnapshotRecordsCommandInput,
  GetExportSnapshotRecordsCommandOutput,
  LightsailClientResolvedConfig
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

  constructor(readonly input: GetExportSnapshotRecordsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetExportSnapshotRecordsCommandInput, GetExportSnapshotRecordsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetExportSnapshotRecordsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetExportSnapshotRecordsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetExportSnapshotRecordsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetExportSnapshotRecordsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetExportSnapshotRecordsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetExportSnapshotRecordsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetExportSnapshotRecordsCommandOutput> {
    return deserializeAws_json1_1GetExportSnapshotRecordsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
