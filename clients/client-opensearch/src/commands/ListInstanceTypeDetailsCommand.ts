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

import { ListInstanceTypeDetailsRequest, ListInstanceTypeDetailsResponse } from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { de_ListInstanceTypeDetailsCommand, se_ListInstanceTypeDetailsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListInstanceTypeDetailsCommand}.
 */
export interface ListInstanceTypeDetailsCommandInput extends ListInstanceTypeDetailsRequest {}
/**
 * @public
 *
 * The output of {@link ListInstanceTypeDetailsCommand}.
 */
export interface ListInstanceTypeDetailsCommandOutput extends ListInstanceTypeDetailsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists all instance types and available features for a given OpenSearch or Elasticsearch
 *    version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, ListInstanceTypeDetailsCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, ListInstanceTypeDetailsCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const input = { // ListInstanceTypeDetailsRequest
 *   EngineVersion: "STRING_VALUE", // required
 *   DomainName: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   RetrieveAZs: true || false,
 *   InstanceType: "STRING_VALUE",
 * };
 * const command = new ListInstanceTypeDetailsCommand(input);
 * const response = await client.send(command);
 * // { // ListInstanceTypeDetailsResponse
 * //   InstanceTypeDetails: [ // InstanceTypeDetailsList
 * //     { // InstanceTypeDetails
 * //       InstanceType: "m3.medium.search" || "m3.large.search" || "m3.xlarge.search" || "m3.2xlarge.search" || "m4.large.search" || "m4.xlarge.search" || "m4.2xlarge.search" || "m4.4xlarge.search" || "m4.10xlarge.search" || "m5.large.search" || "m5.xlarge.search" || "m5.2xlarge.search" || "m5.4xlarge.search" || "m5.12xlarge.search" || "m5.24xlarge.search" || "r5.large.search" || "r5.xlarge.search" || "r5.2xlarge.search" || "r5.4xlarge.search" || "r5.12xlarge.search" || "r5.24xlarge.search" || "c5.large.search" || "c5.xlarge.search" || "c5.2xlarge.search" || "c5.4xlarge.search" || "c5.9xlarge.search" || "c5.18xlarge.search" || "t3.nano.search" || "t3.micro.search" || "t3.small.search" || "t3.medium.search" || "t3.large.search" || "t3.xlarge.search" || "t3.2xlarge.search" || "ultrawarm1.medium.search" || "ultrawarm1.large.search" || "ultrawarm1.xlarge.search" || "t2.micro.search" || "t2.small.search" || "t2.medium.search" || "r3.large.search" || "r3.xlarge.search" || "r3.2xlarge.search" || "r3.4xlarge.search" || "r3.8xlarge.search" || "i2.xlarge.search" || "i2.2xlarge.search" || "d2.xlarge.search" || "d2.2xlarge.search" || "d2.4xlarge.search" || "d2.8xlarge.search" || "c4.large.search" || "c4.xlarge.search" || "c4.2xlarge.search" || "c4.4xlarge.search" || "c4.8xlarge.search" || "r4.large.search" || "r4.xlarge.search" || "r4.2xlarge.search" || "r4.4xlarge.search" || "r4.8xlarge.search" || "r4.16xlarge.search" || "i3.large.search" || "i3.xlarge.search" || "i3.2xlarge.search" || "i3.4xlarge.search" || "i3.8xlarge.search" || "i3.16xlarge.search" || "r6g.large.search" || "r6g.xlarge.search" || "r6g.2xlarge.search" || "r6g.4xlarge.search" || "r6g.8xlarge.search" || "r6g.12xlarge.search" || "m6g.large.search" || "m6g.xlarge.search" || "m6g.2xlarge.search" || "m6g.4xlarge.search" || "m6g.8xlarge.search" || "m6g.12xlarge.search" || "c6g.large.search" || "c6g.xlarge.search" || "c6g.2xlarge.search" || "c6g.4xlarge.search" || "c6g.8xlarge.search" || "c6g.12xlarge.search" || "r6gd.large.search" || "r6gd.xlarge.search" || "r6gd.2xlarge.search" || "r6gd.4xlarge.search" || "r6gd.8xlarge.search" || "r6gd.12xlarge.search" || "r6gd.16xlarge.search" || "t4g.small.search" || "t4g.medium.search",
 * //       EncryptionEnabled: true || false,
 * //       CognitoEnabled: true || false,
 * //       AppLogsEnabled: true || false,
 * //       AdvancedSecurityEnabled: true || false,
 * //       WarmEnabled: true || false,
 * //       InstanceRole: [ // InstanceRoleList
 * //         "STRING_VALUE",
 * //       ],
 * //       AvailabilityZones: [ // AvailabilityZoneList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInstanceTypeDetailsCommandInput - {@link ListInstanceTypeDetailsCommandInput}
 * @returns {@link ListInstanceTypeDetailsCommandOutput}
 * @see {@link ListInstanceTypeDetailsCommandInput} for command's `input` shape.
 * @see {@link ListInstanceTypeDetailsCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 */
export class ListInstanceTypeDetailsCommand extends $Command<
  ListInstanceTypeDetailsCommandInput,
  ListInstanceTypeDetailsCommandOutput,
  OpenSearchClientResolvedConfig
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
  constructor(readonly input: ListInstanceTypeDetailsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpenSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListInstanceTypeDetailsCommandInput, ListInstanceTypeDetailsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListInstanceTypeDetailsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchClient";
    const commandName = "ListInstanceTypeDetailsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonOpenSearchService",
        operation: "ListInstanceTypeDetails",
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
  private serialize(input: ListInstanceTypeDetailsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListInstanceTypeDetailsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListInstanceTypeDetailsCommandOutput> {
    return de_ListInstanceTypeDetailsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
