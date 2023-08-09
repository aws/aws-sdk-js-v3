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

import {
  BatchUpdateStandardsControlAssociationsRequest,
  BatchUpdateStandardsControlAssociationsResponse,
} from "../models/models_2";
import {
  de_BatchUpdateStandardsControlAssociationsCommand,
  se_BatchUpdateStandardsControlAssociationsCommand,
} from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchUpdateStandardsControlAssociationsCommand}.
 */
export interface BatchUpdateStandardsControlAssociationsCommandInput
  extends BatchUpdateStandardsControlAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link BatchUpdateStandardsControlAssociationsCommand}.
 */
export interface BatchUpdateStandardsControlAssociationsCommandOutput
  extends BatchUpdateStandardsControlAssociationsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>
 *          For a batch of security controls and standards, this operation updates the enablement status of a control in a standard.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, BatchUpdateStandardsControlAssociationsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, BatchUpdateStandardsControlAssociationsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // BatchUpdateStandardsControlAssociationsRequest
 *   StandardsControlAssociationUpdates: [ // StandardsControlAssociationUpdates // required
 *     { // StandardsControlAssociationUpdate
 *       StandardsArn: "STRING_VALUE", // required
 *       SecurityControlId: "STRING_VALUE", // required
 *       AssociationStatus: "ENABLED" || "DISABLED", // required
 *       UpdatedReason: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new BatchUpdateStandardsControlAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // BatchUpdateStandardsControlAssociationsResponse
 * //   UnprocessedAssociationUpdates: [ // UnprocessedStandardsControlAssociationUpdates
 * //     { // UnprocessedStandardsControlAssociationUpdate
 * //       StandardsControlAssociationUpdate: { // StandardsControlAssociationUpdate
 * //         StandardsArn: "STRING_VALUE", // required
 * //         SecurityControlId: "STRING_VALUE", // required
 * //         AssociationStatus: "ENABLED" || "DISABLED", // required
 * //         UpdatedReason: "STRING_VALUE",
 * //       },
 * //       ErrorCode: "INVALID_INPUT" || "ACCESS_DENIED" || "NOT_FOUND" || "LIMIT_EXCEEDED", // required
 * //       ErrorReason: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchUpdateStandardsControlAssociationsCommandInput - {@link BatchUpdateStandardsControlAssociationsCommandInput}
 * @returns {@link BatchUpdateStandardsControlAssociationsCommandOutput}
 * @see {@link BatchUpdateStandardsControlAssociationsCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateStandardsControlAssociationsCommandOutput} for command's `response` shape.
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
 * @example To update enablement status of a batch of controls
 * ```javascript
 * // The following example disables CloudWatch.12 in CIS AWS Foundations Benchmark v1.2.0. The example returns an error for CloudTrail.1 because an invalid standard ARN is provided.
 * const input = {
 *   "StandardsControlAssociationUpdates": [
 *     {
 *       "AssociationStatus": "DISABLED",
 *       "SecurityControlId": "CloudTrail.1",
 *       "StandardsArn": "arn:aws:securityhub:::ruleset/sample-standard/v/1.1.0",
 *       "UpdatedReason": "Not relevant to environment"
 *     },
 *     {
 *       "AssociationStatus": "DISABLED",
 *       "SecurityControlId": "CloudWatch.12",
 *       "StandardsArn": "arn:aws:securityhub:::ruleset/cis-aws-foundations-benchmark/v/1.2.0",
 *       "UpdatedReason": "Not relevant to environment"
 *     }
 *   ]
 * };
 * const command = new BatchUpdateStandardsControlAssociationsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "UnprocessedAssociationUpdates": [
 *     {
 *       "ErrorCode": "INVALID_INPUT",
 *       "ErrorReason": "Invalid Standards Arn: 'arn:aws:securityhub:::ruleset/sample-standard/v/1.1.0'",
 *       "StandardsControlAssociationUpdate": {
 *         "AssociationStatus": "DISABLED",
 *         "SecurityControlId": "CloudTrail.1",
 *         "StandardsArn": "arn:aws:securityhub:::ruleset/sample-standard/v/1.1.0",
 *         "UpdatedReason": "Test Reason"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-update-enablement-status-of-a-batch-of-controls-1683300378416
 * ```
 *
 */
export class BatchUpdateStandardsControlAssociationsCommand extends $Command<
  BatchUpdateStandardsControlAssociationsCommandInput,
  BatchUpdateStandardsControlAssociationsCommandOutput,
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
  constructor(readonly input: BatchUpdateStandardsControlAssociationsCommandInput) {
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
  ): Handler<
    BatchUpdateStandardsControlAssociationsCommandInput,
    BatchUpdateStandardsControlAssociationsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        BatchUpdateStandardsControlAssociationsCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "BatchUpdateStandardsControlAssociationsCommand";
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
    input: BatchUpdateStandardsControlAssociationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_BatchUpdateStandardsControlAssociationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchUpdateStandardsControlAssociationsCommandOutput> {
    return de_BatchUpdateStandardsControlAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
