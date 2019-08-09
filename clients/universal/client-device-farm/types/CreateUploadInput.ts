import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents a request to the create upload operation.</p>
 */
export interface CreateUploadInput {
  /**
   * <p>The ARN of the project for the upload.</p>
   */
  projectArn: string;

  /**
   * <p>The upload's file name. The name should not contain the '/' character. If uploading an iOS app, the file name needs to end with the <code>.ipa</code> extension. If uploading an Android app, the file name needs to end with the <code>.apk</code> extension. For all others, the file name must end with the <code>.zip</code> file extension.</p>
   */
  name: string;

  /**
   * <p>The upload's upload type.</p> <p>Must be one of the following values:</p> <ul> <li> <p>ANDROID_APP: An Android upload.</p> </li> <li> <p>IOS_APP: An iOS upload.</p> </li> <li> <p>WEB_APP: A web application upload.</p> </li> <li> <p>EXTERNAL_DATA: An external data upload.</p> </li> <li> <p>APPIUM_JAVA_JUNIT_TEST_PACKAGE: An Appium Java JUnit test package upload.</p> </li> <li> <p>APPIUM_JAVA_TESTNG_TEST_PACKAGE: An Appium Java TestNG test package upload.</p> </li> <li> <p>APPIUM_PYTHON_TEST_PACKAGE: An Appium Python test package upload.</p> </li> <li> <p>APPIUM_NODE_TEST_PACKAGE: An Appium Node.js test package upload.</p> </li> <li> <p>APPIUM_RUBY_TEST_PACKAGE: An Appium Ruby test package upload.</p> </li> <li> <p>APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE: An Appium Java JUnit test package upload for a web app.</p> </li> <li> <p>APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE: An Appium Java TestNG test package upload for a web app.</p> </li> <li> <p>APPIUM_WEB_PYTHON_TEST_PACKAGE: An Appium Python test package upload for a web app.</p> </li> <li> <p>APPIUM_WEB_NODE_TEST_PACKAGE: An Appium Node.js test package upload for a web app.</p> </li> <li> <p>APPIUM_WEB_RUBY_TEST_PACKAGE: An Appium Ruby test package upload for a web app.</p> </li> <li> <p>CALABASH_TEST_PACKAGE: A Calabash test package upload.</p> </li> <li> <p>INSTRUMENTATION_TEST_PACKAGE: An instrumentation upload.</p> </li> <li> <p>UIAUTOMATION_TEST_PACKAGE: A uiautomation test package upload.</p> </li> <li> <p>UIAUTOMATOR_TEST_PACKAGE: A uiautomator test package upload.</p> </li> <li> <p>XCTEST_TEST_PACKAGE: An Xcode test package upload.</p> </li> <li> <p>XCTEST_UI_TEST_PACKAGE: An Xcode UI test package upload.</p> </li> <li> <p>APPIUM_JAVA_JUNIT_TEST_SPEC: An Appium Java JUnit test spec upload.</p> </li> <li> <p>APPIUM_JAVA_TESTNG_TEST_SPEC: An Appium Java TestNG test spec upload.</p> </li> <li> <p>APPIUM_PYTHON_TEST_SPEC: An Appium Python test spec upload.</p> </li> <li> <p>APPIUM_NODE_TEST_SPEC: An Appium Node.js test spec upload.</p> </li> <li> <p>APPIUM_RUBY_TEST_SPEC: An Appium Ruby test spec upload.</p> </li> <li> <p>APPIUM_WEB_JAVA_JUNIT_TEST_SPEC: An Appium Java JUnit test spec upload for a web app.</p> </li> <li> <p>APPIUM_WEB_JAVA_TESTNG_TEST_SPEC: An Appium Java TestNG test spec upload for a web app.</p> </li> <li> <p>APPIUM_WEB_PYTHON_TEST_SPEC: An Appium Python test spec upload for a web app.</p> </li> <li> <p>APPIUM_WEB_NODE_TEST_SPEC: An Appium Node.js test spec upload for a web app.</p> </li> <li> <p>APPIUM_WEB_RUBY_TEST_SPEC: An Appium Ruby test spec upload for a web app.</p> </li> <li> <p>INSTRUMENTATION_TEST_SPEC: An instrumentation test spec upload.</p> </li> <li> <p>XCTEST_UI_TEST_SPEC: An Xcode UI test spec upload.</p> </li> </ul> <p> <b>Note</b> If you call <code>CreateUpload</code> with <code>WEB_APP</code> specified, AWS Device Farm throws an <code>ArgumentException</code> error.</p>
   */
  type:
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
   * <p>The upload's content type (for example, "application/octet-stream").</p>
   */
  contentType?: string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
