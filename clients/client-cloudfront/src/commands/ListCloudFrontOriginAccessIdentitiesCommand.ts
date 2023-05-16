// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { SerdeContext as __SerdeContext } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import {
  ListCloudFrontOriginAccessIdentitiesRequest,
  ListCloudFrontOriginAccessIdentitiesResult,
} from "../models/models_1";
import {
  de_ListCloudFrontOriginAccessIdentitiesCommand,
  se_ListCloudFrontOriginAccessIdentitiesCommand,
} from "../protocols/Aws_restXml";

/**
 * @public
 *
 * The input for {@link ListCloudFrontOriginAccessIdentitiesCommand}.
 */
export interface ListCloudFrontOriginAccessIdentitiesCommandInput extends ListCloudFrontOriginAccessIdentitiesRequest {}
/**
 * @public
 *
 * The output of {@link ListCloudFrontOriginAccessIdentitiesCommand}.
 */
export interface ListCloudFrontOriginAccessIdentitiesCommandOutput
  extends ListCloudFrontOriginAccessIdentitiesResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists origin access identities.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListCloudFrontOriginAccessIdentitiesCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListCloudFrontOriginAccessIdentitiesCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // ListCloudFrontOriginAccessIdentitiesRequest
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListCloudFrontOriginAccessIdentitiesCommand(input);
 * const response = await client.send(command);
 * // { // ListCloudFrontOriginAccessIdentitiesResult
 * //   CloudFrontOriginAccessIdentityList: { // CloudFrontOriginAccessIdentityList
 * //     Marker: "STRING_VALUE", // required
 * //     NextMarker: "STRING_VALUE",
 * //     MaxItems: Number("int"), // required
 * //     IsTruncated: true || false, // required
 * //     Quantity: Number("int"), // required
 * //     Items: [ // CloudFrontOriginAccessIdentitySummaryList
 * //       { // CloudFrontOriginAccessIdentitySummary
 * //         Id: "STRING_VALUE", // required
 * //         S3CanonicalUserId: "STRING_VALUE", // required
 * //         Comment: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ListCloudFrontOriginAccessIdentitiesCommandInput - {@link ListCloudFrontOriginAccessIdentitiesCommandInput}
 * @returns {@link ListCloudFrontOriginAccessIdentitiesCommandOutput}
 * @see {@link ListCloudFrontOriginAccessIdentitiesCommandInput} for command's `input` shape.
 * @see {@link ListCloudFrontOriginAccessIdentitiesCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 */
export class ListCloudFrontOriginAccessIdentitiesCommand extends $Command<
  ListCloudFrontOriginAccessIdentitiesCommandInput,
  ListCloudFrontOriginAccessIdentitiesCommandOutput,
  CloudFrontClientResolvedConfig
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
  constructor(readonly input: ListCloudFrontOriginAccessIdentitiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCloudFrontOriginAccessIdentitiesCommandInput, ListCloudFrontOriginAccessIdentitiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListCloudFrontOriginAccessIdentitiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "ListCloudFrontOriginAccessIdentitiesCommand";
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
    input: ListCloudFrontOriginAccessIdentitiesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListCloudFrontOriginAccessIdentitiesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListCloudFrontOriginAccessIdentitiesCommandOutput> {
    return de_ListCloudFrontOriginAccessIdentitiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
