/**
 * <p>A function is a reusable entity. Multiple functions can be used to compose the resolver logic.</p>
 */
export interface _FunctionConfiguration {
  /**
   * <p>A unique ID representing the <code>Function</code> object.</p>
   */
  functionId?: string;

  /**
   * <p>The ARN of the <code>Function</code> object.</p>
   */
  functionArn?: string;

  /**
   * <p>The name of the <code>Function</code> object.</p>
   */
  name?: string;

  /**
   * <p>The <code>Function</code> description.</p>
   */
  description?: string;

  /**
   * <p>The name of the <code>DataSource</code>.</p>
   */
  dataSourceName?: string;

  /**
   * <p>The <code>Function</code> request mapping template. Functions support only the 2018-05-29 version of the request mapping template.</p>
   */
  requestMappingTemplate?: string;

  /**
   * <p>The <code>Function</code> response mapping template.</p>
   */
  responseMappingTemplate?: string;

  /**
   * <p>The version of the request mapping template. Currently only the 2018-05-29 version of the template is supported.</p>
   */
  functionVersion?: string;
}

export type _UnmarshalledFunctionConfiguration = _FunctionConfiguration;
