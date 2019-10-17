# AWS TypeScript models

This package is used to build each client in the SDK.

## WIP!

This currently only builds the RDS Date service. This will be updated to do
the following:

1. Automatically copy models into "model" when shipping an update from our
   internal build pipelines.
2. Automatically generate a smithy-build.json file that generates a projection
   for every `.json` model file stored in "model". Each file is considered a
   standalone model.
