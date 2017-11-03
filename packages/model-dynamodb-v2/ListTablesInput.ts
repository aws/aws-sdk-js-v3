/**
 * <p>Represents the input of a <code>ListTables</code> operation.</p>
 */
export interface ListTablesInput {
    /**
     * <p>The first table name that this operation will evaluate. Use the value that was returned for <code>LastEvaluatedTableName</code> in a previous operation, so that you can obtain the next page of results.</p>
     */
    ExclusiveStartTableName?: string;
    
    /**
     * <p>A maximum number of table names to return. If this parameter is not specified, the limit is 100.</p>
     */
    Limit?: number;
}