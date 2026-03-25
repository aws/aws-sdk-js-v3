# @aws-sdk/endpoint-cache

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/endpoint-cache/latest.svg)](https://www.npmjs.com/package/@aws-sdk/endpoint-cache)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/endpoint-cache.svg)](https://www.npmjs.com/package/@aws-sdk/endpoint-cache)

### :warning: Internal API :warning:

> This is an internal package.
> That means this is used as a dependency for other, public packages, but
> should not be taken directly as a dependency in your application's `package.json`.

> If you are updating the version of this package, for example to bring in a
> bug-fix, you should do so by updating your application lockfile with
> e.g. `npm up @scope/package` or equivalent command in another
> package manager, rather than taking a direct dependency.

---

## EndpointCache

- uses `mnemonist/lru-cache` for storing the cache.
- the `set` operation stores milliseconds elapsed since the UNIX epoch in Expires param based on CachePeriodInMinutes provided in Endpoint.
- the `get` operation returns all un-expired endpoints with their Expires values.
- the `getEndpoint` operation returns a randomly selected un-expired endpoint.
