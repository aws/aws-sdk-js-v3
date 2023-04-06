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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { ListMLTransformsRequest, ListMLTransformsResponse } from "../models/models_2";
import { de_ListMLTransformsCommand, se_ListMLTransformsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link ListMLTransformsCommand}.
 */
export interface ListMLTransformsCommandInput extends ListMLTransformsRequest {}
/**
 * @public
 *
 * The output of {@link ListMLTransformsCommand}.
 */
export interface ListMLTransformsCommandOutput extends ListMLTransformsResponse, __MetadataBearer {}

/**
 * @public
 * <p> Retrieves a sortable, filterable list of existing Glue machine learning transforms in this Amazon Web Services account,
 *        or the resources with the specified tag. This operation takes the optional <code>Tags</code> field, which you can use as
 *        a filter of the responses so that tagged resources can be retrieved as a group. If you choose to use tag
 *        filtering, only resources with the tags are retrieved.
 *      </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListMLTransformsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListMLTransformsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // ListMLTransformsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filter: { // TransformFilterCriteria
 *     Name: "STRING_VALUE",
 *     TransformType: "FIND_MATCHES",
 *     Status: "NOT_READY" || "READY" || "DELETING",
 *     GlueVersion: "STRING_VALUE",
 *     CreatedBefore: new Date("TIMESTAMP"),
 *     CreatedAfter: new Date("TIMESTAMP"),
 *     LastModifiedBefore: new Date("TIMESTAMP"),
 *     LastModifiedAfter: new Date("TIMESTAMP"),
 *     Schema: [ // TransformSchema
 *       { // SchemaColumn
 *         Name: "STRING_VALUE",
 *         DataType: "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   Sort: { // TransformSortCriteria
 *     Column: "NAME" || "TRANSFORM_TYPE" || "STATUS" || "CREATED" || "LAST_MODIFIED", // required
 *     SortDirection: "DESCENDING" || "ASCENDING", // required
 *   },
 *   Tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new ListMLTransformsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListMLTransformsCommandInput - {@link ListMLTransformsCommandInput}
 * @returns {@link ListMLTransformsCommandOutput}
 * @see {@link ListMLTransformsCommandInput} for command's `input` shape.
 * @see {@link ListMLTransformsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 *
 */
export class ListMLTransformsCommand extends $Command<
  ListMLTransformsCommandInput,
  ListMLTransformsCommandOutput,
  GlueClientResolvedConfig
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
  constructor(readonly input: ListMLTransformsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMLTransformsCommandInput, ListMLTransformsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListMLTransformsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "ListMLTransformsCommand";
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
  private serialize(input: ListMLTransformsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListMLTransformsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMLTransformsCommandOutput> {
    return de_ListMLTransformsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
