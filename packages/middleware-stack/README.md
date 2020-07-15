# @aws-sdk/middleware-stack

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/middleware-stack/beta.svg)](https://www.npmjs.com/package/@aws-sdk/middleware-stack)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/middleware-stack.svg)](https://www.npmjs.com/package/@aws-sdk/middleware-stack)

The package contains an implementation of middleware stack interface. Middleware
stack is a structure storing middleware in specified order and resolve these
middleware into a single handler.

A middleware stack has five `Step`s, each of them represents a specific request life cycle:

- **initialize**: The input is being prepared. Examples of typical initialization tasks include injecting default options computing derived parameters.

- **serialize**: The input is complete and ready to be serialized. Examples of typical serialization tasks include input validation and building an HTTP request from user input.

- **build**: The input has been serialized into an HTTP request, but that request may require further modification. Any request alterations will be applied to all retries. Examples of typical build tasks include injecting HTTP headers that describe a stable aspect of the request, such as `Content-Length` or a body checksum.

- **finalizeRequest**: The request is being prepared to be sent over the wire. The request in this stage should already be semantically complete and should therefore only be altered to match the recipient's expectations. Examples of typical finalization tasks include request signing and injecting hop-by-hop headers.

- **deserialize**: The response has arrived, the middleware here will deserialize the raw response object to structured response

## Adding Middleware

There are two ways to add middleware to a middleware stack. They both add middleware to specified `Step` but they provide fine-grained location control differently.

### Absolute Location

You can add middleware to specified step with:

```javascript
stack.add(middleware, {
  step: "finalizeRequest",
});
```

This approach works for most cases. Sometimes you want your middleware to be executed in the front of the `Step`, you can set the `Priority` to `high`. Set the `Priority` to `low` then this middleware will be executed at the end of `Step`:

```javascript
stack.add(middleware, {
  step: "finalizeRequest",
  priority: "high",
});
```

If multiple middleware is added to same `step` with same `priority`, the order of them is determined by the order of adding them.

### Relative Location

In some cases, you might want to execute your middleware before some other known middleware, then you can use `addRelativeTo()`:

```javascript
stack.add(middleware, {
  step: "finalizeRequest",
  name: "myMiddleware",
});
stack.addRelativeTo(anotherMiddleware, {
  step: "finalizeRequest",
  relation: "before", //or 'after'
  toMiddleware: "myMiddleware",
});
```

You need to specify the `step` in `addRelativeTo()`. This is because the middleware function signature of each step is different, middleware for different step should not be mixed. The previous middleware **must** have a unique name, this is the only way to refer a known middleware when adding middleware relatively. Note that if specified `step` doesn't have a middleware named as the value in `toMiddleware`, this middleware will fallback to be added with absolute location.

You can do this:

```javascript
stack.addRelativeTo(middleware1, {
  step: "finalizeRequest",
  name: "Middleware1",
  relation: 'before',
  toMiddleware: 'middleware2'
}); //this will fall back to `add()`
stack.addRelativeTo(middleware2, {
  step: "finalizeRequest",
  name: 'Middleware2'
  relation: "after",
  toMiddleware: "Middleware1"
}); //this will be added after middleware1
```

## Removing Middleware

You can remove middleware by name one at a time:

```javascript
stack.remove("Middleware1");
```

If you specify tags for middleware, you can remove multiple middleware at a time according to tag:

```javascript
stack.add(middleware, {
  step: "finalizeRequest",
  tags: ["final"],
});
stack.removeByTag("final");
```
