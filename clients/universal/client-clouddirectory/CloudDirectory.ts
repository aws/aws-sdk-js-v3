import { CloudDirectoryClient } from "./CloudDirectoryClient";
import { AccessDeniedException } from "./types/AccessDeniedException";
import { AddFacetToObjectInput } from "./types/AddFacetToObjectInput";
import { AddFacetToObjectOutput } from "./types/AddFacetToObjectOutput";
import { ApplySchemaInput } from "./types/ApplySchemaInput";
import { ApplySchemaOutput } from "./types/ApplySchemaOutput";
import { AttachObjectInput } from "./types/AttachObjectInput";
import { AttachObjectOutput } from "./types/AttachObjectOutput";
import { AttachPolicyInput } from "./types/AttachPolicyInput";
import { AttachPolicyOutput } from "./types/AttachPolicyOutput";
import { AttachToIndexInput } from "./types/AttachToIndexInput";
import { AttachToIndexOutput } from "./types/AttachToIndexOutput";
import { AttachTypedLinkInput } from "./types/AttachTypedLinkInput";
import { AttachTypedLinkOutput } from "./types/AttachTypedLinkOutput";
import { BatchReadInput } from "./types/BatchReadInput";
import { BatchReadOutput } from "./types/BatchReadOutput";
import { BatchWriteException } from "./types/BatchWriteException";
import { BatchWriteInput } from "./types/BatchWriteInput";
import { BatchWriteOutput } from "./types/BatchWriteOutput";
import { CannotListParentOfRootException } from "./types/CannotListParentOfRootException";
import { CreateDirectoryInput } from "./types/CreateDirectoryInput";
import { CreateDirectoryOutput } from "./types/CreateDirectoryOutput";
import { CreateFacetInput } from "./types/CreateFacetInput";
import { CreateFacetOutput } from "./types/CreateFacetOutput";
import { CreateIndexInput } from "./types/CreateIndexInput";
import { CreateIndexOutput } from "./types/CreateIndexOutput";
import { CreateObjectInput } from "./types/CreateObjectInput";
import { CreateObjectOutput } from "./types/CreateObjectOutput";
import { CreateSchemaInput } from "./types/CreateSchemaInput";
import { CreateSchemaOutput } from "./types/CreateSchemaOutput";
import { CreateTypedLinkFacetInput } from "./types/CreateTypedLinkFacetInput";
import { CreateTypedLinkFacetOutput } from "./types/CreateTypedLinkFacetOutput";
import { DeleteDirectoryInput } from "./types/DeleteDirectoryInput";
import { DeleteDirectoryOutput } from "./types/DeleteDirectoryOutput";
import { DeleteFacetInput } from "./types/DeleteFacetInput";
import { DeleteFacetOutput } from "./types/DeleteFacetOutput";
import { DeleteObjectInput } from "./types/DeleteObjectInput";
import { DeleteObjectOutput } from "./types/DeleteObjectOutput";
import { DeleteSchemaInput } from "./types/DeleteSchemaInput";
import { DeleteSchemaOutput } from "./types/DeleteSchemaOutput";
import { DeleteTypedLinkFacetInput } from "./types/DeleteTypedLinkFacetInput";
import { DeleteTypedLinkFacetOutput } from "./types/DeleteTypedLinkFacetOutput";
import { DetachFromIndexInput } from "./types/DetachFromIndexInput";
import { DetachFromIndexOutput } from "./types/DetachFromIndexOutput";
import { DetachObjectInput } from "./types/DetachObjectInput";
import { DetachObjectOutput } from "./types/DetachObjectOutput";
import { DetachPolicyInput } from "./types/DetachPolicyInput";
import { DetachPolicyOutput } from "./types/DetachPolicyOutput";
import { DetachTypedLinkInput } from "./types/DetachTypedLinkInput";
import { DetachTypedLinkOutput } from "./types/DetachTypedLinkOutput";
import { DirectoryAlreadyExistsException } from "./types/DirectoryAlreadyExistsException";
import { DirectoryDeletedException } from "./types/DirectoryDeletedException";
import { DirectoryNotDisabledException } from "./types/DirectoryNotDisabledException";
import { DirectoryNotEnabledException } from "./types/DirectoryNotEnabledException";
import { DisableDirectoryInput } from "./types/DisableDirectoryInput";
import { DisableDirectoryOutput } from "./types/DisableDirectoryOutput";
import { EnableDirectoryInput } from "./types/EnableDirectoryInput";
import { EnableDirectoryOutput } from "./types/EnableDirectoryOutput";
import { FacetAlreadyExistsException } from "./types/FacetAlreadyExistsException";
import { FacetInUseException } from "./types/FacetInUseException";
import { FacetNotFoundException } from "./types/FacetNotFoundException";
import { FacetValidationException } from "./types/FacetValidationException";
import { GetAppliedSchemaVersionInput } from "./types/GetAppliedSchemaVersionInput";
import { GetAppliedSchemaVersionOutput } from "./types/GetAppliedSchemaVersionOutput";
import { GetDirectoryInput } from "./types/GetDirectoryInput";
import { GetDirectoryOutput } from "./types/GetDirectoryOutput";
import { GetFacetInput } from "./types/GetFacetInput";
import { GetFacetOutput } from "./types/GetFacetOutput";
import { GetLinkAttributesInput } from "./types/GetLinkAttributesInput";
import { GetLinkAttributesOutput } from "./types/GetLinkAttributesOutput";
import { GetObjectAttributesInput } from "./types/GetObjectAttributesInput";
import { GetObjectAttributesOutput } from "./types/GetObjectAttributesOutput";
import { GetObjectInformationInput } from "./types/GetObjectInformationInput";
import { GetObjectInformationOutput } from "./types/GetObjectInformationOutput";
import { GetSchemaAsJsonInput } from "./types/GetSchemaAsJsonInput";
import { GetSchemaAsJsonOutput } from "./types/GetSchemaAsJsonOutput";
import { GetTypedLinkFacetInformationInput } from "./types/GetTypedLinkFacetInformationInput";
import { GetTypedLinkFacetInformationOutput } from "./types/GetTypedLinkFacetInformationOutput";
import { IncompatibleSchemaException } from "./types/IncompatibleSchemaException";
import { IndexedAttributeMissingException } from "./types/IndexedAttributeMissingException";
import { InternalServiceException } from "./types/InternalServiceException";
import { InvalidArnException } from "./types/InvalidArnException";
import { InvalidAttachmentException } from "./types/InvalidAttachmentException";
import { InvalidFacetUpdateException } from "./types/InvalidFacetUpdateException";
import { InvalidNextTokenException } from "./types/InvalidNextTokenException";
import { InvalidRuleException } from "./types/InvalidRuleException";
import { InvalidSchemaDocException } from "./types/InvalidSchemaDocException";
import { InvalidTaggingRequestException } from "./types/InvalidTaggingRequestException";
import { LimitExceededException } from "./types/LimitExceededException";
import { LinkNameAlreadyInUseException } from "./types/LinkNameAlreadyInUseException";
import { ListAppliedSchemaArnsInput } from "./types/ListAppliedSchemaArnsInput";
import { ListAppliedSchemaArnsOutput } from "./types/ListAppliedSchemaArnsOutput";
import { ListAttachedIndicesInput } from "./types/ListAttachedIndicesInput";
import { ListAttachedIndicesOutput } from "./types/ListAttachedIndicesOutput";
import { ListDevelopmentSchemaArnsInput } from "./types/ListDevelopmentSchemaArnsInput";
import { ListDevelopmentSchemaArnsOutput } from "./types/ListDevelopmentSchemaArnsOutput";
import { ListDirectoriesInput } from "./types/ListDirectoriesInput";
import { ListDirectoriesOutput } from "./types/ListDirectoriesOutput";
import { ListFacetAttributesInput } from "./types/ListFacetAttributesInput";
import { ListFacetAttributesOutput } from "./types/ListFacetAttributesOutput";
import { ListFacetNamesInput } from "./types/ListFacetNamesInput";
import { ListFacetNamesOutput } from "./types/ListFacetNamesOutput";
import { ListIncomingTypedLinksInput } from "./types/ListIncomingTypedLinksInput";
import { ListIncomingTypedLinksOutput } from "./types/ListIncomingTypedLinksOutput";
import { ListIndexInput } from "./types/ListIndexInput";
import { ListIndexOutput } from "./types/ListIndexOutput";
import { ListManagedSchemaArnsInput } from "./types/ListManagedSchemaArnsInput";
import { ListManagedSchemaArnsOutput } from "./types/ListManagedSchemaArnsOutput";
import { ListObjectAttributesInput } from "./types/ListObjectAttributesInput";
import { ListObjectAttributesOutput } from "./types/ListObjectAttributesOutput";
import { ListObjectChildrenInput } from "./types/ListObjectChildrenInput";
import { ListObjectChildrenOutput } from "./types/ListObjectChildrenOutput";
import { ListObjectParentPathsInput } from "./types/ListObjectParentPathsInput";
import { ListObjectParentPathsOutput } from "./types/ListObjectParentPathsOutput";
import { ListObjectParentsInput } from "./types/ListObjectParentsInput";
import { ListObjectParentsOutput } from "./types/ListObjectParentsOutput";
import { ListObjectPoliciesInput } from "./types/ListObjectPoliciesInput";
import { ListObjectPoliciesOutput } from "./types/ListObjectPoliciesOutput";
import { ListOutgoingTypedLinksInput } from "./types/ListOutgoingTypedLinksInput";
import { ListOutgoingTypedLinksOutput } from "./types/ListOutgoingTypedLinksOutput";
import { ListPolicyAttachmentsInput } from "./types/ListPolicyAttachmentsInput";
import { ListPolicyAttachmentsOutput } from "./types/ListPolicyAttachmentsOutput";
import { ListPublishedSchemaArnsInput } from "./types/ListPublishedSchemaArnsInput";
import { ListPublishedSchemaArnsOutput } from "./types/ListPublishedSchemaArnsOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { ListTypedLinkFacetAttributesInput } from "./types/ListTypedLinkFacetAttributesInput";
import { ListTypedLinkFacetAttributesOutput } from "./types/ListTypedLinkFacetAttributesOutput";
import { ListTypedLinkFacetNamesInput } from "./types/ListTypedLinkFacetNamesInput";
import { ListTypedLinkFacetNamesOutput } from "./types/ListTypedLinkFacetNamesOutput";
import { LookupPolicyInput } from "./types/LookupPolicyInput";
import { LookupPolicyOutput } from "./types/LookupPolicyOutput";
import { NotIndexException } from "./types/NotIndexException";
import { NotNodeException } from "./types/NotNodeException";
import { NotPolicyException } from "./types/NotPolicyException";
import { ObjectAlreadyDetachedException } from "./types/ObjectAlreadyDetachedException";
import { ObjectNotDetachedException } from "./types/ObjectNotDetachedException";
import { PublishSchemaInput } from "./types/PublishSchemaInput";
import { PublishSchemaOutput } from "./types/PublishSchemaOutput";
import { PutSchemaFromJsonInput } from "./types/PutSchemaFromJsonInput";
import { PutSchemaFromJsonOutput } from "./types/PutSchemaFromJsonOutput";
import { RemoveFacetFromObjectInput } from "./types/RemoveFacetFromObjectInput";
import { RemoveFacetFromObjectOutput } from "./types/RemoveFacetFromObjectOutput";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { RetryableConflictException } from "./types/RetryableConflictException";
import { SchemaAlreadyExistsException } from "./types/SchemaAlreadyExistsException";
import { SchemaAlreadyPublishedException } from "./types/SchemaAlreadyPublishedException";
import { StillContainsLinksException } from "./types/StillContainsLinksException";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { UnsupportedIndexTypeException } from "./types/UnsupportedIndexTypeException";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdateFacetInput } from "./types/UpdateFacetInput";
import { UpdateFacetOutput } from "./types/UpdateFacetOutput";
import { UpdateLinkAttributesInput } from "./types/UpdateLinkAttributesInput";
import { UpdateLinkAttributesOutput } from "./types/UpdateLinkAttributesOutput";
import { UpdateObjectAttributesInput } from "./types/UpdateObjectAttributesInput";
import { UpdateObjectAttributesOutput } from "./types/UpdateObjectAttributesOutput";
import { UpdateSchemaInput } from "./types/UpdateSchemaInput";
import { UpdateSchemaOutput } from "./types/UpdateSchemaOutput";
import { UpdateTypedLinkFacetInput } from "./types/UpdateTypedLinkFacetInput";
import { UpdateTypedLinkFacetOutput } from "./types/UpdateTypedLinkFacetOutput";
import { UpgradeAppliedSchemaInput } from "./types/UpgradeAppliedSchemaInput";
import { UpgradeAppliedSchemaOutput } from "./types/UpgradeAppliedSchemaOutput";
import { UpgradePublishedSchemaInput } from "./types/UpgradePublishedSchemaInput";
import { UpgradePublishedSchemaOutput } from "./types/UpgradePublishedSchemaOutput";
import { ValidationException } from "./types/ValidationException";
import { AddFacetToObjectCommand } from "./commands/AddFacetToObjectCommand";
import { ApplySchemaCommand } from "./commands/ApplySchemaCommand";
import { AttachObjectCommand } from "./commands/AttachObjectCommand";
import { AttachPolicyCommand } from "./commands/AttachPolicyCommand";
import { AttachToIndexCommand } from "./commands/AttachToIndexCommand";
import { AttachTypedLinkCommand } from "./commands/AttachTypedLinkCommand";
import { BatchReadCommand } from "./commands/BatchReadCommand";
import { BatchWriteCommand } from "./commands/BatchWriteCommand";
import { CreateDirectoryCommand } from "./commands/CreateDirectoryCommand";
import { CreateFacetCommand } from "./commands/CreateFacetCommand";
import { CreateIndexCommand } from "./commands/CreateIndexCommand";
import { CreateObjectCommand } from "./commands/CreateObjectCommand";
import { CreateSchemaCommand } from "./commands/CreateSchemaCommand";
import { CreateTypedLinkFacetCommand } from "./commands/CreateTypedLinkFacetCommand";
import { DeleteDirectoryCommand } from "./commands/DeleteDirectoryCommand";
import { DeleteFacetCommand } from "./commands/DeleteFacetCommand";
import { DeleteObjectCommand } from "./commands/DeleteObjectCommand";
import { DeleteSchemaCommand } from "./commands/DeleteSchemaCommand";
import { DeleteTypedLinkFacetCommand } from "./commands/DeleteTypedLinkFacetCommand";
import { DetachFromIndexCommand } from "./commands/DetachFromIndexCommand";
import { DetachObjectCommand } from "./commands/DetachObjectCommand";
import { DetachPolicyCommand } from "./commands/DetachPolicyCommand";
import { DetachTypedLinkCommand } from "./commands/DetachTypedLinkCommand";
import { DisableDirectoryCommand } from "./commands/DisableDirectoryCommand";
import { EnableDirectoryCommand } from "./commands/EnableDirectoryCommand";
import { GetAppliedSchemaVersionCommand } from "./commands/GetAppliedSchemaVersionCommand";
import { GetDirectoryCommand } from "./commands/GetDirectoryCommand";
import { GetFacetCommand } from "./commands/GetFacetCommand";
import { GetLinkAttributesCommand } from "./commands/GetLinkAttributesCommand";
import { GetObjectAttributesCommand } from "./commands/GetObjectAttributesCommand";
import { GetObjectInformationCommand } from "./commands/GetObjectInformationCommand";
import { GetSchemaAsJsonCommand } from "./commands/GetSchemaAsJsonCommand";
import { GetTypedLinkFacetInformationCommand } from "./commands/GetTypedLinkFacetInformationCommand";
import { ListAppliedSchemaArnsCommand } from "./commands/ListAppliedSchemaArnsCommand";
import { ListAttachedIndicesCommand } from "./commands/ListAttachedIndicesCommand";
import { ListDevelopmentSchemaArnsCommand } from "./commands/ListDevelopmentSchemaArnsCommand";
import { ListDirectoriesCommand } from "./commands/ListDirectoriesCommand";
import { ListFacetAttributesCommand } from "./commands/ListFacetAttributesCommand";
import { ListFacetNamesCommand } from "./commands/ListFacetNamesCommand";
import { ListIncomingTypedLinksCommand } from "./commands/ListIncomingTypedLinksCommand";
import { ListIndexCommand } from "./commands/ListIndexCommand";
import { ListManagedSchemaArnsCommand } from "./commands/ListManagedSchemaArnsCommand";
import { ListObjectAttributesCommand } from "./commands/ListObjectAttributesCommand";
import { ListObjectChildrenCommand } from "./commands/ListObjectChildrenCommand";
import { ListObjectParentPathsCommand } from "./commands/ListObjectParentPathsCommand";
import { ListObjectParentsCommand } from "./commands/ListObjectParentsCommand";
import { ListObjectPoliciesCommand } from "./commands/ListObjectPoliciesCommand";
import { ListOutgoingTypedLinksCommand } from "./commands/ListOutgoingTypedLinksCommand";
import { ListPolicyAttachmentsCommand } from "./commands/ListPolicyAttachmentsCommand";
import { ListPublishedSchemaArnsCommand } from "./commands/ListPublishedSchemaArnsCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { ListTypedLinkFacetAttributesCommand } from "./commands/ListTypedLinkFacetAttributesCommand";
import { ListTypedLinkFacetNamesCommand } from "./commands/ListTypedLinkFacetNamesCommand";
import { LookupPolicyCommand } from "./commands/LookupPolicyCommand";
import { PublishSchemaCommand } from "./commands/PublishSchemaCommand";
import { PutSchemaFromJsonCommand } from "./commands/PutSchemaFromJsonCommand";
import { RemoveFacetFromObjectCommand } from "./commands/RemoveFacetFromObjectCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateFacetCommand } from "./commands/UpdateFacetCommand";
import { UpdateLinkAttributesCommand } from "./commands/UpdateLinkAttributesCommand";
import { UpdateObjectAttributesCommand } from "./commands/UpdateObjectAttributesCommand";
import { UpdateSchemaCommand } from "./commands/UpdateSchemaCommand";
import { UpdateTypedLinkFacetCommand } from "./commands/UpdateTypedLinkFacetCommand";
import { UpgradeAppliedSchemaCommand } from "./commands/UpgradeAppliedSchemaCommand";
import { UpgradePublishedSchemaCommand } from "./commands/UpgradePublishedSchemaCommand";

export class CloudDirectory extends CloudDirectoryClient {
  /**
   * <p>Adds a new <a>Facet</a> to an object. An object can have more than one facet applied on it.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {DirectoryNotEnabledException} <p>Operations are only permitted on enabled directories.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {FacetValidationException} <p>The <a>Facet</a> that you provided was not well formed or could not be validated with the schema.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public addFacetToObject(
    args: AddFacetToObjectInput
  ): Promise<AddFacetToObjectOutput>;
  public addFacetToObject(
    args: AddFacetToObjectInput,
    cb: (err: any, data?: AddFacetToObjectOutput) => void
  ): void;
  public addFacetToObject(
    args: AddFacetToObjectInput,
    cb?: (err: any, data?: AddFacetToObjectOutput) => void
  ): Promise<AddFacetToObjectOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AddFacetToObjectCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Copies the input published schema, at the specified version, into the <a>Directory</a> with the same name and version as that of the published schema.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {SchemaAlreadyExistsException} <p>Indicates that a schema could not be created due to a naming conflict. Please select a different name and then try again.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {InvalidAttachmentException} <p>Indicates that an attempt to make an attachment was invalid. For example, attaching two nodes with a link type that is not applicable to the nodes or attempting to apply a schema to a directory a second time.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public applySchema(args: ApplySchemaInput): Promise<ApplySchemaOutput>;
  public applySchema(
    args: ApplySchemaInput,
    cb: (err: any, data?: ApplySchemaOutput) => void
  ): void;
  public applySchema(
    args: ApplySchemaInput,
    cb?: (err: any, data?: ApplySchemaOutput) => void
  ): Promise<ApplySchemaOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ApplySchemaCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Attaches an existing object to another object. An object can be accessed in two ways:</p> <ol> <li> <p>Using the path</p> </li> <li> <p>Using <code>ObjectIdentifier</code> </p> </li> </ol>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {DirectoryNotEnabledException} <p>Operations are only permitted on enabled directories.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {LinkNameAlreadyInUseException} <p>Indicates that a link could not be created due to a naming conflict. Choose a different name and then try again.</p>
   *   - {InvalidAttachmentException} <p>Indicates that an attempt to make an attachment was invalid. For example, attaching two nodes with a link type that is not applicable to the nodes or attempting to apply a schema to a directory a second time.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {FacetValidationException} <p>The <a>Facet</a> that you provided was not well formed or could not be validated with the schema.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public attachObject(args: AttachObjectInput): Promise<AttachObjectOutput>;
  public attachObject(
    args: AttachObjectInput,
    cb: (err: any, data?: AttachObjectOutput) => void
  ): void;
  public attachObject(
    args: AttachObjectInput,
    cb?: (err: any, data?: AttachObjectOutput) => void
  ): Promise<AttachObjectOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AttachObjectCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Attaches a policy object to a regular object. An object can have a limited number of attached policies.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {DirectoryNotEnabledException} <p>Operations are only permitted on enabled directories.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {NotPolicyException} <p>Indicates that the requested operation can only operate on policy objects.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public attachPolicy(args: AttachPolicyInput): Promise<AttachPolicyOutput>;
  public attachPolicy(
    args: AttachPolicyInput,
    cb: (err: any, data?: AttachPolicyOutput) => void
  ): void;
  public attachPolicy(
    args: AttachPolicyInput,
    cb?: (err: any, data?: AttachPolicyOutput) => void
  ): Promise<AttachPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AttachPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Attaches the specified object to the specified index.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {DirectoryNotEnabledException} <p>Operations are only permitted on enabled directories.</p>
   *   - {InvalidAttachmentException} <p>Indicates that an attempt to make an attachment was invalid. For example, attaching two nodes with a link type that is not applicable to the nodes or attempting to apply a schema to a directory a second time.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {LinkNameAlreadyInUseException} <p>Indicates that a link could not be created due to a naming conflict. Choose a different name and then try again.</p>
   *   - {IndexedAttributeMissingException} <p>An object has been attempted to be attached to an object that does not have the appropriate attribute value.</p>
   *   - {NotIndexException} <p>Indicates that the requested operation can only operate on index objects.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public attachToIndex(args: AttachToIndexInput): Promise<AttachToIndexOutput>;
  public attachToIndex(
    args: AttachToIndexInput,
    cb: (err: any, data?: AttachToIndexOutput) => void
  ): void;
  public attachToIndex(
    args: AttachToIndexInput,
    cb?: (err: any, data?: AttachToIndexOutput) => void
  ): Promise<AttachToIndexOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AttachToIndexCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Attaches a typed link to a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {DirectoryNotEnabledException} <p>Operations are only permitted on enabled directories.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {InvalidAttachmentException} <p>Indicates that an attempt to make an attachment was invalid. For example, attaching two nodes with a link type that is not applicable to the nodes or attempting to apply a schema to a directory a second time.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {FacetValidationException} <p>The <a>Facet</a> that you provided was not well formed or could not be validated with the schema.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public attachTypedLink(
    args: AttachTypedLinkInput
  ): Promise<AttachTypedLinkOutput>;
  public attachTypedLink(
    args: AttachTypedLinkInput,
    cb: (err: any, data?: AttachTypedLinkOutput) => void
  ): void;
  public attachTypedLink(
    args: AttachTypedLinkInput,
    cb?: (err: any, data?: AttachTypedLinkOutput) => void
  ): Promise<AttachTypedLinkOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AttachTypedLinkCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Performs all the read operations in a batch. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {DirectoryNotEnabledException} <p>Operations are only permitted on enabled directories.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchRead(args: BatchReadInput): Promise<BatchReadOutput>;
  public batchRead(
    args: BatchReadInput,
    cb: (err: any, data?: BatchReadOutput) => void
  ): void;
  public batchRead(
    args: BatchReadInput,
    cb?: (err: any, data?: BatchReadOutput) => void
  ): Promise<BatchReadOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchReadCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Performs all the write operations in a batch. Either all the operations succeed or none.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {DirectoryNotEnabledException} <p>Operations are only permitted on enabled directories.</p>
   *   - {BatchWriteException} <p>A <code>BatchWrite</code> exception has occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchWrite(args: BatchWriteInput): Promise<BatchWriteOutput>;
  public batchWrite(
    args: BatchWriteInput,
    cb: (err: any, data?: BatchWriteOutput) => void
  ): void;
  public batchWrite(
    args: BatchWriteInput,
    cb?: (err: any, data?: BatchWriteOutput) => void
  ): Promise<BatchWriteOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchWriteCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a <a>Directory</a> by copying the published schema into the directory. A directory cannot be created without a schema.</p> <p>You can also quickly create a directory using a managed schema, called the <code>QuickStartSchema</code>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_managed.html">Managed Schema</a> in the <i>Amazon Cloud Directory Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {DirectoryAlreadyExistsException} <p>Indicates that a <a>Directory</a> could not be created due to a naming conflict. Choose a different name and try again.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDirectory(
    args: CreateDirectoryInput
  ): Promise<CreateDirectoryOutput>;
  public createDirectory(
    args: CreateDirectoryInput,
    cb: (err: any, data?: CreateDirectoryOutput) => void
  ): void;
  public createDirectory(
    args: CreateDirectoryInput,
    cb?: (err: any, data?: CreateDirectoryOutput) => void
  ): Promise<CreateDirectoryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDirectoryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new <a>Facet</a> in a schema. Facet creation is allowed only in development or applied schemas.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {FacetAlreadyExistsException} <p>A facet with the same name already exists.</p>
   *   - {InvalidRuleException} <p>Occurs when any of the rule parameter keys or values are invalid.</p>
   *   - {FacetValidationException} <p>The <a>Facet</a> that you provided was not well formed or could not be validated with the schema.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createFacet(args: CreateFacetInput): Promise<CreateFacetOutput>;
  public createFacet(
    args: CreateFacetInput,
    cb: (err: any, data?: CreateFacetOutput) => void
  ): void;
  public createFacet(
    args: CreateFacetInput,
    cb?: (err: any, data?: CreateFacetOutput) => void
  ): Promise<CreateFacetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateFacetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an index object. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/indexing_search.html">Indexing and search</a> for more information.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {DirectoryNotEnabledException} <p>Operations are only permitted on enabled directories.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {FacetValidationException} <p>The <a>Facet</a> that you provided was not well formed or could not be validated with the schema.</p>
   *   - {LinkNameAlreadyInUseException} <p>Indicates that a link could not be created due to a naming conflict. Choose a different name and then try again.</p>
   *   - {UnsupportedIndexTypeException} <p>Indicates that the requested index type is not supported.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createIndex(args: CreateIndexInput): Promise<CreateIndexOutput>;
  public createIndex(
    args: CreateIndexInput,
    cb: (err: any, data?: CreateIndexOutput) => void
  ): void;
  public createIndex(
    args: CreateIndexInput,
    cb?: (err: any, data?: CreateIndexOutput) => void
  ): Promise<CreateIndexOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateIndexCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an object in a <a>Directory</a>. Additionally attaches the object to a parent, if a parent reference and <code>LinkName</code> is specified. An object is simply a collection of <a>Facet</a> attributes. You can also use this API call to create a policy object, if the facet from which you create the object is a policy facet. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {DirectoryNotEnabledException} <p>Operations are only permitted on enabled directories.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {FacetValidationException} <p>The <a>Facet</a> that you provided was not well formed or could not be validated with the schema.</p>
   *   - {LinkNameAlreadyInUseException} <p>Indicates that a link could not be created due to a naming conflict. Choose a different name and then try again.</p>
   *   - {UnsupportedIndexTypeException} <p>Indicates that the requested index type is not supported.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createObject(args: CreateObjectInput): Promise<CreateObjectOutput>;
  public createObject(
    args: CreateObjectInput,
    cb: (err: any, data?: CreateObjectOutput) => void
  ): void;
  public createObject(
    args: CreateObjectInput,
    cb?: (err: any, data?: CreateObjectOutput) => void
  ): Promise<CreateObjectOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateObjectCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new schema in a development state. A schema can exist in three phases:</p> <ul> <li> <p> <i>Development:</i> This is a mutable phase of the schema. All new schemas are in the development phase. Once the schema is finalized, it can be published.</p> </li> <li> <p> <i>Published:</i> Published schemas are immutable and have a version associated with them.</p> </li> <li> <p> <i>Applied:</i> Applied schemas are mutable in a way that allows you to add new schema facets. You can also add new, nonrequired attributes to existing schema facets. You can apply only published schemas to directories. </p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {SchemaAlreadyExistsException} <p>Indicates that a schema could not be created due to a naming conflict. Please select a different name and then try again.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createSchema(args: CreateSchemaInput): Promise<CreateSchemaOutput>;
  public createSchema(
    args: CreateSchemaInput,
    cb: (err: any, data?: CreateSchemaOutput) => void
  ): void;
  public createSchema(
    args: CreateSchemaInput,
    cb?: (err: any, data?: CreateSchemaOutput) => void
  ): Promise<CreateSchemaOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateSchemaCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {FacetAlreadyExistsException} <p>A facet with the same name already exists.</p>
   *   - {InvalidRuleException} <p>Occurs when any of the rule parameter keys or values are invalid.</p>
   *   - {FacetValidationException} <p>The <a>Facet</a> that you provided was not well formed or could not be validated with the schema.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createTypedLinkFacet(
    args: CreateTypedLinkFacetInput
  ): Promise<CreateTypedLinkFacetOutput>;
  public createTypedLinkFacet(
    args: CreateTypedLinkFacetInput,
    cb: (err: any, data?: CreateTypedLinkFacetOutput) => void
  ): void;
  public createTypedLinkFacet(
    args: CreateTypedLinkFacetInput,
    cb?: (err: any, data?: CreateTypedLinkFacetOutput) => void
  ): Promise<CreateTypedLinkFacetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateTypedLinkFacetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a directory. Only disabled directories can be deleted. A deleted directory cannot be undone. Exercise extreme caution when deleting directories.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {DirectoryNotDisabledException} <p>An operation can only operate on a disabled directory.</p>
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {DirectoryDeletedException} <p>A directory that has been deleted and to which access has been attempted. Note: The requested resource will eventually cease to exist.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDirectory(
    args: DeleteDirectoryInput
  ): Promise<DeleteDirectoryOutput>;
  public deleteDirectory(
    args: DeleteDirectoryInput,
    cb: (err: any, data?: DeleteDirectoryOutput) => void
  ): void;
  public deleteDirectory(
    args: DeleteDirectoryInput,
    cb?: (err: any, data?: DeleteDirectoryOutput) => void
  ): Promise<DeleteDirectoryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDirectoryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a given <a>Facet</a>. All attributes and <a>Rule</a>s that are associated with the facet will be deleted. Only development schema facets are allowed deletion.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {FacetNotFoundException} <p>The specified <a>Facet</a> could not be found.</p>
   *   - {FacetInUseException} <p>Occurs when deleting a facet that contains an attribute that is a target to an attribute reference in a different facet.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteFacet(args: DeleteFacetInput): Promise<DeleteFacetOutput>;
  public deleteFacet(
    args: DeleteFacetInput,
    cb: (err: any, data?: DeleteFacetOutput) => void
  ): void;
  public deleteFacet(
    args: DeleteFacetInput,
    cb?: (err: any, data?: DeleteFacetOutput) => void
  ): Promise<DeleteFacetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteFacetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an object and its associated attributes. Only objects with no children and no parents can be deleted. The maximum number of attributes that can be deleted during an object deletion is 30. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Amazon Cloud Directory Limits</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {DirectoryNotEnabledException} <p>Operations are only permitted on enabled directories.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {ObjectNotDetachedException} <p>Indicates that the requested operation cannot be completed because the object has not been detached from the tree.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteObject(args: DeleteObjectInput): Promise<DeleteObjectOutput>;
  public deleteObject(
    args: DeleteObjectInput,
    cb: (err: any, data?: DeleteObjectOutput) => void
  ): void;
  public deleteObject(
    args: DeleteObjectInput,
    cb?: (err: any, data?: DeleteObjectOutput) => void
  ): Promise<DeleteObjectOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteObjectCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a given schema. Schemas in a development and published state can only be deleted. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {StillContainsLinksException} <p>The object could not be deleted because links still exist. Remove the links and then try the operation again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteSchema(args: DeleteSchemaInput): Promise<DeleteSchemaOutput>;
  public deleteSchema(
    args: DeleteSchemaInput,
    cb: (err: any, data?: DeleteSchemaOutput) => void
  ): void;
  public deleteSchema(
    args: DeleteSchemaInput,
    cb?: (err: any, data?: DeleteSchemaOutput) => void
  ): Promise<DeleteSchemaOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteSchemaCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {FacetNotFoundException} <p>The specified <a>Facet</a> could not be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteTypedLinkFacet(
    args: DeleteTypedLinkFacetInput
  ): Promise<DeleteTypedLinkFacetOutput>;
  public deleteTypedLinkFacet(
    args: DeleteTypedLinkFacetInput,
    cb: (err: any, data?: DeleteTypedLinkFacetOutput) => void
  ): void;
  public deleteTypedLinkFacet(
    args: DeleteTypedLinkFacetInput,
    cb?: (err: any, data?: DeleteTypedLinkFacetOutput) => void
  ): Promise<DeleteTypedLinkFacetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteTypedLinkFacetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Detaches the specified object from the specified index.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {DirectoryNotEnabledException} <p>Operations are only permitted on enabled directories.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {ObjectAlreadyDetachedException} <p>Indicates that the object is not attached to the index.</p>
   *   - {NotIndexException} <p>Indicates that the requested operation can only operate on index objects.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public detachFromIndex(
    args: DetachFromIndexInput
  ): Promise<DetachFromIndexOutput>;
  public detachFromIndex(
    args: DetachFromIndexInput,
    cb: (err: any, data?: DetachFromIndexOutput) => void
  ): void;
  public detachFromIndex(
    args: DetachFromIndexInput,
    cb?: (err: any, data?: DetachFromIndexOutput) => void
  ): Promise<DetachFromIndexOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DetachFromIndexCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Detaches a given object from the parent object. The object that is to be detached from the parent is specified by the link name.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {DirectoryNotEnabledException} <p>Operations are only permitted on enabled directories.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {NotNodeException} <p>Occurs when any invalid operations are performed on an object that is not a node, such as calling <code>ListObjectChildren</code> for a leaf node object.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public detachObject(args: DetachObjectInput): Promise<DetachObjectOutput>;
  public detachObject(
    args: DetachObjectInput,
    cb: (err: any, data?: DetachObjectOutput) => void
  ): void;
  public detachObject(
    args: DetachObjectInput,
    cb?: (err: any, data?: DetachObjectOutput) => void
  ): Promise<DetachObjectOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DetachObjectCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Detaches a policy from an object.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {DirectoryNotEnabledException} <p>Operations are only permitted on enabled directories.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {NotPolicyException} <p>Indicates that the requested operation can only operate on policy objects.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public detachPolicy(args: DetachPolicyInput): Promise<DetachPolicyOutput>;
  public detachPolicy(
    args: DetachPolicyInput,
    cb: (err: any, data?: DetachPolicyOutput) => void
  ): void;
  public detachPolicy(
    args: DetachPolicyInput,
    cb?: (err: any, data?: DetachPolicyOutput) => void
  ): Promise<DetachPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DetachPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Detaches a typed link from a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {DirectoryNotEnabledException} <p>Operations are only permitted on enabled directories.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {FacetValidationException} <p>The <a>Facet</a> that you provided was not well formed or could not be validated with the schema.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public detachTypedLink(
    args: DetachTypedLinkInput
  ): Promise<DetachTypedLinkOutput>;
  public detachTypedLink(
    args: DetachTypedLinkInput,
    cb: (err: any, data?: DetachTypedLinkOutput) => void
  ): void;
  public detachTypedLink(
    args: DetachTypedLinkInput,
    cb?: (err: any, data?: DetachTypedLinkOutput) => void
  ): Promise<DetachTypedLinkOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DetachTypedLinkCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disables the specified directory. Disabled directories cannot be read or written to. Only enabled directories can be disabled. Disabled directories may be reenabled.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {DirectoryDeletedException} <p>A directory that has been deleted and to which access has been attempted. Note: The requested resource will eventually cease to exist.</p>
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disableDirectory(
    args: DisableDirectoryInput
  ): Promise<DisableDirectoryOutput>;
  public disableDirectory(
    args: DisableDirectoryInput,
    cb: (err: any, data?: DisableDirectoryOutput) => void
  ): void;
  public disableDirectory(
    args: DisableDirectoryInput,
    cb?: (err: any, data?: DisableDirectoryOutput) => void
  ): Promise<DisableDirectoryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisableDirectoryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Enables the specified directory. Only disabled directories can be enabled. Once enabled, the directory can then be read and written to.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {DirectoryDeletedException} <p>A directory that has been deleted and to which access has been attempted. Note: The requested resource will eventually cease to exist.</p>
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public enableDirectory(
    args: EnableDirectoryInput
  ): Promise<EnableDirectoryOutput>;
  public enableDirectory(
    args: EnableDirectoryInput,
    cb: (err: any, data?: EnableDirectoryOutput) => void
  ): void;
  public enableDirectory(
    args: EnableDirectoryInput,
    cb?: (err: any, data?: EnableDirectoryOutput) => void
  ): Promise<EnableDirectoryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new EnableDirectoryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns current applied schema version ARN, including the minor version in use.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getAppliedSchemaVersion(
    args: GetAppliedSchemaVersionInput
  ): Promise<GetAppliedSchemaVersionOutput>;
  public getAppliedSchemaVersion(
    args: GetAppliedSchemaVersionInput,
    cb: (err: any, data?: GetAppliedSchemaVersionOutput) => void
  ): void;
  public getAppliedSchemaVersion(
    args: GetAppliedSchemaVersionInput,
    cb?: (err: any, data?: GetAppliedSchemaVersionOutput) => void
  ): Promise<GetAppliedSchemaVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetAppliedSchemaVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves metadata about a directory.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDirectory(args: GetDirectoryInput): Promise<GetDirectoryOutput>;
  public getDirectory(
    args: GetDirectoryInput,
    cb: (err: any, data?: GetDirectoryOutput) => void
  ): void;
  public getDirectory(
    args: GetDirectoryInput,
    cb?: (err: any, data?: GetDirectoryOutput) => void
  ): Promise<GetDirectoryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDirectoryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets details of the <a>Facet</a>, such as facet name, attributes, <a>Rule</a>s, or <code>ObjectType</code>. You can call this on all kinds of schema facets -- published, development, or applied.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {FacetNotFoundException} <p>The specified <a>Facet</a> could not be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getFacet(args: GetFacetInput): Promise<GetFacetOutput>;
  public getFacet(
    args: GetFacetInput,
    cb: (err: any, data?: GetFacetOutput) => void
  ): void;
  public getFacet(
    args: GetFacetInput,
    cb?: (err: any, data?: GetFacetOutput) => void
  ): Promise<GetFacetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetFacetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves attributes that are associated with a typed link.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {DirectoryNotEnabledException} <p>Operations are only permitted on enabled directories.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {FacetValidationException} <p>The <a>Facet</a> that you provided was not well formed or could not be validated with the schema.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getLinkAttributes(
    args: GetLinkAttributesInput
  ): Promise<GetLinkAttributesOutput>;
  public getLinkAttributes(
    args: GetLinkAttributesInput,
    cb: (err: any, data?: GetLinkAttributesOutput) => void
  ): void;
  public getLinkAttributes(
    args: GetLinkAttributesInput,
    cb?: (err: any, data?: GetLinkAttributesOutput) => void
  ): Promise<GetLinkAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetLinkAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves attributes within a facet that are associated with an object.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {DirectoryNotEnabledException} <p>Operations are only permitted on enabled directories.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {FacetValidationException} <p>The <a>Facet</a> that you provided was not well formed or could not be validated with the schema.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getObjectAttributes(
    args: GetObjectAttributesInput
  ): Promise<GetObjectAttributesOutput>;
  public getObjectAttributes(
    args: GetObjectAttributesInput,
    cb: (err: any, data?: GetObjectAttributesOutput) => void
  ): void;
  public getObjectAttributes(
    args: GetObjectAttributesInput,
    cb?: (err: any, data?: GetObjectAttributesOutput) => void
  ): Promise<GetObjectAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetObjectAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves metadata about an object.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {DirectoryNotEnabledException} <p>Operations are only permitted on enabled directories.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getObjectInformation(
    args: GetObjectInformationInput
  ): Promise<GetObjectInformationOutput>;
  public getObjectInformation(
    args: GetObjectInformationInput,
    cb: (err: any, data?: GetObjectInformationOutput) => void
  ): void;
  public getObjectInformation(
    args: GetObjectInformationInput,
    cb?: (err: any, data?: GetObjectInformationOutput) => void
  ): Promise<GetObjectInformationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetObjectInformationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a JSON representation of the schema. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_jsonformat.html#schemas_json">JSON Schema Format</a> for more information.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getSchemaAsJson(
    args: GetSchemaAsJsonInput
  ): Promise<GetSchemaAsJsonOutput>;
  public getSchemaAsJson(
    args: GetSchemaAsJsonInput,
    cb: (err: any, data?: GetSchemaAsJsonOutput) => void
  ): void;
  public getSchemaAsJson(
    args: GetSchemaAsJsonInput,
    cb?: (err: any, data?: GetSchemaAsJsonOutput) => void
  ): Promise<GetSchemaAsJsonOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetSchemaAsJsonCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the identity attribute order for a specific <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {InvalidNextTokenException} <p>Indicates that the <code>NextToken</code> value is not valid.</p>
   *   - {FacetNotFoundException} <p>The specified <a>Facet</a> could not be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getTypedLinkFacetInformation(
    args: GetTypedLinkFacetInformationInput
  ): Promise<GetTypedLinkFacetInformationOutput>;
  public getTypedLinkFacetInformation(
    args: GetTypedLinkFacetInformationInput,
    cb: (err: any, data?: GetTypedLinkFacetInformationOutput) => void
  ): void;
  public getTypedLinkFacetInformation(
    args: GetTypedLinkFacetInformationInput,
    cb?: (err: any, data?: GetTypedLinkFacetInformationOutput) => void
  ): Promise<GetTypedLinkFacetInformationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetTypedLinkFacetInformationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists schema major versions applied to a directory. If <code>SchemaArn</code> is provided, lists the minor version.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {InvalidNextTokenException} <p>Indicates that the <code>NextToken</code> value is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listAppliedSchemaArns(
    args: ListAppliedSchemaArnsInput
  ): Promise<ListAppliedSchemaArnsOutput>;
  public listAppliedSchemaArns(
    args: ListAppliedSchemaArnsInput,
    cb: (err: any, data?: ListAppliedSchemaArnsOutput) => void
  ): void;
  public listAppliedSchemaArns(
    args: ListAppliedSchemaArnsInput,
    cb?: (err: any, data?: ListAppliedSchemaArnsOutput) => void
  ): Promise<ListAppliedSchemaArnsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListAppliedSchemaArnsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists indices attached to the specified object.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {DirectoryNotEnabledException} <p>Operations are only permitted on enabled directories.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listAttachedIndices(
    args: ListAttachedIndicesInput
  ): Promise<ListAttachedIndicesOutput>;
  public listAttachedIndices(
    args: ListAttachedIndicesInput,
    cb: (err: any, data?: ListAttachedIndicesOutput) => void
  ): void;
  public listAttachedIndices(
    args: ListAttachedIndicesInput,
    cb?: (err: any, data?: ListAttachedIndicesOutput) => void
  ): Promise<ListAttachedIndicesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListAttachedIndicesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves each Amazon Resource Name (ARN) of schemas in the development state.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {InvalidNextTokenException} <p>Indicates that the <code>NextToken</code> value is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDevelopmentSchemaArns(
    args: ListDevelopmentSchemaArnsInput
  ): Promise<ListDevelopmentSchemaArnsOutput>;
  public listDevelopmentSchemaArns(
    args: ListDevelopmentSchemaArnsInput,
    cb: (err: any, data?: ListDevelopmentSchemaArnsOutput) => void
  ): void;
  public listDevelopmentSchemaArns(
    args: ListDevelopmentSchemaArnsInput,
    cb?: (err: any, data?: ListDevelopmentSchemaArnsOutput) => void
  ): Promise<ListDevelopmentSchemaArnsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDevelopmentSchemaArnsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists directories created within an account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {InvalidNextTokenException} <p>Indicates that the <code>NextToken</code> value is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDirectories(
    args: ListDirectoriesInput
  ): Promise<ListDirectoriesOutput>;
  public listDirectories(
    args: ListDirectoriesInput,
    cb: (err: any, data?: ListDirectoriesOutput) => void
  ): void;
  public listDirectories(
    args: ListDirectoriesInput,
    cb?: (err: any, data?: ListDirectoriesOutput) => void
  ): Promise<ListDirectoriesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDirectoriesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves attributes attached to the facet.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {FacetNotFoundException} <p>The specified <a>Facet</a> could not be found.</p>
   *   - {InvalidNextTokenException} <p>Indicates that the <code>NextToken</code> value is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listFacetAttributes(
    args: ListFacetAttributesInput
  ): Promise<ListFacetAttributesOutput>;
  public listFacetAttributes(
    args: ListFacetAttributesInput,
    cb: (err: any, data?: ListFacetAttributesOutput) => void
  ): void;
  public listFacetAttributes(
    args: ListFacetAttributesInput,
    cb?: (err: any, data?: ListFacetAttributesOutput) => void
  ): Promise<ListFacetAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListFacetAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the names of facets that exist in a schema.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {InvalidNextTokenException} <p>Indicates that the <code>NextToken</code> value is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listFacetNames(
    args: ListFacetNamesInput
  ): Promise<ListFacetNamesOutput>;
  public listFacetNames(
    args: ListFacetNamesInput,
    cb: (err: any, data?: ListFacetNamesOutput) => void
  ): void;
  public listFacetNames(
    args: ListFacetNamesInput,
    cb?: (err: any, data?: ListFacetNamesOutput) => void
  ): Promise<ListFacetNamesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListFacetNamesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {DirectoryNotEnabledException} <p>Operations are only permitted on enabled directories.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {InvalidNextTokenException} <p>Indicates that the <code>NextToken</code> value is not valid.</p>
   *   - {FacetValidationException} <p>The <a>Facet</a> that you provided was not well formed or could not be validated with the schema.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listIncomingTypedLinks(
    args: ListIncomingTypedLinksInput
  ): Promise<ListIncomingTypedLinksOutput>;
  public listIncomingTypedLinks(
    args: ListIncomingTypedLinksInput,
    cb: (err: any, data?: ListIncomingTypedLinksOutput) => void
  ): void;
  public listIncomingTypedLinks(
    args: ListIncomingTypedLinksInput,
    cb?: (err: any, data?: ListIncomingTypedLinksOutput) => void
  ): Promise<ListIncomingTypedLinksOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListIncomingTypedLinksCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists objects attached to the specified index.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {FacetValidationException} <p>The <a>Facet</a> that you provided was not well formed or could not be validated with the schema.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {DirectoryNotEnabledException} <p>Operations are only permitted on enabled directories.</p>
   *   - {InvalidNextTokenException} <p>Indicates that the <code>NextToken</code> value is not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {NotIndexException} <p>Indicates that the requested operation can only operate on index objects.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listIndex(args: ListIndexInput): Promise<ListIndexOutput>;
  public listIndex(
    args: ListIndexInput,
    cb: (err: any, data?: ListIndexOutput) => void
  ): void;
  public listIndex(
    args: ListIndexInput,
    cb?: (err: any, data?: ListIndexOutput) => void
  ): Promise<ListIndexOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListIndexCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the major version families of each managed schema. If a major version ARN is provided as SchemaArn, the minor version revisions in that family are listed instead.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {InvalidNextTokenException} <p>Indicates that the <code>NextToken</code> value is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listManagedSchemaArns(
    args: ListManagedSchemaArnsInput
  ): Promise<ListManagedSchemaArnsOutput>;
  public listManagedSchemaArns(
    args: ListManagedSchemaArnsInput,
    cb: (err: any, data?: ListManagedSchemaArnsOutput) => void
  ): void;
  public listManagedSchemaArns(
    args: ListManagedSchemaArnsInput,
    cb?: (err: any, data?: ListManagedSchemaArnsOutput) => void
  ): Promise<ListManagedSchemaArnsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListManagedSchemaArnsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all attributes that are associated with an object. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {DirectoryNotEnabledException} <p>Operations are only permitted on enabled directories.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {InvalidNextTokenException} <p>Indicates that the <code>NextToken</code> value is not valid.</p>
   *   - {FacetValidationException} <p>The <a>Facet</a> that you provided was not well formed or could not be validated with the schema.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listObjectAttributes(
    args: ListObjectAttributesInput
  ): Promise<ListObjectAttributesOutput>;
  public listObjectAttributes(
    args: ListObjectAttributesInput,
    cb: (err: any, data?: ListObjectAttributesOutput) => void
  ): void;
  public listObjectAttributes(
    args: ListObjectAttributesInput,
    cb?: (err: any, data?: ListObjectAttributesOutput) => void
  ): Promise<ListObjectAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListObjectAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a paginated list of child objects that are associated with a given object.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {DirectoryNotEnabledException} <p>Operations are only permitted on enabled directories.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {InvalidNextTokenException} <p>Indicates that the <code>NextToken</code> value is not valid.</p>
   *   - {NotNodeException} <p>Occurs when any invalid operations are performed on an object that is not a node, such as calling <code>ListObjectChildren</code> for a leaf node object.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listObjectChildren(
    args: ListObjectChildrenInput
  ): Promise<ListObjectChildrenOutput>;
  public listObjectChildren(
    args: ListObjectChildrenInput,
    cb: (err: any, data?: ListObjectChildrenOutput) => void
  ): void;
  public listObjectChildren(
    args: ListObjectChildrenInput,
    cb?: (err: any, data?: ListObjectChildrenOutput) => void
  ): Promise<ListObjectChildrenOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListObjectChildrenCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects. For more information about objects, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directorystructure.html">Directory Structure</a>.</p> <p>Use this API to evaluate all parents for an object. The call returns all objects from the root of the directory up to the requested object. The API returns the number of paths based on user-defined <code>MaxResults</code>, in case there are multiple paths to the parent. The order of the paths and nodes returned is consistent among multiple API calls unless the objects are deleted or moved. Paths not leading to the directory root are ignored from the target object.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {DirectoryNotEnabledException} <p>Operations are only permitted on enabled directories.</p>
   *   - {InvalidNextTokenException} <p>Indicates that the <code>NextToken</code> value is not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listObjectParentPaths(
    args: ListObjectParentPathsInput
  ): Promise<ListObjectParentPathsOutput>;
  public listObjectParentPaths(
    args: ListObjectParentPathsInput,
    cb: (err: any, data?: ListObjectParentPathsOutput) => void
  ): void;
  public listObjectParentPaths(
    args: ListObjectParentPathsInput,
    cb?: (err: any, data?: ListObjectParentPathsOutput) => void
  ): Promise<ListObjectParentPathsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListObjectParentPathsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists parent objects that are associated with a given object in pagination fashion.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {DirectoryNotEnabledException} <p>Operations are only permitted on enabled directories.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {InvalidNextTokenException} <p>Indicates that the <code>NextToken</code> value is not valid.</p>
   *   - {CannotListParentOfRootException} <p>Cannot list the parents of a <a>Directory</a> root.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listObjectParents(
    args: ListObjectParentsInput
  ): Promise<ListObjectParentsOutput>;
  public listObjectParents(
    args: ListObjectParentsInput,
    cb: (err: any, data?: ListObjectParentsOutput) => void
  ): void;
  public listObjectParents(
    args: ListObjectParentsInput,
    cb?: (err: any, data?: ListObjectParentsOutput) => void
  ): Promise<ListObjectParentsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListObjectParentsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns policies attached to an object in pagination fashion.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {DirectoryNotEnabledException} <p>Operations are only permitted on enabled directories.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {InvalidNextTokenException} <p>Indicates that the <code>NextToken</code> value is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listObjectPolicies(
    args: ListObjectPoliciesInput
  ): Promise<ListObjectPoliciesOutput>;
  public listObjectPolicies(
    args: ListObjectPoliciesInput,
    cb: (err: any, data?: ListObjectPoliciesOutput) => void
  ): void;
  public listObjectPolicies(
    args: ListObjectPoliciesInput,
    cb?: (err: any, data?: ListObjectPoliciesOutput) => void
  ): Promise<ListObjectPoliciesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListObjectPoliciesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {DirectoryNotEnabledException} <p>Operations are only permitted on enabled directories.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {InvalidNextTokenException} <p>Indicates that the <code>NextToken</code> value is not valid.</p>
   *   - {FacetValidationException} <p>The <a>Facet</a> that you provided was not well formed or could not be validated with the schema.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listOutgoingTypedLinks(
    args: ListOutgoingTypedLinksInput
  ): Promise<ListOutgoingTypedLinksOutput>;
  public listOutgoingTypedLinks(
    args: ListOutgoingTypedLinksInput,
    cb: (err: any, data?: ListOutgoingTypedLinksOutput) => void
  ): void;
  public listOutgoingTypedLinks(
    args: ListOutgoingTypedLinksInput,
    cb?: (err: any, data?: ListOutgoingTypedLinksOutput) => void
  ): Promise<ListOutgoingTypedLinksOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListOutgoingTypedLinksCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {DirectoryNotEnabledException} <p>Operations are only permitted on enabled directories.</p>
   *   - {InvalidNextTokenException} <p>Indicates that the <code>NextToken</code> value is not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {NotPolicyException} <p>Indicates that the requested operation can only operate on policy objects.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listPolicyAttachments(
    args: ListPolicyAttachmentsInput
  ): Promise<ListPolicyAttachmentsOutput>;
  public listPolicyAttachments(
    args: ListPolicyAttachmentsInput,
    cb: (err: any, data?: ListPolicyAttachmentsOutput) => void
  ): void;
  public listPolicyAttachments(
    args: ListPolicyAttachmentsInput,
    cb?: (err: any, data?: ListPolicyAttachmentsOutput) => void
  ): Promise<ListPolicyAttachmentsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListPolicyAttachmentsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the major version families of each published schema. If a major version ARN is provided as <code>SchemaArn</code>, the minor version revisions in that family are listed instead.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {InvalidNextTokenException} <p>Indicates that the <code>NextToken</code> value is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listPublishedSchemaArns(
    args: ListPublishedSchemaArnsInput
  ): Promise<ListPublishedSchemaArnsOutput>;
  public listPublishedSchemaArns(
    args: ListPublishedSchemaArnsInput,
    cb: (err: any, data?: ListPublishedSchemaArnsOutput) => void
  ): void;
  public listPublishedSchemaArns(
    args: ListPublishedSchemaArnsInput,
    cb?: (err: any, data?: ListPublishedSchemaArnsOutput) => void
  ): Promise<ListPublishedSchemaArnsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListPublishedSchemaArnsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns tags for a resource. Tagging is currently supported only for directories with a limit of 50 tags per directory. All 50 tags are returned for a given directory with this API call.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {InvalidTaggingRequestException} <p>Can occur for multiple reasons such as when you tag a resource that doesn’t exist or if you specify a higher number of tags for a resource than the allowed limit. Allowed limit is 50 tags per resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForResource(
    args: ListTagsForResourceInput
  ): Promise<ListTagsForResourceOutput>;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb: (err: any, data?: ListTagsForResourceOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb?: (err: any, data?: ListTagsForResourceOutput) => void
  ): Promise<ListTagsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a paginated list of all attribute definitions for a particular <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {FacetNotFoundException} <p>The specified <a>Facet</a> could not be found.</p>
   *   - {InvalidNextTokenException} <p>Indicates that the <code>NextToken</code> value is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTypedLinkFacetAttributes(
    args: ListTypedLinkFacetAttributesInput
  ): Promise<ListTypedLinkFacetAttributesOutput>;
  public listTypedLinkFacetAttributes(
    args: ListTypedLinkFacetAttributesInput,
    cb: (err: any, data?: ListTypedLinkFacetAttributesOutput) => void
  ): void;
  public listTypedLinkFacetAttributes(
    args: ListTypedLinkFacetAttributesInput,
    cb?: (err: any, data?: ListTypedLinkFacetAttributesOutput) => void
  ): Promise<ListTypedLinkFacetAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTypedLinkFacetAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a paginated list of <code>TypedLink</code> facet names for a particular schema. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {InvalidNextTokenException} <p>Indicates that the <code>NextToken</code> value is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTypedLinkFacetNames(
    args: ListTypedLinkFacetNamesInput
  ): Promise<ListTypedLinkFacetNamesOutput>;
  public listTypedLinkFacetNames(
    args: ListTypedLinkFacetNamesInput,
    cb: (err: any, data?: ListTypedLinkFacetNamesOutput) => void
  ): void;
  public listTypedLinkFacetNames(
    args: ListTypedLinkFacetNamesInput,
    cb?: (err: any, data?: ListTypedLinkFacetNamesOutput) => void
  ): Promise<ListTypedLinkFacetNamesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTypedLinkFacetNamesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all policies from the root of the <a>Directory</a> to the object specified. If there are no policies present, an empty list is returned. If policies are present, and if some objects don't have the policies attached, it returns the <code>ObjectIdentifier</code> for such objects. If policies are present, it returns <code>ObjectIdentifier</code>, <code>policyId</code>, and <code>policyType</code>. Paths that don't lead to the root from the target object are ignored. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {DirectoryNotEnabledException} <p>Operations are only permitted on enabled directories.</p>
   *   - {InvalidNextTokenException} <p>Indicates that the <code>NextToken</code> value is not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public lookupPolicy(args: LookupPolicyInput): Promise<LookupPolicyOutput>;
  public lookupPolicy(
    args: LookupPolicyInput,
    cb: (err: any, data?: LookupPolicyOutput) => void
  ): void;
  public lookupPolicy(
    args: LookupPolicyInput,
    cb?: (err: any, data?: LookupPolicyOutput) => void
  ): Promise<LookupPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new LookupPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Publishes a development schema with a major version and a recommended minor version.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {SchemaAlreadyPublishedException} <p>Indicates that a schema is already published.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public publishSchema(args: PublishSchemaInput): Promise<PublishSchemaOutput>;
  public publishSchema(
    args: PublishSchemaInput,
    cb: (err: any, data?: PublishSchemaOutput) => void
  ): void;
  public publishSchema(
    args: PublishSchemaInput,
    cb?: (err: any, data?: PublishSchemaOutput) => void
  ): Promise<PublishSchemaOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PublishSchemaCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Allows a schema to be updated using JSON upload. Only available for development schemas. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_jsonformat.html#schemas_json">JSON Schema Format</a> for more information.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {InvalidSchemaDocException} <p>Indicates that the provided <code>SchemaDoc</code> value is not valid.</p>
   *   - {InvalidRuleException} <p>Occurs when any of the rule parameter keys or values are invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putSchemaFromJson(
    args: PutSchemaFromJsonInput
  ): Promise<PutSchemaFromJsonOutput>;
  public putSchemaFromJson(
    args: PutSchemaFromJsonInput,
    cb: (err: any, data?: PutSchemaFromJsonOutput) => void
  ): void;
  public putSchemaFromJson(
    args: PutSchemaFromJsonInput,
    cb?: (err: any, data?: PutSchemaFromJsonOutput) => void
  ): Promise<PutSchemaFromJsonOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutSchemaFromJsonCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes the specified facet from the specified object.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {DirectoryNotEnabledException} <p>Operations are only permitted on enabled directories.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {FacetValidationException} <p>The <a>Facet</a> that you provided was not well formed or could not be validated with the schema.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public removeFacetFromObject(
    args: RemoveFacetFromObjectInput
  ): Promise<RemoveFacetFromObjectOutput>;
  public removeFacetFromObject(
    args: RemoveFacetFromObjectInput,
    cb: (err: any, data?: RemoveFacetFromObjectOutput) => void
  ): void;
  public removeFacetFromObject(
    args: RemoveFacetFromObjectInput,
    cb?: (err: any, data?: RemoveFacetFromObjectOutput) => void
  ): Promise<RemoveFacetFromObjectOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RemoveFacetFromObjectCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>An API operation for adding tags to a resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {InvalidTaggingRequestException} <p>Can occur for multiple reasons such as when you tag a resource that doesn’t exist or if you specify a higher number of tags for a resource than the allowed limit. Allowed limit is 50 tags per resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagResource(args: TagResourceInput): Promise<TagResourceOutput>;
  public tagResource(
    args: TagResourceInput,
    cb: (err: any, data?: TagResourceOutput) => void
  ): void;
  public tagResource(
    args: TagResourceInput,
    cb?: (err: any, data?: TagResourceOutput) => void
  ): Promise<TagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>An API operation for removing tags from a resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {InvalidTaggingRequestException} <p>Can occur for multiple reasons such as when you tag a resource that doesn’t exist or if you specify a higher number of tags for a resource than the allowed limit. Allowed limit is 50 tags per resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagResource(args: UntagResourceInput): Promise<UntagResourceOutput>;
  public untagResource(
    args: UntagResourceInput,
    cb: (err: any, data?: UntagResourceOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceInput,
    cb?: (err: any, data?: UntagResourceOutput) => void
  ): Promise<UntagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Does the following:</p> <ol> <li> <p>Adds new <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> <li> <p>Updates existing <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> <li> <p>Deletes existing <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> </ol>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {InvalidFacetUpdateException} <p>An attempt to modify a <a>Facet</a> resulted in an invalid schema exception.</p>
   *   - {FacetValidationException} <p>The <a>Facet</a> that you provided was not well formed or could not be validated with the schema.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {FacetNotFoundException} <p>The specified <a>Facet</a> could not be found.</p>
   *   - {InvalidRuleException} <p>Occurs when any of the rule parameter keys or values are invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateFacet(args: UpdateFacetInput): Promise<UpdateFacetOutput>;
  public updateFacet(
    args: UpdateFacetInput,
    cb: (err: any, data?: UpdateFacetOutput) => void
  ): void;
  public updateFacet(
    args: UpdateFacetInput,
    cb?: (err: any, data?: UpdateFacetOutput) => void
  ): Promise<UpdateFacetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateFacetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a given typed link’s attributes. Attributes to be updated must not contribute to the typed link’s identity, as defined by its <code>IdentityAttributeOrder</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {DirectoryNotEnabledException} <p>Operations are only permitted on enabled directories.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {FacetValidationException} <p>The <a>Facet</a> that you provided was not well formed or could not be validated with the schema.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateLinkAttributes(
    args: UpdateLinkAttributesInput
  ): Promise<UpdateLinkAttributesOutput>;
  public updateLinkAttributes(
    args: UpdateLinkAttributesInput,
    cb: (err: any, data?: UpdateLinkAttributesOutput) => void
  ): void;
  public updateLinkAttributes(
    args: UpdateLinkAttributesInput,
    cb?: (err: any, data?: UpdateLinkAttributesOutput) => void
  ): Promise<UpdateLinkAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateLinkAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a given object's attributes.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {DirectoryNotEnabledException} <p>Operations are only permitted on enabled directories.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {LinkNameAlreadyInUseException} <p>Indicates that a link could not be created due to a naming conflict. Choose a different name and then try again.</p>
   *   - {FacetValidationException} <p>The <a>Facet</a> that you provided was not well formed or could not be validated with the schema.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateObjectAttributes(
    args: UpdateObjectAttributesInput
  ): Promise<UpdateObjectAttributesOutput>;
  public updateObjectAttributes(
    args: UpdateObjectAttributesInput,
    cb: (err: any, data?: UpdateObjectAttributesOutput) => void
  ): void;
  public updateObjectAttributes(
    args: UpdateObjectAttributesInput,
    cb?: (err: any, data?: UpdateObjectAttributesOutput) => void
  ): Promise<UpdateObjectAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateObjectAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the schema name with a new name. Only development schema names can be updated.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateSchema(args: UpdateSchemaInput): Promise<UpdateSchemaOutput>;
  public updateSchema(
    args: UpdateSchemaInput,
    cb: (err: any, data?: UpdateSchemaOutput) => void
  ): void;
  public updateSchema(
    args: UpdateSchemaInput,
    cb?: (err: any, data?: UpdateSchemaOutput) => void
  ): Promise<UpdateSchemaOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateSchemaCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {FacetValidationException} <p>The <a>Facet</a> that you provided was not well formed or could not be validated with the schema.</p>
   *   - {InvalidFacetUpdateException} <p>An attempt to modify a <a>Facet</a> resulted in an invalid schema exception.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {FacetNotFoundException} <p>The specified <a>Facet</a> could not be found.</p>
   *   - {InvalidRuleException} <p>Occurs when any of the rule parameter keys or values are invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateTypedLinkFacet(
    args: UpdateTypedLinkFacetInput
  ): Promise<UpdateTypedLinkFacetOutput>;
  public updateTypedLinkFacet(
    args: UpdateTypedLinkFacetInput,
    cb: (err: any, data?: UpdateTypedLinkFacetOutput) => void
  ): void;
  public updateTypedLinkFacet(
    args: UpdateTypedLinkFacetInput,
    cb?: (err: any, data?: UpdateTypedLinkFacetOutput) => void
  ): Promise<UpdateTypedLinkFacetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateTypedLinkFacetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Upgrades a single directory in-place using the <code>PublishedSchemaArn</code> with schema updates found in <code>MinorVersion</code>. Backwards-compatible minor version upgrades are instantaneously available for readers on all objects in the directory. Note: This is a synchronous API call and upgrades only one schema on a given directory per call. To upgrade multiple directories from one schema, you would need to call this API on each directory.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {IncompatibleSchemaException} <p>Indicates a failure occurred while performing a check for backward compatibility between the specified schema and the schema that is currently applied to the directory.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {InvalidAttachmentException} <p>Indicates that an attempt to make an attachment was invalid. For example, attaching two nodes with a link type that is not applicable to the nodes or attempting to apply a schema to a directory a second time.</p>
   *   - {SchemaAlreadyExistsException} <p>Indicates that a schema could not be created due to a naming conflict. Please select a different name and then try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public upgradeAppliedSchema(
    args: UpgradeAppliedSchemaInput
  ): Promise<UpgradeAppliedSchemaOutput>;
  public upgradeAppliedSchema(
    args: UpgradeAppliedSchemaInput,
    cb: (err: any, data?: UpgradeAppliedSchemaOutput) => void
  ): void;
  public upgradeAppliedSchema(
    args: UpgradeAppliedSchemaInput,
    cb?: (err: any, data?: UpgradeAppliedSchemaOutput) => void
  ): Promise<UpgradeAppliedSchemaOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpgradeAppliedSchemaCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Upgrades a published schema under a new minor version revision using the current contents of <code>DevelopmentSchemaArn</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceException} <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
   *   - {InvalidArnException} <p>Indicates that the provided ARN value is not valid.</p>
   *   - {RetryableConflictException} <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
   *   - {ValidationException} <p>Indicates that your request is malformed in some manner. See the exception message.</p>
   *   - {IncompatibleSchemaException} <p>Indicates a failure occurred while performing a check for backward compatibility between the specified schema and the schema that is currently applied to the directory.</p>
   *   - {AccessDeniedException} <p>Access denied. Check your permissions.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {InvalidAttachmentException} <p>Indicates that an attempt to make an attachment was invalid. For example, attaching two nodes with a link type that is not applicable to the nodes or attempting to apply a schema to a directory a second time.</p>
   *   - {LimitExceededException} <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public upgradePublishedSchema(
    args: UpgradePublishedSchemaInput
  ): Promise<UpgradePublishedSchemaOutput>;
  public upgradePublishedSchema(
    args: UpgradePublishedSchemaInput,
    cb: (err: any, data?: UpgradePublishedSchemaOutput) => void
  ): void;
  public upgradePublishedSchema(
    args: UpgradePublishedSchemaInput,
    cb?: (err: any, data?: UpgradePublishedSchemaOutput) => void
  ): Promise<UpgradePublishedSchemaOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpgradePublishedSchemaCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
