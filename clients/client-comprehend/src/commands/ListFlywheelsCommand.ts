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

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { ListFlywheelsRequest, ListFlywheelsResponse } from "../models/models_0";
import { de_ListFlywheelsCommand, se_ListFlywheelsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListFlywheelsCommand}.
 */
export interface ListFlywheelsCommandInput extends ListFlywheelsRequest {}
/**
 * @public
 *
 * The output of {@link ListFlywheelsCommand}.
 */
export interface ListFlywheelsCommandOutput extends ListFlywheelsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets a list of the flywheels that you have created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, ListFlywheelsCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, ListFlywheelsCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const input = { // ListFlywheelsRequest
 *   Filter: { // FlywheelFilter
 *     Status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "FAILED",
 *     CreationTimeAfter: new Date("TIMESTAMP"),
 *     CreationTimeBefore: new Date("TIMESTAMP"),
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListFlywheelsCommand(input);
 * const response = await client.send(command);
 * // { // ListFlywheelsResponse
 * //   FlywheelSummaryList: [ // FlywheelSummaryList
 * //     { // FlywheelSummary
 * //       FlywheelArn: "STRING_VALUE",
 * //       ActiveModelArn: "STRING_VALUE",
 * //       DataLakeS3Uri: "STRING_VALUE",
 * //       Status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "FAILED",
 * //       ModelType: "DOCUMENT_CLASSIFIER" || "ENTITY_RECOGNIZER",
 * //       Message: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       LatestFlywheelIteration: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFlywheelsCommandInput - {@link ListFlywheelsCommandInput}
 * @returns {@link ListFlywheelsCommandOutput}
 * @see {@link ListFlywheelsCommandInput} for command's `input` shape.
 * @see {@link ListFlywheelsCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidFilterException} (client fault)
 *  <p>The filter specified for the operation is invalid. Specify a different
 *       filter.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ComprehendServiceException}
 * <p>Base exception class for all service exceptions from Comprehend service.</p>
 *
 */
export class ListFlywheelsCommand extends $Command<
  ListFlywheelsCommandInput,
  ListFlywheelsCommandOutput,
  ComprehendClientResolvedConfig
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
  constructor(readonly input: ListFlywheelsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListFlywheelsCommandInput, ListFlywheelsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListFlywheelsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "ListFlywheelsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Comprehend_20171127",
        operation: "ListFlywheels",
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
  private serialize(input: ListFlywheelsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListFlywheelsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListFlywheelsCommandOutput> {
    return de_ListFlywheelsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
