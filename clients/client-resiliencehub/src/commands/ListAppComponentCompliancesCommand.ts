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

import { ListAppComponentCompliancesRequest, ListAppComponentCompliancesResponse } from "../models/models_0";
import {
  de_ListAppComponentCompliancesCommand,
  se_ListAppComponentCompliancesCommand,
} from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAppComponentCompliancesCommand}.
 */
export interface ListAppComponentCompliancesCommandInput extends ListAppComponentCompliancesRequest {}
/**
 * @public
 *
 * The output of {@link ListAppComponentCompliancesCommand}.
 */
export interface ListAppComponentCompliancesCommandOutput
  extends ListAppComponentCompliancesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists the compliances for an Resilience Hub Application Component.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, ListAppComponentCompliancesCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, ListAppComponentCompliancesCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const input = { // ListAppComponentCompliancesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   assessmentArn: "STRING_VALUE", // required
 * };
 * const command = new ListAppComponentCompliancesCommand(input);
 * const response = await client.send(command);
 * // { // ListAppComponentCompliancesResponse
 * //   componentCompliances: [ // ComponentCompliancesList // required
 * //     { // AppComponentCompliance
 * //       cost: { // Cost
 * //         amount: Number("double"), // required
 * //         currency: "STRING_VALUE", // required
 * //         frequency: "STRING_VALUE", // required
 * //       },
 * //       appComponentName: "STRING_VALUE",
 * //       compliance: { // AssessmentCompliance
 * //         "<keys>": { // DisruptionCompliance
 * //           achievableRtoInSecs: Number("int"),
 * //           currentRtoInSecs: Number("int"),
 * //           rtoReferenceId: "STRING_VALUE",
 * //           rtoDescription: "STRING_VALUE",
 * //           currentRpoInSecs: Number("int"),
 * //           rpoReferenceId: "STRING_VALUE",
 * //           rpoDescription: "STRING_VALUE",
 * //           complianceStatus: "STRING_VALUE", // required
 * //           achievableRpoInSecs: Number("int"),
 * //           message: "STRING_VALUE",
 * //         },
 * //       },
 * //       message: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       resiliencyScore: { // ResiliencyScore
 * //         score: Number("double"), // required
 * //         disruptionScore: { // DisruptionResiliencyScore // required
 * //           "<keys>": Number("double"),
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAppComponentCompliancesCommandInput - {@link ListAppComponentCompliancesCommandInput}
 * @returns {@link ListAppComponentCompliancesCommandOutput}
 * @see {@link ListAppComponentCompliancesCommandInput} for command's `input` shape.
 * @see {@link ListAppComponentCompliancesCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Resilience Hub
 *       service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception occurs when the specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception occurs when you have exceeded the limit on the number of requests per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This exception occurs when a request is not valid.</p>
 *
 * @throws {@link ResiliencehubServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehub service.</p>
 *
 */
export class ListAppComponentCompliancesCommand extends $Command<
  ListAppComponentCompliancesCommandInput,
  ListAppComponentCompliancesCommandOutput,
  ResiliencehubClientResolvedConfig
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
  constructor(readonly input: ListAppComponentCompliancesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResiliencehubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAppComponentCompliancesCommandInput, ListAppComponentCompliancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAppComponentCompliancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResiliencehubClient";
    const commandName = "ListAppComponentCompliancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AwsResilienceHub",
        operation: "ListAppComponentCompliances",
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
  private serialize(input: ListAppComponentCompliancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAppComponentCompliancesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAppComponentCompliancesCommandOutput> {
    return de_ListAppComponentCompliancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
