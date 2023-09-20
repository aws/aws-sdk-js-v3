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

import { ListStandardsControlAssociationsRequest, ListStandardsControlAssociationsResponse } from "../models/models_2";
import {
  de_ListStandardsControlAssociationsCommand,
  se_ListStandardsControlAssociationsCommand,
} from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListStandardsControlAssociationsCommand}.
 */
export interface ListStandardsControlAssociationsCommandInput extends ListStandardsControlAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListStandardsControlAssociationsCommand}.
 */
export interface ListStandardsControlAssociationsCommandOutput
  extends ListStandardsControlAssociationsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>
 *          Specifies whether a control is currently enabled or disabled in each enabled standard in the calling account.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, ListStandardsControlAssociationsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, ListStandardsControlAssociationsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // ListStandardsControlAssociationsRequest
 *   SecurityControlId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListStandardsControlAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListStandardsControlAssociationsResponse
 * //   StandardsControlAssociationSummaries: [ // StandardsControlAssociationSummaries // required
 * //     { // StandardsControlAssociationSummary
 * //       StandardsArn: "STRING_VALUE", // required
 * //       SecurityControlId: "STRING_VALUE", // required
 * //       SecurityControlArn: "STRING_VALUE", // required
 * //       AssociationStatus: "ENABLED" || "DISABLED", // required
 * //       RelatedRequirements: [ // RelatedRequirementsList
 * //         "STRING_VALUE",
 * //       ],
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //       UpdatedReason: "STRING_VALUE",
 * //       StandardsControlTitle: "STRING_VALUE",
 * //       StandardsControlDescription: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStandardsControlAssociationsCommandInput - {@link ListStandardsControlAssociationsCommandInput}
 * @returns {@link ListStandardsControlAssociationsCommandOutput}
 * @see {@link ListStandardsControlAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListStandardsControlAssociationsCommandOutput} for command's `response` shape.
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
 * @example To say whether standard
 * ```javascript
 * // The following example specifies whether a control is currently enabled or disabled in each enabled standard in the calling account. The response also provides other details about the control.
 * const input = {
 *   "SecurityControlId": "S3.1"
 * };
 * const command = new ListStandardsControlAssociationsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "StandardsControlAssociationSummaries": [
 *     {
 *       "AssociationStatus": "ENABLED",
 *       "RelatedRequirements": [
 *         "PCI DSS 1.2.1",
 *         "PCI DSS 1.3.1",
 *         "PCI DSS 1.3.2",
 *         "PCI DSS 1.3.4",
 *         "PCI DSS 1.3.6"
 *       ],
 *       "SecurityControlArn": "arn:aws:securityhub:us-west-2:110479873537:security-control/S3.1",
 *       "SecurityControlId": "S3.1",
 *       "StandardsArn": "arn:aws:securityhub:us-west-2::standards/pci-dss/v/3.2.1",
 *       "StandardsControlDescription": "This AWS control checks whether the following public access block settings are configured from account level: ignorePublicAcls: True, blockPublicPolicy: True, blockPublicAcls: True, restrictPublicBuckets: True.",
 *       "StandardsControlTitle": "S3 Block Public Access setting should be enabled",
 *       "UpdatedAt": "2022-01-13T23:03:46.648000+00:00"
 *     },
 *     {
 *       "AssociationStatus": "DISABLED",
 *       "RelatedRequirements": [],
 *       "SecurityControlArn": "arn:aws:securityhub:us-west-2:110479873537:security-control/S3.1",
 *       "SecurityControlId": "S3.1",
 *       "StandardsArn": "arn:aws:securityhub:us-west-2::standards/aws-foundational-security-best-practices/v/1.0.0",
 *       "StandardsControlDescription": "This AWS control checks whether the following public access block settings are configured from account level: ignorePublicAcls: True, blockPublicPolicy: True, blockPublicAcls: True, restrictPublicBuckets: True.",
 *       "StandardsControlTitle": "S3 Block Public Access setting should be enabled",
 *       "UpdatedAt": "2022-08-12T22:59:04.924000+00:00",
 *       "UpdatedReason": "Not relevant to environment"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-say-whether-standard-1678389297986
 * ```
 *
 */
export class ListStandardsControlAssociationsCommand extends $Command<
  ListStandardsControlAssociationsCommandInput,
  ListStandardsControlAssociationsCommandOutput,
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
  constructor(readonly input: ListStandardsControlAssociationsCommandInput) {
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
  ): Handler<ListStandardsControlAssociationsCommandInput, ListStandardsControlAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListStandardsControlAssociationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "ListStandardsControlAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SecurityHubAPIService",
        operation: "ListStandardsControlAssociations",
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
  private serialize(
    input: ListStandardsControlAssociationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListStandardsControlAssociationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListStandardsControlAssociationsCommandOutput> {
    return de_ListStandardsControlAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
