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

import { CodeGuruSecurityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruSecurityClient";
import { ListScansRequest, ListScansResponse } from "../models/models_0";
import { de_ListScansCommand, se_ListScansCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListScansCommand}.
 */
export interface ListScansCommandInput extends ListScansRequest {}
/**
 * @public
 *
 * The output of {@link ListScansCommand}.
 */
export interface ListScansCommandOutput extends ListScansResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of all the standard scans in an account. Does not return express
 *       scans.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruSecurityClient, ListScansCommand } from "@aws-sdk/client-codeguru-security"; // ES Modules import
 * // const { CodeGuruSecurityClient, ListScansCommand } = require("@aws-sdk/client-codeguru-security"); // CommonJS import
 * const client = new CodeGuruSecurityClient(config);
 * const input = { // ListScansRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListScansCommand(input);
 * const response = await client.send(command);
 * // { // ListScansResponse
 * //   summaries: [ // ScanSummaries
 * //     { // ScanSummary
 * //       scanState: "InProgress" || "Successful" || "Failed", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       scanName: "STRING_VALUE", // required
 * //       runId: "STRING_VALUE", // required
 * //       scanNameArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListScansCommandInput - {@link ListScansCommandInput}
 * @returns {@link ListScansCommandOutput}
 * @see {@link ListScansCommandInput} for command's `input` shape.
 * @see {@link ListScansCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruSecurityClientResolvedConfig | config} for CodeGuruSecurityClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CodeGuruSecurityServiceException}
 * <p>Base exception class for all service exceptions from CodeGuruSecurity service.</p>
 *
 */
export class ListScansCommand extends $Command<
  ListScansCommandInput,
  ListScansCommandOutput,
  CodeGuruSecurityClientResolvedConfig
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
  constructor(readonly input: ListScansCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeGuruSecurityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListScansCommandInput, ListScansCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListScansCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeGuruSecurityClient";
    const commandName = "ListScansCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AwsCodeGuruSecurity",
        operation: "ListScans",
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
  private serialize(input: ListScansCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListScansCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListScansCommandOutput> {
    return de_ListScansCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
