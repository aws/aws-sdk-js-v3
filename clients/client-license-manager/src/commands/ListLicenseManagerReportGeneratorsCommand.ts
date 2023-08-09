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

import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import {
  ListLicenseManagerReportGeneratorsRequest,
  ListLicenseManagerReportGeneratorsResponse,
} from "../models/models_0";
import {
  de_ListLicenseManagerReportGeneratorsCommand,
  se_ListLicenseManagerReportGeneratorsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListLicenseManagerReportGeneratorsCommand}.
 */
export interface ListLicenseManagerReportGeneratorsCommandInput extends ListLicenseManagerReportGeneratorsRequest {}
/**
 * @public
 *
 * The output of {@link ListLicenseManagerReportGeneratorsCommand}.
 */
export interface ListLicenseManagerReportGeneratorsCommandOutput
  extends ListLicenseManagerReportGeneratorsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists the report generators for your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListLicenseManagerReportGeneratorsCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ListLicenseManagerReportGeneratorsCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const input = { // ListLicenseManagerReportGeneratorsRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // FilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListLicenseManagerReportGeneratorsCommand(input);
 * const response = await client.send(command);
 * // { // ListLicenseManagerReportGeneratorsResponse
 * //   ReportGenerators: [ // ReportGeneratorList
 * //     { // ReportGenerator
 * //       ReportGeneratorName: "STRING_VALUE",
 * //       ReportType: [ // ReportTypeList
 * //         "LicenseConfigurationSummaryReport" || "LicenseConfigurationUsageReport",
 * //       ],
 * //       ReportContext: { // ReportContext
 * //         licenseConfigurationArns: [ // ArnList // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       ReportFrequency: { // ReportFrequency
 * //         value: Number("int"),
 * //         period: "DAY" || "WEEK" || "MONTH",
 * //       },
 * //       LicenseManagerReportGeneratorArn: "STRING_VALUE",
 * //       LastRunStatus: "STRING_VALUE",
 * //       LastRunFailureReason: "STRING_VALUE",
 * //       LastReportGenerationTime: "STRING_VALUE",
 * //       ReportCreatorAccount: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       S3Location: { // S3Location
 * //         bucket: "STRING_VALUE",
 * //         keyPrefix: "STRING_VALUE",
 * //       },
 * //       CreateTime: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLicenseManagerReportGeneratorsCommandInput - {@link ListLicenseManagerReportGeneratorsCommandInput}
 * @returns {@link ListLicenseManagerReportGeneratorsCommandOutput}
 * @see {@link ListLicenseManagerReportGeneratorsCommandInput} for command's `input` shape.
 * @see {@link ListLicenseManagerReportGeneratorsCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for LicenseManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to resource denied.</p>
 *
 * @throws {@link AuthorizationException} (client fault)
 *  <p>The Amazon Web Services user account does not have permission to perform the action. Check the IAM
 *          policy associated with this account.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link RateLimitExceededException} (client fault)
 *  <p>Too many requests have been submitted. Try again after a brief wait.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>Your resource limits have been exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource cannot be found.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The provided input is not valid. Try your request again.</p>
 *
 * @throws {@link LicenseManagerServiceException}
 * <p>Base exception class for all service exceptions from LicenseManager service.</p>
 *
 */
export class ListLicenseManagerReportGeneratorsCommand extends $Command<
  ListLicenseManagerReportGeneratorsCommandInput,
  ListLicenseManagerReportGeneratorsCommandOutput,
  LicenseManagerClientResolvedConfig
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
  constructor(readonly input: ListLicenseManagerReportGeneratorsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LicenseManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListLicenseManagerReportGeneratorsCommandInput, ListLicenseManagerReportGeneratorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListLicenseManagerReportGeneratorsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerClient";
    const commandName = "ListLicenseManagerReportGeneratorsCommand";
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
  private serialize(
    input: ListLicenseManagerReportGeneratorsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListLicenseManagerReportGeneratorsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListLicenseManagerReportGeneratorsCommandOutput> {
    return de_ListLicenseManagerReportGeneratorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
