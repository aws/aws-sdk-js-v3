# @aws-sdk/create-request

This package provides function to generate request object from given client and command. A common use case for it can be generating request object and then supply
to presigners to create presigned url.

When calling the `createRequest()`, the `initialize` and `serialize` middlewares 
from both client and command are extracted and resolved into a handler. This handler
will return a promise of `HttpRequest` object.