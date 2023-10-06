# AWS TypeScript models

This package is used to build each client in the SDK.

The code generation stack is made up of 3 components:

 1. [Smithy](https://github.com/smithy-lang/smithy) - the core libraries for code generation. They are not intended to contain anything specific to TypeScript or AWS SDKs.
 2. [Smithy-TypeScript](https://github.com/awslabs/smithy-typescript) - This uses Smithy to generate code for the TypeScript (JavaScript) language runtimes. While this is maintained by AWS, it is not intended to contain anything specific to AWS.
 3. [Smithy-AWS-TypeScript](https://github.com/aws/aws-sdk-js-v3/tree/docs/readme/codegen) - This is the component here in the AWS SDK for JavaScript (v3) repository. It uses the two upstream components, Smithy and Smithy-TypeScript, to generate the AWS SDK for JavaScript (v3). Anything specific to AWS should only be found in this package.

## Building

By running `./gradlew :sdk-codegen:build`, this package will:

1. Scan the `sdk-codegen` directory for JSON files. Each file is a standalone
   model that represents a service to generate.

2. Generate a `smithy-build.json` file.

   - For each model, a projection is created that uses the filename without
     ".json" as the name of the projection.
   - An `imports` value is added that imports the file.
   - The `typescript-codegen` plugin is applied. The `package` value is set
     to `@aws-sdk/client-` + the first dot (.) segment of the filename
     converted to lowercase (this segment is also the AWS SDK service ID).

3. Runs the `software.amazon.smithy.gradle.tasks.SmithyBuild` Gradle task
   to generate artifacts for each service model. Artifacts for each model
   are written to `codegen/sdk-codegen/build/smithyprojections/sdk-codegen/{filename}/typescript-codegen`
   where `{filename}` is the relative filename of a model without ".json".
   For example, `codegen/sdk-codegen/build/smithyprojections/sdk-codegen/RDS-Data.2018-08-01/typescript-codegen`
   would contain the code generated for `aws-models/RDS-Data.2018-08-01.json`.

## Troubleshooting

1. Run `./gradlew :sdk-codegen:clean` to run clean task

2. Run `./gradlew --stop` to stop the gradle daemon
