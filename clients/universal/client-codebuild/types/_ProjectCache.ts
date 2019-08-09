/**
 * <p>Information about the cache for the build project.</p>
 */
export interface _ProjectCache {
  /**
   * <p>The type of cache used by the build project. Valid values include:</p> <ul> <li> <p> <code>NO_CACHE</code>: The build project does not use any cache.</p> </li> <li> <p> <code>S3</code>: The build project reads and writes from and to S3.</p> </li> <li> <p> <code>LOCAL</code>: The build project stores a cache locally on a build host that is only available to that build host.</p> </li> </ul>
   */
  type: "NO_CACHE" | "S3" | "LOCAL" | string;

  /**
   * <p>Information about the cache location: </p> <ul> <li> <p> <code>NO_CACHE</code> or <code>LOCAL</code>: This value is ignored.</p> </li> <li> <p> <code>S3</code>: This is the S3 bucket name/prefix.</p> </li> </ul>
   */
  location?: string;

  /**
   * <p> If you use a <code>LOCAL</code> cache, the local cache mode. You can use one or more local cache modes at the same time. </p> <ul> <li> <p> <code>LOCAL_SOURCE_CACHE</code> mode caches Git metadata for primary and secondary sources. After the cache is created, subsequent builds pull only the change between commits. This mode is a good choice for projects with a clean working directory and a source that is a large Git repository. If you choose this option and your project does not use a Git repository (GitHub, GitHub Enterprise, or Bitbucket), the option is ignored. </p> </li> <li> <p> <code>LOCAL_DOCKER_LAYER_CACHE</code> mode caches existing Docker layers. This mode is a good choice for projects that build or pull large Docker images. It can prevent the performance issues caused by pulling large Docker images down from the network. </p> <note> <ul> <li> <p> You can use a Docker layer cache in the Linux environment only. </p> </li> <li> <p> The <code>privileged</code> flag must be set so that your project has the required Docker permissions. </p> </li> <li> <p> You should consider the security implications before you use a Docker layer cache. </p> </li> </ul> </note> </li> </ul> <ul> <li> <p> <code>LOCAL_CUSTOM_CACHE</code> mode caches directories you specify in the buildspec file. This mode is a good choice if your build scenario is not suited to one of the other three local cache modes. If you use a custom cache: </p> <ul> <li> <p> Only directories can be specified for caching. You cannot specify individual files. </p> </li> <li> <p> Symlinks are used to reference cached directories. </p> </li> <li> <p> Cached directories are linked to your build before it downloads its project sources. Cached items are overriden if a source item has the same name. Directories are specified using cache paths in the buildspec file. </p> </li> </ul> </li> </ul>
   */
  modes?:
    | Array<
        | "LOCAL_DOCKER_LAYER_CACHE"
        | "LOCAL_SOURCE_CACHE"
        | "LOCAL_CUSTOM_CACHE"
        | string
      >
    | Iterable<
        | "LOCAL_DOCKER_LAYER_CACHE"
        | "LOCAL_SOURCE_CACHE"
        | "LOCAL_CUSTOM_CACHE"
        | string
      >;
}

export interface _UnmarshalledProjectCache extends _ProjectCache {
  /**
   * <p> If you use a <code>LOCAL</code> cache, the local cache mode. You can use one or more local cache modes at the same time. </p> <ul> <li> <p> <code>LOCAL_SOURCE_CACHE</code> mode caches Git metadata for primary and secondary sources. After the cache is created, subsequent builds pull only the change between commits. This mode is a good choice for projects with a clean working directory and a source that is a large Git repository. If you choose this option and your project does not use a Git repository (GitHub, GitHub Enterprise, or Bitbucket), the option is ignored. </p> </li> <li> <p> <code>LOCAL_DOCKER_LAYER_CACHE</code> mode caches existing Docker layers. This mode is a good choice for projects that build or pull large Docker images. It can prevent the performance issues caused by pulling large Docker images down from the network. </p> <note> <ul> <li> <p> You can use a Docker layer cache in the Linux environment only. </p> </li> <li> <p> The <code>privileged</code> flag must be set so that your project has the required Docker permissions. </p> </li> <li> <p> You should consider the security implications before you use a Docker layer cache. </p> </li> </ul> </note> </li> </ul> <ul> <li> <p> <code>LOCAL_CUSTOM_CACHE</code> mode caches directories you specify in the buildspec file. This mode is a good choice if your build scenario is not suited to one of the other three local cache modes. If you use a custom cache: </p> <ul> <li> <p> Only directories can be specified for caching. You cannot specify individual files. </p> </li> <li> <p> Symlinks are used to reference cached directories. </p> </li> <li> <p> Cached directories are linked to your build before it downloads its project sources. Cached items are overriden if a source item has the same name. Directories are specified using cache paths in the buildspec file. </p> </li> </ul> </li> </ul>
   */
  modes?: Array<
    | "LOCAL_DOCKER_LAYER_CACHE"
    | "LOCAL_SOURCE_CACHE"
    | "LOCAL_CUSTOM_CACHE"
    | string
  >;
}
