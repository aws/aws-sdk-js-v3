// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
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

import { CreateStorageLensGroupRequest } from "../models/models_0";
import { de_CreateStorageLensGroupCommand, se_CreateStorageLensGroupCommand } from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateStorageLensGroupCommand}.
 */
export interface CreateStorageLensGroupCommandInput extends CreateStorageLensGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateStorageLensGroupCommand}.
 */
export interface CreateStorageLensGroupCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p> Creates a new S3 Storage Lens group and associates it with the specified Amazon Web Services account ID. An
 *          S3 Storage Lens group is a custom grouping of objects based on prefix, suffix, object tags,
 *          object size, object age, or a combination of these filters. For each Storage Lens group
 *          that you’ve created, you can also optionally add Amazon Web Services resource tags. For more information
 *          about S3 Storage Lens groups, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-lens-groups-overview.html">Working with S3 Storage Lens
 *             groups</a>.</p>
 *          <p>To use this operation, you must have the permission to perform the
 *             <code>s3:CreateStorageLensGroup</code> action. If you’re trying to create a Storage Lens
 *          group with Amazon Web Services resource tags, you must also have permission to perform the
 *             <code>s3:TagResource</code> action. For more information about the required Storage Lens
 *          Groups permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_iam_permissions.html#storage_lens_groups_permissions">Setting account permissions to use S3 Storage Lens groups</a>.</p>
 *          <p>For information about Storage Lens groups errors, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#S3LensErrorCodeList">List of Amazon S3 Storage
 *             Lens error codes</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, CreateStorageLensGroupCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, CreateStorageLensGroupCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // CreateStorageLensGroupRequest
 *   AccountId: "STRING_VALUE",
 *   StorageLensGroup: { // StorageLensGroup
 *     Name: "STRING_VALUE", // required
 *     Filter: { // StorageLensGroupFilter
 *       MatchAnyPrefix: [ // MatchAnyPrefix
 *         "STRING_VALUE",
 *       ],
 *       MatchAnySuffix: [ // MatchAnySuffix
 *         "STRING_VALUE",
 *       ],
 *       MatchAnyTag: [ // MatchAnyTag
 *         { // S3Tag
 *           Key: "STRING_VALUE", // required
 *           Value: "STRING_VALUE", // required
 *         },
 *       ],
 *       MatchObjectAge: { // MatchObjectAge
 *         DaysGreaterThan: Number("int"),
 *         DaysLessThan: Number("int"),
 *       },
 *       MatchObjectSize: { // MatchObjectSize
 *         BytesGreaterThan: Number("long"),
 *         BytesLessThan: Number("long"),
 *       },
 *       And: { // StorageLensGroupAndOperator
 *         MatchAnyPrefix: [
 *           "STRING_VALUE",
 *         ],
 *         MatchAnySuffix: [
 *           "STRING_VALUE",
 *         ],
 *         MatchAnyTag: [
 *           {
 *             Key: "STRING_VALUE", // required
 *             Value: "STRING_VALUE", // required
 *           },
 *         ],
 *         MatchObjectAge: {
 *           DaysGreaterThan: Number("int"),
 *           DaysLessThan: Number("int"),
 *         },
 *         MatchObjectSize: {
 *           BytesGreaterThan: Number("long"),
 *           BytesLessThan: Number("long"),
 *         },
 *       },
 *       Or: { // StorageLensGroupOrOperator
 *         MatchAnyPrefix: [
 *           "STRING_VALUE",
 *         ],
 *         MatchAnySuffix: [
 *           "STRING_VALUE",
 *         ],
 *         MatchAnyTag: [
 *           {
 *             Key: "STRING_VALUE", // required
 *             Value: "STRING_VALUE", // required
 *           },
 *         ],
 *         MatchObjectAge: {
 *           DaysGreaterThan: Number("int"),
 *           DaysLessThan: Number("int"),
 *         },
 *         MatchObjectSize: {
 *           BytesGreaterThan: Number("long"),
 *           BytesLessThan: Number("long"),
 *         },
 *       },
 *     },
 *     StorageLensGroupArn: "STRING_VALUE",
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateStorageLensGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateStorageLensGroupCommandInput - {@link CreateStorageLensGroupCommandInput}
 * @returns {@link CreateStorageLensGroupCommandOutput}
 * @see {@link CreateStorageLensGroupCommandInput} for command's `input` shape.
 * @see {@link CreateStorageLensGroupCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 */
export class CreateStorageLensGroupCommand extends $Command<
  CreateStorageLensGroupCommandInput,
  CreateStorageLensGroupCommandOutput,
  S3ControlClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      RequiresAccountId: { type: "staticContextParams", value: true },
      AccountId: { type: "contextParams", name: "AccountId" },
      UseArnRegion: { type: "clientContextParams", name: "useArnRegion" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: CreateStorageLensGroupCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ControlClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateStorageLensGroupCommandInput, CreateStorageLensGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateStorageLensGroupCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "CreateStorageLensGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSS3ControlServiceV20180820",
        operation: "CreateStorageLensGroup",
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
  private serialize(input: CreateStorageLensGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateStorageLensGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateStorageLensGroupCommandOutput> {
    return de_CreateStorageLensGroupCommand(output, context);
  }
}
