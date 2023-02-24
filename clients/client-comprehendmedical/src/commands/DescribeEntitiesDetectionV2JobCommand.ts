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
  ComprehendMedicalClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ComprehendMedicalClient";
import {
  DescribeEntitiesDetectionV2JobRequest,
  DescribeEntitiesDetectionV2JobRequestFilterSensitiveLog,
  DescribeEntitiesDetectionV2JobResponse,
  DescribeEntitiesDetectionV2JobResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeEntitiesDetectionV2JobCommand,
  serializeAws_json1_1DescribeEntitiesDetectionV2JobCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeEntitiesDetectionV2JobCommandInput extends DescribeEntitiesDetectionV2JobRequest {}
export interface DescribeEntitiesDetectionV2JobCommandOutput
  extends DescribeEntitiesDetectionV2JobResponse,
    __MetadataBearer {}

/**
 * <p>Gets the properties associated with a medical entities detection job. Use this operation
 *       to get the status of a detection job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, DescribeEntitiesDetectionV2JobCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, DescribeEntitiesDetectionV2JobCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const command = new DescribeEntitiesDetectionV2JobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEntitiesDetectionV2JobCommandInput} for command's `input` shape.
 * @see {@link DescribeEntitiesDetectionV2JobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendMedicalClientResolvedConfig | config} for ComprehendMedicalClient's `config` shape.
 *
 */
export class DescribeEntitiesDetectionV2JobCommand extends $Command<
  DescribeEntitiesDetectionV2JobCommandInput,
  DescribeEntitiesDetectionV2JobCommandOutput,
  ComprehendMedicalClientResolvedConfig
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

  constructor(readonly input: DescribeEntitiesDetectionV2JobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendMedicalClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeEntitiesDetectionV2JobCommandInput, DescribeEntitiesDetectionV2JobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeEntitiesDetectionV2JobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendMedicalClient";
    const commandName = "DescribeEntitiesDetectionV2JobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeEntitiesDetectionV2JobRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeEntitiesDetectionV2JobResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeEntitiesDetectionV2JobCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeEntitiesDetectionV2JobCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeEntitiesDetectionV2JobCommandOutput> {
    return deserializeAws_json1_1DescribeEntitiesDetectionV2JobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
