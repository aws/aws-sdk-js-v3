// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AttachObjectRequest, AttachObjectResponse } from "../models/models_0";
import { AttachObject$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AttachObjectCommand}.
 */
export interface AttachObjectCommandInput extends AttachObjectRequest {}
/**
 * @public
 *
 * The output of {@link AttachObjectCommand}.
 */
export interface AttachObjectCommandOutput extends AttachObjectResponse, __MetadataBearer {}

/**
 * Attaches an existing object to another object. An object can be accessed in two ways:
 *
 * 1. Using the path
 * 2. Using `ObjectIdentifier`
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, AttachObjectCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, AttachObjectCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * // import type { CloudDirectoryClientConfig } from "@aws-sdk/client-clouddirectory";
 * const config = {}; // type is CloudDirectoryClientConfig
 * const client = new CloudDirectoryClient(config);
 * const input = { // AttachObjectRequest
 *   DirectoryArn: "STRING_VALUE", // required
 *   ParentReference: { // ObjectReference
 *     Selector: "STRING_VALUE",
 *   },
 *   ChildReference: {
 *     Selector: "STRING_VALUE",
 *   },
 *   LinkName: "STRING_VALUE", // required
 * };
 * const command = new AttachObjectCommand(input);
 * const response = await client.send(command);
 * // { // AttachObjectResponse
 * //   AttachedObjectIdentifier: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AttachObjectCommandInput - {@link AttachObjectCommandInput}
 * @returns {@link AttachObjectCommandOutput}
 * @see {@link AttachObjectCommandInput} for command's `input` shape.
 * @see {@link AttachObjectCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for CloudDirectoryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access denied or directory not found. Either you don't have permissions for this directory or the directory does not exist. Try calling ListDirectories and check your permissions.
 *
 * @throws {@link DirectoryNotEnabledException} (client fault)
 *
 * Operations are only permitted on enabled directories.
 *
 * @throws {@link FacetValidationException} (client fault)
 *
 * The Facet that you provided was not well formed or could not be validated with the schema.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the [AWS Service Health Dashboard](http://status.aws.amazon.com/) site to see if there are any operational issues with the service.
 *
 * @throws {@link InvalidArnException} (client fault)
 *
 * Indicates that the provided ARN value is not valid.
 *
 * @throws {@link InvalidAttachmentException} (client fault)
 *
 * Indicates that an attempt to make an attachment was invalid. For example, attaching two nodes with a link type that is not applicable to the nodes or attempting to apply a schema to a directory a second time.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * Indicates that limits are exceeded. See [Limits](https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html) for more information.
 *
 * @throws {@link LinkNameAlreadyInUseException} (client fault)
 *
 * Indicates that a link could not be created due to a naming conflict. Choose a different name and then try again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource could not be found.
 *
 * @throws {@link RetryableConflictException} (client fault)
 *
 * Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Indicates that your request is malformed in some manner. See the exception message.
 *
 * @throws {@link CloudDirectoryServiceException}
 *
 * Base exception class for all service exceptions from CloudDirectory service.
 *
 * @example To attach an object
 * ```javascript
 * //
 * const input = {
 *   ChildReference: {
 *     Selector: "$AQGG_ADlfNZBzYHY_JgDt3TWSvfuEnDqTdmeCuTs6YBNUA"
 *   },
 *   DirectoryArn: "arn:aws:clouddirectory:us-west-2:45132example:directory/AYb8AOV81kHNgdj8mAO3dNY",
 *   LinkName: "link2",
 *   ParentReference: {
 *     Selector: "$AQGG_ADlfNZBzYHY_JgDt3TWcU7IARvOTeaR09zme1sVsw"
 *   }
 * };
 * const command = new AttachObjectCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   AttachedObjectIdentifier: "AQGG_ADlfNZBzYHY_JgDt3TWSvfuEnDqTdmeCuTs6YBNUA"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class AttachObjectCommand extends command<AttachObjectCommandInput, AttachObjectCommandOutput>(
  _ep0,
  _mw0,
  "AttachObject",
  AttachObject$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AttachObjectRequest;
      output: AttachObjectResponse;
    };
    sdk: {
      input: AttachObjectCommandInput;
      output: AttachObjectCommandOutput;
    };
  };
}
