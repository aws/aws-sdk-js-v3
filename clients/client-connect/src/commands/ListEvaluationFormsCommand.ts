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
import { ListEvaluationFormsRequest, ListEvaluationFormsResponse } from "../models/models_1";
import { de_ListEvaluationFormsCommand, se_ListEvaluationFormsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListEvaluationFormsCommand}.
 */
export interface ListEvaluationFormsCommandInput extends ListEvaluationFormsRequest {}
/**
 * @public
 *
 * The output of {@link ListEvaluationFormsCommand}.
 */
export interface ListEvaluationFormsCommandOutput extends ListEvaluationFormsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists evaluation forms in the specified Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListEvaluationFormsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListEvaluationFormsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // ListEvaluationFormsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListEvaluationFormsCommand(input);
 * const response = await client.send(command);
 * // { // ListEvaluationFormsResponse
 * //   EvaluationFormSummaryList: [ // EvaluationFormSummaryList // required
 * //     { // EvaluationFormSummary
 * //       EvaluationFormId: "STRING_VALUE", // required
 * //       EvaluationFormArn: "STRING_VALUE", // required
 * //       Title: "STRING_VALUE", // required
 * //       CreatedTime: new Date("TIMESTAMP"), // required
 * //       CreatedBy: "STRING_VALUE", // required
 * //       LastModifiedTime: new Date("TIMESTAMP"), // required
 * //       LastModifiedBy: "STRING_VALUE", // required
 * //       LastActivatedTime: new Date("TIMESTAMP"),
 * //       LastActivatedBy: "STRING_VALUE",
 * //       LatestVersion: Number("int"), // required
 * //       ActiveVersion: Number("int"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEvaluationFormsCommandInput - {@link ListEvaluationFormsCommandInput}
 * @returns {@link ListEvaluationFormsCommandOutput}
 * @see {@link ListEvaluationFormsCommandInput} for command's `input` shape.
 * @see {@link ListEvaluationFormsCommandOutput} for command's `response` shape.
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
export class ListEvaluationFormsCommand extends $Command<
  ListEvaluationFormsCommandInput,
  ListEvaluationFormsCommandOutput,
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
  constructor(readonly input: ListEvaluationFormsCommandInput) {
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
  ): Handler<ListEvaluationFormsCommandInput, ListEvaluationFormsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListEvaluationFormsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "ListEvaluationFormsCommand";
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
  private serialize(input: ListEvaluationFormsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListEvaluationFormsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEvaluationFormsCommandOutput> {
    return de_ListEvaluationFormsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
