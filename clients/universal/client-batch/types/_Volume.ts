import { _Host, _UnmarshalledHost } from "./_Host";

/**
 * <p>A data volume used in a job's container properties.</p>
 */
export interface _Volume {
  /**
   * <p>The contents of the <code>host</code> parameter determine whether your data volume persists on the host container instance and where it is stored. If the host parameter is empty, then the Docker daemon assigns a host path for your data volume. However, the data is not guaranteed to persist after the containers associated with it stop running.</p>
   */
  host?: _Host;

  /**
   * <p>The name of the volume. Up to 255 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed. This name is referenced in the <code>sourceVolume</code> parameter of container definition <code>mountPoints</code>.</p>
   */
  name?: string;
}

export interface _UnmarshalledVolume extends _Volume {
  /**
   * <p>The contents of the <code>host</code> parameter determine whether your data volume persists on the host container instance and where it is stored. If the host parameter is empty, then the Docker daemon assigns a host path for your data volume. However, the data is not guaranteed to persist after the containers associated with it stop running.</p>
   */
  host?: _UnmarshalledHost;
}
