/**
 * <p>Describes a blueprint (a virtual private server image).</p>
 */
export interface _Blueprint {
  /**
   * <p>The ID for the virtual private server image (e.g., <code>app_wordpress_4_4</code> or <code>app_lamp_7_0</code>).</p>
   */
  blueprintId?: string;

  /**
   * <p>The friendly name of the blueprint (e.g., <code>Amazon Linux</code>).</p>
   */
  name?: string;

  /**
   * <p>The group name of the blueprint (e.g., <code>amazon-linux</code>).</p>
   */
  group?: string;

  /**
   * <p>The type of the blueprint (e.g., <code>os</code> or <code>app</code>).</p>
   */
  type?: "os" | "app" | string;

  /**
   * <p>The description of the blueprint.</p>
   */
  description?: string;

  /**
   * <p>A Boolean value indicating whether the blueprint is active. Inactive blueprints are listed to support customers with existing instances but are not necessarily available for launch of new instances. Blueprints are marked inactive when they become outdated due to operating system updates or new application releases.</p>
   */
  isActive?: boolean;

  /**
   * <p>The minimum bundle power required to run this blueprint. For example, you need a bundle with a power value of 500 or more to create an instance that uses a blueprint with a minimum power value of 500. <code>0</code> indicates that the blueprint runs on all instance sizes. </p>
   */
  minPower?: number;

  /**
   * <p>The version number of the operating system, application, or stack (e.g., <code>2016.03.0</code>).</p>
   */
  version?: string;

  /**
   * <p>The version code.</p>
   */
  versionCode?: string;

  /**
   * <p>The product URL to learn more about the image or blueprint.</p>
   */
  productUrl?: string;

  /**
   * <p>The end-user license agreement URL for the image or blueprint.</p>
   */
  licenseUrl?: string;

  /**
   * <p>The operating system platform (either Linux/Unix-based or Windows Server-based) of the blueprint.</p>
   */
  platform?: "LINUX_UNIX" | "WINDOWS" | string;
}

export type _UnmarshalledBlueprint = _Blueprint;
