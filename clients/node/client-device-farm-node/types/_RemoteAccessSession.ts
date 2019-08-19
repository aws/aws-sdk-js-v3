import { _Device, _UnmarshalledDevice } from "./_Device";
import { _DeviceMinutes, _UnmarshalledDeviceMinutes } from "./_DeviceMinutes";

/**
 * <p>Represents information about the remote access session.</p>
 */
export interface _RemoteAccessSession {
  /**
   * <p>The Amazon Resource Name (ARN) of the remote access session.</p>
   */
  arn?: string;

  /**
   * <p>The name of the remote access session.</p>
   */
  name?: string;

  /**
   * <p>The date and time the remote access session was created.</p>
   */
  created?: Date | string | number;

  /**
   * <p>The status of the remote access session. Can be any of the following:</p> <ul> <li> <p>PENDING: A pending status.</p> </li> <li> <p>PENDING_CONCURRENCY: A pending concurrency status.</p> </li> <li> <p>PENDING_DEVICE: A pending device status.</p> </li> <li> <p>PROCESSING: A processing status.</p> </li> <li> <p>SCHEDULING: A scheduling status.</p> </li> <li> <p>PREPARING: A preparing status.</p> </li> <li> <p>RUNNING: A running status.</p> </li> <li> <p>COMPLETED: A completed status.</p> </li> <li> <p>STOPPING: A stopping status.</p> </li> </ul>
   */
  status?:
    | "PENDING"
    | "PENDING_CONCURRENCY"
    | "PENDING_DEVICE"
    | "PROCESSING"
    | "SCHEDULING"
    | "PREPARING"
    | "RUNNING"
    | "COMPLETED"
    | "STOPPING"
    | string;

  /**
   * <p>The result of the remote access session. Can be any of the following:</p> <ul> <li> <p>PENDING: A pending condition.</p> </li> <li> <p>PASSED: A passing condition.</p> </li> <li> <p>WARNED: A warning condition.</p> </li> <li> <p>FAILED: A failed condition.</p> </li> <li> <p>SKIPPED: A skipped condition.</p> </li> <li> <p>ERRORED: An error condition.</p> </li> <li> <p>STOPPED: A stopped condition.</p> </li> </ul>
   */
  result?:
    | "PENDING"
    | "PASSED"
    | "WARNED"
    | "FAILED"
    | "SKIPPED"
    | "ERRORED"
    | "STOPPED"
    | string;

  /**
   * <p>A message about the remote access session.</p>
   */
  message?: string;

  /**
   * <p>The date and time the remote access session was started.</p>
   */
  started?: Date | string | number;

  /**
   * <p>The date and time the remote access session was stopped.</p>
   */
  stopped?: Date | string | number;

  /**
   * <p>The device (phone or tablet) used in the remote access session.</p>
   */
  device?: _Device;

  /**
   * <p>The Amazon Resource Name (ARN) of the instance.</p>
   */
  instanceArn?: string;

  /**
   * <p>This flag is set to <code>true</code> if remote debugging is enabled for the remote access session.</p>
   */
  remoteDebugEnabled?: boolean;

  /**
   * <p>This flag is set to <code>true</code> if remote recording is enabled for the remote access session.</p>
   */
  remoteRecordEnabled?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) for the app to be recorded in the remote access session.</p>
   */
  remoteRecordAppArn?: string;

  /**
   * <p>IP address of the EC2 host where you need to connect to remotely debug devices. Only returned if remote debugging is enabled for the remote access session.</p>
   */
  hostAddress?: string;

  /**
   * <p>Unique identifier of your client for the remote access session. Only returned if remote debugging is enabled for the remote access session.</p>
   */
  clientId?: string;

  /**
   * <p>The billing method of the remote access session. Possible values include <code>METERED</code> or <code>UNMETERED</code>. For more information about metered devices, see <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/welcome.html#welcome-terminology">AWS Device Farm terminology</a>."</p>
   */
  billingMethod?: "METERED" | "UNMETERED" | string;

  /**
   * <p>The number of minutes a device is used in a remote access session (including setup and teardown minutes).</p>
   */
  deviceMinutes?: _DeviceMinutes;

  /**
   * <p>The endpoint for the remote access sesssion.</p>
   */
  endpoint?: string;

  /**
   * <p>Unique device identifier for the remote device. Only returned if remote debugging is enabled for the remote access session.</p>
   */
  deviceUdid?: string;

  /**
   * <p>The interaction mode of the remote access session. Valid values are:</p> <ul> <li> <p>INTERACTIVE: You can interact with the iOS device by viewing, touching, and rotating the screen. You <b>cannot</b> run XCUITest framework-based tests in this mode.</p> </li> <li> <p>NO_VIDEO: You are connected to the device but cannot interact with it or view the screen. This mode has the fastest test execution speed. You <b>can</b> run XCUITest framework-based tests in this mode.</p> </li> <li> <p>VIDEO_ONLY: You can view the screen but cannot touch or rotate it. You <b>can</b> run XCUITest framework-based tests and watch the screen in this mode.</p> </li> </ul>
   */
  interactionMode?: "INTERACTIVE" | "NO_VIDEO" | "VIDEO_ONLY" | string;

  /**
   * <p>When set to <code>true</code>, for private devices, Device Farm will not sign your app again. For public devices, Device Farm always signs your apps again and this parameter has no effect.</p> <p>For more information about how Device Farm re-signs your app(s), see <a href="https://aws.amazon.com/device-farm/faq/">Do you modify my app?</a> in the <i>AWS Device Farm FAQs</i>.</p>
   */
  skipAppResign?: boolean;
}

export interface _UnmarshalledRemoteAccessSession extends _RemoteAccessSession {
  /**
   * <p>The date and time the remote access session was created.</p>
   */
  created?: Date;

  /**
   * <p>The date and time the remote access session was started.</p>
   */
  started?: Date;

  /**
   * <p>The date and time the remote access session was stopped.</p>
   */
  stopped?: Date;

  /**
   * <p>The device (phone or tablet) used in the remote access session.</p>
   */
  device?: _UnmarshalledDevice;

  /**
   * <p>The number of minutes a device is used in a remote access session (including setup and teardown minutes).</p>
   */
  deviceMinutes?: _UnmarshalledDeviceMinutes;
}
