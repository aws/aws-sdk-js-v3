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
} from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { ListExecutorsRequest, ListExecutorsResponse } from "../models/models_0";
import { de_ListExecutorsCommand, se_ListExecutorsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListExecutorsCommand}.
 */
export interface ListExecutorsCommandInput extends ListExecutorsRequest {}
/**
 * @public
 *
 * The output of {@link ListExecutorsCommand}.
 */
export interface ListExecutorsCommandOutput extends ListExecutorsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists, in descending order, the executors that joined a session. Newer executors are
 *             listed first; older executors are listed later. The result can be optionally filtered by
 *             state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, ListExecutorsCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, ListExecutorsCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const input = { // ListExecutorsRequest
 *   SessionId: "STRING_VALUE", // required
 *   ExecutorStateFilter: "CREATING" || "CREATED" || "REGISTERED" || "TERMINATING" || "TERMINATED" || "FAILED",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListExecutorsCommand(input);
 * const response = await client.send(command);
 * // { // ListExecutorsResponse
 * //   SessionId: "STRING_VALUE", // required
 * //   NextToken: "STRING_VALUE",
 * //   ExecutorsSummary: [ // ExecutorsSummaryList
 * //     { // ExecutorsSummary
 * //       ExecutorId: "STRING_VALUE", // required
 * //       ExecutorType: "COORDINATOR" || "GATEWAY" || "WORKER",
 * //       StartDateTime: Number("long"),
 * //       TerminationDateTime: Number("long"),
 * //       ExecutorState: "CREATING" || "CREATED" || "REGISTERED" || "TERMINATING" || "TERMINATED" || "FAILED",
 * //       ExecutorSize: Number("long"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListExecutorsCommandInput - {@link ListExecutorsCommandInput}
 * @returns {@link ListExecutorsCommandOutput}
 * @see {@link ListExecutorsCommandInput} for command's `input` shape.
 * @see {@link ListExecutorsCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource, such as a workgroup, was not found.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 */
export class ListExecutorsCommand extends $Command<
  ListExecutorsCommandInput,
  ListExecutorsCommandOutput,
  AthenaClientResolvedConfig
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
  constructor(readonly input: ListExecutorsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListExecutorsCommandInput, ListExecutorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListExecutorsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "ListExecutorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: ListExecutorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListExecutorsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListExecutorsCommandOutput> {
    return de_ListExecutorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
