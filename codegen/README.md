# AWS TypeScript models

This package is used to build each client in the SDK.

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
