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

import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { ListComplianceStatusRequest, ListComplianceStatusResponse } from "../models/models_0";
import { de_ListComplianceStatusCommand, se_ListComplianceStatusCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListComplianceStatusCommand}.
 */
export interface ListComplianceStatusCommandInput extends ListComplianceStatusRequest {}
/**
 * @public
 *
 * The output of {@link ListComplianceStatusCommand}.
 */
export interface ListComplianceStatusCommandOutput extends ListComplianceStatusResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns an array of <code>PolicyComplianceStatus</code> objects. Use
 *         <code>PolicyComplianceStatus</code> to get a summary of which member accounts are protected
 *       by the specified policy. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, ListComplianceStatusCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, ListComplianceStatusCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const input = { // ListComplianceStatusRequest
 *   PolicyId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListComplianceStatusCommand(input);
 * const response = await client.send(command);
 * // { // ListComplianceStatusResponse
 * //   PolicyComplianceStatusList: [ // PolicyComplianceStatusList
 * //     { // PolicyComplianceStatus
 * //       PolicyOwner: "STRING_VALUE",
 * //       PolicyId: "STRING_VALUE",
 * //       PolicyName: "STRING_VALUE",
 * //       MemberAccount: "STRING_VALUE",
 * //       EvaluationResults: [ // EvaluationResults
 * //         { // EvaluationResult
 * //           ComplianceStatus: "COMPLIANT" || "NON_COMPLIANT",
 * //           ViolatorCount: Number("long"),
 * //           EvaluationLimitExceeded: true || false,
 * //         },
 * //       ],
 * //       LastUpdated: new Date("TIMESTAMP"),
 * //       IssueInfoMap: { // IssueInfoMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListComplianceStatusCommandInput - {@link ListComplianceStatusCommandInput}
 * @returns {@link ListComplianceStatusCommandOutput}
 * @see {@link ListComplianceStatusCommandInput} for command's `input` shape.
 * @see {@link ListComplianceStatusCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for FMSClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (client fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry
 *       your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link FMSServiceException}
 * <p>Base exception class for all service exceptions from FMS service.</p>
 *
 */
export class ListComplianceStatusCommand extends $Command<
  ListComplianceStatusCommandInput,
  ListComplianceStatusCommandOutput,
  FMSClientResolvedConfig
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
  constructor(readonly input: ListComplianceStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListComplianceStatusCommandInput, ListComplianceStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListComplianceStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FMSClient";
    const commandName = "ListComplianceStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSFMS_20180101",
        operation: "ListComplianceStatus",
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
  private serialize(input: ListComplianceStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListComplianceStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListComplianceStatusCommandOutput> {
    return de_ListComplianceStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
