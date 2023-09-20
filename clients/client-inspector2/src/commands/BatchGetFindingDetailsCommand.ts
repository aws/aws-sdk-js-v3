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

import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { BatchGetFindingDetailsRequest, BatchGetFindingDetailsResponse } from "../models/models_0";
import { de_BatchGetFindingDetailsCommand, se_BatchGetFindingDetailsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchGetFindingDetailsCommand}.
 */
export interface BatchGetFindingDetailsCommandInput extends BatchGetFindingDetailsRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetFindingDetailsCommand}.
 */
export interface BatchGetFindingDetailsCommandOutput extends BatchGetFindingDetailsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets vulnerability details for findings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, BatchGetFindingDetailsCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, BatchGetFindingDetailsCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * const client = new Inspector2Client(config);
 * const input = { // BatchGetFindingDetailsRequest
 *   findingArns: [ // FindingArnList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetFindingDetailsCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetFindingDetailsResponse
 * //   findingDetails: [ // FindingDetails
 * //     { // FindingDetail
 * //       findingArn: "STRING_VALUE",
 * //       cisaData: { // CisaData
 * //         dateAdded: new Date("TIMESTAMP"),
 * //         dateDue: new Date("TIMESTAMP"),
 * //         action: "STRING_VALUE",
 * //       },
 * //       riskScore: Number("int"),
 * //       evidences: [ // EvidenceList
 * //         { // Evidence
 * //           evidenceRule: "STRING_VALUE",
 * //           evidenceDetail: "STRING_VALUE",
 * //           severity: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ttps: [ // Ttps
 * //         "STRING_VALUE",
 * //       ],
 * //       tools: [ // Tools
 * //         "STRING_VALUE",
 * //       ],
 * //       exploitObserved: { // ExploitObserved
 * //         lastSeen: new Date("TIMESTAMP"),
 * //         firstSeen: new Date("TIMESTAMP"),
 * //       },
 * //       referenceUrls: [ // VulnerabilityReferenceUrls
 * //         "STRING_VALUE",
 * //       ],
 * //       cwes: [ // Cwes
 * //         "STRING_VALUE",
 * //       ],
 * //       epssScore: Number("double"),
 * //     },
 * //   ],
 * //   errors: [ // FindingDetailsErrorList
 * //     { // FindingDetailsError
 * //       findingArn: "STRING_VALUE", // required
 * //       errorCode: "STRING_VALUE", // required
 * //       errorMessage: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetFindingDetailsCommandInput - {@link BatchGetFindingDetailsCommandInput}
 * @returns {@link BatchGetFindingDetailsCommandOutput}
 * @see {@link BatchGetFindingDetailsCommandInput} for command's `input` shape.
 * @see {@link BatchGetFindingDetailsCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation due to missing required fields or having invalid
 *          inputs.</p>
 *
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 */
export class BatchGetFindingDetailsCommand extends $Command<
  BatchGetFindingDetailsCommandInput,
  BatchGetFindingDetailsCommandOutput,
  Inspector2ClientResolvedConfig
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
  constructor(readonly input: BatchGetFindingDetailsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Inspector2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetFindingDetailsCommandInput, BatchGetFindingDetailsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetFindingDetailsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Inspector2Client";
    const commandName = "BatchGetFindingDetailsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Inspector2",
        operation: "BatchGetFindingDetails",
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
  private serialize(input: BatchGetFindingDetailsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchGetFindingDetailsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetFindingDetailsCommandOutput> {
    return de_BatchGetFindingDetailsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
