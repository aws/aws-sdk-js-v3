# @aws-sdk/all-in-one

DO NOT take a dependency on this package for any application.
Attempting to import this package will throw an error.

This package transitively brings in all AWS SDK for JavaScript (v3)
clients and packages but does not export them.

This is used to create a runtime environment where the `@aws-sdk` clients
are available.
