# @aws-sdk/external

This is an _internal_ package used by other `@aws-sdk/...` packages.

It acts as a centralized importer and re-exporter for external packages.
It applies build transforms on those packages as needed on a case-by-case basis.

You should _not_ use this package directly in your application code.
