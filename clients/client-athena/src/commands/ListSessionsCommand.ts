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

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { ListSessionsRequest, ListSessionsResponse } from "../models/models_0";
import { de_ListSessionsCommand, se_ListSessionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSessionsCommand}.
 */
export interface ListSessionsCommandInput extends ListSessionsRequest {}
/**
 * @public
 *
 * The output of {@link ListSessionsCommand}.
 */
export interface ListSessionsCommandOutput extends ListSessionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the sessions in a workgroup that are in an active state like
 *                 <code>CREATING</code>, <code>CREATED</code>, <code>IDLE</code>, or
 *             <code>BUSY</code>. Newer sessions are listed first; older sessions are listed
 *             later.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, ListSessionsCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, ListSessionsCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const input = { // ListSessionsRequest
 *   WorkGroup: "STRING_VALUE", // required
 *   StateFilter: "CREATING" || "CREATED" || "IDLE" || "BUSY" || "TERMINATING" || "TERMINATED" || "DEGRADED" || "FAILED",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListSessionsCommand(input);
 * const response = await client.send(command);
 * // { // ListSessionsResponse
 * //   NextToken: "STRING_VALUE",
 * //   Sessions: [ // SessionsList
 * //     { // SessionSummary
 * //       SessionId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       EngineVersion: { // EngineVersion
 * //         SelectedEngineVersion: "STRING_VALUE",
 * //         EffectiveEngineVersion: "STRING_VALUE",
 * //       },
 * //       NotebookVersion: "STRING_VALUE",
 * //       Status: { // SessionStatus
 * //         StartDateTime: new Date("TIMESTAMP"),
 * //         LastModifiedDateTime: new Date("TIMESTAMP"),
 * //         EndDateTime: new Date("TIMESTAMP"),
 * //         IdleSinceDateTime: new Date("TIMESTAMP"),
 * //         State: "CREATING" || "CREATED" || "IDLE" || "BUSY" || "TERMINATING" || "TERMINATED" || "DEGRADED" || "FAILED",
 * //         StateChangeReason: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSessionsCommandInput - {@link ListSessionsCommandInput}
 * @returns {@link ListSessionsCommandOutput}
 * @see {@link ListSessionsCommandInput} for command's `input` shape.
 * @see {@link ListSessionsCommandOutput} for command's `response` shape.
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
export class ListSessionsCommand extends $Command<
  ListSessionsCommandInput,
  ListSessionsCommandOutput,
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
  constructor(readonly input: ListSessionsCommandInput) {
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
  ): Handler<ListSessionsCommandInput, ListSessionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListSessionsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "ListSessionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonAthena",
        operation: "ListSessions",
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
  private serialize(input: ListSessionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListSessionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSessionsCommandOutput> {
    return de_ListSessionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
