/**
 * <p>Describes the Amazon CloudWatch logs configuration for a layer. For detailed information about members of this data type, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AgentReference.html">CloudWatch Logs Agent Reference</a>.</p>
 */
export interface _CloudWatchLogsLogStream {
  /**
   * <p>Specifies the destination log group. A log group is created automatically if it doesn't already exist. Log group names can be between 1 and 512 characters long. Allowed characters include a-z, A-Z, 0-9, '_' (underscore), '-' (hyphen), '/' (forward slash), and '.' (period).</p>
   */
  LogGroupName?: string;

  /**
   * <p>Specifies how the time stamp is extracted from logs. For more information, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AgentReference.html">CloudWatch Logs Agent Reference</a>.</p>
   */
  DatetimeFormat?: string;

  /**
   * <p>Specifies the time zone of log event time stamps.</p>
   */
  TimeZone?: "LOCAL" | "UTC" | string;

  /**
   * <p>Specifies log files that you want to push to CloudWatch Logs.</p> <p> <code>File</code> can point to a specific file or multiple files (by using wild card characters such as <code>/var/log/system.log*</code>). Only the latest file is pushed to CloudWatch Logs, based on file modification time. We recommend that you use wild card characters to specify a series of files of the same type, such as <code>access_log.2014-06-01-01</code>, <code>access_log.2014-06-01-02</code>, and so on by using a pattern like <code>access_log.*</code>. Don't use a wildcard to match multiple file types, such as <code>access_log_80</code> and <code>access_log_443</code>. To specify multiple, different file types, add another log stream entry to the configuration file, so that each log file type is stored in a different log group.</p> <p>Zipped files are not supported.</p>
   */
  File?: string;

  /**
   * <p>Specifies the range of lines for identifying a file. The valid values are one number, or two dash-delimited numbers, such as '1', '2-5'. The default value is '1', meaning the first line is used to calculate the fingerprint. Fingerprint lines are not sent to CloudWatch Logs unless all specified lines are available.</p>
   */
  FileFingerprintLines?: string;

  /**
   * <p>Specifies the pattern for identifying the start of a log message.</p>
   */
  MultiLineStartPattern?: string;

  /**
   * <p>Specifies where to start to read data (start_of_file or end_of_file). The default is start_of_file. This setting is only used if there is no state persisted for that log stream.</p>
   */
  InitialPosition?: "start_of_file" | "end_of_file" | string;

  /**
   * <p>Specifies the encoding of the log file so that the file can be read correctly. The default is <code>utf_8</code>. Encodings supported by Python <code>codecs.decode()</code> can be used here.</p>
   */
  Encoding?:
    | "ascii"
    | "big5"
    | "big5hkscs"
    | "cp037"
    | "cp424"
    | "cp437"
    | "cp500"
    | "cp720"
    | "cp737"
    | "cp775"
    | "cp850"
    | "cp852"
    | "cp855"
    | "cp856"
    | "cp857"
    | "cp858"
    | "cp860"
    | "cp861"
    | "cp862"
    | "cp863"
    | "cp864"
    | "cp865"
    | "cp866"
    | "cp869"
    | "cp874"
    | "cp875"
    | "cp932"
    | "cp949"
    | "cp950"
    | "cp1006"
    | "cp1026"
    | "cp1140"
    | "cp1250"
    | "cp1251"
    | "cp1252"
    | "cp1253"
    | "cp1254"
    | "cp1255"
    | "cp1256"
    | "cp1257"
    | "cp1258"
    | "euc_jp"
    | "euc_jis_2004"
    | "euc_jisx0213"
    | "euc_kr"
    | "gb2312"
    | "gbk"
    | "gb18030"
    | "hz"
    | "iso2022_jp"
    | "iso2022_jp_1"
    | "iso2022_jp_2"
    | "iso2022_jp_2004"
    | "iso2022_jp_3"
    | "iso2022_jp_ext"
    | "iso2022_kr"
    | "latin_1"
    | "iso8859_2"
    | "iso8859_3"
    | "iso8859_4"
    | "iso8859_5"
    | "iso8859_6"
    | "iso8859_7"
    | "iso8859_8"
    | "iso8859_9"
    | "iso8859_10"
    | "iso8859_13"
    | "iso8859_14"
    | "iso8859_15"
    | "iso8859_16"
    | "johab"
    | "koi8_r"
    | "koi8_u"
    | "mac_cyrillic"
    | "mac_greek"
    | "mac_iceland"
    | "mac_latin2"
    | "mac_roman"
    | "mac_turkish"
    | "ptcp154"
    | "shift_jis"
    | "shift_jis_2004"
    | "shift_jisx0213"
    | "utf_32"
    | "utf_32_be"
    | "utf_32_le"
    | "utf_16"
    | "utf_16_be"
    | "utf_16_le"
    | "utf_7"
    | "utf_8"
    | "utf_8_sig"
    | string;

  /**
   * <p>Specifies the time duration for the batching of log events. The minimum value is 5000ms and default value is 5000ms.</p>
   */
  BufferDuration?: number;

  /**
   * <p>Specifies the max number of log events in a batch, up to 10000. The default value is 1000.</p>
   */
  BatchCount?: number;

  /**
   * <p>Specifies the maximum size of log events in a batch, in bytes, up to 1048576 bytes. The default value is 32768 bytes. This size is calculated as the sum of all event messages in UTF-8, plus 26 bytes for each log event.</p>
   */
  BatchSize?: number;
}

export type _UnmarshalledCloudWatchLogsLogStream = _CloudWatchLogsLogStream;
