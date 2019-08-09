import { _CreateRemoteAccessSessionConfiguration } from "./_CreateRemoteAccessSessionConfiguration";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Creates and submits a request to start a remote access session.</p>
 */
export interface CreateRemoteAccessSessionInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the project for which you want to create a remote access session.</p>
   */
  projectArn: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the device for which you want to create a remote access session.</p>
   */
  deviceArn: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the device instance for which you want to create a remote access session.</p>
   */
  instanceArn?: string;

  /**
   * <p>The public key of the <code>ssh</code> key pair you want to use for connecting to remote devices in your remote debugging session. This is only required if <code>remoteDebugEnabled</code> is set to <code>true</code>.</p>
   */
  sshPublicKey?: string;

  /**
   * <p>Set to <code>true</code> if you want to access devices remotely for debugging in your remote access session.</p>
   */
  remoteDebugEnabled?: boolean;

  /**
   * <p>Set to <code>true</code> to enable remote recording for the remote access session.</p>
   */
  remoteRecordEnabled?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) for the app to be recorded in the remote access session.</p>
   */
  remoteRecordAppArn?: string;

  /**
   * <p>The name of the remote access session that you wish to create.</p>
   */
  name?: string;

  /**
   * <p>Unique identifier for the client. If you want access to multiple devices on the same client, you should pass the same <code>clientId</code> value in each call to <code>CreateRemoteAccessSession</code>. This is required only if <code>remoteDebugEnabled</code> is set to <code>true</code>.</p>
   */
  clientId?: string;

  /**
   * <p>The configuration information for the remote access session request.</p>
   */
  configuration?: _CreateRemoteAccessSessionConfiguration;

  /**
   * <p>The interaction mode of the remote access session. Valid values are:</p> <ul> <li> <p>INTERACTIVE: You can interact with the iOS device by viewing, touching, and rotating the screen. You <b>cannot</b> run XCUITest framework-based tests in this mode.</p> </li> <li> <p>NO_VIDEO: You are connected to the device but cannot interact with it or view the screen. This mode has the fastest test execution speed. You <b>can</b> run XCUITest framework-based tests in this mode.</p> </li> <li> <p>VIDEO_ONLY: You can view the screen but cannot touch or rotate it. You <b>can</b> run XCUITest framework-based tests and watch the screen in this mode.</p> </li> </ul>
   */
  interactionMode?: "INTERACTIVE" | "NO_VIDEO" | "VIDEO_ONLY" | string;

  /**
   * <p>When set to <code>true</code>, for private devices, Device Farm will not sign your app again. For public devices, Device Farm always signs your apps again and this parameter has no effect.</p> <p>For more information about how Device Farm re-signs your app(s), see <a href="https://aws.amazon.com/device-farm/faq/">Do you modify my app?</a> in the <i>AWS Device Farm FAQs</i>.</p>
   */
  skipAppResign?: boolean;

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
