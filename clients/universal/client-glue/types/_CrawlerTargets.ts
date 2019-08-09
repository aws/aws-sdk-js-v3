import { _S3Target, _UnmarshalledS3Target } from "./_S3Target";
import { _JdbcTarget, _UnmarshalledJdbcTarget } from "./_JdbcTarget";
import {
  _DynamoDBTarget,
  _UnmarshalledDynamoDBTarget
} from "./_DynamoDBTarget";
import { _CatalogTarget, _UnmarshalledCatalogTarget } from "./_CatalogTarget";

/**
 * <p>Specifies data stores to crawl.</p>
 */
export interface _CrawlerTargets {
  /**
   * <p>Specifies Amazon Simple Storage Service (Amazon S3) targets.</p>
   */
  S3Targets?: Array<_S3Target> | Iterable<_S3Target>;

  /**
   * <p>Specifies JDBC targets.</p>
   */
  JdbcTargets?: Array<_JdbcTarget> | Iterable<_JdbcTarget>;

  /**
   * <p>Specifies Amazon DynamoDB targets.</p>
   */
  DynamoDBTargets?: Array<_DynamoDBTarget> | Iterable<_DynamoDBTarget>;

  /**
   * <p>Specifies AWS Glue Data Catalog targets.</p>
   */
  CatalogTargets?: Array<_CatalogTarget> | Iterable<_CatalogTarget>;
}

export interface _UnmarshalledCrawlerTargets extends _CrawlerTargets {
  /**
   * <p>Specifies Amazon Simple Storage Service (Amazon S3) targets.</p>
   */
  S3Targets?: Array<_UnmarshalledS3Target>;

  /**
   * <p>Specifies JDBC targets.</p>
   */
  JdbcTargets?: Array<_UnmarshalledJdbcTarget>;

  /**
   * <p>Specifies Amazon DynamoDB targets.</p>
   */
  DynamoDBTargets?: Array<_UnmarshalledDynamoDBTarget>;

  /**
   * <p>Specifies AWS Glue Data Catalog targets.</p>
   */
  CatalogTargets?: Array<_UnmarshalledCatalogTarget>;
}
