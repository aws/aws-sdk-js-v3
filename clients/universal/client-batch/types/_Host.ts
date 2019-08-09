/**
 * <p>Determine whether your data volume persists on the host container instance and where it is stored. If this parameter is empty, then the Docker daemon assigns a host path for your data volume, but the data is not guaranteed to persist after the containers associated with it stop running.</p>
 */
export interface _Host {
  /**
   * <p>The path on the host container instance that is presented to the container. If this parameter is empty, then the Docker daemon has assigned a host path for you. If this parameter contains a file location, then the data volume persists at the specified location on the host container instance until you delete it manually. If the source path location does not exist on the host container instance, the Docker daemon creates it. If the location does exist, the contents of the source path folder are exported.</p>
   */
  sourcePath?: string;
}

export type _UnmarshalledHost = _Host;
