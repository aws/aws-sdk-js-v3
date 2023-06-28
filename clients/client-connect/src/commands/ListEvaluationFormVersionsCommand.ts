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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { ListEvaluationFormVersionsRequest, ListEvaluationFormVersionsResponse } from "../models/models_1";
import { de_ListEvaluationFormVersionsCommand, se_ListEvaluationFormVersionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListEvaluationFormVersionsCommand}.
 */
export interface ListEvaluationFormVersionsCommandInput extends ListEvaluationFormVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListEvaluationFormVersionsCommand}.
 */
export interface ListEvaluationFormVersionsCommandOutput extends ListEvaluationFormVersionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists versions of an evaluation form in the specified Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListEvaluationFormVersionsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListEvaluationFormVersionsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // ListEvaluationFormVersionsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   EvaluationFormId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListEvaluationFormVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListEvaluationFormVersionsResponse
 * //   EvaluationFormVersionSummaryList: [ // EvaluationFormVersionSummaryList // required
 * //     { // EvaluationFormVersionSummary
 * //       EvaluationFormArn: "STRING_VALUE", // required
 * //       EvaluationFormId: "STRING_VALUE", // required
 * //       EvaluationFormVersion: Number("int"), // required
 * //       Locked: true || false, // required
 * //       Status: "DRAFT" || "ACTIVE", // required
 * //       CreatedTime: new Date("TIMESTAMP"), // required
 * //       CreatedBy: "STRING_VALUE", // required
 * //       LastModifiedTime: new Date("TIMESTAMP"), // required
 * //       LastModifiedBy: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEvaluationFormVersionsCommandInput - {@link ListEvaluationFormVersionsCommandInput}
 * @returns {@link ListEvaluationFormVersionsCommandOutput}
 * @see {@link ListEvaluationFormVersionsCommandInput} for command's `input` shape.
 * @see {@link ListEvaluationFormVersionsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 */
export class ListEvaluationFormVersionsCommand extends $Command<
  ListEvaluationFormVersionsCommandInput,
  ListEvaluationFormVersionsCommandOutput,
  ConnectClientResolvedConfig
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
  constructor(readonly input: ListEvaluationFormVersionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEvaluationFormVersionsCommandInput, ListEvaluationFormVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListEvaluationFormVersionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "ListEvaluationFormVersionsCommand";
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
  private serialize(input: ListEvaluationFormVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListEvaluationFormVersionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListEvaluationFormVersionsCommandOutput> {
    return de_ListEvaluationFormVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
