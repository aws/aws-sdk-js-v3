/**
 * <p>Describes a <code>COPY</code> command for Amazon Redshift.</p>
 */
export interface _CopyCommand {
  /**
   * <p>The name of the target table. The table must already exist in the database.</p>
   */
  DataTableName: string;

  /**
   * <p>A comma-separated list of column names.</p>
   */
  DataTableColumns?: string;

  /**
   * <p>Optional parameters to use with the Amazon Redshift <code>COPY</code> command. For more information, see the "Optional Parameters" section of <a href="http://docs.aws.amazon.com/redshift/latest/dg/r_COPY.html">Amazon Redshift COPY command</a>. Some possible examples that would apply to Kinesis Data Firehose are as follows:</p> <p> <code>delimiter '\t' lzop;</code> - fields are delimited with "\t" (TAB character) and compressed using lzop.</p> <p> <code>delimiter '|'</code> - fields are delimited with "|" (this is the default delimiter).</p> <p> <code>delimiter '|' escape</code> - the delimiter should be escaped.</p> <p> <code>fixedwidth 'venueid:3,venuename:25,venuecity:12,venuestate:2,venueseats:6'</code> - fields are fixed width in the source, with each width specified after every column in the table.</p> <p> <code>JSON 's3://mybucket/jsonpaths.txt'</code> - data is in JSON format, and the path specified is the format of the data.</p> <p>For more examples, see <a href="http://docs.aws.amazon.com/redshift/latest/dg/r_COPY_command_examples.html">Amazon Redshift COPY command examples</a>.</p>
   */
  CopyOptions?: string;
}

export type _UnmarshalledCopyCommand = _CopyCommand;
