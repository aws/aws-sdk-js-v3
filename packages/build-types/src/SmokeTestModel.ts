/**
 * Represents a parsed smoke.json file.
*/
export interface SmokeTestModel {
    /**
     * The version of smoke test document.
     */
    version: number;
    /**
     * The region to use should no alternative be supplied via the test runner's execution environment.
     */
    defaultRegion: string;
    testCases: SmokeTestCase[];
}

/**
 * A smoke test case contained within a smoke test model in smoke.json.
*/
export interface SmokeTestCase {
    /**
     * The operation under test.
     * This name must appear as an operation in the model of the service version under test.
     */
    operationName: string;
    /**
     * A hash of arguments to pass to the operation under test.
     */
    input: object;
    /**
     * Whether the test should expect an error-level (4xx or 5xx) HTTP status code.
     * If false, the status code is expected to be between 200 and 299, inclusive.
    */
    errorExpectedFromService: boolean;
}