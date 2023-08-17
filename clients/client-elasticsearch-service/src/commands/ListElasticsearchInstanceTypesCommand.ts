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
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient";
import { ListElasticsearchInstanceTypesRequest, ListElasticsearchInstanceTypesResponse } from "../models/models_0";
import {
  de_ListElasticsearchInstanceTypesCommand,
  se_ListElasticsearchInstanceTypesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListElasticsearchInstanceTypesCommand}.
 */
export interface ListElasticsearchInstanceTypesCommandInput extends ListElasticsearchInstanceTypesRequest {}
/**
 * @public
 *
 * The output of {@link ListElasticsearchInstanceTypesCommand}.
 */
export interface ListElasticsearchInstanceTypesCommandOutput
  extends ListElasticsearchInstanceTypesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>List all Elasticsearch instance types that are supported for given ElasticsearchVersion</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, ListElasticsearchInstanceTypesCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, ListElasticsearchInstanceTypesCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const input = { // ListElasticsearchInstanceTypesRequest
 *   ElasticsearchVersion: "STRING_VALUE", // required
 *   DomainName: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListElasticsearchInstanceTypesCommand(input);
 * const response = await client.send(command);
 * // { // ListElasticsearchInstanceTypesResponse
 * //   ElasticsearchInstanceTypes: [ // ElasticsearchInstanceTypeList
 * //     "m3.medium.elasticsearch" || "m3.large.elasticsearch" || "m3.xlarge.elasticsearch" || "m3.2xlarge.elasticsearch" || "m4.large.elasticsearch" || "m4.xlarge.elasticsearch" || "m4.2xlarge.elasticsearch" || "m4.4xlarge.elasticsearch" || "m4.10xlarge.elasticsearch" || "m5.large.elasticsearch" || "m5.xlarge.elasticsearch" || "m5.2xlarge.elasticsearch" || "m5.4xlarge.elasticsearch" || "m5.12xlarge.elasticsearch" || "r5.large.elasticsearch" || "r5.xlarge.elasticsearch" || "r5.2xlarge.elasticsearch" || "r5.4xlarge.elasticsearch" || "r5.12xlarge.elasticsearch" || "c5.large.elasticsearch" || "c5.xlarge.elasticsearch" || "c5.2xlarge.elasticsearch" || "c5.4xlarge.elasticsearch" || "c5.9xlarge.elasticsearch" || "c5.18xlarge.elasticsearch" || "ultrawarm1.medium.elasticsearch" || "ultrawarm1.large.elasticsearch" || "t2.micro.elasticsearch" || "t2.small.elasticsearch" || "t2.medium.elasticsearch" || "r3.large.elasticsearch" || "r3.xlarge.elasticsearch" || "r3.2xlarge.elasticsearch" || "r3.4xlarge.elasticsearch" || "r3.8xlarge.elasticsearch" || "i2.xlarge.elasticsearch" || "i2.2xlarge.elasticsearch" || "d2.xlarge.elasticsearch" || "d2.2xlarge.elasticsearch" || "d2.4xlarge.elasticsearch" || "d2.8xlarge.elasticsearch" || "c4.large.elasticsearch" || "c4.xlarge.elasticsearch" || "c4.2xlarge.elasticsearch" || "c4.4xlarge.elasticsearch" || "c4.8xlarge.elasticsearch" || "r4.large.elasticsearch" || "r4.xlarge.elasticsearch" || "r4.2xlarge.elasticsearch" || "r4.4xlarge.elasticsearch" || "r4.8xlarge.elasticsearch" || "r4.16xlarge.elasticsearch" || "i3.large.elasticsearch" || "i3.xlarge.elasticsearch" || "i3.2xlarge.elasticsearch" || "i3.4xlarge.elasticsearch" || "i3.8xlarge.elasticsearch" || "i3.16xlarge.elasticsearch",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListElasticsearchInstanceTypesCommandInput - {@link ListElasticsearchInstanceTypesCommandInput}
 * @returns {@link ListElasticsearchInstanceTypesCommandOutput}
 * @see {@link ListElasticsearchInstanceTypesCommandInput} for command's `input` shape.
 * @see {@link ListElasticsearchInstanceTypesCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for ElasticsearchServiceClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for missing / invalid input fields. Gives http status code of 400.</p>
 *
 * @throws {@link ElasticsearchServiceServiceException}
 * <p>Base exception class for all service exceptions from ElasticsearchService service.</p>
 *
 */
export class ListElasticsearchInstanceTypesCommand extends $Command<
  ListElasticsearchInstanceTypesCommandInput,
  ListElasticsearchInstanceTypesCommandOutput,
  ElasticsearchServiceClientResolvedConfig
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
  constructor(readonly input: ListElasticsearchInstanceTypesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticsearchServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListElasticsearchInstanceTypesCommandInput, ListElasticsearchInstanceTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListElasticsearchInstanceTypesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticsearchServiceClient";
    const commandName = "ListElasticsearchInstanceTypesCommand";
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
    input: ListElasticsearchInstanceTypesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListElasticsearchInstanceTypesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListElasticsearchInstanceTypesCommandOutput> {
    return de_ListElasticsearchInstanceTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
