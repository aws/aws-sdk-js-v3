import {
  _EnvironmentVariable,
  _UnmarshalledEnvironmentVariable
} from "./_EnvironmentVariable";
import {
  _RegistryCredential,
  _UnmarshalledRegistryCredential
} from "./_RegistryCredential";

/**
 * <p>Information about the build environment of the build project.</p>
 */
export interface _ProjectEnvironment {
  /**
   * <p>The type of build environment to use for related builds.</p>
   */
  type: "WINDOWS_CONTAINER" | "LINUX_CONTAINER" | string;

  /**
   * <p>The image tag or image digest that identifies the Docker image to use for this build project. Use the following formats:</p> <ul> <li> <p>For an image tag: <code>registry/repository:tag</code>. For example, to specify an image with the tag "latest," use <code>registry/repository:latest</code>.</p> </li> <li> <p>For an image digest: <code>registry/repository@digest</code>. For example, to specify an image with the digest "sha256:cbbf2f9a99b47fc460d422812b6a5adff7dfee951d8fa2e4a98caa0382cfbdbf," use <code>registry/repository@sha256:cbbf2f9a99b47fc460d422812b6a5adff7dfee951d8fa2e4a98caa0382cfbdbf</code>.</p> </li> </ul>
   */
  image: string;

  /**
   * <p>Information about the compute resources the build project uses. Available values include:</p> <ul> <li> <p> <code>BUILD_GENERAL1_SMALL</code>: Use up to 3 GB memory and 2 vCPUs for builds.</p> </li> <li> <p> <code>BUILD_GENERAL1_MEDIUM</code>: Use up to 7 GB memory and 4 vCPUs for builds.</p> </li> <li> <p> <code>BUILD_GENERAL1_LARGE</code>: Use up to 15 GB memory and 8 vCPUs for builds.</p> </li> </ul>
   */
  computeType:
    | "BUILD_GENERAL1_SMALL"
    | "BUILD_GENERAL1_MEDIUM"
    | "BUILD_GENERAL1_LARGE"
    | string;

  /**
   * <p>A set of environment variables to make available to builds for this build project.</p>
   */
  environmentVariables?:
    | Array<_EnvironmentVariable>
    | Iterable<_EnvironmentVariable>;

  /**
   * <p>Enables running the Docker daemon inside a Docker container. Set to true only if the build project is be used to build Docker images, and the specified build environment image is not provided by AWS CodeBuild with Docker support. Otherwise, all associated builds that attempt to interact with the Docker daemon fail. You must also start the Docker daemon so that builds can interact with it. One way to do this is to initialize the Docker daemon during the install phase of your build spec by running the following build commands. (Do not run these commands if the specified build environment image is provided by AWS CodeBuild with Docker support.)</p> <p>If the operating system's base image is Ubuntu Linux:</p> <p> <code>- nohup /usr/local/bin/dockerd --host=unix:///var/run/docker.sock --host=tcp://0.0.0.0:2375 --storage-driver=overlay&amp;</code> </p> <p> <code>- timeout 15 sh -c "until docker info; do echo .; sleep 1; done"</code> </p> <p>If the operating system's base image is Alpine Linux and the previous command does not work, add the <code>-t</code> argument to <code>timeout</code>:</p> <p> <code>- nohup /usr/local/bin/dockerd --host=unix:///var/run/docker.sock --host=tcp://0.0.0.0:2375 --storage-driver=overlay&amp;</code> </p> <p> <code>- timeout -t 15 sh -c "until docker info; do echo .; sleep 1; done"</code> </p>
   */
  privilegedMode?: boolean;

  /**
   * <p>The certificate to use with this build project.</p>
   */
  certificate?: string;

  /**
   * <p> The credentials for access to a private registry.</p>
   */
  registryCredential?: _RegistryCredential;

  /**
   * <p> The type of credentials AWS CodeBuild uses to pull images in your build. There are two valid values: </p> <ul> <li> <p> <code>CODEBUILD</code> specifies that AWS CodeBuild uses its own credentials. This requires that you modify your ECR repository policy to trust AWS CodeBuild's service principal. </p> </li> <li> <p> <code>SERVICE_ROLE</code> specifies that AWS CodeBuild uses your build project's service role. </p> </li> </ul> <p> When you use a cross-account or private registry image, you must use SERVICE_ROLE credentials. When you use an AWS CodeBuild curated image, you must use CODEBUILD credentials. </p>
   */
  imagePullCredentialsType?: "CODEBUILD" | "SERVICE_ROLE" | string;
}

export interface _UnmarshalledProjectEnvironment extends _ProjectEnvironment {
  /**
   * <p>A set of environment variables to make available to builds for this build project.</p>
   */
  environmentVariables?: Array<_UnmarshalledEnvironmentVariable>;

  /**
   * <p> The credentials for access to a private registry.</p>
   */
  registryCredential?: _UnmarshalledRegistryCredential;
}
