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
import {
  DescribeFindingsRequest,
  DescribeFindingsRequestFilterSensitiveLog,
  DescribeFindingsResponse,
  DescribeFindingsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeFindingsCommand,
  serializeAws_json1_1DescribeFindingsCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link DescribeFindingsCommand}.
 */
export interface DescribeFindingsCommandInput extends DescribeFindingsRequest {}
/**
 * The output of {@link DescribeFindingsCommand}.
 */
export interface DescribeFindingsCommandOutput extends DescribeFindingsResponse, __MetadataBearer {}

/**
 * <p>Describes the findings that are specified by the ARNs of the findings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, DescribeFindingsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, DescribeFindingsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new DescribeFindingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFindingsCommandInput} for command's `input` shape.
 * @see {@link DescribeFindingsCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
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
      inputFilterSensitiveLog: DescribeFindingsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeFindingsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeFindingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeFindingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeFindingsCommandOutput> {
    return deserializeAws_json1_1DescribeFindingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
