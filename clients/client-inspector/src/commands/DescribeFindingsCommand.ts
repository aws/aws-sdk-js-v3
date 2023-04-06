// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { DescribeFindingsRequest, DescribeFindingsResponse } from "../models/models_0";
import { de_DescribeFindingsCommand, se_DescribeFindingsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link DescribeFindingsCommand}.
 */
export interface DescribeFindingsCommandInput extends DescribeFindingsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFindingsCommand}.
 */
export interface DescribeFindingsCommandOutput extends DescribeFindingsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes the findings that are specified by the ARNs of the findings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, DescribeFindingsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, DescribeFindingsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const input = { // DescribeFindingsRequest
 *   findingArns: [ // BatchDescribeArnList // required
 *     "STRING_VALUE",
 *   ],
 *   locale: "STRING_VALUE",
 * };
 * const command = new DescribeFindingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeFindingsCommandInput - {@link DescribeFindingsCommandInput}
 * @returns {@link DescribeFindingsCommandOutput}
 * @see {@link DescribeFindingsCommandInput} for command's `input` shape.
 * @see {@link DescribeFindingsCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *          input parameter.</p>
 *
 *
 * @example Describe findings
 * ```javascript
 * // Describes the findings that are specified by the ARNs of the findings.
 * const input = {
 *   "findingArns": [
 *     "arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq/template/0-4r1V2mAw/run/0-MKkpXXPE/finding/0-HwPnsDm4"
 *   ]
 * };
 * const command = new DescribeFindingsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "failedItems": {},
 *   "findings": [
 *     {
 *       "arn": "arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq/template/0-4r1V2mAw/run/0-MKkpXXPE/finding/0-HwPnsDm4",
 *       "assetAttributes": {
 *         "ipv4Addresses": [],
 *         "schemaVersion": 1
 *       },
 *       "assetType": "ec2-instance",
 *       "attributes": [],
 *       "confidence": 10,
 *       "createdAt": "1458680301.37",
 *       "description": "Amazon Inspector did not find any potential security issues during this assessment.",
 *       "indicatorOfCompromise": false,
 *       "numericSeverity": 0,
 *       "recommendation": "No remediation needed.",
 *       "schemaVersion": 1,
 *       "service": "Inspector",
 *       "serviceAttributes": {
 *         "assessmentRunArn": "arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq/template/0-4r1V2mAw/run/0-MKkpXXPE",
 *         "rulesPackageArn": "arn:aws:inspector:us-west-2:758058086616:rulespackage/0-X1KXtawP",
 *         "schemaVersion": 1
 *       },
 *       "severity": "Informational",
 *       "title": "No potential security issues found",
 *       "updatedAt": "1458680301.37",
 *       "userAttributes": []
 *     }
 *   ]
 * }
 * *\/
 * // example id: describte-findings-1481064771803
 * ```
 *
 */
export class DescribeFindingsCommand extends $Command<
  DescribeFindingsCommandInput,
  DescribeFindingsCommandOutput,
  InspectorClientResolvedConfig
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
  constructor(readonly input: DescribeFindingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InspectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeFindingsCommandInput, DescribeFindingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeFindingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "DescribeFindingsCommand";
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
  private serialize(input: DescribeFindingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeFindingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeFindingsCommandOutput> {
    return de_DescribeFindingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
