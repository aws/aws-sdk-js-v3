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

import { GetFindingHistoryRequest, GetFindingHistoryResponse } from "../models/models_2";
import { de_GetFindingHistoryCommand, se_GetFindingHistoryCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetFindingHistoryCommand}.
 */
export interface GetFindingHistoryCommandInput extends GetFindingHistoryRequest {}
/**
 * @public
 *
 * The output of {@link GetFindingHistoryCommand}.
 */
export interface GetFindingHistoryCommandOutput extends GetFindingHistoryResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *          Returns history for a Security Hub finding in the last 90 days. The history includes changes made to any fields in
 *          the Amazon Web Services Security Finding Format (ASFF).
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetFindingHistoryCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetFindingHistoryCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // GetFindingHistoryRequest
 *   FindingIdentifier: { // AwsSecurityFindingIdentifier
 *     Id: "STRING_VALUE", // required
 *     ProductArn: "STRING_VALUE", // required
 *   },
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"),
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetFindingHistoryCommand(input);
 * const response = await client.send(command);
 * // { // GetFindingHistoryResponse
 * //   Records: [ // FindingHistoryRecordList
 * //     { // FindingHistoryRecord
 * //       FindingIdentifier: { // AwsSecurityFindingIdentifier
 * //         Id: "STRING_VALUE", // required
 * //         ProductArn: "STRING_VALUE", // required
 * //       },
 * //       UpdateTime: new Date("TIMESTAMP"),
 * //       FindingCreated: true || false,
 * //       UpdateSource: { // FindingHistoryUpdateSource
 * //         Type: "BATCH_UPDATE_FINDINGS" || "BATCH_IMPORT_FINDINGS",
 * //         Identity: "STRING_VALUE",
 * //       },
 * //       Updates: [ // FindingHistoryUpdatesList
 * //         { // FindingHistoryUpdate
 * //           UpdatedField: "STRING_VALUE",
 * //           OldValue: "STRING_VALUE",
 * //           NewValue: "STRING_VALUE",
 * //         },
 * //       ],
 * //       NextToken: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetFindingHistoryCommandInput - {@link GetFindingHistoryCommandInput}
 * @returns {@link GetFindingHistoryCommandOutput}
 * @see {@link GetFindingHistoryCommandInput} for command's `input` shape.
 * @see {@link GetFindingHistoryCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 * @example To get finding history
 * ```javascript
 * // The following example retrieves the history of the specified finding during the specified time frame. If the time frame permits, Security Hub returns finding history for the last 90 days.
 * const input = {
 *   "EndTime": "2021-09-31T15:53:35.573Z",
 *   "FindingIdentifier": {
 *     "Id": "a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *     "ProductArn": "arn:aws:securityhub:us-west-2:123456789012:product/123456789012/default"
 *   },
 *   "MaxResults": 2,
 *   "StartTime": "2021-09-30T15:53:35.573Z"
 * };
 * const command = new GetFindingHistoryCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Records": [
 *     {
 *       "FindingCreated": false,
 *       "FindingIdentifier": {
 *         "Id": "a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *         "ProductArn": "arn:aws:securityhub:us-west-2:123456789012:product/123456789012/default"
 *       },
 *       "UpdateSource": {
 *         "Identity": "arn:aws:iam::444455556666:role/Admin",
 *         "Type": "BATCH_UPDATE_FINDINGS"
 *       },
 *       "UpdateTime": "2021-09-31T15:52:25.573Z",
 *       "Updates": [
 *         {
 *           "NewValue": "MEDIUM",
 *           "OldValue": "HIGH",
 *           "UpdatedField": "Severity"
 *         }
 *       ]
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-get-finding-history-1680270012186
 * ```
 *
 */
export class GetFindingHistoryCommand extends $Command<
  GetFindingHistoryCommandInput,
  GetFindingHistoryCommandOutput,
  SecurityHubClientResolvedConfig
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
  constructor(readonly input: GetFindingHistoryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetFindingHistoryCommandInput, GetFindingHistoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetFindingHistoryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "GetFindingHistoryCommand";
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
  private serialize(input: GetFindingHistoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetFindingHistoryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetFindingHistoryCommandOutput> {
    return de_GetFindingHistoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
