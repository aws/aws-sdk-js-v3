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

import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import {
  DescribeVcenterClientsRequest,
  DescribeVcenterClientsResponse,
  DescribeVcenterClientsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeVcenterClientsCommand, se_DescribeVcenterClientsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeVcenterClientsCommand}.
 */
export interface DescribeVcenterClientsCommandInput extends DescribeVcenterClientsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVcenterClientsCommand}.
 */
export interface DescribeVcenterClientsCommandOutput extends DescribeVcenterClientsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of the installed vCenter clients.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, DescribeVcenterClientsCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, DescribeVcenterClientsCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const input = { // DescribeVcenterClientsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeVcenterClientsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVcenterClientsResponse
 * //   items: [ // VcenterClientList
 * //     { // VcenterClient
 * //       vcenterClientID: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       hostname: "STRING_VALUE",
 * //       vcenterUUID: "STRING_VALUE",
 * //       datacenterName: "STRING_VALUE",
 * //       lastSeenDatetime: "STRING_VALUE",
 * //       sourceServerTags: { // TagsMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       tags: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeVcenterClientsCommandInput - {@link DescribeVcenterClientsCommandInput}
 * @returns {@link DescribeVcenterClientsCommandOutput}
 * @see {@link DescribeVcenterClientsCommandInput} for command's `input` shape.
 * @see {@link DescribeVcenterClientsCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 */
export class DescribeVcenterClientsCommand extends $Command<
  DescribeVcenterClientsCommandInput,
  DescribeVcenterClientsCommandOutput,
  MgnClientResolvedConfig
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
  constructor(readonly input: DescribeVcenterClientsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MgnClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeVcenterClientsCommandInput, DescribeVcenterClientsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeVcenterClientsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MgnClient";
    const commandName = "DescribeVcenterClientsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeVcenterClientsResponseFilterSensitiveLog,
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
  private serialize(input: DescribeVcenterClientsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeVcenterClientsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeVcenterClientsCommandOutput> {
    return de_DescribeVcenterClientsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
