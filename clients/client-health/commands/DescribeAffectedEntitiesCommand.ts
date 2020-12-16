import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import { DescribeAffectedEntitiesRequest, DescribeAffectedEntitiesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeAffectedEntitiesCommand,
  serializeAws_json1_1DescribeAffectedEntitiesCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type DescribeAffectedEntitiesCommandInput = DescribeAffectedEntitiesRequest;
export type DescribeAffectedEntitiesCommandOutput = DescribeAffectedEntitiesResponse & __MetadataBearer;

/**
 * <p>Returns a list of entities that have been affected by the specified events, based on the
 *          specified filter criteria. Entities can refer to individual customer resources, groups of
 *          customer resources, or any other construct, depending on the AWS service. Events that have
 *          impact beyond that of the affected entities, or where the extent of impact is unknown,
 *          include at least one entity indicating this.</p>
 *          <p>At least one event ARN is required. Results are sorted by the
 *             <code>lastUpdatedTime</code> of the entity, starting with the most recent.</p>
 *
 *          <note>
 *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p>
 *          </note>
 */
export class DescribeAffectedEntitiesCommand extends $Command<
  DescribeAffectedEntitiesCommandInput,
  DescribeAffectedEntitiesCommandOutput,
  HealthClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAffectedEntitiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: HealthClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAffectedEntitiesCommandInput, DescribeAffectedEntitiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HealthClient";
    const commandName = "DescribeAffectedEntitiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAffectedEntitiesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAffectedEntitiesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAffectedEntitiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeAffectedEntitiesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAffectedEntitiesCommandOutput> {
    return deserializeAws_json1_1DescribeAffectedEntitiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
