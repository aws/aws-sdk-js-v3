import {
  _PipelineConfig,
  _UnmarshalledPipelineConfig
} from "./_PipelineConfig";

/**
 * <p>Describes a resolver.</p>
 */
export interface _Resolver {
  /**
   * <p>The resolver type name.</p>
   */
  typeName?: string;

  /**
   * <p>The resolver field name.</p>
   */
  fieldName?: string;

  /**
   * <p>The resolver data source name.</p>
   */
  dataSourceName?: string;

  /**
   * <p>The resolver ARN.</p>
   */
  resolverArn?: string;

  /**
   * <p>The request mapping template.</p>
   */
  requestMappingTemplate?: string;

  /**
   * <p>The response mapping template.</p>
   */
  responseMappingTemplate?: string;

  /**
   * <p>The resolver type.</p> <ul> <li> <p> <b>UNIT</b>: A UNIT resolver type. A UNIT resolver is the default resolver type. A UNIT resolver enables you to execute a GraphQL query against a single data source.</p> </li> <li> <p> <b>PIPELINE</b>: A PIPELINE resolver type. A PIPELINE resolver enables you to execute a series of <code>Function</code> in a serial manner. You can use a pipeline resolver to execute a GraphQL query against multiple data sources.</p> </li> </ul>
   */
  kind?: "UNIT" | "PIPELINE" | string;

  /**
   * <p>The <code>PipelineConfig</code>.</p>
   */
  pipelineConfig?: _PipelineConfig;
}

export interface _UnmarshalledResolver extends _Resolver {
  /**
   * <p>The <code>PipelineConfig</code>.</p>
   */
  pipelineConfig?: _UnmarshalledPipelineConfig;
}
