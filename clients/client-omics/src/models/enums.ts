// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const Accelerators = {
  GPU: "GPU",
} as const;
/**
 * @public
 */
export type Accelerators = (typeof Accelerators)[keyof typeof Accelerators];

/**
 * @public
 * @enum
 */
export const ShareStatus = {
  /**
   * The share is activated
   */
  ACTIVATING: "ACTIVATING",
  /**
   * The share is active and can be used
   */
  ACTIVE: "ACTIVE",
  /**
   * The share has been deleted
   */
  DELETED: "DELETED",
  /**
   * The share is being deleted
   */
  DELETING: "DELETING",
  /**
   * The share has failed to activate or delete
   */
  FAILED: "FAILED",
  /**
   * The share has been created but is not yet active
   */
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type ShareStatus = (typeof ShareStatus)[keyof typeof ShareStatus];

/**
 * @public
 * @enum
 */
export const ReadSetActivationJobStatus = {
  CANCELLED: "CANCELLED",
  CANCELLING: "CANCELLING",
  COMPLETED: "COMPLETED",
  COMPLETED_WITH_FAILURES: "COMPLETED_WITH_FAILURES",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUBMITTED: "SUBMITTED",
} as const;
/**
 * @public
 */
export type ReadSetActivationJobStatus = (typeof ReadSetActivationJobStatus)[keyof typeof ReadSetActivationJobStatus];

/**
 * @public
 * @enum
 */
export const ReadSetActivationJobItemStatus = {
  FAILED: "FAILED",
  FINISHED: "FINISHED",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_STARTED: "NOT_STARTED",
} as const;
/**
 * @public
 */
export type ReadSetActivationJobItemStatus =
  (typeof ReadSetActivationJobItemStatus)[keyof typeof ReadSetActivationJobItemStatus];

/**
 * @public
 * @enum
 */
export const JobStatus = {
  /**
   * The Job was cancelled
   */
  CANCELLED: "CANCELLED",
  /**
   * The Job has completed
   */
  COMPLETED: "COMPLETED",
  /**
   * The Job completed with failed runs
   */
  COMPLETED_WITH_FAILURES: "COMPLETED_WITH_FAILURES",
  /**
   * The Job failed
   */
  FAILED: "FAILED",
  /**
   * The Job is executing
   */
  IN_PROGRESS: "IN_PROGRESS",
  /**
   * The Job has been submitted to run
   */
  SUBMITTED: "SUBMITTED",
} as const;
/**
 * @public
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

/**
 * @public
 * @enum
 */
export const EncryptionType = {
  /**
   * KMS
   */
  KMS: "KMS",
} as const;
/**
 * @public
 */
export type EncryptionType = (typeof EncryptionType)[keyof typeof EncryptionType];

/**
 * @public
 * @enum
 */
export const StoreFormat = {
  /**
   * GFF3 Format
   */
  GFF: "GFF",
  /**
   * TSV Format
   */
  TSV: "TSV",
  /**
   * VCF Format
   */
  VCF: "VCF",
} as const;
/**
 * @public
 */
export type StoreFormat = (typeof StoreFormat)[keyof typeof StoreFormat];

/**
 * @public
 * @enum
 */
export const AnnotationType = {
  /**
   * Contains contig and 1-base position
   */
  CHR_POS: "CHR_POS",
  /**
   * Contains contig, 1-base position, ref and alt allele information
   */
  CHR_POS_REF_ALT: "CHR_POS_REF_ALT",
  /**
   * Contains contig, start, and end positions. Coordinates are 1-based
   */
  CHR_START_END_ONE_BASE: "CHR_START_END_ONE_BASE",
  /**
   * Contains contig, start, end, ref and alt allele information. Coordinates are 1-based
   */
  CHR_START_END_REF_ALT_ONE_BASE: "CHR_START_END_REF_ALT_ONE_BASE",
  /**
   * Contains contig, start, end, ref and alt allele information. Coordinates are 0-based
   */
  CHR_START_END_REF_ALT_ZERO_BASE: "CHR_START_END_REF_ALT_ZERO_BASE",
  /**
   * Contains contig, start, and end positions. Coordinates are 0-based
   */
  CHR_START_END_ZERO_BASE: "CHR_START_END_ZERO_BASE",
  /**
   * Generic text file. No genomic information
   */
  GENERIC: "GENERIC",
} as const;
/**
 * @public
 */
export type AnnotationType = (typeof AnnotationType)[keyof typeof AnnotationType];

/**
 * @public
 * @enum
 */
export const FormatToHeaderKey = {
  ALT: "ALT",
  CHR: "CHR",
  END: "END",
  POS: "POS",
  REF: "REF",
  START: "START",
} as const;
/**
 * @public
 */
export type FormatToHeaderKey = (typeof FormatToHeaderKey)[keyof typeof FormatToHeaderKey];

/**
 * @public
 * @enum
 */
export const SchemaValueType = {
  /**
   * BOOLEAN type
   */
  BOOLEAN: "BOOLEAN",
  /**
   * DOUBLE type
   */
  DOUBLE: "DOUBLE",
  /**
   * FLOAT type
   */
  FLOAT: "FLOAT",
  /**
   * INT type
   */
  INT: "INT",
  /**
   * LONG type
   */
  LONG: "LONG",
  /**
   * STRING type
   */
  STRING: "STRING",
} as const;
/**
 * @public
 */
export type SchemaValueType = (typeof SchemaValueType)[keyof typeof SchemaValueType];

/**
 * @public
 * @enum
 */
export const StoreStatus = {
  /**
   * The Store is active
   */
  ACTIVE: "ACTIVE",
  /**
   * The Store is being created
   */
  CREATING: "CREATING",
  /**
   * The Store is deleting
   */
  DELETING: "DELETING",
  /**
   * The Store creation failed
   */
  FAILED: "FAILED",
  /**
   * The Store is updating
   */
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type StoreStatus = (typeof StoreStatus)[keyof typeof StoreStatus];

/**
 * @public
 * @enum
 */
export const VersionStatus = {
  /**
   * The Version is active
   */
  ACTIVE: "ACTIVE",
  /**
   * The Version is being created
   */
  CREATING: "CREATING",
  /**
   * The Version is deleting
   */
  DELETING: "DELETING",
  /**
   * The Version creation failed
   */
  FAILED: "FAILED",
  /**
   * The Version is updating
   */
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type VersionStatus = (typeof VersionStatus)[keyof typeof VersionStatus];

/**
 * @public
 * @enum
 */
export const CacheBehavior = {
  CACHE_ALWAYS: "CACHE_ALWAYS",
  CACHE_ON_FAILURE: "CACHE_ON_FAILURE",
} as const;
/**
 * @public
 */
export type CacheBehavior = (typeof CacheBehavior)[keyof typeof CacheBehavior];

/**
 * @public
 * @enum
 */
export const ReadSetPartSource = {
  SOURCE1: "SOURCE1",
  SOURCE2: "SOURCE2",
} as const;
/**
 * @public
 */
export type ReadSetPartSource = (typeof ReadSetPartSource)[keyof typeof ReadSetPartSource];

/**
 * @public
 * @enum
 */
export const FileType = {
  BAM: "BAM",
  CRAM: "CRAM",
  FASTQ: "FASTQ",
  UBAM: "UBAM",
} as const;
/**
 * @public
 */
export type FileType = (typeof FileType)[keyof typeof FileType];

/**
 * @public
 * @enum
 */
export const RunCacheStatus = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  FAILED: "FAILED",
} as const;
/**
 * @public
 */
export type RunCacheStatus = (typeof RunCacheStatus)[keyof typeof RunCacheStatus];

/**
 * @public
 * @enum
 */
export const ETagAlgorithmFamily = {
  MD5UP: "MD5up",
  SHA256UP: "SHA256up",
  SHA512UP: "SHA512up",
} as const;
/**
 * @public
 */
export type ETagAlgorithmFamily = (typeof ETagAlgorithmFamily)[keyof typeof ETagAlgorithmFamily];

/**
 * @public
 * @enum
 */
export const SequenceStoreStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type SequenceStoreStatus = (typeof SequenceStoreStatus)[keyof typeof SequenceStoreStatus];

/**
 * @public
 * @enum
 */
export const SourceReferenceType = {
  BRANCH: "BRANCH",
  COMMIT: "COMMIT",
  TAG: "TAG",
} as const;
/**
 * @public
 */
export type SourceReferenceType = (typeof SourceReferenceType)[keyof typeof SourceReferenceType];

/**
 * @public
 * @enum
 */
export const WorkflowEngine = {
  CWL: "CWL",
  NEXTFLOW: "NEXTFLOW",
  WDL: "WDL",
  WDL_LENIENT: "WDL_LENIENT",
} as const;
/**
 * @public
 */
export type WorkflowEngine = (typeof WorkflowEngine)[keyof typeof WorkflowEngine];

/**
 * @public
 * @enum
 */
export const StorageType = {
  DYNAMIC: "DYNAMIC",
  STATIC: "STATIC",
} as const;
/**
 * @public
 */
export type StorageType = (typeof StorageType)[keyof typeof StorageType];

/**
 * @public
 * @enum
 */
export const WorkflowStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETED: "DELETED",
  FAILED: "FAILED",
  INACTIVE: "INACTIVE",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type WorkflowStatus = (typeof WorkflowStatus)[keyof typeof WorkflowStatus];

/**
 * @public
 * @enum
 */
export const CreationType = {
  IMPORT: "IMPORT",
  UPLOAD: "UPLOAD",
} as const;
/**
 * @public
 */
export type CreationType = (typeof CreationType)[keyof typeof CreationType];

/**
 * @public
 * @enum
 */
export const ETagAlgorithm = {
  BAM_MD5UP: "BAM_MD5up",
  BAM_SHA256UP: "BAM_SHA256up",
  BAM_SHA512UP: "BAM_SHA512up",
  CRAM_MD5UP: "CRAM_MD5up",
  CRAM_SHA256UP: "CRAM_SHA256up",
  CRAM_SHA512UP: "CRAM_SHA512up",
  FASTQ_MD5UP: "FASTQ_MD5up",
  FASTQ_SHA256UP: "FASTQ_SHA256up",
  FASTQ_SHA512UP: "FASTQ_SHA512up",
} as const;
/**
 * @public
 */
export type ETagAlgorithm = (typeof ETagAlgorithm)[keyof typeof ETagAlgorithm];

/**
 * @public
 * @enum
 */
export const ReadSetExportJobItemStatus = {
  FAILED: "FAILED",
  FINISHED: "FINISHED",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_STARTED: "NOT_STARTED",
} as const;
/**
 * @public
 */
export type ReadSetExportJobItemStatus = (typeof ReadSetExportJobItemStatus)[keyof typeof ReadSetExportJobItemStatus];

/**
 * @public
 * @enum
 */
export const ReadSetExportJobStatus = {
  CANCELLED: "CANCELLED",
  CANCELLING: "CANCELLING",
  COMPLETED: "COMPLETED",
  COMPLETED_WITH_FAILURES: "COMPLETED_WITH_FAILURES",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUBMITTED: "SUBMITTED",
} as const;
/**
 * @public
 */
export type ReadSetExportJobStatus = (typeof ReadSetExportJobStatus)[keyof typeof ReadSetExportJobStatus];

/**
 * @public
 * @enum
 */
export const ShareResourceType = {
  /**
   * The share is on an annotation store
   */
  ANNOTATION_STORE: "ANNOTATION_STORE",
  /**
   * The share is on a variant store
   */
  VARIANT_STORE: "VARIANT_STORE",
  /**
   * The share is on a workflow
   */
  WORKFLOW: "WORKFLOW",
} as const;
/**
 * @public
 */
export type ShareResourceType = (typeof ShareResourceType)[keyof typeof ShareResourceType];

/**
 * @public
 * @enum
 */
export const ReadSetFile = {
  INDEX: "INDEX",
  SOURCE1: "SOURCE1",
  SOURCE2: "SOURCE2",
} as const;
/**
 * @public
 */
export type ReadSetFile = (typeof ReadSetFile)[keyof typeof ReadSetFile];

/**
 * @public
 * @enum
 */
export const ReadSetImportJobItemStatus = {
  FAILED: "FAILED",
  FINISHED: "FINISHED",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_STARTED: "NOT_STARTED",
} as const;
/**
 * @public
 */
export type ReadSetImportJobItemStatus = (typeof ReadSetImportJobItemStatus)[keyof typeof ReadSetImportJobItemStatus];

/**
 * @public
 * @enum
 */
export const ReadSetImportJobStatus = {
  CANCELLED: "CANCELLED",
  CANCELLING: "CANCELLING",
  COMPLETED: "COMPLETED",
  COMPLETED_WITH_FAILURES: "COMPLETED_WITH_FAILURES",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUBMITTED: "SUBMITTED",
} as const;
/**
 * @public
 */
export type ReadSetImportJobStatus = (typeof ReadSetImportJobStatus)[keyof typeof ReadSetImportJobStatus];

/**
 * @public
 * @enum
 */
export const ReadSetStatus = {
  ACTIVATING: "ACTIVATING",
  ACTIVE: "ACTIVE",
  ARCHIVED: "ARCHIVED",
  DELETED: "DELETED",
  DELETING: "DELETING",
  PROCESSING_UPLOAD: "PROCESSING_UPLOAD",
  UPLOAD_FAILED: "UPLOAD_FAILED",
} as const;
/**
 * @public
 */
export type ReadSetStatus = (typeof ReadSetStatus)[keyof typeof ReadSetStatus];

/**
 * @public
 * @enum
 */
export const ReferenceFile = {
  INDEX: "INDEX",
  SOURCE: "SOURCE",
} as const;
/**
 * @public
 */
export type ReferenceFile = (typeof ReferenceFile)[keyof typeof ReferenceFile];

/**
 * @public
 * @enum
 */
export const ReferenceImportJobItemStatus = {
  FAILED: "FAILED",
  FINISHED: "FINISHED",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_STARTED: "NOT_STARTED",
} as const;
/**
 * @public
 */
export type ReferenceImportJobItemStatus =
  (typeof ReferenceImportJobItemStatus)[keyof typeof ReferenceImportJobItemStatus];

/**
 * @public
 * @enum
 */
export const ReferenceImportJobStatus = {
  CANCELLED: "CANCELLED",
  CANCELLING: "CANCELLING",
  COMPLETED: "COMPLETED",
  COMPLETED_WITH_FAILURES: "COMPLETED_WITH_FAILURES",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUBMITTED: "SUBMITTED",
} as const;
/**
 * @public
 */
export type ReferenceImportJobStatus = (typeof ReferenceImportJobStatus)[keyof typeof ReferenceImportJobStatus];

/**
 * @public
 * @enum
 */
export const ReferenceCreationType = {
  IMPORT: "IMPORT",
} as const;
/**
 * @public
 */
export type ReferenceCreationType = (typeof ReferenceCreationType)[keyof typeof ReferenceCreationType];

/**
 * @public
 * @enum
 */
export const ReferenceStatus = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  DELETING: "DELETING",
} as const;
/**
 * @public
 */
export type ReferenceStatus = (typeof ReferenceStatus)[keyof typeof ReferenceStatus];

/**
 * @public
 * @enum
 */
export const RunExport = {
  DEFINITION: "DEFINITION",
} as const;
/**
 * @public
 */
export type RunExport = (typeof RunExport)[keyof typeof RunExport];

/**
 * @public
 * @enum
 */
export const RunLogLevel = {
  ALL: "ALL",
  ERROR: "ERROR",
  FATAL: "FATAL",
  OFF: "OFF",
} as const;
/**
 * @public
 */
export type RunLogLevel = (typeof RunLogLevel)[keyof typeof RunLogLevel];

/**
 * @public
 * @enum
 */
export const RunRetentionMode = {
  REMOVE: "REMOVE",
  RETAIN: "RETAIN",
} as const;
/**
 * @public
 */
export type RunRetentionMode = (typeof RunRetentionMode)[keyof typeof RunRetentionMode];

/**
 * @public
 * @enum
 */
export const RunStatus = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  DELETED: "DELETED",
  FAILED: "FAILED",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  STOPPING: "STOPPING",
} as const;
/**
 * @public
 */
export type RunStatus = (typeof RunStatus)[keyof typeof RunStatus];

/**
 * @public
 * @enum
 */
export const WorkflowType = {
  PRIVATE: "PRIVATE",
  READY2RUN: "READY2RUN",
} as const;
/**
 * @public
 */
export type WorkflowType = (typeof WorkflowType)[keyof typeof WorkflowType];

/**
 * @public
 * @enum
 */
export const TaskStatus = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  STOPPING: "STOPPING",
} as const;
/**
 * @public
 */
export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];

/**
 * @public
 * @enum
 */
export const StoreType = {
  REFERENCE_STORE: "REFERENCE_STORE",
  SEQUENCE_STORE: "SEQUENCE_STORE",
} as const;
/**
 * @public
 */
export type StoreType = (typeof StoreType)[keyof typeof StoreType];

/**
 * @public
 * @enum
 */
export const WorkflowExport = {
  DEFINITION: "DEFINITION",
  README: "README",
} as const;
/**
 * @public
 */
export type WorkflowExport = (typeof WorkflowExport)[keyof typeof WorkflowExport];

/**
 * @public
 * @enum
 */
export const ResourceOwner = {
  /**
   * The resource owner is an account other than the caller
   */
  OTHER: "OTHER",
  /**
   * The resource owner is the calling account
   */
  SELF: "SELF",
} as const;
/**
 * @public
 */
export type ResourceOwner = (typeof ResourceOwner)[keyof typeof ResourceOwner];
