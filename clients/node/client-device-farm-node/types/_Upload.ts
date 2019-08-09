/**
 * <p>An app or a set of one or more tests to upload or that have been uploaded.</p>
 */
export interface _Upload {
  /**
   * <p>The upload's ARN.</p>
   */
  arn?: string;

  /**
   * <p>The upload's file name.</p>
   */
  name?: string;

  /**
   * <p>When the upload was created.</p>
   */
  created?: Date | string | number;

  /**
   * <p>The upload's type.</p> <p>Must be one of the following values:</p> <ul> <li> <p>ANDROID_APP: An Android upload.</p> </li> <li> <p>IOS_APP: An iOS upload.</p> </li> <li> <p>WEB_APP: A web application upload.</p> </li> <li> <p>EXTERNAL_DATA: An external data upload.</p> </li> <li> <p>APPIUM_JAVA_JUNIT_TEST_PACKAGE: An Appium Java JUnit test package upload.</p> </li> <li> <p>APPIUM_JAVA_TESTNG_TEST_PACKAGE: An Appium Java TestNG test package upload.</p> </li> <li> <p>APPIUM_PYTHON_TEST_PACKAGE: An Appium Python test package upload.</p> </li> <li> <p>APPIUM_NODE_TEST_PACKAGE: An Appium Node.js test package upload.</p> </li> <li> <p>APPIUM_RUBY_TEST_PACKAGE: An Appium Ruby test package upload.</p> </li> <li> <p>APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE: An Appium Java JUnit test package upload for web apps.</p> </li> <li> <p>APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE: An Appium Java TestNG test package upload for web apps.</p> </li> <li> <p>APPIUM_WEB_PYTHON_TEST_PACKAGE: An Appium Python test package upload for web apps.</p> </li> <li> <p>APPIUM_WEB_NODE_TEST_PACKAGE: An Appium Node.js test package upload for web apps.</p> </li> <li> <p>APPIUM_WEB_RUBY_TEST_PACKAGE: An Appium Ruby test package upload for web apps.</p> </li> <li> <p>CALABASH_TEST_PACKAGE: A Calabash test package upload.</p> </li> <li> <p>INSTRUMENTATION_TEST_PACKAGE: An instrumentation upload.</p> </li> <li> <p>UIAUTOMATION_TEST_PACKAGE: A uiautomation test package upload.</p> </li> <li> <p>UIAUTOMATOR_TEST_PACKAGE: A uiautomator test package upload.</p> </li> <li> <p>XCTEST_TEST_PACKAGE: An Xcode test package upload.</p> </li> <li> <p>XCTEST_UI_TEST_PACKAGE: An Xcode UI test package upload.</p> </li> <li> <p>APPIUM_JAVA_JUNIT_TEST_SPEC: An Appium Java JUnit test spec upload.</p> </li> <li> <p>APPIUM_JAVA_TESTNG_TEST_SPEC: An Appium Java TestNG test spec upload.</p> </li> <li> <p>APPIUM_PYTHON_TEST_SPEC: An Appium Python test spec upload.</p> </li> <li> <p>APPIUM_NODE_TEST_SPEC: An Appium Node.js test spec upload.</p> </li> <li> <p>APPIUM_RUBY_TEST_SPEC: An Appium Ruby test spec upload.</p> </li> <li> <p>APPIUM_WEB_JAVA_JUNIT_TEST_SPEC: An Appium Java JUnit test spec upload for a web app.</p> </li> <li> <p>APPIUM_WEB_JAVA_TESTNG_TEST_SPEC: An Appium Java TestNG test spec upload for a web app.</p> </li> <li> <p>APPIUM_WEB_PYTHON_TEST_SPEC: An Appium Python test spec upload for a web app.</p> </li> <li> <p>APPIUM_WEB_NODE_TEST_SPEC: An Appium Node.js test spec upload for a web app.</p> </li> <li> <p>APPIUM_WEB_RUBY_TEST_SPEC: An Appium Ruby test spec upload for a web app.</p> </li> <li> <p>INSTRUMENTATION_TEST_SPEC: An instrumentation test spec upload.</p> </li> <li> <p>XCTEST_UI_TEST_SPEC: An Xcode UI test spec upload.</p> </li> </ul>
   */
  type?:
    | "ANDROID_APP"
    | "IOS_APP"
    | "WEB_APP"
    | "EXTERNAL_DATA"
    | "APPIUM_JAVA_JUNIT_TEST_PACKAGE"
    | "APPIUM_JAVA_TESTNG_TEST_PACKAGE"
    | "APPIUM_PYTHON_TEST_PACKAGE"
    | "APPIUM_NODE_TEST_PACKAGE"
    | "APPIUM_RUBY_TEST_PACKAGE"
    | "APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE"
    | "APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE"
    | "APPIUM_WEB_PYTHON_TEST_PACKAGE"
    | "APPIUM_WEB_NODE_TEST_PACKAGE"
    | "APPIUM_WEB_RUBY_TEST_PACKAGE"
    | "CALABASH_TEST_PACKAGE"
    | "INSTRUMENTATION_TEST_PACKAGE"
    | "UIAUTOMATION_TEST_PACKAGE"
    | "UIAUTOMATOR_TEST_PACKAGE"
    | "XCTEST_TEST_PACKAGE"
    | "XCTEST_UI_TEST_PACKAGE"
    | "APPIUM_JAVA_JUNIT_TEST_SPEC"
    | "APPIUM_JAVA_TESTNG_TEST_SPEC"
    | "APPIUM_PYTHON_TEST_SPEC"
    | "APPIUM_NODE_TEST_SPEC"
    | "APPIUM_RUBY_TEST_SPEC"
    | "APPIUM_WEB_JAVA_JUNIT_TEST_SPEC"
    | "APPIUM_WEB_JAVA_TESTNG_TEST_SPEC"
    | "APPIUM_WEB_PYTHON_TEST_SPEC"
    | "APPIUM_WEB_NODE_TEST_SPEC"
    | "APPIUM_WEB_RUBY_TEST_SPEC"
    | "INSTRUMENTATION_TEST_SPEC"
    | "XCTEST_UI_TEST_SPEC"
    | string;

  /**
   * <p>The upload's status.</p> <p>Must be one of the following values:</p> <ul> <li> <p>FAILED: A failed status.</p> </li> <li> <p>INITIALIZED: An initialized status.</p> </li> <li> <p>PROCESSING: A processing status.</p> </li> <li> <p>SUCCEEDED: A succeeded status.</p> </li> </ul>
   */
  status?: "INITIALIZED" | "PROCESSING" | "SUCCEEDED" | "FAILED" | string;

  /**
   * <p>The pre-signed Amazon S3 URL that was used to store a file through a corresponding PUT request.</p>
   */
  url?: string;

  /**
   * <p>The upload's metadata. For example, for Android, this contains information that is parsed from the manifest and is displayed in the AWS Device Farm console after the associated app is uploaded.</p>
   */
  metadata?: string;

  /**
   * <p>The upload's content type (for example, "application/octet-stream").</p>
   */
  contentType?: string;

  /**
   * <p>A message about the upload's result.</p>
   */
  message?: string;

  /**
   * <p>The upload's category. Allowed values include:</p> <ul> <li> <p>CURATED: An upload managed by AWS Device Farm.</p> </li> <li> <p>PRIVATE: An upload managed by the AWS Device Farm customer.</p> </li> </ul>
   */
  category?: "CURATED" | "PRIVATE" | string;
}

export interface _UnmarshalledUpload extends _Upload {
  /**
   * <p>When the upload was created.</p>
   */
  created?: Date;
}
