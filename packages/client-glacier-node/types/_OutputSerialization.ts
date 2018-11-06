import {_CSVOutput, _UnmarshalledCSVOutput} from './_CSVOutput';

/**
 * <p>Describes how the select output is serialized.</p>
 */
export interface _OutputSerialization {
    /**
     * <p>Describes the serialization of CSV-encoded query results.</p>
     */
    csv?: _CSVOutput;
}

export interface _UnmarshalledOutputSerialization extends _OutputSerialization {
    /**
     * <p>Describes the serialization of CSV-encoded query results.</p>
     */
    csv?: _UnmarshalledCSVOutput;
}